'use client';

import React, { useState } from 'react';

const ItemsWeTake = () => {
  // Define waste categories with their details and SVG icons
  const wasteCategories = [
    {
      id: 'cardboard',
      name: 'Cardboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m-4-10l-4 2m8-2l4 2m-8-4l-4-2m-4 2v10l4 2m4-2l4 2m-4-10l4-2m-4 2l-4-2m4-2l4 2m-4 2l-4-2" />
        </svg>
      ),
      description: 'We collect and recycle all types of cardboard waste from your home or business. Our team ensures proper disposal and recycling of cardboard materials.',
      services: ['Cardboard Box Removal', 'Packaging Material Recycling', 'Bulk Cardboard Collection', 'Eco-friendly Disposal'] // Shortened for display consistency
    },
    {
      id: 'construction',
      name: 'Construction',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      description: 'We handle all construction debris and waste materials from renovation and building projects. Our team is equipped to safely remove and dispose of construction waste.',
      services: ['Demolition Waste Removal', 'Concrete Rubble Removal', 'Timber & Wood Removal', 'Building Material Disposal'] // Shortened
    },
    {
      id: 'furniture',
      name: 'Furniture',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      description: 'We collect all types of furniture items, from sofas and beds to tables and chairs. Our team will carefully remove and dispose of your unwanted furniture items.',
      services: ['Waste Pickups', 'Waste Solutions', 'Roll-off Services', '24/7 Support'] // Matching the HTML example's services
    },
    {
      id: 'food-waste',
      name: 'Food Waste',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM9 17a3 3 0 003 3h.01M16.002 17H16m-1.72-5.72L12 10.518m0 0l-1.282-1.282M18.707 6.293L20 7.586M2 7.586l1.293 1.293m6.121 6.121L12 13.482m0 0l2.404 2.404M3 10V4.5m18 5.5V4.5M6 10H4m16 0h-2" />
        </svg>
      ),
      description: 'We provide responsible disposal of food waste from homes, restaurants, and commercial kitchens. Our team ensures environmentally friendly disposal methods.',
      services: ['Organic Waste Collection', 'Restaurant Food Waste', 'Composting Services', 'Sustainable Disposal'] // Shortened
    },
    {
      id: 'landscaping',
      name: 'Landscaping',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1V3m2 3h4m-2 2V6m-2 6v4m2-4h4m-2 2v4m-2-4l-2 1m2-1l-2-1m-2-1V3m-2 3h4m-2 2V6m-2 6v4m2-4h4m-2 2v4m-2-4l-2 1m2-1l-2-1m-2-1V3m-2 3h4m-2 2V6m-2 6v4m2-4h4m-2 2v4M4 14l-2 1m2-1l-2-1m-2-1V3m-2 3h4m-2 2V6m-2 6v4m2-4h4m-2 2v4m-2-4l-2 1m2-1l-2-1m-2-1V3m-2 3h4m-2 2V6M20 14l2 1m-2-1l2-1m2-1V3m2 3h4m-2 2V6m-2 6v4m2-4h4m-2 2v4m-2-4l-2 1m2-1l-2-1m-2-1V3m-2 3h4m-2 2V6" />
        </svg>
      ),
      description: 'We remove all types of garden and landscaping waste, from grass clippings to tree branches. Our team will clear your outdoor spaces efficiently.',
      services: ['Garden Waste Removal', 'Tree Branch Disposal', 'Lawn Clipping Collection', 'Soil & Dirt Removal']
    },
    {
      id: 'metal-waste',
      name: 'Metal Waste',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.25 7.5v-3C20.25 3.672 19.328 3 18 3H6c-1.328 0-2.25.672-2.25 1.5v3m0 0l-.75 4.5 4.5 1.5 1.5-4.5h-1.5m-3 0h3l1.5-4.5H6m-1.5 4.5L3 18v-3m0 0l.75 4.5 4.5 1.5 1.5-4.5h-1.5m-3 0h3l1.5-4.5H6m1.5 4.5l-.75 4.5L10 21l1.5-4.5h-1.5m-3 0h3l1.5-4.5h-1.5m-1.5 4.5l-4.5 1.5-1.5-4.5h-1.5M6 18h12c1.328 0 2.25.672 2.25 1.5V21m0-3l-.75 4.5-4.5 1.5-1.5-4.5h-1.5m-3 0h3l1.5-4.5H6m1.5 4.5L3 18v-3m0 0l.75 4.5 4.5 1.5 1.5-4.5h-1.5m-3 0h3l1.5-4.5H6m1.5 4.5l-.75 4.5L10 21l1.5-4.5h-1.5m-3 0h3l1.5-4.5h-1.5m-1.5 4.5L4 18v-3m0 0l-.75 4.5 4.5 1.5 1.5-4.5h-1.5m-3 0h3l1.5-4.5H6" />
        </svg>
      ),
      description: 'We collect and recycle all types of metal waste, from appliances to scrap metal. Our team ensures proper recycling of metal materials.',
      services: ['Scrap Metal Removal', 'Appliance Recycling', 'Metal Furniture Collection', 'Industrial Metal Waste'] // Shortened
    },
    {
      id: 'household',
      name: 'Household',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      description: 'We handle all types of household rubbish and junk removal. Our team will efficiently clear your home of unwanted items.',
      services: ['Household Rubbish Removal', 'Same-Day Rubbish Removal', 'Deceased Estate Clearance', 'Fast Kerbside Pick Up']
    },
    {
      id: 'commercial',
      name: 'Commercial',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: 'We provide comprehensive commercial waste removal services for businesses of all sizes. Our team ensures minimal disruption to your operations.',
      services: ['Commercial Rubbish Removal', 'Office Rubbish Removal', 'Warehouse Rubbish Removal', 'Storage Unit Rubbish Removal']
    }
  ];

  // State to track the selected category, defaulting to "Furniture" as in the HTML Canvas
  const [selectedCategory, setSelectedCategory] = useState(wasteCategories[2]); 

  return (
    <section className="py-12" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" style={{ paddingTop: '4rem' }}>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#E74C3C' }}>TYPES OF WASTE</h4>
          <h2 className="text-4xl font-extrabold" style={{ color: '#333' }}>Materials We Collected</h2>
        </div>

        {/* Waste Type Cards Grid - Now 2 rows of 4 categories */}
        {/* Changed grid layout to display 4 columns on medium and large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          {wasteCategories.map((category) => (
            <div
              key={category.id}
              className={`flex flex-col items-center p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg ${selectedCategory.id === category.id ? 'ring-2 ring-blue-600' : ''}`}
              style={{ backgroundColor: '#fff', borderRadius: '0.75rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}
              onClick={() => setSelectedCategory(category)}
            >
              <div
                className="flex justify-center items-center mb-4 rounded-full"
                style={{ width: '80px', height: '80px', border: '2px solid #E74C3C', backgroundColor: '#ffe0db' }}
              >
                <div style={{ width: '40px', height: '40px', color: '#E74C3C' }}>
                  {category.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#333' }}>{category.name}</h3>
            </div>
          ))}
        </div>

        {/* Detail Section for Selected Category - Now explicitly horizontal on MD screens */}
        <div
  className="flex flex-row md:flex-row bg-white rounded-xl shadow-md overflow-hidden p-8 md:p-12 mt-16"
  style={{
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    marginBottom: '4rem'
  }}
>
  {/* Left (Image) */}
  <div className="w-full md:w-1/2 p-8 bg-blue-100 flex items-center justify-center">
  <img
    src="https://placehold.co/600x400/999999/ffffff?text=Man+on+Phone"
    alt={`${selectedCategory.name} waste removal service`}
    className="rounded-lg object-contain"
    style={{ maxHeight: '250px', width: 'auto' }}
  />
</div>

  {/* Right (Content) */}
  <div className="w-full md:w-1/2 p-4 md:pl-6 bg-green-100">
    <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#E74C3C' }}>
      TYPES OF WASTE
    </h4>
    <h3 className="text-2xl font-extrabold flex items-center mb-6" style={{ color: '#333' }}>
      <div
        className="flex justify-center items-center mr-3 rounded-full flex-shrink-0"
        style={{
          width: '40px',
          height: '40px',
          border: '2px solid #E74C3C',
          backgroundColor: '#ffe0db'
        }}
      >
        <div style={{ width: '20px', height: '20px', color: '#E74C3C' }}>
          {selectedCategory.icon}
        </div>
      </div>
      {selectedCategory.name}
    </h3>
    <p className="text-base leading-relaxed mb-6" style={{ color: '#666' }}>
      {selectedCategory.description}
    </p>
    <ul className="list-none p-0 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {selectedCategory.services.map((service, index) => (
        <li key={index} className="flex items-center text-base" style={{ color: '#333' }}>
          <svg
            className="w-5 h-5 mr-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: '#4CAF50' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {service}
        </li>
      ))}
    </ul>
    <a
      href="#"
      className="inline-block py-3 px-8 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
      style={{ backgroundColor: '#E74C3C', color: '#fff', borderRadius: '0.375rem' }}
    >
      Let's Talk With Team
    </a>
  </div>
</div>

      </div>
    </section>
  );
};

export default ItemsWeTake;
