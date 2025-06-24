'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CallToAction from '@/components/CallToAction';
import PricingTable from '@/components/PricingTable';
import VolumeSizeGuide from '@/components/VolumeSizeGuide';

export default function TradeConstructionPricingPage() {
  // Pricing data for trade and construction waste
  const pricingData = [
    { size: '2 m³', price: '$385', costPerM3: '$192 per m³', equivalent: '10 to 12 x 240-litre wheelie bins', 
      dimensions: 'Length 2.4 m – Width 1.5 m – Height 0.5 m',
      spaceNeeded: 'Length 4.0 m – Width 2.0 m – Height 1.0 m',
      bestFor: 'Small renovation projects, minor demolition debris' },
    { size: '3 m³', price: '$489', costPerM3: '$163 per m³', equivalent: '15 to 18 x 240-litre wheelie bins',
      dimensions: 'Length 2.4 m – Width 1.5 m – Height 0.8 m',
      spaceNeeded: 'Length 4.0 m – Width 2.0 m – Height 1.3 m',
      bestFor: 'Bathroom renovations, small construction projects' },
    { size: '4 m³', price: '$579', costPerM3: '$144 per m³', equivalent: '18 to 22 x 240-litre wheelie bins',
      dimensions: 'Length 2.4 m – Width 1.5 m – Height 1.2 m',
      spaceNeeded: 'Length 4.0 m – Width 2.0 m – Height 1.7 m',
      bestFor: 'Kitchen renovations, medium construction projects' },
    { size: '5 m³', price: '$669', costPerM3: '$133 per m³', equivalent: '25 to 30 x 240-litre wheelie bins',
      dimensions: 'Length 3.0 m – Width 1.5 m – Height 1.1 m',
      spaceNeeded: 'Length 4.7 m – Width 2.0 m – Height 1.6 m',
      bestFor: 'Large renovation projects, substantial demolition waste' },
    { size: '6 m³', price: '$759', costPerM3: '$126 per m³', equivalent: '30 to 35 x 240-litre wheelie bins',
      dimensions: 'Length 3.0 m – Width 1.5 m – Height 1.35 m',
      spaceNeeded: 'Length 4.7 m – Width 2.0 m – Height 1.8 m',
      bestFor: 'Major construction projects, complete home renovations' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-darkBackground py-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/types-of-waste/trade-building-renovation-waste.jpg" 
            alt="Trade and Construction Waste Pricing"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Trade & Construction Waste Pricing</h1>
            <p className="text-xl text-white mb-8">Professional solutions for all your construction and demolition waste removal needs</p>
            <Link href="#pricing-table" className="btn-primary py-3 px-6 rounded-full text-white font-medium bg-secondaryBrand hover:bg-hover transition-colors duration-300">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Waste Types Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Take</h2>
            <p className="text-lg max-w-3xl mx-auto">Our trade and construction waste removal services cover a wide range of materials.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Renovation Waste */}
            <div className="bg-neutralBackground rounded-lg p-6 shadow-sm">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/types-of-waste/trade-building-renovation-waste.jpg" 
                  alt="Renovation Waste"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Renovation Waste</h3>
              <p className="mb-4">Waste generated during home or building renovation projects.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondaryBrand mr-2">✓</span> Plasterboard & Drywall
                </li>
                <li className="flex items-center">
                  <span className="text-secondaryBrand mr-2">✓</span> Timber & Wood
                </li>
                <li className="flex items-center">
                  <span className="text-secondaryBrand mr-2">✓</span> Flooring Materials
                </li>
                <li className="flex items-center">
                  <span className="text-secondaryBrand mr-2">✓</span> Fixtures & Fittings
                </li>
              </ul>
              <Link href="/types-of-waste/renovation-waste" className="inline-block mt-4 text-secondaryBrand hover:text-hover transition-colors duration-300">
                Learn More →
              </Link>
            </div>

            {/* Masonry & Concrete Waste */}
            <div className="bg-neutralBackground rounded-lg p-6 shadow-sm">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/types-of-waste/masonry-brick-concrete-waste.jpg" 
                  alt="Masonry & Concrete Waste"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Masonry & Concrete Waste</h3>
              <p className="mb-4">Heavy construction materials from building and demolition projects.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondaryBrand mr-2">✓</span> Bricks & Blocks
                </li>
                <li className="flex items-center">
                  <span className="text-secondaryBrand mr-2">✓</span> Concrete & Cement
                </li>
                <li className="flex items-center">
                  <span className="text-secondaryBrand mr-2">✓</span> Tiles & Ceramics
                </li>
                <li className="flex items-center">
                  <span className="text-secondaryBrand mr-2">✓</span> Stone & Gravel
                </li>
              </ul>
              <Link href="/types-of-waste/masonry-waste" className="inline-block mt-4 text-secondaryBrand hover:text-hover transition-colors duration-300">
                Learn More →
              </Link>
            </div>

            {/* Demolition Waste */}
            <div className="bg-neutralBackground rounded-lg p-6 shadow-sm">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/types-of-waste/demolition-waste.jpg" 
                  alt="Demolition Waste"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Demolition Waste</h3>
              <p className="mb-4">Waste materials from demolition and deconstruction projects.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondaryBrand mr-2">✓</span> Mixed Demolition Debris
                </li>
                <li className="flex items-center">
                  <span className="text-secondaryBrand mr-2">✓</span> Structural Materials
                </li>
                <li className="flex items-center">
                  <span className="text-secondaryBrand mr-2">✓</span> Metal & Wiring
                </li>
                <li className="flex items-center">
                  <span className="text-secondaryBrand mr-2">✓</span> Building Components
                </li>
              </ul>
              <Link href="/types-of-waste/demolition-waste" className="inline-block mt-4 text-secondaryBrand hover:text-hover transition-colors duration-300">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section id="pricing-table" className="py-16 bg-neutralBackground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pricing</h2>
            <p className="text-lg max-w-3xl mx-auto">Transparent pricing based on the volume of waste. Select the option that best suits your construction needs.</p>
          </div>

          {/* Using the PricingTable component */}
          <PricingTable pricingData={pricingData} colorTheme="secondary" />
        </div>
      </section>

      {/* Volume Size Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Volume Size Guide</h2>
            <p className="text-lg max-w-3xl mx-auto">Not sure which volume size to choose? Use our guide to help you decide.</p>
          </div>

          {/* Using the VolumeSizeGuide component */}
          <VolumeSizeGuide pricingData={pricingData} colorTheme="secondary" imageBaseIndex={7} />
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-neutralBackground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Additional Information</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4">Heavy Material Considerations</h3>
              <p className="mb-4">Construction and demolition waste often includes heavy materials like concrete, bricks, and masonry. Please note:</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondaryBrand font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Weight Limits:</span> Our pricing includes disposal of up to 1000 kilograms of waste. An additional fee of $33 per 100 kilograms applies for waste exceeding this limit.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondaryBrand font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Maximum Weight:</span> The maximum weight limit for any of our waste removal services is 1500 kilograms to ensure safe and compliant transport.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondaryBrand font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Mixed Loads:</span> For mixed loads containing both heavy and light materials, we recommend distributing the weight evenly.
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Prohibited Materials</h3>
              <p className="mb-4">For safety and environmental reasons, we cannot accept the following materials:</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✕</span>
                  <div>
                    <span className="font-medium">Asbestos:</span> If asbestos is found, reload fees will be applied, and the waste will be returned to you.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✕</span>
                  <div>
                    <span className="font-medium">Hazardous Materials:</span> Including chemicals, paints, oils, and other toxic substances.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✕</span>
                  <div>
                    <span className="font-medium">Liquid Waste:</span> Any form of liquid waste is not accepted.
                  </div>
                </li>
              </ul>
              <p className="mt-4">For specific disposal requirements or to discuss potential additional fees for certain items, please contact us directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  );
}