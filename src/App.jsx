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
import ScrollToTop from './components/ScrollToTop';

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
          <Route path="custom-programs" element={<CustomProgramsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
