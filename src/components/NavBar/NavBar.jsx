import "./navBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/objetivo">Objetivo</NavLink>
      <NavLink to="/consumo">Despesas</NavLink>
      <NavLink to="/acumulo">Acumulo</NavLink>
      <NavLink to="/beneficios">Benefícios</NavLink>
      <NavLink to="/relatorioConsumo">Relatório</NavLink>
    </nav>
  );
};

export default NavBar;
