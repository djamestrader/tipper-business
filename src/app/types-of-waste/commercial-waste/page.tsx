import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HouseholdWasteTypes from '@/components/HouseholdWasteTypes';
import ProhibitedWasteTypes from '@/components/ProhibitedWasteTypes';

export default function CommercialWastePage() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-charcoal">
        <Image
          src="/types-of-waste/office-business-commercial-waste.jpg"
          alt="Commercial Waste Removal Services"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">Office & Business Commercial Waste</h1>
            <p className="text-xl text-pure-white max-w-2xl mx-auto">
              Professional waste management solutions for businesses across Sydney
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container-custom">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Commercial Waste Solutions for Your Business</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-charcoal mb-4">
                  We understand that businesses need reliable, efficient waste removal services that minimize disruption to your operations and maintain a professional environment for your staff and clients.
                </p>
                <p className="text-lg text-charcoal mb-4">
                  Our commercial waste removal services are designed to handle the unique requirements of offices, retail spaces, warehouses, and other business premises with flexibility and professionalism.
                </p>
                <p className="text-lg text-charcoal">
                  From one-time cleanouts to regular scheduled pickups, we provide tailored solutions that meet your business needs and compliance requirements.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/types-of-waste/office-business-commercial-waste.jpg"
                  alt="Commercial Waste Removal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* What We Take */}
          <div className="mb-16 bg-pure-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Commercial Waste We Handle</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Office Waste</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Office furniture and equipment</li>
                  <li>Computers and electronics</li>
                  <li>Filing cabinets and storage</li>
                  <li>Paper and confidential documents</li>
                  <li>Packaging materials</li>
                  <li>Kitchen and break room waste</li>
                </ul>
              </div>
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Retail Waste</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Display fixtures and shelving</li>
                  <li>Mannequins and signage</li>
                  <li>Packaging and cardboard</li>
                  <li>Old inventory and stock</li>
                  <li>Shop fittings</li>
                  <li>Renovation debris</li>
                </ul>
              </div>
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Warehouse & Industrial</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Pallet and shipping materials</li>
                  <li>Industrial equipment</li>
                  <li>Manufacturing waste</li>
                  <li>Bulk packaging</li>
                  <li>Metal and wood scraps</li>
                  <li>Non-hazardous industrial waste</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Accept */}
          <HouseholdWasteTypes />

          {/* Commercial Waste Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Our Commercial Waste Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Office Cleanouts</h3>
                <p className="text-charcoal mb-4">
                  Whether you're relocating, downsizing, or renovating your office space, our team can efficiently remove all unwanted items, furniture, and equipment with minimal disruption to your business operations.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Complete office clearance</li>
                  <li>Selective item removal</li>
                  <li>After-hours service available</li>
                  <li>IT equipment disposal with data security</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Retail & Shop Clearance</h3>
                <p className="text-charcoal mb-4">
                  For retail businesses undergoing refurbishment, relocation, or closure, we provide fast and efficient removal of shop fittings, displays, and stock to help you meet tight deadlines and minimize downtime.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Shop fitting removal</li>
                  <li>Display and signage disposal</li>
                  <li>Stock and inventory clearance</li>
                  <li>After-hours service to avoid business disruption</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Regular Commercial Collections</h3>
                <p className="text-charcoal mb-4">
                  Establish a regular waste collection schedule tailored to your business needs, ensuring your premises remain clean and compliant with health and safety regulations at all times.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Weekly, bi-weekly, or monthly collections</li>
                  <li>Flexible scheduling options</li>
                  <li>Volume-based pricing</li>
                  <li>Recycling separation available</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">End of Lease Clearance</h3>
                <p className="text-charcoal mb-4">
                  When vacating commercial premises, we help ensure you meet your lease obligations by removing all business waste and returning the space to its required condition.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Complete property clearance</li>
                  <li>Removal of all business equipment and furniture</li>
                  <li>Disposal of built-in fixtures if required</li>
                  <li>Fast service to meet lease deadlines</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16 bg-charcoal text-pure-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us for Commercial Waste Removal</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Minimal Business Disruption</h3>
                <p>We work around your schedule, offering after-hours and weekend services to ensure your business operations continue uninterrupted.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Compliance & Documentation</h3>
                <p>We provide waste transfer documentation for your records, ensuring compliance with waste management regulations.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Environmental Responsibility</h3>
                <p>We prioritize recycling and sustainable disposal methods, helping your business meet its environmental objectives.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Professional Team</h3>
                <p>Our uniformed, trained staff represent your business well when on-site and handle all waste with appropriate care and discretion.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Flexible Solutions</h3>
                <p>From one-time clearances to regular scheduled collections, we tailor our services to your specific business requirements.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
                <p>Transparent, volume-based pricing with no hidden fees helps you manage your waste removal budget effectively.</p>
              </div>
            </div>
          </div>

          {/* What We Can't Accept */}
          <ProhibitedWasteTypes />

          {/* Call to Action */}
          <div className="bg-primary-green text-pure-white p-8 md:p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Commercial Waste Needs?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Contact us today for a customized quote tailored to your business requirements.
            </p>
            <Link href="/quote" className="bg-pure-white text-primary-green font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300 inline-block">
              Request a Business Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}