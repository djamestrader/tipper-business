import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ConstructionWasteTypes from '@/components/ConstructionWasteTypes';
import ProhibitedWasteTypes from '@/components/ProhibitedWasteTypes';

export default function MasonryWastePage() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-charcoal">
        <Image
          src="/types-of-waste/masonry-brick-concrete-waste.jpg"
          alt="Masonry Brick Concrete Waste Removal"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">Masonry Brick Concrete Waste</h1>
            <p className="text-xl text-pure-white max-w-2xl mx-auto">
              Specialized removal of heavy construction materials across Sydney
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container-custom">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Expert Masonry Waste Removal Services</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-charcoal mb-4">
                  Masonry, brick, and concrete waste presents unique challenges due to its weight, volume, and disposal requirements. Our specialized heavy material removal service is equipped to handle these demanding materials efficiently and responsibly.
                </p>
                <p className="text-lg text-charcoal mb-4">
                  Whether you're demolishing a wall, removing an old patio, or clearing a construction site, our team has the equipment, expertise, and experience to manage heavy masonry waste removal with minimal disruption.
                </p>
                <p className="text-lg text-charcoal">
                  We prioritize recycling of masonry materials whenever possible, contributing to sustainable construction practices and reducing landfill impact.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/types-of-waste/masonry-brick-concrete-waste.jpg"
                  alt="Masonry Waste Removal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* What We Take */}
          <div className="mb-16 bg-pure-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Masonry Materials We Remove</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Concrete Materials</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Concrete slabs and foundations</li>
                  <li>Concrete blocks and pavers</li>
                  <li>Reinforced concrete</li>
                  <li>Concrete pillars and posts</li>
                  <li>Concrete pipes and drainage</li>
                  <li>Concrete rubble and debris</li>
                </ul>
              </div>
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Brick & Block</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Clay bricks and pavers</li>
                  <li>Concrete blocks and bricks</li>
                  <li>Fire bricks</li>
                  <li>Brick rubble</li>
                  <li>Mortar and grout waste</li>
                  <li>Retaining wall blocks</li>
                </ul>
              </div>
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Other Masonry</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Stone and natural rock</li>
                  <li>Tiles and ceramics</li>
                  <li>Porcelain fixtures</li>
                  <li>Granite and marble</li>
                  <li>Slate and sandstone</li>
                  <li>Mixed masonry debris</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Accept */}
          <ConstructionWasteTypes />

          {/* Our Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Our Masonry Waste Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Heavy Material Removal</h3>
                <p className="text-charcoal mb-4">
                  Our specialized equipment and trained team can efficiently remove large quantities of heavy masonry materials from your site, saving you time and physical strain.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Removal of concrete slabs and foundations</li>
                  <li>Brick wall and structure clearance</li>
                  <li>Heavy-duty equipment for efficient loading</li>
                  <li>Proper handling to prevent property damage</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Demolition Waste Clearance</h3>
                <p className="text-charcoal mb-4">
                  Following demolition work, we'll clear all masonry debris quickly and thoroughly, preparing your site for the next phase of construction or development.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Post-demolition cleanup</li>
                  <li>Sorting of materials for recycling</li>
                  <li>Complete site clearance</li>
                  <li>Coordination with demolition contractors</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Renovation Support</h3>
                <p className="text-charcoal mb-4">
                  During renovation projects involving masonry removal, we provide timely waste clearance to keep your project moving forward without delays.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Bathroom and kitchen renovation waste</li>
                  <li>Patio and driveway removal</li>
                  <li>Scheduled collections during project phases</li>
                  <li>Flexible timing to suit construction schedules</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Recycling Services</h3>
                <p className="text-charcoal mb-4">
                  We prioritize the recycling of masonry materials, ensuring they're processed at appropriate facilities for reuse in new construction projects.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Concrete crushing and recycling</li>
                  <li>Brick reclamation when possible</li>
                  <li>Sustainable disposal practices</li>
                  <li>Documentation for green building certification</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Equipment & Capabilities */}
          <div className="mb-16 bg-charcoal text-pure-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Our Equipment & Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  Removing heavy masonry waste requires specialized equipment and expertise. Our team is fully equipped to handle the most challenging masonry removal tasks safely and efficiently.
                </p>
                <h3 className="text-xl font-bold mb-3">Our Fleet Includes:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Heavy-duty tipper trucks with high weight capacity</li>
                  <li>Hydraulic lifting equipment for safe loading</li>
                  <li>Specialized containers for masonry waste</li>
                  <li>Protective equipment to prevent property damage</li>
                </ul>
                <h3 className="text-xl font-bold mb-3">Our Team Is Trained In:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Safe handling of heavy materials</li>
                  <li>Proper loading techniques to prevent injury</li>
                  <li>Identifying recyclable masonry materials</li>
                  <li>Efficient site clearance methods</li>
                </ul>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/1300rubbish/2025-06-05_18-30-33.jpg"
                  alt="Masonry Waste Removal Equipment"
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
            <h2 className="text-3xl font-bold mb-4">Need Masonry Waste Removed?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Contact us today for a free quote on masonry, brick, and concrete waste removal across Sydney.
            </p>
            <Link href="/quote" className="bg-pure-white text-primary-green font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300 inline-block">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}