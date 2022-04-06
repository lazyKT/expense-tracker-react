import React, { useState, useEffect } from "react";
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
  },
  card: {
    display: "flex",
    margin: "5px",
    marginTop: "20px",
    padding: "5px"
  },
  cardItem: {
    width: "150px",
    margin: "10px",
    padding: "5px",
    fontFamily: "system-ui",
    fontSize: "16px",
    fontWeight: "600",
    boxShadow: "rgba(0,0,0,0.1) 1.5px 1px 1.5px 1px",
    border: "solid 0.2px #f9f9f9",
    borderRadius: "5px"
  },
  cardLabel: {
    fontSize: "17px"
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
