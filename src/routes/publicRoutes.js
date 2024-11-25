import { Router } from 'express';
import clienteController from '../controllers/clienteController.js';
import funcionarioController from '../controllers/funcionarioController.js';


const router = Router();


router.post('/cadastro', clienteController.cadastrar);
router.post('/login', clienteController.login);



export default router