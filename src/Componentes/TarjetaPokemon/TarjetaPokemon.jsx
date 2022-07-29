import React from "react";
import "./TarjetaPokemon.css";
import { Link } from "react-router-dom";

const TarjetaPokemon = ({ pokemon }) => {
  return (
    <>
      <Link className="linkDetalles" to={`detalles/${pokemon.id}`}>
        <li id="tarjetATK" className={pokemon.types[0]}>
          <div className="contenedorPokemones">
            <p id="tarjetaId" className={pokemon.types[0] + "_id"}>
              #{pokemon.number}
            </p>
            <center>
              {<img className="tarjetaImg" src={pokemon.image} alt="foto" />}
            </center>
            <p className={pokemon.types[0] + "_background"} id="tarjetaNombre">
              {pokemon.name}
            </p>
          </div>
        </li>
      </Link>
    </>
  );
};

export default TarjetaPokemon;
