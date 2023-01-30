import React from "react";
import { Link } from "react-router-dom";
import DataFile from "../../data.json";
import PropTypes from "prop-types";
import "./card.scss";

function Card() {
  return (
    <div id="card">
      {DataFile.map((accomodation) => (
        <Link
          to={`/accomodation/${accomodation.id}`}
          key={accomodation.id}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          <div
            key={accomodation.id}
            className="cardItem"
          >
            <img
              className="cardImg"
              src={accomodation.cover}
              alt={accomodation.title}
            />
            <h2 className="cardTitle">{accomodation.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

Card.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
