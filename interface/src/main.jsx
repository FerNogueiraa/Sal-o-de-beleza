import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './contexts/AuthContext'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home.jsx';
import Login from './routes/login.jsx';
import Cadastro from './routes/cadastro.jsx';
import Agendamento from './routes/agendamento.jsx';
import Agendamentoadm from './routes/agendamentoadm.jsx'
import ErrorPage from './routes/ErrorPage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import MenuOpcao from './routes/Menuopcao.jsx'
import ExcluirFuncionario from './routes/ExcluirFuncionario.jsx'
import AdicionarFuncionario from './routes/AdicionarFuncionario.jsx'
import Servicos from './routes/Servicos.jsx'
import FuncionarioPage from './routes/PaginaFuncionario.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "cadastro",
        element: <Cadastro/>,
      },
      {
        path: "agendamentoadm",
        element: <Agendamentoadm/>,
      },
      {
        path: "Menuopcao",
        element: <MenuOpcao/>,
      },
      {
        path: "ExcluirFuncionario",
        element: <ExcluirFuncionario/>,
      },
      {
        path: "AdicionarFuncionario",
        element: <AdicionarFuncionario/>,
      },
      {
        path: "Servicos",
        element: <Servicos/>,
      },
      {
        path: "PaginaFuncionario",
        element: <FuncionarioPage/>,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "agendamento",
            element: <Agendamento />
          },
          {
            path: "agendamentoadm",
            element: <Agendamentoadm />
          }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>
);