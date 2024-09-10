import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const servicoController = {
  async criarServico(req, res) {
    try {
      const novoServico = await prisma.Servico.create({
        data: {
          nome: req.body.nome,
          valor: req.body.valor,
        }
      });
      res.status(201).json(novoServico);
    } catch (error) {
      console.error("Erro ao criar serviço:", error);
      res.status(500).json({ error: "Erro ao criar serviço", details: error.message });
    }
  },

  async listarServicos(req, res) {
    try {
      const servicos = await prisma.servico.findMany();
      res.status(200).json(servicos);
    } catch (error) {
      console.error("Erro ao listar serviços:", error);
      res.status(500).json({ error: "Erro ao listar serviços", details: error.message });
    }
  },
};

export default servicoController;