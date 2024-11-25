import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles/ExcluirFuncionario.css";
import api from "../services/api";

export default function ExcluirFuncionario() {
  const [cpf, setCpf] = useState("");

  const handleInputChange = (e) => {
    setCpf(e.target.value.trim()); // Use trim para remover espaços em branco
  };

  const handleDelete = async () => {
    if (!cpf) {
      alert("Por favor, insira um CPF válido.");
      return;
    }

    try {
      console.log(`Tentativa de exclusão para CPF: ${cpf}`);
      // Certifique-se de que o CPF está correto e no formato esperado
      const response = await api.delete(`api/deletarFuncionario/${cpf}`);
      alert(response.data.message);
    } catch (error) {
      console.error('Erro ao excluir funcionário:', error);
      if (error.response) {
        alert(`Erro ao excluir: ${error.response.data.error || "Erro desconhecido"}`);
      } else {
        alert('Erro de conexão com o servidor');
      }
    }

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