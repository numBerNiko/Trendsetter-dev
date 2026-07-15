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
  Stethoscope,
  HeartHandshake,
  Activity,
  Hotel
} from 'lucide-react';

export default function HomePage() {
  const region = useRegion();
  return (
    <div className="flex flex-col w-full text-slate bg-neutral-bg font-sans" style={{ '--theme-color': region.theme.primaryBg }}>
      
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
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-8 font-medium">
                Reliable bedding, linens, and apparel designed for nursing homes, clinics, and hotels.
              </p>

              {/* Styled CTAs */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 rounded-md font-bold text-lg uppercase tracking-wider text-white shadow-lg border-2 border-[var(--theme-color)] bg-[var(--theme-color)] hover:bg-transparent hover:text-[var(--theme-color)] transition-all duration-300 ease-in-out text-center min-w-[200px]"
                >
                  Request Quote
                </Link>
                <Link 
                  to="/portal" 
                  className="px-8 py-4 rounded-md font-bold text-lg uppercase tracking-wider shadow-md border-2 border-[var(--theme-color)] text-[var(--theme-color)] bg-transparent hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 ease-in-out text-center min-w-[200px]"
                >
                  Client Portal
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
      <section className="py-24 bg-neutral-bg relative overflow-hidden" style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.03) 1px, transparent 0)", backgroundSize: "24px 24px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate">Industries We Serve</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto font-medium">Tailored B2B textile programs engineered for consistent commercial washcycles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Nursing Homes Card */}
            <Link to="/industries/nursing-homes" className="group bg-white p-10 rounded-2xl shadow-md border border-slate/10 hover:border-[var(--theme-color)] hover:shadow-xl transition-all flex flex-col h-full text-left">
              <div className="mb-6">
                <HeartHandshake className={`w-12 h-12 ${region.phone.includes('+63') ? 'text-yellow-600' : 'text-green-900'}`} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-slate">
                NURSING HOMES
              </h3>
              <p className="opacity-80 leading-relaxed flex-grow text-lg mb-6 text-slate">
                Specialized textiles focusing on resident comfort and wash-stability. Featuring our Bedding, Hygiene, and Apparel suites.
              </p>
              <span className="text-[var(--theme-color)] font-bold uppercase tracking-wider group-hover:underline">VIEW SOLUTIONS &rarr;</span>
            </Link>
            {/* Medical Clinics Card */}
            <Link to="/industries/medical-clinics" className="group bg-white p-10 rounded-2xl shadow-md border border-slate/10 hover:border-[var(--theme-color)] hover:shadow-xl transition-all flex flex-col h-full text-left">
              <div className="mb-6">
                <Activity className={`w-12 h-12 ${region.phone.includes('+63') ? 'text-yellow-600' : 'text-green-900'}`} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-slate">
                MEDICAL CLINICS
              </h3>
              <p className="opacity-80 leading-relaxed flex-grow text-lg mb-6 text-slate">
                Apparel and linens for Outpatient and Specialty clinics. Focus on staff scrubs, exam table covers, and patient gowns.
              </p>
              <span className="text-[var(--theme-color)] font-bold uppercase tracking-wider group-hover:underline">VIEW SOLUTIONS &rarr;</span>
            </Link>
            {/* Hotels Card */}
            <Link to="/industries/hotels" className="group bg-white p-10 rounded-2xl shadow-md border border-slate/10 hover:border-[var(--theme-color)] hover:shadow-xl transition-all flex flex-col h-full text-left">
              <div className="mb-6">
                <Hotel className={`w-12 h-12 ${region.phone.includes('+63') ? 'text-yellow-600' : 'text-green-900'}`} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-slate">
                HOTELS & RESORTS
              </h3>
              <p className="opacity-80 leading-relaxed flex-grow text-lg mb-6 text-slate">
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

      {/* Product Showcase Section (Actual Photos) */}
      <section className="py-24 bg-neutral-bg/30 border-b border-slate/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate">Product Showcase</h2>
            <p className="text-lg opacity-85 max-w-2xl mx-auto font-medium">High-definition details of our heavy-duty commercial weaving inventory.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate/10 group hover:border-[var(--theme-color)] hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src="/Trendsetter-website-photos/cotton_bedsheets.png" alt="Premium Sheets" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-bold uppercase tracking-wider text-slate mb-3">Institutional Bedding</h3>
                <p className="opacity-80 text-sm mb-6 leading-relaxed text-slate">High-tensile T180/T250 flat & fitted sheets engineered for bulk commercial laundering cycles.</p>
                <Link to="/products" className="font-bold text-sm tracking-wider uppercase inline-block hover:underline" style={{ color: region.theme.primaryBg }}>View Bedding Suite &rarr;</Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate/10 group hover:border-[var(--theme-color)] hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src="/Trendsetter-website-photos/Bath_Mats_&_Pool_Towels.png" alt="Bath Terry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-bold uppercase tracking-wider text-slate mb-3">Hygiene & Bath Terry</h3>
                <p className="opacity-80 text-sm mb-6 leading-relaxed text-slate">Premium 500-650 GSM cotton towels and safety-tread bath mats built for high absorbency and durability.</p>
                <Link to="/products" className="font-bold text-sm tracking-wider uppercase inline-block hover:underline" style={{ color: region.theme.primaryBg }}>View Bath Terry &rarr;</Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate/10 group hover:border-[var(--theme-color)] hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src="/Trendsetter-website-photos/professional_medical_scrubs.png" alt="Staff Wear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-bold uppercase tracking-wider text-slate mb-3">Staff Uniforms & Scrubs</h3>
                <p className="opacity-80 text-sm mb-6 leading-relaxed text-slate">Bespoke facility-colored scrubs, clinical lab coats, and protective isolation wear with logo embroidery options.</p>
                <Link to="/products" className="font-bold text-sm tracking-wider uppercase inline-block hover:underline" style={{ color: region.theme.primaryBg }}>View Uniforms Suite &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Custom Apparel & Merch Breakout (Mockups Visual Grid) */}
      <section className="relative py-32 bg-slate overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/Trendsetter-website-photos/Bespoke_Embroidery_&_Monogramming.png" 
            alt="Custom apparel manufacturing" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            Bespoke Embroidery & Private Labeling
          </h2>
          <p className="text-xl opacity-95 mb-12 max-w-3xl mx-auto">
            From custom clinic scrubs to corporate branding and tailored packaging, our vertically integrated supply chain delivers visually congruent branding.
          </p>
          
          {/* Visual Mock-up Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 p-5 shadow-lg hover:scale-105 transition-all duration-300">
              <img src="/Trendsetter-website-photos/Bespoke_Embroidery_&_Monogramming.png" alt="Bespoke Embroidery" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="font-bold text-lg uppercase tracking-wider text-white">Bespoke Embroidery</h4>
              <p className="text-sm opacity-80 mt-1">High-definition monogramming and logo stitching for uniforms and scrubs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 p-5 shadow-lg hover:scale-105 transition-all duration-300">
              <img src="/Trendsetter-website-photos/Custom_Branded_Headwear.png" alt="Custom Headwear" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="font-bold text-lg uppercase tracking-wider text-white">Branded Headwear</h4>
              <p className="text-sm opacity-80 mt-1">Custom facility caps and scrubs aligned with branding systems.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 p-5 shadow-lg hover:scale-105 transition-all duration-300">
              <img src="/Trendsetter-website-photos/Tailored_Packaging_&_Bundling.png" alt="Tailored Packaging" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="font-bold text-lg uppercase tracking-wider text-white">Tailored Packaging</h4>
              <p className="text-sm opacity-80 mt-1">Custom property tags, bundles, and protective bags.</p>
            </div>
          </div>

          <Link to="/custom-programs" className="inline-block px-10 py-4 rounded-md font-bold text-lg shadow-xl uppercase tracking-wider bg-white text-slate hover:bg-[var(--theme-color)] hover:text-white border-2 border-white hover:border-[var(--theme-color)] transition-all duration-300 ease-in-out">
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
            {/* Trust Signals & Testimonials */}
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 border-b pb-4 text-[#F5F5DC] border-[#F5F5DC]/30">INSTITUTIONAL CREDIBILITY</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                  <BadgeCheck size={28} className="text-[#F5F5DC]" />
                  <div>
                    <p className="font-bold text-sm text-[#F5F5DC]">OEKO-TEX® Standard 100</p>
                    <p className="text-xs opacity-70">Certified Safe Textiles</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                  <Award size={28} className="text-[#F5F5DC]" />
                  <div>
                    <p className="font-bold text-sm text-[#F5F5DC]">WRAP Certified</p>
                    <p className="text-xs opacity-70">Ethical Manufacturing</p>
                  </div>
                </div>
              </div>
              
              {/* Expanded testimonials (3 quotes) */}
              <div className="space-y-6">
                <blockquote className="bg-white/5 p-6 rounded-lg border-l-4 border-white/50 italic text-base leading-relaxed opacity-95 text-left">
                  "Trendsetter’s consistent supply chain allowed us to standardize apparel across all our locations seamlessly. Highly recommended for bulk fulfillment."
                  <footer className="text-sm font-bold mt-3 opacity-100">— Sarah Jenkins, Director of Procurement, Apex Regional Healthcare</footer>
                </blockquote>
                <blockquote className="bg-white/5 p-6 rounded-lg border-l-4 border-white/50 italic text-base leading-relaxed opacity-95 text-left">
                  "The quality of the sateen bedding and prompt deliveries of bath linen have elevated our guest experience scores by 15%. A true enterprise partner."
                  <footer className="text-sm font-bold mt-3 opacity-100">— Marcus Vance, VP of Hospitality Operations, Grand Plaza Resorts</footer>
                </blockquote>
                <blockquote className="bg-white/5 p-6 rounded-lg border-l-4 border-white/50 italic text-base leading-relaxed opacity-95 text-left">
                  "Their quick-turn custom embroidery program was exactly what we needed to launch our outpatient clinic network rebranding on schedule."
                  <footer className="text-sm font-bold mt-3 opacity-100">— Dr. Evelyn Reyes, Chief Operations Officer, CareFirst Clinics</footer>
                </blockquote>
              </div>
            </div>

            {/* Benefits List */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 border-b pb-4 text-[#F5F5DC] border-[#F5F5DC]/30">CORE PROCUREMENT BENEFITS</h3>
              <ul className="space-y-6 text-left">
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
              <div className="mt-10 text-left">
                <p className="font-bold mb-4 opacity-90 text-[#F5F5DC]">Easy Next Step:</p>
                <Link to="/contact" className="inline-block px-8 py-3 rounded-md font-bold uppercase tracking-wider border-2 border-[#F5F5DC] bg-[#F5F5DC] text-[var(--theme-color)] hover:bg-transparent hover:text-[#F5F5DC] transition-all duration-300 ease-in-out shadow-md hover:shadow-none">
                  GET A QUOTE OR SAMPLE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA / Contact */}
      <section id="contact-section" className="py-24 bg-coral text-slate border-t border-slate/10 relative overflow-hidden" style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.03) 1px, transparent 0)", backgroundSize: "24px 24px" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Direct Contact & CTA Info */}
            <div className="flex flex-col justify-center text-left">
              <h2 className="text-4xl font-bold uppercase tracking-wider mb-6 text-slate">LET'S DISCUSS YOUR NEEDS</h2>
              <p className="text-lg opacity-80 mb-10 leading-relaxed text-slate">
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
                <button className="px-6 py-4 rounded-md font-bold uppercase tracking-wider shadow-md border-2 border-[var(--theme-color)] text-white bg-[var(--theme-color)] hover:bg-transparent hover:text-[var(--theme-color)] transition-all duration-300 ease-in-out text-center flex-1">
                  SCHEDULE PRESENTATION
                </button>
                <button className="bg-transparent border-2 border-[var(--theme-color)] text-[var(--theme-color)] hover:bg-[var(--theme-color)] hover:text-white px-6 py-4 rounded-md font-bold uppercase tracking-wider flex-1 transition-all duration-300 ease-in-out text-center">
                  REQUEST A QUOTE
                </button>
              </div>
            </div>

            {/* Short Lead Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate/10 text-slate relative overflow-hidden" style={{ borderTop: `6px solid ${region.theme.primaryBg}` }}>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 flex items-center gap-2" style={{ color: region.theme.primaryBg }}>
                <Send size={24} /> Send a Message
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80">Full Name</label>
                  <div className="relative">
                    <UserPlus size={18} className="absolute left-4 top-3.5 opacity-40 text-slate" />
                    <input type="text" className="w-full pl-12 pr-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)]" placeholder="Your Name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80">Company</label>
                  <div className="relative">
                    <Building2 size={18} className="absolute left-4 top-3.5 opacity-40 text-slate" />
                    <input type="text" className="w-full pl-12 pr-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)]" placeholder="Facility or Organization" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80">Email Address</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-3.5 opacity-40 text-slate" />
                    <input type="email" className="w-full pl-12 pr-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)]" placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80">Message</label>
                  <div className="relative">
                    <FileSignature size={18} className="absolute left-4 top-3.5 opacity-40 text-slate" />
                    <textarea rows="4" className="w-full pl-12 pr-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] resize-none" placeholder="How can we help?"></textarea>
                  </div>
                </div>
                <button type="submit" className="w-full flex justify-center items-center gap-3 text-white font-bold uppercase tracking-wider py-4 rounded-md text-lg hover:opacity-90 border-2 border-[var(--theme-color)] bg-[var(--theme-color)] hover:bg-transparent hover:text-[var(--theme-color)] transition-all duration-300 ease-in-out shadow-md" style={{ backgroundColor: region.theme.primaryBg }}>
                  Submit Quick Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
