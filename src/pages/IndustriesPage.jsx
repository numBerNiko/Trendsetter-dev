import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Stethoscope, Building } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

export default function IndustriesPage() {
  const region = useRegion();
  return (
    <div className="bg-neutral-bg text-slate min-h-screen">
      
      {/* Hero */}
      <section className="text-neutral-bg py-20 md:py-32 text-center relative overflow-hidden border-b-8" style={{ backgroundColor: region.theme.primaryBg, borderBottomColor: region.theme.primaryBg }}>
        <img src="/Trendsetter-website-photos/stacked_pillows.png" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Industries Textiles" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Industries We Serve</h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Tailored textile solutions for nursing homes, medical clinics, and hospitality businesses.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ '--theme-color': region.theme.primaryBg }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <Link to="/industries/nursing-homes" className="group bg-white p-10 rounded-2xl shadow-md border border-slate/10 hover:shadow-xl transition-all flex flex-col h-full hover:border-[var(--theme-color)]">
            <div className="bg-slate/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors">
              <ShieldCheck size={32} className="text-[var(--theme-color)]" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-4 text-[var(--theme-color)]">NURSING HOMES & HOSPITALS</h2>
            <p className="leading-relaxed flex-grow text-lg text-neutral-800">
              Specialized textiles for Harbor Post Acute Care and long-term facilities. Focus on resident comfort, wipe-clean surfaces, and wash-stability.
            </p>
            <span className="font-bold mt-6 inline-block uppercase tracking-wider group-hover:underline text-[var(--theme-color)]">VIEW CATALOG &rarr;</span>
          </Link>

          <Link to="/industries/medical-clinics" className="group bg-white p-10 rounded-2xl shadow-md border border-slate/10 hover:shadow-xl transition-all flex flex-col h-full hover:border-[var(--theme-color)]">
            <div className="bg-slate/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors">
              <Stethoscope size={32} className="text-[var(--theme-color)]" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-4 text-[var(--theme-color)]">MEDICAL CLINICS</h2>
            <p className="leading-relaxed flex-grow text-lg text-neutral-800">
              Apparel and linens for Outpatient, Urgent Care, and Specialty clinics. Focus on staff scrubs, exam table covers, and patient gowns.
            </p>
            <span className="font-bold mt-6 inline-block uppercase tracking-wider group-hover:underline text-[var(--theme-color)]">VIEW CATALOG &rarr;</span>
          </Link>

          <Link to="/industries/hotels" className="group bg-white p-10 rounded-2xl shadow-md border border-slate/10 hover:shadow-xl transition-all flex flex-col h-full hover:border-[var(--theme-color)]">
            <div className="bg-slate/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors">
              <Building size={32} className="text-[var(--theme-color)]" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-4 text-[var(--theme-color)]">HOTELS & HOSPITALITY</h2>
            <p className="leading-relaxed flex-grow text-lg text-neutral-800">
              Premium linens, towels, and staff uniforms for hotels and resorts. Focus on high durability, guest comfort, and brand alignment.
            </p>
            <span className="font-bold mt-6 inline-block uppercase tracking-wider group-hover:underline text-[var(--theme-color)]">VIEW CATALOG &rarr;</span>
          </Link>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-coral text-slate border-t border-slate/10" style={{ '--theme-color': region.theme.primaryBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wider text-[var(--theme-color)]">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link to="/contact" className="text-neutral-bg px-8 py-4 rounded-md font-bold uppercase tracking-wider text-lg shadow-lg w-full sm:w-auto text-center transition-colors hover:opacity-80" style={{ backgroundColor: region.theme.primaryBg }}>
              REQUEST A QUOTE
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-md font-bold uppercase tracking-wider text-lg shadow-sm w-full sm:w-auto text-center transition-colors bg-transparent border-2 border-[var(--theme-color)] text-[var(--theme-color)] hover:bg-[var(--theme-color)] hover:text-neutral-bg">
              SCHEDULE A PRODUCT PRESENTATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
