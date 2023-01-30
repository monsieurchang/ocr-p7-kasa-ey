import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo_header.png";
import "./header.scss";

function Header() {
  return (
    <div id="header">
      <Link to="/">
        <img
          src={Logo}
          alt="kasa logo"
          className="headerLogo"
          onClick={() => {
            window.scroll(0, 0);
          }}
        />
      </Link>
      <div className="headerMenu">
        <ul className="headerUl">
          <NavLink to="/">
            <li className="headerLi">Accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li className="headerLi">À propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
export default Header;
