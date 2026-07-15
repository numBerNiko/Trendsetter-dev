import React from 'react';
import { Stethoscope, Droplets, Target, ShieldCheck, Activity, Building, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRegion } from '../hooks/useRegion';

export default function MedicalClinicsPage() {
  const region = useRegion();
  return (
    <div className="bg-neutral-bg text-slate min-h-screen pb-20">
      
      {/* Hero */}
      <section className="text-neutral-bg py-20 md:py-32 text-center relative overflow-hidden border-b-8" style={{ backgroundColor: region.theme.primaryBg, borderBottomColor: region.theme.primaryBg }}>
        <img src="/Trendsetter-website-photos/professional_medical_scrubs.png" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Medical Clinics Textiles" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Textile Solutions for Outpatient and Specialty Clinics</h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Specialized textiles for Outpatient, Urgent Care, and Specialty Clinics. Focus on workflow fit, compliance, and patient comfort.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10">
            <Activity size={36} style={{ color: region.theme.primaryBg }} className="mb-6" />
            <h3 
              className="font-bold text-sm tracking-wider uppercase mb-5"
              style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
            >
              EXAM & TREATMENT ROOMS
            </h3>
            <ul className="space-y-4 text-neutral-700 text-base leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Exam table covers/drapes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Institutional-grade linens (T130/T180)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Lightweight thermal blankets</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Medical-grade barrier pillows & fluid-resistant protectors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Antimicrobial privacy/cubicle curtains</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10">
            <Stethoscope size={36} style={{ color: region.theme.primaryBg }} className="mb-6" />
            <h3 
              className="font-bold text-sm tracking-wider uppercase mb-5"
              style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
            >
              STAFF & PATIENT WEAR
            </h3>
            <ul className="space-y-4 text-neutral-700 text-base leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>High-turnover patient gowns (telemetry, maternity, pediatric)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Industrial-wash scrubs (custom colors, logo embroidery)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Clinical lab coats (short/long)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Fall-prevention treaded footwear</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10">
            <Building size={36} style={{ color: region.theme.primaryBg }} className="mb-6" />
            <h3 
              className="font-bold text-sm tracking-wider uppercase mb-5"
              style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
            >
              EVS, FACILITIES & PUBLIC AREAS
            </h3>
            <ul className="space-y-4 text-neutral-700 text-base leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Commercial-grade lobby textiles (heavy-duty upholstery covers)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>Washroom textiles (bulk hand towels, bath mats)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="shrink-0 mr-3 mt-1" style={{ color: region.theme.primaryBg }} />
                <span>EVS supplies (isolation laundry bags, industrial microfiber systems)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Optional Upsell Section */}
        <div className="mt-12 max-w-3xl mx-auto bg-deep-teal/5 border border-deep-teal/20 p-8 rounded-xl text-center">
          <ShoppingBag size={32} className="text-deep-teal mx-auto mb-4" />
          <h4 className="text-xl font-bold uppercase tracking-wider mb-2 text-slate">PATIENT DISCHARGE / WELCOME KITS</h4>
          <p className="opacity-80 text-sm mb-4">Optional upsell: Custom branded tote bags for patient belongings or new-patient information packets.</p>
          <Link to="/custom-programs" className="text-deep-teal font-bold uppercase tracking-wider hover:underline">EXPLORE CUSTOM BRANDING</Link>
        </div>
        
        <div className="mt-16 text-center px-4 sm:px-0">
          <Link to="/contact" className="inline-block w-full sm:w-auto px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-md text-white hover:opacity-80" style={{ backgroundColor: region.theme.primaryBg }}>
            REQUEST QUOTE FOR CLINICS
          </Link>
        </div>
      </section>
    </div>
  );
}
