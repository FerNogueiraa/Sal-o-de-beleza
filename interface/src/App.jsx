import "./App.css";
import { Outlet } from "react-router-dom";
import Agendamento from "./routes/agendamento";
import Cadastro from "./routes/cadastro";
import Login from "./routes/login";
import Home from "./routes/home";

// Navegando entre paginas

import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  )
}

export default App;
