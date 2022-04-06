import React from "react";
/**
 * Reusable Component: Custom Date Chooser
 * Props:
 *  start: ISO Date String
 *  end: ISO Date String
 *  setStartDate: function which set the start date of the chart X-axis date data
 *  setEndDate: function which set the end date of the chart Y-axis date data
 *  closeModal: function which dismiss the Modal
 **/


const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "250px"
  },
  title: {
    color: "#0a3069",
    fontWeight: "600"
  },
  input: {
    padding: "5px",
    margin: "10px 0px",
    fontSize: "14px"
  },
  label: {
    fontSize: "13px",
    fontWeight: "500"
  },
  button: {
    padding: "5px"
  }
}


function CustomDateChooser ({
  start,
  end,
  setStartDate,
  setEndDate,
  closeModal
}) {

  return (
    <form style={styles.form}>
      <p style={styles.title}>Custom Date Ranges</p>
      <label style={styles.label}>From :</label>
      <input
        style={styles.input}
        type="date"
        onChange={(e) => setStartDate(new Date(e.target.value))}
        value={start}
        name="startDate"
      />
      <br/>
      <label style={styles.label}>To :</label>
      <input
        style={styles.input}
        type="date"
        onChange={(e) => setEndDate(new Date(e.target.value))}
        value={end}
        name="endDate"
      />
      <br/>
      <button style={styles.button} onClick={closeModal}>Close</button>
    </form>
  )
}

export default CustomDateChooser;
