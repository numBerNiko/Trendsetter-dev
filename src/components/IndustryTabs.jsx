import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRegion } from '../hooks/useRegion';

export default function IndustryTabs() {
  const region = useRegion();

  const tabClass = ({ isActive }) =>
    `py-4 px-2 text-sm md:text-base font-bold uppercase tracking-wider border-b-4 transition-colors ${
      isActive
        ? ''
        : 'text-neutral-500 border-transparent hover:text-neutral-800'
    }`;

  const tabStyle = ({ isActive }) =>
    isActive
      ? {
          color: region.theme.primaryBg,
          borderBottomColor: region.theme.primaryBg,
        }
      : {};

  return (
    <div className="bg-white border-b border-slate/10 sticky top-20 z-45 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 md:space-x-12">
          <NavLink to="/industries/nursing-homes" className={tabClass} style={tabStyle}>
            Nursing Homes
          </NavLink>
          <NavLink to="/industries/medical-clinics" className={tabClass} style={tabStyle}>
            Medical Clinics
          </NavLink>
          <NavLink to="/industries/hotels" className={tabClass} style={tabStyle}>
            Hotels & Resorts
          </NavLink>
        </div>
      </div>
    </div>
  );
}
