import React, { useState } from "react";
import arrow_L from "../../assets/images/arrow_left.svg";
import arrow_R from "../../assets/images/arrow_right.svg";
import "./gallery.scss";

function Gallery({ pictures }) {
  let [currentIndex, setCurrentIndex] = useState(0);
  let goToPrevious = () => {
    let isFirstPicture = currentIndex === 0;
    let newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  let goToNext = () => {
    let isLastPicture = currentIndex === pictures.length - 1;
    let newIndex = isLastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div id="gallery">
      <img
        className="galleryImg"
        src={pictures[currentIndex]}
        alt={pictures.title}
        key={currentIndex}
      />
      <img
        className={pictures.length === 1 ? "noArrow" : "arrowL"}
        src={arrow_L}
        alt="left arrow"
        onClick={goToPrevious}
      />
      <div className="slideCounter">
        {currentIndex + 1}/{pictures.length}
      </div>
      <img
        className={pictures.length === 1 ? "noArrow" : "arrowR"}
        src={arrow_R}
        alt="right arrow"
        onClick={goToNext}
      />
    </div>
  );
}

export default Gallery;
