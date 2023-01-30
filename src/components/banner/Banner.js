import React from "react";
import "./banner.scss";

let host = window.location;

function Banner() {
  let homeBanner = host.pathname === "/";
  return (
    <div className={homeBanner ? "banner" : "banner"}>
      <div
        className={
          homeBanner ? "bannerImg bannerImgHome" : "bannerImg bannerImgAbout"
        }
      ></div>

      {homeBanner && (
        <h1 className="bannerText">Chez vous, partout et ailleurs</h1>
      )}
    </div>
  );
}
export default Banner;
