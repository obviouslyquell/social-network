import React from "react";
import styles from "./FieldIsland.module.scss";

function FieldIsland({
  children,
  padding,
  borderRadius,
  display,
  justifyContent,
  alignItems,
  margin,
  backgroundColor,
  color,
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
      }}
    >
      {children}
    </div>
  );
}

export default FieldIsland;
