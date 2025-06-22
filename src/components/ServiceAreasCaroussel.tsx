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
  }, []);

  return (
    <section className="bg-off-white py-12 overflow-hidden">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-8">Service Areas</h2>
        <p className="text-lg text-charcoal text-center mb-8 max-w-2xl mx-auto">
          We provide reliable rubbish removal and tipper trailer hire services across Greater Sydney
        </p>
        <div className="flex items-center justify-center">
          <div className="relative w-full overflow-hidden">
            {/* Left gradient overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-off-white to-transparent z-10"></div>
            
            {/* Right gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-off-white to-transparent z-10"></div>
            
            <div
              ref={scrollRef}
              className="flex transition-transform duration-100 ease-linear py-4"
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
                      className="flex items-center space-x-2 bg-pure-white rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-primary-green group"
                    >
                      <svg
                        className="w-5 h-5 text-primary-green group-hover:text-pure-white transition-colors duration-300"
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
                      <span className="text-charcoal font-medium whitespace-nowrap group-hover:text-pure-white transition-colors duration-300">{area}</span>
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

