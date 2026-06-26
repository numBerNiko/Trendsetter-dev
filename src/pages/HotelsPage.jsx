import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function HotelsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-24 bg-walnut text-warm-linen text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Textiles for Hotels & Hospitality</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Hospitality settings demand textiles where premium feel seamlessly intersects with institutional-grade longevity and cost-efficiency. Our hotel collections ensure your guests experience luxury, while your operations benefit from durability.
          </p>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-warm-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-walnut mb-12">Essential Products for Hospitality</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Premium Sheets", img: "cotton_bedsheets.png", attrs: ["Luxurious soft-touch blend", "Fade resistant", "T250+ Thread count"] },
              { title: "Blankets", img: "Clinical_Bedding_Essentials.png", attrs: ["Elegant design", "Thermal regulation", "Institutional wash safe"] },
              { title: "Robes & Towels", img: "premium_bathrobe.jpeg", attrs: ["Spa-quality GSM", "Reinforced edges", "Plush absorbency"] },
            ].map((product, idx) => (
              <div key={idx} className="bg-white border border-walnut/10 rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={`/Trendsetter-website-photos/${product.img}`} 
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col h-[calc(100%-14rem)]">
                  <h3 className="text-2xl font-bold mb-4 text-walnut">{product.title}</h3>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {product.attrs.map((attr, i) => (
                      <li key={i} className="flex items-start text-walnut opacity-80 font-medium">
                        <CheckCircle2 size={18} className="text-muted-sage mr-3 mt-0.5 flex-shrink-0" />
                        <span>{attr}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/products" className="inline-flex items-center font-bold text-walnut hover:text-muted-sage transition-colors">
                    View in Catalog <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted-sage text-walnut text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Elevate Your Guest Experience</h2>
          <p className="text-xl mb-10 opacity-90">
            Learn how our tailored hotel programs can optimize your operations and elevate guest satisfaction.
          </p>
          <Link to="/contact" className="bg-walnut text-warm-linen px-10 py-5 rounded-lg text-xl font-bold hover:bg-white hover:text-walnut transition-all shadow-lg inline-block">
            Schedule Presentation
          </Link>
        </div>
      </section>
    </div>
  );
}
