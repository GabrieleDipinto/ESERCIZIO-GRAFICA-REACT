import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') return;
    login(username.trim());
    navigate('/profile'); // reindirizza al profilo dopo il login
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Accedi al tuo account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nome utente</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Inserisci il tuo nome"
          />
          <button type="submit">Accedi</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
