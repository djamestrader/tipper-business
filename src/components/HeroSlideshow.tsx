'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/design-system.css';

const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Function to show a specific slide
  const showSlide = (n: number) => {
    setCurrentSlide(n);
  };

  // Function to advance to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    slideIntervalRef.current = setInterval(nextSlide, 5000);
    
    // Cleanup interval on component unmount
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, []);

  // Pause slideshow on hover
  const handleMouseEnter = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = null;
    }
  };

  // Resume slideshow on mouse leave
  const handleMouseLeave = () => {
    if (!slideIntervalRef.current) {
      slideIntervalRef.current = setInterval(nextSlide, 5000);
    }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slide 1: Landfill/Dump Truck Theme */}
      <div 
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}
      >
        <div 
          className="relative w-full h-full flex flex-col justify-center items-start px-8 md:px-20 text-textDark"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/hero/one.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="max-w-2xl z-10 fadeIn">
            <div className="relative pl-6 text-primaryBrand text-xl font-semibold mb-6 tracking-section-header">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-primaryBrand"></span>
              OUR FUTURE DEPENDS ON RECYCLING
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 text-shadow-lg">
              Don't Be A Punk!<br/>Recycle Your Junk!
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-xl">Professional waste removal services across Sydney. Fast, reliable, and environmentally responsible.</p>
            <Link 
              href="/quote" 
              className="btn-primary inline-flex items-center gap-2 transform hover:-translate-y-2"
            >
              <span>Get A Quote</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide 2: Colorful Bins Theme */}
      <div 
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}
      >
        <div 
          className="relative w-full h-full flex flex-col justify-center items-end px-8 md:px-20 text-textDark"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/hero/two.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="max-w-2xl z-10 text-right fadeIn">
            <div className="relative pr-6 text-primaryBrand text-xl font-semibold mb-6 tracking-section-header">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-primaryBrand"></span>
              SYDNEY'S TRUSTED WASTE EXPERTS
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 text-shadow-lg">
              Local Removal<br/>Service Company
            </h1>
            <p className="text-lg text-gray-200 mb-8 ml-auto max-w-xl">Family-owned business with over 15 years of experience in waste management and recycling solutions.</p>
            <Link 
              href="/about" 
              className="btn-primary inline-flex items-center gap-2 transform hover:-translate-y-2"
            >
              <span>About Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-darkBackground/95 backdrop-blur-md py-8 md:py-10 px-4 md:px-20 flex flex-col md:flex-row justify-between gap-4 md:gap-8 z-20">
        <div className="bg-white/10 rounded-standard p-6 md:p-8 flex-1 text-textDark transition-all duration-300 border border-white/20 hover:bg-white/20 hover:-translate-y-2 hover:shadow-lg">
          <div className="w-12 h-12 md:w-15 md:h-15 bg-primaryBrand rounded-md mb-4 md:mb-5 flex items-center justify-center text-xl md:text-2xl">
            🗑️
          </div>
          <h3 className="text-primaryBrand text-xl md:text-2xl font-semibold mb-3 md:mb-4">Residential Waste</h3>
          <p className="text-gray-300 mb-4 md:mb-5 leading-relaxed text-sm md:text-base">Professional removal of household waste, junk, and unwanted items from your home.</p>
          <Link href="/services/residential" className="text-primaryBrand font-semibold text-sm md:text-base hover:text-hover transition-colors duration-300 inline-flex items-center gap-1">
            <span>Order Waste Pickup</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        <div className="bg-white/10 rounded-standard p-6 md:p-8 flex-1 text-textDark transition-all duration-300 border border-white/20 hover:bg-white/20 hover:-translate-y-2 hover:shadow-lg">
          <div className="w-12 h-12 md:w-15 md:h-15 bg-primaryBrand rounded-md mb-4 md:mb-5 flex items-center justify-center text-xl md:text-2xl">
            🏢
          </div>
          <h3 className="text-primaryBrand text-xl md:text-2xl font-semibold mb-3 md:mb-4">Business Waste</h3>
          <p className="text-gray-300 mb-4 md:mb-5 leading-relaxed text-sm md:text-base">Take care of business, we'll take care of the waste. Commercial solutions for all industries.</p>
          <Link href="/services/commercial" className="text-primaryBrand font-semibold text-sm md:text-base hover:text-hover transition-colors duration-300 inline-flex items-center gap-1">
            <span>Business Services</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        <div className="bg-white/10 rounded-standard p-6 md:p-8 flex-1 text-textDark transition-all duration-300 border border-white/20 hover:bg-white/20 hover:-translate-y-2 hover:shadow-lg">
          <div className="w-12 h-12 md:w-15 md:h-15 bg-primaryBrand rounded-md mb-4 md:mb-5 flex items-center justify-center text-xl md:text-2xl">
            🏗️
          </div>
          <h3 className="text-primaryBrand text-xl md:text-2xl font-semibold mb-3 md:mb-4">Construction Waste</h3>
          <p className="text-gray-300 mb-4 md:mb-5 leading-relaxed text-sm md:text-base">Reliable and fast removal of building debris and construction waste for a safer work site.</p>
          <Link href="/services/construction" className="text-primaryBrand font-semibold text-sm md:text-base hover:text-hover transition-colors duration-300 inline-flex items-center gap-1">
            <span>Construction Cleanup</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-32 md:bottom-40 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => showSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primaryBrand w-10 shadow-md' : 'bg-textDark/50 w-3 hover:bg-textDark/80'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
        className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 bg-darkBackground/60 hover:bg-primaryBrand text-textDark p-2 md:p-3 rounded-full transition-all duration-300 z-30 shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
        className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 bg-darkBackground/60 hover:bg-primaryBrand text-textDark p-2 md:p-3 rounded-full transition-all duration-300 z-30 shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroSlideshow;