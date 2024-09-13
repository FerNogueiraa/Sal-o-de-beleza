import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cadastro from './pages/Cadastro'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cadastro />
  </StrictMode>,
)
