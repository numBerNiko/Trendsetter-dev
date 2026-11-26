import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Stethoscope, Building, Download, ArrowRight, PackageCheck } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';
import IndustryTabs from '../components/IndustryTabs';

export default function IndustriesPage() {
  const region = useRegion();

  return (
    <div
      className="text-ink min-h-screen"
      style={{ backgroundColor: region.theme.pageBg }}
    >
      {/* Editorial Dark Hero */}
      <section
        className="relative py-16 sm:py-20 lg:py-24 text-white text-center overflow-hidden"
        style={{ backgroundColor: region.theme.primaryDark }}
      >
        <img
          src="/Trendsetter-website-photos/stacked_pillows.png"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          alt="Institutional textiles by sector"
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
            Sector-Specific Textile Programs
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Industries We Serve
          </h1>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            Tailored commercial textile solutions engineered for nursing homes, medical clinics, and hospitality properties.
          </p>
        </div>
      </section>

      <IndustryTabs />

      {/* Industry Cards */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <Link
            to="/industries/nursing-homes"
            className="group bg-white p-8 rounded-2xl shadow-xs border border-slate-200/90 hover:shadow-xl hover:border-[var(--theme-color)]/40 transition-all flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-6">
              <ShieldCheck strokeWidth={1.75} size={26} />
            </div>
            <h2 className="font-display text-2xl font-bold mb-3 text-ink group-hover:text-[var(--theme-color)] transition-colors">
              Nursing Homes &amp; Hospitals
            </h2>
            <p className="leading-relaxed flex-grow text-sm sm:text-base text-slate-600 mb-6">
              Specialized textiles for post-acute and long-term care facilities. Focus on resident skin comfort, wipe-clean clinical barriers, and high-temp wash stability.
            </p>
            <span className="inline-flex items-center gap-1.5 font-bold text-sm text-[var(--theme-color)] group-hover:gap-2.5 transition-all">
              View Catalogue &amp; Solutions <ArrowRight size={15} />
            </span>
          </Link>

          <Link
            to="/industries/medical-clinics"
            className="group bg-white p-8 rounded-2xl shadow-xs border border-slate-200/90 hover:shadow-xl hover:border-[var(--theme-color)]/40 transition-all flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-6">
              <Stethoscope strokeWidth={1.75} size={26} />
            </div>
            <h2 className="font-display text-2xl font-bold mb-3 text-ink group-hover:text-[var(--theme-color)] transition-colors">
              Medical Clinics
            </h2>
            <p className="leading-relaxed flex-grow text-sm sm:text-base text-slate-600 mb-6">
              Apparel and linens for outpatient, urgent care, and specialty clinics. Focus on durable staff scrubs, exam table covers, privacy curtains, and patient gowns.
            </p>
            <span className="inline-flex items-center gap-1.5 font-bold text-sm text-[var(--theme-color)] group-hover:gap-2.5 transition-all">
              View Catalogue &amp; Solutions <ArrowRight size={15} />
            </span>
          </Link>

          <Link
            to="/industries/hotels"
            className="group bg-white p-8 rounded-2xl shadow-xs border border-slate-200/90 hover:shadow-xl hover:border-[var(--theme-color)]/40 transition-all flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-6">
              <Building strokeWidth={1.75} size={26} />
            </div>
            <h2 className="font-display text-2xl font-bold mb-3 text-ink group-hover:text-[var(--theme-color)] transition-colors">
              Hotels, Resorts &amp; F&amp;B
            </h2>
            <p className="leading-relaxed flex-grow text-sm sm:text-base text-slate-600 mb-6">
              Premium guest linens, high-loft bath terry, staff uniforms, and F&amp;B restaurant &amp; banquet textiles—table runners, overlays, banquet skirting, bar towels, and chef coats.
            </p>
            <span className="inline-flex items-center gap-1.5 font-bold text-sm text-[var(--theme-color)] group-hover:gap-2.5 transition-all">
              View Catalogue &amp; Solutions <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#9A7426] mb-2">
            Procurement Resources
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-ink">
            Ready to Standardize Your Supply Program?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-9 max-w-2xl mx-auto">
            Review our complete {region.shortLabel} catalogue of institutional textile specifications, order physical samples, or request a tailored quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5">
            <a
              href={region.catalogueUrl}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm sm:text-base border border-slate-300 bg-linen hover:bg-surface-muted text-ink transition-colors"
            >
              <Download strokeWidth={1.75} size={18} className="text-[var(--theme-color)]" />
              <span>PDF Catalogue</span>
            </a>
            <Link
              to="/request-samples"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm sm:text-base border border-slate-300 bg-white hover:border-[var(--theme-color)] hover:text-[var(--theme-color)] text-ink transition-colors"
            >
              <PackageCheck strokeWidth={1.75} size={18} />
              <span>Request Samples</span>
            </Link>
            <Link
              to="/contact?inquiry=quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm sm:text-base text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] shadow-md transition-colors"
            >
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
