import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CalendarDays, CheckCircle2 } from 'lucide-react';
import { useRegion } from '../hooks/useRegion';

export default function ContactPage() {
  const region = useRegion();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    inquiryType: 'Request a Quote',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = `[${formData.inquiryType.toUpperCase()}] - ${formData.company}`;
    
    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      name: formData.fullName,
      email: formData.email,
      company: formData.company,
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
      
      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({ fullName: '', email: '', company: '', inquiryType: 'Request a Quote', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error('Web3Forms Error:', result);
      }
    } catch (error) {
      console.error('Network Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="text-slate min-h-screen font-sans" style={{ backgroundColor: region.theme.pageBg, '--theme-color': region.theme.primaryBg }}>
      <section className="relative py-20 md:py-32 text-neutral-bg border-b-8" style={{ borderBottomColor: region.theme.primaryBg, backgroundColor: region.theme.primaryBg }}>
        <img src="/Trendsetter-website-photos/procurement_consultation.png" alt="Procurement Consultation" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Connect With Trendsetter Textiles {region.countryCode === 'ph' ? 'Philippines' : 'USA'}</h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
            Schedule an in-person product presentation, request physical samples, or submit an RFQ for your facility.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div 
              className={`bg-[var(--theme-secondary)] p-8 rounded-2xl shadow-lg border border-slate/10 ${region.phone.includes('+63') ? 'text-neutral-800' : 'text-slate'}`}
            >
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 text-[var(--theme-color)]">DIRECT CONTACT</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={24} className="mt-1 text-[var(--theme-color)]" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60 mb-2">Phone</p>
                    {region.countryCode === 'ph' ? (
                      <a 
                        href="https://wa.me/639178884059" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 text-lg font-bold"
                      >
                        {region.phone}
                      </a>
                    ) : (
                      <a href={`tel:${region.phone.replace(/[^0-9+]/g, '')}`} className="text-lg transition-colors hover:text-[var(--theme-color)]">
                        {region.phone}
                      </a>
                    )}
                    <p className="text-xs opacity-75 mt-2">{region.phoneLabel}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={24} className="mt-1 text-[var(--theme-color)]" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60">Email</p>
                    <a href="mailto:customerservice@trendsettertextiles.com" className="text-lg transition-colors break-all hover:text-[var(--theme-color)]">customerservice@trendsettertextiles.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={24} className="mt-1 text-[var(--theme-color)]" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider opacity-60">Headquarters</p>
                    <p className="text-lg">{region.countryCode === 'ph' ? 'Metro Manila, Philippines' : 'Los Angeles, CA, USA'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="p-8 rounded-2xl shadow-lg bg-[var(--theme-color)] text-neutral-bg"
            >
              <CalendarDays size={32} className="mb-4 text-neutral-bg/80" />
              <h3 className="text-xl font-bold uppercase tracking-wider mb-2">SCHEDULE A PRESENTATION</h3>
              <p className="text-sm opacity-90 mb-6">
                Our account managers can bring physical swatch books and sample products directly to your facility for review.
              </p>
              <button 
                className="w-full font-bold uppercase tracking-wider py-3 rounded transition-all duration-200 ease-in-out border border-[var(--theme-color)] text-[var(--theme-color)] bg-[#F9F6EE] hover:bg-[var(--theme-color)] hover:text-white hover:scale-[1.02] hover:shadow-md"
              >
                BOOK A DATE
              </button>
            </div>
          </div>

          {/* Lead Form */}
          <div className="lg:col-span-2">
            <div className="p-8 md:p-10 rounded-2xl shadow-md border border-slate/10" style={{ backgroundColor: 'var(--theme-card-bg)' }}>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-6">INQUIRY FORM</h3>
              
              {isSuccess && (
                <div className={`mb-6 p-4 rounded-md flex items-start gap-3 ${region.phone.includes('+63') ? 'bg-teal-50 text-teal-800' : 'bg-green-50 text-green-800'}`}>
                  <CheckCircle2 size={24} className="mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold">Thank you.</h4>
                    <p>Your inquiry has been received by our team.</p>
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 opacity-80 text-slate">Full Name</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] transition-all duration-200 ease-in-out" style={{ backgroundColor: 'var(--theme-page-bg)' }} placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 opacity-80 text-slate">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] transition-all duration-200 ease-in-out" style={{ backgroundColor: 'var(--theme-page-bg)' }} placeholder="jane@facility.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 opacity-80 text-slate">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} required className="w-full px-4 py-3 border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] transition-all duration-200 ease-in-out" style={{ backgroundColor: 'var(--theme-page-bg)' }} placeholder="Hospital or Hotel Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 opacity-80 text-slate">Inquiry Type</label>
                    <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="w-full px-4 py-3 border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] transition-all duration-200 ease-in-out" style={{ backgroundColor: 'var(--theme-page-bg)' }}>
                      <option value="Request a Quote">Request a Quote</option>
                      <option value="Schedule Product Presentation">Schedule Product Presentation</option>
                      <option value="Request Physical Samples">Request Physical Samples</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 opacity-80 text-slate">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 border border-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-color)] transition-all duration-200 ease-in-out resize-none" style={{ backgroundColor: 'var(--theme-page-bg)' }} placeholder="Please provide details about your institutional needs, estimated volumes, or presentation availability..."></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center gap-3 font-bold uppercase tracking-wider py-5 rounded-md text-lg transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-md border-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  } ${
                    region.phone.includes('+63') 
                      ? 'bg-[#3A606E] text-white border-transparent hover:bg-[#2F4F5B] hover:border-transparent' 
                      : 'bg-[var(--theme-color)] text-white border-transparent hover:bg-[var(--theme-color)] hover:opacity-90 hover:border-transparent'
                  }`}
                >
                  <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} /> {isSubmitting ? 'SENDING...' : 'SUBMIT REQUEST'}
                </button>
              </form>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
