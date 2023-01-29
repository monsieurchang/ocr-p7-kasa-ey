import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./layout.scss";

let Layout = (props) => {
  return (
    <div className="layoutContainer">
      <Header />
      <div id="layout">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
