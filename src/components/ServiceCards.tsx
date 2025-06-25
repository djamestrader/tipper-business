'use client';

import React from 'react';
import Link from 'next/link';

const ServiceCards: React.FC = () => {
  return (
    <div className="bg-darkBackground/95 backdrop-blur-md py-8 md:py-10 px-4 md:px-20 flex flex-col md:flex-row justify-between gap-4 md:gap-8 z-20 relative -mt-32 shadow-xl">
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
  );
};

export default ServiceCards;