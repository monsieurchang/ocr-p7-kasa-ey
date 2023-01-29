import React from "react";
import star_grey from "../../assets/images/star_grey.svg";
import star_red from "../../assets/images/star_red.svg";
import "./rate.scss";

function Rate({ rating }) {
  let range = [1, 2, 3, 4, 5];

  return range.map((rangeElem, index) =>
    rangeElem <= rating ? (
      <img
        src={star_red}
        alt="red"
        key={index}
        className="starIcon"
      />
    ) : (
      <img
        src={star_grey}
        alt="grey"
        key={index}
        className="starIcon"
      />
    )
  );
}

export default Rate;
