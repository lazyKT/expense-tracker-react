/**
 * This file contains functions to access (Read/Write) local Storage
 **/


/* Reformat the data fetched from local storage
 * Since data are converted into JSON String before stored into LocalStorage,
 * All data reterived from local storage are in string type
 * This function does the necessary conversion like convert id back to Int, amount back to floats
 */
function formatData (expense) {
  return {
    ...expense,
    id: parseInt(expense.id),
    date: new Date(expense.date),
    amount: Number(expense.amount)
  };
}


/**
 * Read the local storage and return the values as the JavaScript Array
 **/
export function readExpenses () {
  try {
    const expensesStr = localStorage.getItem("expenses");
    return expensesStr
      ? JSON.parse(expensesStr).map(e => formatData(e))
      : [];
  }
  catch (err) {
    if (err?.message)
      return { error: true, message: err.message };
    return { error: true, message: "Unknown error occured"};
  }
}


/**
 * Write/Save multiple expenses data into local storage.
 * This function is used for the dummy data load
 **/
export function bulkWrite (_expenses) {
  try {
    const jsonStr = JSON.stringify(_expenses);
    console.log(jsonStr);

    localStorage.setItem("expenses", jsonStr);

    return { error: false };
  }
  catch (err) {
    if (err?.message)
      return { error: true, message: err.message };
    return { error: true, message: "Unknown error occured"};
  }
}


/**
 * Write/Save new expenses data into local storage
 **/
export function writeExpenses (newExpense) {
  try {
    let expenses = readExpenses(); // read the expenses data from localstorage

    /** Get the latest expense record id and increment it by 1
      * to generate new id
      **/
    const lastID = expenses.at(-1)?.id;

    expenses = [
      ...expenses,
      {...newExpense, id: isNaN(lastID) ? 1 : lastID + 1}
    ];

    localStorage.setItem("expenses", JSON.stringify(expenses));

    return { error: false };
  }
  catch (err) {
    if (err?.message)
      return { error: true, message: err.message };
    return { error: true, message: "Unknown error occured"};
  }
}


/** Get All Expenses Data **/
export function getAllExpenses () {
  try {
    return { error: false, data: readExpenses() };
  }
  catch (err) {
    if (err?.message)
      return { error: true, message: err.message };
    return { error: true, message: "Unknown error occured"};
  }
}


/**
 * Get Total Expenses Used day by day
 * return value will be a key-value pair object
 * e.g. { totalExpenses: [{amount:amount, date: date1}, {amount:amount, date: date1}] }
 **/
export function getTotalExpensesByDay () {
  try {
    let data = readExpenses().reduce( (prev, curr) => {
      const dtStr = curr.date.toLocaleDateString();
      prev[dtStr] = {
        date: curr.date,
        amount: (prev[dtStr]?.amount || 0) + curr.amount
      };
      return prev
    }, {});

    data = { totalExpenses: Object.keys(data).map( key => data[key]) };

    return { error: false, data };
  }
  catch (err) {
    if (err?.message)
      return { error: true, message: err.message };
    return { error: true, message: "Unknown error occured"};
  }
}


/**
 * !!!! Get Total Expenses by Category and by Date !!!!
 * We definitely can improve this. NEED IMPROVEMENT & REVIEW
 * This currently involves two iterations to group the total exepenses firstly by category, then daily
 * IMHO, this kind of logic should be handled at the server side.
 * This function will return a key-value pair object
 * e.g. { category: [{amount, date}, {amount, date}], category2: [{amount, date}]}
 **/
export function getTotalExpensesByDayAndCategory () {
  try {
    let data = readExpenses().reduce( (prev, curr) => {

      let isExist = false;

      if (prev[curr.category]) {
        prev[curr.category] = prev[curr.category].map( cat => {
          if (cat.date.toLocaleDateString() === curr.date.toLocaleDateString()) {
            // do addition & compute total expenses
            isExist = true;
            return { ...cat, amount : cat.amount + curr.amount }
          }
          else return cat;
        });
      }

      if (!isExist)
        prev[curr.category] = [
          ...prev[curr.category] || [],
          { amount : curr.amount, date: curr.date}
        ]

      return prev;
    }, {});

    return { error: false, data };
  }
  catch (err) {
    if (err?.message)
      return { error: true, message: err.message };
    return { error: true, message: "Unknown error occured"};
  }
}


/** Get Total Expenses by Category **/
export function getTotalExpensesByCategory () {
  try {
    const data = readExpenses().reduce( (prev, curr) => {
      prev[curr.category] = (prev[curr.category] || 0) + curr.amount;
      return prev;
    }, {});

    return { error: false, data };
  }
  catch (err) {
    if (err?.message)
      return { error: true, message: err.message };
    return { error: true, message: "Unknown error occured"};
  }
}
