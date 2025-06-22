import React from 'react';

const ItemsWeTake = () => {
  const residentialItems = [
    ['Household Rubbish Removal', 'Same-Day Rubbish Removal', 'Deceased Estate Clearance', 'Fast Kerbside Pick Up'],
    ['Carpet Removal', 'Concrete Rubble Removal', 'Garden Waste Removal', 'Hoarders Help & Cleanup'],
    ['E-Waste Removal', 'Tables & Chairs Removal', 'Mattress Removal', 'Refrigerator Removal'],
    ['Scrap Metal Removal', 'Pool Table Removal', 'Lounge & Couch Removal', 'White Goods Removal'],
    ['Furniture Removal', 'Timber & Wood Removal', 'Demolition Waste Removal', 'Lead Paint Removal'],
    ['Renovation Waste Removal', 'Garage Rubbish Removal', 'Apartment Rubbish Removal', 'Glass Removal'],
    ['Property Settlement Rubbish Removal', 'Spring Cleaning Rubbish Removal', 'Spa Removal', 'Cardboard Removal'],
    ['Piano Removal', 'Home Clear Out Services', 'Hard Rubbish Removal', 'Garage Cleanouts']
  ];

  const commercialItems = [
    ['Commercial Rubbish Removal', 'Office Rubbish Removal', 'Construction Rubbish Removal', 'Warehouse Rubbish Removal'],
    ['Storage Unit Rubbish Removal', 'Builder\'s Waste Removal', 'Pallet Removal', 'School Rubbish Removal'],
    ['Strata Rubbish Removal', 'Nursing Home Rubbish Removal', 'Child Care Centre Rubbish Removal', 'Medical Centre Waste Removal'],
    ['Real Estate Rubbish Removal']
  ];

  return (
    <section className="py-16 bg-pure-white">
      <div className="container-custom">
        {/* Residential Items */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Residential Items We Take</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Our team can remove all sorts of household rubbish, junk, or waste. We're able to take almost everything you can think of! 
              If your item isn't on the list, simply give us a call and let us know what you want gone!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {residentialItems.map((row, rowIndex) => (
              <div key={rowIndex} className="space-y-4">
                {row.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center p-3 bg-off-white rounded-lg hover:bg-light-eucalyptus-green transition-colors duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 text-primary-green group-hover:text-eucalyptus-deep flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-sm font-medium text-charcoal group-hover:text-eucalyptus-deep">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Items */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Commercial Items We Take</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              No matter what type of rubbish, junk, or waste you need to be collected, Fair Dinkum Rubbish Removal can get the job done! 
              Our friendly team safely and quickly hand load your junk into our trucks, ready to be either recycled or disposed of. Call us today, we take it all!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {commercialItems.map((row, rowIndex) => (
              <div key={rowIndex} className="space-y-4">
                {row.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center p-3 bg-off-white rounded-lg hover:bg-light-eucalyptus-green transition-colors duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 text-primary-green group-hover:text-eucalyptus-deep flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-sm font-medium text-charcoal group-hover:text-eucalyptus-deep">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemsWeTake;