/**
 * This file is responsible for providing options to the users
 * whether they want to see the charts by total expenes or catogrized by expenses type.
 * It also enable users to select the customized date ranges (timelines)
 **/

import React, { useState, useEffect } from "react";


const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10px"
  },
  option: {
    display: "flex",
    justifyContent: "flex-start",
  },
  filter: {
    display: "flex",
    justifyContent: "flex-end",
  },
  filterItem: {
    background: "#f9f9f9",
    borderRadius: "5px",
    border: "solid 0.5px gainsboro",
    padding: "10px",
    margin: "0px 10px",
    fontWeight: "600",
    cursor: "pointer"
  },
  filterLabel: {
    padding: "10px",
    margin: "0px 10px",
    fontWeight: "600",
  }
}


function VisualOptions ({
  setModalOpen,
  handleOnClickCurrentMonth,
  handleOnClickCurrentWeek,
  onChangeVisualOption,
  visualMode
}) {

  // determine whether to show single data or multiple data on chart
  const [ visualType , setVisualType ] = useState("single");

  /* handle visual option changes */
  const handleOnChange = (e) => {
    setVisualType(e.target.name);
    onChangeVisualOption(e.target.name);
  }

  useEffect (() => {
    setVisualType(visualMode);
  }, [visualMode, setModalOpen, handleOnClickCurrentWeek, handleOnClickCurrentMonth]);


  return (
    <div style={styles.container}>
      <div style={styles.option}>
        <div>
          <input type="radio"
            name="single" value={visualType}
            checked={visualType === "single"}
            onChange={handleOnChange}
          />
          <label>Total Expenses</label>
        </div>
        <div>
          <input type="radio"
            name="multi" value={visualType}
            checked={visualType === "multi"}
            onChange={handleOnChange}
          />
          <label>Categorized Expenses</label>
        </div>
      </div>
      <div style={styles.filter}>
        <button style={styles.filterItem} onClick={() => setModalOpen(true)}>
          Custom
        </button>
        <button style={styles.filterItem} onClick={handleOnClickCurrentMonth}>
          Current Month
        </button>
        <button style={styles.filterItem} onClick={handleOnClickCurrentWeek}>
          Current Week
        </button>
      </div>
    </div>
  );
}


export default VisualOptions;
