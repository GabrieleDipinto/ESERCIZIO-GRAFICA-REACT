// src/pages/Merch.jsx
import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import '../styles/Merch.css';

const Merch = () => {
  const { products, loading, error } = useContext(ProductsContext);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Aggiorna la lista filtrata quando cambiano prodotti, search o category
  useEffect(() => {
    let temp = products;

    // Filtro per categoria
    if (category !== 'all') {
      temp = temp.filter(p => p.category === category);
    }

    // Filtro per ricerca titolo
    if (search.trim() !== '') {
      temp = temp.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredProducts(temp);
  }, [products, search, category]);

  // Ottieni tutte le categorie uniche dai prodotti
  const categories = ['all', ...new Set(products.map(p => p.category))];

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="merch-page">
      <h2>Merch Store</h2>

      <div className="merch-filters">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="merch-products">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="merch-item">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Merch;
