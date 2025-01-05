import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'
import User from '../models/User.js'

// Função para cadastrar um novo usuário
export const registerUser = async (req, res) => {
    // Verificar se há erros de validação
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    try {
        // Verificar se o email já existe
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'Email já cadastrado' })
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10)

        // Criar um novo usuário
        const newUser = new User({
            name,
            email,
            password: hashedPassword, // Salvar a senha criptografada
        })

        // Salvar usuário no banco de dados
        await newUser.save()
        res.status(201).json({ message:'Usuário cadastrado com sucesso!', user: newUser })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar usuário', error: error.message })
    }
}