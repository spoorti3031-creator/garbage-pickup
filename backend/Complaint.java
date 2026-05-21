public class Complaint {
    private Long id;
    private String username;
    private String subject;
    private String description;
    private String category;
    private String status;

    public Complaint() {}

    public Complaint(String username, String subject, String description, String category) {
        this.username = username;
        this.subject = subject;
        this.description = description;
        this.category = category;
        this.status = "Submitted";
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
