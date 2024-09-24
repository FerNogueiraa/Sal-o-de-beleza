import React from 'react';
import "../styles/nav.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import user from '../assets/user.png';
import loginImage from '../assets/login.png'; // Import the login image
import logoutimage from '../assets/logout.png';

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
                    <img src={logoutimage} onClick={logout} className='login-button' />
                    <img src={user} alt="Imagem do perfil" className='img-perfil'/>
                </div>
            ) : (
                <Link to="/Login">
                    <img src={loginImage} alt="Login Button" className='login-button' />
                </Link>
            )}
        </span>
    </div>
  );
};