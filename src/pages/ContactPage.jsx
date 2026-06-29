import React from 'react';
import { Send, Phone, Mail, MapPin, CalendarDays } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="py-20 bg-neutral-bg text-slate min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Procurement</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Schedule an in-person product presentation, request physical samples, or submit an RFQ for your facility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-coral text-slate p-8 rounded-2xl shadow-lg border border-slate/10">
              <h3 className="text-2xl font-bold mb-6 text-deep-teal">Direct Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-deep-teal mt-1" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60">Phone</p>
                    <a href="tel:+639178884059" className="text-lg hover:text-deep-teal transition-colors">+63-917-888-4059</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-deep-teal mt-1" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60">Email</p>
                    <a href="mailto:customerservice@trendsettertextiles.com" className="text-lg hover:text-deep-teal transition-colors break-all">customerservice@trendsettertextiles.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-deep-teal mt-1" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60">Headquarters</p>
                    <p className="text-lg">Metro Manila, Philippines</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-deep-teal text-neutral-bg p-8 rounded-2xl shadow-lg">
              <CalendarDays size={32} className="mb-4 text-neutral-bg/80" />
              <h3 className="text-xl font-bold mb-2">Schedule a Presentation</h3>
              <p className="text-sm opacity-90 mb-6">
                Our account managers can bring physical swatch books and sample products directly to your facility for review.
              </p>
              <button className="w-full bg-neutral-bg text-deep-teal font-bold py-3 rounded hover:bg-slate hover:text-neutral-bg transition-colors">
                Book a Date
              </button>
            </div>
          </div>

          {/* Lead Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-slate/10">
              <h3 className="text-2xl font-bold mb-6">Inquiry Form</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Corporate Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal" placeholder="jane@facility.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Facility / Company Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal" placeholder="Hospital or Hotel Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Inquiry Type</label>
                    <select className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal">
                      <option>Request a Quote</option>
                      <option>Schedule Product Presentation</option>
                      <option>Request Physical Samples</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Message / Requirements</label>
                  <textarea rows="5" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal resize-none" placeholder="Please provide details about your institutional needs, estimated volumes, or presentation availability..."></textarea>
                </div>
                
                <button type="submit" className="w-full flex justify-center items-center gap-3 bg-deep-teal text-neutral-bg font-bold py-5 rounded-md text-lg hover:bg-slate transition-colors shadow-md">
                  <Send size={20} /> Submit Inquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
