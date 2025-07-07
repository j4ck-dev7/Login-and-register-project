// Importação de dependências
import mongoose from 'mongoose';

// Definição do esquema do usuário
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

export default mongoose.model('User', userSchema);
