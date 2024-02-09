import "./App.css";
import Acumulo from "./components/Acumulo/Acumulo";
import Beneficios from "./components/beneficios/Beneficios";
import Consumo from "./components/consumo/Consumo";
import Objetivo from "./components/objtivos/Objetivo";

function App() {
  return (
    <>
      <Objetivo />
      <Consumo />
      <Beneficios />
      <Acumulo />
    </>
  );
}

export default App;
