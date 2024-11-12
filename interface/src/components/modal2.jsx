import React from "react";
import "../styles/modal2.css";
import limpeza from "../assets/limpeza.jpg";
import micropigmentacao from "../assets/micropigmentacao.jpg";
import design from "../assets/design.jpg";
import imghistoria from "../assets/imghistoria.png";
import women2 from "../assets/women2.png";
import { Link } from "react-router-dom";
import Agendamento from "../routes/agendamento";



export default function Modal2({ children, image }) {
  console.log("Imagem: ", image);
  return (
    <>
    
      <div className="content-modal2">
  
          <div className="texto-home">
            <p className="maioresquerda1">Um Visual mais que </p>
            <p className="maior">inovador é sua beleza </p>
            <p className="maioresquerda2">conosco </p>
            <br />
            <p className="menor1">Venha conferir nosso atendimento</p>
            <p className="menor2"><strong>qualificado</strong>, e onde for ira fazer <strong>sucesso</strong></p>
            <button className="Botao-Home" >AGENDE SEU HORÁRIO</button>
            <img className="imagem-home" src={women2} alt="Imagem" />
            <p className="Pontodoespaco">.</p>
        </div>
           
       
        
        </div>
        <h1 className="servico">SERVIÇOS</h1>
        <p className="servicomenor">Alguns dos nossos serviços prestados no studio</p>
        <div className="divservicos">
        <img className="imagem-limpeza" src={limpeza} alt="Imagem" />
        <img className="imagem-micro" src={micropigmentacao} alt="Imagem" />
        <img className="imagem-design" src={design} alt="Imagem" />
        <div className="div-nome">
        <p className="nome1">Limpeza de Pele</p>
        <p className="nome2">Micropigmentação</p>
        <p className="nome3">Design de Sobrancelha</p>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="div-historia">
        <div className="div-menorescrita">
        <h1 className="Historia">HISTÓRIA</h1>
        <p className="escrita-historia">Em 2004, Sandra começou a trabalhar com design de sobrancelhas em casa, dedicando-se com paixão e atenção aos detalhes. Seu trabalho logo ganhou fama, e a demanda cresceu tanto que, em 2013, ela abriu seu próprio estúdio. Hoje, Sandra Sobrancelhas é um local renomado, conhecido pela qualidade excepcional e pelo atendimento acolhedor, refletindo o amor e a dedicação de Sandra ao seu ofício.</p>
        </div>
        <img className="imagem-historia" src={imghistoria} alt="Imagem" />
        </div>
        <h1 className="feedback">FEEDBACK</h1>

        <div className="div-feedback">
          <div className="divfeed1">
            <h2 className="retis1">"</h2>
            <h2 className="karen">Karinelli Mariot Giusti</h2>
            
            <div className="divkaren">
            
            <p className="karenfeed">Ótimo atendimento, sempre muito simpatica, lugar aconcheante e ótima profissional. Excelente!</p>
            
            </div>
          </div>
          
          <div className="divfeed2">

          <div className="divfeed1">
            <h2 className="retis2">"</h2>
            <h2 className="larissa">Larissa Giraldi</h2>
            
            <div className="divlarissa">
            
            <p className="larissafeed">Amei o atendimento, ambiente climatizado e serviço de ótima qualidade, recomendo!</p>
            
            </div>
          </div>

          </div>
          <div className="divfeed3">

          <div className="divfeed1">
            <h2 className="retis3">"</h2>
            <h2 className="lucas">Lucas Fogaça</h2>
            
            <div className="divlucas">
            
            <p className="lucasfeed">Muito organizada com os horários e com o atendimento, uma profissional excelente!</p>
            
            </div>
          </div>

          </div>
        </div>
        </div>
        </div>
        
    </>
  );
}