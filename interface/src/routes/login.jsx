import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Footer from "../components/footer";
import { Input } from "../components/input";
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

  const handleUsuarioChange = (e) => {
    console.log("Usuário mudou:", e.target.value);
    setUsuario(e.target.value);
  };

  const handleSenhaChange = (e) => {
    console.log("Senha mudou:", e.target.value);
    setSenha(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    console.log("Tentando login com:", { usuario, senha });

    if (!usuario || !senha) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await api.post('/api/login', { usuario, senha });
      
      console.log('Resposta do servidor:', response.data);
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.clienteId);
      
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      
      navigate('/agendamentos');
    } catch (error) {
      console.error('Erro no login:', error.response || error);
      
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
      <Modal image={womenImage} onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>
          Usuário:
          <Input 
            type="text" 
            value={usuario} 
            onChange={handleUsuarioChange}
          />
        </label>
        <label>
          Senha:
          <Input 
            type="password" 
            value={senha} 
            onChange={handleSenhaChange}
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