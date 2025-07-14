// Importação de dependências
import express from 'express';

// Importação de módulos
import { main } from '../controllers/pageController.js';
import { Auth } from '../middlewares/authMiddleware.js';

// Inicialização do roteador
const router = express.Router();

// Definição das rotas
// Roteamento para páginas
router.get('/main', Auth, main)

// Exportação
export default router;