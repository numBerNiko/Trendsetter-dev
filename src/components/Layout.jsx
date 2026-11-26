import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Download,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  Hotel,
  Layers,
  UtensilsCrossed,
  BedDouble,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const region = useRegion();

  const switchRegion = (targetRegion) => {
    const currentPath = window.location.pathname;
    const isCurrentlyPH = currentPath === '/ph' || currentPath.startsWith('/ph/');

    let pathWithoutRegion = isCurrentlyPH ? currentPath.replace(/^\/ph/, '') : currentPath;
    if (pathWithoutRegion === '') pathWithoutRegion = '/';

    const newPath =
      targetRegion === 'ph'
        ? `/ph${pathWithoutRegion === '/' ? '' : pathWithoutRegion}`
        : pathWithoutRegion;

    if (currentPath !== newPath) {
      window.location.href = newPath;
    }
  };

  // SEO & Path-Based Hreflang Logic
  useEffect(() => {
    const isPH = region.isPH;
    document.title = isPH
      ? 'Trendsetter Textiles Inc. | Hotel Linens & Hospital Bedding Philippines'
      : 'Trendsetter Textiles Inc. | Healthcare & Hospitality Linens USA';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        isPH
          ? 'Leading commercial towels wholesale Manila and bulk institutional linens supplier. Supplying premium bedding to hotels & clinics across the Philippines.'
          : 'Leading wholesale supplier of institutional healthcare and hospitality linens, towels, and clinical apparel across the United States.'
      );
    }

    document.querySelectorAll('link[rel="alternate"]').forEach((el) => el.remove());

    const addLink = (hreflang, href) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = href;
      document.head.appendChild(link);
    };

    addLink('en-us', 'https://www.trendsettertextiles.com');
    addLink('en-ph', 'https://www.trendsettertextiles.com/ph');
    addLink('x-default', 'https://www.trendsettertextiles.com');
  }, [region.isPH]);

  const desktopNavClass = ({ isActive }) =>
    `relative px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-semibold tracking-tight rounded-lg whitespace-nowrap transition-colors duration-200 ${
      isActive
        ? 'text-[var(--theme-color)] bg-[var(--theme-color)]/8'
        : 'text-slate-700 hover:text-[var(--theme-color)] hover:bg-slate-100/80'
    }`;

  const mobileNavClass = ({ isActive }) =>
    `flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-colors min-h-[48px] ${
      isActive
        ? 'bg-[var(--theme-color)] text-white'
        : 'text-slate-800 hover:bg-slate-100'
    }`;

  return (
    <div
      className="min-h-screen text-ink font-sans flex flex-col"
      style={{
        backgroundColor: region.theme.pageBg,
        '--theme-color': region.theme.primaryBg,
        '--theme-hover': region.theme.primaryHover,
        '--theme-dark': region.theme.primaryDark,
        '--theme-secondary': region.theme.secondaryBg,
        '--theme-page-bg': region.theme.pageBg,
        '--theme-card-bg': region.theme.cardBg,
        '--theme-gold': region.theme.accentGold
      }}
    >
      {/* Tier 1: Slim Executive Utility Bar */}
      <div
        className="text-white/90 text-xs border-b border-white/10"
        style={{ backgroundColor: region.theme.primaryDark }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3">
          {/* Left: Direct Phone & Email */}
          <div className="flex items-center gap-4 min-w-0">
            <a
              href={`tel:${region.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 font-medium text-white hover:text-[#DFC07A] transition-colors whitespace-nowrap"
            >
              <Phone strokeWidth={1.75} size={13} className="text-[#DFC07A] shrink-0" />
              <span>{region.phone}</span>
              <span className="hidden sm:inline text-white/60 font-normal">({region.phoneLabel})</span>
            </a>
            <span className="hidden md:inline text-white/25">|</span>
            <a
              href={`mailto:${region.email}`}
              className="hidden md:inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors truncate"
            >
              <Mail strokeWidth={1.75} size={13} className="text-[#DFC07A] shrink-0" />
              <span>{region.email}</span>
            </a>
          </div>

          {/* Right: Certification Pill & Region Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C49A45]/15 border border-[#C49A45]/35 text-[#DFC07A] font-semibold tracking-wide">
              <ShieldCheck size={12} strokeWidth={2} />
              OEKO-TEX® &amp; WRAP Certified
            </span>

            <div
              className="flex items-center gap-0.5 rounded-md border border-white/20 bg-white/5 p-0.5"
              role="group"
              aria-label="Select region"
            >
              <button
                type="button"
                onClick={() => switchRegion('us')}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  !region.isPH
                    ? 'bg-white text-[#0F2D24] shadow-xs'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                USA
              </button>
              <button
                type="button"
                onClick={() => switchRegion('ph')}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  region.isPH
                    ? 'bg-white text-[#1B323B] shadow-xs'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Philippines
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Crisp Sticky Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <div className="flex items-center justify-between h-[68px] lg:h-[76px] gap-2 xl:gap-4">
            {/* Brand Logo */}
            <Link to="/home" className="flex items-center shrink-0" aria-label="Trendsetter Textiles Home">
              <img
                src="/Official_logo.svg?v=2"
                alt="Trendsetter Textiles"
                width="160"
                height="56"
                fetchPriority="high"
                className="h-11 xl:h-14 w-auto object-contain block logo-optimize"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5" aria-label="Primary navigation">
              <NavLink to="/home" className={desktopNavClass}>
                Home
              </NavLink>

              {/* Industries Dropdown */}
              <div className="relative group py-5">
                <NavLink
                  to="/industries"
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-semibold tracking-tight rounded-lg whitespace-nowrap transition-colors duration-200 ${
                      isActive
                        ? 'text-[var(--theme-color)] bg-[var(--theme-color)]/8'
                        : 'text-slate-700 hover:text-[var(--theme-color)] hover:bg-slate-100/80'
                    }`
                  }
                >
                  <span>Industries</span>
                  <ChevronDown strokeWidth={2} size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>
                <div className="absolute top-full left-0 w-76 bg-white border border-slate-200/90 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50 p-2">
                  <Link
                    to="/industries/nursing-homes"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-linen transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-[var(--theme-color)]/10 text-[var(--theme-color)] shrink-0 mt-0.5">
                      <HeartHandshake size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink group-hover/item:text-[var(--theme-color)]">
                        Nursing Homes &amp; Hospitals
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Post-acute bedding, hygiene &amp; compliant care textiles
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/industries/medical-clinics"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-linen transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-[var(--theme-color)]/10 text-[var(--theme-color)] shrink-0 mt-0.5">
                      <Stethoscope size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink group-hover/item:text-[var(--theme-color)]">
                        Medical Clinics
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Outpatient exam linens, gowns &amp; clinical scrubs
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/industries/hotels"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-linen transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-[var(--theme-color)]/10 text-[var(--theme-color)] shrink-0 mt-0.5">
                      <Hotel size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink group-hover/item:text-[var(--theme-color)]">
                        Hotels, Resorts &amp; F&amp;B
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Guest suites, bath terry, robes &amp; banquet linens
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Products & Catalogue Dropdown */}
              <div className="relative group py-5">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-semibold tracking-tight rounded-lg whitespace-nowrap transition-colors duration-200 ${
                      isActive
                        ? 'text-[var(--theme-color)] bg-[var(--theme-color)]/8'
                        : 'text-slate-700 hover:text-[var(--theme-color)] hover:bg-slate-100/80'
                    }`
                  }
                >
                  <span>Products</span>
                  <ChevronDown strokeWidth={2} size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </NavLink>
                <div className="absolute top-full left-0 w-80 bg-white border border-slate-200/90 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50 p-2">
                  <Link
                    to="/products"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-linen transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-[var(--theme-color)]/10 text-[var(--theme-color)] shrink-0 mt-0.5">
                      <Layers size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink group-hover/item:text-[var(--theme-color)]">
                        All Textile Suites
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Browse bedding, bath terry, apparel &amp; clinical lines
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/products/fb-restaurant"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-linen transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-[var(--theme-color)]/10 text-[var(--theme-color)] shrink-0 mt-0.5">
                      <UtensilsCrossed size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink group-hover/item:text-[var(--theme-color)]">
                        F&amp;B / Banquet Specifications
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Standardized SKUs in {region.measurementSystem}
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/products"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-linen transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-[var(--theme-color)]/10 text-[var(--theme-color)] shrink-0 mt-0.5">
                      <BedDouble size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink group-hover/item:text-[var(--theme-color)]">
                        Institutional Bedding &amp; Terry
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        T-180/T-250 percales &amp; 500–650 GSM bath terry
                      </p>
                    </div>
                  </Link>
                  <div className="mt-1 pt-2 border-t border-slate-100">
                    <a
                      href={region.catalogueUrl}
                      download
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-linen hover:bg-surface-muted text-xs font-semibold text-[var(--theme-color)] transition-colors"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Download size={14} strokeWidth={2} />
                        Download {region.shortLabel} PDF Catalogue
                      </span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <NavLink to="/custom-programs" className={desktopNavClass}>
                Custom Programs
              </NavLink>
              <NavLink to="/about" className={desktopNavClass}>
                About
              </NavLink>
              <NavLink to="/contact" className={desktopNavClass}>
                Contact
              </NavLink>
            </nav>

            {/* Right Desktop Conversion Actions */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 shrink-0">
              <Link
                to="/request-samples"
                className="px-2.5 xl:px-3.5 py-2 xl:py-2.5 rounded-lg text-[13px] xl:text-sm font-semibold text-slate-700 hover:text-[var(--theme-color)] hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                Request Samples
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-lg text-[13px] xl:text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:shadow-md whitespace-nowrap bg-[var(--theme-color)] hover:bg-[var(--theme-hover)]"
              >
                Request Quote
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/contact"
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] transition-colors min-h-[38px] inline-flex items-center"
              >
                Request Quote
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                className="text-slate-800 p-2 rounded-lg hover:bg-slate-100 focus:outline-none min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
              >
                {isMobileMenuOpen ? <X strokeWidth={2} size={24} /> : <Menu strokeWidth={2} size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full inset-x-0 h-[calc(100dvh-68px)] bg-white overflow-y-auto border-t border-slate-200 shadow-2xl z-50">
            <div className="p-5 flex flex-col gap-2 pb-16">
              {/* Region Selector inside Mobile Menu */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-linen border border-slate-200/80 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Region
                </span>
                <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      switchRegion('us');
                    }}
                    className={`text-xs font-semibold px-3.5 py-2 rounded-md min-h-[36px] transition-colors ${
                      !region.isPH
                        ? 'bg-[var(--theme-color)] text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    USA
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      switchRegion('ph');
                    }}
                    className={`text-xs font-semibold px-3.5 py-2 rounded-md min-h-[36px] transition-colors ${
                      region.isPH
                        ? 'bg-[var(--theme-color)] text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Philippines
                  </button>
                </div>
              </div>

              <NavLink to="/home" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavClass}>
                Home
              </NavLink>

              {/* Expandable Industries Accordion */}
              <div className="rounded-xl border border-slate-200/70 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-base font-semibold text-slate-800 hover:bg-slate-50 min-h-[48px]"
                >
                  <span>Industries</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      isMobileIndustriesOpen ? 'rotate-180 text-[var(--theme-color)]' : 'text-slate-500'
                    }`}
                  />
                </button>
                {isMobileIndustriesOpen && (
                  <div className="bg-linen/70 border-t border-slate-200/70 px-3 py-2 flex flex-col gap-1">
                    <Link
                      to="/industries/nursing-homes"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-white hover:text-[var(--theme-color)] min-h-[44px] flex items-center"
                    >
                      Nursing Homes &amp; Hospitals
                    </Link>
                    <Link
                      to="/industries/medical-clinics"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-white hover:text-[var(--theme-color)] min-h-[44px] flex items-center"
                    >
                      Medical Clinics
                    </Link>
                    <Link
                      to="/industries/hotels"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-white hover:text-[var(--theme-color)] min-h-[44px] flex items-center"
                    >
                      Hotels, Resorts &amp; F&amp;B
                    </Link>
                    <Link
                      to="/industries"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-3 rounded-lg text-sm font-semibold text-[var(--theme-color)] hover:bg-white min-h-[44px] flex items-center"
                    >
                      View All Industries &rarr;
                    </Link>
                  </div>
                )}
              </div>

              <NavLink to="/products" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavClass}>
                Products &amp; Catalogue
              </NavLink>
              <NavLink to="/custom-programs" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavClass}>
                Custom Programs
              </NavLink>
              <NavLink to="/request-samples" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavClass}>
                Request Physical Samples
              </NavLink>
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavClass}>
                About Us
              </NavLink>
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavClass}>
                Contact
              </NavLink>

              {/* Mobile Quick Actions & Rep Card */}
              <div className="mt-4 pt-5 border-t border-slate-200 space-y-3">
                <a
                  href={region.catalogueUrl}
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-slate-300 bg-linen text-sm font-semibold text-ink hover:bg-surface-muted min-h-[48px]"
                >
                  <Download size={16} />
                  Download {region.shortLabel} Catalogue (PDF)
                </a>
                <div className="p-4 rounded-xl bg-linen border border-slate-200/80 text-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    {region.representative.role}
                  </p>
                  <p className="font-bold text-ink">{region.representative.name}</p>
                  <a
                    href={`tel:${region.representative.tel}`}
                    className="inline-flex items-center gap-1.5 text-[var(--theme-color)] font-semibold mt-1"
                  >
                    <Phone size={14} />
                    {region.representative.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Enterprise Footer */}
      <footer
        className="pt-16 pb-10 mt-auto text-white/90"
        style={{ backgroundColor: region.theme.primaryDark }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-white/15">
            {/* Brand & Regional Contact Column */}
            <div className="md:col-span-2 lg:col-span-2">
              <Link to="/home" className="inline-block mb-5">
                <img
                  src="/Official_logo_light.svg?v=2"
                  alt="Trendsetter Textiles"
                  width="180"
                  height="64"
                  className="h-14 md:h-16 w-auto object-contain block"
                />
              </Link>
              <p className="text-sm leading-relaxed text-white/75 mb-6 max-w-sm">
                {region.footerDescription}
              </p>

              <div className="space-y-2.5 text-sm">
                <div className="flex items-center gap-2.5 text-white/90">
                  <Phone strokeWidth={1.75} size={15} className="text-[#DFC07A] shrink-0" />
                  <span>
                    <strong className="font-semibold text-white">{region.representative.name}:</strong>{' '}
                    <a
                      href={`tel:${region.representative.tel}`}
                      className="hover:text-[#DFC07A] transition-colors"
                    >
                      {region.representative.phone}
                    </a>
                  </span>
                </div>
                {region.isPH && (
                  <div className="flex items-center gap-2.5 text-white/80">
                    <MessageCircle strokeWidth={1.75} size={15} className="text-[#DFC07A] shrink-0" />
                    <a
                      href={region.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#DFC07A] transition-colors"
                    >
                      Corporate WhatsApp: {region.phone}
                    </a>
                  </div>
                )}
                <a
                  href={`mailto:${region.email}`}
                  className="flex items-center gap-2.5 text-white/80 hover:text-[#DFC07A] transition-colors"
                >
                  <Mail strokeWidth={1.75} size={15} className="text-[#DFC07A] shrink-0" />
                  <span className="break-all">{region.email}</span>
                </a>
                <div className="flex items-center gap-2.5 text-white/70">
                  <MapPin strokeWidth={1.75} size={15} className="text-[#DFC07A] shrink-0" />
                  <span>{region.headquarters}</span>
                </div>
              </div>
            </div>

            {/* Industries Column */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[#DFC07A] mb-4">
                Industries
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    to="/industries/nursing-homes"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    Nursing Homes &amp; Hospitals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries/medical-clinics"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    Medical Clinics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries/hotels"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    Hotels, Resorts &amp; F&amp;B
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    All Textile Suites
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[#DFC07A] mb-4">
                Company
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/custom-programs"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    Custom Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/fb-restaurant"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    F&amp;B Specifications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Procurement Column */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[#DFC07A] mb-4">
                Procurement
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="pb-1">
                  <a
                    href={region.catalogueUrl}
                    download
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#C49A45] hover:bg-[#DFC07A] text-[#0F172A] font-semibold text-xs tracking-wide transition-colors shadow-xs"
                  >
                    <Download strokeWidth={2} size={14} />
                    Download Catalogue (PDF)
                  </a>
                </li>
                <li>
                  <Link
                    to="/request-samples"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    Request Physical Samples
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact?inquiry=presentation"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    Schedule a Presentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact?inquiry=quote"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    Request Bulk Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[#DFC07A] mb-4">
                Legal
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    to="/privacy"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="inline-flex items-center py-2 sm:py-1 text-white/80 hover:text-white transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-5 text-xs text-white/70">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Trendsetter Textiles Inc. All rights reserved. Servicing the{' '}
              {region.regionName}.
            </p>

            <div className="flex items-center gap-1 border border-white/25 bg-white/5 rounded-lg p-1">
              <button
                type="button"
                onClick={() => switchRegion('us')}
                className={`px-3.5 py-2 sm:py-1.5 rounded-md min-h-[40px] sm:min-h-[32px] font-semibold transition-colors cursor-pointer ${
                  !region.isPH
                    ? 'bg-white text-[#0F2D24]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                USA
              </button>
              <button
                type="button"
                onClick={() => switchRegion('ph')}
                className={`px-3.5 py-2 sm:py-1.5 rounded-md min-h-[40px] sm:min-h-[32px] font-semibold transition-colors cursor-pointer ${
                  region.isPH
                    ? 'bg-white text-[#1B323B]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Philippines
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              <Link to="/home" className="py-1.5 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/products" className="py-1.5 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="/request-samples" className="py-1.5 hover:text-white transition-colors">
                Samples
              </Link>
              <Link to="/about" className="py-1.5 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="py-1.5 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button for Philippines Regional Site */}
      {region.isPH && (
        <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50">
          <a
            href={region.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Trendsetter Textiles Philippines on WhatsApp"
            className="flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 md:p-4 rounded-full shadow-xl shadow-[#25D366]/35 transition-transform hover:scale-105 group cursor-pointer"
          >
            <MessageCircle strokeWidth={1.75} size={26} />
            <span className="hidden md:flex absolute right-full mr-3.5 bg-[#0F172A] text-white text-xs font-semibold py-2 px-3.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none items-center gap-1.5">
              Chat on WhatsApp <span className="text-white/70 font-normal">({region.phone})</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
