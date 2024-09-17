import "./App.css";
import { Outlet } from "react-router-dom";
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
