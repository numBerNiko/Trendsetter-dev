import React from 'react';

export default function RequestSamplesPage() {
  return (
    <section className="py-20 bg-walnut text-warm-linen min-h-[calc(100vh-200px)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Samples</h2>
          <p className="opacity-80 text-lg">Experience our facility-grade quality firsthand. Fill out the form below to request a customized sample pack for your facility.</p>
        </div>
        
        <div className="bg-warm-linen text-walnut p-8 md:p-10 rounded-xl shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="facility-sample" className="block text-sm font-medium mb-2">Facility Name</label>
              <input type="text" id="facility-sample" className="w-full px-4 py-3 bg-white border border-walnut/20 rounded-md focus:outline-none focus:ring-2 focus:ring-muted-sage transition-shadow" placeholder="e.g. Oceanview Hotel" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Contact Name</label>
                <input type="text" id="contact-name" className="w-full px-4 py-3 bg-white border border-walnut/20 rounded-md focus:outline-none focus:ring-2 focus:ring-muted-sage transition-shadow" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 bg-white border border-walnut/20 rounded-md focus:outline-none focus:ring-2 focus:ring-muted-sage transition-shadow" placeholder="(555) 123-4567" />
              </div>
            </div>
            
            <div>
              <label htmlFor="shipping" className="block text-sm font-medium mb-2">Shipping Address</label>
              <textarea id="shipping" rows="3" className="w-full px-4 py-3 bg-white border border-walnut/20 rounded-md focus:outline-none focus:ring-2 focus:ring-muted-sage transition-shadow resize-none" placeholder="Enter full facility address..."></textarea>
            </div>
            
            <div>
              <label htmlFor="interest" className="block text-sm font-medium mb-2">Products of Interest</label>
              <select id="interest" className="w-full px-4 py-3 bg-white border border-walnut/20 rounded-md focus:outline-none focus:ring-2 focus:ring-muted-sage transition-shadow">
                <option value="">Select category...</option>
                <option value="sheets">Sheets & Bedding</option>
                <option value="towels">Towels & Bath</option>
                <option value="uniforms">Uniforms & Scrubs</option>
                <option value="multiple">Multiple Categories</option>
              </select>
            </div>
            
            <button type="submit" className="w-full bg-muted-sage text-walnut font-bold py-4 rounded-md text-lg hover:bg-walnut hover:text-warm-linen transition-colors duration-300">
              Submit Sample Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
