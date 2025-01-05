import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const navigate = useNavigate()

const goToRegister = () => {
    navigate('/register')
}

    return ( 
    <div>
        <h2>Faça seu Login</h2>
        <input />
        <input />
        <button>Login</button>
        <p onClick={goToRegister}>Não tem cadastro? Clique aqui e faça agora mesmo!</p>
    </div>



  )
}

export default Login