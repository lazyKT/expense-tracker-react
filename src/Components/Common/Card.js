/**
 * Resuable Bootstrap like Card Component
 **/

import React from "react";


const styles = {
  card: {
    width: "fit-content",
    minWidth: "120px",
    margin: "15px 5px",
    border: "solid 0.5px gainsboro",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.3) 1px 1px 1px 1px"
  },
  cardTitle: {
    background: "aliceblue",
    padding: "5px",
    fontSize: "18px",
    fontWeight: "500"
  },
  cardBody: {
    padding: "10px",
  }
}


function Card ({children, title}) {
  return (
    <div style={styles.card}>
      <div style={styles.cardTitle}>{title}</div>
      <div style={styles.cardBody}>{children}</div>
    </div>
  );
}


export default Card;
