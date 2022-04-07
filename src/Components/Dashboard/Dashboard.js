/**
 * This is the Dashboard Component which is the first component to render once the page load
 * This component contains multiple steps child components which are responsible for
 * filtering, customizing and plotting the chart visuals
 **/
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
