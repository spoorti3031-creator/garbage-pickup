package backend;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        UserRepository repository = new SimpleUserRepository();
        List<PickupRequest> pickups = Collections.synchronizedList(new ArrayList<>());
        List<Complaint> complaints = Collections.synchronizedList(new ArrayList<>());
        List<Announcement> announcements = Collections.synchronizedList(new ArrayList<>());
        List<Notification> notifications = Collections.synchronizedList(new ArrayList<>());

        announcements.add(new Announcement(1L, "Holiday Schedule", "Municipality offices closed on May 1; pickups resume May 2.", "2026-04-01"));
        announcements.add(new Announcement(2L, "Road Repair Alert", "Zone 5 pickup will be delayed due to street maintenance.", "2026-04-02"));

        notifications.add(new Notification(1L, "guest", "New announcement available: Holiday Schedule", "2026-04-01"));
        notifications.add(new Notification(2L, "admin", "Complaint dashboard updated.", "2026-04-02"));

        announcements.add(new Announcement(3L, "Water Supply Alert", "Scheduled water outage on May 10 for pipeline maintenance.", "2026-04-03"));
        announcements.add(new Announcement(4L, "Recycling Pickup", "Recycling bins will be collected on Tuesdays in all zones.", "2026-04-04"));
        announcements.add(new Announcement(5L, "Holiday Reminder", "Please place waste bins by 7 AM during holiday weeks.", "2026-04-05"));
        announcements.add(new Announcement(6L, "Road Safety Notice", "Roadworks on Elm Street may affect pickup routes this week.", "2026-04-06"));
        announcements.add(new Announcement(7L, "Spring Cleanup Drive", "Free bulk waste pickup May 15-17. Register at the city website.", "2026-05-07"));
        announcements.add(new Announcement(8L, "New Composting Program", "Composting bins now available for all residents. Request yours today.", "2026-05-08"));
        announcements.add(new Announcement(9L, "Street Cleaning Alert", "Street cleaning on May 20-22. Do not leave garbage on the street.", "2026-05-09"));
        announcements.add(new Announcement(10L, "Hazardous Waste Disposal", "Hazardous waste collection event on May 23. Drop-off at City Center.", "2026-05-10"));
        announcements.add(new Announcement(11L, "Holiday Weekend Schedule", "Memorial Day holiday - pickup postponed to May 28. Plan accordingly.", "2026-05-11"));
        announcements.add(new Announcement(12L, "Sanitation Tax Reminder", "Sanitation bills due by May 31. Pay online to avoid late fees.", "2026-05-12"));

        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
        System.out.println("Registering context: /api/auth/register");
        server.createContext("/api/auth/register", exchange -> handleRegister(exchange, repository));
        System.out.println("Registering context: /api/auth/login");
        server.createContext("/api/auth/login", exchange -> handleLogin(exchange, repository));
        System.out.println("Registering context: /api/pickups");
        server.createContext("/api/pickups", exchange -> handlePickups(exchange, pickups, notifications));
        System.out.println("Registering context: /api/complaints");
        server.createContext("/api/complaints", exchange -> handleComplaints(exchange, complaints, notifications));
        System.out.println("Registering context: /api/announcements");
        server.createContext("/api/announcements", exchange -> handleAnnouncements(exchange, announcements));
        System.out.println("Registering context: /api/notifications");
        server.createContext("/api/notifications", exchange -> handleNotifications(exchange, notifications));
        System.out.println("Registering context: /api/admin/summary");
        server.createContext("/api/admin/summary", exchange -> handleAdminSummary(exchange, repository, pickups, complaints, announcements));
        System.out.println("Registering context: /");
        server.createContext("/", exchange -> serveFile("index.html", exchange));
        System.out.println("Registering context: /admin.html");
        server.createContext("/admin.html", exchange -> serveFile("admin.html", exchange));
        System.out.println("Registering context: /login.html");
        server.createContext("/login.html", exchange -> serveFile("login.html", exchange));
        System.out.println("Registering context: /register.html");
        server.createContext("/register.html", exchange -> serveFile("register.html", exchange));
        System.out.println("Registering context: /complaint.html");
        server.createContext("/complaint.html", exchange -> serveFile("complaint.html", exchange));
        System.out.println("Registering context: /style.css");
        server.createContext("/style.css", exchange -> serveFile("style.css", exchange));
        System.out.println("Registering context: /script.js");
        server.createContext("/script.js", exchange -> serveFile("script.js", exchange));
        server.setExecutor(null);
        server.start();

        System.out.println("Backend HTTP server started at http://localhost:8080");
    }

    private static void handleRegister(HttpExchange exchange, UserRepository repository) throws IOException {
        if (exchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
            sendOptions(exchange);
            return;
        }
        if (!exchange.getRequestMethod().equalsIgnoreCase("POST")) {
            sendResponse(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            return;
        }

        String body = readBody(exchange);
        String username = parseJsonField(body, "username");
        String password = parseJsonField(body, "password");

        if (username.isEmpty() || password.isEmpty()) {
            sendResponse(exchange, 400, "{\"error\":\"Missing username or password\"}");
            return;
        }

        if (repository.findByUsername(username) != null) {
            sendResponse(exchange, 409, "{\"error\":\"User already exists\"}");
            return;
        }

        User user = new User(username, password);
        repository.save(user);
        sendResponse(exchange, 200, "{\"message\":\"Registered successfully!\"}");
    }

    private static void handleLogin(HttpExchange exchange, UserRepository repository) throws IOException {
        if (exchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
            sendOptions(exchange);
            return;
        }
        if (!exchange.getRequestMethod().equalsIgnoreCase("POST")) {
            sendResponse(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            return;
        }

        String body = readBody(exchange);
        String username = parseJsonField(body, "username");
        String password = parseJsonField(body, "password");

        User existing = repository.findByUsername(username);
        if (existing != null && existing.getPassword().equals(password)) {
            sendResponse(exchange, 200, "{\"message\":\"Login successful\"}");
        } else {
            sendResponse(exchange, 401, "{\"error\":\"Invalid credentials\"}");
        }
    }

    private static void handlePickups(HttpExchange exchange, List<PickupRequest> pickups, List<Notification> notifications) throws IOException {
        if (exchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
            sendOptions(exchange);
            return;
        }

        if (exchange.getRequestMethod().equalsIgnoreCase("POST")) {
            String body = readBody(exchange);
            String username = parseJsonField(body, "username");
            String location = parseJsonField(body, "location");
            String date = parseJsonField(body, "date");
            String time = parseJsonField(body, "time");

            if (username.isEmpty() || location.isEmpty() || date.isEmpty() || time.isEmpty()) {
                sendResponse(exchange, 400, "{\"error\":\"Missing pickup fields\"}");
                return;
            }

            PickupRequest request = new PickupRequest(username, location, date, time);
            pickups.add(request);
            notifications.add(new Notification((long) (notifications.size() + 1), username, "Your pickup request was submitted successfully.", "2026-04-02"));
            sendResponse(exchange, 201, "{\"message\":\"Pickup scheduled\"}");
            return;
        }

        if (exchange.getRequestMethod().equalsIgnoreCase("GET")) {
            List<String> items = new ArrayList<>();
            for (PickupRequest request : pickups) {
                items.add(String.format("{\"username\":\"%s\",\"location\":\"%s\",\"date\":\"%s\",\"time\":\"%s\"}", escape(request.getUsername()), escape(request.getLocation()), escape(request.getDate()), escape(request.getTime())));
            }
            sendList(exchange, items);
            return;
        }

        sendResponse(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
    }

    private static void handleComplaints(HttpExchange exchange, List<Complaint> complaints, List<Notification> notifications) throws IOException {
        if (exchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
            sendOptions(exchange);
            return;
        }

        if (exchange.getRequestMethod().equalsIgnoreCase("POST")) {
            String body = readBody(exchange);
            String username = parseJsonField(body, "username");
            String subject = parseJsonField(body, "subject");
            String description = parseJsonField(body, "description");
            String category = parseJsonField(body, "category");

            if (username.isEmpty() || subject.isEmpty() || description.isEmpty() || category.isEmpty()) {
                sendResponse(exchange, 400, "{\"error\":\"Missing complaint fields\"}");
                return;
            }

            Complaint complaint = new Complaint(username, subject, description, category);
            complaint.setId((long) complaints.size() + 1);
            complaints.add(complaint);
            notifications.add(new Notification((long) (notifications.size() + 1), username, "Your complaint has been received and will be reviewed.", "2026-04-02"));
            sendResponse(exchange, 201, "{\"message\":\"Complaint filed\"}");
            return;
        }

        if (exchange.getRequestMethod().equalsIgnoreCase("GET")) {
            List<String> items = new ArrayList<>();
            for (Complaint complaint : complaints) {
                items.add(String.format("{\"id\":%d,\"username\":\"%s\",\"subject\":\"%s\",\"description\":\"%s\",\"category\":\"%s\",\"status\":\"%s\"}", complaint.getId(), escape(complaint.getUsername()), escape(complaint.getSubject()), escape(complaint.getDescription()), escape(complaint.getCategory()), escape(complaint.getStatus())));
            }
            sendList(exchange, items);
            return;
        }

        sendResponse(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
    }

    private static void handleAnnouncements(HttpExchange exchange, List<Announcement> announcements) throws IOException {
        if (exchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
            sendOptions(exchange);
            return;
        }
        if (!exchange.getRequestMethod().equalsIgnoreCase("GET")) {
            sendResponse(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            return;
        }
        List<String> items = new ArrayList<>();
        for (Announcement announcement : announcements) {
            items.add(String.format("{\"id\":%d,\"title\":\"%s\",\"message\":\"%s\",\"date\":\"%s\"}", announcement.getId(), escape(announcement.getTitle()), escape(announcement.getMessage()), escape(announcement.getDate())));
        }
        sendList(exchange, items);
    }

    private static void handleNotifications(HttpExchange exchange, List<Notification> notifications) throws IOException {
        if (exchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
            sendOptions(exchange);
            return;
        }
        if (!exchange.getRequestMethod().equalsIgnoreCase("GET")) {
            sendResponse(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            return;
        }

        String query = exchange.getRequestURI().getQuery();
        String username = query != null && query.contains("user=") ? query.split("user=")[1].split("&")[0] : "";
        List<String> items = new ArrayList<>();
        for (Notification notification : notifications) {
            if (username.isEmpty() || notification.getUsername().equals(username)) {
                items.add(String.format("{\"id\":%d,\"username\":\"%s\",\"message\":\"%s\",\"date\":\"%s\",\"read\":%s}", notification.getId(), escape(notification.getUsername()), escape(notification.getMessage()), escape(notification.getDate()), notification.isRead()));
            }
        }
        sendList(exchange, items);
    }

    private static void handleAdminSummary(HttpExchange exchange, UserRepository repository, List<PickupRequest> pickups, List<Complaint> complaints, List<Announcement> announcements) throws IOException {
        if (exchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
            sendOptions(exchange);
            return;
        }
        if (!exchange.getRequestMethod().equalsIgnoreCase("GET")) {
            sendResponse(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            return;
        }

        int userCount = ((SimpleUserRepository) repository).getUserCount();
        String summary = String.format("{\"users\":%d,\"pickups\":%d,\"complaints\":%d,\"announcements\":%d}", userCount, pickups.size(), complaints.size(), announcements.size());
        sendResponse(exchange, 200, summary);
    }

    private static String readBody(HttpExchange exchange) throws IOException {
        InputStream input = exchange.getRequestBody();
        byte[] bytes = input.readAllBytes();
        return new String(bytes, StandardCharsets.UTF_8);
    }

    private static String parseJsonField(String body, String field) {
        String key = '"' + field + '"';
        int index = body.indexOf(key);
        if (index < 0) {
            return "";
        }
        int colon = body.indexOf(':', index + key.length());
        if (colon < 0) {
            return "";
        }
        int startQuote = body.indexOf('"', colon + 1);
        if (startQuote < 0) {
            return "";
        }
        int endQuote = body.indexOf('"', startQuote + 1);
        if (endQuote < 0) {
            return "";
        }
        return body.substring(startQuote + 1, endQuote);
    }

    private static String escape(String value) {
        return value.replace("\\", "\\\\").replace("\"", "\\\"");
    }

    private static void sendList(HttpExchange exchange, List<String> items) throws IOException {
        StringBuilder json = new StringBuilder();
        json.append("[");
        for (int i = 0; i < items.size(); i++) {
            json.append(items.get(i));
            if (i < items.size() - 1) {
                json.append(",");
            }
        }
        json.append("]");
        sendResponse(exchange, 200, json.toString());
    }

    private static void sendOptions(HttpExchange exchange) throws IOException {
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
        exchange.sendResponseHeaders(204, -1);
        exchange.close();
    }

    private static void sendResponse(HttpExchange exchange, int status, String body) throws IOException {
        exchange.getResponseHeaders().add("Content-Type", "application/json; charset=UTF-8");
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
        byte[] responseBytes = body.getBytes(StandardCharsets.UTF_8);
        exchange.sendResponseHeaders(status, responseBytes.length);
        try (OutputStream output = exchange.getResponseBody()) {
            output.write(responseBytes);
        }
    }

    private static void serveFile(String filename, HttpExchange exchange) throws IOException {
        Path baseDir = Paths.get(System.getProperty("user.dir")).toAbsolutePath().normalize();
        Path filePath = baseDir.resolve("frontend").resolve(filename);
        if (!Files.exists(filePath)) {
            filePath = baseDir.resolve(Paths.get("backend", "..", "frontend", filename)).normalize();
        }
        if (!Files.exists(filePath)) {
            sendResponse(exchange, 404, "{\"error\":\"File not found\"}");
            return;
        }
        String contentType = "text/plain";
        if (filename.endsWith(".html")) contentType = "text/html";
        else if (filename.endsWith(".css")) contentType = "text/css";
        else if (filename.endsWith(".js")) contentType = "application/javascript";
        byte[] content = Files.readAllBytes(filePath);
        exchange.getResponseHeaders().add("Content-Type", contentType + "; charset=UTF-8");
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.sendResponseHeaders(200, content.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(content);
        }
    }
}
