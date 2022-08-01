import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Flecha from "../../imagenes/arrow-left.svg";
import "./AgregarPokemon.css";
import Peso from "../../imagenes/Weight.svg";
import Alto from "../../imagenes/Height.svg";
import Swal from "sweetalert2";

const AgregarPokemon = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [HP, setHp] = useState("");
  const [ATK, setAtk] = useState("");
  const [DEF, setDef] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [moves, setMoves] = useState("");
  const [height, setHeight] = useState("");
  const [SATK, setSatk] = useState("");
  const [SDEF, setSdef] = useState("");
  const [SPD, setSpd] = useState("");
  let navigate = useNavigate();

  const handleChangeName = (evento) => {
    setName(evento.target.value);
  };
  const handleChangeNumber = (evento) => {
    setNumber(evento.target.value);
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

  const addPokemon = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch("http://localhost:1234/pokemon", {
        method: "POST",
        body: JSON.stringify({
          name,
          number,
          description,
          weight,
          HP,
          ATK,
          DEF,
          image,
          type,
          moves,
          height,
          SATK,
          SDEF,
          SPD,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      const usuarioFetch = await respuesta.json();
      localStorage.setItem("token", usuarioFetch.token);

      Swal.fire({
        title: "Pokémon added successfully",
        icon: "success",
        confirmButtonColor: "#6493eb",
        timer: "1500",
        showConfirmButton: false,
        timerProgressBar: true,
        width: "20rem",
        heightAuto: true,
      });
      navigate("/pokedex", { replace: true });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Enter all values ​​correctly",
        icon: "error",
        confirmButtonColor: "#6493eb",
      });
    }
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
                    type="double"
                    min={0}
                    required
                  />
                  <span>Weight</span>
                  <img className="icono-add" src={Peso} alt="weight" />
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
                  <span>HP {HP}</span>
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
                  <span>ATK {ATK}</span>
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
                  <span>DEF {DEF}</span>
                </div>

                <div className="inputBox">
                  <input
                    // style={{ width: "228%" }}
                    onChange={handleChangeImage}
                    className="input-largo"
                    type="text"
                    required
                  />
                  <span>Image URL</span>
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
                    type="double"
                    min={0}
                    required
                  />
                  <span>Height</span>
                  <img className="icono-add" src={Alto} alt="alto" />
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
                  <span>SATK {SATK}</span>
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
                  <span>SDEF {SDEF}</span>
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
                  <span>SPD {SPD}</span>
                </div>
                <div className="inputBox">
                  <input
                    onChange={handleChangeNumber}
                    className="input-largo"
                    type="number"
                    min={1}
                    required
                  />
                  <span>#Number</span>
                </div>
              </div>
            </div>
            <div className="boton-centro">
              <button
                onClick={addPokemon}
                id={type}
                className="boton-form"
                type="button"
              >
                <span>ADD</span>
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
