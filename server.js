// Importação de dependências
import dotenv from 'dotenv'
import express from 'express';

// Importação de módulos
import usersRoutes from './src/routes/users.js';
import {connect} from './src/db/db.js'

// Inicialização do ambiente de desenvolvimento
const app = express();
dotenv.config();

// Middleware global
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de rota
app.use('/app', usersRoutes)

// Inicialização do servidor
const PORT = process.env.PORT;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });