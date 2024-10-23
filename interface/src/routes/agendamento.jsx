import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Modal from "../components/modal";
import "../styles/agendamento.css";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import CalendarioPopup from "../components/CalendarioPopup";


export default function Agendamento() {
  const [service, setService] = useState("");
  const [professional, setProfessional] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [total, setTotal] = useState(0);
  const [showCalendario, setShowCalendario] = useState(false);
  const [servicos, setServicos] = useState([]);
  const [profissionais, setProfissionais] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Buscar serviços
    api.get('/api/servicos')
      .then(response => setServicos(response.data))
      .catch(error => console.error('Erro ao buscar serviços:', error));

    // Buscar profissionais
    api.get('/api/profissionais')
      .then(response => setProfissionais(response.data))
      .catch(error => console.error('Erro ao buscar profissionais:', error));
  }, []);

  useEffect(() => {
    const servicoSelecionado = servicos.find(s => s.id === service);
    setTotal(servicoSelecionado ? servicoSelecionado.valor : 0);
  }, [service, servicos]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDateTime || !service || !professional) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const agora = new Date();
    if (selectedDateTime < agora) {
      alert('Data e hora de agendamento inválido');
      return;
    }

    try {
      const response = await api.post('/api/agendamento', { 
        data: selectedDateTime.toISOString().split('T')[0],
        horario: selectedDateTime.toTimeString().slice(0, 5),
        servicoId: service,
        profissionalId: professional
      });

      console.log('Resposta do servidor:', response.data);
      alert('Agendamento realizado com sucesso!');
    } catch (error) {
      console.error('Erro completo:', error);
      console.error('Resposta do servidor:', error.response?.data);
      alert(`Erro ao realizar agendamento: ${error.response?.data?.error || error.message}`);
    }
  };

  const handleDateTimeSelect = (dateTime) => {
    setSelectedDateTime(dateTime);
    setShowCalendario(false);
  };

  return (
    <div className="content-cadastro">
      <Nav/>
      <Modal  onSubmit={handleSubmit} className="content-modal">
        <h1>Agendamento</h1>
        <div className="forms-select">
          <label>
            Serviço:
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Selecione um serviço</option>
              {servicos.map(servico => (
                <option key={servico.id} value={servico.id}>{servico.nome}</option>
              ))}
            </select>
          </label>

          <label>
            Profissional:
            <select
              value={professional}
              onChange={(e) => setProfessional(e.target.value)}
            >
              <option value="">Selecione um profissional</option>
              {profissionais.map(prof => (
                <option key={prof.id} value={prof.id}>{prof.nome}</option>
              ))}
            </select>
          </label>

          <button className="btn-calendario" type="button" onClick={() => setShowCalendario(true)}>
            Selecionar Data e Hora
          </button>
        
        </div>
        <div className="content-label">
          <label className="label-total">
            Total: <p>&nbsp;</p>
            <label className="total">R$ {total.toFixed(2)}</label>
            {selectedDateTime && (
            <p className="selected-date-time"> 
              Agendamento: {selectedDateTime.toLocaleString()}
            </p>
          )}
          </label>
        </div>
        <button type="submit" className='btn-agendar'>Agendar</button>
      </Modal>
      {showCalendario && (
        <CalendarioPopup
          onClose={() => setShowCalendario(false)}
          onSelect={handleDateTimeSelect}
        />
      )}
      <div className="footer-position">
        <Footer />
      </div>
    </div>
  );
}