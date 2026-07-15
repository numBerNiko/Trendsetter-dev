import React from 'react';
import { Send, Phone, Mail, MapPin, CalendarDays } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

export default function ContactPage() {
  const region = useRegion();
  return (
    <div className="bg-neutral-bg text-slate min-h-screen font-sans" style={{ '--theme-color': region.theme.primaryBg }}>
      <section className="relative py-20 md:py-32 text-neutral-bg border-b-8" style={{ borderBottomColor: region.theme.primaryBg, backgroundColor: region.theme.primaryBg }}>
        <img src="/Trendsetter-website-photos/procurement_consultation.png" alt="Procurement Consultation" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Connect With Trendsetter Textiles {region.countryCode === 'ph' ? 'Philippines' : 'USA'}</h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
            Schedule an in-person product presentation, request physical samples, or submit an RFQ for your facility.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div 
              className={`bg-coral p-8 rounded-2xl shadow-lg border border-slate/10 ${region.phone.includes('+63') ? 'text-neutral-800' : 'text-slate'}`}
            >
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 text-[var(--theme-color)]">DIRECT CONTACT</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={24} className="mt-1 text-[var(--theme-color)]" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60">Phone</p>
                    <a href={`tel:${region.phone.replace(/[^0-9+]/g, '')}`} className="text-lg transition-colors hover:text-[var(--theme-color)]">{region.phone}</a>
                    <p className="text-xs opacity-75 mt-1">{region.phoneLabel}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={24} className="mt-1 text-[var(--theme-color)]" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60">Email</p>
                    <a href="mailto:customerservice@trendsettertextiles.com" className="text-lg transition-colors break-all hover:text-[var(--theme-color)]">customerservice@trendsettertextiles.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={24} className="mt-1 text-[var(--theme-color)]" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60">Headquarters</p>
                    <p className="text-lg">{region.countryCode === 'ph' ? 'Metro Manila, Philippines' : 'Los Angeles, CA, USA'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="p-8 rounded-2xl shadow-lg bg-[var(--theme-color)] text-neutral-bg"
            >
              <CalendarDays size={32} className="mb-4 text-neutral-bg/80" />
              <h3 className="text-xl font-bold uppercase tracking-wider mb-2">SCHEDULE A PRESENTATION</h3>
              <p className="text-sm opacity-90 mb-6">
                Our account managers can bring physical swatch books and sample products directly to your facility for review.
              </p>
              <button 
                className="w-full font-bold uppercase tracking-wider py-3 rounded transition-colors bg-white text-[var(--theme-color)] hover:bg-slate hover:text-[#F5F5DC]"
              >
                BOOK A DATE
              </button>
            </div>
          </div>

          {/* Lead Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-slate/10">
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-6">INQUIRY FORM</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 opacity-80 text-slate">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)]" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 opacity-80 text-slate">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)]" placeholder="jane@facility.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 opacity-80 text-slate">Company</label>
                    <input type="text" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)]" placeholder="Hospital or Hotel Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 opacity-80 text-slate">Inquiry Type</label>
                    <select className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)]">
                      <option>Request a Quote</option>
                      <option>Schedule Product Presentation</option>
                      <option>Request Physical Samples</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80 text-slate">Message</label>
                  <textarea rows="5" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] resize-none" placeholder="Please provide details about your institutional needs, estimated volumes, or presentation availability..."></textarea>
                </div>
                
                <button type="submit" className="w-full flex justify-center items-center gap-3 text-neutral-bg font-bold uppercase tracking-wider py-5 rounded-md text-lg hover:bg-slate transition-colors shadow-md" style={{ backgroundColor: region.theme.primaryBg }}>
                  <Send size={20} /> SUBMIT REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
