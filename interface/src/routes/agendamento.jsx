import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Modal from "../components/modal";
import "../styles/agendamento.css";
import womenImage from "../assets/women2.png";
import { Token } from "@mui/icons-material";

export default function Agendamento() {

  const [service, setService] = useState("");
  const [professional, setProfessional] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [payment, setPayment] = useState("");
  const [total, setTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Serviço:", service);
    console.log("Profissional:", professional);
    console.log("Data:", date);
    console.log("Horário:", time);
    console.log("Pagamento:", payment);
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
              <option value="corte">Limpeza De Pele</option>
              <option value="manicure">Sobrancelha normal</option>
              <option value="manicure">Sobrancelha Com Henna</option>
              <option value="massagem">Sobrancelha Com Buço</option>
              <option value="manicure">Last Lifting</option>
              <option value="manicure">Micropigmentação De Sobrancelha</option>
              <option value="manicure">Micropigmentação Labial</option>
              <option value="manicure">Delineado Superior</option>
              <option value="manicure">Delineado Inferior</option>
              <option value="manicure">Delineado Superior/Inferior</option>
            </select>
          </label>

          <label>
            Profissional:
            <select
              value={professional}
              onChange={(e) => setProfessional(e.target.value)}
            >
              <option value="">Selecione um profissional</option>
              <option value="joao">Sandra</option>
              <option value="maria">Juliana</option>
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
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
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
            <label className="total">{total}</label>
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