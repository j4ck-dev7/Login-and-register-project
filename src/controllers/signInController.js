// Importação de dependências
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// Importação de módulos
import User from '../models/user.js'
import { signInValidate } from '../services/validate.js'

// Login | Lógica 
export const signIn = async (req, res) => {
    const { error } = signInValidate(req.body)
    if(error) return res.status(400).send(error.message)

    const selectedUser = await User.findOne({ email: req.body.email })
    if(!selectedUser) return res.status(400).send("Email ou senha incorretos");

    const passwordMatch = bcrypt.compare(req.body.password, selectedUser.password);
    if (!passwordMatch) return res.status(400).send("Email ou senha incorretos");

    try {
        let token = jwt.sign( { _id : selectedUser._id }, process.env.SECRET )
        res.cookie('AuthCookie', token, { secure: true, httpOnly: true, expires: new Date(Date.now() + 2 * 3600000) })
        res.redirect('/app/main');
    } catch (error) {
        res.status(400).send(error)
    } 
}