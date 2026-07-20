import React from 'react';
import { Scissors, Tag, Package, Box, RefreshCcw, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRegion } from '../hooks/useRegion';

export default function CustomProgramsPage() {
  const region = useRegion();
  return (
    <section className="py-12 md:py-20 bg-neutral-bg text-slate min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ '--theme-color': region.theme.primaryBg }}>
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[var(--theme-color)]">Flexible Customization for Institutional Buyers</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-neutral-800">
            Bespoke textile solutions for institutional branding and specialized operational requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          
          <div className="bg-white border border-slate/10 rounded-2xl shadow-sm hover:shadow-md hover:border-deep-teal transition-all overflow-hidden flex flex-col">
            <img src="/Trendsetter-website-photos/Private_Labeling.png" alt="Private Labeling" className="w-full h-48 object-cover" />
            <div className="p-8 flex-grow">
              <div className="bg-neutral-bg w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-slate/5">
                <Tag strokeWidth={1.5} size={28} className="text-[var(--theme-color)]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--theme-color)]">Private Labeling</h2>
              <p className="leading-relaxed text-sm text-neutral-800">
                Launch your own property-branded retail line or equip your nationwide hotel chain with exclusive custom-labeled textiles, complete with bespoke care tags.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate/10 rounded-2xl shadow-sm hover:shadow-md hover:border-deep-teal transition-all overflow-hidden flex flex-col">
            <img src="/Trendsetter-website-photos/Bespoke_Embroidery_&_Monogramming.png" alt="Custom Embroidery" className="w-full h-48 object-cover" />
            <div className="p-8 flex-grow">
              <div className="bg-neutral-bg w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-slate/5">
                <Scissors strokeWidth={1.5} size={28} className="text-[var(--theme-color)]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--theme-color)]">Custom Embroidery</h2>
              <p className="leading-relaxed text-sm text-neutral-800">
                Enhance your property's brand identity with precision logo embroidery on towels, robes, and uniforms. Exact Pantone matching available.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate/10 rounded-2xl shadow-sm hover:shadow-md hover:border-deep-teal transition-all overflow-hidden flex flex-col">
            <img src="/Trendsetter-website-photos/Tailored_Packaging_&_Bundling.png" alt="Specialized Packaging" className="w-full h-48 object-cover" />
            <div className="p-8 flex-grow">
              <div className="bg-neutral-bg w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-slate/5">
                <Package strokeWidth={1.5} size={28} className="text-[var(--theme-color)]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--theme-color)]">Specialized Packaging</h2>
              <p className="leading-relaxed text-sm text-neutral-800">
                From retail-ready bundling for resort boutiques to sterilized vacuum packing for medical facilities, we adapt packaging to your needs.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate/10 rounded-2xl shadow-sm hover:shadow-md hover:border-deep-teal transition-all overflow-hidden flex flex-col">
            <img src="/Trendsetter-website-photos/fulfillment_warehouse.png" alt="Bulk Order Fulfillment" className="w-full h-48 object-cover" />
            <div className="p-8 flex-grow">
              <div className="bg-neutral-bg w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-slate/5">
                <Box strokeWidth={1.5} size={28} className="text-[var(--theme-color)]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--theme-color)]">Bulk Order Fulfillment</h2>
              <p className="leading-relaxed text-sm text-neutral-800">
                Massive localized warehousing directly within Metro Manila, ensuring your linen closets are never empty and large orders are fulfilled quickly.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate/10 rounded-2xl shadow-sm hover:shadow-md hover:border-deep-teal transition-all overflow-hidden flex flex-col">
            <img src="/Trendsetter-website-photos/Sourcing_&_Weaving_Flexibility.png" alt="Sourcing Flexibility" className="w-full h-48 object-cover" />
            <div className="p-8 flex-grow">
              <div className="bg-neutral-bg w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-slate/5">
                <RefreshCcw strokeWidth={1.5} size={28} className="text-[var(--theme-color)]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--theme-color)]">Sourcing Flexibility</h2>
              <p className="leading-relaxed text-sm text-neutral-800">
                Operating unique mattress depths or require specific proprietary blends? Our facilities can adapt weaving and cutting dimensions to your specifications.
              </p>
            </div>
          </div>

        </div>

        {/* Quality Assurance Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-[var(--theme-color)]">The Engineering Behind Our Craftsmanship</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl border border-slate/10 shadow-sm text-left">
              <h3 className="text-xl font-bold mb-4 text-[var(--theme-color)]">Collar Recovery & Anti-Deformation</h3>
              <p className="text-sm leading-relaxed text-neutral-800">
                We eliminate 'bacon neck' in our knit wear. All collars are engineered with spandex/elastane-blended ribbing to ensure 100% elastic recovery and lay-flat geometry after industrial laundering.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate/10 shadow-sm text-left">
              <h3 className="text-xl font-bold mb-4 text-[var(--theme-color)]">Strict Geometrical Tolerances</h3>
              <p className="text-sm leading-relaxed text-neutral-800">
                While the standard fast-fashion tolerance is up to 1/2-inch variance, we enforce strict 1/4-inch to 1/8-inch manufacturing tolerances. Every bulk delivery aligns perfectly with your master pattern.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate/10 shadow-sm text-left">
              <h3 className="text-xl font-bold mb-4 text-[var(--theme-color)]">Statistical Quality Verification (AQL)</h3>
              <p className="text-sm leading-relaxed text-neutral-800">
                We utilize rigorous Acceptable Quality Level (AQL) statistical sampling standards. Every batch destined for clinical or hospitality use undergoes systematic stress testing for stitch density (SPI) and seam strength.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-center max-w-4xl mx-auto shadow-xl text-white" style={{ backgroundColor: region.theme.primaryBg }}>
          <h2 className="text-3xl font-bold mb-6 text-white">Start Your Custom Project</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white font-medium opacity-100">
            Our procurement engineers are ready to review your tech packs or help develop specifications from scratch. 
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link to="/contact" className="inline-block px-10 py-4 rounded-lg font-bold text-lg uppercase tracking-wider transition-colors shadow-md bg-[#F5F5DC] hover:opacity-80" style={{ color: region.theme.primaryBg }}>
              START CUSTOM ORDER
            </Link>
            <a 
              href="/Trendsetter_Textiles_Catalog.pdf" 
              download
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg font-bold text-lg uppercase tracking-wider transition-colors shadow-sm border-2 border-white text-white hover:bg-white hover:text-slate"
            >
              <Download strokeWidth={1.5} size={20} /> PDF CATALOG
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
