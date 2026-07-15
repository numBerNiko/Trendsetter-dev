import React from 'react';
import { BedDouble, Bath, Shirt, Target, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRegion } from '../hooks/useRegion';
import IndustryTabs from '../components/IndustryTabs';

export default function HotelsPage() {
  const region = useRegion();
  return (
    <div className="bg-neutral-bg text-slate min-h-screen pb-20 font-sans" style={{ '--theme-color': region.theme.primaryBg }}>
      
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
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10 hover:border-[var(--theme-color)] transition-colors">
            <BedDouble size={36} style={{ color: region.theme.primaryBg }} className="mb-6" />
            <h3 
              className="font-bold text-sm tracking-wider uppercase mb-5"
              style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
            >
              GUEST BEDDING SUITE
            </h3>
            <ul className="space-y-4 text-neutral-700 text-base leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>High thread-count flat & fitted sheets</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Premium duvet covers and inserts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Luxury pillows (down & hypoallergenic alternatives)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Waterproof mattress protectors</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10 hover:border-[var(--theme-color)] transition-colors">
            <Bath size={36} style={{ color: region.theme.primaryBg }} className="mb-6" />
            <h3 
              className="font-bold text-sm tracking-wider uppercase mb-5"
              style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
            >
              BATH & SPA SUITE
            </h3>
            <ul className="space-y-4 text-neutral-700 text-base leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Oversized premium bath towels</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Hand towels & washcloths</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Plush spa and bath robes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Heavy-duty pool and beach towels</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10 hover:border-[var(--theme-color)] transition-colors">
            <Shirt size={36} style={{ color: region.theme.primaryBg }} className="mb-6" />
            <h3 
              className="font-bold text-sm tracking-wider uppercase mb-5"
              style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
            >
              FACILITY & STAFF ESSENTIALS
            </h3>
            <ul className="space-y-4 text-neutral-700 text-base leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Front desk and management uniforms</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Housekeeping scrubs and aprons</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Fine dining and banquet linens</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Maintenance workwear</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Procurement Spec Box */}
        <div className="mt-16 bg-white border border-slate/10 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 text-left">
          <div className="bg-slate/5 p-4 rounded-xl shrink-0" style={{ color: region.theme.primaryBg }}>
            <BedDouble size={40} />
          </div>
          <div>
            <h4 
              className="text-xl font-bold uppercase tracking-wider mb-2" 
              style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
            >
              The Science of Hotel Sleep
            </h4>
            <p className="text-sm leading-relaxed text-neutral-800">
              We offer both Crisp Percale (for a cool, matte, breathable feel) and Silky Sateen (for a warmer, heavier, lustrous drape) woven strictly with extra-long staple (ELS) fibers. Zero short-staple filler cotton ensures a luxury feel that outlasts cheap alternatives.
            </p>
          </div>
        </div>

        <div className="mt-16 border rounded-2xl p-10 text-center max-w-4xl mx-auto bg-[var(--theme-color)]/5 border-[var(--theme-color)]/20">
          <Target size={32} style={{ color: region.theme.primaryBg }} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-4 text-slate">CUSTOM PRIVATE LABELING</h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto text-slate">
            Elevate your property's brand with custom embroidery on robes, towels, and staff uniforms. Consistent visual identity across all guest touchpoints.
          </p>
          <div className="px-4 sm:px-0">
            <Link to="/contact" className="inline-block w-full sm:w-auto px-8 py-4 rounded-md font-bold uppercase tracking-wider text-lg shadow-md border-2 border-[var(--theme-color)] text-white bg-[var(--theme-color)] hover:bg-transparent hover:text-[var(--theme-color)] transition-all duration-300 ease-in-out text-center">
              REQUEST HOSPITALITY QUOTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
