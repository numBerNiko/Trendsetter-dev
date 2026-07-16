import React from 'react';
import { Link } from 'react-router-dom';
import { BedSingle, Bath, Shirt, ShieldCheck, BriefcaseMedical, CheckCircle2, Phone, Mail } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';
import IndustryTabs from '../components/IndustryTabs';

export default function NursingHomesPage() {
  const region = useRegion();
  return (
    <div className="bg-neutral-bg text-slate min-h-screen pb-24 font-sans" style={{ '--theme-color': region.theme.primaryBg }}>
      
      {/* Header Section */}
      <section className="text-neutral-bg py-20 md:py-32 text-center border-b-8 relative overflow-hidden" style={{ backgroundColor: region.theme.primaryBg, borderBottomColor: region.theme.primaryBg }}>
        <img src="/Trendsetter-website-photos/patient_gowns.png" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Nursing Home Textiles" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
            Resident Comfort & Care Essentials for Post-Acute Facilities
          </h1>
          <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto font-light">
            Durable bedding, hygiene textiles, and apparel designed for resident comfort and institutional reliability.
          </p>
        </div>
      </section>

      <IndustryTabs />

      {/* Core Product Suites */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-slate mb-4">CORE PRODUCT SUITES</h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-[var(--theme-color)]"></div>
        </div>

        <div className="space-y-16">
          
          {/* Resident Bedding Suite */}
          <div className="bg-white rounded-2xl shadow-md border border-slate/10 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate/5 p-4 rounded-full text-[var(--theme-color)]">
                <BedSingle size={32} />
              </div>
              <div>
                <h3 
                  className="font-bold text-sm tracking-wider uppercase mb-1"
                  style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
                >
                  RESIDENT BEDDING SUITE
                </h3>
                <p className="opacity-80 text-sm">Engineered for continuous institutional wash cycles and precise physical fit.</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-neutral-700 text-base leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Flat Sheets:</strong> Heavy-duty, high-tensile twin/hospital sizes designed to resist tearing and fraying.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Fitted Sheets:</strong> Standard and deep-pocket options with reinforced elastic tracking for secure mattress gripping.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Pillowcases:</strong> Durable, high-density standard sizes providing an elevated, comfortable hand-feel that withstands rigorous commercial laundering.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Performance Blankets:</strong> Snag-free cellular, thermal, and heavy-weight knits optimized for temperature regulation.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Duvet Covers & Bedspreads:</strong> Easy-care bedspreads and utility covers featuring subtle, color-coded piping for rapid sorting in high-volume laundry facilities.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Mattress Protectors:</strong> Quilted, fluid-resistant, waterproof barriers engineered for full mattress longevity and optimal fluid management.</p>
              </li>
            </ul>

            {/* Procurement Spec Box */}
            <div className="mt-8 border-t pt-8 flex flex-col md:flex-row items-center gap-6 text-left border-slate/10">
              <div className="bg-slate/5 p-3 rounded-xl shrink-0" style={{ color: region.theme.primaryBg }}>
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 
                  className="text-lg font-bold uppercase tracking-wider mb-2" 
                  style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
                >
                  Skin-Safety & Wash Stability
                </h4>
                <p className="text-sm leading-relaxed text-neutral-800">
                  Every sheet in our resident care program is fully combed to remove short, scratchy fibers, eliminating friction-based skin irritation for long-term patients. Pre-shrunk (Sanforized) construction ensures a secure fit on clinical mattresses wash after wash.
                </p>
              </div>
            </div>
          </div>

          {/* Hygiene & Personal Care Suite */}
          <div className="bg-white rounded-2xl shadow-md border border-slate/10 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate/5 p-4 rounded-full text-[var(--theme-color)]">
                <Bath size={32} />
              </div>
              <div>
                <h3 
                  className="font-bold text-sm tracking-wider uppercase mb-1"
                  style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
                >
                  HYGIENE & PERSONAL CARE SUITE
                </h3>
                <p className="opacity-80 text-sm">Absorbent, durable essentials built for moisture management and patient safety.</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-neutral-700 text-base leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Bath Towels:</strong> High-GSM absorbency with double-stitched hems to prevent unraveling under industrial stress.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Hand Towels & Washcloths:</strong> Soft, non-abrasive cotton blends designed for sensitive skin care.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Safety Bath Mats:</strong> High-traction, densely woven textures engineered for resident bathroom safety and slip resistance.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Shower Curtains:</strong> Heavy-gauge, antimicrobial, and flame-retardant commercial curtains engineered for advanced moisture resistance and easy sanitation.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Washable Underpads:</strong> Highly absorbent, multi-layer bed pads engineered to protect linens and withstand repeated commercial laundering cycles.</p>
              </li>
            </ul>
          </div>

          {/* Resident Apparel & Safety */}
          <div className="bg-white rounded-2xl shadow-md border border-slate/10 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate/5 p-4 rounded-full text-[var(--theme-color)]">
                <Shirt size={32} />
              </div>
              <div>
                <h3 
                  className="font-bold text-sm tracking-wider uppercase mb-1"
                  style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
                >
                  RESIDENT APPAREL & SAFETY
                </h3>
                <p className="opacity-80 text-sm">Dignified designs engineered to streamline assisted dressing while withstanding high-volume facility laundering.</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-neutral-700 text-base leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Patient Gowns:</strong> Clinical-grade gowns featuring secure closure options (ties, snaps) and integrated telemetry access to support diverse care requirements.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Adaptive Clothing Basics:</strong> Durable, easy-wear garments featuring reinforced closures designed to streamline assisted dressing protocols.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Fall Management Socks:</strong> Double-tread safety socks engineered to provide reliable traction and support facility fall-reduction initiatives.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Lightweight Robes & Cardigans:</strong> Breathable layers for lounge comfort and climate control.</p>
              </li>
            </ul>
          </div>

          {/* Clinical Compliance & Safety */}
          <div className="bg-white rounded-2xl shadow-md border border-slate/10 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate/5 p-4 rounded-full text-[var(--theme-color)]">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 
                  className="font-bold text-sm tracking-wider uppercase mb-1"
                  style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
                >
                  CLINICAL COMPLIANCE & SAFETY
                </h3>
                <p className="opacity-80 text-sm">Advanced technical textiles engineered for specialized risk-mitigation and high-acuity care zones.</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-neutral-700 text-base leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Flame-Retardant Bedding Sets:</strong> Certified flame-resistant (FR) fabrics meeting stringent federal and state life safety codes.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Wipe-Clean Pillows:</strong> Fluid-resistant, antimicrobial, and FR waterproof pillows designed for rapid surface sanitization between patient transitions.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Ergonomic Transfer Sheets:</strong> Reusable slide and transfer sheets engineered to reduce caregiver strain and friction during patient repositioning.</p>
              </li>
            </ul>
          </div>

          {/* Facility & Staff Essentials */}
          <div className="bg-white rounded-2xl shadow-md border border-slate/10 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate/5 p-4 rounded-full text-[var(--theme-color)]">
                <BriefcaseMedical size={32} />
              </div>
              <div>
                <h3 
                  className="font-bold text-sm tracking-wider uppercase mb-1"
                  style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}
                >
                  FACILITY & STAFF ESSENTIALS
                </h3>
                <p className="opacity-80 text-sm">Optimized workwear and operational textiles engineered for staff comfort and facility efficiency.</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-neutral-700 text-base leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Performance Scrubs & Lab Coats:</strong> Breathable, stain-release technical fabrics built for flexibility and long shifts.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Industrial Laundry Bags:</strong> Heavy-duty mesh and solid bags equipped with industrial drawstrings or lock closures.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Privacy Curtains:</strong> Antimicrobial, flame-retardant cubicle curtains featuring code-compliant mesh headers for fire safety.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={20} className="text-[var(--theme-color)] shrink-0 mr-3 mt-1" />
                <p><strong className="text-neutral-800">Dining Linens:</strong> High-durability tablecloths, napkins, and tray-liners featuring commercial-grade stain-blocking treatments.</p>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <section 
        className="py-24 text-white"
        style={{ backgroundColor: region.theme.primaryBg }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-12 text-white">THE TRENDSETTER PROVISIONING ADVANTAGE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="p-8 rounded-xl shadow-md transition-all bg-[#F5F5DC]">
              <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}><span className="text-2xl mr-2">1.</span> Commercial Wash Resistance</h3>
              <p className="leading-relaxed font-medium text-slate opacity-90">
                Every textile in the Harbor Post Acute Care program is treated to resist color fading, chemical yellowing, and tensile degradation during harsh bleaching cycles.
              </p>
            </div>
            
            <div className="p-8 rounded-xl shadow-md transition-all bg-[#F5F5DC]">
              <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}><span className="text-2xl mr-2">2.</span> Guaranteed PAR Supply Fulfillment</h3>
              <p className="leading-relaxed font-medium text-slate opacity-90">
                We safeguard your operation against common supply chain bottlenecks with robust safety stocks to entirely eliminate stockouts.
              </p>
            </div>
            
            <div className="p-8 rounded-xl shadow-md transition-all bg-[#F5F5DC]">
              <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: region.phone.includes('+63') ? '#8C6215' : region.theme.primaryBg }}><span className="text-2xl mr-2">3.</span> Customization & Private Labeling</h3>
              <p className="leading-relaxed font-medium text-slate opacity-90">
                Elevate your facility’s identity with institutional embroidery, custom property tags, and specialized sorting labels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optimize Your Supply Chain Today */}
      <section className="py-24 bg-[var(--theme-secondary)] text-slate border-t border-slate/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 text-slate">OPTIMIZE YOUR SUPPLY CHAIN TODAY</h2>
          <p className="text-lg opacity-80 mb-12 leading-relaxed">
            Connect with a dedicated Institutional Procurement Specialist to review your bulk fulfillment requirements, establish your facility profile, or order product samples.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate/10 w-full md:w-auto">
              <Phone size={28} className="text-[var(--theme-color)]" />
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-wider opacity-60">Call Us Directly</p>
                <a href={`tel:${region.phone.replace(/[^0-9+]/g, '')}`} className="text-xl font-bold hover:text-[var(--theme-color)] transition-colors text-slate">{region.phone}</a>
                <p className="text-xs opacity-75 mt-1">{region.phoneLabel}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate/10 w-full md:w-auto">
              <Mail size={28} className="text-[var(--theme-color)]" />
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-wider opacity-60">Email Central Routing</p>
                <a href="mailto:customerservice@trendsettertextiles.com" className="text-xl font-bold hover:text-[var(--theme-color)] transition-colors text-slate break-all">customerservice@trendsettertextiles.com</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link to="/contact" className="inline-block w-full sm:w-auto px-8 py-4 rounded-md font-bold uppercase tracking-wider text-lg shadow-lg border-2 border-[var(--theme-color)] text-white bg-[var(--theme-color)] hover:bg-transparent hover:text-[var(--theme-color)] transition-all duration-300 ease-in-out text-center">
              REQUEST A QUOTE
            </Link>
            <Link to="/contact" className="inline-block w-full sm:w-auto px-8 py-4 rounded-md font-bold uppercase tracking-wider text-lg shadow-sm border-2 border-[var(--theme-color)] text-[var(--theme-color)] bg-transparent hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 ease-in-out text-center">
              SCHEDULE A PRODUCT PRESENTATION
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
