import React from "react";
import "./acumulo.css";

function Acumulo() {
  return (
    <div className="tabela-container">
      <table>
        <thead>
          <tr>
            <th colSpan="3" className="titulo-principal">
              TAREFA SOBRE ACÚMULO
            </th>
          </tr>
          <tr>
            <th colSpan="3" className="titulo-sub">
              Pontos referentes a Vôos Recentes
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="linha-titulo">1) Voando</td>
          </tr>
          <tr>
            <td>Companhia</td>
            <td>
              <input type="text" placeholder="Digite a companhia" />
            </td>
          </tr>
          <tr>
            <td>Programa</td>
            <td>
              <input type="text" placeholder="Digite o programa" />
            </td>
          </tr>
          <tr>
            <td>Pontos Acumulados</td>
            <td>
              <input type="text" placeholder="Digite os pontos acumulados" />
            </td>
          </tr>
          <tr>
            <th colSpan="3" className="titulo-sub">
              Pontos ou Cashback do Cartão de Crédito
            </th>
          </tr>
          <tr>
            <td className="linha-titulo">2) Faturas</td>
          </tr>
          <tr>
            <td>Cartão</td>
            <td>
              <input type="text" placeholder="Digite o cartão" />
            </td>
          </tr>
          <tr>
            <td>Programa</td>
            <td>
              <input type="text" placeholder="Digite o programa" />
            </td>
          </tr>
          <tr>
            <td>Pontos ou Cashback</td>
            <td colSpan="2">
              <input type="text" placeholder="Digite os pontos ou cashback" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Acumulo;
