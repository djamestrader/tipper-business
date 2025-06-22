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

  // Base classes for cards, including transition properties
  const cardBaseClasses = "relative text-center p-6 bg-pure-white rounded-lg shadow-md flex flex-col items-center transition-all duration-700 ease-out";
  // Animation classes, applied conditionally based on isVisible state
  const cardAnimationClasses = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";

  return (
    // Section background: off-white (#F8F8F8) for a clean, light base
    <section className="py-16 bg-off-white" ref={sectionRef}> {/* Attach ref to the section */}
      <div className="container-custom">
        <div className="text-center mb-12">
          {/* Heading text: charcoal (#3A3A3A) */}
          <h2 className="text-4xl font-bold text-charcoal mb-4">How We Work</h2>
          {/* Paragraph text: charcoal (#3A3A3A) */}
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Quick, easy, and no-fuss rubbish removal - the Fair Dinkum way.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
          {/* Step 1 */}
          {/* Apply base classes, animation classes, and staggered delay */}
          <div className={`${cardBaseClasses} ${cardAnimationClasses} delay-100`}>
            {/* Step circle: primary-green (#339933) background, pure-white (#FFFFFF) text */}
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-green rounded-full flex items-center justify-center text-pure-white text-2xl font-bold flex-shrink-0">
              1
            </div>
            {/* Heading text: charcoal (#3A3A3A) */}
            <h3 className="text-xl font-semibold text-charcoal mb-3">Book Online</h3>
            {/* Paragraph text: charcoal (#3A3A3A) */}
            <p className="text-charcoal text-sm md:text-base">
              Choose your service and get a quick quote through our simple booking system - easy as!
            </p>
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-[3.5rem] left-[calc(100%-1rem)] w-full h-0.5 bg-primary-green/30 -z-10"></div>
          </div>

          {/* Step 2 */}
          <div className={`${cardBaseClasses} ${cardAnimationClasses} delay-300`}>
            {/* Step circle: primary-green (#339933) background, pure-white (#FFFFFF) text */}
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-green rounded-full flex items-center justify-center text-pure-white text-2xl font-bold flex-shrink-0">
              2
            </div>
            {/* Heading text: charcoal (#3A3A3A) */}
            <h3 className="text-xl font-semibold text-charcoal mb-3">Confirmation</h3>
            {/* Paragraph text: charcoal (#3A3A3A) */}
            <p className="text-charcoal text-sm md:text-base">
              Get instant confirmation and lock in a time that works for you. Beauty!
            </p>
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-[3.5rem] left-[calc(100%-1rem)] w-full h-0.5 bg-primary-green/30 -z-10"></div>
          </div>

          {/* Step 3 */}
          <div className={`${cardBaseClasses} ${cardAnimationClasses} delay-500`}>
            {/* Step circle: primary-green (#339933) background, pure-white (#FFFFFF) text */}
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-green rounded-full flex items-center justify-center text-pure-white text-2xl font-bold flex-shrink-0">
              3
            </div>
            {/* Heading text: charcoal (#3A3A3A) */}
            <h3 className="text-xl font-semibold text-charcoal mb-3">Service Delivery</h3>
            {/* Paragraph text: charcoal (#3A3A3A) */}
            <p className="text-charcoal text-sm md:text-base">
              We'll be there on time with everything needed, whether you're hiring a trailer or getting our crew to help.
            </p>
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-[3.5rem] left-[calc(100%-1rem)] w-full h-0.5 bg-primary-green/30 -z-10"></div>
          </div>

          {/* Step 4 */}
          <div className={`${cardBaseClasses} ${cardAnimationClasses} delay-700`}>
            {/* Step circle: primary-green (#339933) background, pure-white (#FFFFFF) text */}
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-green rounded-full flex items-center justify-center text-pure-white text-2xl font-bold flex-shrink-0">
              4
            </div>
            {/* Heading text: charcoal (#3A3A3A) */}
            <h3 className="text-xl font-semibold text-charcoal mb-3">Job Complete</h3>
            {/* Paragraph text: charcoal (#3A3A3A) */}
            <p className="text-charcoal text-sm md:text-base">
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