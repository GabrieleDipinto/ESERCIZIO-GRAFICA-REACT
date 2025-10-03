// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ProductsProvider } from './context/ProductsContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [meals, setMeals] = useState([
    { id: 1, name: 'Sushi', description: 'Finest fish and veggies', price: 22.99 },
    { id: 2, name: 'Schnitzel', description: 'A german specialty!', price: 16.50 },
    { id: 3, name: 'Green Bowl', description: 'Healthy...and green...', price: 18.99 },
    { id: 4, name: 'Honey', description: 'The sweetest taste ever', price: 20.00 },
    { id: 5, name: 'Sweeties', description: 'The sweetest taste ever', price: 26.00 },
    { id: 6, name: 'WINSTER', description: 'Tryin', price: 222.00 }
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (meal, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === meal.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === meal.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { ...meal, quantity }];
      }
    });
  };

  const removeFromCart = (mealId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== mealId));
  };

  const updateCartItemQuantity = (mealId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(mealId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === mealId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalItems = () => cartItems.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () => cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const toggleCart = () => setShowCart(prev => !prev);

  return (
    <Router>
      <UserProvider>
        <ProductsProvider>
          <ThemeProvider>
            <div className="App">
              <Header cartItemsCount={getTotalItems()} onCartClick={toggleCart} />
              <AppRouter meals={meals} addToCart={addToCart} />
              {showCart && (
                <Cart
                  items={cartItems}
                  onRemove={removeFromCart}
                  onUpdateQuantity={updateCartItemQuantity}
                  totalPrice={getTotalPrice()}
                  onClose={toggleCart}
                />
              )}
            </div>
          </ThemeProvider>
        </ProductsProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
