import React from 'react';
import { Target, ShieldCheck, Factory, ArrowRight, PackageCheck } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const region = useRegion();

  return (
    <div
      className="text-ink min-h-screen font-sans"
      style={{ backgroundColor: region.theme.pageBg }}
    >
      {/* Editorial Dark Hero */}
      <section
        className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden"
        style={{ backgroundColor: region.theme.primaryDark }}
      >
        <img
          src="/Trendsetter-website-photos/procurement_warehouse.png"
          alt="Trendsetter Textiles warehouse operations"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background: region.isPH
              ? 'linear-gradient(120deg, rgba(27,50,59,0.95) 0%, rgba(27,50,59,0.86) 100%)'
              : 'linear-gradient(120deg, rgba(15,45,36,0.95) 0%, rgba(15,45,36,0.86) 100%)'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C49A45]/20 border border-[#C49A45]/40 text-[#DFC07A] text-xs font-bold uppercase tracking-wider mb-5">
            Three Generations of Textile Expertise
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-5 text-white">
            Supplying Reliable Institutional Textiles Across the {region.regionName}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-white/85 max-w-3xl mx-auto">
            {region.isPH
              ? 'Trendsetter Textiles is a premier local sourcing and manufacturing partner, bridging vertically integrated production with rapid Laguna / Biñan warehouse dispatch.'
              : 'Trendsetter Textiles is an enterprise-grade B2B sourcing partner, supporting US healthcare and hospitality supply chains from our Los Angeles hub with vertically integrated mill production.'}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xs border border-slate-200/90 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#9A7426] mb-2">
            Our Heritage
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 text-ink">
            Built for Commercial Durability &amp; Long-Term Supply Partnerships
          </h2>
          {region.isPH ? (
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-600">
              <p>
                Trendsetter Textiles Inc. is a premier manufacturer and B2B distributor of high-performance institutional linens serving Metro Manila and facilities nationwide across the Philippines. Backed by three generations of textile expertise, we operate advanced manufacturing and fulfillment operations—including our Laguna / Biñan warehouse facility for fast local dispatch.
              </p>
              <p>
                We provide end-to-end linen provisioning, custom apparel, and turnkey logistics for hotels, resorts, hospitals, clinics, and dining venues. From high-thread-count cotton bedding and 500–650 GSM bath terry to standardized F&amp;B damask linens and clinical textiles, every batch undergoes rigorous in-house quality assurance for superior lifetime value.
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-600">
              <p>
                Trendsetter Textiles Inc. is a vertically integrated B2B supplier of institutional healthcare and hospitality linens supporting facilities across the United States from our Los Angeles operations hub. Backed by three generations of textile manufacturing heritage and international mill partnerships in Asia, we deliver consistent specification control without middleman markups.
              </p>
              <p>
                Our portfolio spans Sanforized T-180 and T-250 healthcare bedding, 500–650 GSM ring-spun bath terry, flame-retardant clinical textiles, and custom-embroidered hospitality programs. Every shipment is verified against strict OEKO-TEX® Standard 100, WRAP, and commercial laundering benchmarks so your facility achieves lower replacement costs and dependable PAR inventory.
              </p>
            </div>
          )}
        </div>

        {/* 3 Core Pillars (Fixed High-Contrast Surfaces for both US & PH) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs text-left">
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-5">
              <Target strokeWidth={1.75} size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-ink mb-2.5">
              B2B Specialization
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dedicated exclusively to institutional buyers—engineered for the rigors of high-temperature commercial laundering and strict PAR level maintenance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs text-left">
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-5">
              <ShieldCheck strokeWidth={1.75} size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-ink mb-2.5">
              Uncompromising Quality
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              From crisp hotel percales to {region.isPH ? 'ISO-compliant & tropical sanitation-grade' : 'CPSC / NFPA 701 & clinical barrier'} fabrics, every production run meets strict international standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs text-left">
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-5">
              <Factory strokeWidth={1.75} size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-ink mb-2.5">
              Sourcing Reliability
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {region.warehouseSummary}
            </p>
          </div>
        </div>

        {/* Bottom CTA Band */}
        <div
          className="rounded-2xl p-8 sm:p-10 text-center text-white shadow-lg"
          style={{ backgroundColor: region.theme.primaryDark }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Partner With Trendsetter Textiles {region.shortLabel}
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-7">
            Connect directly with {region.representative.name} ({region.representative.phone}) to discuss bulk specifications, scheduled replenishment, or physical swatch samples.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm sm:text-base bg-[#C49A45] hover:bg-[#DFC07A] text-[#0F172A] transition-colors"
            >
              <span>Partner With Us</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/request-samples"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base bg-white/10 hover:bg-white/20 border border-white/25 text-white transition-colors"
            >
              <PackageCheck size={16} />
              <span>Request Physical Samples</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
