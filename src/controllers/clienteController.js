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
  
      // Tenta encontrar um cliente
      let usuarioEncontrado = await prisma.cliente.findUnique({ where: { usuario } });
  
      // Se não encontrar um cliente, tenta encontrar um funcionário
      if (!usuarioEncontrado) {
        usuarioEncontrado = await prisma.funcionario.findUnique({ where: { usuario } });
      }
  
      // Se ainda não encontrou, retorna erro
      if (!usuarioEncontrado) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }
  
      // Verifica a senha
      const senhaCorreta = await bcrypt.compare(senha, usuarioEncontrado.senha);
      if (!senhaCorreta) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }
  
      const token = jwt.sign({ id: usuarioEncontrado.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.json({ token, userId: usuarioEncontrado.id });
    } catch (error) {
      console.error('Erro no login:', error.message);
      res.status(500).json({ error: 'Erro interno no servidor', details: error.message });
    }
  }
} 

export default clienteController