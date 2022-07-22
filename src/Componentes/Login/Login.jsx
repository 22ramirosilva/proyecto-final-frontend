import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Pikachu from "../../imagenes/pikachu.gif";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

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
                </div>

                <div className="inputBox">
                  <input
                    onChange={handleChangePass}
                    className="input-largo"
                    type="password"
                    required
                  />
                  <span>Password</span>
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

                <Link to={"/registro"}>
                  <p>Sign up</p>
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
