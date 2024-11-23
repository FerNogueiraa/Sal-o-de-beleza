import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles/AdicionarFuncionario.css";

export default function AdicionarFuncionario() {
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Funcionário Adicionado:", {
      nome,
      usuario,
      senha,
      endereco,
      cpf,
      telefone,
    });
    alert("Funcionário adicionado com sucesso!");
    // Limpar os campos após o envio
    setNome("");
    setUsuario("");
    setSenha("");
    setEndereco("");
    setCpf("");
    setTelefone("");
  };

  return (
    <>
      <div className="content-cadastro">
        <Nav />
      </div>

      <div className="form-container">
       
        <form className="funcionario-form" onSubmit={handleSubmit}>
        <h2 className="addfunc">Adicionar Funcionário</h2>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Nome do funcionário"
            />
          </label>
          <label>
            Usuário:
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
              placeholder="Usuário"
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              placeholder="Senha"
            />
          </label>
          <label>
            Endereço:
            <input
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
              placeholder="Endereço"
            />
          </label>
          <label>
            CPF:
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
              placeholder="CPF"
            />
          </label>
          <label>
            Telefone:
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
              placeholder="Telefone"
            />
          </label>
          <button type="submit" className="btn-adiconarfunc">Adicionar</button>
          <p className="pontoajeitar">.</p>
        </form>
      </div>

      <div className="footer-position">
        <Footer />
      </div>
    </>
  );
}

