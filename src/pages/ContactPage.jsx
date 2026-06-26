import React from 'react';

export default function ContactPage() {
  return (
    <section className="py-20 bg-walnut/5 min-h-[calc(100vh-200px)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-walnut/10">
          <h2 className="text-3xl font-bold mb-8 text-center">Request Information</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="facility" className="block text-sm font-medium mb-2">Facility Name</label>
              <input type="text" id="facility" className="w-full px-4 py-3 bg-warm-linen/50 border border-walnut/20 rounded-md focus:outline-none focus:ring-2 focus:ring-muted-sage focus:border-transparent transition-shadow" placeholder="e.g. Sunrise Medical Center" />
            </div>
            
            <div>
              <label htmlFor="sector" className="block text-sm font-medium mb-2">Sector Selection</label>
              <select id="sector" className="w-full px-4 py-3 bg-warm-linen/50 border border-walnut/20 rounded-md focus:outline-none focus:ring-2 focus:ring-muted-sage focus:border-transparent transition-shadow">
                <option value="">Select your industry...</option>
                <option value="nursing">Nursing Homes</option>
                <option value="medical">Medical Clinics</option>
                <option value="hotels">Hotels</option>
                <option value="other">Other Institutional</option>
              </select>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Corporate Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 bg-warm-linen/50 border border-walnut/20 rounded-md focus:outline-none focus:ring-2 focus:ring-muted-sage focus:border-transparent transition-shadow" placeholder="contact@facility.com" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message / Requirements</label>
              <textarea id="message" rows="5" className="w-full px-4 py-3 bg-warm-linen/50 border border-walnut/20 rounded-md focus:outline-none focus:ring-2 focus:ring-muted-sage focus:border-transparent transition-shadow resize-none" placeholder="Please describe your volume needs and specific textile requirements..."></textarea>
            </div>
            
            <button type="submit" className="w-full bg-walnut text-warm-linen font-medium py-4 rounded-md text-lg hover:bg-muted-sage hover:text-walnut transition-colors duration-300">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
