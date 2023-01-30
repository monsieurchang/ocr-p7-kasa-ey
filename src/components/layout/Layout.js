import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./layout.scss";

let Layout = (props) => {
  return (
    <div className="layoutContainer">
      <div className="headerContainer">
        <Header />
      </div>
      <div id="layout">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
