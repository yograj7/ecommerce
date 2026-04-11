import React from 'react';
import './Cart.css';

const Cart = ({ isOpen, onClose, cartItems, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty.</p>
              <button className="btn-secondary" onClick={onClose}>Browse Products</button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="item-qty-price">Qty: {item.quantity} <span>× ₹{item.price.toLocaleString('en-IN')}</span></p>
                  <p className="item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item.id)} aria-label="Remove item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-amount">₹{total.toLocaleString('en-IN')}</span>
            </div>
            <button className="btn-primary checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
