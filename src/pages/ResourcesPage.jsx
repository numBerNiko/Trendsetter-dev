import React from 'react';
import { BookOpen, AlertTriangle, Lightbulb } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <section className="py-20 bg-warm-linen text-walnut min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">B2B Resources & Hub</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Expert insights, care optimization guides, and procurement tips to maximize the ROI on your textile investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div id="care-guides" className="bg-white border border-walnut/10 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all scroll-mt-32">
            <AlertTriangle size={32} className="text-muted-sage mb-6" />
            <h3 className="text-2xl font-bold mb-3">Commercial Care Guides</h3>
            <p className="opacity-80 mb-6 text-sm leading-relaxed">
              Prevent premature degradation. Learn the optimal wash temperatures, chemical balances, and extraction settings for T250 percales vs. Terry towels.
            </p>
            <button className="text-muted-sage font-bold hover:text-walnut transition-colors">Download PDF Guide &rarr;</button>
          </div>

          <div id="procurement-tips" className="bg-white border border-walnut/10 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all scroll-mt-32">
            <BookOpen size={32} className="text-muted-sage mb-6" />
            <h3 className="text-2xl font-bold mb-3">Procurement Best Practices</h3>
            <p className="opacity-80 mb-6 text-sm leading-relaxed">
              How to calculate PAR levels correctly for a 200-bed hospital vs. a 500-room luxury resort to avoid stockouts and over-expenditure.
            </p>
            <button className="text-muted-sage font-bold hover:text-walnut transition-colors">Read Article &rarr;</button>
          </div>

          <div id="innovations" className="bg-white border border-walnut/10 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all scroll-mt-32">
            <Lightbulb size={32} className="text-muted-sage mb-6" />
            <h3 className="text-2xl font-bold mb-3">Textile Innovations</h3>
            <p className="opacity-80 mb-6 text-sm leading-relaxed">
              Understanding the ROI of adopting quick-dry micro-cotton blends and fluid-resistant barrier fabrics in high-turnover clinical environments.
            </p>
            <button className="text-muted-sage font-bold hover:text-walnut transition-colors">Read Article &rarr;</button>
          </div>

        </div>
      </div>
    </section>
  );
}
