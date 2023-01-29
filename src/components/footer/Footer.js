import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../../assets/images/logo_footer.png";
import "./footer.scss";

function Footer() {
  return (
    <div id="footer">
      <Link to="/">
        <img
          src={logoFooter}
          alt="kasa footer logo"
          className="footerLogo"
          onClick={() => {
            window.scroll(0, 0);
          }}
        />
      </Link>
      <h2 className="footerText">© 2020 Kasa. All rights reserved</h2>
    </div>
  );
}
export default Footer;
