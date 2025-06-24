'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CallToAction from '@/components/CallToAction';

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-darkBackground py-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/types-of-waste/hero-waste-1.jpeg" 
            alt="Pricing Hero Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Fair Dinkum Pricing</h1>
            <p className="text-xl text-white mb-8">Transparent pricing for all your waste removal needs</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pricing/household-office-green" className="btn-primary py-3 px-6 rounded-full text-white font-medium bg-primaryBrand hover:bg-hover transition-colors duration-300">
                Household, Office & Green Waste
              </Link>
              <Link href="/pricing/trade-construction" className="btn-secondary py-3 px-6 rounded-full text-white font-medium bg-secondaryBrand hover:bg-hover transition-colors duration-300">
                Trade & Construction Waste
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview Section */}
      <section className="py-16 bg-neutralBackground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pricing Structure</h2>
            <p className="text-lg max-w-3xl mx-auto">We offer transparent pricing based on the volume of waste. No hidden fees, just honest pricing for quality service.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Household, Office & Green Waste Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-64">
                <Image 
                  src="/types-of-waste/household-junk.jpg" 
                  alt="Household Waste"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Household, Office & Green Waste</h3>
                <p className="mb-4">Perfect for home cleanouts, office clearances, and garden waste removal.</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-primaryBrand mr-2">✓</span> Furniture & Appliances
                  </li>
                  <li className="flex items-center">
                    <span className="text-primaryBrand mr-2">✓</span> Office Equipment
                  </li>
                  <li className="flex items-center">
                    <span className="text-primaryBrand mr-2">✓</span> Garden & Green Waste
                  </li>
                </ul>
                <Link href="/pricing/household-office-green" className="block text-center py-3 px-6 rounded-full text-white font-medium bg-primaryBrand hover:bg-hover transition-colors duration-300">
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Trade & Construction Waste Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-64">
                <Image 
                  src="/types-of-waste/trade-building-renovation-waste.jpg" 
                  alt="Construction Waste"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Trade & Construction Waste</h3>
                <p className="mb-4">Specialized removal for building, renovation, and demolition projects.</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-secondaryBrand mr-2">✓</span> Building Materials
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondaryBrand mr-2">✓</span> Renovation Debris
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondaryBrand mr-2">✓</span> Masonry & Concrete
                  </li>
                </ul>
                <Link href="/pricing/trade-construction" className="block text-center py-3 px-6 rounded-full text-white font-medium bg-secondaryBrand hover:bg-hover transition-colors duration-300">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Everything You Need to Know About Our Pricing</h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">Detailed Breakdown of Additional Charges</h3>
              <p className="mb-4">When it comes to managing your waste disposal, understanding the details is crucial. Our comprehensive guide clarifies the additional charges that may apply to certain items, ensuring you make the most informed decisions for your project.</p>
              
              <div className="bg-neutralBackground p-6 rounded-lg mt-6">
                <h4 className="font-bold mb-2">Individually Charged Items</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primaryBrand font-bold mr-2">•</span>
                    <div>
                      <span className="font-medium">Mattresses $110:</span> A charge of $110 applies for any size mattress (cot, single, double, queen, king), reflecting the extra steps required for their environmentally friendly disposal.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primaryBrand font-bold mr-2">•</span>
                    <div>
                      <span className="font-medium">Tyres $77:</span> Standard car and truck tyres are subject to a $77 fee, to cover the costs associated with processing.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primaryBrand font-bold mr-2">•</span>
                    <div>
                      <span className="font-medium">Other Items $33:</span> For specific items like paint tins, gas bottles, and extinguishers, a fee of $33 is added to manage their safe and compliant disposal.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">Overloaded Weight Charge</h3>
              <p className="mb-4">When using our services, keep in mind that the price includes disposal of up to 1000 kilograms of waste. Should your load exceed this limit, an Overload Weight Fee applies:</p>
              
              <div className="bg-neutralBackground p-6 rounded-lg mt-6">
                <p className="font-bold">Fee $33 Per 100 Kilograms:</p>
                <p>$33 for every additional 100 kilograms, or $330 per ton beyond the included weight.</p>
                
                <div className="mt-4">
                  <p className="font-bold">Example for Clarity:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>You choose a 4m³ volume of waste for household junk, priced at $550.</li>
                    <li>Your total disposed waste weighs 1200 kilograms, which is 200 kilograms over the included limit.</li>
                    <li>The first 1000 kilograms are covered by your initial payment.</li>
                    <li>The extra 200 kilograms will incur a fee of $66 ($33 per 100 kilograms).</li>
                    <li>Your total cost will be $616 for disposing of 1200 kilograms of waste.</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">Please remember, the maximum weight limit for any of our waste removal services is 1500 kilograms to ensure safe and compliant transport.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">Unacceptable Waste and Items</h3>
              <p className="mb-4">For a smooth and safe waste removal experience, it's important to know what types of waste you can and cannot place in our trucks. Some items require special handling and might not be accepted due to their nature.</p>
              
              <div className="bg-neutralBackground p-6 rounded-lg mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">✕</span>
                    <div>
                      <span className="font-medium">Liquid Waste:</span> This category includes paints, oils, fuels, chemicals (such as cleaning products), and all food and beverage types, along with bathroom, kitchen, and laundry products.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">✕</span>
                    <div>
                      <span className="font-medium">Flammable Liquids:</span> Including fuel, diesel, petrol, and oil, these substances pose a significant risk and are not permitted.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">✕</span>
                    <div>
                      <span className="font-medium">Asbestos:</span> If asbestos is found, reload fees will be applied, and the waste will be returned to you.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">✕</span>
                    <div>
                      <span className="font-medium">Food Waste:</span> We do not accept any food and beverages, whether new, unopened, or discarded, including animal parts or wholes.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">✕</span>
                    <div>
                      <span className="font-medium">Dangerous Items:</span> Fire extinguishers, gas bottles, compressed gas canisters, all types of batteries, and fuel containers are considered dangerous and cannot be accepted.
                    </div>
                  </li>
                </ul>
              </div>
              <p className="mt-4">For specific disposal requirements or to discuss potential additional fees for certain items, please contact us directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutralBackground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">How do I choose the right waste volume?</h3>
                <p>Consider the volume and type of waste you need to dispose of. Smaller volumes are great for small projects, while larger volumes suit major clean-outs and clearing deceased estates.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">What impacts the price of waste removal?</h3>
                <p>Factors include the volume of waste, the type of waste being disposed of, and any additional services required. Always check for additional fees for heavy or special waste.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Can I put anything in the truck?</h3>
                <p>No, there are restrictions on what can be placed in our trucks. Generally, hazardous materials, chemicals, asbestos, batteries, and food waste are not allowed. We have provided a list of prohibited items above.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">How do I know what volume of waste I need?</h3>
                <p>Estimate the amount of waste you plan to dispose of in cubic metres. We can often offer advice based on the type of project you're undertaking, such as a home clean-up or decluttering or garden clean-up. When in doubt, it's better to opt for a slightly larger size to avoid needing additional trips.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}