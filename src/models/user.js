// Importação de dependências
import mongoose from 'mongoose';

// Definição do esquema do usuário
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true, unique: true, minlength: 3, maxlength: 100 },
    password: { type: String, required: true, minlength: 8, maxlength: 20 },
    admin: { type: Boolean, default: false },
})

// Exportação 
export default mongoose.model('User', userSchema);
