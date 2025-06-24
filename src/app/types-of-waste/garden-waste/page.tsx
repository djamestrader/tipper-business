import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HouseholdWasteTypes from '@/components/HouseholdWasteTypes';
import ProhibitedWasteTypes from '@/components/ProhibitedWasteTypes';

export default function GardenWastePage() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-charcoal">
        <Image
          src="/types-of-waste/green-garden-waste.jpg"
          alt="Green and Garden Waste Removal Services"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">Green and Garden Waste Removal</h1>
            <p className="text-xl text-pure-white max-w-2xl mx-auto">
              Eco-friendly disposal of all your garden and organic waste
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container-custom">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Responsible Garden Waste Removal Services</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-charcoal mb-4">
                  Maintaining a beautiful garden often results in significant green waste that can be difficult to dispose of through regular council collections.
                </p>
                <p className="text-lg text-charcoal mb-4">
                  Our specialized green waste removal service provides an eco-friendly solution for disposing of garden trimmings, branches, leaves, grass clippings, and other organic waste from your outdoor spaces.
                </p>
                <p className="text-lg text-charcoal">
                  We ensure all green waste is properly processed for composting or mulching, contributing to a more sustainable environment while helping you maintain a tidy property.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/types-of-waste/green-garden-waste.jpg"
                  alt="Garden Waste Removal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* What We Take */}
          <div className="mb-16 bg-pure-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Garden Waste We Remove</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Plant Material</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Tree branches and prunings</li>
                  <li>Hedge trimmings</li>
                  <li>Shrub and bush cuttings</li>
                  <li>Flowers and plants</li>
                  <li>Weeds and invasive species</li>
                  <li>Palm fronds</li>
                </ul>
              </div>
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Lawn Waste</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Grass clippings</li>
                  <li>Leaves and leaf litter</li>
                  <li>Turf and soil</li>
                  <li>Mulch and bark</li>
                  <li>Hay and straw</li>
                  <li>Compost</li>
                </ul>
              </div>
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Garden Items</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Old planters and pots</li>
                  <li>Broken garden furniture</li>
                  <li>Dismantled garden sheds</li>
                  <li>Fencing materials</li>
                  <li>Garden equipment</li>
                  <li>Irrigation systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Accept */}
          <HouseholdWasteTypes />

          {/* Garden Waste Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Our Garden Waste Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Post-Gardening Cleanup</h3>
                <p className="text-charcoal mb-4">
                  After a day of gardening or landscaping work, we'll collect and remove all the resulting green waste, leaving your property clean and tidy.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Same-day service available</li>
                  <li>No need for skip bins taking up space</li>
                  <li>We do all the heavy lifting</li>
                  <li>Complete cleanup of work areas</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Seasonal Garden Clearance</h3>
                <p className="text-charcoal mb-4">
                  Seasonal garden maintenance often generates large volumes of green waste. Our service helps you manage autumn leaf fall, spring pruning, or summer garden renovations.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Scheduled seasonal collections</li>
                  <li>Bulk removal capacity</li>
                  <li>Efficient processing of large volumes</li>
                  <li>Environmentally responsible disposal</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Tree and Hedge Service</h3>
                <p className="text-charcoal mb-4">
                  Following tree surgery, hedge cutting, or removal, we'll efficiently clear away all branches, trunks, and foliage, regardless of volume.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Removal of large branches and trunks</li>
                  <li>Processing of dense hedge materials</li>
                  <li>Coordination with tree surgeons</li>
                  <li>Complete site cleanup</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Garden Renovation Waste</h3>
                <p className="text-charcoal mb-4">
                  When redesigning your garden or outdoor space, we'll remove all the unwanted materials, from old plants and soil to landscaping materials and structures.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Removal of old garden features</li>
                  <li>Clearing of unwanted plants and materials</li>
                  <li>Disposal of landscaping debris</li>
                  <li>Preparation for new garden installation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Environmental Commitment */}
          <div className="mb-16 bg-primary-green text-pure-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Our Environmental Commitment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  At Fair Dinkum Rubbish Removal, we're committed to environmentally responsible waste management practices, especially when it comes to green waste.
                </p>
                <p className="text-lg mb-4">
                  We ensure that all garden waste we collect is properly sorted and sent to appropriate processing facilities where it can be:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Composted into nutrient-rich soil</li>
                  <li>Processed into mulch for landscaping</li>
                  <li>Used in biogas energy production</li>
                  <li>Recycled into other useful products</li>
                </ul>
                <p className="text-lg">
                  By choosing our garden waste removal service, you're contributing to a more sustainable future and reducing the environmental impact of your garden maintenance activities.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/1300rubbish/2025-06-05_18-29-25.jpg"
                  alt="Eco-friendly Garden Waste Processing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* What We Can't Accept */}
          <ProhibitedWasteTypes />

          {/* Call to Action */}
          <div className="bg-primary-green text-pure-white p-8 md:p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Need Garden Waste Removed?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Contact us today for a free, no-obligation quote on garden waste removal across Sydney.
            </p>
            <Link href="/quote" className="bg-primary-green text-pure-white font-bold py-3 px-8 rounded-md hover:bg-green-600 transition-colors duration-300 inline-block">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}