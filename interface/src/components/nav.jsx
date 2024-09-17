import React from 'react';
import "../styles/nav.css";
import { Link } from 'react-router-dom';
import Home from '../routes/home';
import Footer from './footer';
import Agendamento from '../routes/agendamento';
import Login from '../routes/login';

export default function Nav() {
  return (
    <div className='nav'>
        <div className='content-left'>
            <h1 className='title'>Sandra Sobrancelhas</h1>
            <ul className='routes'>
                <Link to="/">Home</Link>
                <Link to="https://maps.app.goo.gl/6rfzgWo2YYFTd3hS9">Localização</Link>
                <Link to="Agendamento">Agendamento</Link>
            </ul>
        </div>
        <span>
            <button  className='btn-login' ><a href="Login">Login</a></button>
        </span>
    </div>
  );
};


