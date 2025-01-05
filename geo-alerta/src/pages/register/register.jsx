import React, { useState } from "react";
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { name, email, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        user
      );
      alert(response.data.message);
    } catch (error) {
      alert("Erro ao cadastrar usuário");
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Nome" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
         <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
