import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const agendamentoController = {
  criarAgendamento: async (req, res) => {
  
    try {
      const { data, horario, servicoId, profissionalId } = req.body;
      const clienteId = req.userId; // Obtido do middleware de autenticação
  
      // Validação dos dados de entrada
      if (!data || !horario || !servicoId || !profissionalId ||  !clienteId) {
        return res.status(400).json({ error: 'Dados incompletos para criar o agendamento' });
      }
  
      const dataAgendamento = new Date(data);
      if (isNaN(dataAgendamento.getTime())) {
        console.log('Data inválida:', data);
        return res.status(400).json({ error: 'Data inválida' });
      }
  
      // Verificar se o horário está disponível
      const agendamentoExistente = await prisma.agendamento.findFirst({
        where: {
          data: dataAgendamento,
          horario: horario,
          idProfissional: profissionalId // Alterado de profissionalId para idProfissional
        }
      });
  
      if (agendamentoExistente) {
        return res.status(400).json({ error: 'Horário não disponível para este profissional' });
      }
  
      // Verificar se o cliente existe
      const clienteExiste = await prisma.cliente.findUnique({
        where: { id: clienteId }
      });
  
      if (!clienteExiste) {
        return res.status(400).json({ error: 'Cliente não encontrado' });
      }
  
      // Verificar se o serviço existe
      const servicoExiste = await prisma.servico.findUnique({
        where: { id: servicoId }
      });
  
      if (!servicoExiste) {
        return res.status(400).json({ error: 'Serviço não encontrado' });
      }
  
      // Verificar se o profissional existe
      const profissionalExiste = await prisma.funcionario.findUnique({
        where: { id: profissionalId }
      });
  
      if (!profissionalExiste) {
        return res.status(400).json({ error: 'Profissional não encontrado' });
      }
  
      // Criar o agendamento
      const agendamento = await prisma.agendamento.create({
        data: {
          data: dataAgendamento,
          horario: horario,
          cliente: { connect: { id: clienteId } },
          servico: { connect: { id: servicoId } },
          profissional: { connect: { id: profissionalId } },
        }
      });
  
      res.status(201).json(agendamento);
    } catch (error) {
      if (error.code === 'P2002') {
        return res.status(400).json({ error: 'Conflito de agendamento. Horário pode já estar ocupado.' });
      }
      if (error.code === 'P2025') {
        return res.status(400).json({ error: 'Registro relacionado não encontrado. Verifique os IDs fornecidos.' });
      }
      res.status(500).json({ error: 'Erro interno ao criar agendamento', details: error.message });
    }
  },

  listarAgendamentosPorData: async (req, res) => {
    const { date } = req.query;
    console.log('Data recebida para consulta:', date);
  
    if (!date) {
      return res.status(400).json({ error: 'Data inválida fornecida' });
    }
  
    try {
      const dataInicio = new Date(date);
      dataInicio.setUTCHours(0, 0, 0, 0);
  
      const dataFim = new Date(dataInicio);
      dataFim.setUTCHours(23, 59, 59, 999);
  
      const agendamentos = await prisma.agendamento.findMany({
        where: {
          data: {
            gte: dataInicio,
            lte: dataFim,
          },
        },
        include: {
          cliente: {
            select: { nome: true }
          },
          servico: {
            select: { nome: true }
          },
          profissional: {
            select: { nome: true }
          }
        }
      });
  
      console.log('Agendamentos encontrados:', agendamentos);
      res.status(200).json(agendamentos);
    } catch (error) {
      console.error('Erro ao listar agendamentos:', error);
      res.status(500).json({ error: 'Erro ao listar agendamentos' });
    }
  },


  listarServicos: async (req, res) => {
    try {
      const servicos = await prisma.servico.findMany();
      res.json(servicos);
    } catch (error) {
      console.error('Erro ao listar serviços:', error);
      res.status(500).json({ error: 'Erro ao listar serviços', details: error.message });
    }
  },

  listarProfissionais: async (req, res) => {
    try {
      const profissionais = await prisma.funcionario.findMany({
        select: {
          id: true,
          nome: true
        }
      });
      res.json(profissionais);
    } catch (error) {
      console.error('Erro ao listar profissionais:', error);
      res.status(500).json({ error: 'Erro ao listar profissionais', details: error.message });
    }
  },
  listarAgendamentosPorCliente: async (req, res) => {
    try{
      const { id } = req.params;  
      const agendamentos = await prisma.agendamento.findMany({
       where: {
        idCliente: id
       }, 
       include: {
        servico: true,
        profissional: true
       }
      });
      res.json(agendamentos);
      console.log(agendamentos)
    }catch(error){
      console.error('Erro ao contar agendamentos por cliente:', error);
      res.status(500).json({ error: 'Erro ao contar agendamentos por cliente', details: error.message });
    }
  }

};

export default agendamentoController;