import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buscador from "./Componentes/Buscador/Buscador";
import Detalles from "./Componentes/Detalles/Detalles";
import Login from "./Componentes/Login/Login";
import Registro from "./Componentes/Registro/Registro";
import ScrollToTop from "./Componentes/ScrollToTop/ScrollToTop";
import AgregarPokemon from "./Componentes/AgregarPokemon/AgregarPokemon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/pokedex" element={<Buscador />} />
          <Route path="/agregar" element={<AgregarPokemon />} />
          <Route path="pokedex/detalles/:id" element={<Detalles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;