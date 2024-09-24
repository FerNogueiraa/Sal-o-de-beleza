import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Modal from "../components/modal";
import "../styles/agendamento.css";
import womenImage from "../assets/women2.png";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const horariosDisponiveis = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
];

export default function Agendamento() {
  const [service, setService] = useState("");
  const [professional, setProfessional] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [payment, setPayment] = useState("");
  const [total, setTotal] = useState(0);
  const [horariosOcupados, setHorariosOcupados] = useState([]);
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
    if (date) {
      api.get(`/api/agendamentos-por-data?data=${date}`)
        .then(response => setHorariosOcupados(response.data))
        .catch(error => console.error('Erro ao buscar horários ocupados:', error));
    }
  }, [date]);

  useEffect(() => {
    const servicoSelecionado = servicos.find(s => s.id === service);
    setTotal(servicoSelecionado ? servicoSelecionado.valor : 0);
  }, [service, servicos]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/agendamento', { 
        data: date, 
        horario: time, 
        servicoId: service,
        profissionalId: professional,
        formaPagamento: payment
      });
      alert('Agendamento realizado com sucesso!');
      setHorariosOcupados([...horariosOcupados, time]);
      navigate('/dashboard');
    } catch (error) {
      alert('Erro ao realizar agendamento');
      console.error('Erro ao criar agendamento:', error);
    }
  };

  return (
    <div className="content-cadastro">
      <Nav/>
      <Modal image={womenImage} onSubmit={handleSubmit}>
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

          <label>
            Data:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <label>
            Horário:
            <select 
              value={time} 
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Selecione um horário</option>
              {horariosDisponiveis.map(h => (
                !horariosOcupados.includes(h) && (
                  <option key={h} value={h}>{h}</option>
                )
              ))}
            </select>
          </label>

          <label>
            Pagamento:
            <select
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            >
              <option value="">Selecione uma forma de pagamento</option>
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao">Cartão de Crédito</option>
              <option value="pix">Pix</option>
            </select>
          </label>
        </div>
        <div className="content-label">
          <label className="label-total">
            Total: <p>&nbsp;</p>
            <label className="total">R$ {total.toFixed(2)}</label>
          </label>
        </div>
        <button type="submit" className='btn-agendar'>Agendar</button>
      </Modal>
      <div className="footer-position">
        <Footer />
      </div>
    </div>
  );
}