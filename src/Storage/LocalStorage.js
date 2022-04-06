/**
 * This file contains functions to access (Read/Write) local Storage
 **/

import expenses from "../TestData/expenses";


export function readExpenses () {
  try {
    const expensesStr = localStorage.getItem("expenses");
    return JSON.parse(expensesStr);
  }
  catch (err) {
    if (err?.message)
      return { error: true, message: err.message };
    return { error: true, message: "Unknown error occured"};
  }
}


export function writeExpenses (newExpense) {
  try {
    let expenses = readExpenses(); // read the expenses data from localstorage
    expenses = [
      ...expenses,
      newExpense
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


/* Get Total Expenses Used day by day */
export function getTotalExpensesByDay () {
  try {
    const data = expenses.reduce( (prev, curr) => {
      const dtStr = curr.date.toLocaleDateString();
      prev[dtStr] = {
        date: curr.date,
        amount: (prev[dtStr]?.amount || 0) + curr.amount
      };
      return prev
    }, {});

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
 **/
export function getTotalExpensesByDayAndCategory () {
  try {
    let data = expenses.reduce( (prev, curr) => {

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
