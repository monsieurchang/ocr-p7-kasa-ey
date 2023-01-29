import React, { useState } from "react";
import Arrow from "../../assets/images/arrow_down.svg";
import "./collapse.scss";

function Collapse({ title, text }) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div id="collapse">
      <div
        className="collapseDiv"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1
          key={title}
          className="collapseTitle"
        >
          {title}
        </h1>

        <img
          onClick={() => setIsOpen(!isOpen)}
          className={
            isOpen ? "collapseArrowDown collapseArrowUp" : "collapseArrowDown"
          }
          src={Arrow}
          alt="arrow button"
        />
      </div>
      {isOpen && <div className="collapseText">{text}</div>}
    </div>
  );
}

export default Collapse;
