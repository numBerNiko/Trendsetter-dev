import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeartHandshake, Stethoscope, Hotel } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

export default function IndustryTabs() {
  const region = useRegion();

  const tabClass = ({ isActive }) =>
    `py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 min-h-[48px] ${
      isActive
        ? 'text-[var(--theme-color)] border-[var(--theme-color)]'
        : 'text-slate-500 border-transparent hover:text-ink hover:border-slate-300'
    }`;

  return (
    <div
      className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-[68px] lg:top-[76px] z-30"
      style={{ '--theme-color': region.theme.primaryBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start sm:justify-center gap-2 sm:gap-8 overflow-x-auto">
          <NavLink to="/industries/nursing-homes" className={tabClass}>
            <HeartHandshake strokeWidth={1.75} size={17} />
            <span>Nursing Homes &amp; Hospitals</span>
          </NavLink>
          <NavLink to="/industries/medical-clinics" className={tabClass}>
            <Stethoscope strokeWidth={1.75} size={17} />
            <span>Medical Clinics</span>
          </NavLink>
          <NavLink to="/industries/hotels" className={tabClass}>
            <Hotel strokeWidth={1.75} size={17} />
            <span>Hotels, Resorts &amp; F&amp;B</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
