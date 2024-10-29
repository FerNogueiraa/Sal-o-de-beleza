import React from "react";
import { FaUserPlus, FaUserMinus } from "react-icons/fa"; // Importando ícones para os botões
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles/Menuopcao.css";

export default function MenuOpcao() {
  return (
    <>
      <div className="content-cadastro">
        <Nav />
      </div>

      <div className="DivOpcao">
        <button className="button-option add-employee">
          <FaUserPlus /> Adicionar Funcionário
        </button>
        <button className="button-option delete-employee">
          <FaUserMinus /> Excluir Funcionário
        </button>
      </div>

      <div className="footer-position">
        <Footer />
      </div>
    </>
  );
}
