import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Download, UtensilsCrossed, ArrowRight } from 'lucide-react';
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
    },
    {
      id: "fb-restaurant",
      title: "F&B / RESTAURANT & BANQUET COLLECTION",
      bullets: [
        "Table runners, placemats & table overlays (TT-FB-0001 – TT-FB-0003)",
        "Banquet & cocktail table covers (TT-FB-0004 – TT-FB-0005)",
        "Table skirts & pleated buffet skirting (TT-FB-0006 – TT-FB-0007)",
        "Banquet chair covers & chair sashes (TT-FB-0008 – TT-FB-0009)",
        "Kitchen side towels, bar towels & chef coats (TT-FB-0010 – TT-FB-0012)",
        "100% Cotton Damask table napkins, tablecloths & seat covers"
      ],
      categoryLink: "/products/fb-restaurant",
      image: "/Trendsetter-website-photos(2)/FACILITY & STAFF ESSENTIALS.png"
    },
    {
      id: "amenity",
      title: "AMENITY KIT ESSENTIALS",
      bullets: [
        "Toothbrush",
        "Toothpaste",
        "Mouthwash",
        "Lip balm",
        "Facial moisturizer",
        "Hand cream",
        "Cleansing wipes",
        "Eye mask",
        "Earplugs",
        "Compression socks",
        "Slippers",
        "Comb or hairbrush",
        "Deodorant",
        "Tissues",
        "Perfume or cologne",
        "Lint roller",
        "Breath mints",
        "Microfiber cleaning cloth"
      ],
      image: "/Trendsetter-website-photos(2)/HYGIENE & PERSONAL CARE SUITE.png"
    }
  ];

  return (
    <div className="bg-neutral-bg text-slate min-h-screen" style={{ '--theme-color': region.theme.primaryBg }}>
      
      {/* Hero */}
      <section className="text-neutral-bg pt-32 pb-20 text-center border-b border-slate/10" style={{ backgroundColor: region.theme.primaryBg }}>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Explore Our Textile Suites</h1>
          <p className="text-xl opacity-90 leading-relaxed font-light mb-10">
            Examples of durable, reliable textiles designed for healthcare, hospitality, F&amp;B / restaurants, and events.
          </p>
          <a 
            href={region.catalogueUrl} 
            download
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-white text-slate hover:bg-neutral-bg transition-all duration-300 text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1"
            style={{ color: region.theme.primaryBg }}
          >
            <Download strokeWidth={1.5} size={24} /> Download PDF Catalogue
          </a>
        </div>
      </section>

      {/* Sticky Catalogue Banner */}
      <div className="sticky top-20 z-40 bg-white border-b border-slate/10 shadow-sm py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all duration-300">
        <span className="font-bold text-slate hidden sm:inline uppercase tracking-wider">Trendsetter Institutional Textiles Catalogue</span>
        <div className="flex items-center gap-3 ml-auto sm:ml-0">
          <a href="#fb-specs" className="text-sm font-bold uppercase tracking-wider text-slate hover:text-[var(--theme-color)] transition-colors hidden md:inline">
            F&amp;B Specifications
          </a>
          <a href={region.catalogueUrl} download className="bg-[var(--theme-color)] text-white px-5 py-2 rounded-md font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
            Download PDF
          </a>
        </div>
      </div>

      {/* Product Suites */}
      <section className="py-20 bg-white">
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

                  {suite.categoryLink && (
                    <div className="mt-8">
                      <Link
                        to={suite.categoryLink}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold uppercase tracking-wider text-sm text-white hover:opacity-90 transition-opacity shadow-sm"
                        style={{ backgroundColor: region.theme.primaryBg }}
                      >
                        View F&amp;B Category &amp; Specifications <ArrowRight size={16} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F&B / Restaurant Collection Specifications & SKUs */}
      <section id="fb-specs" className="py-20 bg-neutral-bg/50 border-t border-slate/10 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-3" style={{ backgroundColor: region.theme.primaryBg }}>
                <UtensilsCrossed size={14} /> Restaurant &amp; F&amp;B Collection ({region.measurementSystem})
              </div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-slate">
                F&amp;B / Restaurant SKUs &amp; Standardized Measurements
              </h2>
              <p className="text-base md:text-lg opacity-80 mt-2 max-w-3xl">
                {region.fbCollection.subtitle}
              </p>
            </div>
            <a
              href={region.catalogueUrl}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold uppercase tracking-wider text-sm text-white shadow-md hover:opacity-90 transition-opacity shrink-0"
              style={{ backgroundColor: region.theme.primaryBg }}
            >
              <Download strokeWidth={1.5} size={18} /> Download Full Catalogue (PDF)
            </a>
          </div>

          {/* New F&B SKUs Table */}
          <div className="bg-white rounded-2xl shadow-md border border-slate/10 overflow-hidden mb-10">
            <div className="px-6 py-4 border-b border-slate/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2" style={{ backgroundColor: `${region.theme.primaryBg}10` }}>
              <h3 className="font-bold uppercase tracking-wider text-slate text-sm md:text-base">
                New F&amp;B / Restaurant &amp; Banquet Items (TT-FB-0001 – TT-FB-0012)
              </h3>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-slate/15 text-slate self-start sm:self-auto">
                {region.fbCollection.unitLabel}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate/10 bg-neutral-bg/40 text-xs font-bold uppercase tracking-wider text-slate/70">
                    <th className="py-3.5 px-5">SKU #</th>
                    <th className="py-3.5 px-5">Product</th>
                    <th className="py-3.5 px-5">Material</th>
                    <th className="py-3.5 px-5">Shape / Size Label</th>
                    <th className="py-3.5 px-5">{region.fbCollection.unitLabel}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate/10 text-sm md:text-base">
                  {region.fbCollection.items.map((item) => (
                    <tr key={item.sku} className="hover:bg-neutral-bg/30 transition-colors">
                      <td className="py-3.5 px-5 font-mono font-bold whitespace-nowrap" style={{ color: region.theme.primaryBg }}>{item.sku}</td>
                      <td className="py-3.5 px-5 font-semibold text-slate">{item.name}</td>
                      <td className="py-3.5 px-5 text-slate/80">{item.material}</td>
                      <td className="py-3.5 px-5 text-slate/80 whitespace-nowrap">{item.sizeLabel}</td>
                      <td className="py-3.5 px-5 font-medium text-slate whitespace-nowrap">{item.dimensions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Classic Damask Table & Seating Linens */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate/10 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-neutral-bg/40">
              <h3 className="font-bold uppercase tracking-wider text-slate text-sm md:text-base">
                Classic 100% Cotton Damask Table &amp; Seating Linens
              </h3>
              <span className="text-xs font-bold uppercase tracking-wider text-slate/70">
                {region.fbCollection.unitLabel}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate/10 bg-neutral-bg/20 text-xs font-bold uppercase tracking-wider text-slate/70">
                    <th className="py-3 px-5">SKU #</th>
                    <th className="py-3 px-5">Product</th>
                    <th className="py-3 px-5">Material</th>
                    <th className="py-3 px-5">Shape / Size Label</th>
                    <th className="py-3 px-5">{region.fbCollection.unitLabel}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate/10 text-sm md:text-base">
                  {region.fbCollection.classicItems.map((item) => (
                    <tr key={item.sku} className="hover:bg-neutral-bg/30 transition-colors">
                      <td className="py-3 px-5 font-mono font-bold whitespace-nowrap" style={{ color: region.theme.primaryBg }}>{item.sku}</td>
                      <td className="py-3 px-5 font-semibold text-slate">{item.name}</td>
                      <td className="py-3 px-5 text-slate/80">{item.material}</td>
                      <td className="py-3 px-5 text-slate/80 whitespace-nowrap">{item.sizeLabel}</td>
                      <td className="py-3 px-5 font-medium text-slate whitespace-nowrap">{item.dimensions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
