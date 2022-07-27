import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";
import pokeball from "../../imagenes/pokeballError.png";

const Error404 = () => {
  return (
    <div className="error-container">
      <h2 className="sorry">SORRY</h2>

      <div>
        <h1 className="text404">
          4<img className="pokeballError" src={pokeball} alt="pokeball" />4
        </h1>
      </div>

      <div className="sombra"></div>
      <h2 className="error-text">Page Not Found</h2>

      <div style={{ marginBottom: "3rem" }}>
        <p className="error-text">
          We're sorry, the page you requested could not be found.
        </p>
        <p className="error-text">Please go back to the home</p>
      </div>

      <Link style={{ textDecoration: "none" }} to={"/"}>
        <button className="boton-form">HOME</button>
      </Link>
    </div>
  );
};

export default Error404;
