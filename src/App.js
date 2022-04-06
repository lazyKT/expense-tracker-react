import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./Components/Common/Header";

import expenses from "./TestData/expenses";
import { bulkWrite, readExpenses } from "./Storage/LocalStorage";


/**
 * Load Dummy Data into Local Storage
 * the function will firstly check if the expenses data exists in local storage,
 * if not exists, it will write the dummy data
 * otherwise, do nothing
 */
function bulkWriteExpenses () {
  try {
    const expensesFromLocalStorage = readExpenses();

    if (expensesFromLocalStorage?.length === 0) {
      const res = bulkWrite(expenses);
      if (res.error)  throw new Error(res.message);
    }
  }
  catch (err) {

  }
}


function App() {

  React.useEffect(() => {
    bulkWriteExpenses();
  }, []);

  return (
    <div>
      <Header />
      <HomeScreen />
    </div>
  );
}

export default App;
