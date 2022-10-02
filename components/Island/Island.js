import React from "react";
import styles from "./Island.module.scss";

function Island({
  children,
  padding,
  borderRadius,
  display,
  justifyContent,
  alignItems,
  margin,
  backgroundColor,
  color,
  width
}) {
  return (
    <div
      className={styles.container}
      style={{
        padding: padding,
        borderRadius: borderRadius,
        display: display,
        justifyContent: justifyContent,
        alignItems: alignItems,
        margin: margin,
        backgroundColor: backgroundColor,
        color: color,
        width: width
      }}
    >
      {children}
    </div>
  );
}

export default Island;
