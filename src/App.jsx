import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import IndustriesPage from './pages/IndustriesPage';
import ProductsPage from './pages/ProductsPage';
import NursingHomesPage from './pages/NursingHomesPage';
import MedicalClinicsPage from './pages/MedicalClinicsPage';
import HotelsPage from './pages/HotelsPage';
import CustomProgramsPage from './pages/CustomProgramsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ScrollToTop from './components/ScrollToTop';

// New B2B Pages
import PortalPage from './pages/PortalPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import RequestSamplesPage from './pages/RequestSamplesPage';
import ResourcesPage from './pages/ResourcesPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<HomePage />} />
          
          {/* Nested Industries Navigation */}
          <Route path="industries">
            <Route index element={<IndustriesPage />} />
            <Route path="nursing-homes" element={<NursingHomesPage />} />
            <Route path="medical-clinics" element={<MedicalClinicsPage />} />
            <Route path="hotels" element={<HotelsPage />} />
          </Route>
          
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:category" element={<CategoryPage />} />
          <Route path="custom-programs" element={<CustomProgramsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="portal" element={<PortalPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="request-samples" element={<RequestSamplesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
