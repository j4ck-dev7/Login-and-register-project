// Importação de depêndencias
import jwt from 'jsonwebtoken'

// Importação de módulos
import User from '../models/user.js'

// Auth
export const Auth = (req, res, next) => {
    const cookie = req.cookies.AuthCookie;
    if(!cookie) return res.status(401).send('Access Denied')
    
    try {
        const userVeriefied = jwt.verify(cookie, process.env.SECRET)
        next()
    } catch (error) {
        res.status(401).send('Access Denied');
        console.log(error)
    }
}