import express from 'express';
import dotenv from 'dotenv';
import publicRoutes from './routes/publicRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors())


//rotas Publica
app.use('/api', publicRoutes);
//rotas protegidas
app.use('/api', protectedRoutes);


app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
