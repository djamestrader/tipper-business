import React from 'react';
import ServiceAreas from '../../components/ServiceAreas';
import ServiceAreasContent from '../../components/ServiceAreasContent';
import CallToAction from '../../components/CallToAction';

export const metadata = {
  title: 'Areas We Service | Fair Dinkum Rubbish Removal',
  description: 'We provide same-day rubbish removal services across the entire Sydney region including Inner West, Eastern Suburbs, North Shore, and more.',
};

export default function AreasWeServicePage() {
  return (
    <>
      <div className="pt-32 bg-neutralBackground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-4">Areas We Service</h1>
          <p className="text-lg text-textLight mb-8">Professional rubbish removal across all Sydney regions</p>
        </div>
      </div>
      <ServiceAreas />
      <ServiceAreasContent />
      <CallToAction />
    </>
  );
}