'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import BookingPopup from './BookingPopup';

export default function ServiceAreas() {
  const [selectedArea, setSelectedArea] = useState('');
  const [hoveredArea, setHoveredArea] = useState('Inner West'); // Default image
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAreaClick = (area: string) => {
    setSelectedArea(area);
    setIsPopupOpen(true);
  };

  // Map area names to image filenames
  const areaImages = {
    'Inner West': 'inner-waste.jpg',
    'Central Sydney': 'central-sydney.jpg',
    'Eastern Suburbs': 'eastern-suburbs.jpg',
    'North West': 'north-west.jpg',
    'South Sydney': 'south-sydney.jpg',
    'Northern Beaches': 'northern-beaches.jpg',
    'North Shore': 'north-shore.jpg',
    'Western Suburbs': 'western-suburbs.jpg',
    'South West Sydney': 'south-west.jpg',
    'Greater Western Sydney': 'greater-western.jpg',
    'Blue Mountains': 'blue-mountains.jpg',
    'Central Coast': 'central-coast.jpg'
  };

  // Service areas from the provided text
  const areas = [
    'Inner West', 'Central Sydney', 'Eastern Suburbs', 'North West',
    'South Sydney', 'Northern Beaches', 'North Shore', 'Western Suburbs',
    'South West Sydney', 'Greater Western Sydney', 'Blue Mountains', 'Central Coast'
  ];
  
  // Format area name for image path
  const getImagePath = (area: string) => {
    const imageName = areaImages[area] || 'sydney-map.jpg';
    return `/areas-we-service/${imageName}`;
  };

  return (
    <section className="py-16 bg-neutralBackground">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">Areas We Service</h2>
          <p className="text-lg text-textLight max-w-3xl mx-auto mb-8">
            We provide same-day rubbish removal services across the entire Sydney region. Our local collection teams are ready to serve you in all areas across Sydney.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-xl shadow-card">
            <h3 className="text-2xl font-semibold text-textDark mb-6">Our Serviced Areas Include:</h3>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              {areas.map((area, index) => (
                <button
                  key={index}
                  onClick={() => handleAreaClick(area)}
                  onMouseEnter={() => setHoveredArea(area)}
                  className="flex items-center space-x-2 hover:text-primaryBrand transition-colors group text-left"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primaryBrand/10 flex items-center justify-center group-hover:bg-primaryBrand/20 transition-colors">
                    <svg
                      className="w-4 h-4 text-primaryBrand group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-textDark group-hover:text-primaryBrand font-medium">{area}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-primaryBrand/10 rounded-lg border border-primaryBrand/20">
              <p className="text-textDark flex items-start">
                <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Call us anytime before 10:00am to book your same-day rubbish removal service.</span>
              </p>
            </div>
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
            <Image
              src={getImagePath(hoveredArea)}
              alt={`${hoveredArea} Service Area`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-textDark/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{hoveredArea}</h3>
              <p className="text-white/90">Same-day rubbish removal services available</p>
            </div>
          </div>
        </div>
      </div>
      
      <BookingPopup
        area={selectedArea}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}