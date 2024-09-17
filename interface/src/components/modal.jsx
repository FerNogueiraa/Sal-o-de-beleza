import React from "react";
import "../styles/modal.css";

export default function Modal({ children, image, onSubmit }) {
  return (
    <div className="content-modal">
      <div className="forms">
        <form onSubmit={onSubmit}>
          {children}
        </form>
        <div className="content-image">
          <img className="image-women" src={image} alt="Imagem" />
        </div>
      </div>
    </div>
  );
}