/**
 * This is the page (component) which will list(or track) all expenses records and history
 * This Component is responsible for
 *  - display overall (daily/monthly) expenses in table.
 *  - View/Edit Expense Details
 **/
import React, { useState, useEffect } from "react";

import RecordsHeader from "./RecordsHeader";
import Table from "../Common/Table";
import { getAllExpenses } from "../../Storage/LocalStorage";


const styles = {
  container: {
    padding: "10px"
  },
  header: {
    margin: "0px 10px",
    fontSize: "23px",
    fontWeight: "bold",
    fontFamily: "system-ui"
  }
};


const columns = [ "id", "category", "amount", "note", "date" ];


function ExpenseOverview () {

  const [ expenses, setExpenses ] = useState([]);


  const fetchAllExpenses = () => {
    try {
      const res = getAllExpenses();

      if (res.error) {
        throw new Error(res.message);
      }
      else {
        setExpenses(res.data);
      }
    }
    catch (err) {
      console.error(err);
    }
  }


  useEffect(() => {
    // execute on first render
    fetchAllExpenses();
  }, []);

  return (
    <div style={styles.container}>
      <h4 style={styles.header}>Expense Overview</h4>
      <RecordsHeader />
      <Table columns={columns} data={expenses} />
    </div>
  )
}


export default ExpenseOverview;
