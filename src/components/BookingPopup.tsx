'use client';

import React from 'react';

interface BookingPopupProps {
  area: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingPopup({ area, isOpen, onClose }: BookingPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-charcoal/50 flex items-center justify-center z-50">
      <div className="bg-pure-white rounded-lg p-8 max-w-lg w-full mx-4 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-charcoal mb-2 text-center">{area}</h2>
        <p className="text-charcoal/80 text-center mb-8">Choose your preferred service option:</p>

        <div className="space-y-4">
          <button
            onClick={() => window.location.href = '/tipper-rental'}
            className="w-full py-4 px-6 bg-pure-white border-2 border-primary-green text-primary-green rounded-lg
              hover:bg-primary-green hover:text-pure-white transition-colors duration-300 flex items-center justify-center"
          >
            <span className="text-lg font-semibold">Tipper Trailer Rental</span>
            <span className="ml-2 text-sm">(Self-Load Option)</span>
          </button>

          <button
            onClick={() => window.location.href = '/full-service'}
            className="w-full py-4 px-6 bg-primary-green text-pure-white rounded-lg
              hover:bg-eucalyptus-deep transition-colors duration-300 flex items-center justify-center"
          >
            <span className="text-lg font-semibold">Full-Service Removal</span>
            <span className="ml-2 text-sm">(We Do The Heavy Lifting)</span>
          </button>
        </div>
      </div>
    </div>
  );
}