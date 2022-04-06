/**
 * This component will handle insertion new expenses to storage (local browser stroage)
 **/
import React, { useState, useEffect } from "react";

import Message from "../Common/Message";
import { writeExpenses } from "../../Storage/LocalStorage";


// JSX styling
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  title: {
    width: "fit-content",
    margin: "20px auto",
    fontSize: "18px"
  },
  form: {
    padding: "20px",
    width: "60%",
    maxWidth: "400px",
    minWidth: "300px",
    border: "gainsboro solid 0.2px",
    borderRadius: "5px",
    background: "#f9f9f9"
  },
  formLabel: {
    fontSize: "16px",
    display: "block",
    marginBottom: "10px"
  },
  formControl: {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    lineHeight: "15px",
    border: "gainsboro solid 0.2px",
    borderRadius: "5px",
    padding: "7px",
    fontSize: "15px",
    marginBottom: "20px",
    outline: "none"
  },
  formSubmit: {
    width: "100%",
    padding: "10px",
    background: "lightcoral",
    colro: "white",
    border: "solid 0.5px indianred",
    borderRadius: "5px",
    color: "white",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer"
  }
};


function CreateExpenseRecord () {

  const [ expense, setExpense ] = useState({
    date : "",
    amount: "",
    note: "",
    category: "household"
  });
  const [ loading, setLoading ] = useState(false);
  const [ message, setMessage ] = useState(null);

  // handle Text Input OnChange Event
  const handleOnChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name] : e.target.value
    });
  }


  /** validation of expenses data before saving into local storage **/
  const validateExpenseData = () => {
    if (!expense.date || expense.date === "")
      return { error: true, message: "*Invalid Date*" }

    if (!expense.amount || expense.amount === "" || parseInt(expense.amount) <= 0)
      return { error: true, message: "*Invalid Amount. Please enter numbers*"}

    return { error: false }
  }


  // handle On Click event of Add New Expense button
  const handleOnAddNewExpense = (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      const { error, message } = validateExpenseData();
      if (error)
        throw new Error(message);

      const res = writeExpenses(expense);

      if (res?.error) {
        // Error Saving New Expense to LocalStorage
        setMessage({
          type: "error",
          text: res.message
        });
      }
      else {
        // Successfully Save New Expense Data
        // reset Expenses Input
        setExpense({
          date : "",
          amount: "",
          note: "",
          category: "household"
        });
        // inform user
        setMessage({
          type: "success",
          text: "A new expense added successfully"
        });
      }
    }
    catch (err) {
      setMessage({
        type: "error",
        text: err ? err.message : "Unknown Error Occured"
      });
    }
  }


  useEffect(() => {
    if (message) setLoading(false);
  }, [message]);


  return (
    <div style={styles.container}>
      <h4>Add New Expense</h4>
      {
        message && (
          message?.type === "error"
            ? <Message message={message.text} type="error"/>
            : <Message message={message.text} type="success"/>
        )
      }
      <form style={styles.form}>

        <label style={styles.formLabel}>Date</label>
        <input style={styles.formControl}
          onChange={handleOnChange}
          type="date" value={expense.date} name="date" required/>

        <label style={styles.formLabel}>Amount</label>
        <input style={styles.formControl}
          onChange={handleOnChange}
          type="text" value={expense.amount} name="amount"
          placeholder="00.00" required/>

        <label style={styles.formLabel}>Note</label>
        <input style={styles.formControl}
          onChange={handleOnChange}
          type="text" value={expense.note} name="note"
          placeholder="Enter Notes" required/>

        <label style={styles.formLabel}>Category</label>
        <select style={styles.formControl}
          value={expense.category} name="category"
          onChange={handleOnChange} required
        >
          <option value="household">HouseHold</option>
          <option value="Food">Food</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Others">Others</option>
        </select>

        <button style={styles.formSubmit}
          disabled={loading} onClick={handleOnAddNewExpense}
        >
          { loading ? "Loading ..." : "Add New Expense"}
        </button>
      </form>
    </div>
  );
}


export default CreateExpenseRecord;
