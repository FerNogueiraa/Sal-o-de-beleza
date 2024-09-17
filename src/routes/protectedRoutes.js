import { Router }  from 'express';
import clienteController from '../controllers/clienteController.js';
import {authMiddleware} from '../middleware/authMiddleware.js';

const router = Router();

router.use(authMiddleware);


//rotas para agendarmento
router.post('/agendamento', clienteController.criarAgendamento);
router.get('/agendamento', clienteController.listarAgendamento);

export default router

