package travelexp;

import java.sql.*;
import java.util.Scanner;

public class TravelExpenseTracker {
    public static void main(String[] args) {
        try {
            Connection connection = JDBCConnection.getConnection();
            if (connection != null) {
                System.out.println("Connected to the database.");

                Scanner scanner = new Scanner(System.in);
                int choice;

                do {
                    System.out.println("\nChoose an option:");
                    System.out.println("1. Add expense");
                    System.out.println("2. Generate expense report");
                    System.out.println("3. Exit");
                    System.out.print("Enter your choice: ");
                    choice = scanner.nextInt();
                    scanner.nextLine(); // Consume newline character

                    switch (choice) {
                        case 1:
                            addExpense(connection, scanner);
                            break;
                        case 2:
                            generateExpenseReport(connection);
                            break;
                        case 3:
                            System.out.println("Exiting the application.");
                            break;
                        default:
                            System.out.println("Invalid choice. Please try again.");
                            break;
                    }
                } while (choice != 3);

                connection.close();
            } else {
                System.out.println("Failed to connect to the database.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void addExpense(Connection connection, Scanner scanner) throws SQLException {
        System.out.println("\nEnter expense details:");
        System.out.print("Category: ");
        String category = scanner.nextLine();
        System.out.print("Description: ");
        String description = scanner.nextLine();
        System.out.print("Amount: ");
        double amount = scanner.nextDouble();

        // Create TravelExpense object
        TravelExpense expense = new TravelExpense();
        expense.setCategory(category);
        expense.setDescription(description);
        expense.setAmount(amount);

        // Save expense to the database
        saveExpense(connection, expense);
    }

    private static void saveExpense(Connection connection, TravelExpense expense) throws SQLException {
        String sql = "INSERT INTO expenses (category, description, amount) VALUES (?, ?, ?)";

        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, expense.getCategory());
            statement.setString(2, expense.getDescription());
            statement.setDouble(3, expense.getAmount());

            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Expense added successfully.");
            } else {
                System.out.println("Failed to add the expense.");
            }
        }
    }

    private static void generateExpenseReport(Connection connection) throws SQLException {
        String sql = "SELECT * FROM expenses";

        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(sql)) {

            System.out.println("\nExpense Report:");
            System.out.println("ID\tCategory\tDescription\tAmount");
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String category = resultSet.getString("category");
                String description = resultSet.getString("description");
                double amount = resultSet.getDouble("amount");

                System.out.println(id + "\t" + category + "\t" + description + "\t" + amount);
            }
        }
    }
}
