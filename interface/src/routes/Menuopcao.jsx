import React from "react";
import { FaUserPlus, FaUserMinus } from "react-icons/fa"; // Ícones para os botões
import { useNavigate } from "react-router-dom"; // Hook para navegação
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles/Menuopcao.css";

export default function MenuOpcao() {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <>
      <div className="content-cadastro">
        <Nav />
      </div>

      <div className="menu-opcao-container">
        <div className="menu-opcao-box">
          <button
            className="menu-opcao-button"
            onClick={() => navigate("/AdicionarFuncionario")}
          >
            <FaUserPlus className="button-icon" />
            Adicionar Funcionário
          </button>
          <button
            className="menu-opcao-button"
            onClick={() => navigate("/ExcluirFuncionario")}
          >
            <FaUserMinus className="button-icon" />
            Excluir Funcionário
          </button>
        </div>
      </div>

      <div className="footer-position">
        <Footer />
      </div>
    </>
  );
}
