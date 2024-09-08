import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const funcionarioController = {

    criarFuncionario : async (req, res) => {
        try {
            const novoFuncionario = await prisma.Funcionario.create({
              data: {
                nome: req.body.nome,
                usuario: req.body.usuario,
                senha: req.body.senha,
                endereco: req.body.endereco,
                cpf: req.body.cpf,
                telefone: req.body.telefone
              }
            });
            console.log('Novo funcionario criado:', novoFuncionario);
            res.status(201).json(novoFuncionario);
          } catch (error) {
            console.error(error);
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