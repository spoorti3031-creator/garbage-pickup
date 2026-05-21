import java.util.HashMap;
import java.util.Map;

public class SimpleUserRepository implements UserRepository {
    private final Map<String, User> users = new HashMap<>();
    private long nextId = 1;

    public SimpleUserRepository() {
        // Initialize with default users for testing
        User admin = new User("admin", "admin123");
        User guest = new User("guest", "guest123");
        admin.setId(nextId++);
        guest.setId(nextId++);
        users.put("admin", admin);
        users.put("guest", guest);
    }

    @Override
    public User save(User user) {
        if (user.getId() == null) {
            user.setId(nextId++);
        }
        users.put(user.getUsername(), user);
        return user;
    }

    @Override
    public User findByUsername(String username) {
        return users.get(username);
    }

    public int getUserCount() {
        return users.size();
    }
}
