import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background will be handled in CSS, or with an image tag */}
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-badge animate-fade">PREMIUM WHOLESALE</div>
        <h1 className="animate-slide-up">The Finest Spices &<br/><span className="gold-text">Dry Fruits</span> Delivered</h1>
        <p className="hero-subtitle animate-slide-up-delay">
          Sourcing world-class commodities for discerning buyers. Experience the Maharaj standard of quality, purity, and excellence.
        </p>
        <div className="hero-actions animate-fade-delay">
          <a href="#products" className="btn-primary">View Catalog</a>
          <a href="#contact" className="btn-secondary">Get a Quote</a>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
