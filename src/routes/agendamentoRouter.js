import { Router } from "express";
import agendamentoController from "../controllers/agendamentoController.js";

const router = Router()

router.post("/", agendamentoController.criarAgendamento);
router.get("/:id", agendamentoController.listarAgendamento);

export default router;