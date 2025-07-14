// Importação de dependências
import express from 'express';

// Importação de módulos
import { signIn } from '../controllers/signInController.js';

// Inicialização do roteador
const router = express.Router();

// Definição das rotas
// Roteamento de dados | formulários
router.post('/signIn', signIn);

// Exportação
export default router;