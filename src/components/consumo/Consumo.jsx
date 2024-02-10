import React, { useState, useEffect } from "react";
import "./consumo.css";
import RelatorioConsumo from "../RelatorioConsumo/RelatorioConsumo";

function Consumo() {
  const [rendaMensal, setRendaMensal] = useState({
    salarios: "",
    imoveis: "",
    outros: "",
    remuneracaoTotal: 0,
  });

  const [despesaMensal, setDespesaMensal] = useState({
    hospedagem: {
      hoteisAluguel: "",
      luzAguaGas: "",
      streaming: "",
      internet: "",
    },
    alimentacao: { supermercado: "", restaurante: "", delivery: "" },
    transporte: { combustivel: "", publico: "", passagens: "" },
    lazer: { passeios: "", bebidas: "", compras: "" },
    diversos: {
      farmacia: "",
      educacao: "",
      mascotes: "",
      tarifasBancarias: "",
      outros: "",
    },
    consumoTotal: "",
  });

  const [total, setTotal] = useState({
    rendaTotal: 0,
    despesaTotal: 0,
    saldoFimMes: 0,
  });

  useEffect(() => {
    // Calcula o total das despesas sempre que houver uma mudança nos campos de despesa
    let despesaTotal = Object.values(despesaMensal).reduce(
      (acc, category) =>
        acc +
        Object.values(category).reduce(
          (acc, val) => acc + parseFloat(val || 0),
          0
        ),
      0
    );
    setTotal((prevState) => ({ ...prevState, despesaTotal }));
  }, [despesaMensal]);

  useEffect(() => {
    // Calcula o total das rendas
    const totalRendas = Object.values(rendaMensal).reduce(
      (acc, val) => acc + parseFloat(val || 0),
      0
    );
    setTotal((prevState) => ({
      ...prevState,
      rendaTotal: totalRendas,
    }));
  }, [rendaMensal]);

  useEffect(() => {
    // Calcula o saldo final do mês sempre que houver uma mudança nos totais de renda e despesa
    setTotal((prevState) => ({
      ...prevState,
      saldoFimMes: total.rendaTotal - total.despesaTotal,
    }));
  }, [total.rendaTotal, total.despesaTotal]);

  const handleRendaMensalChange = (event) => {
    const { name, value } = event.target;
    setRendaMensal({ ...rendaMensal, [name]: value });
  };

  const handleDespesaMensalChange = (event, category) => {
    const { name, value } = event.target;
    setDespesaMensal({
      ...despesaMensal,
      [category]: { ...despesaMensal[category], [name]: value },
    });
  };

  const handleCalculate = () => {
    // Se desejar, adicione lógica de cálculo aqui
  };

  const consumos = [
    "Café da manhã",
    "Almoço",
    "Jantar",
    "Lanche da tarde",
    "Outros",
  ];

  return (
    <div>
      <div className="tabela-container">
        <table>
          <thead>
            <tr>
              <th colSpan="4" className="titulo-principal">
                TAREFA SOBRE CONSUMO
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="titulo-sub">
                Renda Mensal
              </td>
            </tr>
            <tr>
              <td>Salários</td>
              <td>
                <input
                  type="text"
                  name="salarios"
                  placeholder="R$0,00"
                  value={rendaMensal.salarios}
                  onChange={handleRendaMensalChange}
                />
              </td>
              <td>Imóveis</td>
              <td>
                <input
                  type="text"
                  name="imoveis"
                  placeholder="R$0,00"
                  value={rendaMensal.imoveis}
                  onChange={handleRendaMensalChange}
                />
              </td>
            </tr>
            <tr>
              <td>Outros</td>
              <td>
                <input
                  type="text"
                  name="outros"
                  placeholder="R$0,00"
                  value={rendaMensal.outros}
                  onChange={handleRendaMensalChange}
                />
              </td>
              <td>Remuneração Total</td>
              <td>R$ {total.rendaTotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="4" className="titulo-sub">
                Despesa Mensal
              </td>
            </tr>
            <tr>
              <td>Hospedagem</td>
              <td>
                <input
                  type="text"
                  name="hoteisAluguel"
                  placeholder="R$0,00"
                  value={despesaMensal.hospedagem.hoteisAluguel}
                  onChange={(e) => handleDespesaMensalChange(e, "hospedagem")}
                />
              </td>
              <td>Luz/Água/Gás</td>
              <td>
                <input
                  type="text"
                  name="luzAguaGas"
                  placeholder="R$0,00"
                  value={despesaMensal.hospedagem.luzAguaGas}
                  onChange={(e) => handleDespesaMensalChange(e, "hospedagem")}
                />
              </td>
            </tr>
            <tr>
              <td>Streaming</td>
              <td>
                <input
                  type="text"
                  name="streaming"
                  placeholder="R$0,00"
                  value={despesaMensal.hospedagem.streaming}
                  onChange={(e) => handleDespesaMensalChange(e, "hospedagem")}
                />
              </td>
              <td>Internet</td>
              <td>
                <input
                  type="text"
                  name="internet"
                  placeholder="R$0,00"
                  value={despesaMensal.hospedagem.internet}
                  onChange={(e) => handleDespesaMensalChange(e, "hospedagem")}
                />
              </td>
            </tr>
            <tr>
              <td>Alimentação</td>
              <td>
                <input
                  type="text"
                  name="supermercado"
                  placeholder="R$0,00"
                  value={despesaMensal.alimentacao.supermercado}
                  onChange={(e) => handleDespesaMensalChange(e, "alimentacao")}
                />
              </td>
              <td>Restaurante</td>
              <td>
                <input
                  type="text"
                  name="restaurante"
                  placeholder="R$0,00"
                  value={despesaMensal.alimentacao.restaurante}
                  onChange={(e) => handleDespesaMensalChange(e, "alimentacao")}
                />
              </td>
            </tr>
            <tr>
              <td>Transporte</td>
              <td>
                <input
                  type="text"
                  name="combustivel"
                  placeholder="R$0,00"
                  value={despesaMensal.transporte.combustivel}
                  onChange={(e) => handleDespesaMensalChange(e, "transporte")}
                />
              </td>
              <td>Público</td>
              <td>
                <input
                  type="text"
                  name="publico"
                  placeholder="R$0,00"
                  value={despesaMensal.transporte.publico}
                  onChange={(e) => handleDespesaMensalChange(e, "transporte")}
                />
              </td>
            </tr>
            <tr>
              <td>Passagens</td>
              <td>
                <input
                  type="text"
                  name="passagens"
                  placeholder="R$0,00"
                  value={despesaMensal.transporte.passagens}
                  onChange={(e) => handleDespesaMensalChange(e, "transporte")}
                />
              </td>
              <td>Lazer</td>
              <td>
                <input
                  type="text"
                  name="passeios"
                  placeholder="R$0,00"
                  value={despesaMensal.lazer.passeios}
                  onChange={(e) => handleDespesaMensalChange(e, "lazer")}
                />
              </td>
            </tr>
            <tr>
              <td>Bebidas</td>
              <td>
                <input
                  type="text"
                  name="bebidas"
                  placeholder="R$0,00"
                  value={despesaMensal.lazer.bebidas}
                  onChange={(e) => handleDespesaMensalChange(e, "lazer")}
                />
              </td>
              <td>Compras</td>
              <td>
                <input
                  type="text"
                  name="compras"
                  placeholder="R$0,00"
                  value={despesaMensal.lazer.compras}
                  onChange={(e) => handleDespesaMensalChange(e, "lazer")}
                />
              </td>
            </tr>
            <tr>
              <td>Farmácia</td>
              <td>
                <input
                  type="text"
                  name="farmacia"
                  placeholder="R$0,00"
                  value={despesaMensal.diversos.farmacia}
                  onChange={(e) => handleDespesaMensalChange(e, "diversos")}
                />
              </td>
              <td>Educação</td>
              <td>
                <input
                  type="text"
                  name="educacao"
                  placeholder="R$0,00"
                  value={despesaMensal.diversos.educacao}
                  onChange={(e) => handleDespesaMensalChange(e, "diversos")}
                />
              </td>
            </tr>
            <tr>
              <td>Mascotes</td>
              <td>
                <input
                  type="text"
                  name="mascotes"
                  placeholder="R$0,00"
                  value={despesaMensal.diversos.mascotes}
                  onChange={(e) => handleDespesaMensalChange(e, "diversos")}
                />
              </td>
              <td>Tarifas Bancárias</td>
              <td>
                <input
                  type="text"
                  name="tarifasBancarias"
                  placeholder="R$0,00"
                  value={despesaMensal.diversos.tarifasBancarias}
                  onChange={(e) => handleDespesaMensalChange(e, "diversos")}
                />
              </td>
            </tr>
            <tr>
              <td>Outros</td>
              <td>
                <input
                  type="text"
                  name="outros"
                  placeholder="R$0,00"
                  value={despesaMensal.diversos.outros}
                  onChange={(e) => handleDespesaMensalChange(e, "diversos")}
                />
              </td>
              <td>Consumo Total</td>
              <td>{total.despesaTotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="4" className="saldo">
                Saldo no Fim do Mês
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="total-container">
                <h2>Total</h2>
                <p>Renda Total: {total.rendaTotal.toFixed(2)}</p>
                <p>Despesa Total: {total.despesaTotal.toFixed(2)}</p>
                <p
                  className={
                    total.saldoFimMes.toFixed(2) < 0
                      ? "saldo-negativo"
                      : "saldo-positivo"
                  }
                >
                  Saldo no Fim do Mês: {total.saldoFimMes.toFixed(2)}
                </p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Consumo;
