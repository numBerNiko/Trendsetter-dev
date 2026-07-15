import React from 'react';
import { Link } from 'react-router-dom';
import { useRegion } from '../hooks/useRegion';
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
  BadgeCheck,
  Stethoscope
} from 'lucide-react';

export default function HomePage() {
  const region = useRegion();
  return (
    <div className="flex flex-col w-full text-slate bg-neutral-bg" style={{ '--theme-color': region.theme.primaryBg }}>
      
      {/* Section 1: Hero Banner */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40 overflow-hidden text-slate bg-cover bg-center" style={{ backgroundImage: "url('/Trendsetter-website-photos/Sourcing_&_Weaving_Flexibility.png')" }}>
        {/* Semi-Transparent White Overlay */}
        <div className="absolute inset-0 bg-white/85 z-0 backdrop-blur-[2px]"></div>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Institutional Textile Solutions for Healthcare and Hospitality
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 font-medium">
                Reliable bedding, linens, and apparel designed for nursing homes, clinics, and hotels.
              </p>

              <div className="mb-8">
                <Link 
                  to="/products" 
                  className="inline-block px-8 py-4 rounded-md font-bold text-lg uppercase tracking-wider text-white shadow-lg transition-all duration-300 bg-[var(--theme-color)] hover:bg-slate"
                >
                  Explore Our Textile Suites
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate/10">
                <div className="flex items-center gap-2">
                  <BadgeCheck size={20} style={{ color: region.theme.primaryBg }} />
                  <span className="text-sm font-bold opacity-80">OEKO-TEX® Standard 100</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} style={{ color: region.theme.primaryBg }} />
                  <span className="text-sm font-bold opacity-80">WRAP Certified</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate/10 relative group">
                <div className="absolute inset-0 bg-slate/5 group-hover:bg-slate/0 transition-colors duration-500 z-10"></div>
                <img 
                  src="/Trendsetter-website-photos(2)/Hero section.png" 
                  alt="High-quality macro of crisp hospital linens"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Industries We Serve */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate">Industries We Serve</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Tailored textile solutions for nursing homes, medical clinics, and hospitality businesses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Nursing Homes Card */}
            <Link to="/industries/nursing-homes" className="group bg-white p-10 rounded-2xl shadow-md border border-slate/10 hover:border-[var(--theme-color)] hover:shadow-xl transition-all flex flex-col h-full text-left">
              <div className="bg-slate/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--theme-color)]/10 transition-colors">
                <ShieldCheck size={32} className="text-[var(--theme-color)]" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-slate">NURSING HOMES</h3>
              <p className="opacity-80 leading-relaxed flex-grow text-lg mb-6">
                Specialized textiles focusing on resident comfort and wash-stability. Featuring our Bedding, Hygiene, and Apparel suites.
              </p>
              <span className="text-[var(--theme-color)] font-bold uppercase tracking-wider group-hover:underline">VIEW SOLUTIONS &rarr;</span>
            </Link>
            {/* Medical Clinics Card */}
            <Link to="/industries/medical-clinics" className="group bg-white p-10 rounded-2xl shadow-md border border-slate/10 hover:border-[var(--theme-color)] hover:shadow-xl transition-all flex flex-col h-full text-left">
              <div className="bg-slate/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--theme-color)]/10 transition-colors">
                <Stethoscope size={32} className="text-[var(--theme-color)]" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-slate">MEDICAL CLINICS</h3>
              <p className="opacity-80 leading-relaxed flex-grow text-lg mb-6">
                Apparel and linens for Outpatient and Specialty clinics. Focus on staff scrubs, exam table covers, and patient gowns.
              </p>
              <span className="text-[var(--theme-color)] font-bold uppercase tracking-wider group-hover:underline">VIEW SOLUTIONS &rarr;</span>
            </Link>
            {/* Hotels Card */}
            <Link to="/industries/hotels" className="group bg-white p-10 rounded-2xl shadow-md border border-slate/10 hover:border-[var(--theme-color)] hover:shadow-xl transition-all flex flex-col h-full text-left">
              <div className="bg-slate/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--theme-color)]/10 transition-colors">
                <Building2 size={32} className="text-[var(--theme-color)]" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-slate">HOTELS & HOSPITALITY</h3>
              <p className="opacity-80 leading-relaxed flex-grow text-lg mb-6">
                Premium linens, towels, and staff uniforms for hotels and resorts. Focus on high durability, guest comfort, and brand alignment.
              </p>
              <span className="text-[var(--theme-color)] font-bold uppercase tracking-wider group-hover:underline">VIEW SOLUTIONS &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Explore Our Textile Suites */}
      <section className="py-24 bg-white border-b border-slate/10">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate">Explore Our Textile Suites</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Examples of durable, reliable textiles designed for healthcare, hospitality, and events.</p>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Top Row: 2 Wider Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "RESIDENT BEDDING SUITE", bullets: ["Sheets", "Pillowcases", "Blankets", "Mattress protectors"], link: "/products#resident-bedding", image: "/Trendsetter-website-photos(2)/RESIDENT BEDDING SUITE.png" },
                { title: "HYGIENE & PERSONAL CARE SUITE", bullets: ["Towels", "Washcloths", "Bath mats", "Shower curtains"], link: "/products#hygiene", image: "/Trendsetter-website-photos(2)/HYGIENE & PERSONAL CARE SUITE.png" }
              ].map((suite, idx) => (
                <Link to={suite.link} key={idx} className="group relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <img src={suite.image} alt={suite.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/90 via-slate/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-2">{suite.title}</h3>
                    <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <ul className="text-white/90 text-sm md:text-base mb-4 space-y-1 text-left list-disc list-inside">
                        {suite.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                      <span className="inline-block bg-white text-slate px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">VIEW SUITE DETAILS</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Row: 3 Square Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "RESIDENT APPAREL & SAFETY", bullets: ["Gowns", "Adaptive clothing", "Non-slip socks", "Robes"], link: "/products#apparel", image: "/Trendsetter-website-photos(2)/RESIDENT APPAREL & SAFETY.png" },
                { title: "CLINICAL COMPLIANCE", bullets: ["Flame-retardant bedding", "Wipe-clean pillows", "Waterproof pillows"], link: "/products#clinical", image: "/Trendsetter-website-photos(2)/CLINICAL COMPLIANCE & SAFETY (HIGHER-SPEC).png" },
                { title: "FACILITY & STAFF ESSENTIALS", bullets: ["Scrubs", "Lab coats", "Laundry bags", "Dining linens"], link: "/products#facility", image: "/Trendsetter-website-photos(2)/FACILITY & STAFF ESSENTIALS.png" }
              ].map((suite, idx) => (
                <Link to={suite.link} key={idx} className="group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <img src={suite.image} alt={suite.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/90 via-slate/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">{suite.title}</h3>
                    <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <ul className="text-white/90 text-sm mb-4 space-y-1 text-left list-disc list-inside">
                        {suite.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                      <span className="inline-block bg-white text-slate px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">VIEW SUITE DETAILS</span>
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
            src="/Trendsetter-website-photos/Bespoke_Embroidery_&_Monogramming.png" 
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
          <Link to="/custom-programs" className="inline-block px-10 py-4 rounded-md font-bold text-lg shadow-xl uppercase tracking-wider bg-white text-slate hover:bg-[var(--theme-color)] hover:text-[#F5F5DC] transition-all duration-300 ease-in-out">
            EXPLORE CUSTOM PROGRAMS
          </Link>
        </div>
      </section>

      {/* Section 5: Why Buyers Choose Us */}
      <section className={`py-24 border-t border-slate/10 ${region.phone.includes('+63') ? 'text-[#F5F5DC]' : 'text-neutral-bg'}`} style={{ backgroundColor: region.theme.primaryBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">WHY BUYERS CHOOSE US</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Trust Signals */}
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 border-b pb-4 text-[#F5F5DC] border-[#F5F5DC]/30">INSTITUTIONAL CREDIBILITY</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                  <BadgeCheck size={28} className="text-[#F5F5DC]" />
                  <div>
                    <p className="font-bold text-sm">OEKO-TEX® Standard 100</p>
                    <p className="text-xs opacity-70">Certified Safe Textiles</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                  <Award size={28} className="text-[#F5F5DC]" />
                  <div>
                    <p className="font-bold text-sm">WRAP Certified</p>
                    <p className="text-xs opacity-70">Ethical Manufacturing</p>
                  </div>
                </div>
              </div>
              <blockquote className="bg-white/5 p-6 rounded-lg border-l-4 border-stone-100 italic text-lg leading-relaxed opacity-90">
                "Trendsetter’s consistent supply chain allowed us to standardize apparel across all our locations seamlessly. Highly recommended for bulk fulfillment."
                <footer className="text-sm font-bold mt-4 opacity-100">— Sarah Jenkins, Director of Procurement, Apex Regional Healthcare</footer>
              </blockquote>
            </div>

            {/* Benefits List */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 border-b pb-4 text-[#F5F5DC] border-[#F5F5DC]/30">CORE PROCUREMENT BENEFITS</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <ShieldCheck size={28} className="mr-4 shrink-0 text-[#F5F5DC]" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Durable for frequent laundering</h4>
                    <p className="opacity-80">Engineered to withstand rigorous commercial wash protocols.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Truck size={28} className="mr-4 shrink-0 text-[#F5F5DC]" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Consistent supply and bulk fulfillment</h4>
                    <p className="opacity-80">Robust logistics ensuring your facility never faces a stockout.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Scissors size={28} className="mr-4 shrink-0 text-[#F5F5DC]" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Custom branding options</h4>
                    <p className="opacity-80">Bespoke embroidery, tags, and packaging tailored to your brand.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <p className="font-bold mb-4 opacity-90 text-[#F5F5DC]">Easy Next Step:</p>
                <Link to="#contact-section" className="inline-block px-8 py-3 rounded-md font-bold uppercase tracking-wider border-2 border-[#F5F5DC] bg-[#F5F5DC] text-[var(--theme-color)] hover:bg-transparent hover:text-[#F5F5DC] transition-all duration-300 ease-in-out shadow-md hover:shadow-none">
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
                  <Phone size={24} className="text-[var(--theme-color)]" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60">Call Us Directly</p>
                    <a href={`tel:${region.phone.replace(/[^0-9+]/g, '')}`} className="text-xl font-bold hover:text-[var(--theme-color)] transition-colors">{region.phone}</a>
                    <p className="text-xs opacity-75 mt-1">{region.phoneLabel}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate/10">
                  <Mail size={24} className="text-[var(--theme-color)]" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60">Email Us</p>
                    <a href={`mailto:${region.email}`} className="text-xl font-bold hover:text-[var(--theme-color)] transition-colors break-all">{region.email}</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="text-neutral-bg px-6 py-4 rounded-md font-bold uppercase tracking-wider shadow-md hover:bg-slate transition-colors flex-1" style={{ backgroundColor: region.theme.primaryBg }}>
                  SCHEDULE A PRODUCT PRESENTATION
                </button>
                <button className="bg-transparent border-2 border-[var(--theme-color)] text-[var(--theme-color)] hover:bg-[var(--theme-color)] hover:text-[#F5F5DC] px-6 py-4 rounded-md font-bold uppercase tracking-wider flex-1 transition-all duration-300 ease-in-out">
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
                  <input type="text" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)]" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80">Company</label>
                  <input type="text" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)]" placeholder="Facility or Organization" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)]" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center items-center gap-3 text-neutral-bg font-bold uppercase tracking-wider py-4 rounded-md text-lg hover:opacity-90 transition-colors shadow-md" style={{ backgroundColor: region.theme.primaryBg }}>
                  <Send size={20} /> SUBMIT QUICK REQUEST
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
