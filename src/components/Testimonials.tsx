'use client';

import React, { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Thompson',
      rating: 5,
      date: 'June 15, 2023',
      text: 'Absolute legends! The team showed up right on time and made the whole rubbish removal job a breeze. Fair Dinkum Rubbish Removal is top-notch, highly recommend!',
      location: 'Bondi Beach'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      date: 'June 12, 2023',
      text: 'Hired their tipper trailer for my reno project. Top-notch gear, dead easy to work with, and great value for money. Fair Dinkum Rubbish Removal made it so simple. Couldn\'t be happier!',
      location: 'Chatswood'
    },
    {
      name: 'Emma Wilson',
      rating: 5,
      date: 'June 10, 2023',
      text: 'The Fair Dinkum Rubbish Removal team is ace! Cleared out my whole backyard quick smart. No mucking around, just got the job done. Will definitely use them again!',
      location: 'Parramatta'
    },
    {
      name: 'David Kumar',
      rating: 5,
      date: 'June 8, 2023',
      text: 'Really impressed with Fair Dinkum Rubbish Removal. Proper professional outfit and spot on with the details. Perfect tipper trailer for my landscaping job. Beauty!',
      location: 'North Sydney'
    },
    {
      name: 'Jessica Lee',
      rating: 5,
      date: 'June 5, 2023',
      text: 'Prompt, friendly, and left the place spotless. Highly recommend Fair Dinkum Rubbish Removal!',
      location: 'Surry Hills'
    },
    {
      name: 'Tom Williams',
      rating: 5,
      date: 'June 2, 2023',
      text: 'Great value and super easy process. The team was very professional.',
      location: 'Manly'
    },
    {
      name: 'Priya Patel',
      rating: 5,
      date: 'May 30, 2023',
      text: 'The best rubbish removal service I\'ve used. Will book again!',
      location: 'Strathfield'
    },
    {
      name: 'Liam O\'Connor',
      rating: 5,
      date: 'May 28, 2023',
      text: 'Quick, reliable, and affordable. Thanks for the help!',
      location: 'Newtown'
    }
  ];
  const [visible, setVisible] = useState(4);
  const handleLoadMore = () => setVisible((v) => Math.min(v + 4, testimonials.length));

  return (
    <section className="py-16 bg-primaryBrand">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-header text-white">
            <h2 className="section-title text-white">What Our Customers Say</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Hear it straight from our happy customers - real feedback from real Aussies
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(0, visible).map((testimonial, index) => (
            <div key={index} className="bg-cardBackground rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-secondaryAccent/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-textLight mb-4">{testimonial.text}</p>
              <div className="flex justify-between items-center text-sm text-textMedium">
                <span className="font-medium">{testimonial.name}</span>
                <span>{testimonial.location}</span>
              </div>
              <div className="text-sm text-gray-500 mt-2">{testimonial.date}</div>
            </div>
          ))}
        </div>
        {visible < testimonials.length && (
          <div className="text-center mt-8">
            <button className="btn-primary px-8 py-3 rounded-md font-medium" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}