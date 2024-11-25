import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import api from "../services/api";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Modal from "../components/modal";
import Nav from "../components/nav";
import "../styles/Login.css";
import womenImage from "../assets/women.png";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    console.log("Iniciando processo de login...");

    if (!usuario || !senha) {
      console.log("Erro: Campos não preenchidos");
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      console.log("Enviando requisição de login...");
      const response = await api.post('/api/login', { usuario, senha });
      
      const {token, clienteId, tipoUsuario} = response.data;

      console.log('Login bem-sucedido. Resposta do servidor:', {
        status: response.status,
        tokenRecebido: !!response.data.token,
        clienteIdRecebido: !!response.data.clienteId
      });
      
      login(token,clienteId,tipoUsuario);
      
      console.log("token:", localStorage.getItem('token'))
      console.log('userId', localStorage.getItem('userId'))
      console.log('tipoUsuario:', localStorage.getItem('tipoUsuario'))


      console.log("Redirecionando para a página de Agendamento...");
      navigate('/Agendamento');
    } catch (error) {
      console.error('Erro durante o processo de login:', {
        mensagem: error.message,
        resposta: error.response ? {
          status: error.response.status,
          data: error.response.data
        } : 'Sem resposta do servidor',
        request: error.request ? 'Requisição enviada, mas sem resposta' : 'Erro antes do envio da requisição'
      });
      
      if (error.response) {
        setError(error.response.data.error || 'Falha no login. Tente novamente.');
      } else if (error.request) {
        setError('Não foi possível conectar ao servidor. Verifique sua conexão.');
      } else {
        setError('Erro ao processar a requisição. Tente novamente.');
      }
    }
  };

  return (
    <div className="content-cadastro">
      <Nav/>
      <Modal onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>
          Usuário:
          <input 
            type="text" 
            value={usuario} 
            onChange={handleUsuarioChange}
            className="input"
          />
        </label>
        <label>
          Senha:
          <input 
            type="password" 
            value={senha} 
            onChange={handleSenhaChange}
            className="input"
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <Link to="/Cadastro">Não possui conta?</Link>
        <button type="submit" className="btn-login">Entrar</button>
      </Modal>
      <div className="footer-position">
        <Footer />
      </div>
    </div>
  );
}

export default Login;