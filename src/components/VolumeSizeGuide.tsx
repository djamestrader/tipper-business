'use client';

import React from 'react';
import Image from 'next/image';

interface PricingItem {
  size: string;
  price: string;
  costPerM3: string;
  equivalent: string;
  dimensions: string;
  spaceNeeded: string;
  bestFor: string;
}

interface VolumeSizeGuideProps {
  pricingData: PricingItem[];
  colorTheme: 'primary' | 'secondary';
  imageBaseIndex: number; // Starting index for the images
}

const VolumeSizeGuide: React.FC<VolumeSizeGuideProps> = ({ 
  pricingData, 
  colorTheme,
  imageBaseIndex = 3 // Default to start with image 3.jpg
}) => {
  // Determine the theme color classes based on the colorTheme prop
  const borderColor = colorTheme === 'primary' ? 'border-primaryBrand' : 'border-secondaryBrand';

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {pricingData.map((item, index) => (
        <div key={index} className="bg-neutralBackground rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-3">{item.size} Volume</h3>
          <div className={`relative h-48 mb-4 rounded-lg overflow-hidden border-2 ${borderColor}`}>
            <Image 
              src={`/quoteform/${index + imageBaseIndex}.jpg`} 
              alt={`${item.size} Volume Size`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="space-y-2 mb-4">
            <p><span className="font-medium">Dimensions:</span> {item.dimensions}</p>
            <p><span className="font-medium">Space Needed:</span> {item.spaceNeeded}</p>
            <p><span className="font-medium">Equivalent To:</span> {item.equivalent}</p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <p className="font-medium">Best For:</p>
            <p>{item.bestFor}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VolumeSizeGuide;