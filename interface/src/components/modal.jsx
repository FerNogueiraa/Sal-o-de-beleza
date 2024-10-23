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
        </div>
      </div>
    </div>
  );
}