import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.post('/cliente', async (req, res) => {
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
  });

app.get('/cliente', async (req, res) => {
    try {
      const clientes = await prisma.Cliente.findMany();
      res.json(clientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar clientes', details: error.message });
    }
  });

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});                      