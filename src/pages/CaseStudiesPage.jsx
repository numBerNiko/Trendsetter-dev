import React from 'react';
import { TrendingDown, Truck, Users, Building2 } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <section className="py-20 bg-white text-walnut min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Institutional Case Studies</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Discover how Metro Manila's leading hotels and hospital networks optimized their supply chains and reduced operational costs with Trendsetter Textiles.
          </p>
        </div>

        {/* Featured Case Study: Hilton Manila */}
        <div className="bg-warm-linen rounded-3xl overflow-hidden border border-walnut/10 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-muted-sage font-bold tracking-widest uppercase text-sm mb-6">
                <Building2 size={20} /> Hospitality Sector
              </div>
              <h2 className="text-4xl font-bold mb-6">Hilton Manila: Elevating Guest Experience while Reducing Replacement Costs</h2>
              <p className="text-lg opacity-80 mb-10 leading-relaxed">
                Hilton Manila required a vendor capable of supplying ultra-premium 400TC sateen linens that could withstand rigorous industrial laundering without pilling or fading. Trendsetter implemented a custom weaving program backed by strict SLA guarantees.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 text-2xl font-bold text-walnut mb-2">
                    <TrendingDown className="text-muted-sage" /> 18%
                  </div>
                  <p className="text-sm font-medium opacity-70 uppercase tracking-wide">Reduction in Annual Linen Replacement Costs</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-2xl font-bold text-walnut mb-2">
                    <Users className="text-muted-sage" /> 99%
                  </div>
                  <p className="text-sm font-medium opacity-70 uppercase tracking-wide">Positive Guest Satisfaction on Sleep Quality</p>
                </div>
              </div>
            </div>
            
            <div className="relative min-h-[400px] lg:min-h-full">
              <img 
                src="/Trendsetter-website-photos/modern_bedroom.png" 
                alt="Luxury hotel bedroom showcasing premium linens" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Secondary Case Study: Local Clinic Network */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="bg-white border border-walnut/20 rounded-2xl p-10 shadow-lg">
            <div className="flex items-center gap-2 text-muted-sage font-bold tracking-widest uppercase text-sm mb-6">
              <Building2 size={16} /> Healthcare Sector
            </div>
            <h3 className="text-2xl font-bold mb-4">Metro Manila Clinic Network</h3>
            <p className="opacity-80 leading-relaxed mb-8">
              A fast-growing network of 45 outpatient clinics struggled with inconsistent uniform quality and delayed gown deliveries from overseas suppliers. Trendsetter localized their inventory and standardized their scrubs.
            </p>
            <div className="bg-warm-linen/50 p-6 rounded-xl border border-walnut/5">
              <div className="flex items-center gap-3 text-xl font-bold text-walnut mb-1">
                <Truck className="text-muted-sage" /> Next-Day Fulfillment
              </div>
              <p className="text-sm opacity-80">Achieved 100% SLA compliance for emergency restocks across all 45 Metro Manila locations.</p>
            </div>
          </div>

          <div className="bg-walnut text-warm-linen rounded-2xl p-10 shadow-lg flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to achieve similar results?</h3>
            <p className="opacity-90 mb-8 text-lg">Let our procurement engineers audit your current textile expenditure and propose an optimized supply program.</p>
            <button className="bg-muted-sage text-walnut px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors w-full sm:w-auto">
              Schedule an Audit
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
