package backend;

import java.util.HashMap;
import java.util.Map;

public class SimpleUserRepository implements UserRepository {
    private final Map<String, User> users = new HashMap<>();
    private long nextId = 1;

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
