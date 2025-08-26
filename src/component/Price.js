import React from "react";

function Price({ oldPrice, newPrice }) {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        height: "40px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        lineHeight: "40px",
      }}
    >
      <span>
        <del>{oldPrice}</del>
      </span>
      &nbsp;&nbsp;
      <span style={{fontWeight:"bold"}}>{newPrice}</span>
    </div>
  );
}

export default Price;
