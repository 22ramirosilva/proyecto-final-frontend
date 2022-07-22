import React from "react";
import "./TarjetaPokemon.css";
import { Link } from "react-router-dom";

const TarjetaPokemon = ({ pokemon }) => {
  return (
    <Link className="linkDetalles" to={`detalles/${pokemon.id}`}>
      <li id="tarjetATK" className={pokemon.type[0]}>
        <div className="contenedorPokemones">
          <p id="tarjetaId" className={pokemon.type[0] + "_id"}>
            #{pokemon.id}
          </p>
          <center>
            {
              <img
                className="tarjetaImg"
                src={pokemon.image.hires}
                alt="foto"
              />
            }
          </center>
          <p className={pokemon.type[0] + "_background"} id="tarjetaNombre">
            {pokemon.name.english}
          </p>
        </div>
      </li>
    </Link>
  );
};

export default TarjetaPokemon;
