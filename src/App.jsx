import "./App.css";

import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Objetivo from "./components/objtivos/Objetivo";
import NavBar from "./components/NavBar/NavBar";
import Consumo from "./components/consumo/Consumo";
import Acumulo from "./components/Acumulo/Acumulo";
import Beneficios from "./components/beneficios/Beneficios";
import RelatorioConsumo from "./components/RelatorioConsumo/RelatorioConsumo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/objetivo" element={<Objetivo />} />
          <Route path="/consumo" element={<Consumo />} />
          <Route path="/acumulo" element={<Acumulo />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/relatorioConsumo" element={<RelatorioConsumo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
