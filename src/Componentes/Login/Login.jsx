import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Pikachu from "../../imagenes/pikachu.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(faEyeSlash);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleChangeMail = (evento) => {
    setMail(evento.target.value);
  };
  const handleChangePass = (evento) => {
    setPassword(evento.target.value);
  };

  const loginUsuario = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch("http://localhost:1234/login", {
        method: "POST",
        body: JSON.stringify({ mail, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      const usuarioFetch = await respuesta.json();
      localStorage.setItem("token", usuarioFetch.token);

      navigate("/pokedex", { replace: true });
    } catch (error) {
      console.log(error);
      alert("El nombre de usuario o contraseña son incorrectos");
    }
  };

  return (
    <div className="backgroundForm">
      <div className="contacto-form">
        <div className="container">
          <center>
            <h1>Login</h1>
          </center>
          <form>
            <div className="nombre-correo-mensaje">
              <div className="nombre-correo">
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
              </div>
            </div>
            <div className="boton-centro">
              <button
                onClick={loginUsuario}
                className="boton-form"
                type="submit"
                value={"LOGIN"}
              >
                LOGIN
              </button>

              <img src={Pikachu} alt="pikachu" className="pikachu" />

              <div className="linkRegistro">
                <h6>New User?</h6>

                <Link className="link" to={"/registro"}>
                  <p className="enlace">Sign up</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
