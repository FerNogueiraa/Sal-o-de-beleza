import React from "react";
import "../styles/Funcionariopagina.css"; // Certifique-se de que o estilo é apropriado para os novos cards
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt } from 'react-icons/fa'; // Usando ícones de usuário e agenda
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function FuncionarioPage() {
  return (
    <>
    <div className="content-cadastro">
        <Nav />
      </div>
      <div className="content-funcionariooo">
        <div className="titulo-funcionariooo">
          <h1>Bem-vindo ao Painel do Funcionário</h1>
          <p>Escolha uma das opções abaixo para gerenciar seu trabalho.</p>
        </div>

        <div className="cards-funcionariooo">
          {/* Card Gerenciar Funcionários */}
          <Link to="/Menuopcao" className="card-funcionariooo">
            <div className="card-icon">
              <FaUser size={50} />
            </div>
            <h2>Gerenciar Funcionários</h2>
            <p>Gerenciamento de adição e exclusão de funcionários.</p>
          </Link>

          {/* Card Meus Agendamentos */}
          <Link to="/agendamentoadm" className="card-funcionariooo">
            <div className="card-icon">
              <FaCalendarAlt size={50} />
            </div>
            <h2>Meus Agendamentos</h2>
            <p>Confira e organize os agendamentos realizados para o seu atendimento.</p>
          </Link >
        </div>
      </div>
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
