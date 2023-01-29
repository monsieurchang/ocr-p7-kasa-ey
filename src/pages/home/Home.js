import React from "react";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import CardInformation from "../../constants/CardInformation";
import "./home.scss";

function Home() {
  return (
    <div id="home">
      <Banner />
      <Card />
      {/* <section className="card">
        {CardInformation.map((accomodation) => (
          <Card
            key={accomodation.key}
            title={accomodation.title}
            text={accomodation.text}
          />
        ))}
      </section> */}
    </div>
  );
}
export default Home;
