
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import BookingPopup from './BookingPopup';

export default function ServiceAreas() {
  const [selectedArea, setSelectedArea] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAreaClick = (area: string) => {
    setSelectedArea(area);
    setIsPopupOpen(true);
  };

  const areas = [
    'Northern Beaches', 'North Shore', 'Eastern Suburbs', 'Inner West',
    'Western Sydney', 'South Sydney', 'South West Sydney', 'Hills District',
    'Central Coast', 'Sutherland Shire', 'Parramatta', 'Liverpool',
    'Blacktown', 'Penrith', 'Campbelltown', 'Hornsby'
  ];

  return (
    <section className="py-16 bg-off-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-charcoal">Where We Service</h2>
            <p className="text-lg text-charcoal/80 mb-8">
              The Southern Cross Clear proudly serves all of Sydney. From the Northern Beaches to the Southern Shire, 
              Eastern Suburbs to Western Sydney - we're your local rubbish removal and tipper trailer hire service.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <button
                  key={index}
                  onClick={() => handleAreaClick(area)}
                  className="flex items-center space-x-2 hover:text-primary-green transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-primary-green group-hover:scale-110 transition-transform"
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
                  <span className="text-charcoal group-hover:text-primary-green">{area}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/sydney-map.svg"
              alt="Sydney Service Areas Map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary-green/5"></div>
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