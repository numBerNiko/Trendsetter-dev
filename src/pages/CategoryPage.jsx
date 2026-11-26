import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, FileText, CheckCircle2, ArrowLeft, PackageCheck } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

const categoryData = {
  bedding: {
    title: 'Institutional Bedding',
    description: 'High-durability percales and sateens engineered for commercial wash cycles.',
    image: 'cotton_bedsheets.png',
    specs: {
      threadCount: 'T250 to T300',
      gsm: '130 GSM (Average)',
      blend: '60% Cotton / 40% Polyester',
      certifications: ['OEKO-TEX® Standard 100', 'ISO 9001']
    },
    pricingTiers: [
      { qty: '50–199 sets', price: '$24.50 / set', phPrice: 'Volume Tier Quotation (PHP)' },
      { qty: '200–499 sets', price: '$21.00 / set', phPrice: 'Bulk Tier Quotation (PHP)' },
      { qty: '500+ sets', price: 'Custom Quote', phPrice: 'Custom Program Quote (PHP)' }
    ],
    moq: '50 sets'
  },
  towels: {
    title: 'Commercial Towels',
    description: 'High-absorbency, quick-drying terry cloth with reinforced double-stitched hems.',
    image: 'Bath_Mats_&_Pool_Towels.png',
    specs: {
      threadCount: 'N/A',
      gsm: '500 – 650 GSM',
      blend: '100% Ring-Spun Cotton',
      certifications: ['OEKO-TEX® Standard 100']
    },
    pricingTiers: [
      { qty: '100–499 pcs', price: '$8.50 / pc', phPrice: 'Volume Tier Quotation (PHP)' },
      { qty: '500–999 pcs', price: '$7.20 / pc', phPrice: 'Bulk Tier Quotation (PHP)' },
      { qty: '1000+ pcs', price: 'Custom Quote', phPrice: 'Custom Program Quote (PHP)' }
    ],
    moq: '100 pcs'
  },
  robes: {
    title: 'Luxury Bathrobes',
    description: 'Premium waffle and terry robes for resorts and high-end hospitality.',
    image: 'premium_bathrobe.jpeg',
    specs: {
      threadCount: 'N/A',
      gsm: '400 GSM',
      blend: '100% Cotton Waffle Weave',
      certifications: ['OEKO-TEX® Standard 100']
    },
    pricingTiers: [
      { qty: '25–99 pcs', price: '$35.00 / pc', phPrice: 'Volume Tier Quotation (PHP)' },
      { qty: '100–249 pcs', price: '$29.50 / pc', phPrice: 'Bulk Tier Quotation (PHP)' },
      { qty: '250+ pcs', price: 'Custom Quote', phPrice: 'Custom Program Quote (PHP)' }
    ],
    moq: '25 pcs'
  },
  pillows: {
    title: 'Institutional Pillows',
    description: 'Shape-retaining, hypoallergenic pillows with optional fluid-resistant shells.',
    image: '/Trendsetter-website-photos/stacked_pillows.png',
    specs: {
      threadCount: 'T233 Shell',
      gsm: '800g Fill Weight',
      blend: '100% Virgin Hollowfiber',
      certifications: ['OEKO-TEX® Standard 100', 'Clinical Barrier Grade']
    },
    pricingTiers: [
      { qty: '50–199 pcs', price: '$12.00 / pc', phPrice: 'Volume Tier Quotation (PHP)' },
      { qty: '200–499 pcs', price: '$9.80 / pc', phPrice: 'Bulk Tier Quotation (PHP)' },
      { qty: '500+ pcs', price: 'Custom Quote', phPrice: 'Custom Program Quote (PHP)' }
    ],
    moq: '50 pcs'
  },
  'fb-restaurant': {
    title: 'F&B / Restaurant & Banquet Linens',
    description:
      'Commercial table linens, banquet skirting, chair covers, kitchen & bar towels, and chef coats engineered for hospitality and dining operations.',
    image: '/Trendsetter-website-photos/greek_border_towels.png',
    isFbCollection: true,
    specs: {
      threadCount: 'Damask / Twill / Satin',
      gsm: 'Custom Weight by Spec',
      blend: '100% Cotton Damask, Polycotton Twill, Poly / Spandex',
      certifications: ['OEKO-TEX® Standard 100', 'Commercial Laundering Grade']
    },
    pricingTiers: [
      { qty: '50–199 pcs', price: 'By Specification Quote', phPrice: 'Volume Tier Quotation (PHP)' },
      { qty: '200–499 pcs', price: 'Volume Tier Pricing', phPrice: 'Bulk Tier Quotation (PHP)' },
      { qty: '500+ pcs', price: 'Custom Program Quote', phPrice: 'Custom Program Quote (PHP)' }
    ],
    moq: '50 pcs (or custom program)'
  }
};

export default function CategoryPage() {
  const { category } = useParams();
  const normalizedCategory = category === 'restaurant' || category === 'fb' ? 'fb-restaurant' : category;
  const data = categoryData[normalizedCategory];
  const region = useRegion();

  if (!data) {
    return (
      <div className="py-32 text-center text-ink">
        <h2 className="font-display text-3xl font-bold mb-4">Category Not Found</h2>
        <Link to="/products" className="font-semibold hover:underline" style={{ color: region.theme.primaryBg }}>
          Return to Product Catalogue
        </Link>
      </div>
    );
  }

  const imageSrc = data.image.startsWith('/') ? data.image : `/Trendsetter-website-photos/${data.image}`;

  return (
    <section
      className="py-12 lg:py-16 min-h-screen text-ink"
      style={{ backgroundColor: region.theme.pageBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 hover:text-[var(--theme-color)] transition-colors"
          >
            <ArrowLeft size={15} />
            <span>Product Catalogue</span>
          </Link>
          <span>/</span>
          <span className="text-ink font-semibold">{data.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Image & Downloads */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm aspect-[4/3] mb-5">
              <img
                src={imageSrc}
                alt={`${data.title} bulk wholesale`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <a
                href={region.catalogueUrl}
                download
                className="w-full inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-[var(--theme-color)] hover:text-[var(--theme-color)] py-3.5 px-5 rounded-xl font-semibold text-sm text-ink transition-colors shadow-xs"
              >
                <Download strokeWidth={1.75} size={18} />
                <span>Download Full Catalogue (PDF)</span>
              </a>
              <Link
                to="/request-samples"
                className="w-full inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-[var(--theme-color)] hover:text-[var(--theme-color)] py-3.5 px-5 rounded-xl font-semibold text-sm text-ink transition-colors shadow-xs"
              >
                <PackageCheck strokeWidth={1.75} size={18} />
                <span>Request Physical Samples</span>
              </Link>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9A7426] mb-2">
              {region.shortLabel} Institutional Specification
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-ink">
              {data.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              {data.description}
            </p>

            {/* Technical Specs Grid */}
            <div className="mb-8">
              <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2 text-ink">
                <FileText strokeWidth={1.75} size={18} style={{ color: region.theme.primaryBg }} />
                <span>Technical Specifications</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200/90">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Thread Count / Weave
                  </p>
                  <p className="font-semibold text-base text-ink">{data.specs.threadCount}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/90">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    GSM / Weight
                  </p>
                  <p className="font-semibold text-base text-ink">{data.specs.gsm}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/90 sm:col-span-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Material Blend
                  </p>
                  <p className="font-semibold text-base text-ink">{data.specs.blend}</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Certifications &amp; Standards
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {data.specs.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="bg-white text-ink border border-slate-200 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5"
                  >
                    <CheckCircle2 strokeWidth={2} size={15} style={{ color: region.theme.primaryBg }} />
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* B2B Pricing Tiers */}
            <div
              className="text-white p-7 sm:p-8 rounded-2xl shadow-lg"
              style={{ backgroundColor: region.theme.primaryDark }}
            >
              <div className="flex flex-wrap justify-between items-center gap-3 mb-6 border-b border-white/15 pb-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Volume Procurement Tiers
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#C49A45]/20 border border-[#C49A45]/40 text-[#DFC07A]">
                  MOQ: {data.moq}
                </span>
              </div>

              <div className="space-y-3 mb-7">
                {data.pricingTiers.map((tier) => (
                  <div
                    key={tier.qty}
                    className="flex justify-between items-center gap-4 text-sm sm:text-base text-white/85 py-1 border-b border-white/10 last:border-0"
                  >
                    <span className="shrink-0">{tier.qty}</span>
                    <span className="font-bold text-white text-right">
                      {region.isPH ? tier.phPrice : tier.price}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact?inquiry=quote"
                className="block w-full text-center text-[#0F172A] bg-[#C49A45] hover:bg-[#DFC07A] py-3.5 rounded-xl font-bold text-sm sm:text-base transition-colors shadow-md"
              >
                {region.isPH ? 'Request PHP Quote' : 'Request for Quote (RFQ)'}
              </Link>
            </div>
          </div>
        </div>

        {/* Regional F&B / Restaurant SKUs & Standardized Measurements Table */}
        {data.isFbCollection && (
          <div className="mt-16 space-y-8">
            <div className="bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-linen">
                <h2 className="font-display text-base sm:text-lg font-bold text-ink">
                  F&amp;B / Restaurant &amp; Banquet SKUs &mdash; {region.measurementSystem}
                </h2>
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

            <div className="bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 bg-linen">
                <h3 className="font-display text-base font-bold text-ink">
                  Classic 100% Cotton Damask Table &amp; Seating Linens
                </h3>
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
        )}
      </div>
    </section>
  );
}
