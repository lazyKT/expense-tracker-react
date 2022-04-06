/**
 * Resuable Component: FlexBox or Bootstrap Row
 */

import React from "react";


const styles = {
  row: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
  }
}


function Row ({ children }) {
  return (
    <div style={styles.row}>{children}</div>
  )
}


export default Row;
