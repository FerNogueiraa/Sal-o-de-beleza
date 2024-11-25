import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa"; // Importando ícones
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles/agendamentoadm.css";
import api from "../services/api"; // Certifique-se de que o axios está configurado

export default function Agendamentoadm() {
  const [selectedDate, setSelectedDate] = useState("");
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async (date) => {
      try {
        const response = await api.get(`/api/agendamentos-por-data`, {
          params: { date }
        });
        console.log("Agendamentos recebidos:", response.data);
        setAppointments(response.data); // Atualiza o estado com os agendamentos recebidos
      } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
        alert("Erro ao buscar agendamentos, tente novamente mais tarde.");
      }
    };

    if (selectedDate) {
      fetchAppointments(selectedDate); // Chama a função quando uma data é selecionada
    }
  }, [selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleConfirm = (id, status) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, confirmed: status }
          : appointment
      )
    );
  };

  return (
    <>
      <div className="content-cadastro">
        <Nav />
      </div>

      <div className="DivAgendamento">
        <div className="date-filter">
          <label htmlFor="date">Filtrar agendamentos:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>

        <div className="appointments-list">
          {appointments.length === 0 ? (
            <p>Nenhum agendamento encontrado para esta data.</p>
          ) : (
            appointments.map((appointment) => (
              <div key={appointment.id} className="appointment-item">
                <span>
                  {appointment.horario} - {appointment.cliente.nome} - {appointment.servico.nome}
                </span>
                <div className="icons">
                  <FaCheck
                    className={`icon ${appointment.confirmed === true ? "confirmed" : ""}`}
                    onClick={() => handleConfirm(appointment.id, true)}
                  />
                  <FaTimes
                    className={`icon ${appointment.confirmed === false ? "declined" : ""}`}
                    onClick={() => handleConfirm(appointment.id, false)}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className="footer-position">
        <Footer />
      </div>
    </>
  );
}