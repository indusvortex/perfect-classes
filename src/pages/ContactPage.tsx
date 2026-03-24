import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAFAFA] pt-32 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
            <Phone size={12} /> Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#121212] mb-4">Contact <span className="text-[#981F1F]">Us</span></h1>
          <p className="text-[#555] text-lg max-w-xl mx-auto">Have a question about admissions, courses, or anything else? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="font-bold text-[#121212] text-xl mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#FFF1F1] rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#981F1F]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#888] font-semibold uppercase tracking-wide mb-1">Phone / WhatsApp</p>
                    <a href="tel:+919876543210" className="text-[#121212] font-semibold hover:text-[#981F1F] transition-colors">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#FFF1F1] rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#981F1F]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#888] font-semibold uppercase tracking-wide mb-1">Email</p>
                    <a href="mailto:info@perfectclassesnoorpur.com" className="text-[#121212] font-semibold hover:text-[#981F1F] transition-colors">info@perfectclassesnoorpur.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#FFF1F1] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#981F1F]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#888] font-semibold uppercase tracking-wide mb-1">Address</p>
                    <p className="text-[#121212] font-semibold">Perfect Classes, Noorpur</p>
                    <p className="text-[#555] text-sm">Bijnor District, Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#FFF1F1] rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#981F1F]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#888] font-semibold uppercase tracking-wide mb-1">Office Hours</p>
                    <p className="text-[#121212] font-semibold">Mon – Sat: 8:00 AM – 7:00 PM</p>
                    <p className="text-[#555] text-sm">Sunday: 10:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#121212] rounded-2xl p-7 text-white">
              <h3 className="font-bold text-lg mb-2">Quick Enquiry?</h3>
              <p className="text-white/60 text-sm mb-5">WhatsApp us directly for the fastest response. We usually reply within minutes.</p>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Perfect%20Classes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1ebe5d] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#121212] mb-2">Message Sent!</h3>
                  <p className="text-[#555] max-w-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-[#981F1F] font-semibold hover:underline text-sm">Send another message</button>
                </div>
              ) : (
                <>
                  <h2 className="font-bold text-[#121212] text-xl mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#333] mb-1.5">Full Name *</label>
                        <input
                          type="text" required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#981F1F] focus:ring-2 focus:ring-[#981F1F]/20 text-[#121212] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#333] mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#981F1F] focus:ring-2 focus:ring-[#981F1F]/20 text-[#121212] transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#333] mb-1.5">Email Address *</label>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#981F1F] focus:ring-2 focus:ring-[#981F1F]/20 text-[#121212] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#333] mb-1.5">Message *</label>
                      <textarea
                        required rows={5}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your enquiry — class, subject, exam you're preparing for..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#981F1F] focus:ring-2 focus:ring-[#981F1F]/20 text-[#121212] transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-[#981F1F] hover:bg-[#7a1818] text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
                    >
                      Send Message <ArrowRight size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
