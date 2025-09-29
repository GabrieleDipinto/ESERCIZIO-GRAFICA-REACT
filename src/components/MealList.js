import React from 'react';
import MealItem from './MealItem';
import '../styles/MealList.css';

const MealList = ({ meals, onAddToCart }) => {
  return (
    <>
      <div className="divider"></div>
      <div className="meal-list">
        {meals.map(meal => (
          <MealItem
            key={meal.id}
            id={meal.id} // importante passare anche l'id
            name={meal.name}
            description={meal.description}
            price={meal.price}
            onAddToCart={onAddToCart} // <- ora è passato
          />
        ))}
      </div>
      <div className="divider"></div>
    </>
  );
};

export default MealList;
