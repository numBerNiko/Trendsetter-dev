import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegion } from '../hooks/useRegion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Send,
  Phone,
  Mail,
  Building2,
  Package,
  FileCheck,
  FileSignature,
  UserPlus,
  HeartHandshake,
  Stethoscope,
  Hotel,
  Download,
  Award,
  Layers,
  Clock,
  MessageCircle,
  Sparkles,
  MapPin
} from 'lucide-react';

export default function HomePage() {
  const region = useRegion();

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    orderVolume: 'Medium Volume (100–500 units)',
    message: '',
    tin: '',
    taxExemption: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      subject: `New Quick Inquiry (${region.shortLabel}) from ${formData.fullName} - ${formData.company}`,
      from_name: formData.fullName,
      region: region.regionName,
      ...formData
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          orderVolume: 'Medium Volume (100–500 units)',
          message: '',
          tin: '',
          taxExemption: false
        });
        setTimeout(() => setIsSuccess(false), 6000);
      } else {
        setSubmitError('We could not send your request right now. Please call or email us directly.');
      }
    } catch {
      setSubmitError('Network error while submitting your request. Please call or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroGradient = region.isPH
    ? 'linear-gradient(102deg, rgba(27,50,59,0.96) 0%, rgba(27,50,59,0.88) 48%, rgba(27,50,59,0.42) 100%)'
    : 'linear-gradient(102deg, rgba(15,45,36,0.96) 0%, rgba(15,45,36,0.88) 48%, rgba(15,45,36,0.42) 100%)';

  const industries = [
    {
      title: 'Nursing Homes & Hospitals',
      tag: 'Post-Acute & Long-Term Care',
      description:
        'Combed, wash-stable resident bedding, barrier pillows, adaptive apparel, and FR-compliant linens engineered for patient comfort.',
      bullets: ['Sanforized T-180 & T-250 bedding', 'Fluid-resistant & FR compliance options', 'High-traction socks & patient gowns'],
      link: '/industries/nursing-homes',
      image: '/Trendsetter-website-photos/Clinical_Bedding_Essentials.png',
      icon: HeartHandshake
    },
    {
      title: 'Medical Clinics',
      tag: 'Outpatient & Specialty Care',
      description:
        'High-turnover clinical linens, exam table drapes, privacy curtains, and soil-release staff scrubs built for daily sanitation.',
      bullets: ['Autoclave-ready reactive-dyed scrubs', 'Exam drapes & antimicrobial curtains', 'Custom embroidered facility uniforms'],
      link: '/industries/medical-clinics',
      image: '/Trendsetter-website-photos/professional_medical_scrubs.png',
      icon: Stethoscope
    },
    {
      title: 'Hotels, Resorts & F&B',
      tag: 'Hospitality & Banquet Operations',
      description:
        'Crisp percale and silky sateen guest linens, 500–650 GSM bath terry, spa robes, and standardized F&B banquet textiles.',
      bullets: ['Extra-long staple guest bedding', '500–650 GSM ring-spun bath terry', `F&B & Damask SKUs (${region.measurementSystem})`],
      link: '/industries/hotels',
      image: '/Trendsetter-website-photos/premium_bathrobe.jpeg',
      icon: Hotel
    }
  ];

  const featuredSuitesTop = [
    {
      title: 'Resident Bedding Suite',
      category: 'Healthcare & Hospitality',
      tags: ['Sheets', 'Pillowcases', 'Blankets', 'Mattress Protectors'],
      link: '/products#resident-bedding',
      image: '/Trendsetter-website-photos(2)/RESIDENT BEDDING SUITE.png'
    },
    {
      title: 'Hygiene & Personal Care Suite',
      category: 'Bath & Sanitation',
      tags: ['Bath Towels', 'Washcloths', 'Bath Mats', 'Shower Curtains'],
      link: '/products#hygiene',
      image: '/Trendsetter-website-photos(2)/HYGIENE & PERSONAL CARE SUITE.png'
    }
  ];

  const featuredSuitesBottom = [
    {
      title: 'Resident Apparel & Safety',
      category: 'Patient Wear',
      tags: ['Gowns', 'Adaptive Wear', 'Non-Slip Socks', 'Robes'],
      link: '/products#apparel',
      image: '/Trendsetter-website-photos(2)/RESIDENT APPAREL & SAFETY.png'
    },
    {
      title: 'Clinical Compliance',
      category: 'Higher-Spec Safety',
      tags: ['FR Bedding', 'Wipe-Clean Pillows', 'Waterproof Barriers'],
      link: '/products#clinical',
      image: '/Trendsetter-website-photos(2)/CLINICAL COMPLIANCE & SAFETY (HIGHER-SPEC).png'
    },
    {
      title: 'Facility & Staff Essentials',
      category: 'Operations & F&B',
      tags: ['Scrubs', 'Lab Coats', 'Laundry Bags', 'Dining Linens'],
      link: '/products#facility',
      image: '/Trendsetter-website-photos(2)/FACILITY & STAFF ESSENTIALS.png'
    },
    {
      title: 'Amenity Kit Essentials',
      category: '18-Item Programs',
      tags: ['Personal Care', 'Slippers', 'Eye Masks', '+15 more'],
      link: '/products#amenity',
      image: '/Trendsetter-website-photos/Tailored_Packaging_&_Bundling.png'
    }
  ];

  const productSpecs = [
    {
      badge: 'T-180 & T-250 Percale',
      title: 'Institutional Bedding',
      subtitle: 'Single-ply, long-staple ring-spun cotton engineered for continuous commercial laundering.',
      image: '/Trendsetter-website-photos/cotton_bedsheets.png',
      specs: [
        'Engineered for 150+ high-temperature commercial wash cycles',
        'Pre-shrunk (Sanforized) construction for consistent mattress fit',
        region.isPH
          ? 'Built for tropical humidity resistance & commercial sanitation'
          : 'Meets CPSC 16 CFR, NFPA 701, OEKO-TEX® Standard 100 & WRAP'
      ],
      detailLink: '/products/bedding'
    },
    {
      badge: '500–650 GSM Terry',
      title: 'Hygiene & Bath Terry',
      subtitle: 'High-absorbency 100% ring-spun cotton terry with double-stitched hems.',
      image: '/Trendsetter-website-photos/Bath_Mats_&_Pool_Towels.png',
      specs: [
        'Rated at 500–650 GSM for balanced loft and rapid drying',
        'Lock-stitched hems prevent fraying in industrial extractors',
        'High resistance to chlorine bleach and institutional sanitation'
      ],
      detailLink: '/products/towels'
    },
    {
      badge: 'Clinical & Facility Wear',
      title: 'Staff Uniforms & Scrubs',
      subtitle: 'Durable interlock knit workwear with soil-release protection and reactive dyes.',
      image: '/Trendsetter-website-photos/professional_medical_scrubs.png',
      specs: [
        'Double-needle reinforced stitching for high-turnover shifts',
        'Soil-release & fluid-resistant technical finishes available',
        'Reactive dyeing preserves colorfastness under autoclaving'
      ],
      detailLink: '/products#facility'
    }
  ];

  const procurementSteps = [
    {
      number: '01',
      title: 'Consult & Spec',
      description: `Align on thread counts, GSM weights, PAR levels, and compliance requirements directly with ${region.representative.name} and our procurement team.`
    },
    {
      number: '02',
      title: 'Evaluate Physical Samples',
      description: 'Receive physical swatches and sample units at your facility to test hand-feel, stitching, and commercial wash stability firsthand.'
    },
    {
      number: '03',
      title: 'Custom Weaving & Branding',
      description: 'Add precision embroidery, custom dimensions, property identification tags, or tailored packaging aligned with your brand standards.'
    },
    {
      number: '04',
      title: 'Scheduled Bulk Fulfillment',
      description: region.isPH
        ? 'Fast local dispatch and recurring restocking directly from our Laguna / Biñan warehouse facility across Metro Manila and nationwide.'
        : 'Reliable bulk fulfillment and scheduled replenishment coordinated from our Los Angeles hub across the United States.'
    }
  ];

  return (
    <div
      className="flex flex-col w-full text-ink font-sans"
      style={{ backgroundColor: region.theme.pageBg }}
    >
      {/* Section 1: Editorial Full-Bleed Dark-Gradient Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{ backgroundColor: region.theme.primaryDark }}
      >
        {/* Background Full-Bleed Photography */}
        <img
          src="/Trendsetter-website-photos(2)/Hero section.png"
          alt="Stacked institutional healthcare and hospitality linens"
          width="1600"
          height="900"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Directional Brand Gradient Scrim */}
        <div className="absolute inset-0" style={{ background: heroGradient }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
            {/* Left Copy & Conversion Column */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C49A45]/20 border border-[#C49A45]/45 text-[#DFC07A] text-xs font-semibold tracking-wide uppercase mb-6">
                <Sparkles size={13} strokeWidth={2} />
                <span>{region.heroTagline}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.08] text-white mb-5">
                Institutional Textile Solutions for{' '}
                <span className="text-[#DFC07A]">Healthcare &amp; Hospitality</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mb-8 font-normal">
                Commercial-grade bedding, high-loft bath terry, clinical apparel, and custom-woven linens engineered for nursing homes, medical clinics, and hotels across the {region.regionName}.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 mb-7">
                <Link
                  to="/contact?inquiry=quote"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-bold text-sm sm:text-base text-[#0F172A] bg-[#C49A45] hover:bg-[#DFC07A] shadow-lg transition-all duration-200 min-h-[52px]"
                >
                  <span>Request a Quote</span>
                  <ArrowRight size={18} strokeWidth={2.25} />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-sm transition-all duration-200 min-h-[52px]"
                >
                  <span>Explore Products</span>
                </Link>
              </div>

              {/* Secondary Utility Links */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/80">
                <a
                  href={region.catalogueUrl}
                  download
                  className="inline-flex items-center gap-1.5 font-semibold text-[#DFC07A] hover:text-white transition-colors py-1"
                >
                  <Download size={15} strokeWidth={2} />
                  <span>Download {region.shortLabel} Catalogue (PDF)</span>
                </a>
                <span className="hidden sm:inline text-white/30">&bull;</span>
                <Link
                  to="/request-samples"
                  className="inline-flex items-center gap-1.5 font-medium text-white/85 hover:text-white transition-colors py-1"
                >
                  <Package size={15} strokeWidth={1.75} />
                  <span>Order Physical Swatch Samples</span>
                </Link>
              </div>
            </div>

            {/* Right Floating Glass Spec Callout Card (Inland-Inspired Editorial Pattern) */}
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <div className="bg-white/95 backdrop-blur-md text-ink rounded-2xl p-6 shadow-2xl border border-white/60 max-w-md w-full">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--theme-color)]/10 text-[var(--theme-color)]">
                    Commercial Specification
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {region.measurementSystem}
                  </span>
                </div>
                <p className="font-display font-bold text-lg text-ink mb-1">
                  Built for 150+ Commercial Wash Cycles
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Long-staple T-180 / T-250 percales, 500–650 GSM ring-spun terry, and compliant clinical textiles backed by {region.shortLabel} fulfillment.
                </p>
                <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-200/80 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                    <ShieldCheck size={15} className="text-[var(--theme-color)] shrink-0" />
                    <span>OEKO-TEX® 100</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                    <Award size={15} className="text-[var(--theme-color)] shrink-0" />
                    <span>WRAP Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Compliance & Institutional Standards Strip */}
      <section className="bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center shrink-0">
                <ShieldCheck size={20} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-ink">OEKO-TEX® Standard 100</p>
                <p className="text-xs text-slate-500">Certified skin-safe textiles</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center shrink-0">
                <Award size={20} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-ink">WRAP Certified Production</p>
                <p className="text-xs text-slate-500">Ethical, audited manufacturing</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center shrink-0">
                <Layers size={20} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-ink">
                  {region.isPH ? 'Tropical Sanitation Grade' : 'CPSC 16 CFR & NFPA 701'}
                </p>
                <p className="text-xs text-slate-500">High-temp commercial laundering</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#C49A45]/15 text-[#9A7426] flex items-center justify-center shrink-0">
                <Clock size={20} strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-ink">Three Generations of Craft</p>
                <p className="text-xs text-slate-500">Direct mill &amp; B2B fulfillment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Industries We Serve */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9A7426] mb-2">
              Industries We Serve
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-3">
              Tailored B2B Textile Programs by Sector
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every vertical has distinct laundering, comfort, and compliance demands. Explore programs engineered specifically for your facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.link}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[var(--theme-color)]/40 transition-all duration-300 overflow-hidden flex flex-col h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 text-[11px] font-semibold text-ink shadow-xs">
                      <Icon size={13} className="text-[var(--theme-color)]" />
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col flex-grow">
                    <h3 className="font-display text-xl font-bold text-ink group-hover:text-[var(--theme-color)] transition-colors mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {item.description}
                    </p>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={15} className="text-[var(--theme-color)] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--theme-color)] group-hover:gap-2.5 transition-all">
                      Explore Sector Solutions <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Interactive Textile Suites Grid (All Cards Clickable) */}
      <section className="py-16 lg:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#9A7426] mb-2">
                Product Catalogue
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-3">
                Explore Our Textile Suites
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Click any suite below to jump directly to specifications, or download the complete {region.shortLabel} PDF Catalogue.
              </p>
            </div>
            <a
              href={region.catalogueUrl}
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 bg-linen hover:bg-surface-muted text-sm font-semibold text-ink transition-colors shrink-0 self-start md:self-auto"
            >
              <Download size={16} className="text-[var(--theme-color)]" />
              <span>Download PDF Catalogue</span>
            </a>
          </div>

          <div className="flex flex-col gap-6">
            {/* Top Row: 2 Wide Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredSuitesTop.map((suite) => (
                <Link
                  key={suite.title}
                  to={suite.link}
                  className="group relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 block"
                >
                  <img
                    src={suite.image}
                    alt={suite.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/15" />
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white">
                        {suite.category}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                        {suite.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {suite.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm text-xs font-medium text-white/95"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#DFC07A] group-hover:gap-2.5 transition-all">
                        View Suite Details <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Row: 4 Interactive Cards (1-Col Mobile, 2-Col Tablet, 4-Col Desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredSuitesBottom.map((suite) => (
                <Link
                  key={suite.title}
                  to={suite.link}
                  className="group relative aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/4.3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 block"
                >
                  <img
                    src={suite.image}
                    alt={suite.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/50 to-slate-950/15" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white">
                        {suite.category}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white leading-snug mb-2.5">
                        {suite.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {suite.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-white/15 backdrop-blur-sm text-[11px] font-medium text-white/95"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#DFC07A] group-hover:gap-2 transition-all">
                        Explore Suite <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Featured Commercial Specifications (Actionable Conversion Cards) */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#9A7426] mb-2">
                Commercial Inventory
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-3">
                Featured Institutional Specifications
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Heavy-duty weaving inventory constructed to lower annual linen replacement costs.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--theme-color)] hover:underline shrink-0"
            >
              Browse Full Product Catalogue <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {productSpecs.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-[var(--theme-color)] shadow-xs">
                    {item.badge}
                  </span>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-bold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {item.subtitle}
                  </p>

                  <ul className="space-y-2.5 mb-7 flex-grow">
                    {item.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-[var(--theme-color)] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <Link
                      to={item.detailLink}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] text-white text-sm font-semibold transition-colors min-h-[44px]"
                    >
                      View Specifications <ArrowRight size={15} />
                    </Link>
                    <Link
                      to="/contact?inquiry=quote"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg border border-slate-300 hover:border-[var(--theme-color)] hover:text-[var(--theme-color)] text-slate-700 text-sm font-semibold transition-colors min-h-[44px]"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Bespoke Embroidery & Private Labeling Breakout */}
      <section className="relative py-20 lg:py-24 bg-[#0F172A] overflow-hidden text-white">
        <img
          src="/Trendsetter-website-photos/Bespoke_Embroidery_&_Monogramming.png"
          alt="Custom institutional textile embroidery and private labeling"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.92) 100%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#DFC07A] mb-3">
              Custom Manufacturing Programs
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Bespoke Embroidery &amp; Private Labeling
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              From embroidered staff scrubs and monogrammed spa robes to tailored facility packaging, our vertically integrated production delivers brand consistency at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Bespoke Embroidery',
                desc: 'Precision monogramming and Pantone-matched logo stitching for uniforms, robes, and towels.',
                image: '/Trendsetter-website-photos/Bespoke_Embroidery_&_Monogramming.png'
              },
              {
                title: 'Branded Headwear & Apparel',
                desc: 'Custom facility caps, scrubs, and hospitality workwear aligned with your visual identity.',
                image: '/Trendsetter-website-photos/Custom_Branded_Headwear.png'
              },
              {
                title: 'Tailored Packaging & Bundling',
                desc: 'Custom property tags, laundry sorting labels, retail-ready bundles, and protective bags.',
                image: '/Trendsetter-website-photos/Tailored_Packaging_&_Bundling.png'
              }
            ].map((card) => (
              <Link
                key={card.title}
                to="/custom-programs"
                className="group bg-white/8 hover:bg-white/12 backdrop-blur-md rounded-2xl overflow-hidden border border-white/15 hover:border-[#DFC07A]/50 p-5 transition-all duration-300 block text-left"
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5 group-hover:text-[#DFC07A] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/custom-programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-bold text-sm sm:text-base text-[#0F172A] bg-[#C49A45] hover:bg-[#DFC07A] shadow-lg transition-colors min-h-[52px]"
            >
              Explore Custom Programs <ArrowRight size={17} />
            </Link>
            <Link
              to="/request-samples"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-semibold text-sm sm:text-base text-white border border-white/30 bg-white/5 hover:bg-white/15 transition-colors min-h-[52px]"
            >
              Request Physical Samples
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Quantified Textile Proof KPIs + 4-Step Procurement Process */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quantified Institutional Proof Band */}
          <div
            className="rounded-2xl p-8 sm:p-10 lg:p-12 text-white mb-16 shadow-lg"
            style={{ backgroundColor: region.theme.primaryDark }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
              <div>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#DFC07A] mb-1">
                  3 Generations
                </p>
                <p className="text-xs sm:text-sm text-white/80 font-medium">
                  Vertically integrated textile expertise
                </p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  150+ Cycles
                </p>
                <p className="text-xs sm:text-sm text-white/80 font-medium">
                  High-temp commercial wash rating
                </p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  500–650 GSM
                </p>
                <p className="text-xs sm:text-sm text-white/80 font-medium">
                  High-loft ring-spun bath terry
                </p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#DFC07A] mb-1">
                  {region.isPH ? 'PH Fulfillment Hub' : 'US Fulfillment Hub'}
                </p>
                <p className="text-xs sm:text-sm text-white/80 font-medium">
                  {region.isPH
                    ? 'Silang, Cavite warehouse & nationwide dispatch'
                    : 'Los Angeles nationwide logistics'}
                </p>
              </div>
            </div>
          </div>

          {/* 4-Step B2B Procurement Process */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9A7426] mb-2">
              How Procurement Works
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-3">
              A Dependable Supply Partner from Day One
            </h2>
            <p className="text-base text-slate-600">
              Streamlined institutional onboarding designed for healthcare administrators, executive housekeepers, and purchasing teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {procurementSteps.map((step) => (
              <div
                key={step.number}
                className="bg-linen rounded-2xl p-6 border border-slate-200/80 flex flex-col"
              >
                <span className="font-display text-3xl font-extrabold text-[var(--theme-color)]/25 mb-3">
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-bold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/request-samples"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] text-white font-semibold text-sm sm:text-base shadow-sm transition-colors min-h-[48px]"
            >
              Request Physical Samples <ArrowRight size={16} />
            </Link>
            <a
              href={region.catalogueUrl}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-slate-300 bg-white hover:bg-linen text-ink font-semibold text-sm sm:text-base transition-colors min-h-[48px]"
            >
              <Download size={16} className="text-[var(--theme-color)]" />
              Download {region.shortLabel} Catalogue (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Section 8: High-Contrast Split "Let's Discuss Your Needs" Lead-Gen Band */}
      <section
        id="contact-section"
        className="relative py-20 lg:py-24 overflow-hidden"
        style={{ backgroundColor: region.theme.primaryDark }}
      >
        <img
          src="/Trendsetter-website-photos/procurement_warehouse.png"
          alt="Trendsetter Textiles institutional fulfillment warehouse"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background: region.isPH
              ? 'linear-gradient(110deg, rgba(27,50,59,0.95) 0%, rgba(27,50,59,0.88) 100%)'
              : 'linear-gradient(110deg, rgba(15,45,36,0.95) 0%, rgba(15,45,36,0.88) 100%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Direct Regional Contact & Rep Info */}
            <div className="lg:col-span-5 text-white text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-[#DFC07A] mb-3">
                Let&apos;s Talk Procurement
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Ready to standardize your facility&apos;s linen supply?
              </h2>
              <p className="text-base text-white/80 leading-relaxed mb-8">
                Whether you need volume pricing on standard inventory, physical swatch samples, or a presentation for your purchasing team, our {region.regionName} team is ready to assist.
              </p>

              {/* Dedicated Regional Representative Card */}
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5 mb-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#DFC07A] mb-1">
                  {region.representative.role}
                </p>
                <p className="font-display text-xl font-bold text-white mb-2">
                  {region.representative.name}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={`tel:${region.representative.tel}`}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-sm font-semibold text-white transition-colors"
                  >
                    <Phone size={15} className="text-[#DFC07A]" />
                    <span>{region.representative.phone}</span>
                  </a>
                  <a
                    href={region.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-sm font-semibold text-white transition-colors"
                  >
                    <MessageCircle size={15} className="text-[#4ADE80]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Email & Headquarters */}
              <div className="space-y-3 text-sm text-white/85 mb-8">
                <a
                  href={`mailto:${region.email}`}
                  className="flex items-center gap-2.5 hover:text-[#DFC07A] transition-colors"
                >
                  <Mail size={16} className="text-[#DFC07A] shrink-0" />
                  <span className="break-all">{region.email}</span>
                </a>
                <div className="flex items-center gap-2.5 text-white/75">
                  <MapPin size={16} className="text-[#DFC07A] shrink-0" />
                  <span>{region.headquarters}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm font-semibold">
                <Link
                  to="/contact?inquiry=presentation"
                  className="inline-flex items-center gap-1.5 text-[#DFC07A] hover:text-white transition-colors"
                >
                  Schedule a Presentation <ArrowRight size={15} />
                </Link>
                <Link
                  to="/request-samples"
                  className="inline-flex items-center gap-1.5 text-white/85 hover:text-white transition-colors"
                >
                  Request Physical Samples <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column: Pure White Elevated Quote Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-9 text-ink">
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-ink">
                    Request a Quote
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Our {region.shortLabel} procurement team responds within one business day.
                  </p>
                </div>

                {isSuccess && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl flex items-start gap-3">
                    <CheckCircle2 strokeWidth={2} size={20} className="mt-0.5 shrink-0 text-emerald-600" />
                    <div>
                      <h4 className="font-bold text-sm">Inquiry received</h4>
                      <p className="text-sm text-emerald-800">
                        Thank you. Our {region.shortLabel} team will follow up shortly.
                      </p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-sm">
                    {submitError}
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="home-fullName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <UserPlus strokeWidth={1.75} size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                        <input
                          id="home-fullName"
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-3.5 py-2.5 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="home-company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Facility or Company *
                      </label>
                      <div className="relative">
                        <Building2 strokeWidth={1.75} size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                        <input
                          id="home-company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-3.5 py-2.5 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                          placeholder="Hospital, Clinic, or Hotel"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="home-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail strokeWidth={1.75} size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                        <input
                          id="home-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-3.5 py-2.5 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                          placeholder="you@facility.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="home-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone strokeWidth={1.75} size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                        <input
                          id="home-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-3.5 py-2.5 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                          placeholder={region.isPH ? '+63 9XX XXX XXXX' : '+1 (555) 000-0000'}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="home-volume" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Estimated Order Volume
                    </label>
                    <div className="relative">
                      <Package strokeWidth={1.75} size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <select
                        id="home-volume"
                        name="orderVolume"
                        value={formData.orderVolume}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                      >
                        <option value="Low Volume (Under 100 units)">Low Volume (Under 100 units)</option>
                        <option value="Medium Volume (100–500 units)">Medium Volume (100–500 units)</option>
                        <option value="Enterprise/Bulk (500+ units / Recurring Contract)">
                          Enterprise / Bulk (500+ units / Recurring Contract)
                        </option>
                      </select>
                    </div>
                  </div>

                  {region.isPH ? (
                    <div>
                      <label htmlFor="home-tin" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Tax Identification Number (TIN) for Official Receipts{' '}
                        <span className="font-normal text-slate-400">(Optional)</span>
                      </label>
                      <div className="relative">
                        <FileCheck strokeWidth={1.75} size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                        <input
                          id="home-tin"
                          type="text"
                          name="tin"
                          value={formData.tin}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3.5 py-2.5 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                          placeholder="000-000-000-000"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        name="taxExemption"
                        checked={formData.taxExemption}
                        onChange={handleChange}
                        id="taxExemptionHome"
                        className="mt-0.5 shrink-0 accent-[var(--theme-color)] w-4 h-4"
                      />
                      <label htmlFor="taxExemptionHome" className="text-xs sm:text-sm text-slate-700 cursor-pointer">
                        Require Tax Exemption / Resale Exemption Certificate{' '}
                        <span className="text-slate-400">(Optional)</span>
                      </label>
                    </div>
                  )}

                  <div>
                    <label htmlFor="home-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Project Specifications or Questions *
                    </label>
                    <div className="relative">
                      <FileSignature strokeWidth={1.75} size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <textarea
                        id="home-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="3"
                        className="w-full pl-10 pr-3.5 py-2.5 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors resize-none"
                        placeholder="Tell us about your textile categories, target quantities, or delivery schedule..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex justify-center items-center gap-2 text-white font-bold py-3.5 rounded-lg text-sm sm:text-base shadow-md transition-all min-h-[48px] bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] cursor-pointer ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    <Send size={16} strokeWidth={2} />
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Quote Request'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
