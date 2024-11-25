import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles/ExcluirFuncionario.css";

export default function ExcluirFuncionario() {
  const [cpf, setCpf] = useState("");

  const handleInputChange = (e) => {
    setCpf(e.target.value);
  };

  const handleDelete = () => {
    // Lógica para excluir funcionário pelo CPF
    alert(`Funcionário com CPF ${cpf} foi excluído.`);
    setCpf(""); // Limpa o campo de CPF após a exclusão
  };

  return (
    <>
      <div className="content-cadastro">
        <Nav />
      </div>

      <div className="container-excluir">
        <div className="excluir-box">
          <h2>Excluir Funcionário</h2>
          <input
            type="text"
            placeholder="Digite o CPF"
            value={cpf}
            onChange={handleInputChange}
          />
          <button onClick={handleDelete}>Excluir Funcionário</button>
        </div>
      </div>

      <div className="footer-position">
        <Footer />
      </div>
    </>
  );
}
