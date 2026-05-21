public class Notification {
    private Long id;
    private String username;
    private String message;
    private String date;
    private boolean read;

    public Notification() {}

    public Notification(Long id, String username, String message, String date) {
        this.id = id;
        this.username = username;
        this.message = message;
        this.date = date;
        this.read = false;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
    public boolean isRead() { return read; }
    public void setRead(boolean read) { this.read = read; }
}
