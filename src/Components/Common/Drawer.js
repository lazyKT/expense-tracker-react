import React, { useState, useEffect } from "react";


const styles = {
  drawer: {
    width: "20%",
    height: "100%",
    position: "fixed",
    zIndex: "0",
    top: 0,
    left: 0,
    background: "#f9f9f9",
    overflow: "hidden"
  },
  drawerHeader: {
    paddingTop: "5px",
    paddingLeft: "20px",
    paddingBottom: "5px",
    marginBottom: "20px",
    fontSize: "20px",
    background: "#0a3069", //#0a3069  03001c
    color: "white"
  },
  navItems: {
    fontFamily: "system-ui",
    marginLeft: "20px",
    marginBottom: "30px",
    cursor: "pointer"
  },
}

function Drawer({ onSelect, selected = "dashboard" }) {
  const [active, setActive] = useState("");

  const getStyle = (active) => {
    if (active)
      return {
        ...styles.navItems,
        fontWeight: "bold",
        fontSize: "18px",
        color: "dodgerblue"
      };
    else
      return {
        ...styles.navItems,
        fontSize: "16px",
        color: "gray"
      };
  };

  const handleOnSelect = (e) => {
    setActive(e.target.innerText.toLowerCase());
    onSelect(e.target.innerText.toLowerCase());
  };

  useEffect(() => setActive(selected), [selected]);

  useEffect(() => {
    // console.log(getStyle(active));
  }, [active]);

  return (
    <div style={styles.drawer}>
      <div style={styles.drawerHeader}><h4>Expense Tracker</h4></div>
      <div onClick={handleOnSelect} style={getStyle(active === "dashboard")}>
        Dashboard
      </div>
      <div onClick={handleOnSelect} style={getStyle(active === "records")}>
        Records
      </div>
      <div onClick={handleOnSelect} style={getStyle(active === "add")}>
        Add
      </div>
    </div>
  );
}


export default Drawer;
