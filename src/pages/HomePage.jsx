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
      <section 
        className="relative py-32 lg:py-48 bg-neutral-bg text-slate overflow-hidden"
        style={{ 
          backgroundImage: "linear-gradient(rgba(248, 250, 252, 0.65), rgba(248, 250, 252, 0.85)), url('https://placehold.co/1920x1080/e2e8f0/94a3b8?text=Commercial+Facility+Placeholder')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mx-auto mb-6">
            Comfort, consistency, and customization — textiles designed for nursing homes, medical clinics, and hospitality spaces.
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10 font-medium">
            Reliable textile procurement for healthcare facilities, commercial enterprises, and custom apparel programs nationwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <Link to="/contact" className="bg-deep-teal text-neutral-bg px-8 py-4 rounded-md text-lg font-bold shadow-lg hover:bg-slate transition-colors duration-300">
              Schedule a Product Presentation
            </Link>
            <Link to="/contact" className="bg-transparent text-slate border-2 border-slate px-8 py-4 rounded-md text-lg font-bold shadow-lg hover:bg-slate hover:text-white transition-colors duration-300 backdrop-blur-sm">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Industries Served */}
      <section className="py-24 bg-white border-b border-slate/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate">Industries Served</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Specialized textile engineering for high-turnover commercial environments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-coral text-slate border border-slate/10 p-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-slate group-hover:text-deep-teal transition-colors">Nursing Homes</h3>
              <p className="opacity-80 mb-8 flex-grow text-lg">
                Reliable, hygiene-compliant linens engineered for long-term care.
              </p>
              <Link to="/industries/nursing-homes" className="inline-flex items-center font-bold text-deep-teal hover:text-slate transition-colors">
                View Solutions <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-coral text-slate border border-slate/10 p-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-slate group-hover:text-deep-teal transition-colors">Medical Clinics</h3>
              <p className="opacity-80 mb-8 flex-grow text-lg">
                Seamless workflow integration and uncompromising regulatory compliance.
              </p>
              <Link to="/industries/medical-clinics" className="inline-flex items-center font-bold text-deep-teal hover:text-slate transition-colors">
                View Solutions <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-coral text-slate border border-slate/10 p-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-slate group-hover:text-deep-teal transition-colors">Concert Merch Store</h3>
              <p className="opacity-80 mb-8 flex-grow text-lg">
                Premium blanks and high-volume custom apparel for touring artists.
              </p>
              <Link to="/industries/concert-merch" className="inline-flex items-center font-bold text-deep-teal hover:text-slate transition-colors">
                View Solutions <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Categories */}
      <section className="py-24 bg-slate/5 border-y border-slate/10">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate">Product Categories</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">High-demand commercial textiles engineered for performance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Sheets", 
                icon: <BedDouble size={48} className="text-deep-teal opacity-80" />, 
                bullets: ["Up to 600TC durability", "Resists industrial laundering", "Consistent PAR supply"] 
              },
              { 
                title: "Blankets", 
                icon: <BedDouble size={48} className="text-deep-teal opacity-80" />, 
                bullets: ["Thermal retention", "Snag-free knits", "Bulk fulfillment ready"] 
              },
              { 
                title: "Pillows", 
                icon: <ShieldCheck size={48} className="text-deep-teal opacity-80" />, 
                bullets: ["Hypoallergenic fills", "Shape-retaining core", "Fluid-resistant options"] 
              },
              { 
                title: "Towels", 
                icon: <Bath size={48} className="text-deep-teal opacity-80" />, 
                bullets: ["High GSM absorbency", "Double-stitched hems", "Quick-dry loops"] 
              },
              { 
                title: "Uniforms", 
                icon: <Shirt size={48} className="text-deep-teal opacity-80" />, 
                bullets: ["Stain-release finishes", "Breathable scrub fabrics", "Ergonomic fits"] 
              },
              { 
                title: "Merchandise", 
                icon: <Tag size={48} className="text-deep-teal opacity-80" />, 
                bullets: ["T-shirts & Sweatshirts", "Hats & Beanies", "Custom branding available"] 
              },
            ].map((product, idx) => (
              <div key={idx} className="bg-white border border-slate/10 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full items-center text-center">
                <div className="mb-6 bg-slate/5 p-4 rounded-full">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate mb-4">{product.title}</h3>
                <ul className="space-y-2 opacity-80 text-sm flex-grow mb-6 text-left w-full">
                  {product.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start"><CheckCircle2 size={16} className="text-deep-teal mr-2 mt-0.5 shrink-0" /> {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/products" className="inline-block bg-slate text-neutral-bg px-10 py-4 rounded-md font-bold text-lg hover:bg-deep-teal transition-colors shadow-md">
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Custom Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate">Custom Programs</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">Bespoke textile solutions tailored to your brand identity and operational needs.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center mb-16">
            <div className="flex flex-col items-center">
              <div className="bg-slate/5 p-4 rounded-full mb-4 text-deep-teal border border-slate/10 shadow-sm"><Tag size={32} /></div>
              <h4 className="font-bold text-sm">Private Labeling</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-slate/5 p-4 rounded-full mb-4 text-deep-teal border border-slate/10 shadow-sm"><Scissors size={32} /></div>
              <h4 className="font-bold text-sm">Embroidery</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-slate/5 p-4 rounded-full mb-4 text-deep-teal border border-slate/10 shadow-sm"><Package size={32} /></div>
              <h4 className="font-bold text-sm">Packaging</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-slate/5 p-4 rounded-full mb-4 text-deep-teal border border-slate/10 shadow-sm"><Box size={32} /></div>
              <h4 className="font-bold text-sm">Bulk Orders</h4>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <div className="bg-slate/5 p-4 rounded-full mb-4 text-deep-teal border border-slate/10 shadow-sm"><RefreshCcw size={32} /></div>
              <h4 className="font-bold text-sm">Sourcing Flexibility</h4>
            </div>
          </div>

          <div className="text-center">
            <Link to="/custom-programs" className="inline-block bg-deep-teal text-neutral-bg px-10 py-4 rounded-md font-bold text-lg hover:bg-slate transition-colors shadow-md">
              Start Custom Order
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Why Buyers Choose Us */}
      <section className="py-24 bg-slate text-neutral-bg border-t border-slate/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Buyers Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Trust Signals */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-deep-teal border-b border-deep-teal/30 pb-4">Institutional Credibility</h3>
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
              <h3 className="text-2xl font-bold mb-8 text-deep-teal border-b border-deep-teal/30 pb-4">Core Procurement Benefits</h3>
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
                <Link to="#contact-section" className="inline-block bg-neutral-bg text-slate px-8 py-3 rounded-md font-bold hover:bg-deep-teal hover:text-neutral-bg transition-colors shadow-md">
                  Get a Quote or Sample
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
              <h2 className="text-4xl font-bold mb-6 text-slate">Let's Discuss Your Needs</h2>
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
                <button className="bg-deep-teal text-neutral-bg px-6 py-4 rounded-md font-bold shadow-md hover:bg-slate transition-colors flex-1">
                  Schedule Presentation
                </button>
                <button className="bg-transparent border-2 border-slate text-slate px-6 py-4 rounded-md font-bold hover:bg-slate hover:text-neutral-bg transition-colors flex-1">
                  Request a Quote
                </button>
              </div>
            </div>

            {/* Short Lead Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate/10">
              <h3 className="text-2xl font-bold mb-6 text-slate">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Company</label>
                  <input type="text" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal" placeholder="Facility or Organization" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 bg-neutral-bg border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-teal resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center items-center gap-3 bg-slate text-neutral-bg font-bold py-4 rounded-md text-lg hover:bg-deep-teal transition-colors shadow-md">
                  <Send size={20} /> Submit
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
