import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AccomodationInfo from "../../components/accomodationinfo/AccomodationInfo";
import Collapse from "../../components/collapse/Collapse";
import DataFile from "../../data.json";
import Gallery from "../../components/gallery/Gallery";
import "./accomodation.scss";

function Accomodations() {
  let params = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    let accomodation = DataFile.find(
      (accomodation) => params.id === accomodation.id
    );
    if (!accomodation) {
      navigate("/error");
    }
  });

  return (
    <div id="accomodation">
      {DataFile.filter((accomodation) => accomodation.id === params.id).map(
        (accomodation) => (
          <main key={accomodation.title}>
            <Gallery pictures={accomodation.pictures} />
            <AccomodationInfo
              title={accomodation.title}
              location={accomodation.location}
              tags={accomodation.tags}
              host={accomodation.host}
              rating={accomodation.rating}
            />
            <section className="collapsesContainer">
              <div className="collapse">
                <Collapse
                  title="Description"
                  text={accomodation.description}
                />
              </div>
              <div className="collapse">
                <Collapse
                  title="Equipements"
                  text={accomodation.equipments.map((equipment, index) => (
                    <p key={index}>{equipment}</p>
                  ))}
                />
              </div>
            </section>
          </main>
        )
      )}
    </div>
  );
}
export default Accomodations;
