import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Handshake, 
  Settings, 
  ChevronRight,
  ChevronLeft,
  Quote,
  CheckCircle2,
  Award
} from 'lucide-react';

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "Durability and wash-stability exceeded expectations.",
      author: "Director of Environmental Services",
      facility: "200-bed Care Facility"
    },
    {
      quote: "Reliable supply chain and consistent quality.",
      author: "Hospitality Procurement VP",
      facility: "National Hotel Chain"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. Hero Section */}
      <section 
        className="relative py-32 lg:py-56 bg-walnut text-warm-linen overflow-hidden"
        style={{ 
          backgroundImage: "linear-gradient(rgba(30, 20, 15, 0.3), rgba(30, 20, 15, 0.3)), url('/Trendsetter-website-photos/cotton_bedsheets.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mx-auto mb-6"
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
          >
            Commercial textiles for care facilities and hospitality spaces — dependable bedding, towels, uniforms, and custom programs for nursing homes, clinics, and hotels.
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link to="/contact" className="bg-muted-sage text-walnut px-8 py-4 rounded-md text-lg font-bold shadow-lg hover:bg-white transition-colors duration-300">
              Request a Quote
            </Link>
            <Link to="/request-samples" className="bg-transparent text-warm-linen border-2 border-warm-linen px-8 py-4 rounded-md text-lg font-bold shadow-lg hover:bg-warm-linen hover:text-walnut transition-colors duration-300 backdrop-blur-sm">
              Request Samples
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Industry Cards */}
      <section className="py-24 bg-warm-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-walnut mb-4">Target Environments</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto text-walnut">Tailored textile solutions engineered for the specific demands of your facility.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-walnut/10 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-walnut group-hover:text-muted-sage transition-colors">Nursing Homes</h3>
              <p className="opacity-80 mb-8 flex-grow text-lg text-walnut">Comfortable, durable linens designed for long-term care.</p>
              <Link to="/industries/nursing-homes" className="inline-flex items-center font-bold text-walnut group-hover:text-muted-sage transition-colors">
                Explore Solutions <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-white border border-walnut/10 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-walnut group-hover:text-muted-sage transition-colors">Medical Clinics</h3>
              <p className="opacity-80 mb-8 flex-grow text-lg text-walnut">Hygienic, compliant textiles for clinical environments.</p>
              <Link to="/industries/medical-clinics" className="inline-flex items-center font-bold text-walnut group-hover:text-muted-sage transition-colors">
                Explore Solutions <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-white border border-walnut/10 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-walnut group-hover:text-muted-sage transition-colors">Hotels</h3>
              <p className="opacity-80 mb-8 flex-grow text-lg text-walnut">Luxury feel with institutional-grade longevity.</p>
              <Link to="/industries/hotels" className="inline-flex items-center font-bold text-walnut group-hover:text-muted-sage transition-colors">
                Explore Solutions <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Product Categories */}
      <section className="py-24 bg-white border-y border-walnut/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-walnut mb-4">Featured Categories</h2>
            <p className="text-lg opacity-80 text-walnut max-w-2xl mx-auto">Explore our core product lines built for high-volume commercial laundering.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sheets & Bedding", img: "cotton_bedsheets.png", attrs: ["Soft-touch blend", "Fade resistant", "T250+ Thread count"] },
              { title: "Blankets", img: "Clinical_Bedding_Essentials.png", attrs: ["Thermal regulation", "Snag-free knit", "Institutional wash safe"] },
              { title: "Pillows", img: "Luxury_Pillows.png", attrs: ["Hypoallergenic", "Fluid resistant shell", "Firm shape retention"] },
              { title: "Towels", img: "Bath_Mats_&_Pool_Towels.png", attrs: ["High GSM absorbency", "Reinforced edges", "Quick-drying fabric"] },
              { title: "Uniforms", img: "professional_medical_scrubs.png", attrs: ["Industrial durability", "Stain-release tech", "Ergonomic cuts"] },
              { title: "Specialty Textiles", img: "patient_gowns.png", attrs: ["Custom sizing", "Barrier properties", "Patient-specific gowns"] },
            ].map((product, idx) => (
              <Link key={idx} to="/products" className="group block bg-warm-linen border border-walnut/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-muted-sage">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={`/Trendsetter-website-photos/${product.img}`} 
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-walnut/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-walnut group-hover:text-muted-sage transition-colors">{product.title}</h3>
                  <ul className="space-y-2 mb-2">
                    {product.attrs.map((attr, i) => (
                      <li key={i} className="flex items-start text-sm text-walnut opacity-80 font-medium">
                        <CheckCircle2 size={16} className="text-muted-sage mr-2 mt-0.5 flex-shrink-0" />
                        <span>{attr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Buyers Choose Us */}
      <section className="py-24 bg-walnut text-warm-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Buyers Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col">
              <ShieldCheck size={48} className="text-muted-sage mb-6" />
              <h3 className="text-2xl font-bold mb-3">Reliability</h3>
              <p className="opacity-80 text-lg leading-relaxed">99.8% on-time delivery rates with rigorous batch-testing.</p>
            </div>
            
            <div className="flex flex-col">
              <Award size={48} className="text-muted-sage mb-6" />
              <h3 className="text-2xl font-bold mb-3">Compliance</h3>
              <p className="opacity-80 text-lg leading-relaxed">Certified PFAS-Free, Prop 65 compliant, EPR aligned.</p>
            </div>
            
            <div className="flex flex-col">
              <Handshake size={48} className="text-muted-sage mb-6" />
              <h3 className="text-2xl font-bold mb-3">Bulk Ordering Ease</h3>
              <p className="opacity-80 text-lg leading-relaxed">Dedicated account managers + EDI integration.</p>
            </div>
            
            <div className="flex flex-col">
              <Settings size={48} className="text-muted-sage mb-6" />
              <h3 className="text-2xl font-bold mb-3">Custom Programs</h3>
              <p className="opacity-80 text-lg leading-relaxed">Flexible sourcing, private labeling, embroidery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Seamless Procurement Section (Timeline) */}
      <section className="py-24 bg-warm-linen border-b border-walnut/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-walnut mb-16">Seamless Procurement Process</h2>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-walnut/10 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-xl border border-walnut/10 shadow-lg relative text-center">
                <div className="w-12 h-12 bg-walnut text-warm-linen rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-md border-4 border-warm-linen">1</div>
                <h3 className="text-2xl font-bold text-walnut mb-3">Consultation</h3>
                <p className="text-walnut opacity-80">We align on your specific fabric requirements, volumes, and delivery timelines.</p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white p-8 rounded-xl border border-walnut/10 shadow-lg relative text-center">
                <div className="w-12 h-12 bg-walnut text-warm-linen rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-md border-4 border-warm-linen">2</div>
                <h3 className="text-2xl font-bold text-walnut mb-3">Sample Validation</h3>
                <p className="text-walnut opacity-80">Physical samples are provided to ensure the textile meets your facility's standards.</p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white p-8 rounded-xl border border-walnut/10 shadow-lg relative text-center">
                <div className="w-12 h-12 bg-muted-sage text-walnut rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-md border-4 border-warm-linen">3</div>
                <h3 className="text-2xl font-bold text-walnut mb-3">Fulfillment</h3>
                <p className="text-walnut opacity-80">Bulk production runs are completed and shipped directly to your operational hubs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust & Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Badges */}
            <div>
              <h2 className="text-3xl font-bold text-walnut mb-10">Certified & Compliant Partner</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center p-6 bg-warm-linen rounded-xl border border-walnut/10 text-center">
                  <div className="w-20 h-20 rounded-full border-4 border-muted-sage flex items-center justify-center mb-4">
                    <span className="font-bold text-walnut text-sm">PFAS<br/>Free</span>
                  </div>
                  <p className="font-bold text-walnut text-sm">CA AB 1817</p>
                </div>
                
                <div className="flex flex-col items-center justify-center p-6 bg-warm-linen rounded-xl border border-walnut/10 text-center">
                  <div className="w-20 h-20 rounded-full border-4 border-muted-sage flex items-center justify-center mb-4">
                    <span className="font-bold text-walnut text-sm">Prop<br/>65</span>
                  </div>
                  <p className="font-bold text-walnut text-sm">Compliant</p>
                </div>
                
                <div className="flex flex-col items-center justify-center p-6 bg-warm-linen rounded-xl border border-walnut/10 text-center">
                  <div className="w-20 h-20 rounded-full border-4 border-muted-sage flex items-center justify-center mb-4">
                    <span className="font-bold text-walnut text-sm">EPR</span>
                  </div>
                  <p className="font-bold text-walnut text-sm">Aligned</p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-walnut text-warm-linen p-10 md:p-12 rounded-2xl relative">
              <Quote size={48} className="text-muted-sage/30 absolute top-8 left-8" />
              <div className="relative z-10 min-h-[160px] flex flex-col justify-center">
                <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed italic">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div>
                  <p className="font-bold text-lg text-muted-sage">{testimonials[activeTestimonial].author}</p>
                  <p className="opacity-80">{testimonials[activeTestimonial].facility}</p>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <button 
                  onClick={() => setActiveTestimonial(activeTestimonial === 0 ? 1 : 0)}
                  className="w-10 h-10 rounded-full bg-warm-linen/10 flex items-center justify-center hover:bg-muted-sage transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => setActiveTestimonial(activeTestimonial === 0 ? 1 : 0)}
                  className="w-10 h-10 rounded-full bg-warm-linen/10 flex items-center justify-center hover:bg-muted-sage transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-32 bg-muted-sage text-walnut text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your institutional linens?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Get in touch with our sourcing experts today to discuss volume pricing and custom solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-walnut text-warm-linen px-10 py-5 rounded-lg text-xl font-bold hover:bg-white hover:text-walnut transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Request a Quote
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-walnut text-walnut px-10 py-5 rounded-lg text-xl font-bold hover:bg-walnut hover:text-warm-linen transition-all shadow-sm hover:shadow-xl transform hover:-translate-y-1">
              Schedule Presentation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
