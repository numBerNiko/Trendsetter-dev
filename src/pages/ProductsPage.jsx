import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Download } from 'lucide-react';
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
      <section className="text-neutral-bg pt-32 pb-20 text-center border-b border-slate/10" style={{ backgroundColor: region.theme.primaryBg }}>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Explore Our Textile Suites</h1>
          <p className="text-xl opacity-90 leading-relaxed font-light mb-10">
            Examples of durable, reliable textiles designed for healthcare, hospitality, and events.
          </p>
          <a 
            href="/Trendsetter_Textiles_Catalog.pdf" 
            download
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-white text-slate hover:bg-neutral-bg transition-all duration-300 text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1"
            style={{ color: region.theme.primaryBg }}
          >
            <Download strokeWidth={1.5} size={24} /> Download PDF Catalog
          </a>
        </div>
      </section>

      {/* Sticky Catalog Banner */}
      <div className="sticky top-20 z-40 bg-white border-b border-slate/10 shadow-sm py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all duration-300">
        <span className="font-bold text-slate hidden sm:inline uppercase tracking-wider">Trendsetter Institutional Textiles Catalog</span>
        <a href="/Trendsetter_Textiles_Catalog.pdf" download className="bg-[var(--theme-color)] text-white px-5 py-2 rounded-md font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity ml-auto sm:ml-0">
          Download PDF
        </a>
      </div>

      {/* Product Suites */}
      <section className="py-20 bg-white" style={region.phone.includes('+63') ? { '--theme-color': region.theme.primaryBg } : {}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {suites.map((suite, idx) => (
              <div key={suite.id} id={suite.id} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Block */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate/10 relative group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-in-out">
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
                  <h2 className="text-3xl font-bold uppercase tracking-wider mb-8 text-slate">{suite.title}</h2>
                  
                  <ul className="space-y-4">
                    {suite.bullets.map((bullet, i) => (
                      <li key={i} className={`flex items-start text-lg ${region.phone.includes('+63') ? 'opacity-100' : 'opacity-90'}`}>
                        <CheckCircle2 strokeWidth={1.5} size={24} className={`mr-3 mt-0.5 shrink-0 ${region.phone.includes('+63') ? 'text-[var(--theme-color)]' : 'text-deep-teal'}`} />
                        <span className={`leading-relaxed ${region.phone.includes('+63') ? 'text-neutral-800' : 'text-slate'}`}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
}
