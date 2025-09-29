import React, { useState } from 'react';
import '../styles/AddMealForm.css';

const AddMealForm = ({ onAddMeal }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (name.trim() === '' || description.trim() === '' || price.trim() === '') {
      return;
    }

    const mealData = {
      name: name,
      description: description,
      price: parseFloat(price)
    };

    onAddMeal(mealData);
    
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div className="add-meal-form">
      <h3>Add More Delicious Meal</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Meal Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">Add Meal</button>
      </form>
    </div>
  );
};

export default AddMealForm;