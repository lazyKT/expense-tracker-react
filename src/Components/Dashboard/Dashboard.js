import React from "react";
import Statistic from "./Statistic";

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


function Dashboard() {

  return (
    <div style={styles.container}>
      <div style={styles.header}>Dashboard</div>
      <Statistic />
    </div>
  );
}

export default Dashboard;
