import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

const categoryData = {
  bedding: {
    title: "Institutional Bedding",
    description: "High-durability percales and sateens engineered for commercial wash cycles.",
    image: "cotton_bedsheets.png",
    specs: {
      threadCount: "T250 to T300",
      gsm: "130 GSM (Average)",
      blend: "60% Cotton / 40% Polyester",
      certifications: ["OEKO-TEX® Standard 100", "ISO 9001"]
    },
    pricingTiers: [
      { qty: "50-199 sets", price: "$24.50 / set" },
      { qty: "200-499 sets", price: "$21.00 / set" },
      { qty: "500+ sets", price: "Custom Quote" }
    ],
    moq: "50 sets"
  },
  towels: {
    title: "Commercial Towels",
    description: "High-absorbency, quick-drying terry cloth with reinforced double-stitched hems.",
    image: "Bath_Mats_&_Pool_Towels.png",
    specs: {
      threadCount: "N/A",
      gsm: "500 - 650 GSM",
      blend: "100% Ring-Spun Cotton",
      certifications: ["OEKO-TEX® Standard 100"]
    },
    pricingTiers: [
      { qty: "100-499 pcs", price: "$8.50 / pc" },
      { qty: "500-999 pcs", price: "$7.20 / pc" },
      { qty: "1000+ pcs", price: "Custom Quote" }
    ],
    moq: "100 pcs"
  },
  robes: {
    title: "Luxury Bathrobes",
    description: "Premium waffle and terry robes for resorts and high-end hospitality.",
    image: "premium_bathrobe.jpeg",
    specs: {
      threadCount: "N/A",
      gsm: "400 GSM",
      blend: "100% Cotton Waffle Weave",
      certifications: ["OEKO-TEX® Standard 100"]
    },
    pricingTiers: [
      { qty: "25-99 pcs", price: "$35.00 / pc" },
      { qty: "100-249 pcs", price: "$29.50 / pc" },
      { qty: "250+ pcs", price: "Custom Quote" }
    ],
    moq: "25 pcs"
  },
  pillows: {
    title: "Institutional Pillows",
    description: "Shape-retaining, hypoallergenic pillows with optional fluid-resistant shells.",
    image: "stacked_pillows.png",
    specs: {
      threadCount: "T233 Shell",
      gsm: "800g Fill Weight",
      blend: "100% Virgin Hollowfiber",
      certifications: ["OEKO-TEX® Standard 100", "FDA Approved (Clinical)"]
    },
    pricingTiers: [
      { qty: "50-199 pcs", price: "$12.00 / pc" },
      { qty: "200-499 pcs", price: "$9.80 / pc" },
      { qty: "500+ pcs", price: "Custom Quote" }
    ],
    moq: "50 pcs"
  }
};

export default function CategoryPage() {
  const { category } = useParams();
  const data = categoryData[category];
  const region = useRegion();

  if (!data) {
    return (
      <div className="py-32 text-center text-slate">
        <h2 className="text-3xl font-bold mb-4 text-slate">Category Not Found</h2>
        <Link to="/products" className="hover:underline" style={{ color: region.theme.primaryBg }}>Return to Product Catalog</Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-neutral-bg/30 min-h-screen text-slate" style={{ '--theme-color': region.theme.primaryBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm opacity-70 mb-8 font-medium">
          <Link to="/products" className="hover:text-slate">Catalog</Link> &gt; <span className="capitalize">{category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Image & Visuals */}
          <div>
            <div className="bg-white border border-slate/10 rounded-2xl overflow-hidden shadow-lg h-[400px] mb-6">
              <img 
                src={`/Trendsetter-website-photos/${data.image}`} 
                alt={`${data.title} bulk wholesale`} 
                className="w-full h-full object-cover"
              />
            </div>
            <button 
              className="w-full flex items-center justify-center gap-2 bg-white border-2 py-4 rounded-lg font-bold hover:bg-slate hover:text-white transition-colors"
              style={{ borderColor: region.theme.primaryBg, color: region.theme.primaryBg }}
            >
              <Download size={20} />
              Download Spec Sheet (PDF)
            </button>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate">{data.title}</h1>
            <p className="text-xl opacity-90 mb-10 leading-relaxed text-slate">{data.description}</p>
            
            {/* Technical Specs Grid */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-slate/10 pb-2 text-slate">
                <FileText size={20} style={{ color: region.theme.primaryBg }} /> Technical Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-slate/10">
                  <p className="text-xs font-bold uppercase opacity-60 mb-1 text-slate">Thread Count</p>
                  <p className="font-semibold text-lg text-slate">{data.specs.threadCount}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate/10">
                  <p className="text-xs font-bold uppercase opacity-60 mb-1 text-slate">GSM (Weight)</p>
                  <p className="font-semibold text-lg text-slate">{data.specs.gsm}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate/10 col-span-2">
                  <p className="text-xs font-bold uppercase opacity-60 mb-1 text-slate">Material Blend</p>
                  <p className="font-semibold text-lg text-slate">{data.specs.blend}</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-10">
              <h3 className="text-sm font-bold uppercase opacity-60 mb-3 text-slate">Relevant Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {data.specs.certifications.map((cert, idx) => (
                  <span key={idx} className="bg-white text-slate border border-slate/10 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={16} style={{ color: region.theme.primaryBg }} /> {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* B2B Pricing Tiers */}
            <div className="text-white p-8 rounded-2xl mb-8 bg-slate" style={{ borderTop: `8px solid ${region.theme.primaryBg}` }}>
              <div className="flex justify-between items-end mb-6 border-b border-white/20 pb-4">
                <h3 className="text-2xl font-bold text-white">Volume Pricing</h3>
                <span className="text-sm font-medium px-3 py-1 rounded bg-white/10 text-white">MOQ: {data.moq}</span>
              </div>
              
              <div className="space-y-3 mb-8">
                {data.pricingTiers.map((tier, idx) => (
                  <div key={idx} className="flex justify-between items-center text-lg text-white/90">
                    <span>{tier.qty}</span>
                    <span className="font-bold text-white">{tier.price}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact" 
                className="block w-full text-center text-white py-4 rounded-lg font-bold text-lg hover:opacity-95 transition-opacity shadow-lg"
                style={{ backgroundColor: region.theme.primaryBg }}
              >
                Request for Quote (RFQ)
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
