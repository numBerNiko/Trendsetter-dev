import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

export default function ProductsPage() {
  const region = useRegion();
  const suites = [
    {
      id: "resident-bedding",
      title: "RESIDENT BEDDING SUITE",
      bullets: [
        "Sheets",
        "Pillowcases",
        "Blankets",
        "Duvet covers",
        "Mattress protectors"
      ],
      image: "/Trendsetter-website-photos(2)/RESIDENT BEDDING SUITE.png"
    },
    {
      id: "hygiene",
      title: "HYGIENE & PERSONAL CARE SUITE",
      bullets: [
        "Bath towels",
        "Hand towels",
        "Washcloths",
        "Bath mats",
        "Shower curtains"
      ],
      image: "/Trendsetter-website-photos(2)/HYGIENE & PERSONAL CARE SUITE.png"
    },
    {
      id: "apparel",
      title: "RESIDENT APPAREL & SAFETY",
      bullets: [
        "Gowns",
        "Adaptive clothing",
        "Non-slip socks",
        "Robes"
      ],
      image: "/Trendsetter-website-photos(2)/RESIDENT APPAREL & SAFETY.png"
    },
    {
      id: "clinical",
      title: "CLINICAL COMPLIANCE & SAFETY (HIGHER-SPEC)",
      bullets: [
        "FR bedding sets",
        "Wipe-clean pillows",
        "Waterproof pillows"
      ],
      image: "/Trendsetter-website-photos(2)/CLINICAL COMPLIANCE & SAFETY (HIGHER-SPEC).png"
    },
    {
      id: "facility",
      title: "FACILITY & STAFF ESSENTIALS",
      bullets: [
        "Scrubs",
        "Lab coats",
        "Laundry bags",
        "Privacy curtains",
        "Dining linens"
      ],
      image: "/Trendsetter-website-photos(2)/FACILITY & STAFF ESSENTIALS.png"
    }
  ];

  return (
    <div className="bg-neutral-bg text-slate min-h-screen">
      
      {/* Hero */}
      <section className="text-neutral-bg pt-32 pb-24 text-center border-b border-slate/10" style={{ backgroundColor: region.theme.primaryBg }}>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Explore Our Textile Suites</h1>
          <p className="text-xl opacity-90 leading-relaxed font-light">
            Examples of durable, reliable textiles designed for healthcare, hospitality, and events.
          </p>
        </div>
      </section>

      {/* Product Suites */}
      <section className="py-24 bg-white" style={region.phone.includes('+63') ? { '--theme-color': region.theme.primaryBg } : {}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {suites.map((suite, idx) => (
              <div key={suite.id} id={suite.id} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Block */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate/10 relative group">
                    <div className="absolute inset-0 bg-slate/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={suite.image} 
                      alt={suite.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Text Block */}
                <div className="w-full lg:w-1/2 text-left">
                  <h2 className={`text-3xl font-bold uppercase tracking-wider mb-8 ${region.phone.includes('+63') ? 'text-[var(--theme-color)]' : 'text-slate'}`}>{suite.title}</h2>
                  
                  <ul className="space-y-4 mb-10">
                    {suite.bullets.map((bullet, i) => (
                      <li key={i} className={`flex items-start text-lg ${region.phone.includes('+63') ? 'opacity-100' : 'opacity-90'}`}>
                        <CheckCircle2 size={24} className={`mr-3 mt-0.5 shrink-0 ${region.phone.includes('+63') ? 'text-[var(--theme-color)]' : 'text-deep-teal'}`} />
                        <span className={`leading-relaxed ${region.phone.includes('+63') ? 'text-neutral-800' : 'text-slate'}`}>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="inline-block text-neutral-bg px-8 py-4 rounded-md font-bold uppercase tracking-wider hover:bg-slate transition-colors shadow-md" style={{ backgroundColor: region.theme.primaryBg }}>
                    VIEW SUITE DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Cross Link to Industries */}
          <div className="mt-20 border-t border-slate/10 pt-16 text-center">
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-slate">Looking for Contextual Solutions?</h3>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto text-slate">
              Discover how our suites align perfectly with specific environments like nursing homes, clinics, and hotels.
            </p>
            <Link to="/industries" className="inline-block bg-transparent border-2 px-8 py-4 rounded-md font-bold uppercase tracking-wider text-lg hover:bg-slate hover:text-neutral-bg transition-colors shadow-sm" style={{ borderColor: region.theme.primaryBg, color: region.theme.primaryBg }}>
              EXPLORE INDUSTRIES
            </Link>
          </div>

        </div>
      </section>

      {/* Catalog CTA */}
      <section className={`py-24 border-t border-slate/10 ${region.phone.includes('+63') ? 'text-white' : 'bg-deep-teal text-neutral-bg'}`} style={region.phone.includes('+63') ? { backgroundColor: region.theme.primaryBg } : {}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 ${region.phone.includes('+63') ? 'text-white' : 'text-neutral-bg'}`}>REQUEST OUR FULL DIGITAL CATALOG</h2>
          <p className={`text-xl mb-10 max-w-3xl mx-auto font-light ${region.phone.includes('+63') ? 'text-white opacity-100 font-medium' : 'opacity-90'}`}>
            Our comprehensive catalog includes detailed technical specifications, GSM ratings, and material safety data for all products.
          </p>
          <Link to="/contact" className={`inline-block px-10 py-4 rounded-md font-bold text-lg transition-colors shadow-xl uppercase tracking-wider ${region.phone.includes('+63') ? 'bg-[#F5F5DC] hover:opacity-80' : 'bg-neutral-bg hover:bg-slate hover:text-neutral-bg'}`} style={{ color: region.theme.primaryBg }}>
            DOWNLOAD CATALOG
          </Link>
        </div>
      </section>
    </div>
  );
}
