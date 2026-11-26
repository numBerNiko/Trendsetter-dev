import React from 'react';
import {
  BedDouble,
  Bath,
  Shirt,
  Target,
  CheckCircle2,
  UtensilsCrossed,
  Download,
  ArrowRight,
  PackageCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRegion } from '../hooks/useRegion';
import IndustryTabs from '../components/IndustryTabs';

export default function HotelsPage() {
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
          src="/Trendsetter-website-photos/premium_bathrobe.jpeg"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          alt="Hospitality linens and hotel bathrobes"
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
            Hospitality, Resorts &amp; F&amp;B
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Hospitality Linens Designed for Guest Comfort &amp; Brand Presentation
          </h1>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            Premium guest room bedding, 500–650 GSM bath terry, spa robes, and standardized F&amp;B banquet textiles engineered for commercial durability.
          </p>
        </div>
      </section>

      <IndustryTabs />

      {/* Categories */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/90 hover:border-[var(--theme-color)]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-6">
              <BedDouble strokeWidth={1.75} size={26} />
            </div>
            <h2 className="font-display text-xl font-bold text-ink mb-5">
              Guest Bedding Suite
            </h2>
            <ul className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              {[
                'High thread-count flat & fitted sheets',
                'Premium duvet covers and inserts',
                'Luxury pillows (down & hypoallergenic alternatives)',
                'Waterproof mattress protectors'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/90 hover:border-[var(--theme-color)]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-6">
              <Bath strokeWidth={1.75} size={26} />
            </div>
            <h2 className="font-display text-xl font-bold text-ink mb-5">
              Bath &amp; Spa Suite
            </h2>
            <ul className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              {[
                'Oversized 500–650 GSM premium bath towels',
                'Hand towels & soft washcloths',
                'Plush waffle and terry spa robes',
                'Heavy-duty pool and beach towels'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/90 hover:border-[var(--theme-color)]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-6">
              <Shirt strokeWidth={1.75} size={26} />
            </div>
            <h2 className="font-display text-xl font-bold text-ink mb-5">
              Facility &amp; Staff Essentials
            </h2>
            <ul className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              {[
                'Front desk and management uniforms',
                'Housekeeping scrubs and aprons',
                'Fine dining and banquet linens',
                'Maintenance and back-of-house workwear'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 strokeWidth={1.75} size={18} className="text-[var(--theme-color)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* F&B / Restaurant & Banquet Collection */}
        <div className="mt-14 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs text-left">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-200">
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white mb-3"
                style={{ backgroundColor: region.theme.primaryBg }}
              >
                <UtensilsCrossed size={13} />
                <span>F&amp;B / Restaurant Collection ({region.measurementSystem})</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                Restaurant, Banquet &amp; Culinary Textiles
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl">
                {region.fbCollection.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/products/fb-restaurant"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] transition-colors"
              >
                <span>Full F&amp;B Category</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={region.catalogueUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm border border-slate-300 text-ink hover:border-[var(--theme-color)] hover:text-[var(--theme-color)] transition-colors"
              >
                <Download size={14} />
                <span>PDF Catalogue</span>
              </a>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <th className="py-3 px-4">SKU #</th>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Material</th>
                  <th className="py-3 px-4">Size / Fit</th>
                  <th className="py-3 px-4">{region.fbCollection.unitLabel}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {region.fbCollection.items.map((item) => (
                  <tr key={item.sku} className="hover:bg-linen/70 transition-colors">
                    <td
                      className="py-3 px-4 font-mono font-bold whitespace-nowrap"
                      style={{ color: region.theme.primaryBg }}
                    >
                      {item.sku}
                    </td>
                    <td className="py-3 px-4 font-semibold text-ink">{item.name}</td>
                    <td className="py-3 px-4 text-slate-600">{item.material}</td>
                    <td className="py-3 px-4 text-slate-600 whitespace-nowrap">{item.sizeLabel}</td>
                    <td className="py-3 px-4 font-semibold text-ink whitespace-nowrap">{item.dimensions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Procurement Spec Box */}
        <div className="mt-10 bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center gap-6 text-left">
          <div className="bg-[var(--theme-color)]/10 p-4 rounded-xl shrink-0 text-[var(--theme-color)]">
            <BedDouble strokeWidth={1.75} size={32} />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-ink mb-1.5">
              The Science of Hotel Sleep
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              We offer both Crisp Percale (cool, matte, breathable weave) and Silky Sateen (warmer, lustrous drape) woven strictly with extra-long staple (ELS) fibers—zero short-staple filler cotton for a luxury hand-feel that resists pilling.
            </p>
          </div>
        </div>

        {/* Custom Private Labeling CTA */}
        <div
          className="mt-12 rounded-2xl p-8 sm:p-10 text-center text-white shadow-lg"
          style={{ backgroundColor: region.theme.primaryDark }}
        >
          <Target strokeWidth={1.75} size={28} className="mx-auto mb-3 text-[#DFC07A]" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Custom Private Labeling &amp; Monogramming
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-7 max-w-2xl mx-auto">
            Elevate your property&apos;s identity with precision logo embroidery on robes, bath towels, banquet linens, and staff uniforms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5">
            <Link
              to="/contact?inquiry=quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm sm:text-base bg-[#C49A45] hover:bg-[#DFC07A] text-[#0F172A] transition-colors"
            >
              <span>Request Hospitality Quote</span>
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
