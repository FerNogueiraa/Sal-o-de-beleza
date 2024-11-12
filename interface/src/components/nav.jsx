import React, { useState } from 'react';
import "../styles/nav.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import user from '../assets/user.png';
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css';
import MeusAgendamentos from './meus-agendamentos';

export default function Nav() {
  const { isLoggedIn, logout } = useAuth();
  const [showMyAppointments, setShowMyAppointments] = useState(false);

  const handleOpenMyAppointments = () => {
    setShowMyAppointments(true);
  };

  const handleCloseMyAppointments = () => {
    setShowMyAppointments(false);
  };

  return (
    <div className='nav'>
      <div className='content-left'>
        <h1 className='title'>Sandra <h1 className='title2'>Sobrancelhas</h1></h1>
        <ul className='routes'>
          <Link to="/">Home</Link>
          <a href='https://maps.app.goo.gl/6rfzgWo2YYFTd3hS9' target='_blank' rel='noopener noreferrer'>Localização</a>
          <Link to="/Agendamento">Agendamento</Link>
          <Link to="/Agendamentoadm">Agendamento Adm</Link>
        </ul>
      </div>
      <span>
        {isLoggedIn ? (
          <div className="user-menu">
            <Popup
              trigger={
                <button className='user-button'>
                  <img src={user} alt="Imagem do perfil" className='img-perfil'/>
                </button>
              }
              position="bottom right"
              on="click"
              closeOnDocumentClick
              mouseLeaveDelay={300}
              mouseEnterDelay={0}
              contentStyle={{ padding: '0px', border: 'none' }}
              arrow={false}
            >
              <div className='popup-menu'>
                <button className='popup-item' type='button' onClick={handleOpenMyAppointments}>Meus Agendamentos</button>
                <button className='popup-item' onClick={logout}>Logout</button>
              </div>
            </Popup>
          </div>
        ) : (
          <Link className='login-button' to="/Login">
            <p>Login</p>
          </Link>
        )}
      </span>
      <MeusAgendamentos isOpen={showMyAppointments} onClose={handleCloseMyAppointments} />
    </div>
  );
}