import React from 'react';

export default function QuotePage() {
  return (
    <div className="bg-off-white py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto bg-pure-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-charcoal mb-6 text-center">Get a Free Quote</h1>
          <p className="text-charcoal mb-8 text-center">
            Fill out the form below and we'll get back to you with a competitive quote for your rubbish removal needs.
          </p>
          
          <form className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-charcoal">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-1">First Name*</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-1">Last Name*</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email Address*</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">Phone Number*</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-charcoal">Service Details</h2>
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-charcoal mb-1">Service Type*</label>
                <select 
                  id="serviceType" 
                  name="serviceType" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="residential">Residential Rubbish Removal</option>
                  <option value="commercial">Commercial Rubbish Removal</option>
                  <option value="construction">Construction Rubbish Removal</option>
                  <option value="cleanups">Clean Ups</option>
                </select>
              </div>
              <div>
                <label htmlFor="wasteType" className="block text-sm font-medium text-charcoal mb-1">Waste Type*</label>
                <select 
                  id="wasteType" 
                  name="wasteType" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                  required
                >
                  <option value="">Select Waste Type</option>
                  <option value="general">General Waste</option>
                  <option value="green">Green Waste</option>
                  <option value="furniture">Furniture</option>
                  <option value="electronic">Electronic Waste</option>
                  <option value="construction">Construction Debris</option>
                  <option value="mixed">Mixed Waste</option>
                </select>
              </div>
              <div>
                <label htmlFor="volume" className="block text-sm font-medium text-charcoal mb-1">Estimated Volume*</label>
                <select 
                  id="volume" 
                  name="volume" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                  required
                >
                  <option value="">Select Volume</option>
                  <option value="small">Small (up to 2m³)</option>
                  <option value="medium">Medium (2-5m³)</option>
                  <option value="large">Large (5-10m³)</option>
                  <option value="xlarge">Extra Large (10+ m³)</option>
                </select>
              </div>
            </div>

            {/* Location & Scheduling */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-charcoal">Location & Scheduling</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="suburb" className="block text-sm font-medium text-charcoal mb-1">Suburb*</label>
                  <input 
                    type="text" 
                    id="suburb" 
                    name="suburb" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-charcoal mb-1">Postcode*</label>
                  <input 
                    type="text" 
                    id="postcode" 
                    name="postcode" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-charcoal mb-1">Full Address*</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-1">Preferred Date*</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-charcoal mb-1">Preferred Time</label>
                  <select 
                    id="time" 
                    name="time" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                  >
                    <option value="">Select Time (Optional)</option>
                    <option value="morning">Morning (7AM - 11AM)</option>
                    <option value="afternoon">Afternoon (11AM - 3PM)</option>
                    <option value="evening">Evening (3PM - 6PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-charcoal">Additional Information</h2>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Special Instructions or Comments</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-primary-green text-pure-white py-3 px-6 rounded-md font-medium hover:bg-eucalyptus-deep transition-colors duration-300"
              >
                Submit Quote Request
              </button>
              <p className="text-sm text-gray-500 mt-4 text-center">
                By submitting this form, you agree to our <a href="/privacy" className="text-primary-green hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}