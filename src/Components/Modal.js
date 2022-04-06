import React from "react";

const styles = {
  modal: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.2)"
  },
  modalContent: {
    background: "white",
    padding: "20px",
    border: "solid 0.5px gainsboro",
    borderRadius: "5px"
  }
};

function Modal(props) {
  React.useEffect(() => console.log(props));

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>{props.children}</div>
    </div>
  );
}

export default Modal;
