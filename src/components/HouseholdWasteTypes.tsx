import React from 'react';

const HouseholdWasteTypes = () => {
  return (
    <div className="bg-pure-white p-8 rounded-lg shadow-md my-12">
      <h2 className="text-3xl font-bold text-charcoal mb-6 text-center">We'll Take It!</h2>
      <h3 className="text-xl font-bold text-primary-green mb-6 text-center">Household Junk, Green Waste and Business Waste</h3>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {/* General Household Items */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-green rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-2">General Household Items</h4>
            <p className="text-charcoal">
              A typical household features furniture and appliances such as sofas, couches, chairs, tables, beds, wardrobes, dressers, coffee tables, dining sets, refrigerators, ovens, microwaves, toasters, blenders, dishwashers, washing machines, dryers, air conditioners, heaters, and vacuum cleaners
            </p>
          </div>
        </div>

        {/* White Goods and Appliances */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-green rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-2">White Goods and Appliances</h4>
            <p className="text-charcoal">
              White goods and appliances include refrigerators, freezers, washing machines, dryers, dishwashers, ovens, stoves, microwaves, air conditioners, heaters, water heaters, vacuum cleaners, toasters, blenders, coffee makers, kettles, food processors, mixers, irons, and electric grills.
            </p>
          </div>
        </div>

        {/* Business and Office */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-green rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-2">Business and Office</h4>
            <p className="text-charcoal">
              Business and office items include computers, laptops, monitors, keyboards, printers, scanners, copiers, desks, chairs, filing cabinets, bookshelves, conference tables, whiteboards, projectors, shredders, office supplies like pens, paper, staplers, packaging materials, pallets, storage boxes, and other equipment.
            </p>
          </div>
        </div>

        {/* Green Waste */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-green rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-2">Green Waste</h4>
            <p className="text-charcoal">
              A collection of tree trimmings, fallen leaves, grass clippings, branches, hedge clippings, weeds, garden debris, compostable plant residues, mulch materials and other organic plant materials.
            </p>
          </div>
        </div>

        {/* Individually Charged Items */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-green rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-2">Individually Charged Items</h4>
            <p className="text-charcoal">
              The following items are accepted; however, they are charged individually: mattresses of all sizes and types, tyres of all sizes, gas bottles and paint tins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseholdWasteTypes;