import React from "react";


const styles = {
  message: {
    width: "60%",
    margin: "10px auto",
    padding: "10px",
    textAlign: "center",
    maxWidth: "400px",
    minWidth: "300px",
    borderRadius: "5px",
    fontSize: "15px",
    fontWeight: "600",
    color: "white"
  }
}

// get message style (error, info, success) based on the message type
function getMessageStyle (type) {
  switch (type) {
    case "info":
      return {
        ...styles.message,
        background: "lightskyblue",
        border: "solid 1px dodgerblue"
      };
    case "error":
      return {
        ...styles.message,
        background: "indianred",
        border: "solid 2px crimson"
      }
    case "success":
      return {
        ...styles.message,
        background: "darkseagreen",
        border: "solid 1px green"
      }
    default:
      return {
        ...styles.message,
        background: "lightskyblue",
        border: "solid 1px dodgerblue"
      }
  }
}


function Message ({ message, type="info" }) {

    return (
      <div style={getMessageStyle(type)}>
        { message }
      </div>
    );
}


export default Message;
