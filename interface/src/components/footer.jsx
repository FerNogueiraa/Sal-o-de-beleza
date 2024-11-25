import React from "react";
import "../styles/footer.css";
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'; // Importação dos ícones

export default function Footer() {
  return (
    <div className="footer">
      <div className="up-content">
        <div className="media-social">
          <h3>Redes Sociais</h3>
          <div className="anchor-media">
            
          <a href="https://www.instagram.com/sandra.sobrancelhas" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={80} color="#fff" />
              <span>@sandra.sobrancelhas</span>
            </a>
            <a href="https://wa.me/48999980725" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={80} color="#fff" />
              <span>(48)99998-0725</span>
            </a>
            <a href="https://www.facebook.com/sandrasobrancelhas" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={80} color="#fff" />
              <span>Sandra sobrancelhas </span>
            </a>
            
          </div>
          
        </div>
      </div>
      <div className="bottom-content">
        <ul className="Direitos">
          <li>Termos</li>
          <li>Cookies</li>
          <li>Privacidade</li>
        </ul>
        
      </div>
      <p className="Ponto">.</p>
    </div>
  );
}
