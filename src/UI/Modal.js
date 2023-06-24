import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
}
function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}
function Modal(props) {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick } />, document.getElementById("modal"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modal")
      )}

    
    </div>
  );
}

export default Modal;
