import React from 'react';
import { Scissors, Tag, Package, Box, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRegion } from '../hooks/useRegion';

export default function CustomProgramsPage() {
  const region = useRegion();
  return (
    <section className="py-12 md:py-20 bg-neutral-bg text-slate min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Flexible Customization for Institutional Buyers</h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Bespoke textile solutions for institutional branding and specialized operational requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          
          <div className="bg-white border border-slate/10 rounded-2xl shadow-sm hover:shadow-md hover:border-deep-teal transition-all overflow-hidden flex flex-col">
            <img src="/Trendsetter-website-photos/Private_Labeling.png" alt="Private Labeling" className="w-full h-48 object-cover" />
            <div className="p-8 flex-grow">
              <div className="bg-neutral-bg w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-slate/5">
                <Tag size={28} className="text-deep-teal" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Private Labeling</h2>
              <p className="opacity-80 leading-relaxed text-sm">
                Launch your own property-branded retail line or equip your nationwide hotel chain with exclusive custom-labeled textiles, complete with bespoke care tags.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate/10 rounded-2xl shadow-sm hover:shadow-md hover:border-deep-teal transition-all overflow-hidden flex flex-col">
            <img src="/Trendsetter-website-photos/Bespoke_Embroidery_&_Monogramming.png" alt="Custom Embroidery" className="w-full h-48 object-cover" />
            <div className="p-8 flex-grow">
              <div className="bg-neutral-bg w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-slate/5">
                <Scissors size={28} className="text-deep-teal" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Custom Embroidery</h2>
              <p className="opacity-80 leading-relaxed text-sm">
                Enhance your property's brand identity with precision logo embroidery on towels, robes, and uniforms. Exact Pantone matching available.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate/10 rounded-2xl shadow-sm hover:shadow-md hover:border-deep-teal transition-all overflow-hidden flex flex-col">
            <img src="/Trendsetter-website-photos/Tailored_Packaging_&_Bundling.png" alt="Specialized Packaging" className="w-full h-48 object-cover" />
            <div className="p-8 flex-grow">
              <div className="bg-neutral-bg w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-slate/5">
                <Package size={28} className="text-deep-teal" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Specialized Packaging</h2>
              <p className="opacity-80 leading-relaxed text-sm">
                From retail-ready bundling for resort boutiques to sterilized vacuum packing for medical facilities, we adapt packaging to your needs.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate/10 rounded-2xl shadow-sm hover:shadow-md hover:border-deep-teal transition-all overflow-hidden flex flex-col">
            <img src="/Trendsetter-website-photos/fulfillment_warehouse.png" alt="Bulk Order Fulfillment" className="w-full h-48 object-cover" />
            <div className="p-8 flex-grow">
              <div className="bg-neutral-bg w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-slate/5">
                <Box size={28} className="text-deep-teal" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Bulk Order Fulfillment</h2>
              <p className="opacity-80 leading-relaxed text-sm">
                Massive localized warehousing directly within Metro Manila, ensuring your linen closets are never empty and large orders are fulfilled quickly.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate/10 rounded-2xl shadow-sm hover:shadow-md hover:border-deep-teal transition-all overflow-hidden flex flex-col">
            <img src="/Trendsetter-website-photos/Sourcing_&_Weaving_Flexibility.png" alt="Sourcing Flexibility" className="w-full h-48 object-cover" />
            <div className="p-8 flex-grow">
              <div className="bg-neutral-bg w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-slate/5">
                <RefreshCcw size={28} className="text-deep-teal" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Sourcing Flexibility</h2>
              <p className="opacity-80 leading-relaxed text-sm">
                Operating unique mattress depths or require specific proprietary blends? Our facilities can adapt weaving and cutting dimensions to your specifications.
              </p>
            </div>
          </div>

        </div>

        <div className="rounded-2xl p-12 text-center max-w-4xl mx-auto shadow-xl text-white" style={{ backgroundColor: region.theme.primaryBg }}>
          <h2 className="text-3xl font-bold mb-6 text-white">Start Your Custom Project</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white font-medium opacity-100">
            Our procurement engineers are ready to review your tech packs or help develop specifications from scratch. 
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 rounded-lg font-bold text-lg uppercase tracking-wider transition-colors shadow-md bg-[#F5F5DC] hover:opacity-80" style={{ color: region.theme.primaryBg }}>
            START CUSTOM ORDER
          </Link>
        </div>
      </div>
    </section>
  );
}
