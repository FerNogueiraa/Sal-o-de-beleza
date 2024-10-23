import React, { useState } from 'react';
import '../styles/calendario.css';

const CalendarioPopup = ({ onClose, onSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const horariosDisponiveis = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',  '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'];

  const isDiaDisponivel = (data) => {
    const diaDaSemana = data.getDay();
    return diaDaSemana >= 2 && diaDaSemana <= 6; // 2 = Terça, 6 = Sábado
  };

  const renderCalendario = () => {
    const primeiroDia = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const diasNoMes = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    let dias = [];
    for (let i = 0; i < primeiroDia; i++) {
      dias.push(<div key={`empty-${i}`} className="dia vazio"></div>);
    }

    for (let dia = 1; dia <= diasNoMes; dia++) {
      const data = new Date(currentDate.getFullYear(), currentDate.getMonth(), dia);
      const disponivel = isDiaDisponivel(data);
      dias.push(
        <div
          key={dia}
          className={`dia ${selectedDate && selectedDate.toDateString() === data.toDateString() ? 'selecionado' : ''} ${!disponivel ? 'indisponivel' : ''}`}
          onClick={() => disponivel && setSelectedDate(data)}
        >
          {dia}
        </div>
      );
    }

    return dias;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleYearChange = (e) => {
    setCurrentDate(new Date(parseInt(e.target.value), currentDate.getMonth(), 1));
  };

  const handleMonthChange = (e) => {
    setCurrentDate(new Date(currentDate.getFullYear(), parseInt(e.target.value), 1));
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      const dateTime = new Date(selectedDate);
      const [hours, minutes] = selectedTime.split(':');
      dateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      onSelect(dateTime);
      onClose();
    }
  };

  return (
    <div className="calendario-popup">
      <div className="calendario-header">
        <button onClick={handlePrevMonth} className='volta-mes'>&lt;</button>
        <select value={currentDate.getMonth()} onChange={handleMonthChange}className='mes'>
          {meses.map((mes, index) => (
            <option key={mes} value={index}>{mes}</option>
          ))}
        </select>
        <select value={currentDate.getFullYear()} onChange={handleYearChange} className='ano'>
          {Array.from({ length: 10 }, (_, i) => currentDate.getFullYear() + i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <button onClick={handleNextMonth} className='prox-mes'>&gt;</button>
      </div>
      <div className="calendario-container">
        <div className="cabecalho-calendario">
          {diasDaSemana.map(dia => <div key={dia}>{dia}</div>)}
        </div>
        <div className="dias-calendario">
          {renderCalendario()}
        </div>
      </div>
      {selectedDate && (
        <div className="selecao-horario">
          <h3>Selecione um horário:</h3><br />
          <div className="horarios">
            {horariosDisponiveis.map(horario => (
              <button
                key={horario}
                onClick={() => setSelectedTime(horario)}
                className={selectedTime === horario ? 'selecionado' : ''}
              >
                {horario}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="acoes">
        <button className='btn-cancel'  onClick={onClose}>Cancelar</button>
        <button  className='btn-confirm'  onClick={handleConfirm} disabled={!selectedDate || !selectedTime}>
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default CalendarioPopup;