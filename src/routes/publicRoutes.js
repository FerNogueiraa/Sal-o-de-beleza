import { Router } from 'express';
import clienteController from '../controllers/clienteController.js';



const router = Router();

//Não vai pro projeto
router.delete('/cliente/:id', clienteController.deletarCliente);


router.post('/cadastro', clienteController.cadastrar);
router.post('/login', clienteController.login);


export default router