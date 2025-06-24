import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ConstructionWasteTypes from '@/components/ConstructionWasteTypes';
import ProhibitedWasteTypes from '@/components/ProhibitedWasteTypes';

export default function RenovationWastePage() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-charcoal">
        <Image
          src="/types-of-waste/trade-building-renovation-waste.jpg"
          alt="Trade Building Renovation Waste Removal"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">Trade Building Renovation Waste</h1>
            <p className="text-xl text-pure-white max-w-2xl mx-auto">
              Efficient removal of construction and renovation debris across Sydney
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container-custom">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Professional Renovation Waste Removal Services</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-charcoal mb-4">
                  Construction and renovation projects generate significant amounts of waste that require proper handling and disposal. Our specialized trade waste removal service is designed to keep your worksite clean, safe, and compliant.
                </p>
                <p className="text-lg text-charcoal mb-4">
                  Whether you're a professional tradesperson, contractor, or a homeowner managing a DIY renovation, we provide reliable, cost-effective solutions for removing building waste of all types and quantities.
                </p>
                <p className="text-lg text-charcoal">
                  Our experienced team understands the demands of construction projects and can work around your schedule to ensure minimal disruption to your workflow.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/types-of-waste/trade-building-renovation-waste.jpg"
                  alt="Renovation Waste Removal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* What We Take */}
          <div className="mb-16 bg-pure-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Renovation Waste We Remove</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Building Materials</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Timber and wood scraps</li>
                  <li>Drywall and plasterboard</li>
                  <li>Insulation materials</li>
                  <li>Roofing materials</li>
                  <li>Flooring and carpet</li>
                  <li>Packaging materials</li>
                </ul>
              </div>
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Fixtures & Fittings</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Kitchen and bathroom fixtures</li>
                  <li>Cabinets and countertops</li>
                  <li>Doors and windows</li>
                  <li>Lighting fixtures</li>
                  <li>Plumbing fixtures</li>
                  <li>Built-in furniture</li>
                </ul>
              </div>
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Renovation Debris</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Mixed construction waste</li>
                  <li>Demolition debris</li>
                  <li>Metal scraps</li>
                  <li>Plastic and PVC materials</li>
                  <li>Paint cans (empty and dry)</li>
                  <li>General site cleanup waste</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Accept */}
          <ConstructionWasteTypes />

          {/* Our Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Our Renovation Waste Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">One-Time Cleanup</h3>
                <p className="text-charcoal mb-4">
                  For projects that generate waste in a single phase, we offer one-time collection and removal services to clear your site quickly and efficiently.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Fast response times</li>
                  <li>Flexible scheduling</li>
                  <li>Complete site cleanup</li>
                  <li>Volume-based pricing</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Ongoing Project Support</h3>
                <p className="text-charcoal mb-4">
                  For larger renovation projects, we provide regular scheduled waste removal to keep your site clean and safe throughout the duration of the work.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Weekly or bi-weekly collections</li>
                  <li>Consistent timing to suit your workflow</li>
                  <li>Reduced rates for regular service</li>
                  <li>Dedicated account manager</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Post-Renovation Cleanup</h3>
                <p className="text-charcoal mb-4">
                  Once your project is complete, we provide comprehensive cleanup services to remove all remaining waste and prepare the space for use or handover.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Thorough site clearance</li>
                  <li>Removal of all construction debris</li>
                  <li>Final sweep and cleanup</li>
                  <li>Recycling of eligible materials</li>
                </ul>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Trade Partner Program</h3>
                <p className="text-charcoal mb-4">
                  For tradespeople and contractors who need regular waste removal services, our Trade Partner Program offers preferential rates and priority scheduling.
                </p>
                <ul className="list-disc pl-5 text-charcoal space-y-1 mb-4">
                  <li>Discounted rates for regular clients</li>
                  <li>Priority booking system</li>
                  <li>Dedicated account manager</li>
                  <li>Monthly invoicing options</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16 bg-charcoal text-pure-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us for Renovation Waste Removal</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Site Safety</h3>
                <p>A clean worksite is a safe worksite. We help maintain safety standards by promptly removing hazardous debris and keeping access ways clear.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Compliance</h3>
                <p>We ensure all construction waste is disposed of according to local regulations, providing documentation for your records when required.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Efficiency</h3>
                <p>Our prompt service helps keep your project on schedule by preventing waste buildup that can impede progress and create delays.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Recycling Focus</h3>
                <p>We sort and recycle eligible construction materials, reducing landfill impact and supporting your sustainability goals.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
                <p>We work around your construction schedule, offering early morning, evening, or weekend collections to minimize disruption.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Professional Team</h3>
                <p>Our experienced crew understands construction sites and follows all safety protocols while efficiently removing waste.</p>
              </div>
            </div>
          </div>

          {/* What We Can't Accept */}
          <ProhibitedWasteTypes />

          {/* Call to Action */}
          <div className="bg-primary-green text-pure-white p-8 md:p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Need Renovation Waste Removed?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Contact us today for a competitive quote on renovation waste removal services across Sydney.
            </p>
            <Link href="/quote" className="bg-pure-white text-primary-green font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300 inline-block">
              Get a Trade Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}