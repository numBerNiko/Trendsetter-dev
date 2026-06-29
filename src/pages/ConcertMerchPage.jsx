import React from 'react';
import { Shirt, Target, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConcertMerchPage() {
  return (
    <div className="bg-neutral-bg text-slate min-h-screen pb-20">
      
      {/* Hero */}
      <section className="bg-slate text-neutral-bg py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Concert Merch Store</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            High-quality merchandise programs for touring artists and concert venues. Premium blanks and tour-ready accessories.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10 hover:border-deep-teal transition-colors">
            <Shirt size={36} className="text-deep-teal mb-6" />
            <h3 className="text-2xl font-bold mb-4">Core Apparel</h3>
            <ul className="space-y-3 opacity-80 text-sm leading-relaxed">
              <li>• Short-sleeve tees (unisex, fitted, premium)</li>
              <li>• Long-sleeve tees, baseball tees</li>
              <li>• Hoodies (pullover/zip-up)</li>
              <li>• Crewneck sweatshirts</li>
              <li>• Tank tops, crop tops</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10 hover:border-deep-teal transition-colors">
            <Target size={36} className="text-deep-teal mb-6" />
            <h3 className="text-2xl font-bold mb-4">Headwear & Small Textiles</h3>
            <ul className="space-y-3 opacity-80 text-sm leading-relaxed">
              <li>• Beanies, knit caps</li>
              <li>• Baseball caps, dad hats</li>
              <li>• Bandanas, neck gaiters</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate/10 hover:border-deep-teal transition-colors">
            <Hand size={36} className="text-deep-teal mb-6" />
            <h3 className="text-2xl font-bold mb-4">Tour-Ready Accessories</h3>
            <ul className="space-y-3 opacity-80 text-sm leading-relaxed">
              <li>• Tote bags (canvas/cotton)</li>
              <li>• Drawstring backpacks</li>
              <li>• Fabric wristbands (VIP/all-access)</li>
              <li>• Woven/printed patches</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 bg-deep-teal/5 border border-deep-teal/20 rounded-2xl p-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate">Ready for Tour?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto text-slate">
            Our specialized tour merchandise division can handle bulk blank orders or full-service screen printing and embroidery specifically formatted for tour logistics.
          </p>
          <Link to="/contact" className="inline-block bg-deep-teal text-neutral-bg px-8 py-4 rounded-md font-bold text-lg hover:bg-slate transition-colors shadow-md">
            Request Tour Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
