import React from "react";
import Rate from "../rate/Rate";
import "./accomodationinfo.scss";

function AccomodationInfo({ title, location, tags, host, rating }) {
  return (
    <div id="accomodationInfo">
      <section className="accomodationSection">
        <h1 className="accomodationInfoTitle">{title}</h1>
        <h2 className="accomodationInfoLocation">{location}</h2>
        <div className="accomodationInfoTags">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="accomodationInfoTag"
            >
              {tag}
            </div>
          ))}
        </div>
      </section>
      <section className="hostStars">
        <div className="host">
          <p className="hostName">{host.name}</p>
          <img
            src={host.picture}
            alt={host.name}
            className="hostPhoto"
          />
        </div>
        <div>
          <Rate rating={parseInt(rating)} />
        </div>
      </section>
    </div>
  );
}

export default AccomodationInfo;
