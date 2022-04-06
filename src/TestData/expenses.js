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
     date: new Date("2022-03-21")
   },
   {
     id: "2",
     category: "Social",
     amount: 42.00,
     note: "TGIF",
     date: new Date("2022-03-22")
   },
   {
     id: "3",
     category: "Social",
     amount: 72.00,
     note: "TGIF",
     date: new Date("2022-03-23")
   },
   {
     id: "4",
     category: "Food",
     amount: 32.00,
     note: "Date",
     date: new Date("2022-03-23")
   },
   {
     id: "5",
     category: "Food",
     amount: 5.00,
     note: "Lunch",
     date: new Date("2022-03-24")
   },
   {
     id: "6",
     category: "Social",
     amount: 42.00,
     note: "TGIF",
     date: new Date("2022-03-25")
   },
   {
     id: "7",
     category: "HouseHold",
     amount: 70.00,
     note: "Chairs",
     date: new Date("2022-03-26")
   },
   {
     id: "8",
     category: "Food",
     amount: 9.00,
     note: "Lunch + Dinner",
     date: new Date("2022-03-27")
   },
   {
     id: "9",
     category: "Food",
     amount: 17.00,
     note: "Lunch + Dinner",
     date: new Date("2022-03-28")
   },
   {
     id: "10",
     category: "Food",
     amount: 10.40,
     note: "Lunch + Dinner",
     date: new Date("2022-03-29")
   },
   {
     id: "11",
     category: "Food",
     amount: 12.00,
     note: "Lunch + Dinner",
     date: new Date("2022-03-30")
   },
   {
     id: "12",
     category: "Social",
     amount: 42.00,
     note: "TGIF",
     date: new Date("2022-03-30")
   },
   {
     id: "13",
     category: "Social",
     amount: 72.00,
     note: "TGIF",
     date: new Date("2022-03-31")
   },
   {
     id: "14",
     category: "Food",
     amount: 32.00,
     note: "Date",
     date: new Date("2022-04-01")
   },
   {
     id: "15",
     category: "Food",
     amount: 5.00,
     note: "Lunch",
     date: new Date("2022-04-01")
   },
   {
     id: "16",
     category: "Social",
     amount: 42.00,
     note: "TGIF",
     date: new Date("2022-04-01")
   },
   {
     id: "17",
     category: "HouseHold",
     amount: 420.00,
     note: "Rental",
     date: new Date("2022-04-01")
   },
   {
     id: "18",
     category: "Food",
     amount: 9.00,
     note: "Lunch + Dinner",
     date: new Date("2022-04-02")
   },
   {
     id: "19",
     category: "Food",
     amount: 17.00,
     note: "Lunch + Dinner",
     date: new Date("2022-04-03")
   },
   {
     id: "20",
     category: "Food",
     amount: 10.40,
     note: "Lunch + Dinner",
     date: new Date("2022-04-04")
   },
   {
     id: "21",
     category: "Food",
     amount: 12.00,
     note: "Lunch + Dinner",
     date: new Date("2022-04-05")
   },
   {
     id: "22",
     category: "Social",
     amount: 32.00,
     note: "TGIS",
     date: new Date("2022-04-02")
   },
   {
     id: "23",
     category: "Social",
     amount: 72.00,
     note: "TGIF",
     date: new Date("2022-04-01")
   },
   {
     id: "24",
     category: "Food",
     amount: 32.00,
     note: "Date",
     date: new Date("2022-04-05")
   },
   {
     id: "25",
     category: "Food",
     amount: 5.00,
     note: "Lunch",
     date: new Date("2022-04-05")
   },
   {
     id: "26",
     category: "Social",
     amount: 60.00,
     note: "TGIF",
     date: new Date("2022-04-06")
   },
   {
     id: "27",
     category: "Household",
     amount: 42.00,
     note: "Table",
     date: new Date("2022-04-06")
   },
   {
     id: "28",
     category: "Food",
     amount: 12.00,
     note: "Lunch + Dinner",
     date: new Date("2022-04-04")
   },
   {
     id: "29",
     category: "Food",
     amount: 12.00,
     note: "Lunch + Dinner",
     date: new Date("2022-04-05")
   },
   {
     id: "30",
     category: "Food",
     amount: 15.40,
     note: "Lunch + Dinner",
     date: new Date()
   },
 ];


 export default expenses;
