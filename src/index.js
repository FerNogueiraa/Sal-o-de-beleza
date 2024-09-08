import express from 'express';
import clienteRouter from './routes/clienteRouter.js';
import funcionarioRouter from './routes/funcionarioRouter.js';


const app = express();

app.use(express.json());

//rotas
app.use('/cliente', clienteRouter);
app.use('/funcionario', funcionarioRouter);



app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});