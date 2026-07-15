import React from 'react';
import { BedDouble, Bath, Shirt, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRegion } from '../hooks/useRegion';
import IndustryTabs from '../components/IndustryTabs';

export default function HotelsPage() {
  const region = useRegion();
  return (
    <div className="bg-neutral-bg text-slate min-h-screen pb-20">
      
      {/* Hero */}
      <section className="text-neutral-bg py-20 md:py-32 text-center relative overflow-hidden border-b-8" style={{ backgroundColor: region.theme.primaryBg, borderBottomColor: region.theme.primaryBg }}>
        <img src="/Trendsetter-website-photos/premium_bathrobe.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Hotels Textiles" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Hospitality Linens Designed for Guest Comfort and Brand Presentation</h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Premium linens, towels, and staff uniforms for hotels and resorts. Focus on high durability, guest comfort, and brand alignment.
          </p>
        </div>
      </section>

      <IndustryTabs />

      {/* Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10 hover:border-deep-teal transition-colors">
            <BedDouble size={36} className="text-deep-teal mb-6" />
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">GUEST BEDDING SUITE</h3>
            <ul className="space-y-3 opacity-80 text-sm leading-relaxed">
              <li>• High thread-count flat & fitted sheets</li>
              <li>• Premium duvet covers and inserts</li>
              <li>• Luxury pillows (down & hypoallergenic alternatives)</li>
              <li>• Waterproof mattress protectors</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10 hover:border-deep-teal transition-colors">
            <Bath size={36} className="text-deep-teal mb-6" />
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">BATH & SPA SUITE</h3>
            <ul className="space-y-3 opacity-80 text-sm leading-relaxed">
              <li>• Oversized premium bath towels</li>
              <li>• Hand towels & washcloths</li>
              <li>• Plush spa and bath robes</li>
              <li>• Heavy-duty pool and beach towels</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10 hover:border-deep-teal transition-colors">
            <Shirt size={36} className="text-deep-teal mb-6" />
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">FACILITY & STAFF ESSENTIALS</h3>
            <ul className="space-y-3 opacity-80 text-sm leading-relaxed">
              <li>• Front desk and management uniforms</li>
              <li>• Housekeeping scrubs and aprons</li>
              <li>• Fine dining and banquet linens</li>
              <li>• Maintenance workwear</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 bg-deep-teal/5 border border-deep-teal/20 rounded-2xl p-10 text-center max-w-4xl mx-auto">
          <Target size={32} className="text-deep-teal mx-auto mb-4" />
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-4 text-slate">CUSTOM PRIVATE LABELING</h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto text-slate">
            Elevate your property's brand with custom embroidery on robes, towels, and staff uniforms. Consistent visual identity across all guest touchpoints.
          </p>
          <div className="px-4 sm:px-0">
            <Link to="/contact" className="inline-block w-full sm:w-auto bg-deep-teal text-neutral-bg px-8 py-4 rounded-md font-bold uppercase tracking-wider text-lg hover:bg-slate transition-colors shadow-md">
              REQUEST HOSPITALITY QUOTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
