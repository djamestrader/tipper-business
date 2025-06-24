'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { 
      src: '/hero/one.jpg', 
      alt: 'Rubbish Removal Service',
      title: 'Don\'t Be A Punk!',
      subtitle: 'Recycle Your Junk!',
      description: 'Professional Waste Management Solutions',
      cta: 'Get a Quote'
    },
    { 
      src: '/hero/two.jpg', 
      alt: 'Tipper Trailer Hire',
      title: 'Self-Load Tipper Trailer Hire',
      subtitle: 'Load at Your Own Pace',
      description: 'We deliver the trailer, you load it, we take it away',
      cta: 'Get a Quote'
    },
    { 
      src: '/hero/three.jpg', 
      alt: 'Professional Waste Management',
      title: 'Fair Dinkum Service',
      subtitle: 'Sydney\'s Most Trusted Rubbish Removal',
      description: 'Residential, commercial, and construction waste solutions',
      cta: 'Get a Quote'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-darkBackground/70" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl px-4 md:px-0 text-textDark">
                <div className="relative pl-6 text-primaryBrand text-xl font-semibold mb-6">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-primaryBrand"></span>
                  {slide.description}
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-2 text-shadow">
                  {slide.title}
                </h1>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-12 text-primaryBrand text-shadow">
                  {slide.subtitle}
                </h2>
                <Link href="/quote"
                      className="bg-gradient-to-r from-primaryBrand to-hover text-textDark py-3 px-6 rounded-button font-bold text-sm uppercase tracking-button border-2 border-primaryBrand shadow-button hover:bg-transparent hover:text-primaryBrand transform hover:-translate-y-1 transition-all duration-300">
                  + {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primaryBrand w-8' : 'bg-textDark/70 hover:bg-textDark'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-darkBackground/50 hover:bg-darkBackground/70 text-textDark p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-darkBackground/50 hover:bg-darkBackground/70 text-textDark p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroCarousel;