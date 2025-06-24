'use client';

import React from 'react';

interface PricingItem {
  size: string;
  price: string;
  costPerM3: string;
  equivalent: string;
  dimensions: string;
  spaceNeeded: string;
  bestFor: string;
}

interface PricingTableProps {
  pricingData: PricingItem[];
  colorTheme: 'primary' | 'secondary';
}

const PricingTable: React.FC<PricingTableProps> = ({ pricingData, colorTheme }) => {
  // Determine the theme color classes based on the colorTheme prop
  const themeClasses = {
    headerBg: colorTheme === 'primary' ? 'bg-primaryBrand' : 'bg-secondaryBrand',
    textColor: colorTheme === 'primary' ? 'text-primaryBrand' : 'text-secondaryBrand',
    borderColor: colorTheme === 'primary' ? 'border-primaryBrand' : 'border-secondaryBrand',
  };

  return (
    <>
      {/* Desktop Pricing Table */}
      <div className="hidden lg:block max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <table className="w-full">
          <thead className={`${themeClasses.headerBg} text-white`}>
            <tr>
              <th className="py-4 px-6 text-left">Volume of Waste</th>
              <th className="py-4 px-6 text-left">Price</th>
              <th className="py-4 px-6 text-left">Cost per m³</th>
              <th className="py-4 px-6 text-left">Equivalent To</th>
              <th className="py-4 px-6 text-left">Best For</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-4 px-6 font-medium">{item.size}</td>
                <td className={`py-4 px-6 font-bold ${themeClasses.textColor}`}>{item.price}</td>
                <td className="py-4 px-6">{item.costPerM3}</td>
                <td className="py-4 px-6">{item.equivalent}</td>
                <td className="py-4 px-6">{item.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Pricing Cards */}
      <div className="lg:hidden space-y-6">
        {pricingData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className={`${themeClasses.headerBg} text-white py-3 px-4`}>
              <h3 className="text-xl font-bold">{item.size}</h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Price:</span>
                <span className={`font-bold ${themeClasses.textColor}`}>{item.price}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Cost per m³:</span>
                <span>{item.costPerM3}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Equivalent To:</span>
                <span>{item.equivalent}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Dimensions:</span>
                <span className="text-right">{item.dimensions}</span>
              </div>
              <div className="pt-2">
                <span className="font-medium">Best For:</span>
                <p className="mt-1">{item.bestFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingTable;