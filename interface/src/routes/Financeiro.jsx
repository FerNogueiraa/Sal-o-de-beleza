import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles/FinanceiroPagina.css";

export default function FinanceiroPage() {
  // Dados fictícios representando rendas diárias
  const dadosFinanceiros = [
    { data: "2024-11-20", valor: 150.0 },
    { data: "2024-11-21", valor: 200.0 },
    { data: "2024-11-22", valor: 180.0 },
    { data: "2024-11-23", valor: 220.0 },
  ];

  // Cálculos dos totais
  const rendaDiariaTotal = dadosFinanceiros.reduce((acc, item) => acc + item.valor, 0);
  const rendaMensalTotal = rendaDiariaTotal * 30; // Aproximação simples
  const rendaAnualTotal = rendaMensalTotal * 12;

  return (
    <>
      <div className="content-cadastro">
        <Nav />

        <div className="controle-container">
          <h1>Controle Financeiro</h1>

          {/* Tabela de Renda Diária */}
          <div className="tabela-container">
            <h2>Renda Diária</h2>
            <table className="tabela-financeira">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Renda (R$)</th>
                </tr>
              </thead>
              <tbody>
                {dadosFinanceiros.map((item, index) => (
                  <tr key={index}>
                    <td>{item.data}</td>
                    <td>R$ {item.valor.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total Diário:</td>
                  <td>R$ {rendaDiariaTotal.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Tabela de Renda Mensal */}
          <div className="tabela-container">
            <h2>Renda Mensal</h2>
            <table className="tabela-financeira">
              <thead>
                <tr>
                  <th>Mês</th>
                  <th>Estimativa (R$)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Novembro 2024</td>
                  <td>R$ {rendaMensalTotal.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tabela de Renda Anual */}
          <div className="tabela-container">
            <h2>Renda Anual</h2>
            <table className="tabela-financeira">
              <thead>
                <tr>
                  <th>Ano</th>
                  <th>Estimativa (R$)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024</td>
                  <td>R$ {rendaAnualTotal.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="footer-position">
        <Footer />
      </div>
    </>
  );
}
