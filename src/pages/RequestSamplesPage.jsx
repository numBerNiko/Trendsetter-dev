import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PackageCheck,
  CheckCircle2,
  Send,
  Phone,
  Mail,
  Download,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

const sampleCategories = [
  'Institutional Bedding (T-180 / T-250 / Sateen)',
  'Bath Terry & Towels (500–650 GSM)',
  'Patient Gowns & Adaptive Apparel',
  'Clinical Scrubs & Staff Uniforms',
  'F&B / Restaurant & Banquet Linens',
  'Flame-Retardant & Waterproof Pillows'
];

export default function RequestSamplesPage() {
  const region = useRegion();

  const [formData, setFormData] = useState({
    facilityName: '',
    contactName: '',
    email: '',
    phone: '',
    facilityType: 'Nursing Home / Post-Acute Care',
    shippingAddress: '',
    selectedCategories: ['Institutional Bedding (T-180 / T-250 / Sateen)'],
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCategory = (cat) => {
    setFormData((prev) => {
      const exists = prev.selectedCategories.includes(cat);
      return {
        ...prev,
        selectedCategories: exists
          ? prev.selectedCategories.filter((c) => c !== cat)
          : [...prev.selectedCategories, cat]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      subject: `[PHYSICAL SAMPLE REQUEST - ${region.shortLabel}] ${formData.facilityName}`,
      from_name: formData.contactName,
      region: region.regionName,
      facilityName: formData.facilityName,
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      facilityType: formData.facilityType,
      shippingAddress: formData.shippingAddress,
      categories: formData.selectedCategories.join(', '),
      notes: formData.notes
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (response.status === 200 && result.success) {
        setIsSuccess(true);
        setFormData({
          facilityName: '',
          contactName: '',
          email: '',
          phone: '',
          facilityType: 'Nursing Home / Post-Acute Care',
          shippingAddress: '',
          selectedCategories: ['Institutional Bedding (T-180 / T-250 / Sateen)'],
          notes: ''
        });
        setTimeout(() => setIsSuccess(false), 6000);
      } else {
        setSubmitError('Unable to process your sample request right now. Please contact our representative directly.');
      }
    } catch {
      setSubmitError('Network error while submitting your sample request. Please contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="text-ink min-h-screen font-sans"
      style={{ backgroundColor: region.theme.pageBg }}
    >
      {/* Editorial Dark Hero */}
      <section
        className="relative py-16 sm:py-20 text-white overflow-hidden"
        style={{ backgroundColor: region.theme.primaryDark }}
      >
        <img
          src="/Trendsetter-website-photos/Sourcing_&_Weaving_Flexibility.png"
          alt="Physical textile fabric swatches"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background: region.isPH
              ? 'linear-gradient(120deg, rgba(27,50,59,0.95) 0%, rgba(27,50,59,0.86) 100%)'
              : 'linear-gradient(120deg, rgba(15,45,36,0.95) 0%, rgba(15,45,36,0.86) 100%)'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C49A45]/20 border border-[#C49A45]/40 text-[#DFC07A] text-xs font-bold uppercase tracking-wider mb-5">
            <PackageCheck size={14} />
            <span>{region.shortLabel} Swatch &amp; Sample Dispatch</span>
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Request Physical Samples
          </h1>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            Evaluate hand-feel, GSM loft, seam stitching, and commercial wash performance firsthand before committing to your institutional linen program.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form Column */}
          <div className="lg:col-span-8">
            <div className="bg-white p-7 sm:p-9 lg:p-10 rounded-2xl shadow-sm border border-slate-200/90">
              <div className="mb-7">
                <h2 className="font-display text-2xl font-bold text-ink">
                  Customize Your Facility Sample Pack
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Dispatched from our {region.headquarters} operations for qualified institutional buyers.
                </p>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                  <CheckCircle2 strokeWidth={2} size={20} className="mt-0.5 shrink-0 text-emerald-600" />
                  <div>
                    <h4 className="font-bold text-sm">Sample request received</h4>
                    <p className="text-sm text-emerald-800">
                      Thank you! {region.representative.name} and our {region.shortLabel} team will confirm dispatch details within one business day.
                    </p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
                  {submitError}
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="sample-facilityName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Facility or Company Name *
                    </label>
                    <input
                      id="sample-facilityName"
                      type="text"
                      name="facilityName"
                      value={formData.facilityName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                      placeholder="e.g. Harbor Post-Acute Care or Grand Hotel"
                    />
                  </div>
                  <div>
                    <label htmlFor="sample-facilityType" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Facility Sector *
                    </label>
                    <select
                      id="sample-facilityType"
                      name="facilityType"
                      value={formData.facilityType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                    >
                      <option value="Nursing Home / Post-Acute Care">Nursing Home / Post-Acute Care</option>
                      <option value="Hospital / Medical Clinic">Hospital / Medical Clinic</option>
                      <option value="Hotel / Resort">Hotel / Resort</option>
                      <option value="Restaurant / F&B / Banquet Venue">Restaurant / F&amp;B / Banquet Venue</option>
                      <option value="Commercial Laundry / Distributor">Commercial Laundry / Distributor</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="sample-contactName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Contact Name *
                    </label>
                    <input
                      id="sample-contactName"
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="sample-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      id="sample-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                      placeholder="you@facility.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="sample-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="sample-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                      placeholder={region.isPH ? '+63 9XX XXX XXXX' : '+1 (555) 000-0000'}
                    />
                  </div>
                </div>

                {/* Product Categories Multi-Select */}
                <div>
                  <span className="block text-xs font-semibold text-slate-700 mb-2">
                    Select Textile Categories for Your Sample Kit
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {sampleCategories.map((cat) => {
                      const checked = formData.selectedCategories.includes(cat);
                      return (
                        <label
                          key={cat}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-colors ${
                            checked
                              ? 'border-[var(--theme-color)] bg-[var(--theme-color)]/6 text-ink'
                              : 'border-slate-200 bg-linen/60 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleCategory(cat)}
                            className="accent-[var(--theme-color)] w-4 h-4 shrink-0"
                          />
                          <span>{cat}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label htmlFor="sample-shipping" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Facility Shipping Address *
                  </label>
                  <textarea
                    id="sample-shipping"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors resize-none"
                    placeholder={
                      region.isPH
                        ? 'Building / Street, Barangay, City, Metro Manila / Province...'
                        : 'Street Address, Suite / Receiving Dock, City, State, ZIP...'
                    }
                  />
                </div>

                <div>
                  <label htmlFor="sample-notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Specific Weights, Sizes, or Compliance Notes{' '}
                    <span className="font-normal text-slate-400">(Optional)</span>
                  </label>
                  <textarea
                    id="sample-notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-3 bg-linen border border-slate-300/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors resize-none"
                    placeholder="e.g. T-250 percale flat sheets, 600 GSM bath towels, or FR pillow specifications..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex justify-center items-center gap-2 text-white font-bold py-4 rounded-xl text-base shadow-md transition-all bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] min-h-[52px] cursor-pointer ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <Send size={17} />
                  <span>{isSubmitting ? 'Submitting Sample Request...' : 'Submit Sample Request'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Regional Support Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink mb-2">
                What&apos;s Included in a Swatch Kit
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[var(--theme-color)] shrink-0 mt-0.5" />
                  <span>Fabric weave &amp; GSM comparison swatches</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[var(--theme-color)] shrink-0 mt-0.5" />
                  <span>Commercial wash-care &amp; compliance spec sheet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[var(--theme-color)] shrink-0 mt-0.5" />
                  <span>Direct consultation with {region.representative.name}</span>
                </li>
              </ul>
            </div>

            <div
              className="p-6 xl:p-7 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: region.theme.primaryDark }}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#DFC07A] mb-1">
                {region.representative.role}
              </p>
              <h3 className="font-display text-xl font-bold mb-3">
                {region.representative.name}
              </h3>
              <div className="space-y-2.5 text-sm mb-6">
                <a
                  href={`tel:${region.representative.tel}`}
                  className="flex items-center gap-2 text-white/90 hover:text-[#DFC07A] transition-colors"
                >
                  <Phone size={15} className="text-[#DFC07A] shrink-0" />
                  <span>{region.representative.phone}</span>
                </a>
                <a
                  href={region.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-[#DFC07A] transition-colors"
                >
                  <MessageCircle size={15} className="text-[#4ADE80] shrink-0" />
                  <span>WhatsApp ({region.phone})</span>
                </a>
                <a
                  href={`mailto:${region.email}`}
                  className="flex items-center gap-2 text-xs text-white/80 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-[#DFC07A] shrink-0" />
                  <span className="whitespace-nowrap">{region.email}</span>
                </a>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/15">
                <a
                  href={region.catalogueUrl}
                  download
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#C49A45] hover:bg-[#DFC07A] text-[#0F172A] font-bold text-xs sm:text-sm transition-colors"
                >
                  <Download size={15} />
                  <span>Download {region.shortLabel} Catalogue (PDF)</span>
                </a>
                <Link
                  to="/contact?inquiry=presentation"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors"
                >
                  Schedule In-Person Presentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
