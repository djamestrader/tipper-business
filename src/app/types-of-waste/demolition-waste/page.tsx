import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ConstructionWasteTypes from '@/components/ConstructionWasteTypes';
import ProhibitedWasteTypes from '@/components/ProhibitedWasteTypes';

export default function DemolitionWastePage() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-charcoal">
        <Image
          src="/types-of-waste/demolition-waste.jpg"
          alt="Demolition Waste Removal Services"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">Demolition Waste Removal</h1>
            <p className="text-xl text-pure-white max-w-2xl mx-auto">
              Complete solutions for demolition debris management across Sydney
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container-custom">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Professional Demolition Waste Management</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-charcoal mb-4">
                  Demolition projects generate substantial volumes of mixed waste that require efficient, safe, and compliant removal. Our specialized demolition waste service is designed to handle the unique challenges of post-demolition cleanup.
                </p>
                <p className="text-lg text-charcoal mb-4">
                  Whether you're demolishing a single room, an entire structure, or managing a large-scale commercial demolition, our team has the equipment, expertise, and capacity to clear your site quickly and thoroughly.
                </p>
                <p className="text-lg text-charcoal">
                  We work with homeowners, contractors, and demolition specialists to provide seamless waste management solutions that keep your project on schedule and compliant with regulations.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/types-of-waste/demolition-waste.jpg"
                  alt="Demolition Waste Removal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* What We Take */}
          <div className="mb-16 bg-pure-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Demolition Waste We Remove</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Structural Materials</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Concrete and reinforced concrete</li>
                  <li>Brick and block work</li>
                  <li>Timber framing and beams</li>
                  <li>Steel and metal components</li>
                  <li>Roofing materials</li>
                  <li>Wall and ceiling materials</li>
                </ul>
              </div>
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Interior Components</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Drywall and plasterboard</li>
                  <li>Flooring materials</li>
                  <li>Ceiling tiles and insulation</li>
                  <li>Fixtures and fittings</li>
                  <li>Cabinetry and built-ins</li>
                  <li>Interior doors and trim</li>
                </ul>
              </div>
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Mixed Demolition Waste</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Commingled demolition debris</li>
                  <li>Glass and window materials</li>
                  <li>Electrical components</li>
                  <li>Plumbing fixtures and pipes</li>
                  <li>HVAC components</li>
                  <li>General demolition rubble</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Accept */}
          <ConstructionWasteTypes />

          {/* Our Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Our Demolition Waste Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Post-Demolition Cleanup</h3>
                <p className="text-charcoal mb-4">
                  Once demolition is complete, our team will efficiently clear all debris from your site, preparing it for the next phase of construction or development.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Complete site clearance</li>
                  <li>Sorting of materials for recycling</li>
                  <li>Removal of all demolition debris</li>
                  <li>Final site inspection</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Staged Demolition Support</h3>
                <p className="text-charcoal mb-4">
                  For larger projects with phased demolition, we provide ongoing waste removal services to keep your site manageable and safe throughout the process.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Scheduled collections during demolition phases</li>
                  <li>Coordination with demolition contractors</li>
                  <li>Flexible timing to suit project schedules</li>
                  <li>Volume-based pricing</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Selective Demolition Waste</h3>
                <p className="text-charcoal mb-4">
                  For interior demolition or partial structure removal, we carefully remove specific waste materials while protecting surrounding areas from damage.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Room or section-specific cleanup</li>
                  <li>Careful waste handling in occupied buildings</li>
                  <li>Minimal disruption to surrounding areas</li>
                  <li>Dust and debris containment</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Material Recycling & Salvage</h3>
                <p className="text-charcoal mb-4">
                  We prioritize the recycling and salvage of demolition materials whenever possible, supporting sustainable construction practices and reducing landfill impact.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Sorting of recyclable materials</li>
                  <li>Concrete and masonry recycling</li>
                  <li>Metal recovery and recycling</li>
                  <li>Timber salvage when appropriate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compliance & Safety */}
          <div className="mb-16 bg-charcoal text-pure-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Compliance & Safety Standards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  Demolition waste removal requires strict adherence to safety protocols and regulatory compliance. At Fair Dinkum Rubbish Removal, we maintain the highest standards in both areas:
                </p>
                <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>All waste disposed according to NSW EPA guidelines</li>
                  <li>Proper documentation and waste transfer records</li>
                  <li>Licensed disposal at authorized facilities</li>
                  <li>Compliance with local council requirements</li>
                </ul>
                <h3 className="text-xl font-bold mb-3">Safety Protocols</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fully trained and insured team members</li>
                  <li>Appropriate PPE for all personnel</li>
                  <li>Risk assessment before waste removal begins</li>
                  <li>Safe loading and transport procedures</li>
                </ul>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/1300rubbish/2025-06-05_18-27-58.jpg"
                  alt="Safe Demolition Waste Handling"
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
            <h2 className="text-3xl font-bold mb-4">Need Demolition Waste Removed?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Contact us today for a comprehensive quote on demolition waste removal services across Sydney.
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