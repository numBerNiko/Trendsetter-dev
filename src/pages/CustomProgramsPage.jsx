import React from 'react';
import {
  Scissors,
  Tag,
  Package,
  Box,
  RefreshCcw,
  Download,
  ArrowRight,
  PackageCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRegion } from '../hooks/useRegion';

export default function CustomProgramsPage() {
  const region = useRegion();

  const capabilities = [
    {
      title: 'Private Labeling',
      desc: 'Launch your own property-branded line or equip multi-site hospitality and healthcare groups with custom-labeled textiles and bespoke care tags.',
      image: '/Trendsetter-website-photos/Private_Labeling.png',
      icon: Tag
    },
    {
      title: 'Custom Embroidery',
      desc: 'Strengthen your brand identity with precision logo embroidery and monogramming on towels, robes, scrubs, and uniforms with exact Pantone matching.',
      image: '/Trendsetter-website-photos/Bespoke_Embroidery_&_Monogramming.png',
      icon: Scissors
    },
    {
      title: 'Specialized Packaging',
      desc: 'From retail-ready bundling for resort boutiques to protective vacuum packing for clinical supply rooms, we tailor packaging to your intake workflow.',
      image: '/Trendsetter-website-photos/Tailored_Packaging_&_Bundling.png',
      icon: Package
    },
    {
      title: 'Bulk Order Fulfillment',
      desc: region.isPH
        ? 'Localized warehousing directly within our Laguna / Biñan & Metro Manila logistics corridor, ensuring linen closets stay stocked and large orders dispatch rapidly.'
        : 'Domestic US fulfillment reserves coordinated through Los Angeles, safeguarding your facilities against bottlenecks with scheduled recurring replenishment.',
      image: '/Trendsetter-website-photos/fulfillment_warehouse.png',
      icon: Box
    },
    {
      title: 'Sourcing & Weaving Flexibility',
      desc: 'Operating unique mattress depths, custom banquet drops, or proprietary fabric blends? Our mills adapt weaving and cutting dimensions to your tech pack.',
      image: '/Trendsetter-website-photos/Sourcing_&_Weaving_Flexibility.png',
      icon: RefreshCcw
    }
  ];

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
          src="/Trendsetter-website-photos/Bespoke_Embroidery_&_Monogramming.png"
          alt="Custom institutional textile manufacturing"
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C49A45]/20 border border-[#C49A45]/40 text-[#DFC07A] text-xs font-bold uppercase tracking-wider mb-5">
            Custom Manufacturing &amp; Private Label
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Flexible Customization for Institutional Buyers
          </h1>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            Bespoke weaving, Pantone-matched embroidery, private labeling, and tailored logistics built around your facility&apos;s exact specifications.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-xl hover:border-[var(--theme-color)]/40 transition-all overflow-hidden flex flex-col"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex-grow flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-4">
                    <Icon strokeWidth={1.75} size={22} />
                  </div>
                  <h2 className="font-display text-xl font-bold mb-2.5 text-ink">
                    {cap.title}
                  </h2>
                  <p className="leading-relaxed text-sm text-slate-600">{cap.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Assurance Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9A7426] mb-2">
              Quality Engineering
            </p>
            <h2 className="font-display text-3xl font-bold text-ink">
              The Engineering Behind Our Craftsmanship
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs text-left">
              <h3 className="font-display text-lg font-bold mb-3 text-ink">
                Collar Recovery &amp; Anti-Deformation
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                We eliminate collar curling in our knitwear. Collars are engineered with elastane-blended ribbing for consistent recovery and lay-flat geometry after industrial laundering.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs text-left">
              <h3 className="font-display text-lg font-bold mb-3 text-ink">
                Strict Geometrical Tolerances
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                While standard retail tolerances allow up to 1/2-inch variance, we enforce tight 1/4-inch to 1/8-inch manufacturing tolerances so every bulk delivery matches your master pattern.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs text-left">
              <h3 className="font-display text-lg font-bold mb-3 text-ink">
                Statistical Quality Verification (AQL)
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Every clinical and hospitality production batch undergoes Acceptable Quality Level (AQL) sampling for stitch density (SPI), tensile strength, and seam durability.
              </p>
            </div>
          </div>
        </div>

        {/* Start Your Custom Project CTA */}
        <div
          className="rounded-2xl p-8 sm:p-12 text-center shadow-lg text-white"
          style={{ backgroundColor: region.theme.primaryDark }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-white">
            Start Your Custom Textile Program
          </h2>
          <p className="text-sm sm:text-base mb-8 max-w-2xl mx-auto text-white/80 leading-relaxed">
            Our procurement specialists are ready to review your tech packs, provide physical fabric swatches, or help develop specifications from scratch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3.5 items-center">
            <Link
              to="/contact?inquiry=custom"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm sm:text-base bg-[#C49A45] hover:bg-[#DFC07A] text-[#0F172A] shadow-md transition-colors"
            >
              <span>Start Custom Order</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/request-samples"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base bg-white/10 hover:bg-white/20 border border-white/25 text-white transition-colors"
            >
              <PackageCheck size={16} />
              <span>Request Physical Samples</span>
            </Link>
            <a
              href={region.catalogueUrl}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base border border-white/25 text-white hover:bg-white hover:text-ink transition-colors"
            >
              <Download strokeWidth={1.75} size={16} />
              <span>PDF Catalogue</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
