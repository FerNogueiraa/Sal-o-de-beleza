import React, { useState, useEffect } from 'react';
import '../styles/meus-agendamentos.css';
import { useAuth } from '../contexts/AuthContext';

const MeusAgendamentos = ({ isOpen, onClose }) => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (isOpen && user) {
      fetchAgendamentos();
    }
  }, [isOpen, user]);

  const fetchAgendamentos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/agendamentos-cliente/${user.id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Adicione o token de autenticação
        }
      });
      if (!response.ok) {
        throw new Error('Falha ao buscar agendamentos');
      }
      const data = await response.json();
      setAgendamentos(data);
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error);
    } finally {
      setIsLoading(false);
    }
  };


  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Meus Agendamentos</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {isLoading ? (
            <p>Carregando agendamentos...</p>
          ) : agendamentos.length > 0 ? (
            agendamentos.map((agendamento) => (
              <div key={agendamento.id} className="agendamento-card">
                <div className="agendamento-data">
                  <span className="data">{agendamento.data}</span>
                </div>
                <div className="agendamento-info">
                  <h3>{agendamento.servico}</h3>
                  <p>Horário: {agendamento.horario}</p>
                  <p>Profissional: {agendamento.profissional}</p>
                  <span className={`status ${agendamento.status.toLowerCase()}`}>
                    {agendamento.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>Você não tem agendamentos.</p>
          )}
        </div>
        <div className="modal-footer">
          <button className="fechar-button" onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default MeusAgendamentos;