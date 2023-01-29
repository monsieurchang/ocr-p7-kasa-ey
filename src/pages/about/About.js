import React from "react";
import AboutInformation from "../../constants/AboutInformation";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";
import "./about.scss";

function About() {
  return (
    <div id="about">
      <Banner />
      <section className="collapse">
        {AboutInformation.map((collapse) => (
          <Collapse
            key={collapse.key}
            title={collapse.title}
            text={collapse.text}
          />
        ))}
      </section>
    </div>
  );
}
export default About;
