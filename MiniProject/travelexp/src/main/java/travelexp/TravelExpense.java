package travelexp;

public class TravelExpense implements Expense {
 private int id;
 private String category;
 private String description;
 private double amount;

 public int getId() {
     return id;
 }

 public void setId(int id) { 
     this.id = id;
 }

 public String getCategory() {
     return category;
 }

 public void setCategory(String category) {
     this.category = category;
 }

 public String getDescription() {
     return description;
 }

 public void setDescription(String description) {
     this.description = description;
 }

 public double getAmount() {
     return amount;
 }

 public void setAmount(double amount) {
     this.amount = amount;
 }

 public TravelExpense(int id, String category, String description, double amount) {
     this.id = id;
     this.category = category;
     this.description = description;
     this.amount = amount;
 }

 public TravelExpense() {
 }

 
 @Override
 public double calculateReimbursement() {
     
     return amount * 0.8;
 }

 
 @Override
 public String toString() {
     return "TravelExpense{" +
             "id=" + id +
             ", category='" + category + '\'' +
             ", description='" + description + '\'' +
             ", amount=" + amount +
             '}';
 }
}
