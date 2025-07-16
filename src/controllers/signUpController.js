// Importação de dependências
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// Importação de módulos
import User from '../models/user.js'
import { signUpValidate } from '../services/validate.js'

// Register
export const signUp = async (req, res) => {
    const { error } = signUpValidate(req.body)
    if(error) return res.status(400).send(error.message)

    const selectedUser = await User.findOne({ email: req.body.email })
    if(selectedUser) return res.status(400).send('Email existente')

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    })

    try {
        const savedUser = await user.save()
        let token = jwt.sign( { _id : savedUser._id }, process.env.SECRET )
        res.cookie('AuthCookie', token, { secure: true, httpOnly: true, expires: new Date(Date.now() + 2 * 3600000) })
        res.redirect('/app/main');
    } catch (error) {
        res.status(400).send(error)
    }
}