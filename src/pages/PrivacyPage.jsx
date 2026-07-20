import React from 'react';
import { useRegion } from '../hooks/useRegion';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  const region = useRegion();

  return (
    <div className="bg-neutral-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden" style={{ backgroundColor: region.theme.primaryBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Shield size={48} className="mx-auto mb-6 text-white opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto">
            How we collect, use, and protect your institutional data.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate/10 prose prose-slate max-w-none">
            
            <p className="lead text-xl text-slate mb-8 font-medium">
              At Trendsetter Textiles, Inc., we are committed to protecting the privacy and security of our institutional clients and partners.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-slate">1. Data Collected</h2>
            <p className="mb-6">
              When you submit an RFQ, request physical samples, or use our contact forms, we collect standard business information necessary to fulfill your request. This may include:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Contact names and official titles.</li>
              <li>Institutional email addresses and phone numbers.</li>
              <li>Facility addresses for sample delivery and order fulfillment.</li>
              <li>Technical specifications and custom program requirements.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-slate">2. How We Use Your Data</h2>
            <p className="mb-6">
              We process your data strictly for B2B commercial purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Processing quotations, orders, and custom manufacturing requests.</li>
              <li>Dispatching physical product samples to your facility.</li>
              <li>Communicating updates regarding order status and logistics.</li>
              <li>Maintaining necessary commercial records for auditing and compliance.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-slate">3. Data Protection</h2>
            <p className="mb-6">
              We employ industry-standard administrative and technical safeguards to protect your institutional data against unauthorized access, disclosure, or alteration. We adhere to applicable US state privacy regulations and the Philippine Data Privacy Act of 2012 (R.A. 10173). Furthermore, Trendsetter Textiles does not sell, rent, or lease your commercial data to third parties. We only share information with trusted logistics and manufacturing partners strictly to fulfill your orders and deliveries.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-slate">4. Your Rights</h2>
            <p className="mb-8">
              Subject to applicable laws, you have the right to access, correct, or request the deletion of your personal or institutional data held by us. You may also withdraw consent for marketing communications at any time. To exercise these rights, please contact our privacy team using the information provided below.
            </p>

            <div className="mt-12 p-6 rounded-lg bg-neutral-bg border border-slate/10">
              <h3 className="font-bold text-lg mb-2">Contacting Our Privacy Team</h3>
              <p className="text-sm m-0">
                If you have questions about our privacy practices or wish to exercise your data rights, please contact us at <a href="mailto:customerservice@trendsettertextiles.com" className="text-deep-teal hover:underline font-medium">customerservice@trendsettertextiles.com</a>.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
