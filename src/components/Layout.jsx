import React, { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const region = useRegion();
  return (
    <div className="min-h-screen bg-neutral-bg text-slate font-sans flex flex-col">
      {/* Top Contact Bar */}
      <div className="text-neutral-bg py-2 sm:py-3" style={{ backgroundColor: region.theme.primaryBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 text-center">
            <div className="flex flex-col sm:flex-row items-center">
              <a href={`tel:${region.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center hover:text-deep-teal transition-colors font-medium whitespace-nowrap">
                <Phone size={14} className="mr-1.5 shrink-0" />
                {region.phone}
              </a>
              <span className="mt-1 sm:mt-0 sm:ml-2 text-xs opacity-75">{region.phoneLabel}</span>
            </div>
            <a href={`mailto:${region.email}`} className="flex items-center hover:text-deep-teal transition-colors text-xs sm:text-sm">
              <Mail size={14} className="mr-1.5 shrink-0" />
              <span className="truncate max-w-[280px] sm:max-w-none">{region.email}</span>
            </a>
          </div>
          <div className="hidden lg:block opacity-80 text-xs tracking-wider uppercase font-medium mt-3 lg:mt-0">
            {region.heroTagline}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate/10 shadow-sm">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/Trendsetter-website-photos/Trendsetter-Logo.png" 
                  alt="Trendsetter Textiles Logo" 
                  className="w-[180px] h-auto object-contain bg-transparent"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              <NavLink to="/home" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'hover:text-deep-teal'}`} style={({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {}}>HOME</NavLink>
              
              <div className="relative group py-8">
                <NavLink to="/industries" className={({isActive}) => `flex items-center gap-1 uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'hover:text-deep-teal'}`} style={({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {}}>
                  INDUSTRIES <ChevronDown size={16} />
                </NavLink>
                <div className="absolute top-full left-0 w-56 bg-white border border-slate/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                  <div className="py-2">
                    <Link to="/industries/nursing-homes" className="block px-4 py-2 hover:bg-neutral-bg hover:text-deep-teal transition-colors font-medium">Nursing Homes</Link>
                    <Link to="/industries/medical-clinics" className="block px-4 py-2 hover:bg-neutral-bg hover:text-deep-teal transition-colors font-medium">Medical Clinics</Link>
                    <Link to="/industries/hotels" className="block px-4 py-2 hover:bg-neutral-bg hover:text-deep-teal transition-colors font-medium">Hotels</Link>
                  </div>
                </div>
              </div>

              <NavLink to="/products" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'hover:text-deep-teal'}`} style={({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {}}>PRODUCTS</NavLink>
              <NavLink to="/custom-programs" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'hover:text-deep-teal'}`} style={({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {}}>CUSTOM PROGRAMS</NavLink>
              <NavLink to="/about" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'hover:text-deep-teal'}`} style={({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {}}>ABOUT</NavLink>
              <NavLink to="/contact" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'text-neutral-bg' : 'hover:text-deep-teal'}`} style={({isActive}) => isActive ? { backgroundColor: region.theme.primaryBg } : {}}>CONTACT</NavLink>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-deep-teal p-2 focus:outline-none">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
      <footer className="text-neutral-bg pt-16 pb-8 mt-auto" style={{ backgroundColor: region.theme.primaryBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <img 
                src="/Trendsetter-website-photos/Trendsetter-Logo.png" 
                alt="Trendsetter Textiles Logo" 
                className="w-[150px] h-auto object-contain bg-white/90 p-2 rounded mb-6"
              />
              <p className="opacity-80 text-sm leading-relaxed mb-6">
                {region.footerDescription}
              </p>
              <div className="space-y-2">
                <div>
                  <a href={`tel:${region.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center text-sm hover:text-deep-teal transition-colors">
                    <Phone size={14} className="mr-2" />
                    {region.phone}
                  </a>
                  <p className="text-xs opacity-75 mt-1 ml-5">{region.phoneLabel}</p>
                </div>
                <a href={`mailto:${region.email}`} className="flex items-center text-sm hover:text-deep-teal transition-colors">
                  <Mail size={14} className="mr-2" />
                  {region.email}
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-deep-teal">Industries</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/industries/nursing-homes" className="hover:text-white transition-colors">Nursing Homes / Hospitals</Link></li>
                <li><Link to="/industries/medical-clinics" className="hover:text-white transition-colors">Medical Clinics</Link></li>
                <li><Link to="/industries/hotels" className="hover:text-white transition-colors">Hotels</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-deep-teal">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/custom-programs" className="hover:text-white transition-colors">Custom Programs</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-deep-teal">Procurement</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/contact" className="hover:text-white transition-colors">Schedule a Presentation</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Request a Quote</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-bg/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
            <p>&copy; {new Date().getFullYear()} Trendsetter Textiles Inc. All rights reserved. Servicing the United States.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
