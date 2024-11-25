import React, { useRef } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Modal from "../components/modal";
import "../styles/cadastro.css";
import womenImage from "../assets/women.png";
import api from "../services/api";
import { useNavigate } from "react-router-dom"; // Import correto para redirecionamento

export default function AdicionarFuncionario() {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const inputNome = useRef();
  const inputUsuario = useRef();
  const inputSenha = useRef();
  const inputTelefone = useRef();
  const inputEndereco = useRef();
  const inputCpf = useRef();

  async function createUser() {
    try {
      const response = await api.post('/api/cadastroFuncionario', {
        nome: inputNome.current.value,
        usuario: inputUsuario.current.value,
        senha: inputSenha.current.value,
        telefone: inputTelefone.current.value,
        endereco: inputEndereco.current.value,
        cpf: inputCpf.current.value 
      });

      console.log("Cadastrado", response.data);
      alert("Cadastrado com sucesso");
      navigate("/Login"); // Redireciona após cadastro bem-sucedido
    } catch (error) {
      console.error("Erro ao cadastrar funcionário:", error);
      if (error.response) {
        alert(`Erro no cadastro: ${error.response.data.error || "Erro desconhecido"}`);
      } else {
        alert("Erro de conexão com o servidor");
      }
    }
  }

  return (
    <div className="content-cadastro">
      <Nav />
      <Modal image={womenImage}>
        <h1>Cadastrar Funcionário</h1>
        <label>
          Nome:
          <input className='input' name='nome' type='text' placeholder='Nome' ref={inputNome} required />
        </label>
        <label>
          Usuário:
          <input className='input' name='usuario' type='text' placeholder='Usuario' ref={inputUsuario} required />
        </label>
        <label>
          Senha:
          <input className='input' name='senha' type='password' placeholder='Senha' ref={inputSenha} required />
        </label>
        <label>
          Endereço:
          <input className='input' name='endereco' type='text' placeholder='Endereço' ref={inputEndereco} required />
        </label>
        <label>
          Cpf:
          <input className='input' name='cpf' type='text' placeholder='Cpf' ref={inputCpf} required />
        </label>
        <label>
          Telefone:
          <input className='input' name='telefone' type='text' placeholder='Telefone' ref={inputTelefone} required />
        </label>
        <button type="button" className="btn-cadastro" onClick={createUser}>Cadastrar</button>
      </Modal>
      <div className="footer-position">
        <Footer />
      </div>
    </div>
  );
}