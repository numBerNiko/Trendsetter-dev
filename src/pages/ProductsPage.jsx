import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, Download, UtensilsCrossed, ArrowRight, PackageCheck } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

export default function ProductsPage() {
  const region = useRegion();
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('all');

  const suites = [
    {
      id: 'resident-bedding',
      filterKey: 'bedding',
      label: 'Bedding',
      category: 'Healthcare & Hospitality',
      title: 'Resident Bedding Suite',
      bullets: [
        'Flat & fitted sheets (T-180, T-250 & hotel percale/sateen)',
        'High-density commercial pillowcases',
        'Cellular, thermal & performance blankets',
        'Duvet covers & easy-care bedspreads',
        'Waterproof & quilted mattress protectors'
      ],
      categoryLink: '/products/bedding',
      categoryLinkLabel: 'View Bedding Specifications',
      image: '/Trendsetter-website-photos(2)/RESIDENT BEDDING SUITE.png'
    },
    {
      id: 'hygiene',
      filterKey: 'hygiene',
      label: 'Hygiene & Bath',
      category: 'Bath & Sanitation',
      title: 'Hygiene & Personal Care Suite',
      bullets: [
        '500–650 GSM ring-spun bath towels',
        'Hand towels & soft cotton washcloths',
        'High-traction commercial bath mats',
        'Heavy-gauge antimicrobial shower curtains',
        'Lock-stitched hems built for chlorine sanitation'
      ],
      categoryLink: '/products/towels',
      categoryLinkLabel: 'View Bath Terry Specifications',
      image: '/Trendsetter-website-photos(2)/HYGIENE & PERSONAL CARE SUITE.png'
    },
    {
      id: 'apparel',
      filterKey: 'apparel',
      label: 'Apparel & Safety',
      category: 'Resident & Guest Wear',
      title: 'Resident Apparel & Safety',
      bullets: [
        'Clinical-grade patient gowns (ties, snaps, telemetry access)',
        'Adaptive clothing basics for assisted dressing',
        'Double-tread fall-management non-slip socks',
        'Lightweight lounge robes & spa bathrobes'
      ],
      categoryLink: '/products/robes',
      categoryLinkLabel: 'View Robe Specifications',
      image: '/Trendsetter-website-photos(2)/RESIDENT APPAREL & SAFETY.png'
    },
    {
      id: 'clinical',
      filterKey: 'clinical',
      label: 'Clinical Compliance',
      category: 'Higher-Spec Safety',
      title: 'Clinical Compliance & Safety (Higher-Spec)',
      bullets: [
        'Flame-retardant (FR) bedding sets meeting life-safety codes',
        'Wipe-clean antimicrobial pillows for rapid room turnover',
        'Waterproof barrier pillows & fluid-resistant protectors'
      ],
      categoryLink: '/products/pillows',
      categoryLinkLabel: 'View Clinical Pillow Specifications',
      image: '/Trendsetter-website-photos(2)/CLINICAL COMPLIANCE & SAFETY (HIGHER-SPEC).png'
    },
    {
      id: 'facility',
      filterKey: 'facility',
      label: 'Facility & Staff',
      category: 'Staff & Operations',
      title: 'Facility & Staff Essentials',
      bullets: [
        'Performance interlock scrubs & stain-release uniforms',
        'Clinical lab coats (short & long cuts)',
        'Industrial-strength mesh & solid laundry bags',
        'Code-compliant antimicrobial privacy curtains',
        'Commercial dining & tray linens'
      ],
      image: '/Trendsetter-website-photos(2)/FACILITY & STAFF ESSENTIALS.png'
    },
    {
      id: 'fb-restaurant',
      filterKey: 'fb-restaurant',
      label: 'F&B & Banquet',
      category: `Restaurant & Banquet (${region.measurementSystem})`,
      title: 'F&B / Restaurant & Banquet Collection',
      bullets: [
        'Table runners, placemats & table overlays (TT-FB-0001 – TT-FB-0003)',
        'Banquet & cocktail table covers (TT-FB-0004 – TT-FB-0005)',
        'Table skirts & pleated buffet skirting (TT-FB-0006 – TT-FB-0007)',
        'Banquet chair covers & chair sashes (TT-FB-0008 – TT-FB-0009)',
        'Kitchen side towels, bar towels & chef coats (TT-FB-0010 – TT-FB-0012)',
        '100% Cotton Damask table napkins, tablecloths & seat covers'
      ],
      categoryLink: '/products/fb-restaurant',
      categoryLinkLabel: 'View Full F&B Specifications',
      image: '/Trendsetter-website-photos/greek_border_towels.png'
    },
    {
      id: 'amenity',
      filterKey: 'amenity',
      label: 'Amenity Kits',
      category: '18-Item Hospitality & Care Programs',
      title: 'Amenity Kit Essentials',
      bullets: [
        'Dental & oral care: toothbrush, toothpaste, mouthwash, breath mints',
        'Skincare & grooming: lip balm, facial moisturizer, hand cream, deodorant, comb/hairbrush, perfume or cologne',
        'Comfort & travel: eye mask, earplugs, compression socks, slippers',
        'Hygiene & garment care: cleansing wipes, tissues, lint roller, microfiber cleaning cloth'
      ],
      image: '/Trendsetter-website-photos/Tailored_Packaging_&_Bundling.png'
    }
  ];

  // If user arrives via deep hash link from Homepage, ensure all suites are visible and scroll smoothly
  useEffect(() => {
    if (location.hash) {
      setActiveFilter('all');
      const targetId = location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  const filterTabs = [
    { key: 'all', label: `All Suites (${suites.length})` },
    ...suites.map((s) => ({ key: s.filterKey, label: s.label }))
  ];

  const visibleSuites =
    activeFilter === 'all' ? suites : suites.filter((s) => s.filterKey === activeFilter);

  return (
    <div
      className="text-ink min-h-screen"
      style={{ backgroundColor: region.theme.pageBg }}
    >
      {/* Editorial Dark Hero */}
      <section
        className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden"
        style={{ backgroundColor: region.theme.primaryDark }}
      >
        <img
          src="/Trendsetter-website-photos/cotton_bedsheets.png"
          alt="Institutional textile catalogue"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background: region.isPH
              ? 'linear-gradient(120deg, rgba(27,50,59,0.95) 0%, rgba(27,50,59,0.85) 100%)'
              : 'linear-gradient(120deg, rgba(15,45,36,0.95) 0%, rgba(15,45,36,0.85) 100%)'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C49A45]/20 border border-[#C49A45]/40 text-[#DFC07A] text-xs font-bold uppercase tracking-wider mb-5">
            {region.shortLabel} Institutional Product Catalogue &bull; {region.measurementSystem}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight mb-5 text-white">
            Explore Our Textile Suites
          </h1>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-9">
            Durable, commercial-grade textiles engineered for healthcare facilities, hospitality properties, F&amp;B banquet venues, and custom institutional programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5">
            <a
              href={region.catalogueUrl}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#C49A45] hover:bg-[#DFC07A] text-[#0F172A] font-bold text-sm sm:text-base shadow-lg transition-colors min-h-[50px]"
            >
              <Download strokeWidth={2} size={18} />
              <span>Download PDF Catalogue</span>
            </a>
            <Link
              to="/request-samples"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm sm:text-base transition-colors min-h-[50px]"
            >
              <PackageCheck strokeWidth={1.75} size={18} />
              <span>Request Physical Samples</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Interactive Category Filter Bar */}
      <div className="sticky top-[68px] lg:top-[76px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto lg:overflow-visible lg:flex-wrap pb-0.5 lg:pb-0">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors min-h-[36px] cursor-pointer ${
                    isActive
                      ? 'bg-[var(--theme-color)] text-white shadow-xs'
                      : 'text-slate-600 hover:bg-linen hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              href="#fb-specs"
              className="text-xs font-semibold text-slate-600 hover:text-[var(--theme-color)] transition-colors whitespace-nowrap"
            >
              F&amp;B SKU Tables
            </a>
            <a
              href={region.catalogueUrl}
              download
              className="inline-flex items-center gap-1.5 bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] text-white px-4 py-2 rounded-lg font-semibold text-xs transition-colors whitespace-nowrap"
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* Product Suites Listing */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {visibleSuites.map((suite, idx) => (
            <div
              key={suite.id}
              id={suite.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden scroll-mt-36"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 items-center ${
                  idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Block */}
                <div
                  className={`lg:col-span-5 h-64 sm:h-80 lg:h-full min-h-[320px] overflow-hidden relative bg-slate-100 ${
                    idx % 2 !== 0 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={suite.image}
                    alt={suite.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Spec Content Block */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 text-left ${
                    idx % 2 !== 0 ? 'lg:order-1' : ''
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#9A7426] mb-2">
                    {suite.category}
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-5">
                    {suite.title}
                  </h2>

                  <ul className="space-y-3 mb-7">
                    {suite.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                        <CheckCircle2
                          strokeWidth={1.75}
                          size={19}
                          className="text-[var(--theme-color)] shrink-0 mt-0.5"
                        />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                    {suite.categoryLink && (
                      <Link
                        to={suite.categoryLink}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] text-white text-sm font-semibold transition-colors min-h-[44px]"
                      >
                        <span>{suite.categoryLinkLabel}</span>
                        <ArrowRight size={15} />
                      </Link>
                    )}
                    <Link
                      to="/contact?inquiry=quote"
                      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-colors min-h-[44px] ${
                        suite.categoryLink
                          ? 'border border-slate-300 text-slate-700 hover:border-[var(--theme-color)] hover:text-[var(--theme-color)]'
                          : 'bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] text-white'
                      }`}
                    >
                      Request a Quote
                    </Link>
                    <Link
                      to="/request-samples"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-slate-600 hover:text-[var(--theme-color)] hover:bg-linen transition-colors min-h-[44px]"
                    >
                      Request Samples
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* F&B / Restaurant Collection Specifications & SKUs */}
      <section
        id="fb-specs"
        className="py-16 lg:py-20 bg-white border-t border-slate-200/80 scroll-mt-36"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="text-left">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-3"
                style={{ backgroundColor: region.theme.primaryBg }}
              >
                <UtensilsCrossed size={13} />
                <span>Restaurant &amp; F&amp;B Collection ({region.measurementSystem})</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                F&amp;B / Restaurant SKUs &amp; Standardized Measurements
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
                {region.fbCollection.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={region.catalogueUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm text-white shadow-sm hover:opacity-95 transition-opacity bg-[var(--theme-color)]"
              >
                <Download strokeWidth={1.75} size={16} />
                <span>Download Full Catalogue (PDF)</span>
              </a>
              <Link
                to="/contact?inquiry=quote"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm border border-slate-300 text-ink hover:border-[var(--theme-color)] hover:text-[var(--theme-color)] transition-colors"
              >
                Quote F&amp;B Program
              </Link>
            </div>
          </div>

          {/* F&B SKUs Table */}
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden mb-10">
            <div className="px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-linen">
              <h3 className="font-display font-bold text-ink text-sm sm:text-base">
                F&amp;B / Restaurant &amp; Banquet Items (TT-FB-0001 – TT-FB-0012)
              </h3>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 self-start sm:self-auto">
                {region.fbCollection.unitLabel}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-3.5 px-5">SKU #</th>
                    <th className="py-3.5 px-5">Product</th>
                    <th className="py-3.5 px-5">Material</th>
                    <th className="py-3.5 px-5">Shape / Size Label</th>
                    <th className="py-3.5 px-5">{region.fbCollection.unitLabel}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {region.fbCollection.items.map((item) => (
                    <tr key={item.sku} className="hover:bg-linen/70 transition-colors">
                      <td
                        className="py-3.5 px-5 font-mono font-bold whitespace-nowrap"
                        style={{ color: region.theme.primaryBg }}
                      >
                        {item.sku}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-ink">{item.name}</td>
                      <td className="py-3.5 px-5 text-slate-600">{item.material}</td>
                      <td className="py-3.5 px-5 text-slate-600 whitespace-nowrap">{item.sizeLabel}</td>
                      <td className="py-3.5 px-5 font-semibold text-ink whitespace-nowrap">
                        {item.dimensions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Classic Damask Table & Seating Linens */}
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-linen">
              <h3 className="font-display font-bold text-ink text-sm sm:text-base">
                Classic 100% Cotton Damask Table &amp; Seating Linens
              </h3>
              <span className="text-xs font-semibold text-slate-600">
                {region.fbCollection.unitLabel}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-3 px-5">SKU #</th>
                    <th className="py-3 px-5">Product</th>
                    <th className="py-3 px-5">Material</th>
                    <th className="py-3 px-5">Shape / Size Label</th>
                    <th className="py-3 px-5">{region.fbCollection.unitLabel}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {region.fbCollection.classicItems.map((item) => (
                    <tr key={item.sku} className="hover:bg-linen/70 transition-colors">
                      <td
                        className="py-3 px-5 font-mono font-bold whitespace-nowrap"
                        style={{ color: region.theme.primaryBg }}
                      >
                        {item.sku}
                      </td>
                      <td className="py-3 px-5 font-semibold text-ink">{item.name}</td>
                      <td className="py-3 px-5 text-slate-600">{item.material}</td>
                      <td className="py-3 px-5 text-slate-600 whitespace-nowrap">{item.sizeLabel}</td>
                      <td className="py-3 px-5 font-semibold text-ink whitespace-nowrap">
                        {item.dimensions}
                      </td>
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
