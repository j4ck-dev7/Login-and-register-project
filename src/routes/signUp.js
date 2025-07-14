// Importação de dependências
import express from 'express';

// Importação de módulos
import { signUp } from '../controllers/signUpController.js';

// Inicialização do roteador
const router = express.Router();

// Definição das rotas
// Roteamento de dados | formulários
router.post('/signUp', express.urlencoded({ extended: true }), express.json(), signUp);

// Exportação
export default router;