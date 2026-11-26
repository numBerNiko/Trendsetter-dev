import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  PackageCheck,
  CheckCircle2,
  MessageCircle,
  Download,
  ArrowRight
} from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

const inquiryTypeMap = {
  quote: 'Bulk Quote / RFQ',
  samples: 'Request Physical Samples',
  presentation: 'Schedule a Product Presentation',
  custom: 'Custom Embroidery / Private Labeling'
};

export default function ContactPage() {
  const region = useRegion();
  const [searchParams] = useSearchParams();

  const initialParam = searchParams.get('inquiry') || '';
  const initialInquiryType = inquiryTypeMap[initialParam] || 'Bulk Quote / RFQ';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: initialInquiryType,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const param = searchParams.get('inquiry');
    if (param && inquiryTypeMap[param]) {
      setFormData((prev) => ({ ...prev, inquiryType: inquiryTypeMap[param] }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const subject = `[${formData.inquiryType.toUpperCase()} - ${region.shortLabel}] ${formData.company}`;

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      name: formData.fullName,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      inquiryType: formData.inquiryType,
      region: region.regionName,
      message: formData.message,
      subject,
      from_name: 'Trendsetter Textiles Portal'
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
          fullName: '',
          email: '',
          company: '',
          phone: '',
          inquiryType: initialInquiryType,
          message: ''
        });
        setTimeout(() => setIsSuccess(false), 6000);
      } else {
        setSubmitError('We could not send your inquiry right now. Please call or email us directly.');
      }
    } catch {
      setSubmitError('Network error while sending your inquiry. Please call or email us directly.');
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
        className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden"
        style={{ backgroundColor: region.theme.primaryDark }}
      >
        <img
          src="/Trendsetter-website-photos/procurement_consultation.png"
          alt="Institutional textile procurement consultation"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
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
            {region.heroTagline}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Connect With Trendsetter Textiles {region.shortLabel}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl mx-auto">
            Schedule an in-person product presentation, request physical swatch samples, or submit an institutional RFQ for your facility.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Contact Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-xs border border-slate-200/90">
              <p className="text-xs font-bold uppercase tracking-widest text-[#9A7426] mb-1">
                Direct Procurement Channels
              </p>
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                Direct Contact ({region.shortLabel})
              </h2>

              <div className="space-y-6">
                {/* Corporate WhatsApp Channel */}
                <div className="pb-5 border-b border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Corporate WhatsApp Line
                  </p>
                  <a
                    href={region.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[#25D366] bg-[#25D366]/8 text-[#15803D] hover:bg-[#25D366] hover:text-white transition-all duration-200 text-sm font-bold shadow-xs"
                  >
                    <MessageCircle size={17} />
                    <span>Contact Via WhatsApp</span>
                  </a>
                  <p className="text-xs text-slate-500 mt-2">
                    {region.phone} &mdash; Main Corporate WhatsApp Line
                  </p>
                </div>

                {/* Regional Institutional Representative (Eileen US / Osama PH) */}
                <div className="pb-5 border-b border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Institutional Representative
                  </p>
                  <div
                    className="border-l-3 pl-4"
                    style={{ borderColor: region.theme.primaryBg }}
                  >
                    <p
                      className="font-display text-lg font-bold mb-1"
                      style={{ color: region.theme.primaryBg }}
                    >
                      {region.representative.name}
                    </p>
                    <p className="text-xs text-slate-500 mb-2">{region.representative.role}</p>
                    <a
                      href={`tel:${region.representative.tel}`}
                      className="inline-flex items-center gap-2 text-base font-semibold text-ink hover:text-[var(--theme-color)] transition-colors"
                    >
                      <Phone size={15} className="text-[var(--theme-color)]" />
                      <span>{region.representative.phone}</span>
                    </a>
                    {region.representative.whatsappUrl && (
                      <div className="mt-2">
                        <a
                          href={region.representative.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-[#15803D] hover:underline inline-flex items-center gap-1"
                        >
                          Message {region.representative.name} via WhatsApp &rarr;
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-linen text-[var(--theme-color)] shrink-0">
                    <Mail strokeWidth={1.75} size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      Email
                    </p>
                    <a
                      href={`mailto:${region.email}`}
                      className="text-sm sm:text-base font-semibold text-ink hover:text-[var(--theme-color)] transition-colors break-all"
                    >
                      {region.email}
                    </a>
                  </div>
                </div>

                {/* Headquarters */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-linen text-[var(--theme-color)] shrink-0">
                    <MapPin strokeWidth={1.75} size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      Headquarters
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-ink">
                      {region.headquarters}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {region.warehouseSummary}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Samples & Catalogue Card */}
            <div
              className="p-7 rounded-2xl shadow-lg text-white"
              style={{ backgroundColor: region.theme.primaryDark }}
            >
              <PackageCheck strokeWidth={1.75} size={28} className="mb-3 text-[#DFC07A]" />
              <h3 className="font-display text-xl font-bold mb-2">
                Evaluate Physical Swatches First
              </h3>
              <p className="text-sm text-white/80 mb-5 leading-relaxed">
                Our account managers can dispatch swatch books and sample linens directly to your facility before you place a bulk order.
              </p>
              <div className="space-y-2.5">
                <Link
                  to="/request-samples"
                  className="w-full inline-flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-lg bg-[#C49A45] hover:bg-[#DFC07A] text-[#0F172A] transition-colors"
                >
                  <span>Request Physical Samples</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href={region.catalogueUrl}
                  download
                  className="w-full inline-flex items-center justify-center gap-2 font-semibold text-sm py-3 rounded-lg border border-white/25 bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Download size={15} />
                  <span>Download {region.shortLabel} Catalogue (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div
              id="inquiry-form"
              className="bg-white p-7 sm:p-9 lg:p-10 rounded-2xl shadow-sm border border-slate-200/90"
            >
              <div className="mb-7">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                  Submit an Institutional Inquiry
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  We respond to all {region.shortLabel} RFQs and presentation requests within one business day.
                </p>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                  <CheckCircle2 strokeWidth={2} size={20} className="mt-0.5 shrink-0 text-emerald-600" />
                  <div>
                    <h4 className="font-bold text-sm">Thank you!</h4>
                    <p className="text-sm text-emerald-800">
                      Your message has been sent successfully. {region.representative.name} and our team will contact you shortly.
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
                <div>
                  <label htmlFor="contact-inquiryType" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Inquiry Type *
                  </label>
                  <select
                    id="contact-inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300/90 rounded-lg bg-linen text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                  >
                    <option value="Bulk Quote / RFQ">Bulk Quote / RFQ</option>
                    <option value="Request Physical Samples">Request Physical Samples</option>
                    <option value="Schedule a Product Presentation">Schedule a Product Presentation</option>
                    <option value="Custom Embroidery / Private Labeling">Custom Embroidery / Private Labeling</option>
                    <option value="General Procurement Question">General Procurement Question</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-fullName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="contact-fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300/90 rounded-lg bg-linen text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300/90 rounded-lg bg-linen text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                      placeholder="jane@facility.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Facility or Organization *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300/90 rounded-lg bg-linen text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                      placeholder="Hospital, Clinic, or Hotel Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300/90 rounded-lg bg-linen text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors"
                      placeholder={region.isPH ? '+63 9XX XXX XXXX' : '+1 (555) 000-0000'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message &amp; Specifications *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-slate-300/90 rounded-lg bg-linen text-sm focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] focus:bg-white transition-colors resize-none"
                    placeholder="Share your textile categories, estimated quantities, compliance requirements, or preferred presentation dates..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex justify-center items-center gap-2.5 font-bold py-4 rounded-xl text-base text-white shadow-md transition-all bg-[var(--theme-color)] hover:bg-[var(--theme-hover)] min-h-[52px] cursor-pointer ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <Send strokeWidth={1.75} size={18} className={isSubmitting ? 'animate-pulse' : ''} />
                  <span>{isSubmitting ? 'Sending Inquiry...' : 'Submit Request'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
