import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FAQPage() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-charcoal">
        <Image
          src="/images/faq-hero.jpg"
          alt="Frequently Asked Questions"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-pure-white max-w-2xl mx-auto">
              Find answers to common questions about our rubbish removal services
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* General Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-8 pb-4 border-b-2 border-primary-green">General Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">What is Fair Dinkum Rubbish Removal?</h3>
                  <p className="text-charcoal">
                    Fair Dinkum Rubbish Removal is a professional rubbish removal company based in Sydney. We offer two main services: Self-Load Tipper Trailer Rental and Full-Service Hands-On Rubbish Removal. Our mission is to provide efficient, reliable, and environmentally responsible waste removal solutions for residential and commercial clients.
                  </p>
                </div>

                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">What areas do you service?</h3>
                  <p className="text-charcoal">
                    We service the entire Sydney metropolitan area, including the Eastern Suburbs, Inner West, North Shore, and Western Sydney. If you're unsure whether we service your location, please contact us, and we'll be happy to assist you.
                  </p>
                </div>

                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">How do I request a quote?</h3>
                  <p className="text-charcoal">
                    You can request a quote in several ways:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-charcoal">
                    <li>Use our online quote form on our website</li>
                    <li>Call us directly at (02) 1234 5678</li>
                    <li>Send us an email at info@fairdinkumrubbish.com.au</li>
                  </ul>
                  <p className="text-charcoal mt-2">
                    We aim to respond to all quote requests within 24 hours.
                  </p>
                </div>

                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">Do you offer same-day service?</h3>
                  <p className="text-charcoal">
                    Yes, we offer same-day service subject to availability. For the best chance of securing a same-day booking, we recommend contacting us as early as possible. Priority is given to existing bookings, but we always do our best to accommodate urgent requests.
                  </p>
                </div>

                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">What types of payment do you accept?</h3>
                  <p className="text-charcoal">
                    We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), bank transfers, and cash. Payment is typically required upon completion of the service, though for larger jobs, we may request a deposit in advance.
                  </p>
                </div>
              </div>
            </div>

            {/* Service-Specific Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-8 pb-4 border-b-2 border-primary-green">Service-Specific Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">What's the difference between your two services?</h3>
                  <p className="text-charcoal mb-3">
                    We offer two distinct services to meet different needs:
                  </p>
                  <ul className="space-y-3 text-charcoal">
                    <li>
                      <span className="font-semibold">Self-Load Tipper Trailer Rental:</span> We deliver a tipper trailer to your location, you load it at your own pace, and then we collect it and dispose of the waste. This is ideal for those who prefer to work at their own pace or have budget constraints.
                    </li>
                    <li>
                      <span className="font-semibold">Full-Service Hands-On Rubbish Removal:</span> Our team comes to your location, handles all the heavy lifting, and removes your unwanted items quickly and efficiently. This comprehensive service is perfect for those who prefer a hands-off approach or have items that are difficult to move.
                    </li>
                  </ul>
                </div>

                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">What types of rubbish do you remove?</h3>
                  <p className="text-charcoal mb-3">
                    We remove a wide variety of waste types, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-charcoal">
                    <li>Household junk and general waste</li>
                    <li>Furniture and appliances</li>
                    <li>Garden and green waste</li>
                    <li>Construction and demolition debris</li>
                    <li>Office and commercial waste</li>
                    <li>Electronic waste (e-waste)</li>
                    <li>White goods</li>
                  </ul>
                  <p className="text-charcoal mt-3">
                    There are some items we cannot accept due to environmental and safety regulations, such as hazardous materials, asbestos, and certain chemicals. If you're unsure whether we can remove a particular item, please contact us.
                  </p>
                </div>

                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">How much does your service cost?</h3>
                  <p className="text-charcoal">
                    Our pricing is based on the volume and type of waste to be removed, as well as your location. We offer transparent pricing with no hidden fees. Small loads typically start from $150, medium loads from $300, and large loads from $500. For an accurate quote tailored to your specific needs, please use our online quote form or contact us directly.
                  </p>
                </div>

                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">How long does the rubbish removal process take?</h3>
                  <p className="text-charcoal">
                    The duration depends on the volume and type of waste, as well as access to the site. For our Full-Service Hands-On Rubbish Removal, small jobs typically take 1-2 hours, while larger jobs may take several hours or even a full day. For our Self-Load Tipper Trailer Rental service, we usually allow customers to keep the trailer for 24-48 hours, giving you ample time to load at your own pace.
                  </p>
                </div>

                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">Do I need to be present during the rubbish removal?</h3>
                  <p className="text-charcoal">
                    For our Full-Service Hands-On Rubbish Removal, you or a representative should be present at the beginning to point out the items to be removed and at the end to inspect the work. For our Self-Load Tipper Trailer Rental service, you need to be present for delivery and collection of the trailer.
                  </p>
                </div>
              </div>
            </div>

            {/* Environmental Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-8 pb-4 border-b-2 border-primary-green">Environmental Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">How do you dispose of the waste you collect?</h3>
                  <p className="text-charcoal">
                    We are committed to environmentally responsible waste management. We sort all collected waste and ensure that recyclable materials are sent to appropriate recycling facilities. Non-recyclable waste is disposed of at licensed waste management centers in compliance with all environmental regulations.
                  </p>
                </div>

                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">Do you recycle the rubbish you collect?</h3>
                  <p className="text-charcoal">
                    Yes, we prioritize recycling whenever possible. We sort through the collected waste to separate recyclable materials such as paper, cardboard, plastics, metals, and green waste. These materials are then sent to appropriate recycling facilities. Our goal is to minimize the amount of waste that ends up in landfills.
                  </p>
                </div>

                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">What happens to items that are still in good condition?</h3>
                  <p className="text-charcoal">
                    We believe in giving items a second life whenever possible. If we collect items that are still in good condition, we try to donate them to local charities or second-hand stores. This not only helps those in need but also reduces waste and promotes sustainability.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking and Scheduling Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-8 pb-4 border-b-2 border-primary-green">Booking and Scheduling</h2>
              
              <div className="space-y-6">
                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">How far in advance should I book your services?</h3>
                  <p className="text-charcoal">
                    While we can often accommodate last-minute bookings, we recommend booking at least 2-3 days in advance to ensure availability, especially during busy periods. For larger jobs or specific time slots, booking a week in advance is advisable.
                  </p>
                </div>

                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">What happens if I need to reschedule or cancel my booking?</h3>
                  <p className="text-charcoal">
                    We understand that plans can change. If you need to reschedule or cancel your booking, please notify us at least 24 hours in advance. Late cancellations (less than 24 hours notice) may incur a cancellation fee. We'll always do our best to accommodate changes to your booking.
                  </p>
                </div>

                <div className="bg-pure-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-3">Do you offer weekend services?</h3>
                  <p className="text-charcoal">
                    Yes, we offer services on Saturdays from 8am to 5pm and Sundays from 9am to 3pm. Weekend services are popular, so we recommend booking in advance to secure your preferred time slot.
                  </p>
                </div>
              </div>
            </div>

            {/* Still Have Questions */}
            <div className="bg-primary-green p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold text-pure-white mb-4">Still Have Questions?</h2>
              <p className="text-pure-white mb-6">
                If you couldn't find the answer to your question, please don't hesitate to contact us. Our friendly team is ready to assist you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="bg-pure-white text-primary-green px-8 py-3 rounded-md font-medium hover:bg-off-white transition-colors duration-300">
                  Contact Us
                </Link>
                <a href="tel:0212345678" className="border-2 border-pure-white text-pure-white px-8 py-3 rounded-md font-medium hover:bg-eucalyptus-deep transition-colors duration-300">
                  Call (02) 1234 5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}