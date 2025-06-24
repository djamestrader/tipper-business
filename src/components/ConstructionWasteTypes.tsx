import React from 'react';

const ConstructionWasteTypes = () => {
  return (
    <div className="bg-pure-white p-8 rounded-lg shadow-md my-12">
      <h2 className="text-3xl font-bold text-charcoal mb-6 text-center">We'll Take It!</h2>
      <h3 className="text-xl font-bold text-primary-green mb-6 text-center">Trade, Building and Construction Waste</h3>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Site Trade Waste */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-green rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-2">Site Trade Waste</h4>
            <p className="text-charcoal">
              Timber off-cuts, plasterboard, packaging waste, timber pallets, metal scraps, insulation materials, PVC piping, wiring, glass, old fixtures, roofing materials, plastic sheeting, adhesive containers, empty paint tins, pipes, broken tools, garden waste, decking, timber fencing, turf, trimmings, electrical components, concrete formwork, scrap bricks, old doors, window frames, floorboards, cabinetry, lighting fixtures, carpet off-cuts, tiles, plumbing fixtures, ducting, leftover sealants, drywall, and damaged equipment.
            </p>
          </div>
        </div>

        {/* Masonry Only */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-green rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-charcoal mb-2">Masonry Only</h4>
            <p className="text-charcoal">
              Bricks, concrete, tiles, mortar, stone, paving slabs, rubble, cement blocks, asphalt, ceramic materials, breeze blocks, crushed aggregate, cinder blocks, granite offcuts, marble slabs, terracotta, clay pipes, limestone fragments, sandstone, masonry lintels, and slate tiles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionWasteTypes;