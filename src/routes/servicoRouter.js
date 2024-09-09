import { Router } from 'express';
import servicoController from "../controllers/servicoController.js";

 const router = Router()

 router.post('/', servicoController.criarServico);
 router.get('/', servicoController.listarServicos);

 export default router