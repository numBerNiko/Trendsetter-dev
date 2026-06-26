import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function MedicalClinicsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-24 bg-walnut text-warm-linen text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Textiles for Medical Clinics & Healthcare Facilities</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Clinical environments demand sanitary, resilient textiles engineered to withstand rigorous cleaning protocols. From scrubs to specialized barrier gowns, our solutions ensure compliance without sacrificing comfort.
          </p>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-warm-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-walnut mb-12">Essential Products for Clinics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Clinical Towels", img: "Bath_Mats_&_Pool_Towels.png", attrs: ["High GSM absorbency", "Reinforced edges", "Quick-drying fabric"] },
              { title: "Medical Uniforms & Scrubs", img: "professional_medical_scrubs.png", attrs: ["Industrial durability", "Stain-release tech", "Ergonomic cuts"] },
              { title: "Specialty Textiles & Gowns", img: "patient_gowns.png", attrs: ["Custom sizing", "Barrier properties", "Patient-specific gowns"] },
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
          <h2 className="text-4xl font-bold mb-6">Ready to Equip Your Clinic?</h2>
          <p className="text-xl mb-10 opacity-90">
            Get in touch with our sourcing experts today to discuss volume pricing and compliant medical textile solutions.
          </p>
          <Link to="/contact" className="bg-walnut text-warm-linen px-10 py-5 rounded-lg text-xl font-bold hover:bg-white hover:text-walnut transition-all shadow-lg inline-block">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
