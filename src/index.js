import express from 'express';
import clienteRouter from './routes/clienteRouter.js';
import funcionarioRouter from './routes/funcionarioRouter.js';
import servicoRouter from './routes/servicoRouter.js';
import agendamentoRouter from './routes/agendamentoRouter.js';

const app = express();

app.use(express.json());

//rotas
app.use('/cliente', clienteRouter);
app.use('/funcionario', funcionarioRouter);
app.use('/servico', servicoRouter);
app.use('/agendamento', agendamentoRouter);


app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});