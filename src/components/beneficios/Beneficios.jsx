import React, { useState } from "react";
import "./beneficios.css";

function Beneficios() {
  const [inputs, setInputs] = useState({
    banco: "",
    cartao: "",
    bandeira: "",
    pontuacao: "",
    taxas: "",
    limite: "",
    poderes: "",
    parceiras: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="tabela-container">
      <table>
        <thead>
          <tr>
            <th colSpan="3" className="titulo-principal">
              TAREFA SOBRE BENEFÍCIOS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3" className="titulo-sub">
              Conheça sua Varinha de Crédito e seus Benefícios
            </td>
          </tr>
          <tr>
            <td className="column-label">Banco</td>
            <td className="column-value">Banco Exemplo</td>
            <td>
              <input
                type="text"
                name="banco"
                value={inputs.banco}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td className="column-label">Cartão</td>
            <td className="column-value">Exemplo Gold</td>
            <td>
              <input
                type="text"
                name="cartao"
                value={inputs.cartao}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td className="column-label">Bandeira</td>
            <td className="column-value">Mastercard Surpreenda</td>
            <td>
              <input
                type="text"
                name="bandeira"
                value={inputs.bandeira}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td className="column-label">Pontuação</td>
            <td className="column-value">1,7 pontos por Dólar</td>
            <td>
              <input
                type="text"
                name="pontuacao"
                value={inputs.pontuacao}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td className="column-label">Taxas</td>
            <td className="column-value">Grátis quando 2k / Fatura</td>
            <td>
              <input
                type="text"
                name="taxas"
                value={inputs.taxas}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td className="column-label">Limite</td>
            <td className="column-value">R$ 2.000,00</td>
            <td>
              <input
                type="text"
                name="limite"
                value={inputs.limite}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td className="column-label">Poderes</td>
            <td className="column-value">50% OFF no Cinema</td>
            <td>
              <input
                type="text"
                name="poderes"
                value={inputs.poderes}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td className="column-label">Parceiras</td>
            <td className="column-value">Farmácias e Hoteis</td>
            <td>
              <input
                type="text"
                name="parceiras"
                value={inputs.parceiras}
                onChange={handleInputChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Beneficios;
