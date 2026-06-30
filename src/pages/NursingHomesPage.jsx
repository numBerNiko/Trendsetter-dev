import React from 'react';
import { Link } from 'react-router-dom';
import { BedSingle, Bath, Shirt, ShieldCheck, BriefcaseMedical, CheckCircle2, Phone, Mail } from 'lucide-react';

export default function NursingHomesPage() {
  return (
    <div className="bg-neutral-bg text-slate min-h-screen pb-24 font-sans">
      
      {/* Header Section */}
      <section className="bg-slate text-neutral-bg py-24 text-center border-b-8 border-deep-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Resident Comfort & Care Essentials for Post-Acute Facilities
          </h1>
          <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto font-light">
            Durable bedding, hygiene textiles, and apparel designed for resident comfort and institutional reliability.
          </p>
        </div>
      </section>

      {/* Core Product Suites */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-slate mb-4">CORE PRODUCT SUITES</h2>
          <div className="w-24 h-1 bg-deep-teal mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          
          {/* Resident Bedding Suite */}
          <div className="bg-white rounded-2xl shadow-md border border-slate/10 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate/5 p-4 rounded-full text-deep-teal">
                <BedSingle size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-slate">RESIDENT BEDDING SUITE</h3>
                <p className="opacity-80 text-sm">Engineered for continuous institutional wash cycles and precise physical fit.</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Flat Sheets:</strong> Heavy-duty, high-tensile twin/hospital sizes designed to resist tearing and fraying.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Fitted Sheets:</strong> Standard and deep-pocket options with reinforced elastic tracking for secure mattress gripping.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Pillowcases:</strong> High-thread-count standard/queen sizes providing an elevated, non-institutional hand-feel.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Performance Blankets:</strong> Snag-free cellular, thermal, and heavy-weight knits optimized for temperature regulation.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Duvet Covers & Bedspreads:</strong> Easy-care fabrics featuring subtle, color-coded piping for rapid sorting in high-volume laundry facilities.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Mattress Protectors:</strong> Quilted, fluid-resistant, waterproof barriers styled in an ergonomic draw-sheet configuration.</p>
              </li>
            </ul>
          </div>

          {/* Hygiene & Personal Care Suite */}
          <div className="bg-white rounded-2xl shadow-md border border-slate/10 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate/5 p-4 rounded-full text-deep-teal">
                <Bath size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-slate">HYGIENE & PERSONAL CARE SUITE</h3>
                <p className="opacity-80 text-sm">Absorbent, durable essentials built for moisture management and patient safety.</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Bath Towels:</strong> High-GSM absorbency with double-stitched hems to prevent unraveling under industrial stress.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Hand Towels & Washcloths:</strong> Soft, non-abrasive cotton blends designed for sensitive skin care.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Safety Bath Mats:</strong> High-traction, non-slip backing engineered for wet-room stability.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Shower Curtains:</strong> Heavy-gauge, commercial-grade curtains treated for advanced mildew and moisture resistance.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Washable Underpads:</strong> Highly absorbent, multi-layer bed pads capable of repeated processing.</p>
              </li>
            </ul>
          </div>

          {/* Resident Apparel & Safety */}
          <div className="bg-white rounded-2xl shadow-md border border-slate/10 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate/5 p-4 rounded-full text-deep-teal">
                <Shirt size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-slate">RESIDENT APPAREL & SAFETY</h3>
                <p className="opacity-80 text-sm">Dignified designs that simplify daily dressing routines for residents and caregivers.</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Patient Gowns:</strong> Utility-driven styles with varied secure closure options (ties, snaps, and telemetry slots).</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Adaptive Clothing Basics:</strong> Easy-wear garments featuring flexible closures to ease assisted dressing.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Non-Slip Socks:</strong> Double-tread safety socks providing a reliable grip on both sides of the foot.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Lightweight Robes & Cardigans:</strong> Breathable layers for lounge comfort and climate control.</p>
              </li>
            </ul>
          </div>

          {/* Clinical Compliance & Safety */}
          <div className="bg-white rounded-2xl shadow-md border border-slate/10 p-8 md:p-12 border-l-8 border-l-deep-teal">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate/5 p-4 rounded-full text-deep-teal">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-slate">CLINICAL COMPLIANCE & SAFETY (HIGHER-SPEC)</h3>
                <p className="opacity-80 text-sm">Advanced technical textiles targeting specialized risk-mitigation zones.</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Flame-Retardant Bedding Sets:</strong> Certified flame-resistant (FR) fabrics meeting stringent state safety codes.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Wipe-Clean Pillows:</strong> Fluid-resistant, antimicrobial, and FR waterproof pillows designed for swift sanitization between turns.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Ergonomic Transfer Sheets:</strong> Reusable slide and transfer sheets designed to reduce caregiver strain and friction during patient repositioning.</p>
              </li>
            </ul>
          </div>

          {/* Facility & Staff Essentials */}
          <div className="bg-white rounded-2xl shadow-md border border-slate/10 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate/5 p-4 rounded-full text-deep-teal">
                <BriefcaseMedical size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-slate">FACILITY & STAFF ESSENTIALS</h3>
                <p className="opacity-80 text-sm">Optimized workwear and logistics textiles to keep your staff moving comfortably.</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Ergonomic Scrubs & Lab Coats:</strong> Breathable, stain-release technical fabrics built for flexibility and long shifts.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Industrial Laundry Bags:</strong> Heavy-duty mesh and solid bags equipped with industrial drawstrings or lock closures.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Privacy Curtains:</strong> Antimicrobial, flame-retardant mesh cubicle tracking screens.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-deep-teal shrink-0 mr-3 mt-1" />
                <p className="text-base"><strong className="text-slate">Dining Linens:</strong> High-turnover tablecloths, napkins, and tray-liners featuring stain-blocking treatments.</p>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* The Trendsetter Provisioning Advantage */}
      <section className="py-24 bg-slate text-neutral-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-12 text-neutral-bg">THE TRENDSETTER PROVISIONING ADVANTAGE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-deep-teal/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-deep-teal flex items-center"><span className="text-2xl mr-2">1.</span> Commercial Wash Resistance</h3>
              <p className="opacity-90 leading-relaxed">
                Every textile in the Harbor Post Acute Care program is treated to resist color fading, chemical yellowing, and tensile degradation during harsh bleaching cycles.
              </p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-deep-teal/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-deep-teal flex items-center"><span className="text-2xl mr-2">2.</span> Guaranteed PAR Supply Fulfillment</h3>
              <p className="opacity-90 leading-relaxed">
                We safeguard your operation against common supply chain bottlenecks with robust safety stocks to entirely eliminate stockouts.
              </p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-deep-teal/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-deep-teal flex items-center"><span className="text-2xl mr-2">3.</span> Customization & Private Labeling</h3>
              <p className="opacity-90 leading-relaxed">
                Elevate your facility’s identity with institutional embroidery, custom property tags, and specialized sorting labels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optimize Your Supply Chain Today */}
      <section className="py-24 bg-coral text-slate border-t border-slate/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 text-slate">OPTIMIZE YOUR SUPPLY CHAIN TODAY</h2>
          <p className="text-lg opacity-80 mb-12 leading-relaxed">
            Connect with a dedicated Institutional Procurement Specialist to review your bulk fulfillment requirements, establish your facility profile, or order product samples.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate/10 w-full md:w-auto">
              <Phone size={28} className="text-deep-teal" />
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-wider opacity-60">Call Us Directly</p>
                <a href="tel:+18005550199" className="text-xl font-bold hover:text-deep-teal transition-colors text-slate">1-800-555-0199</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate/10 w-full md:w-auto">
              <Mail size={28} className="text-deep-teal" />
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-wider opacity-60">Email Central Routing</p>
                <a href="mailto:customerservice@trendsettertextiles.com" className="text-xl font-bold hover:text-deep-teal transition-colors text-slate break-all">customerservice@trendsettertextiles.com</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-deep-teal text-neutral-bg px-8 py-4 rounded-md font-bold uppercase tracking-wider text-lg hover:bg-slate transition-colors shadow-lg">
              REQUEST A QUOTE
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-slate text-slate px-8 py-4 rounded-md font-bold uppercase tracking-wider text-lg hover:bg-slate hover:text-neutral-bg transition-colors shadow-sm">
              SCHEDULE A PRODUCT PRESENTATION
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
