import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import IndustriesPage from './pages/IndustriesPage';
import NursingHomesPage from './pages/NursingHomesPage';
import MedicalClinicsPage from './pages/MedicalClinicsPage';
import HotelsPage from './pages/HotelsPage';
import ProductsPage from './pages/ProductsPage';
import CustomProgramsPage from './pages/CustomProgramsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RequestSamplesPage from './pages/RequestSamplesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<HomePage />} />
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
          <Route path="request-samples" element={<RequestSamplesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
