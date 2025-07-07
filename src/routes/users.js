// Importação de dependências
import express from 'express';
import { getUsers, createUser } from '../controllers/usersController.js';

// Inicialização do roteador
const router = express.Router();

// Definição das rotas
router.get('/users', getUsers);
router.post('/users', createUser);