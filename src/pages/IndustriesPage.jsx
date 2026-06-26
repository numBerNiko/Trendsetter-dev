import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IndustriesPage() {
  return (
    <section className="py-16 bg-walnut/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Target Operational Environments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div id="nursing-homes" className="bg-warm-linen border border-walnut/10 p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 group">
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-muted-sage transition-colors">Nursing Homes</h3>
            <p className="opacity-80 mb-6">Long-term care facilities requiring high-frequency laundering, ultimate comfort for residents, and uncompromising durability.</p>
            <Link to="/industries/nursing-homes" className="inline-flex items-center font-medium hover:text-muted-sage transition-colors">
              Explore Solutions <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          {/* Card 2 */}
          <div id="medical-clinics" className="bg-warm-linen border border-walnut/10 p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 group">
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-muted-sage transition-colors">Medical Clinics</h3>
            <p className="opacity-80 mb-6">Clinical environments demanding sanitary, resilient textiles engineered to withstand rigorous cleaning protocols.</p>
            <Link to="/industries/medical-clinics" className="inline-flex items-center font-medium hover:text-muted-sage transition-colors">
              Explore Solutions <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          {/* Card 3 */}
          <div id="hotels" className="bg-warm-linen border border-walnut/10 p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 group">
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-muted-sage transition-colors">Hotels</h3>
            <p className="opacity-80 mb-6">Hospitality settings where premium feel must intersect seamlessly with institutional-grade longevity and cost-efficiency.</p>
            <Link to="/industries/hotels" className="inline-flex items-center font-medium hover:text-muted-sage transition-colors">
              Explore Solutions <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
