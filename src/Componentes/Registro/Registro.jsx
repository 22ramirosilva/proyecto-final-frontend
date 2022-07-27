import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import Flecha from "../../imagenes/arrow-left.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faUser,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const Registro = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(faEyeSlash);
  const [type2, setType2] = useState("password");
  const [icon2, setIcon2] = useState(faEyeSlash);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  let navigate = useNavigate();

  const handleToggle = () => {
    if (type === "password") {
      setIcon(faEye);
      setType("text");
    } else {
      setIcon(faEyeSlash);
      setType("password");
    }
  };
  const handleToggle2 = () => {
    if (type2 === "password") {
      setIcon2(faEye);
      setType2("text");
    } else {
      setIcon2(faEyeSlash);
      setType2("password");
    }
  };

  const handleChangeName = (evento) => {
    setName(evento.target.value);
  };
  const handleChangeMail = (evento) => {
    setMail(evento.target.value);
  };
  const handleChangePass = (evento) => {
    setPassword(evento.target.value);
  };
  const handleChangeConfirmPass = (evento) => {
    setPasswordConfirmation(evento.target.value);
  };

  const registerUsuario = async () => {
    try {
      const respuesta = await fetch("http://localhost:1234/register", {
        method: "POST",
        body: JSON.stringify({ name, mail, password, passwordConfirmation }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      const usuarioFetch = await respuesta.json();
      console.log(usuarioFetch);

      navigate("/", { replace: true });
    } catch (error) {
      console.log("No se pudo conectar con el backend");
      alert("Mail o contraseña incorrecta");
    }
  };

  return (
    <div className="backgroundForm">
      <div className="contacto-form">
        <div className="container">
          <div>
            <Link className="volverLogin" to="/">
              <img className="flechita" src={Flecha} alt="flecha" />
            </Link>
            <center>
              <h1>Sign up</h1>
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
                  <FontAwesomeIcon className="icon" icon={faUser} />
                </div>

                <div className="inputBox">
                  <input
                    onChange={handleChangeMail}
                    className="input-largo"
                    type="email"
                    required
                  />
                  <span>Email</span>
                  <FontAwesomeIcon className="icon" icon={faEnvelope} />
                </div>

                <div className="inputBox">
                  <input
                    onChange={handleChangePass}
                    className="input-largo"
                    type={type}
                    required
                  />
                  <span>Password</span>
                  <FontAwesomeIcon
                    onClick={handleToggle}
                    className="icon"
                    icon={icon}
                  />
                </div>

                <div className="inputBox">
                  <input
                    onChange={handleChangeConfirmPass}
                    className="input-largo"
                    type={type2}
                    required
                  />
                  <span>Confirm password</span>
                  <FontAwesomeIcon
                    onClick={handleToggle2}
                    className="icon"
                    icon={icon2}
                  />
                </div>
              </div>
            </div>
            <div className="boton-centro">
              <button
                onClick={registerUsuario}
                className="boton-form"
                type="button"
              >
                SIGN UP
              </button>
              <div className="linkRegistro">
                <h6>Already a user?</h6>

                <Link className="link" to={"/"}>
                  <p className="enlace">Login</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
