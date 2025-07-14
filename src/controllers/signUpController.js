// Importação de dependências
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// Importação de módulos
import User from '../models/user.js'

export const signUp = async (req, res) => {
    const selectedUser = await User.findOne({ email: req.body.email })
    if(selectedUser) return res.status(400).send('Email existente')

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    })

    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (error) {
        res.status(400).send(error)
    }
}