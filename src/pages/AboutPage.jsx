import React from 'react';
import { Link } from 'react-router-dom';
import { Target, ShieldCheck, Factory } from 'lucide-react';

export default function AboutPage() {
  return (
    <section className="py-20 bg-neutral-bg text-slate min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Trendsetter Textiles</h1>
          <p className="text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
            Trendsetter Textiles is a premier institutional sourcing partner, bridging the gap between manufacturing excellence and facility-grade demands.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate/10 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-deep-teal">Our Story</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            Trendsetter Textiles Inc. is a premier manufacturer and B2B distributor of high-performance institutional linens based in Manila, Philippines. Backed by three generations of textile expertise, we operate one of Southeast Asia's most advanced manufacturing and commercial laundering facilities. We provide end-to-end linen provisioning, uniform leasing, and turnkey logistics for the luxury hospitality, healthcare, and enterprise retail sectors. Our comprehensive product portfolio ranges from ultra-premium Egyptian cotton bedding and durable food-and-beverage linens to specialized healthcare textiles and facility equipment. Driven by a commitment to operational efficiency and certified product safety, every item we produce undergoes rigorous in-house quality assurance. Whether outfitting a luxury resort, a major hospital network, or a high-volume restaurant, we guarantee superior lifetime product value. At Trendsetter, we build long-term partnerships dedicated to reliability, consistency, and unparalleled service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate text-neutral-bg p-8 rounded-xl text-center">
            <Target size={40} className="text-deep-teal mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">B2B Specialization</h3>
            <p className="opacity-80 text-sm">Dedicated explicitly to institutional buyers, understanding the unique rigors of commercial laundering and strict PAR level maintenance.</p>
          </div>
          
          <div className="bg-slate text-neutral-bg p-8 rounded-xl text-center">
            <ShieldCheck size={40} className="text-deep-teal mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Uncompromising Quality</h3>
            <p className="opacity-80 text-sm">From 600TC hotel percales to FDA-compliant medical barrier fabrics, our textiles meet rigorous international standards.</p>
          </div>
          
          <div className="bg-slate text-neutral-bg p-8 rounded-xl text-center">
            <Factory size={40} className="text-deep-teal mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Sourcing Reliability</h3>
            <p className="opacity-80 text-sm">Deep inventory reserves and SLA-backed delivery guarantees mean your facility will never face a stockout.</p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/contact" className="inline-block bg-deep-teal text-neutral-bg px-8 py-4 rounded-md font-bold text-lg hover:bg-slate transition-colors shadow-md">
            Partner With Us
          </Link>
        </div>

      </div>
    </section>
  );
}
