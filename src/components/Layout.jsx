import React, { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { Phone, Mail, ChevronDown, Menu, X, MessageCircle, Download } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const region = useRegion();
  const navStyle = ({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {};
  return (
    <div className="min-h-screen text-slate font-sans flex flex-col" style={{ backgroundColor: region.theme.pageBg, '--theme-color': region.theme.primaryBg, '--theme-secondary': region.theme.secondaryBg, '--theme-page-bg': region.theme.pageBg, '--theme-card-bg': region.theme.cardBg }}>
      {/* Top Contact Bar */}
      <div className="text-neutral-bg py-2 sm:py-3" style={{ backgroundColor: region.theme.primaryBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-sm gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
            <div className="flex items-center">
              <a href={`tel:${region.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center hover:opacity-80 transition-opacity font-medium whitespace-nowrap">
                <Phone strokeWidth={1.5} size={14} className="mr-1.5 shrink-0" />
                {region.phone}
              </a>
              <span className="ml-2 text-xs opacity-75 hidden sm:inline">{region.phoneLabel}</span>
            </div>
            <Link to="/contact" className="px-3 py-0.5 rounded bg-white/10 hover:bg-white text-white hover:text-[var(--theme-color)] border border-white/20 hover:border-white font-bold text-xs uppercase tracking-wider transition-all duration-300">
              Contact Us
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-6 mt-3 lg:mt-0">
            <span className="opacity-80 text-xs tracking-wider uppercase font-medium">{region.heroTagline}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate/10 shadow-sm">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6 min-h-[5rem]">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/Trendsetter-Logo.svg" 
                  alt="Trendsetter Textiles Logo" 
                  className="w-48 md:w-64 lg:w-72 h-auto object-contain mix-blend-multiply logo-optimize"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              <NavLink to="/home" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'hover:text-[var(--theme-color)]'}`} style={navStyle}>HOME</NavLink>
              
              <div className="relative group py-8">
                <NavLink to="/industries" className={({isActive}) => `flex items-center gap-1 uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'hover:text-[var(--theme-color)]'}`} style={navStyle}>
                  INDUSTRIES <ChevronDown strokeWidth={1.5} size={16} />
                </NavLink>
                <div className="absolute top-full left-0 w-56 bg-white border border-slate/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                  <div className="py-2">
                    <Link to="/industries/nursing-homes" className="block px-4 py-2 hover:bg-neutral-bg hover:text-[var(--theme-color)] transition-colors font-medium">Nursing Homes</Link>
                    <Link to="/industries/medical-clinics" className="block px-4 py-2 hover:bg-neutral-bg hover:text-[var(--theme-color)] transition-colors font-medium">Medical Clinics</Link>
                    <Link to="/industries/hotels" className="block px-4 py-2 hover:bg-neutral-bg hover:text-[var(--theme-color)] transition-colors font-medium">Hotels</Link>
                  </div>
                </div>
              </div>

              <NavLink to="/products" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'hover:text-[var(--theme-color)]'}`} style={navStyle}>PRODUCTS</NavLink>
              <NavLink to="/custom-programs" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'hover:text-[var(--theme-color)]'}`} style={navStyle}>CUSTOM PROGRAMS</NavLink>
              <NavLink to="/about" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'hover:text-[var(--theme-color)]'}`} style={navStyle}>ABOUT</NavLink>
              <NavLink to="/contact" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'hover:text-[var(--theme-color)]'}`} style={navStyle}>CONTACT</NavLink>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[var(--theme-color)] p-2 focus:outline-none">
                {isMobileMenuOpen ? <X strokeWidth={1.5} size={28} /> : <Menu strokeWidth={1.5} size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white overflow-y-auto border-b border-slate/10 shadow-2xl py-6 px-4 flex flex-col space-y-2 z-40">
            <NavLink to="/home" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => `uppercase font-bold text-lg px-6 py-4 rounded-xl transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'text-slate hover:bg-neutral-bg'}`} style={({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {}}>HOME</NavLink>
            <NavLink to="/industries" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => `uppercase font-bold text-lg px-6 py-4 rounded-xl transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'text-slate hover:bg-neutral-bg'}`} style={({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {}}>INDUSTRIES</NavLink>
            <NavLink to="/products" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => `uppercase font-bold text-lg px-6 py-4 rounded-xl transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'text-slate hover:bg-neutral-bg'}`} style={({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {}}>PRODUCTS</NavLink>
            <NavLink to="/custom-programs" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => `uppercase font-bold text-lg px-6 py-4 rounded-xl transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'text-slate hover:bg-neutral-bg'}`} style={({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {}}>CUSTOM PROGRAMS</NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => `uppercase font-bold text-lg px-6 py-4 rounded-xl transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'text-slate hover:bg-neutral-bg'}`} style={({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {}}>ABOUT</NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={({isActive}) => `uppercase font-bold text-lg px-6 py-4 rounded-xl transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'text-slate hover:bg-neutral-bg'}`} style={({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {}}>CONTACT</NavLink>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Enterprise Footer */}
      <footer className="pt-16 pb-8 mt-auto text-neutral-bg" style={{ backgroundColor: region.theme.primaryBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
            <div className="sm:col-span-2 md:col-span-1">
              <img 
                src="/Trendsetter-Logo.svg" 
                alt="Trendsetter Textiles Logo" 
                className="h-16 md:h-20 w-auto max-w-[250px] object-contain mb-6 logo-optimize"
                style={{ filter: 'grayscale(100%) contrast(500%) invert(100%)', mixBlendMode: 'screen' }}
              />
              <p className="text-sm leading-relaxed mb-6 font-medium opacity-90 text-white">
                {region.phone.includes('+63') 
                  ? 'Dependable institutional bedding, hygiene textiles, and apparel for post-acute and long-term care facilities across the Philippines.' 
                  : 'Dependable institutional bedding, hygiene textiles, and apparel for post-acute and long-term care facilities across the USA.'}
              </p>
              <div className="space-y-2">
                <a href={`mailto:${region.email}`} className="flex items-center text-sm transition-colors text-white hover:opacity-80">
                  <Mail strokeWidth={1.5} size={14} className="mr-2" />
                  {region.email}
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Industries</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><Link to="/industries/nursing-homes" className="transition-colors text-white hover:opacity-80">Nursing Homes / Hospitals</Link></li>
                <li><Link to="/industries/medical-clinics" className="transition-colors text-white hover:opacity-80">Medical Clinics</Link></li>
                <li><Link to="/industries/hotels" className="transition-colors text-white hover:opacity-80">Hotels</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><Link to="/about" className="transition-colors text-white hover:opacity-80">About Us</Link></li>
                <li><Link to="/custom-programs" className="transition-colors text-white hover:opacity-80">Custom Programs</Link></li>
                <li><Link to="/contact" className="transition-colors text-white hover:opacity-80">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Procurement</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <a href="/Trendsetter_Textiles_Catalog.pdf" download className="inline-flex items-center gap-1.5 font-bold transition-colors text-[#25D366] hover:text-white">
                    <Download strokeWidth={1.5} size={14} /> Download Catalog (PDF)
                  </a>
                </li>
                <li><Link to="/contact?inquiry=samples" className="transition-colors text-white hover:opacity-80">Request Physical Samples</Link></li>
                <li><Link to="/contact?inquiry=presentation" className="transition-colors text-white hover:opacity-80">Schedule a Presentation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><Link to="/privacy" className="transition-colors text-white hover:opacity-80">Privacy Policy</Link></li>
                <li><Link to="/terms" className="transition-colors text-white hover:opacity-80">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center border-white/30 text-white opacity-80 gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} Trendsetter Textiles Inc. All rights reserved. Servicing the {region.phone.includes('+63') ? 'Philippines' : 'United States'}.</p>
            <div className="flex items-center gap-2">
              <Mail strokeWidth={1.5} size={14} />
              <a href={`mailto:${region.email}`} className="hover:underline">{region.email}</a>
            </div>
            <div className="flex gap-4">
              <Link to="/home" className="hover:underline">Home</Link>
              <Link to="/products" className="hover:underline">Products</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button for Philippine Site */}
      {region.countryCode === 'ph' && (
        <a 
          href="https://api.whatsapp.com/send?phone=639524684603"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[999] flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 transition-transform hover:scale-110 group cursor-pointer"
        >
          <MessageCircle strokeWidth={1.5} size={28} />
          {/* Tooltip / Badge */}
          <span className="absolute right-full mr-4 bg-slate text-neutral-bg text-xs md:text-sm font-bold uppercase tracking-wider py-2 px-4 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-2 before:border-8 before:border-transparent before:border-l-slate flex items-center">
            Chat with Us <span className="text-[10px] md:text-xs ml-1.5 opacity-90 font-normal normal-case tracking-normal">(Via WhatsApp)</span>
          </span>
        </a>
      )}
    </div>
  );
}
