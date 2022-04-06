import React, { useState, useEffect } from "react";

import Dashboard from "../Components/Dashboard/Dashboard";
import Records from "../Components/Records/Records";
import CreateExpenseRecord from "../Components/AddNewExpenses/CreateExpenseRecord";
import Drawer from "../Components/Drawer";


const styles = {
  container: {
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "20px"
  },
  content: {
    width: "75%",
    marginLeft: "23%"
  }
};


/** Render Page Component based on page choice **/
function renderPageComponent (page) {

  if (!page)
    return <h3>Loading</h3>; // if the page has not finished loading, render loading spinner instead

  switch (page) {
    case "dashboard":
      return <Dashboard />;
    case "records":
      return <Records />
    case "add":
      return <CreateExpenseRecord />
    default:
      throw new Error ("Invalid Page Choice!!");
  }
}


function HomeScreen () {

  const [ page, setPage ] = useState("dashboard");
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    if (page) setLoading(false);
  }, [page]);

  return (
    <div style={styles.container}>
      <Drawer
        onSelect={val => setPage(val)}
      />
      <div style={styles.content}>
        { loading ? <h3>Loading...</h3> : renderPageComponent(page) }
      </div>
    </div>
  );
}


export default HomeScreen;
