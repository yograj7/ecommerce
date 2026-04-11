import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        // Use local png paths instead of webp
        const fixedData = data.map(p => ({
          ...p,
          image: p.image.replace('.webp', '.png')
        }));
        setProducts(fixedData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="products" className="products-section">
        <div className="container loading">Loading premium collection...</div>
      </section>
    );
  }

  // Fallback images for our API mock data
  const getFallbackImage = (category) => {
    return category === 'Spices' 
      ? 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500&q=80'
      : 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&q=80';
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title animate-slide-up">Our Premium Selection</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card glass"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  onError={(e) => { e.target.onerror = null; e.target.src = getFallbackImage(product.category); }}
                />
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-bottom">
                  <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
                  <button 
                    className="add-to-cart-btn" 
                    aria-label="Add to cart"
                    onClick={() => onAddToCart(product)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
