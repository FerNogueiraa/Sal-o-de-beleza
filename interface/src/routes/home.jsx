import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Modal2 from "../components/modal2";
import "../styles/cadastro.css";
import womenImage from "../assets/women.png";
import women2Image from "../assets/women2.png";

export default function MeusAgendamentos() {
  return (
    <div className="content-cadastro">
      <Nav/>
      <Modal2 image={women2Image} />
      <div className="footer-position">
        <Footer />
      </div>
    </div>
  );
}
