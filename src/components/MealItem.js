import React, { useState } from 'react';
import '../styles/MealItem.css';

const MealItem = ({ id, name, description, price, onAddToCart }) => {
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount(prev => prev + 1);
  };

  const decreaseAmount = () => {
    setAmount(prev => prev > 1 ? prev - 1 : 1);
  };

  const addToCartHandler = () => {
    onAddToCart({ id, name, description, price }, amount);
    setAmount(1); 
  };

  return (
    <div className="meal-item">
      <div className="meal-content">
        <h3 className="meal-name">{name}</h3>
        <p className="meal-description">{description}</p>
        <p className="meal-price">${price.toFixed(2)}</p>
      </div>
      <div className="meal-controls">
        <div className="amount-controls">
          <div className="amount-label">Amount</div>
          <div className="amount-input-group">
            <input 
              type="number" 
              className="amount-input"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value) || 1)}
              min="1"
            />
            <button className="add-button" onClick={addToCartHandler}>
              + Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealItem;