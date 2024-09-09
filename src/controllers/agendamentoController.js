import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const agendamentoController = {
  criarAgendamento: async (req, res) => {
    console.log(req.body.data);
    try {
      const novoAgendamento = await prisma.agendamento.create({
        data: {
          data: req.body.data,
          horario: req.body.horario,
          cliente: {
            connect: {
              id: req.body.idCliente,
            },
          },
          servico: {
            connect: {
              id: req.body.idServico,
            },
          },
        },
      });
      res.status(201).json(novoAgendamento);
    } catch (error) {
      console.error('Erro ao criar agendamento:', error);
      res.status(500).json({ error: 'Erro ao criar agendamento', details: error.message });
    }
  },

  listarAgendamento: async (req, res) => {
    try {
      const { id } = req.params; // Obtém o ID a partir dos parâmetros da URL

      // Busca o agendamento pelo ID
      const agendamento = await prisma.agendamento.findUnique({
        where: {
          id: id, // Usa o ID diretamente como string
        },
      });

      // Verifica se o agendamento foi encontrado
      if (!agendamento) {
        return res.status(404).json({ error: 'Agendamento não encontrado' });
      }

      // Retorna o agendamento encontrado
      res.status(200).json(agendamento);
    } catch (error) {
      console.error('Erro ao buscar agendamento:', error);
      res.status(500).json({ error: 'Erro ao buscar agendamento', details: error.message });
    }
  },
};

export default agendamentoController;