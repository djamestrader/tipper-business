import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Thompson',
      rating: 5,
      date: 'June 15, 2023',
      text: 'Absolute legends! The team showed up right on time and made the whole rubbish removal job a breeze. Fair dinkum service, highly recommend!',
      location: 'Bondi Beach'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      date: 'June 12, 2023',
      text: 'Hired their tipper trailer for my reno project. Top-notch gear, dead easy to work with, and great value for money. Couldn\'t be happier!',
      location: 'Chatswood'
    },
    {
      name: 'Emma Wilson',
      rating: 5,
      date: 'June 10, 2023',
      text: 'These guys are ace! Cleared out my whole backyard quick smart. No mucking around, just got the job done. Will definitely use them again!',
      location: 'Parramatta'
    },
    {
      name: 'David Kumar',
      rating: 5,
      date: 'June 8, 2023',
      text: 'Really impressed with these guys. Proper professional outfit and spot on with the details. Perfect tipper trailer for my landscaping job. Beauty!',
      location: 'North Sydney'
    }
  ];

  return (
    <section className="py-16 bg-primary-green">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Hear it straight from our happy customers - real feedback from real Aussies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-pure-white rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-eucalyptus-light/20 transition-all duration-300">
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
              <p className="text-charcoal/80 mb-4">{testimonial.text}</p>
              <div className="flex justify-between items-center text-sm text-charcoal/70">
                <span className="font-medium">{testimonial.name}</span>
                <span>{testimonial.location}</span>
              </div>
              <div className="text-sm text-charcoal/60 mt-2">{testimonial.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}