import React, { useState } from "react";
import "./objetivo.css"; // Importando o arquivo de estilos CSS

function Objetivo() {
  const [tipoMilheiro, setTipoMilheiro] = useState("");
  const [metaInicial, setMetaInicial] = useState("");
  const [sonho, setSonho] = useState("");

  const handleTipoMilheiroChange = (event) => {
    setTipoMilheiro(event.target.value);
  };

  const handleMetaInicialChange = (event) => {
    setMetaInicial(event.target.value);
  };

  const handleSonhoChange = (event) => {
    setSonho(event.target.value);
  };

  return (
    <div className="tabela-container">
      <table>
        <thead>
          <tr>
            <th colSpan="2" className="titulo-principal">
              O MAPA DAS MILHAS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2" className="titulo-sub">
              TAREFA SOBRE OBJETIVOS
            </td>
          </tr>
          <tr>
            <td>Que tipo de Milheiro você quer ser?</td>
            <td>
              <select
                id="tipoMilheiro"
                value={tipoMilheiro}
                onChange={handleTipoMilheiroChange}
              >
                <option value="">Selecione...</option>
                <option value="milheiroViajante">Milheiro Viajante</option>
                <option value="milheiroInvestidor">Milheiro Investidor</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              Meta inicial: Economizar no mínimo R$120 em 90 dias.
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input
                type="text"
                placeholder="Digite seu sonho..."
                value={sonho}
                onChange={handleSonhoChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Objetivo;
