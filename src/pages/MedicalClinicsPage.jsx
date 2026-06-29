import React from 'react';
import { Activity, Stethoscope, Building, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MedicalClinicsPage() {
  return (
    <div className="bg-neutral-bg text-slate min-h-screen pb-20">
      
      {/* Hero */}
      <section className="bg-slate text-neutral-bg py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Clinics</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Specialized textiles for Outpatient, Urgent Care, and Specialty Clinics. Focus on workflow fit, compliance, and patient comfort.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10">
            <Activity size={36} className="text-deep-teal mb-6" />
            <h3 className="text-2xl font-bold mb-4">Exam & Treatment Rooms</h3>
            <ul className="space-y-3 opacity-80 text-sm leading-relaxed">
              <li>• Exam table covers/drapes</li>
              <li>• Flat sheets, pillowcases</li>
              <li>• Lightweight blankets</li>
              <li>• Pillow protectors, wipe-clean pillows</li>
              <li>• Privacy curtains</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10">
            <Stethoscope size={36} className="text-deep-teal mb-6" />
            <h3 className="text-2xl font-bold mb-4">Staff & Patient Wear</h3>
            <ul className="space-y-3 opacity-80 text-sm leading-relaxed">
              <li>• Patient gowns (maternity, pediatric prints)</li>
              <li>• Scrubs (custom colors, logo embroidery)</li>
              <li>• Lab coats (short/long)</li>
              <li>• Non-slip socks</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10">
            <Building size={36} className="text-deep-teal mb-6" />
            <h3 className="text-2xl font-bold mb-4">Ancillary Spaces</h3>
            <ul className="space-y-3 opacity-80 text-sm leading-relaxed">
              <li>• Waiting-room textiles (washable cushion covers, accent blankets)</li>
              <li>• Washroom textiles (hand towels, bath mats)</li>
              <li>• Cleaning & operations (laundry bags, mop-head textiles)</li>
            </ul>
          </div>

        </div>

        {/* Optional Upsell Section */}
        <div className="mt-12 max-w-3xl mx-auto bg-deep-teal/5 border border-deep-teal/20 p-8 rounded-xl text-center">
          <ShoppingBag size={32} className="text-deep-teal mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-2 text-slate">Patient Discharge / Welcome Kits</h4>
          <p className="opacity-80 text-sm mb-4">Optional upsell: Custom branded tote bags for patient belongings or new-patient information packets.</p>
          <Link to="/custom-programs" className="text-deep-teal font-bold hover:underline">Explore Custom Branding</Link>
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-block bg-deep-teal text-neutral-bg px-8 py-4 rounded-md font-bold text-lg hover:bg-slate transition-colors shadow-md">
            Request Quote for Clinics
          </Link>
        </div>
      </section>
    </div>
  );
}
