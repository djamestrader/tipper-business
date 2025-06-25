'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/design-system.css';

const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
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
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/hero/hero-2.jpeg")',
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
            <h1 className="text-4xl md:text-6xl font-white text-white leading-tight mb-4 text-shadow-lg">
              Don't Be A Punk!<br/>Recycle Your Junk!
            </h1>
            <p className="text-lg text-white mb-8 max-w-xl">Professional waste removal services across Sydney. Fast, reliable, and environmentally responsible.</p>
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
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/hero/hero-1.jpeg")',
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
            <h1 className="text-4xl md:text-6xl font-white text-white leading-tight mb-4 text-shadow-lg">
              Local Removal<br/>Service Company
            </h1>
            <p className="text-lg text-white mb-8 ml-auto max-w-xl">Family-owned business with over 15 years of experience in waste management and recycling solutions.</p>
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

      {/* Services Section has been moved to a separate component */}

      {/* Slide 3: Construction/Tipper Truck Theme */}
      <div 
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}
      >
        <div 
          className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-20 text-textDark"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/hero/one.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="max-w-2xl z-10 text-center fadeIn">
            <div className="relative px-6 text-primaryBrand text-xl font-semibold mb-6 tracking-section-header">
              <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-1 h-10 bg-primaryBrand"></span>
              HEAVY DUTY WASTE SOLUTIONS
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 text-shadow-lg">
              Construction &<br/>Demolition Experts
            </h1>
            <p className="text-lg text-white mb-8 max-w-xl mx-auto">Specialized equipment and experienced team for all your construction waste removal needs.</p>
            <Link 
              href="/services/construction" 
              className="btn-primary inline-flex items-center gap-2 transform hover:-translate-y-2"
            >
              <span>Our Services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
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