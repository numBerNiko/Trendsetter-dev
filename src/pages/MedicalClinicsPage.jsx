import React from 'react';
import {
  Stethoscope,
  Activity,
  Building,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  PackageCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRegion } from '../hooks/useRegion';
import IndustryTabs from '../components/IndustryTabs';

export default function MedicalClinicsPage() {
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
          src="/Trendsetter-website-photos/professional_medical_scrubs.png"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          alt="Medical clinics linens and scrubs"
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
            Outpatient &amp; Specialty Care
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Textile Solutions for Outpatient &amp; Specialty Clinics
          </h1>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            High-turnover exam room linens, clinical staff scrubs, and compliant patient wear built for daily clinic workflows.
          </p>
        </div>
      </section>

      <IndustryTabs />

      {/* Categories */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/90">
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-6">
              <Activity strokeWidth={1.75} size={26} />
            </div>
            <h2 className="font-display text-xl font-bold text-ink mb-5">
              Exam &amp; Treatment Rooms
            </h2>
            <ul className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              {[
                'Exam table covers and clinical drapes',
                'Institutional-grade linens (T-130 / T-180)',
                'Lightweight thermal blankets',
                'Medical-grade barrier pillows & fluid-resistant protectors',
                'Antimicrobial privacy and cubicle curtains'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/90">
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-6">
              <Stethoscope strokeWidth={1.75} size={26} />
            </div>
            <h2 className="font-display text-xl font-bold text-ink mb-5">
              Staff &amp; Patient Wear
            </h2>
            <ul className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              {[
                'High-turnover patient gowns (telemetry, maternity, pediatric)',
                'Industrial-wash scrubs (custom colors & logo embroidery)',
                'Clinical lab coats (short and long cuts)',
                'Fall-prevention double-treaded footwear'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/90">
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-6">
              <Building strokeWidth={1.75} size={26} />
            </div>
            <h2 className="font-display text-xl font-bold text-ink mb-5">
              EVS, Facilities &amp; Public Areas
            </h2>
            <ul className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              {[
                'Commercial-grade lobby and waiting room textiles',
                'Washroom textiles (bulk hand towels & bath mats)',
                'EVS supplies (isolation laundry bags & microfiber systems)'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Custom Branding Upsell */}
        <div className="mt-12 bg-white border border-slate-200/90 p-8 sm:p-10 rounded-2xl shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 text-left">
            <div className="p-3.5 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] shrink-0">
              <ShoppingBag strokeWidth={1.75} size={24} />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-1">
                Patient Discharge &amp; Welcome Kits
              </h3>
              <p className="text-sm text-slate-600 max-w-xl">
                Custom-branded tote bags for patient belongings, embroidered staff uniforms, and tailored clinic packaging programs.
              </p>
            </div>
          </div>
          <Link
            to="/custom-programs"
            className="inline-flex items-center gap-1.5 font-bold text-sm text-[var(--theme-color)] hover:underline shrink-0"
          >
            Explore Custom Branding <ArrowRight size={15} />
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-3.5">
          <Link
            to="/contact?inquiry=quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-bold text-sm sm:text-base text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] shadow-md transition-colors"
          >
            <span>Request Quote for Clinics</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/request-samples"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-semibold text-sm sm:text-base border border-slate-300 bg-white hover:border-[var(--theme-color)] hover:text-[var(--theme-color)] text-ink transition-colors"
          >
            <PackageCheck size={16} />
            <span>Request Physical Samples</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
