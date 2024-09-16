import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();


const clienteController = {
  cadastrar: async (req, res) => {
    try{
      const {nome, usuario, senha, telefone} = req.body;
      const hashedSenha = await bcrypt.hash(senha, 10);

      const novoCliente = await prisma.Cliente.create({
        data: {nome, usuario, senha: hashedSenha, telefone}
      })
      res.status(201).json({ message: 'Cliente cadastrado com sucesso', clienteId: novoCliente.id });
    }catch(error){
      console.error("Erro no cadastro",error);
      res.status(500).json({ error: 'Erro no cadastro' });
    }
  },
  login: async (req, res) => {
    try {
      const { usuario, senha } = req.body;
      const cliente = await prisma.cliente.findUnique({ where: { usuario } });
      
      if (!cliente || !(await bcrypt.compare(senha, cliente.senha))) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const token = jwt.sign({ id: cliente.id }, process.env.SECRET, { expiresIn: '1d' });
      res.json({ token, clienteId: cliente.id });
    } catch (error) {
      console.error('Erro no login:', error.message);
      console.error(error.stack);
      res.status(500).json({ error: 'Erro interno no servidor', details: error.message });
    }
  },
  criarAgendamento: async (req, res) => {
    try {
      const { data, horario, servicoId } = req.body;
      const clienteId = req.userId; // Obtido do middleware de autenticação
  
      // Validação básica
      if (!data || !horario || !servicoId) {
        return res.status(400).json({ error: 'Data, horário e serviço são obrigatórios' });
      }
  
      // Criar o agendamento
      const agendamento = await prisma.Agendamento.create({
        data: {
          data: data,
          horario: horario,
          cliente: { connect: { id: clienteId } },
          servico: { connect: { id: servicoId.toString() } } // Converte para string
        }
      });
  
      res.status(201).json(agendamento);
    } catch (error) {
      console.error('Erro ao criar agendamento:', error);
      res.status(500).json({ error: 'Erro ao criar agendamento', details: error.message });
    }
  },
  listarAgendamento: async (req, res) => {
    try {
      const clienteId = req.userId;

      const agendamentos = await prisma.Agendamento.findMany({
        where: { clienteId },
        include: {
          servico: true // Inclui os detalhes do serviço
        },
        orderBy: {
          data: 'asc' // Ordena por data, do mais próximo ao mais distante
        }
      });

      res.json(agendamentos);
    } catch (error) {
      console.error('Erro ao listar agendamentos:', error);
      res.status(500).json({ error: 'Erro ao listar agendamentos' });
    }
  },
  deletarCliente: async (req, res) => {
    try {
      const { id } = req.params;
      const deletarCliente = await prisma.Cliente.delete({
        where: {
          id: id
        }
      });
      res.status(200).json(deletarCliente);
    } catch (error) {
      console.error('Erro ao deletar cliente:', error);
      res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
  }

} 

export default clienteController