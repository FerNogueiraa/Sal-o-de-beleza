import React from 'react';
import "../styles/nav.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import perfil from '../assets/perfil.png';

export default function Nav() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className='nav'>
        <div className='content-left'>
            <h1 className='title'>Sandra Sobrancelhas</h1>
            <ul className='routes'>
                <Link to="/">Home</Link>
                <a href='https://maps.app.goo.gl/6rfzgWo2YYFTd3hS9' target='_blank' rel='noopener noreferrer'>Localização</a>
                <Link to="/Agendamento">Agendamento</Link>
            </ul>
        </div>
        <span>
            {isLoggedIn ? (
                <div className="user-menu">
                    <img src={perfil} alt="Imagem do perfil" className='img-perfil'/>
                    <button onClick={logout} className='btn-logout'>Sair</button>
                </div>
            ) : (
                <button className='btn-login'><Link to="/Login">Login</Link></button>
            )}
        </span>
    </div>
  );
};