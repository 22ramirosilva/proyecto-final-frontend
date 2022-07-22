import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Flecha from "../../imagenes/arrow-left.svg";
import "./AgregarPokemon.css";

const AgregarPokemon = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [hp, setHp] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [moves, setMoves] = useState("");
  const [height, setHeight] = useState("");
  const [satk, setSatk] = useState("");
  const [sdef, setSdef] = useState("");
  const [spd, setSpd] = useState("");
  let navigate = useNavigate();

  const handleChangeName = (evento) => {
    setName(evento.target.value);
  };
  const handleChangeDescription = (evento) => {
    setDescription(evento.target.value);
  };
  const handleChangeWeight = (evento) => {
    setWeight(evento.target.value);
  };
  const handleChangeHP = (evento) => {
    setHp(evento.target.value);
  };
  const handleChangeATK = (evento) => {
    setAtk(evento.target.value);
  };
  const handleChangeDEF = (evento) => {
    setDef(evento.target.value);
  };
  const handleChangeImage = (evento) => {
    setImage(evento.target.value);
  };
  const handleChangeType = (evento) => {
    setType(evento.target.value);
  };
  const handleChangeMoves = (evento) => {
    setMoves(evento.target.value);
  };
  const handleChangeHeight = (evento) => {
    setHeight(evento.target.value);
  };
  const handleChangeSATK = (evento) => {
    setSatk(evento.target.value);
  };
  const handleChangeSDEF = (evento) => {
    setSdef(evento.target.value);
  };
  const handleChangeSPD = (evento) => {
    setSpd(evento.target.value);
  };

  return (
    <div className="background-Form" id={type}>
      <div className="add-pokemon-form">
        <div className="container">
          <div>
            <Link className="volverLogin" to="/pokedex">
              <img className="flechita" src={Flecha} alt="flecha" />
            </Link>
            <center>
              <h1 className={type} style={{ backgroundColor: "white" }}>
                Add Pokémon
              </h1>
            </center>
          </div>
          <form>
            <div className="nombre-correo-mensaje">
              <div className="nombre-correo">
                <div className="inputBox">
                  <input
                    onChange={handleChangeName}
                    className="input-largo"
                    type="name"
                    required
                  />
                  <span>Name</span>
                </div>

                <div className="inputBox">
                  <input
                    onChange={handleChangeDescription}
                    className="input-largo"
                    type="text"
                    required
                  />
                  <span>Description</span>
                </div>

                <div className="inputBox">
                  <input
                    onChange={handleChangeWeight}
                    className="input-largo"
                    type="text"
                    required
                  />
                  <span>Weight</span>
                </div>

                <div className="inputBox">
                  <input
                    style={{ borderBottom: "none" }}
                    onChange={handleChangeHP}
                    className="input-largo"
                    type="range"
                    min="0"
                    max="200"
                    required
                  />
                  <span>HP {hp}</span>
                </div>
                <div className="inputBox">
                  <input
                    style={{ borderBottom: "none" }}
                    onChange={handleChangeATK}
                    className="input-largo"
                    type="range"
                    min="0"
                    max="200"
                    required
                  />
                  <span>ATK {atk}</span>
                </div>
                <div className="inputBox">
                  <input
                    style={{ borderBottom: "none" }}
                    onChange={handleChangeDEF}
                    className="input-largo"
                    type="range"
                    min="0"
                    max="200"
                    required
                  />
                  <span>DEF {def}</span>
                </div>

                <div className="inputBox">
                  <input
                    style={{ width: "228%" }}
                    onChange={handleChangeImage}
                    className="input-largo"
                    type="file"
                    required
                  />
                  <span id="spanImage">Image</span>
                </div>
              </div>

              <div>
                <div className="inputBox">
                  <select
                    onChange={handleChangeType}
                    className="input-largo"
                    name="types"
                    id="type-select"
                    required
                  >
                    <option value="">Type</option>
                    <option value="Bug">Bug</option>
                    <option value="Dark">Dark</option>
                    <option value="Dragon">Dragon</option>
                    <option value="Electric">Electric</option>
                    <option value="Fairy">Fairy</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Fire">Fire</option>
                    <option value="Flying">Flying</option>
                    <option value="Ghost">Ghost</option>
                    <option value="Grass">Grass</option>
                    <option value="Ground">Ground</option>
                    <option value="Ice">Ice</option>
                    <option value="Normal">Normal</option>
                    <option value="Poison">Poison</option>
                    <option value="Psychic">Psychic</option>
                    <option value="Rock">Rock</option>
                    <option value="Steel">Steel</option>
                    <option value="Water">Water</option>
                  </select>
                  <span id="spanType">Type</span>
                </div>

                <div className="inputBox">
                  <input
                    onChange={handleChangeMoves}
                    className="input-largo"
                    type="text"
                    required
                  />
                  <span>Moves</span>
                </div>

                <div className="inputBox">
                  <input
                    onChange={handleChangeHeight}
                    className="input-largo"
                    type="text"
                    required
                  />
                  <span>Height</span>
                </div>

                <div className="inputBox">
                  <input
                    style={{ borderBottom: "none" }}
                    onChange={handleChangeSATK}
                    className="input-largo"
                    type="range"
                    min="0"
                    max="200"
                    required
                  />
                  <span>SATK {satk}</span>
                </div>
                <div className="inputBox">
                  <input
                    style={{ borderBottom: "none" }}
                    onChange={handleChangeSDEF}
                    className="input-largo"
                    type="range"
                    min="0"
                    max="200"
                    required
                  />
                  <span>SDEF {sdef}</span>
                </div>
                <div className="inputBox">
                  <input
                    style={{ borderBottom: "none" }}
                    onChange={handleChangeSPD}
                    className="input-largo"
                    type="range"
                    min="0"
                    max="200"
                    required
                  />
                  <span>SPD {spd}</span>
                </div>
              </div>
            </div>
            <div className="boton-centro">
              <button
                // onClick={}
                id={type}
                className="boton-form"
                type="button"
              >
                ADD
              </button>
              <div className="linkRegistro"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgregarPokemon;
