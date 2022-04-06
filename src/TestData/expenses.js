/***
 * This dataset is the expenses (by category) over days for testing purpose
 * This dataset is actually the array of expenses objects.
 * Each Expense Object has 5 properties -
 *  - ID (auto-increment not null) // an unique identifier for each expense object
 *  - Category (not null) // kind of expenses (eg, food, household, social)
 *  - Amount (not null) // the amount of expenses
 *  - Note (optional) // any remarkable reason or caption for expenses
 *  - Date (not null) // the date when the user spend the money (Expense)
 ***/

 const expenses = [
   {
     id: "1",
     category: "Food",
     amount: 12.00,
     note: "Lunch + Dinner",
     date: new Date("2022-04-02")
   },
   {
     id: "2",
     category: "Social",
     amount: 42.00,
     note: "TGIF",
     date: new Date("2022-04-02")
   },
   {
     id: "3",
     category: "Social",
     amount: 72.00,
     note: "TGIF",
     date: new Date("2022-04-01")
   },
   {
     id: "4",
     category: "Food",
     amount: 32.00,
     note: "Date",
     date: new Date("2022-04-01")
   },
   {
     id: "5",
     category: "Food",
     amount: 5.00,
     note: "Lunch",
     date: new Date("2022-04-01")
   },
   {
     id: "6",
     category: "Social",
     amount: 42.00,
     note: "TGIF",
     date: new Date("2022-04-03")
   },
   {
     id: "7",
     category: "HouseHold",
     amount: 420.00,
     note: "Rental",
     date: new Date("2022-04-02")
   },
   {
     id: "8",
     category: "Food",
     amount: 12.00,
     note: "Lunch + Dinner",
     date: new Date("2022-04-04")
   },
   {
     id: "9",
     category: "Food",
     amount: 12.00,
     note: "Lunch + Dinner",
     date: new Date("2022-04-05")
   },
 ];


 export default expenses;
