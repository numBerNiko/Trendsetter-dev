import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function NursingHomesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-24 bg-walnut text-warm-linen text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Textiles for Nursing Homes & Long-Term Care</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Long-term care facilities require high-frequency laundering, ultimate comfort for residents, and uncompromising durability. Our specialized product lines are engineered to withstand rigorous daily use while ensuring the highest level of patient comfort.
          </p>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-warm-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-walnut mb-12">Essential Products for Your Facility</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sheets & Bedding", img: "cotton_bedsheets.png", attrs: ["Soft-touch blend", "Fade resistant", "T250+ Thread count"] },
              { title: "Blankets", img: "Clinical_Bedding_Essentials.png", attrs: ["Thermal regulation", "Snag-free knit", "Institutional wash safe"] },
              { title: "Pillows", img: "Luxury_Pillows.png", attrs: ["Hypoallergenic", "Fluid resistant shell", "Firm shape retention"] },
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
          <h2 className="text-4xl font-bold mb-6">Experience Our Quality Firsthand</h2>
          <p className="text-xl mb-10 opacity-90">
            Request a customized sample pack tailored to the specific needs of your nursing home or long-term care facility.
          </p>
          <Link to="/request-samples" className="bg-walnut text-warm-linen px-10 py-5 rounded-lg text-xl font-bold hover:bg-white hover:text-walnut transition-all shadow-lg inline-block">
            Request Samples
          </Link>
        </div>
      </section>
    </div>
  );
}
