import React from "react";
import "./Tag.css";

function Tag({ text }) {
  return (
    <div className={`tag ${text === "Lost" ? "tag--blue" : "tag--orange"}`}>
      {text}
    </div>
  );
}

export default Tag;
