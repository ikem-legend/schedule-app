import React from "react";
// import CellText from "./cellText";

export default ({ backgroundColor = "#595f68", cellText, textColor="#000" }) => (
    <div
        style={{
            minWidth: "120px",
            paddingTop: "10px",
            paddingBottom: "10px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#000",
            flex: 1
        }}
    >
        <p style={{ textAlign: "center", color: textColor }}>{cellText}</p>
  </div>
);
