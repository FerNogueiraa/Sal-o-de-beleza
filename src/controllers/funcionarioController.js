import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const funcionarioController = {
  criarFuncionario: async (req, res) => {
    try {
      const { nome, usuario, senha, endereco, cpf, telefone } = req.body;
      const hashedSenha = await bcrypt.hash(senha, 10);

      const novoFuncionario = await prisma.funcionario.create({
        data: { nome, usuario, senha: hashedSenha, endereco, cpf, telefone }
      });
      res.status(201).json({ message: "Funcionário criado com sucesso", funcionarioId: novoFuncionario.id });
    } catch (error) {
      console.error("Erro na criação do funcionário:", error);
      res.status(500).json({ message: "Erro na criação do funcionário" });
    }
  },
  listarFuncionarios: async (req, res) => {
    try {
      const funcionarios = await prisma.funcionario.findMany();
      res.status(200).json(funcionarios);
    } catch (error) {
      console.error('Erro ao listar funcionários:', error);
      res.status(500).json({ error: 'Erro ao listar funcionários', details: error.message });
    }
  },
  excluirFuncionario: async (req, res) => {
    const { cpf } = req.params;


    try {
      console.log(`Recebido para exclusão: ${cpf}`);


      const funcionario = await prisma.funcionario.findUnique({
        where: { cpf }
      });

      if (!funcionario) {
        return res.status(404).json({ error: "Funcionário não encontrado" });
      }

      await prisma.funcionario.delete({
        where: { cpf }
      });

      res.status(200).json({ message: "Funcionário excluído com sucesso" });
    } catch (error) {
      console.error("Erro ao excluir funcionário:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
};

export default funcionarioController;