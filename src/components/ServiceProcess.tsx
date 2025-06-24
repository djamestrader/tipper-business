'use client'; // Mark as a client component

import React, { useState, useEffect, useRef } from 'react';

const ServiceProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.1 // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  // Base classes for cards, including transition properties aligned with design system
  const cardBaseClasses = "relative text-center p-6 bg-white rounded-lg shadow-card flex flex-col items-center transition-all duration-700 ease-out";
  // Animation classes, applied conditionally based on isVisible state
  const cardAnimationClasses = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";

  return (
    // Section background using design system's neutralBackground color
    <section className="py-16 bg-neutralBackground" ref={sectionRef}> {/* Attach ref to the section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-header">
            <h4 className="text-primaryBrand uppercase tracking-wider text-sm font-bold mb-2">Our Process</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-textLight mb-4">How We Work</h2>
            <p className="text-base md:text-lg text-textLight max-w-2xl mx-auto">
              Quick, easy, and no-fuss rubbish removal - the Fair Dinkum Rubbish Removal way.
            </p>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
          {/* Step 1 */}
          {/* Apply base classes, animation classes, and staggered delay */}
          <div className={`${cardBaseClasses} ${cardAnimationClasses} delay-100`}>
            {/* Step circle using design system's primaryBrand color */}
            <div className="w-16 h-16 mx-auto mb-4 bg-primaryBrand rounded-full flex items-center justify-center text-textDark text-2xl font-bold flex-shrink-0 shadow-button">
              1
            </div>
            {/* Heading text using design system's typography */}
            <h3 className="text-xl font-semibold text-textLight mb-3">Book Online</h3>
            {/* Paragraph text using design system's typography */}
            <p className="text-textLight text-sm md:text-base">
              Choose your service and get a quick quote through our simple booking system - easy as!
            </p>
            {/* Connector line for desktop using design system's primaryBrand color */}
            <div className="hidden md:block absolute top-[3.5rem] left-[calc(100%-1rem)] w-full h-0.5 bg-primaryBrand/30 -z-10"></div>
          </div>

          {/* Step 2 */}
          <div className={`${cardBaseClasses} ${cardAnimationClasses} delay-300`}>
            {/* Step circle using design system's primaryBrand color */}
            <div className="w-16 h-16 mx-auto mb-4 bg-primaryBrand rounded-full flex items-center justify-center text-textDark text-2xl font-bold flex-shrink-0 shadow-button">
              2
            </div>
            {/* Heading text using design system's typography */}
            <h3 className="text-xl font-semibold text-textLight mb-3">Confirmation</h3>
            {/* Paragraph text using design system's typography */}
            <p className="text-textLight text-sm md:text-base">
              Get instant confirmation and lock in a time that works for you. Beauty!
            </p>
            {/* Connector line for desktop using design system's primaryBrand color */}
            <div className="hidden md:block absolute top-[3.5rem] left-[calc(100%-1rem)] w-full h-0.5 bg-primaryBrand/30 -z-10"></div>
          </div>

          {/* Step 3 */}
          <div className={`${cardBaseClasses} ${cardAnimationClasses} delay-500`}>
            {/* Step circle using design system's primaryBrand color */}
            <div className="w-16 h-16 mx-auto mb-4 bg-primaryBrand rounded-full flex items-center justify-center text-textDark text-2xl font-bold flex-shrink-0 shadow-button">
              3
            </div>
            {/* Heading text using design system's typography */}
            <h3 className="text-xl font-semibold text-textLight mb-3">Service Delivery</h3>
            {/* Paragraph text using design system's typography */}
            <p className="text-textLight text-sm md:text-base">
              We'll be there on time with everything needed to get the job done right.
            </p>
            {/* Connector line for desktop using design system's primaryBrand color */}
            <div className="hidden md:block absolute top-[3.5rem] left-[calc(100%-1rem)] w-full h-0.5 bg-primaryBrand/30 -z-10"></div>
          </div>

          {/* Step 4 */}
          <div className={`${cardBaseClasses} ${cardAnimationClasses} delay-700`}>
            {/* Step circle using design system's primaryBrand color */}
            <div className="w-16 h-16 mx-auto mb-4 bg-primaryBrand rounded-full flex items-center justify-center text-textDark text-2xl font-bold flex-shrink-0 shadow-button">
              4
            </div>
            {/* Heading text using design system's typography */}
            <h3 className="text-xl font-semibold text-textLight mb-3">Job Complete</h3>
            {/* Paragraph text using design system's typography */}
            <p className="text-textLight text-sm md:text-base">
              We'll take care of the disposal properly, leaving you with a clean and tidy space. No worries!
            </p>
            {/* No connector after the last step */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;