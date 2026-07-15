import React from 'react';
import { useRegion } from '../hooks/useRegion';

export default function RequestSamplesPage() {
  const region = useRegion();

  return (
    <section className="py-20 bg-neutral-bg/30 text-slate min-h-[calc(100vh-200px)]" style={{ '--theme-color': region.theme.primaryBg }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate">Request Samples</h2>
          <p className="opacity-80 text-lg">Experience our facility-grade quality firsthand. Fill out the form below to request a customized sample pack for your facility.</p>
        </div>
        
        <div className="bg-white text-slate p-8 md:p-10 rounded-2xl shadow-2xl border border-slate/10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="facility-sample" className="block text-sm font-bold uppercase tracking-wider opacity-80 mb-2">Facility Name</label>
              <input type="text" id="facility-sample" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] transition-shadow text-slate" placeholder="e.g. Oceanview Hotel" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-bold uppercase tracking-wider opacity-80 mb-2">Contact Name</label>
                <input type="text" id="contact-name" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] transition-shadow text-slate" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wider opacity-80 mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] transition-shadow text-slate" placeholder={region.phone} />
              </div>
            </div>
            
            <div>
              <label htmlFor="shipping" className="block text-sm font-bold uppercase tracking-wider opacity-80 mb-2">Shipping Address</label>
              <textarea id="shipping" rows="3" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] transition-shadow resize-none text-slate" placeholder="Enter full facility address..."></textarea>
            </div>
            
            <div>
              <label htmlFor="interest" className="block text-sm font-bold uppercase tracking-wider opacity-80 mb-2">Products of Interest</label>
              <select id="interest" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] transition-shadow text-slate">
                <option value="">Select category...</option>
                <option value="sheets">Sheets & Bedding</option>
                <option value="towels">Towels & Bath</option>
                <option value="uniforms">Uniforms & Scrubs</option>
                <option value="multiple">Multiple Categories</option>
              </select>
            </div>
            
            <button type="submit" className="w-full text-white font-bold py-4 rounded-md text-lg hover:opacity-90 transition-opacity duration-300 shadow-md" style={{ backgroundColor: region.theme.primaryBg }}>
              Submit Sample Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
