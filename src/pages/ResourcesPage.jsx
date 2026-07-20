import React from 'react';
import { BookOpen, AlertTriangle, Lightbulb } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

export default function ResourcesPage() {
  const region = useRegion();

  return (
    <section className="py-20 bg-neutral-bg/30 text-slate min-h-screen" style={{ '--theme-color': region.theme.primaryBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate">B2B Resources & Hub</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Expert insights, care optimization guides, and procurement tips to maximize the ROI on your textile investments.
          </p>
        </div>

        {/* Featured Resource Lead Magnet */}
        <div className="bg-white border-2 rounded-2xl p-8 md:p-10 mb-12 shadow-md flex flex-col md:flex-row justify-between items-center gap-8 text-left" style={{ borderColor: region.theme.primaryBg }}>
          <div className="flex-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 text-white" style={{ backgroundColor: region.theme.primaryBg }}>
              Featured Resource
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate">
              The Institutional Buyer's Guide to Commercial Laundering & Fabric Architecture
            </h2>
            <p className="opacity-90 text-sm md:text-base leading-relaxed text-slate font-medium">
              Learn the truth behind the thread count myth, the chemistry of wash-stable reactive dyes, and how to spot low-grade cotton fibers.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto text-center">
            <button className="w-full md:w-auto px-8 py-4 rounded-md font-bold uppercase tracking-wider text-sm shadow-md border-2 border-[var(--theme-color)] text-white bg-[var(--theme-color)] hover:bg-transparent hover:text-[var(--theme-color)] transition-all duration-300 ease-in-out">
              Download Free Procurement PDF
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div id="care-guides" className="bg-white border border-slate/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all scroll-mt-32">
            <AlertTriangle strokeWidth={1.5} size={32} className="mb-6" style={{ color: region.theme.primaryBg }} />
            <h3 className="text-2xl font-bold mb-3 text-slate">Commercial Care Guides</h3>
            <p className="opacity-80 mb-6 text-sm leading-relaxed text-slate">
              Prevent premature degradation. Learn the optimal wash temperatures, chemical balances, and extraction settings for T250 percales vs. Terry towels.
            </p>
            <button className="font-bold hover:underline transition-colors" style={{ color: region.theme.primaryBg }}>Download PDF Guide &rarr;</button>
          </div>

          <div id="procurement-tips" className="bg-white border border-slate/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all scroll-mt-32">
            <BookOpen strokeWidth={1.5} size={32} className="mb-6" style={{ color: region.theme.primaryBg }} />
            <h3 className="text-2xl font-bold mb-3 text-slate">Procurement Best Practices</h3>
            <p className="opacity-80 mb-6 text-sm leading-relaxed text-slate">
              How to calculate PAR levels correctly for a 200-bed hospital vs. a 500-room luxury resort to avoid stockouts and over-expenditure.
            </p>
            <button className="font-bold hover:underline transition-colors" style={{ color: region.theme.primaryBg }}>Read Article &rarr;</button>
          </div>

          <div id="innovations" className="bg-white border border-slate/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all scroll-mt-32">
            <Lightbulb strokeWidth={1.5} size={32} className="mb-6" style={{ color: region.theme.primaryBg }} />
            <h3 className="text-2xl font-bold mb-3 text-slate">Textile Innovations</h3>
            <p className="opacity-80 mb-6 text-sm leading-relaxed text-slate">
              Understanding the ROI of adopting quick-dry micro-cotton blends and fluid-resistant barrier fabrics in high-turnover clinical environments.
            </p>
            <button className="font-bold hover:underline transition-colors" style={{ color: region.theme.primaryBg }}>Read Article &rarr;</button>
          </div>

        </div>
      </div>
    </section>
  );
}
