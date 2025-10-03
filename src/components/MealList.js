import React from 'react';
import MealItem from './MealItem';
import '../styles/MealList.css';

const MealList = ({ meals, onAddToCart }) => {
  // qui non cambiamo la logica originale
  return (
    <>
      <div className="divider"></div>
      <div className="meal-list">
        {meals.map(meal => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <div className="divider"></div>
    </>
  );
};

export default MealList;
