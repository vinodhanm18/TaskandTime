package travelexp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCConnection {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/travel_expenses";
    private static final String USER = "root";
    private static final String PASSWORD = "vinodhan1826";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL, USER, PASSWORD);
    }
}
