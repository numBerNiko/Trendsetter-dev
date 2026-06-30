import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { Phone, Mail, ChevronDown } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-neutral-bg text-slate font-sans flex flex-col">
      {/* Top Contact Bar */}
      <div className="bg-slate text-neutral-bg py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+1-800-555-0199" className="flex items-center hover:text-deep-teal transition-colors">
              <Phone size={14} className="mr-2" />
              1-800-555-0199
            </a>
            <a href="mailto:customerservice@trendsettertextiles.com" className="flex items-center hover:text-deep-teal transition-colors">
              <Mail size={14} className="mr-2" />
              customerservice@trendsettertextiles.com
            </a>
          </div>
          <div className="hidden sm:block opacity-80 text-xs tracking-wider uppercase font-medium">
            USA Institutional Procurement Hub
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
              <NavLink to="/home" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'bg-deep-teal text-neutral-bg' : 'hover:text-deep-teal'}`}>HOME</NavLink>
              
              <div className="relative group py-8">
                <NavLink to="/industries" className={({isActive}) => `flex items-center gap-1 uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'bg-deep-teal text-neutral-bg' : 'hover:text-deep-teal'}`}>
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

              <div className="relative group py-8">
                <NavLink to="/products" className={({isActive}) => `flex items-center gap-1 uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'bg-deep-teal text-neutral-bg' : 'hover:text-deep-teal'}`}>
                  PRODUCTS <ChevronDown size={16} />
                </NavLink>
                <div className="absolute top-full left-0 w-72 bg-white border border-slate/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                  <div className="py-2">
                    <Link to="/products#resident-bedding" className="block px-4 py-2 hover:bg-neutral-bg hover:text-deep-teal transition-colors font-medium">Resident Bedding Suite</Link>
                    <Link to="/products#hygiene" className="block px-4 py-2 hover:bg-neutral-bg hover:text-deep-teal transition-colors font-medium">Hygiene & Personal Care</Link>
                    <Link to="/products#apparel" className="block px-4 py-2 hover:bg-neutral-bg hover:text-deep-teal transition-colors font-medium">Resident Apparel & Safety</Link>
                    <Link to="/products#clinical" className="block px-4 py-2 hover:bg-neutral-bg hover:text-deep-teal transition-colors font-medium">Clinical Compliance & Safety</Link>
                    <Link to="/products#facility" className="block px-4 py-2 hover:bg-neutral-bg hover:text-deep-teal transition-colors font-medium">Facility & Staff Essentials</Link>
                  </div>
                </div>
              </div>
              <NavLink to="/custom-programs" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'bg-deep-teal text-neutral-bg' : 'hover:text-deep-teal'}`}>CUSTOM PROGRAMS</NavLink>
              <NavLink to="/about" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'bg-deep-teal text-neutral-bg' : 'hover:text-deep-teal'}`}>ABOUT</NavLink>
              <NavLink to="/contact" className={({isActive}) => `uppercase font-bold text-base px-4 py-2 rounded-full transition-colors duration-200 ${isActive ? 'bg-deep-teal text-neutral-bg' : 'hover:text-deep-teal'}`}>CONTACT</NavLink>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <span className="font-bold text-deep-teal">Menu</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Enterprise Footer */}
      <footer className="bg-slate text-neutral-bg pt-16 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <img 
                src="/Trendsetter-website-photos/Trendsetter-Logo.png" 
                alt="Trendsetter Textiles Logo" 
                className="w-[150px] h-auto object-contain bg-white/90 p-2 rounded mb-6"
              />
              <p className="opacity-80 text-sm leading-relaxed mb-6">
                Dependable institutional bedding, towels, and uniforms for care facilities and touring artists across the USA.
              </p>
              <div className="space-y-2">
                <a href="tel:+1-800-555-0199" className="flex items-center text-sm hover:text-deep-teal transition-colors">
                  <Phone size={14} className="mr-2" />
                  1-800-555-0199
                </a>
                <a href="mailto:customerservice@trendsettertextiles.com" className="flex items-center text-sm hover:text-deep-teal transition-colors">
                  <Mail size={14} className="mr-2" />
                  customerservice@trendsettertextiles.com
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
