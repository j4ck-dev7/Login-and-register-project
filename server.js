// Importação de dependências
import dotenv from 'dotenv'
import express from 'express';
import cookieParser from 'cookie-parser'

// Importação de módulos
import signUpRoute from './src/routes/signUp.js';
import signInRoute from './src/routes/signIn.js';
import pageRoute from './src/routes/page.js';

// Inicialização do ambiente de desenvolvimento
const app = express();
dotenv.config();
import {connect} from './src/db/db.js' // Conexão com o banco de dados MongoDB

// Middleware global
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Middleware de rota
app.use('/app', signUpRoute);
app.use('/app', signInRoute);
app.use('/app', pageRoute)

// Inicialização do servidor
const PORT = process.env.PORT;
app.listen(PORT, () => { 
    connect(); // Banco de dados 
    console.log(`Server is running on port ${PORT}`);
});