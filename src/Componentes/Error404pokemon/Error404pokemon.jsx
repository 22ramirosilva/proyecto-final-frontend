import React from "react";
import { Link } from "react-router-dom";
import "./Error404pokemon.css";
import pokeball from "../../imagenes/pokeballError.png";

const Error404pokemon = () => {
  return (
    <div className="error-container">
      <h2 className="sorry">SORRY</h2>

      <div>
        <h1 className="text404">
          4<img className="pokeballError" src={pokeball} alt="pokeball" />4
        </h1>
      </div>
      <div className="sombra"></div>
      <h2 className="error-text">Pokémon Not Found</h2>
      <div style={{ marginBottom: "3rem" }}>
        <p className="error-text">
          Sorry, the requested Pokémon could not be found.
        </p>
        <p className="error-text">Please go back to the Pokédex</p>
      </div>
      <Link style={{ textDecoration: "none" }} to={"/pokedex"}>
        <button className="boton-form">POKEDEX</button>
      </Link>
    </div>
  );
};

export default Error404pokemon;
