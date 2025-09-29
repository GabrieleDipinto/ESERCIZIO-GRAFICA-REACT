import React from 'react';
import '../styles/Header.css';

const Header = ({ cartItemsCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">React Meal</h1>
        <button className="cart-button" onClick={onCartClick}>
          <span className="cart-icon">🛒</span>
          <span className="cart-text">Cart</span>
          <span className="cart-badge">{cartItemsCount}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;