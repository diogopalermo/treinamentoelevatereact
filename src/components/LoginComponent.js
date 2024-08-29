import React, { useState } from 'react';
import { login } from '../services/authService';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(username, password);
      console.log('Login bem-sucedido', userData);
      // Redirecionar ou atualizar o estado da aplicação
    } catch (error) {
      console.error('Erro no login', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginComponent;
