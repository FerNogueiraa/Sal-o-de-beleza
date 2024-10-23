import { Router }  from 'express';
import clienteController from '../controllers/clienteController.js';
import {authMiddleware} from '../middleware/authMiddleware.js';
import agendamentoController from '../controllers/agendamentoController.js';

const router = Router();

router.use(authMiddleware);

router.post("/agendamento", agendamentoController.criarAgendamento);
router.get("/agendamentos-por-data", agendamentoController.listarAgendamentosPorData);
router.get("/agendamentos-cliente/:id", agendamentoController.listarAgendamentosPorCliente);
router.get("/servicos", agendamentoController.listarServicos);
router.get("/profissionais", agendamentoController.listarProfissionais);

export default router;  