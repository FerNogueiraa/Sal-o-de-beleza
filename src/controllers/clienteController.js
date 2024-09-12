import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const clienteController = {

    criarCliente : async (req, res) => {
        try {
            const novoCliente = await prisma.Cliente.create({
              data: {
                nome: req.body.nome,
                usuario: req.body.usuario,
                senha: req.body.senha,
                endereco: req.body.endereco,
                cpf: req.body.cpf,
                telefone: req.body.telefone
              }
            });
            console.log('Novo cliente criado:', novoCliente);
            res.status(201).json(novoCliente);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar cliente', details: error.message });
          }
    },
    listarClientes: async (req, res) => {
        try {
          const clientes = await prisma.Cliente.findMany();
          res.status(200).json(clientes);
        } catch (error) {
          console.error('Erro ao listar clientes:', error);
          res.status(500).json({ error: 'Erro ao listar clientes', details: error.message });
        }
      },
      deletarCliente: async (req, res) => {
        try{
            const { id } = req.params;
            const deletarCliente = await prisma.Cliente.delete({
                where: {
                    id: id,
                },
            });
            res.status(200).json(deletarCliente);
        } catch(error){
          console.error('Erro ao deletar cliente:', error);
          res.status(500).json({ error: 'Erro ao deletar cliente', details: error.message });
        }
      }
      } 

export default clienteController