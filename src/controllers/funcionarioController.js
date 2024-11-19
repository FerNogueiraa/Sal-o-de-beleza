import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; // Certifique-se de que o bcrypt está importado corretamente

const prisma = new PrismaClient();

const funcionarioController = {
  criarFuncionario: async (req, res) => {
    try {
      const { nome, usuario, senha, endereco, cpf, telefone } = req.body;

      // Verifique se a senha está definida
      if (!senha) {
        return res.status(400).json({ error: 'Senha é obrigatória' });
      }

      // Criptografa a senha
      const hashedSenha = await bcrypt.hash(senha, 10);

      const novoFuncionario = await prisma.Funcionario.create({
        data: {
          nome,
          usuario,
          senha: hashedSenha, // Usa a senha criptografada
          endereco,
          cpf,
          telefone
        }
      });

      console.log('Novo funcionário criado:', novoFuncionario);
      res.status(201).json(novoFuncionario);
    } catch (error) {
      console.error("Erro ao criar funcionário:", error);
      res.status(500).json({ error: 'Erro ao criar funcionario', details: error.message });
    }
  },
    listarFuncionarios: async (req, res) => {
        try {
          const funcionarios = await prisma.Funcionario.findMany();
          res.status(200).json(funcionarios);
        } catch (error) {
          console.error('Erro ao listar funcionarios:', error);
          res.status(500).json({ error: 'Erro ao listar funcionarios', details: error.message });
        }
      }
    }

export default funcionarioController