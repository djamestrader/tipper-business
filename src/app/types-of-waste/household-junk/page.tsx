import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HouseholdWasteTypes from '@/components/HouseholdWasteTypes';
import ProhibitedWasteTypes from '@/components/ProhibitedWasteTypes';

export default function HouseholdJunkPage() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-charcoal">
        <Image
          src="/types-of-waste/household-junk.jpg"
          alt="Household Junk Removal Services"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">Household Junk Removal</h1>
            <p className="text-xl text-pure-white max-w-2xl mx-auto">
              Fast, reliable removal of unwanted household items across Sydney
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container-custom">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Declutter Your Home with Our Household Junk Removal Services</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-charcoal mb-4">
                  Whether you're spring cleaning, moving house, or simply need to reclaim some space, our household junk removal service makes getting rid of unwanted items quick and hassle-free.
                </p>
                <p className="text-lg text-charcoal mb-4">
                  Our experienced team will efficiently remove and responsibly dispose of a wide range of household items, from old furniture and appliances to electronics and general clutter.
                </p>
                <p className="text-lg text-charcoal">
                  We pride ourselves on providing a clean, efficient service with minimal disruption to your home and family.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/types-of-waste/household-junk.jpg"
                  alt="Household Junk Removal in Action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* What We Take */}
          <div className="mb-16 bg-pure-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-charcoal mb-6">What Household Items We Take</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Furniture</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Sofas and couches</li>
                  <li>Beds and mattresses</li>
                  <li>Tables and chairs</li>
                  <li>Wardrobes and cabinets</li>
                  <li>Bookshelves</li>
                  <li>Outdoor furniture</li>
                </ul>
              </div>
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">Appliances</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Refrigerators and freezers</li>
                  <li>Washing machines and dryers</li>
                  <li>Dishwashers</li>
                  <li>Ovens and microwaves</li>
                  <li>Air conditioners</li>
                  <li>Small kitchen appliances</li>
                </ul>
              </div>
              <div className="bg-off-white p-6 rounded-md">
                <h3 className="text-xl font-bold text-charcoal mb-3">General Items</h3>
                <ul className="list-disc pl-5 text-charcoal space-y-2">
                  <li>Electronics and computers</li>
                  <li>Toys and children's items</li>
                  <li>Books and media</li>
                  <li>Clothing and textiles</li>
                  <li>Exercise equipment</li>
                  <li>General household clutter</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Our Household Junk Removal Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-pure-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center text-pure-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Book</h3>
                <p className="text-charcoal">Schedule a pickup online or by phone at a time that suits you</p>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center text-pure-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Quote</h3>
                <p className="text-charcoal">Receive an upfront, no-obligation quote based on the volume of items</p>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center text-pure-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Remove</h3>
                <p className="text-charcoal">Our team will efficiently remove all items from your property</p>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center text-pure-white text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Recycle</h3>
                <p className="text-charcoal">We responsibly dispose of items, recycling whenever possible</p>
              </div>
            </div>
          </div>

          {/* What We Accept */}
          <HouseholdWasteTypes />

          {/* Benefits */}
          <div className="mb-16 bg-charcoal text-pure-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Benefits of Our Household Junk Removal Service</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Save Time and Effort</h3>
                <p className="mb-6">No need to rent a truck, make multiple trips to the dump, or strain your back lifting heavy items. We handle everything from removal to disposal.</p>
                
                <h3 className="text-xl font-bold mb-3">Environmentally Responsible</h3>
                <p>We prioritize recycling and donation of suitable items, minimizing landfill waste and giving your unwanted items a second life when possible.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Professional and Reliable</h3>
                <p className="mb-6">Our uniformed, experienced team arrives on time and works efficiently to remove your items with minimal disruption to your day.</p>
                
                <h3 className="text-xl font-bold mb-3">Complete Cleanup</h3>
                <p>We leave your space clean and tidy after removal, so you can immediately enjoy your decluttered home.</p>
              </div>
            </div>
          </div>

          {/* What We Can't Accept */}
          <ProhibitedWasteTypes />

          {/* Call to Action */}
          <div className="bg-primary-green text-pure-white p-8 md:p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Declutter Your Home?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Contact us today for a free, no-obligation quote on household junk removal across Sydney.
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