import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Modal from "../components/modal";
import "../styles/cadastro.css";
import womenImage from "../assets/women.png";
import api from "../services/api";
//Importando Hooks
import { useRef, useState } from "react";
import { useHref } from "react-router-dom";




export default function Cadastro() {


  const inputNome = useRef();
  const inputUsuario = useRef();
  const inputSenha = useRef();
  const inputTelefone = useRef();

  async function createUser() {
    try {
      await api.post('/api/cadastro', {
        nome: inputNome.current.value,
        usuario: inputUsuario.current.value,
        senha: inputSenha.current.value,
        telefone: inputTelefone.current.value
      })
      console.log("Cadastrado")
      alert("Cadastrado com sucesso")
      useHref("/Login")
    } catch (error) {
      console.log(error)
    }
  }

  //Front End
  return (
    <div className="content-cadastro">
      <Nav />
      <Modal image={womenImage}>
        <h1>Cadastrar</h1>
        <label>
          Nome:
          <input  className='input' name='nome' type='text'  ref={inputNome} required />


        </label>
        <label>
          Usuário:
          <input  className='input' name='usuario' type='text'  ref={inputUsuario} required />
        </label>
        <label>
          Senha:
          <input className='input' name='senha' type='password'  ref={inputSenha}  required/>
        </label>
        <label>
          Telefone:
          <input className='input' name='telefone' type='text'  ref={inputTelefone} required/>
        </label>
        <button type="button" className="btn-cadastro" onClick={createUser}>Cadastrar</button>
      </Modal>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
    </div>
  );
}