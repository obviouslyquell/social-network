import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Modal({ show, children, onClose }) {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? children : null;

  //https://devrecipes.net/modal-component-with-next-js/

  if (isLoad) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Modal;
