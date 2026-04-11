import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-text">
            <h2>MAHARAJ</h2>
            <p>WHOLESALE</p>
          </div>
          <p className="footer-desc">Premium quality spices, dry fruits, and bulk commodities sourced globally for discerning buyers.</p>
        </div>
        
        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Bulk Enquiry</a>
          <a href="#">Track Order</a>
        </div>
        
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: sales@maharajwholesale.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 48 Spice Market, Mumbai 400003</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Maharaj Wholesale. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
