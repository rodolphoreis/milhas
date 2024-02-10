import React from "react";
import "./relatorioConsumo.css";

function RelatorioConsumo({
  rendaMensal,
  despesaMensal,
  totalRendas,
  totalDespesas,
  consumos,
}) {
  return (
    <div className="relatorio-container">
      <h2>Relatório de Consumo</h2>
      <table className="relatorio-table">
        <tbody>
          <tr>
            <td colSpan="2" className="td_title">
              Renda Mensal
            </td>
          </tr>
          <tr>
            <td>Salários</td>
            <td>{rendaMensal?.salarios || 0}</td>
          </tr>
          <tr>
            <td>Imóveis</td>
            <td>{rendaMensal?.imoveis || 0}</td>
          </tr>
          <tr>
            <td>Outros</td>
            <td>{rendaMensal?.outros || 0}</td>
          </tr>
          <tr className="total-row">
            <td className="total">Total:</td>
            <td className="valor-total">
              R$ {totalRendas ? totalRendas.toFixed(2) : 0}
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="td_title">
              Despesa Mensal
            </td>
          </tr>
          <tr>
            <td>Hospedagem</td>
            <td>{despesaMensal?.hospedagem?.hoteisAluguel || 0}</td>
          </tr>
          <tr>
            <td>Luz/Água/Gás</td>
            <td>{despesaMensal?.hospedagem?.luzAguaGas || 0}</td>
          </tr>
          <tr>
            <td>Streaming</td>
            <td>{despesaMensal?.hospedagem?.streaming || 0}</td>
          </tr>
          <tr>
            <td>Internet</td>
            <td>{despesaMensal?.hospedagem?.internet || 0}</td>
          </tr>

          <tr className="total-row">
            <td className="total">Total:</td>
            <td className="valor-total">
              R$ {totalDespesas ? totalDespesas.toFixed(2) : 0}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RelatorioConsumo;
