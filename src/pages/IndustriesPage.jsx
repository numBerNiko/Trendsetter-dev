import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Stethoscope, Music } from 'lucide-react';

export default function IndustriesPage() {
  return (
    <div className="bg-neutral-bg text-slate min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate text-neutral-bg py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries Served</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Select an industry below to view our specialized product lines and institutional capabilities.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <Link to="/industries/nursing-homes" className="group bg-white p-10 rounded-2xl shadow-md border border-slate/10 hover:border-deep-teal hover:shadow-xl transition-all flex flex-col h-full">
            <div className="bg-slate/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-deep-teal/10 transition-colors">
              <ShieldCheck size={32} className="text-deep-teal" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-slate">Nursing Homes & Hospitals</h2>
            <p className="opacity-80 leading-relaxed flex-grow text-lg">
              Specialized textiles for Harbor Post Acute Care and long-term facilities. Focus on resident comfort, wipe-clean surfaces, and wash-stability.
            </p>
            <span className="text-deep-teal font-bold mt-6 inline-block group-hover:underline">View Catalog &rarr;</span>
          </Link>

          <Link to="/industries/medical-clinics" className="group bg-white p-10 rounded-2xl shadow-md border border-slate/10 hover:border-deep-teal hover:shadow-xl transition-all flex flex-col h-full">
            <div className="bg-slate/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-deep-teal/10 transition-colors">
              <Stethoscope size={32} className="text-deep-teal" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-slate">Medical Clinics</h2>
            <p className="opacity-80 leading-relaxed flex-grow text-lg">
              Apparel and linens for Outpatient, Urgent Care, and Specialty clinics. Focus on staff scrubs, exam table covers, and patient gowns.
            </p>
            <span className="text-deep-teal font-bold mt-6 inline-block group-hover:underline">View Catalog &rarr;</span>
          </Link>

          <Link to="/industries/concert-merch" className="group bg-white p-10 rounded-2xl shadow-md border border-slate/10 hover:border-deep-teal hover:shadow-xl transition-all flex flex-col h-full">
            <div className="bg-slate/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-deep-teal/10 transition-colors">
              <Music size={32} className="text-deep-teal" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-slate">Concert Merch Store</h2>
            <p className="opacity-80 leading-relaxed flex-grow text-lg">
              Tour-ready merchandise for venues and touring artists. Focus on premium tees, hoodies, headwear, and custom VIP accessories.
            </p>
            <span className="text-deep-teal font-bold mt-6 inline-block group-hover:underline">View Catalog &rarr;</span>
          </Link>

        </div>
      </section>
    </div>
  );
}
