package backend;

public class PickupRequest {
    private Long id;
    private String username;
    private String location;
    private String date;
    private String time;

    public PickupRequest() {}

    public PickupRequest(String username, String location, String date, String time) {
        this.username = username;
        this.location = location;
        this.date = date;
        this.time = time;
    }

    // Getters and setters
    public Long getId() { return id; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }
}
