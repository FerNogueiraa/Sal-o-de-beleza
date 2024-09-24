import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Instagram } from "lucide-react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="up-content">
        <h1 className="title footer">Sandra Sobrancelhas</h1>
        <div className="media-social">
          <h3>Redes Sociais</h3>
          <div className="anchor-media">
            <a href="https://www.facebook.com/sandra.wanderlindfrassetto" target='_blank' rel='noopener noreferrer' className="facebook"> 
              <FacebookOutlinedIcon />
            </a>
            <a className="whatssap">
              <WhatsAppIcon />
            </a>
            <a href="https://www.instagram.com/sandra.sobrancelhas/" target='_blank' rel='noopener noreferrer' className="instagram">
              <Instagram />
            </a>
          </div>
          <a href="tel:+4899806-4511">
            <p>(48)99806-4511</p>
          </a>
        </div>
      </div>
      <div className="bottom-content">
        <span className="direitos">
          <a href="">Termos</a>
          <a href="">Privacidade</a>
          <a href="">Cookies</a>
        </span>
        <span className="line"></span>
      </div>
    </div>
  );
}
