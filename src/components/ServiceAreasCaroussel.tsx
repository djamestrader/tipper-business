'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ServiceAreasCarousel() {
  const areas = [
    'Northern Beaches', 'North Shore', 'Eastern Suburbs', 'Inner West',
    'Western Sydney', 'South Sydney', 'South West Sydney', 'Hills District',
    'Central Coast', 'Sutherland Shire', 'Parramatta', 'Liverpool',
    'Blacktown', 'Penrith', 'Campbelltown', 'Hornsby'
  ];

  // Triple the areas array to ensure smooth infinite scroll
  const triplicatedAreas = [...areas, ...areas, ...areas];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Set initial scroll position to the middle set of items
    scrollContainer.style.transform = 'translateX(0)';
    
    const animate = () => {
      if (!scrollContainer || isPaused) return;
      
      const currentTransform = parseFloat(scrollContainer.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
      const newPosition = currentTransform - 0.5; // Reduced speed
      
      // Reset to start when reaching the end of middle set
      if (Math.abs(newPosition) >= scrollContainer.offsetWidth / 3) {
        scrollContainer.style.transform = 'translateX(0)';
      } else {
        scrollContainer.style.transform = `translateX(${newPosition}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="bg-neutralBackground py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-primaryBrand uppercase tracking-wider text-sm font-bold mb-2">Where We Serve</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-textLight mb-4">Service Areas</h2>
          <p className="text-base md:text-lg text-textLight max-w-2xl mx-auto">
            We provide reliable rubbish removal and tipper trailer hire services across Greater Sydney
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full overflow-hidden">
            {/* Left gradient overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutralBackground to-transparent z-10"></div>
            
            {/* Right gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutralBackground to-transparent z-10"></div>
            
            <div
              ref={scrollRef}
              className="flex transition-transform duration-100 ease-linear py-6"
              style={{ gap: '1.5rem' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {triplicatedAreas.map((area, index) => (
                <div
                  key={`${area}-${index}`}
                  className="flex-shrink-0"
                >
                  <div className="flex items-center justify-center">
                    <div 
                      className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-card hover:shadow-lg transition-all duration-300 hover:bg-primaryBrand group"
                    >
                      <svg
                        className="w-5 h-5 text-primaryBrand group-hover:text-textDark transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-textLight font-medium whitespace-nowrap group-hover:text-textDark transition-colors duration-300">{area}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

