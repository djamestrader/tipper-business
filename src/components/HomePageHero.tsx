'use client';
import React from 'react';
import Image from 'next/image';
import '../styles/homePageHero.css';

const HomePageHero = () => {
  return (
    <section className="home-page-hero">
      <div className="hero-image-container">
        <Image src="/hero/one.jpg" alt="Hero Image 1" width={500} height={300} />
        <Image src="/hero/two.jpg" alt="Hero Image 2" width={500} height={300} />
        <Image src="/hero/three.jpg" alt="Hero Image 3" width={500} height={300} />
      </div>
      <div className="hero-text-container">
        <h1>Welcome to Our Rubbish Removal Service</h1>
        <p>We offer fast, reliable, and eco-friendly rubbish removal services.</p>
      </div>
    </section>
  );
};

export default HomePageHero;