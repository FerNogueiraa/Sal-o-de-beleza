import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles/AdicionarFuncionario.css";

export default function AdicionarFuncionario() {
  const [nomeFuncionario, setNomeFuncionario] = useState("");

  const handleInputChange = (e) => {
    setNomeFuncionario(e.target.value);
  };

  return (
    <>
      <div className="content-cadastro">
        <Nav />
      </div>

      <div className="DivOpcaoo">
  <div className="form-container">
    <h2 className="form-title">Adicionar Funcionário</h2>
    <input
      type="text"
      className="input-field"
      placeholder="Digite o nome do funcionário"
      value={nomeFuncionario}
      onChange={handleInputChange}
    />
    <button className="button-optionn delete-employee">
      Adicionar Funcionário
    </button>
  </div>
  
</div>
<br />
  <br />
  <br />
  <br />
  <br />
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
