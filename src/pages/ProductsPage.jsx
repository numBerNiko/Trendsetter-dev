import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  BedDouble, 
  ShieldCheck, 
  Bath, 
  Shirt, 
  Tag 
} from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="bg-neutral-bg text-slate min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate text-neutral-bg py-24 text-center border-b-8 border-deep-teal">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Commercial Textile Products</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Browse our core product categories. Engineered for intense laundering cycles, optimal comfort, and uncompromising reliability.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-slate/5">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate">Product Categories</h2>
            <div className="w-24 h-1 bg-deep-teal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Sheets", 
                icon: <BedDouble size={48} className="text-deep-teal opacity-80" />, 
                bullets: ["Up to 600TC durability", "Resists industrial laundering", "Consistent PAR supply", "Twin to King sizing available"] 
              },
              { 
                title: "Blankets", 
                icon: <BedDouble size={48} className="text-deep-teal opacity-80" />, 
                bullets: ["Thermal retention", "Snag-free knits", "Bulk fulfillment ready", "Cellular and heavy-weight options"] 
              },
              { 
                title: "Pillows", 
                icon: <ShieldCheck size={48} className="text-deep-teal opacity-80" />, 
                bullets: ["Hypoallergenic fills", "Shape-retaining core", "Fluid-resistant options", "Wipe-clean FR ticking available"] 
              },
              { 
                title: "Towels", 
                icon: <Bath size={48} className="text-deep-teal opacity-80" />, 
                bullets: ["High GSM absorbency", "Double-stitched hems", "Quick-dry loops", "Regular and oversized bath towels"] 
              },
              { 
                title: "Uniforms", 
                icon: <Shirt size={48} className="text-deep-teal opacity-80" />, 
                bullets: ["Stain-release finishes", "Breathable scrub fabrics", "Ergonomic fits", "Custom embroidery ready"] 
              },
              { 
                title: "Merchandise", 
                icon: <Tag size={48} className="text-deep-teal opacity-80" />, 
                bullets: ["T-shirts & Sweatshirts", "Hats & Beanies", "Custom branding available", "Tour-ready accessories"] 
              },
            ].map((product, idx) => (
              <div key={idx} className="bg-white border border-slate/10 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col h-full items-center text-center">
                <div className="mb-6 bg-slate/5 p-4 rounded-full">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate mb-4">{product.title}</h3>
                <ul className="space-y-3 opacity-80 text-sm flex-grow mb-6 text-left w-full">
                  {product.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 size={18} className="text-deep-teal mr-3 mt-0.5 shrink-0" /> 
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-deep-teal text-neutral-bg p-12 rounded-2xl text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Request Our Full Digital Catalog</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Our comprehensive catalog includes detailed technical specifications, GSM ratings, and material safety data for all products.
            </p>
            <Link to="/contact" className="inline-block bg-neutral-bg text-deep-teal px-10 py-4 rounded-md font-bold text-lg hover:bg-slate hover:text-neutral-bg transition-colors shadow-md">
              Download Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
