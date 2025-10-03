import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Merch from './pages/Merch';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Product from './pages/Product';
import PrivateRoute from './components/PrivateRoute'; // <-- Import PrivateRoute

const AppRouter = ({ meals, addToCart }) => {
  return (
    <Routes>
      <Route path="/" element={<Home meals={meals} addToCart={addToCart} />} />
      <Route path="/merch" element={<Merch />} />
      
      {/* Proteggi il profilo con PrivateRoute */}
      <Route 
        path="/profile" 
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } 
      />

      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
