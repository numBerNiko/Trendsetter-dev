import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Scissors, 
  Building2, 
  Award, 
  FileCheck, 
  CheckCircle2,
  Tag,
  Package,
  Box,
  RefreshCcw,
  Send,
  Phone,
  Mail,
  UserPlus,
  FileSignature,
  BedDouble,
  Shirt,
  Bath,
  BadgeCheck
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full text-slate bg-neutral-bg">
      
      {/* Section 1: Hero Banner */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-gradient-to-b from-neutral-bg to-white text-slate">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Commercial Textiles for Care Facilities and Hospitality Spaces
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-10 font-medium">
                Dependable bedding, towels, uniforms, and custom programs for nursing homes, clinics, and hotels.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link to="/contact" className="bg-deep-teal text-neutral-bg px-8 py-4 rounded-md text-lg font-bold shadow-lg hover:bg-slate transition-colors duration-300 w-full sm:w-auto text-center uppercase tracking-wider">
                  SCHEDULE A PRODUCT PRESENTATION
                </Link>
                <Link to="/contact" className="bg-transparent text-slate border-2 border-slate px-8 py-4 rounded-md text-lg font-bold shadow-sm hover:bg-slate hover:text-white transition-colors duration-300 w-full sm:w-auto text-center uppercase tracking-wider">
                  REQUEST A QUOTE
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate/10">
                <div className="flex items-center gap-2">
                  <BadgeCheck size={20} className="text-deep-teal" />
                  <span className="text-sm font-bold opacity-80">OEKO-TEX® Standard 100</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-deep-teal" />
                  <span className="text-sm font-bold opacity-80">WRAP Certified</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate/10 relative group">
                <div className="absolute inset-0 bg-slate/5 group-hover:bg-slate/0 transition-colors duration-500 z-10"></div>
                <img 
                  src="https://placehold.co/800x600/e2e8f0/94a3b8?text=Crisp+Hospital+Linens+Macro" 
                  alt="High-quality macro of crisp hospital linens"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Comprehensive Care Suites */}
      <section className="py-24 bg-white border-b border-slate/10">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4 text-slate">COMPREHENSIVE CARE SUITES</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">High-demand commercial textiles engineered for specific operational environments.</p>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Top Row: 2 Wider Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "RESIDENT BEDDING SUITE", desc: "Commercial-grade sheets, thermal blankets, and hypoallergenic pillows designed for high-turnover laundering.", link: "/products#resident-bedding" },
                { title: "HYGIENE & PERSONAL CARE SUITE", desc: "High GSM absorbency towels and washcloths engineered for durability and quick-dry performance.", link: "/products#hygiene" }
              ].map((suite, idx) => (
                <Link to={suite.link} key={idx} className="group relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <img src={`https://placehold.co/1200x600/e2e8f0/94a3b8?text=${suite.title.replace(/ /g, '+')}`} alt={suite.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/90 via-slate/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-2">{suite.title}</h3>
                    <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <p className="text-white/90 text-sm md:text-base mb-4">{suite.desc}</p>
                      <span className="inline-block bg-white text-slate px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">VIEW COLLECTION</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Row: 3 Square Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "RESIDENT APPAREL & SAFETY", desc: "Comfortable, stain-release apparel ensuring dignity and ease of care.", link: "/products#apparel" },
                { title: "CLINICAL COMPLIANCE & SAFETY", desc: "Higher-spec textiles meeting stringent healthcare regulatory standards.", link: "/products#clinical" },
                { title: "FACILITY & STAFF ESSENTIALS", desc: "Ergonomic scrubs, uniforms, and facility linens for daily operations.", link: "/products#facility" }
              ].map((suite, idx) => (
                <Link to={suite.link} key={idx} className="group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <img src={`https://placehold.co/800x800/e2e8f0/94a3b8?text=${suite.title.replace(/ /g, '+')}`} alt={suite.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/90 via-slate/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">{suite.title}</h3>
                    <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <p className="text-white/90 text-sm mb-4">{suite.desc}</p>
                      <span className="inline-block bg-white text-slate px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">VIEW COLLECTION</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Custom Apparel & Merch Breakout */}
      <section className="relative py-32 bg-slate overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://placehold.co/1920x1080/1A2421/EAE6DF?text=Custom+Apparel+Manufacturing" 
            alt="Custom apparel manufacturing" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            BEYOND THE CLINIC: HIGH-VOLUME CUSTOM APPAREL & PRIVATE LABELING
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
            From concert merchandise to corporate uniforms, our vertically integrated supply chain delivers bespoke textile solutions tailored to your brand identity.
          </p>
          <Link to="/custom-programs" className="inline-block bg-white text-slate px-10 py-4 rounded-md font-bold text-lg hover:bg-deep-teal hover:text-white transition-colors shadow-xl uppercase tracking-wider">
            EXPLORE CUSTOM PROGRAMS
          </Link>
        </div>
      </section>

      {/* Section 5: Why Buyers Choose Us */}
      <section className="py-24 bg-slate text-neutral-bg border-t border-slate/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">WHY BUYERS CHOOSE US</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Trust Signals */}
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 text-deep-teal border-b border-deep-teal/30 pb-4">INSTITUTIONAL CREDIBILITY</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                  <BadgeCheck size={28} className="text-deep-teal" />
                  <div>
                    <p className="font-bold text-sm">OEKO-TEX® Standard 100</p>
                    <p className="text-xs opacity-70">Certified Safe Textiles</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                  <Award size={28} className="text-deep-teal" />
                  <div>
                    <p className="font-bold text-sm">WRAP Certified</p>
                    <p className="text-xs opacity-70">Ethical Manufacturing</p>
                  </div>
                </div>
              </div>
              <blockquote className="bg-white/5 p-6 rounded-lg border-l-4 border-deep-teal italic text-lg leading-relaxed opacity-90">
                "Trendsetter’s consistent supply chain allowed us to standardize apparel across all our locations seamlessly. Highly recommended for bulk fulfillment."
                <footer className="text-sm font-bold mt-4 opacity-100">— Sarah Jenkins, Director of Procurement, Apex Regional Healthcare</footer>
              </blockquote>
            </div>

            {/* Benefits List */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 text-deep-teal border-b border-deep-teal/30 pb-4">CORE PROCUREMENT BENEFITS</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <ShieldCheck size={28} className="text-deep-teal mr-4 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Durable for frequent laundering</h4>
                    <p className="opacity-80">Engineered to withstand rigorous commercial wash protocols.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Truck size={28} className="text-deep-teal mr-4 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Consistent supply and bulk fulfillment</h4>
                    <p className="opacity-80">Robust logistics ensuring your facility never faces a stockout.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Scissors size={28} className="text-deep-teal mr-4 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Custom branding options</h4>
                    <p className="opacity-80">Bespoke embroidery, tags, and packaging tailored to your brand.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <p className="font-bold mb-4 opacity-90">Easy Next Step:</p>
                <Link to="#contact-section" className="inline-block bg-neutral-bg text-slate px-8 py-3 rounded-md font-bold hover:bg-deep-teal hover:text-neutral-bg transition-colors shadow-md uppercase tracking-wider">
                  GET A QUOTE OR SAMPLE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA / Contact */}
      <section id="contact-section" className="py-24 bg-coral text-slate border-t border-slate/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Direct Contact & CTA Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold uppercase tracking-wider mb-6 text-slate">LET'S DISCUSS YOUR NEEDS</h2>
              <p className="text-lg opacity-80 mb-10 leading-relaxed">
                Whether you need a quick quote on standard inventory or a comprehensive product presentation for your executive team, our procurement specialists are ready to assist.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate/10">
                  <Phone size={24} className="text-deep-teal" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60">Call Us Directly</p>
                    <a href="tel:+1-800-555-0199" className="text-xl font-bold hover:text-deep-teal transition-colors">+1-800-555-0199</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate/10">
                  <Mail size={24} className="text-deep-teal" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60">Email Us</p>
                    <a href="mailto:customerservice@trendsettertextiles.com" className="text-xl font-bold hover:text-deep-teal transition-colors break-all">customerservice@trendsettertextiles.com</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-deep-teal text-neutral-bg px-6 py-4 rounded-md font-bold uppercase tracking-wider shadow-md hover:bg-slate transition-colors flex-1">
                  SCHEDULE A PRODUCT PRESENTATION
                </button>
                <button className="bg-transparent border-2 border-slate text-slate px-6 py-4 rounded-md font-bold uppercase tracking-wider hover:bg-slate hover:text-neutral-bg transition-colors flex-1">
                  REQUEST A QUOTE
                </button>
              </div>
            </div>

            {/* Short Lead Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate/10">
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 text-slate">SEND A MESSAGE</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80">Company</label>
                  <input type="text" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal" placeholder="Facility or Organization" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center items-center gap-3 bg-slate text-neutral-bg font-bold uppercase tracking-wider py-4 rounded-md text-lg hover:bg-deep-teal transition-colors shadow-md">
                  <Send size={20} /> SUBMIT REQUEST
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
