import React from 'react';
import Hero from '../components/Hero';
import MealList from '../components/MealList';

const Home = ({ meals, addToCart }) => {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <Hero />
      </div>
      <MealList meals={meals} onAddToCart={addToCart} />
    </div>
  );
};

export default Home;
