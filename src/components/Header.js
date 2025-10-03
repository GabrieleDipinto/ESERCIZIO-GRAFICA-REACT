import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { UserContext } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeContext';

const Header = ({ cartItemsCount, onCartClick }) => {
  const { user, logout } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <div className="header-content">
        <h1 className="logo">React Meal</h1>

        <div className="header-right">
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/merch" className={({ isActive }) => isActive ? 'active' : ''}>Merch</NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink>
          </div>

          {user ? (
            <span className="user-greeting">
              Ciao, {user.name} <button onClick={logout}>Logout</button>
            </span>
          ) : (
            <NavLink to="/login" className="login-btn">Login</NavLink>
          )}

          <button className="cart-button" onClick={onCartClick}>
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
            <span className="cart-badge">{cartItemsCount}</span>
          </button>

          {/* Toggle tema */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
