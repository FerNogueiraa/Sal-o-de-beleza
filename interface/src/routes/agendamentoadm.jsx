import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa"; // Importando ícones
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles/agendamentoadm.css";

export default function Agendamentoadm() {
  const [selectedDate, setSelectedDate] = useState("");
  const [appointments, setAppointments] = useState([
    { id: 1, name: "Cliente 1", time: "10:00", confirmed: null },
    { id: 2, name: "Cliente 2", time: "11:00", confirmed: null },
    { id: 3, name: "Cliente 3", time: "13:00", confirmed: null },
  ]);

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
          {appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-item">
              <span>{appointment.time} - {appointment.name}</span>
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
          ))}
        </div>
      </div>
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
    </>
  );
}
