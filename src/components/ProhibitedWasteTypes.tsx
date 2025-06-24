import React from 'react';

const ProhibitedWasteTypes = () => {
  return (
    <div className="bg-pure-white p-8 rounded-lg shadow-md my-12">
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Can't Take It!</h2>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Asbestos */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-red-600 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-2">Asbestos</h4>
            <p className="text-charcoal">
              We cannot accept asbestos in our skip bins (additional fees and charges apply). However, we do have asbestos-exclusive bins available for safe disposal.
              <br />
              <a href="#" className="text-primary-green hover:underline">Asbestos Only Skip Bins &gt;</a>
            </p>
          </div>
        </div>

        {/* Food Waste */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-red-600 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-2">Food Waste</h4>
            <p className="text-charcoal">
              We do not accept food waste, including fruit and vegetable scraps, meat, dairy products, leftover meals, baked goods, and pantry and packaged items.
            </p>
          </div>
        </div>

        {/* Hazardous Waste */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-red-600 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-2">Hazardous Waste</h4>
            <p className="text-charcoal">
              Items like faecal matter, deceased animals, medical waste, dangerous or flammable chemicals, and hazardous waste must not be disposed of in our dumpsters.
            </p>
          </div>
        </div>

        {/* Compressed Air Canisters */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-red-600 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-2">Compressed Air Canisters</h4>
            <p className="text-charcoal">
              Fire extinguishers, gas bottles, helium gas bottles, air compressors, CO<sub>2</sub> cartridges, oxygen cylinders, acetylene tanks, welding gas cylinders are used in home and business settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProhibitedWasteTypes;