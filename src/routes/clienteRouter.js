import { Router } from 'express';
import clienteController from '../controllers/clienteController.js';

const router = Router();

router.post('/', clienteController.criarCliente);
router.get('/', clienteController.listarClientes);
router.delete('/:id', clienteController.deletarCliente);

export default router;