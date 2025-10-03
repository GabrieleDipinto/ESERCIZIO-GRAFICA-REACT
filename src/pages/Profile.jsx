// src/pages/Profile.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import '../styles/Profile.css';

const Profile = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="profile-page">
      <h2>Profilo Utente</h2>
      <div className="profile-card">
        <div className="profile-avatar">
          <img src={`https://ui-avatars.com/api/?name=${user.name}&background=8a2b06&color=fff`} alt={user.name} />
        </div>
        <div className="profile-info">
          <p><strong>Nome:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.name.toLowerCase().replace(' ', '.')}@example.com</p>
          <p><strong>Stato:</strong> {user.loggedIn ? 'Loggato' : 'Non loggato'}</p>
          <button onClick={logout} className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
