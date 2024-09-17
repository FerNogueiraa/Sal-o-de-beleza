import React from "react";
import "../styles/modal2.css";
import limpeza from "../assets/limpeza.jpg";
import micropigmentacao from "../assets/micropigmentacao.jpg";
import design from "../assets/design.jpg";

export default function Modal2({ children, image }) {
  console.log("Imagem: ", image);
  return (
    <>
    
      <div className="content-modal2">
          <div className="content-image2">
          <div className="texto-home">
            <p className="maioresquerda1">Um Visual mais que </p>
            <p className="maior">inovador é sua beleza </p>
            <p className="maioresquerda2">conosco </p>
            <p className="menor1">Venha conferir nosso</p>
            <p className="menor2">atendimento qualificado, e </p>
            <p className="menor">faça sucesso por onde for</p>
        </div>
            <img className="image-women2" src={image} alt="Imagem" />
        </div>
        
        </div>
        <h1 className="servico">Serviços</h1>
        <p className="servicomenor">Alguns dos nossos serviços prestados no studio</p>
        <div className="divservicos">
        <img className="imagem-limpeza" src={limpeza} alt="Imagem" />
        <img className="imagem-micro" src={micropigmentacao} alt="Imagem" />
        <img className="imagem-design" src={design} alt="Imagem" />
        <div className="div-nome">
        <p className="nome1">Limpeza de Pele</p>
        <p className="nome2">Micropigmentação</p>
        <p className="nome3">Design de Sobrancelha</p>
        </div>
        </div>
        
    </>
  );
}