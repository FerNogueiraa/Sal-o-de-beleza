import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import funcionarioController from '../controllers/funcionarioController.js';

const router = Router();

router.post('/', funcionarioController.criarFuncionario);
router.get('/',funcionarioController.listarFuncionarios);

export default router;