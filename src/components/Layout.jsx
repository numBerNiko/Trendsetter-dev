import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-warm-linen text-walnut font-sans flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-warm-linen/90 backdrop-blur-md border-b border-walnut/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink to="/home" className={({isActive}) => `font-medium hover:text-muted-sage transition-colors duration-200 ${isActive ? 'text-muted-sage' : ''}`}>Home</NavLink>
              
              <div className="relative group py-8">
                <NavLink to="/industries" className={({isActive}) => `flex items-center gap-1 font-medium hover:text-muted-sage transition-colors duration-200 ${isActive ? 'text-muted-sage' : ''}`}>
                  Industries <ChevronDown size={16} />
                </NavLink>
                <div className="absolute top-full left-0 w-48 bg-warm-linen border border-walnut/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    <Link to="/industries/nursing-homes" className="block px-4 py-2 hover:bg-walnut/5 hover:text-muted-sage transition-colors">Nursing Homes</Link>
                    <Link to="/industries/medical-clinics" className="block px-4 py-2 hover:bg-walnut/5 hover:text-muted-sage transition-colors">Medical Clinics</Link>
                    <Link to="/industries/hotels" className="block px-4 py-2 hover:bg-walnut/5 hover:text-muted-sage transition-colors">Hotels</Link>
                  </div>
                </div>
              </div>

              <NavLink to="/products" className={({isActive}) => `font-medium hover:text-muted-sage transition-colors duration-200 ${isActive ? 'text-muted-sage' : ''}`}>Products</NavLink>
              <NavLink to="/custom-programs" className={({isActive}) => `font-medium hover:text-muted-sage transition-colors duration-200 ${isActive ? 'text-muted-sage' : ''}`}>Custom Programs</NavLink>
              <NavLink to="/about" className={({isActive}) => `font-medium hover:text-muted-sage transition-colors duration-200 ${isActive ? 'text-muted-sage' : ''}`}>About Us</NavLink>
              <NavLink to="/contact" className={({isActive}) => `font-medium hover:text-muted-sage transition-colors duration-200 ${isActive ? 'text-muted-sage' : ''}`}>Contact</NavLink>
            </nav>

            <div className="hidden md:block">
              <Link to="/request-samples" className="bg-walnut text-warm-linen px-6 py-2.5 rounded hover:bg-walnut/90 transition-colors duration-200 font-medium">
                Request Samples
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Regulatory Anchor Bar */}
      <footer className="bg-warm-linen border-t border-walnut/20 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm opacity-80 text-center font-medium">
            <span>CA AB 1817 & AB 347: Certified PFAS-Free.</span>
            <span className="hidden md:inline text-walnut/30">|</span>
            <span>CA AB 2998 & Prop 65: No added flame-retardants.</span>
            <span className="hidden md:inline text-walnut/30">|</span>
            <span>CA SB 707 Framework: Extended Producer Responsibility (EPR) aligned.</span>
            <span className="hidden md:inline text-walnut/30">|</span>
            <span>Thermal Specs: Stable ≥ 71°C (160°F) for 25+ mins.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
