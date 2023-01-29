import React from "react";
import { Link } from "react-router-dom";
import "./error.scss";

function Error404() {
  return (
    <div id="error">
      <h1 className="error_h1">404</h1>
      <p className="error_p">Oups! La page que vous demandez n'existe pas.</p>
      <Link
        to="/"
        className="error_a"
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        Retourner à la page d'accueil
      </Link>
    </div>
  );
}
export default Error404;
