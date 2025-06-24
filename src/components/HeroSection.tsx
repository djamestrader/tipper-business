'use client';

import React from 'react';
// Assuming trashly.css is imported globally or will be imported here if using CSS modules
import '../styles/trashly.css'; // Import the CSS file

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-tagline">Professional Rubbish Removal & Tipper Hire in Sydney</div>
        <h1 className="hero-title">Fair Dinkum Rubbish Removal</h1>
        <h2 className="hero-subtitle">Efficient & Reliable Waste Solutions</h2>
        <a href="/quote" className="hero-cta">+ Get a Quote</a>
      </div>
    </section>
  );
};

export default HeroSection;