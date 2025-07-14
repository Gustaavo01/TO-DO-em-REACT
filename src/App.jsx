import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Center from './components/Center';
import './App.css'

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    
    navigate('/center'); 
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo">To-Do Pro</h1>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="seuemail@exemplo.com" required />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="••••••••" required />

          <button type="submit" className="btn-login">Entrar</button>
        </form>
        <p className="signup-text">
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/center" element={<Center />} />
      </Routes>
    </BrowserRouter>
  );
}
