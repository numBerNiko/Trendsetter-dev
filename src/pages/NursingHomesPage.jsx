import React from 'react';
import { Link } from 'react-router-dom';
import {
  BedSingle,
  Bath,
  Shirt,
  ShieldCheck,
  BriefcaseMedical,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  PackageCheck
} from 'lucide-react';
import { useRegion } from '../hooks/useRegion';
import IndustryTabs from '../components/IndustryTabs';

export default function NursingHomesPage() {
  const region = useRegion();

  return (
    <div
      className="text-ink min-h-screen font-sans"
      style={{ backgroundColor: region.theme.pageBg }}
    >
      {/* Editorial Dark Hero */}
      <section
        className="relative py-16 sm:py-20 lg:py-24 text-white text-center overflow-hidden"
        style={{ backgroundColor: region.theme.primaryDark }}
      >
        <img
          src="/Trendsetter-website-photos/patient_gowns.png"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          alt="Nursing home and hospital textiles"
        />
        <div
          className="absolute inset-0"
          style={{
            background: region.isPH
              ? 'linear-gradient(120deg, rgba(27,50,59,0.95) 0%, rgba(27,50,59,0.86) 100%)'
              : 'linear-gradient(120deg, rgba(15,45,36,0.95) 0%, rgba(15,45,36,0.86) 100%)'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C49A45]/20 border border-[#C49A45]/40 text-[#DFC07A] text-xs font-bold uppercase tracking-wider mb-5">
            Post-Acute &amp; Long-Term Care
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-5 text-white">
            Resident Comfort &amp; Care Essentials for Post-Acute Facilities
          </h1>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl mx-auto">
            Durable bedding, hygiene textiles, and clinical apparel engineered for resident comfort, skin safety, and institutional wash reliability.
          </p>
        </div>
      </section>

      <IndustryTabs />

      {/* Core Product Suites */}
      <section className="py-16 lg:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#9A7426] mb-2">
            Healthcare Provisioning
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
            Core Product Suites
          </h2>
        </div>

        <div className="space-y-8">
          {/* Resident Bedding Suite */}
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 p-7 sm:p-10">
            <div className="flex items-start sm:items-center gap-4 mb-6">
              <div className="bg-[var(--theme-color)]/10 p-3.5 rounded-xl text-[var(--theme-color)] shrink-0">
                <BedSingle strokeWidth={1.75} size={26} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Resident Bedding Suite
                </h3>
                <p className="text-slate-500 text-sm">
                  Engineered for continuous institutional wash cycles and precise physical fit.
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Flat Sheets:</strong> Heavy-duty, high-tensile twin/hospital sizes designed to resist tearing and fraying.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Fitted Sheets:</strong> Standard and deep-pocket options with reinforced elastic tracking for secure mattress gripping.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Pillowcases:</strong> Durable, high-density standard sizes providing an elevated, comfortable hand-feel through commercial laundering.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Performance Blankets:</strong> Snag-free cellular, thermal, and heavy-weight knits optimized for temperature regulation.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Duvet Covers &amp; Bedspreads:</strong> Easy-care bedspreads and utility covers with subtle color-coded piping for rapid laundry sorting.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Mattress Protectors:</strong> Quilted, fluid-resistant, waterproof barriers engineered for mattress longevity and optimal fluid management.</p>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-linen/70 p-5 rounded-xl">
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-[var(--theme-color)] shrink-0">
                <ShieldCheck strokeWidth={1.75} size={22} />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--theme-color)] mb-1">
                  Skin-Safety &amp; Wash Stability
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  Every sheet in our resident care program is fully combed to remove short, scratchy fibers, reducing friction-based skin irritation for long-term patients. Pre-shrunk (Sanforized) construction preserves mattress fit wash after wash.
                </p>
              </div>
            </div>
          </div>

          {/* Hygiene & Personal Care Suite */}
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 p-7 sm:p-10">
            <div className="flex items-start sm:items-center gap-4 mb-6">
              <div className="bg-[var(--theme-color)]/10 p-3.5 rounded-xl text-[var(--theme-color)] shrink-0">
                <Bath strokeWidth={1.75} size={26} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Hygiene &amp; Personal Care Suite
                </h3>
                <p className="text-slate-500 text-sm">
                  Absorbent, durable essentials built for moisture management and resident safety.
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Bath Towels:</strong> High-GSM absorbency with double-stitched hems to prevent unraveling under industrial stress.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Hand Towels &amp; Washcloths:</strong> Soft, non-abrasive cotton blends designed for sensitive skin care.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Safety Bath Mats:</strong> High-traction, densely woven textures engineered for bathroom slip resistance.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Shower Curtains:</strong> Heavy-gauge, antimicrobial, and flame-retardant commercial curtains for easy sanitation.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Washable Underpads:</strong> Highly absorbent multi-layer bed pads engineered to withstand repeated commercial wash cycles.</p>
              </li>
            </ul>
          </div>

          {/* Resident Apparel & Safety */}
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 p-7 sm:p-10">
            <div className="flex items-start sm:items-center gap-4 mb-6">
              <div className="bg-[var(--theme-color)]/10 p-3.5 rounded-xl text-[var(--theme-color)] shrink-0">
                <Shirt strokeWidth={1.75} size={26} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Resident Apparel &amp; Safety
                </h3>
                <p className="text-slate-500 text-sm">
                  Dignified designs engineered to streamline assisted dressing and withstand facility laundering.
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Patient Gowns:</strong> Clinical-grade gowns with tie or snap closures and integrated telemetry access.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Adaptive Clothing Basics:</strong> Durable, easy-wear garments with reinforced closures for assisted dressing.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Fall Management Socks:</strong> Double-tread safety socks providing reliable traction for fall-reduction protocols.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Lightweight Robes &amp; Cardigans:</strong> Breathable lounge layers for daily resident comfort.</p>
              </li>
            </ul>
          </div>

          {/* Clinical Compliance & Safety */}
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 p-7 sm:p-10">
            <div className="flex items-start sm:items-center gap-4 mb-6">
              <div className="bg-[var(--theme-color)]/10 p-3.5 rounded-xl text-[var(--theme-color)] shrink-0">
                <ShieldCheck strokeWidth={1.75} size={26} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Clinical Compliance &amp; Safety
                </h3>
                <p className="text-slate-500 text-sm">
                  Technical textiles engineered for specialized risk-mitigation and high-acuity care zones.
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Flame-Retardant Bedding Sets:</strong> Certified FR fabrics meeting stringent life safety codes.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Wipe-Clean Pillows:</strong> Fluid-resistant, antimicrobial, FR waterproof pillows for rapid sanitization.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Ergonomic Transfer Sheets:</strong> Reusable slide sheets reducing caregiver strain during patient repositioning.</p>
              </li>
            </ul>
          </div>

          {/* Facility & Staff Essentials */}
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 p-7 sm:p-10">
            <div className="flex items-start sm:items-center gap-4 mb-6">
              <div className="bg-[var(--theme-color)]/10 p-3.5 rounded-xl text-[var(--theme-color)] shrink-0">
                <BriefcaseMedical strokeWidth={1.75} size={26} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Facility &amp; Staff Essentials
                </h3>
                <p className="text-slate-500 text-sm">
                  Workwear and operational textiles built for staff comfort and facility efficiency.
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Performance Scrubs &amp; Lab Coats:</strong> Breathable, stain-release technical fabrics for long clinical shifts.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Industrial Laundry Bags:</strong> Heavy-duty mesh and solid bags with industrial drawstrings or lock closures.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Privacy Curtains:</strong> Antimicrobial, flame-retardant cubicle curtains with code-compliant mesh headers.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-1" />
                <p><strong className="text-ink">Dining Linens:</strong> High-durability tablecloths, napkins, and tray liners with commercial stain-release finishes.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Provisioning Advantage Band */}
      <section
        className="py-16 lg:py-20 text-white"
        style={{ backgroundColor: region.theme.primaryDark }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#DFC07A] mb-2">
              Why Post-Acute Teams Choose Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              The Trendsetter Provisioning Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-7 rounded-2xl bg-white text-ink shadow-md">
              <span className="font-display text-2xl font-extrabold text-[var(--theme-color)]/30 block mb-2">01</span>
              <h3 className="font-display text-lg font-bold text-ink mb-2.5">
                Commercial Wash Resistance
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Treated to resist color fading, chemical yellowing, and tensile degradation during harsh institutional bleaching cycles.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white text-ink shadow-md">
              <span className="font-display text-2xl font-extrabold text-[var(--theme-color)]/30 block mb-2">02</span>
              <h3 className="font-display text-lg font-bold text-ink mb-2.5">
                Guaranteed PAR Supply Fulfillment
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Safeguard your care operations against supply bottlenecks with reliable inventory reserves that prevent linen stockouts.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white text-ink shadow-md">
              <span className="font-display text-2xl font-extrabold text-[var(--theme-color)]/30 block mb-2">03</span>
              <h3 className="font-display text-lg font-bold text-ink mb-2.5">
                Customization &amp; Private Labeling
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Elevate facility presentation with institutional embroidery, custom property tags, and color-coded laundry sorting labels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optimize Your Supply Chain CTA */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-ink">
            Optimize Your Facility Supply Chain Today
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed">
            Connect directly with {region.representative.name} ({region.representative.role}) to review bulk fulfillment requirements or order physical samples.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
            <div className="flex items-center gap-4 bg-linen p-5 rounded-xl border border-slate-200/80">
              <Phone strokeWidth={1.75} size={22} className="text-[var(--theme-color)] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {region.representative.name} &mdash; Direct Line
                </p>
                <a
                  href={`tel:${region.representative.tel}`}
                  className="text-lg font-bold text-ink hover:text-[var(--theme-color)] transition-colors"
                >
                  {region.representative.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-linen p-5 rounded-xl border border-slate-200/80">
              <Mail strokeWidth={1.75} size={22} className="text-[var(--theme-color)] shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Email Central Routing
                </p>
                <a
                  href={`mailto:${region.email}`}
                  className="text-base sm:text-lg font-bold text-ink hover:text-[var(--theme-color)] transition-colors break-all"
                >
                  {region.email}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3.5">
            <Link
              to="/contact?inquiry=quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm sm:text-base text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] shadow-md transition-colors"
            >
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/request-samples"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base border border-slate-300 bg-white hover:border-[var(--theme-color)] hover:text-[var(--theme-color)] text-ink transition-colors"
            >
              <PackageCheck size={16} />
              <span>Request Physical Samples</span>
            </Link>
            <Link
              to="/contact?inquiry=presentation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base border border-slate-300 bg-linen hover:bg-surface-muted text-ink transition-colors"
            >
              Schedule Presentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
