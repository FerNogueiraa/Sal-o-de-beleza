import React, { useState } from 'react';
import "../styles/nav.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import user from '../assets/user.png';
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css';
import MeusAgendamentos from './meus-agendamentos';

export default function Nav() {
  const { isLoggedIn, userRole, logout } = useAuth();
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
        <h1 className='title'>
          Sandra <span className='title2'>Sobrancelhas</span>
        </h1>
        <ul className='routes'>
          {isLoggedIn ? (
            <>
              
              
              {userRole === 'cliente' && (
                <>
                  <Link to="/">Home</Link>
                  <a href='https://maps.app.goo.gl/6rfzgWo2YYFTd3hS9' target='_blank' rel='noopener noreferrer'>Localização</a>
                  <Link to="/Agendamento">Agendamento</Link>
                </>
              )}
              {userRole === 'funcionario' && (
                <>
                  <Link to="/PaginaFuncionario">Funcionário</Link>
                  <Link to="/Financeiro">Financeiro</Link>
                </>
              )}
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <a href='https://maps.app.goo.gl/6rfzgWo2YYFTd3hS9' target='_blank' rel='noopener noreferrer'>Localização</a>
            </>
          )}
        </ul>
      </div>
      <div className="user-menu">
        {isLoggedIn ? (
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
              {userRole === 'cliente' && (
                <button className='popup-item' type='button' onClick={handleOpenMyAppointments}>Meus Agendamentos</button>
              )}
              <button className='popup-item' onClick={logout}>Logout</button>
            </div>
          </Popup>
        ) : (
          <Link className='login-button' to="/Login">
            <p>Login</p>
          </Link>
        )}
      </div>
      {userRole === 'cliente' && <MeusAgendamentos isOpen={showMyAppointments} onClose={handleCloseMyAppointments} />}
    </div>
  );
}