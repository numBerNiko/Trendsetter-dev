import React from 'react';
import { Target, ShieldCheck, Factory } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const region = useRegion();
  return (
    <div className="bg-neutral-bg text-slate min-h-screen font-sans">
      <section className="relative py-20 md:py-32 text-neutral-bg border-b-8 overflow-hidden" style={{ backgroundColor: region.theme.primaryBg, borderBottomColor: region.theme.primaryBg }}>
        <img src="/Trendsetter-website-photos/procurement_warehouse.png" alt="Warehouse Operations" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Our Story: Supplying Reliable Textiles Across the USA</h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
            Trendsetter Textiles is a premier institutional sourcing partner, bridging the gap between manufacturing excellence and facility-grade demands.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-white rounded-2xl p-10 shadow-lg border border-slate/10 mb-16"
          style={region.phone.includes('+63') ? { '--theme-color': region.theme.primaryBg } : {}}
        >
          <h2 className={`text-3xl font-bold mb-6 ${region.phone.includes('+63') ? 'text-[var(--theme-color)]' : 'text-deep-teal'}`}>Our Story</h2>
          <p className={`text-lg leading-relaxed mb-6 ${region.phone.includes('+63') ? 'text-neutral-800' : 'opacity-80'}`}>
            Trendsetter Textiles Inc. is a premier manufacturer and B2B distributor of high-performance institutional linens based in Manila, Philippines. Backed by three generations of textile expertise, we operate one of Southeast Asia's most advanced manufacturing and commercial laundering facilities. We provide end-to-end linen provisioning, uniform leasing, and turnkey logistics for the luxury hospitality, healthcare, and enterprise retail sectors. Our comprehensive product portfolio ranges from ultra-premium Egyptian cotton bedding and durable food-and-beverage linens to specialized healthcare textiles and facility equipment. Driven by a commitment to operational efficiency and certified product safety, every item we produce undergoes rigorous in-house quality assurance. Whether outfitting a luxury resort, a major hospital network, or a high-volume restaurant, we guarantee superior lifetime product value. At Trendsetter, we build long-term partnerships dedicated to reliability, consistency, and unparalleled service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className={`p-8 rounded-xl text-center ${region.phone.includes('+63') ? 'text-neutral-800 shadow-lg' : 'bg-slate text-neutral-bg'}`} style={region.phone.includes('+63') ? { backgroundColor: region.theme.primaryBg } : {}}>
            <Target size={40} className={`mx-auto mb-4 ${region.phone.includes('+63') ? 'text-neutral-800' : 'text-deep-teal'}`} />
            <h3 className="text-xl font-bold mb-2">B2B Specialization</h3>
            <p className={`text-sm ${region.phone.includes('+63') ? 'opacity-100 font-medium' : 'opacity-80'}`}>Dedicated explicitly to institutional buyers, understanding the unique rigors of commercial laundering and strict PAR level maintenance.</p>
          </div>
          
          <div className={`p-8 rounded-xl text-center ${region.phone.includes('+63') ? 'text-neutral-800 shadow-lg' : 'bg-slate text-neutral-bg'}`} style={region.phone.includes('+63') ? { backgroundColor: region.theme.primaryBg } : {}}>
            <ShieldCheck size={40} className={`mx-auto mb-4 ${region.phone.includes('+63') ? 'text-neutral-800' : 'text-deep-teal'}`} />
            <h3 className="text-xl font-bold mb-2">Uncompromising Quality</h3>
            <p className={`text-sm ${region.phone.includes('+63') ? 'opacity-100 font-medium' : 'opacity-80'}`}>From 600TC hotel percales to {region.phone.includes('+63') ? 'FDA-certified (PH) / ISO-compliant' : 'FDA-compliant'} medical barrier fabrics, our textiles meet rigorous international standards.</p>
          </div>
          
          <div className={`p-8 rounded-xl text-center ${region.phone.includes('+63') ? 'text-neutral-800 shadow-lg' : 'bg-slate text-neutral-bg'}`} style={region.phone.includes('+63') ? { backgroundColor: region.theme.primaryBg } : {}}>
            <Factory size={40} className={`mx-auto mb-4 ${region.phone.includes('+63') ? 'text-neutral-800' : 'text-deep-teal'}`} />
            <h3 className="text-xl font-bold mb-2">Sourcing Reliability</h3>
            <p className={`text-sm ${region.phone.includes('+63') ? 'opacity-100 font-medium' : 'opacity-80'}`}>Deep inventory reserves and SLA-backed delivery guarantees mean your facility will never face a stockout.</p>
          </div>
        </div>

        <div className="text-center" style={{ '--theme-color': region.theme.primaryBg }}>
          <Link to="/contact" 
            className="inline-block px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-md border-2 border-[var(--theme-color)] bg-[var(--theme-color)] text-white hover:bg-transparent hover:text-[var(--theme-color)] hover:shadow-sm"
          >
            Partner With Us
          </Link>
        </div>

      </section>
    </div>
  );
}
