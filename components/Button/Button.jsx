import React from "react";
import styles from "./Button.module.scss";

function Button({ children, href }) {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return <button onClick={handleClick}>{children}</button>;
}

export default Button;
