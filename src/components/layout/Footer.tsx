import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLang, T } from '@/i18n/translations';

export function Footer() {
  const { lang } = useLang();
  return (
    <footer className="bg-[#121212] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#981F1F] flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-white text-lg">Perfect Classes</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">{T[lang].footerDesc}</p>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <span className="flex items-start gap-2 leading-relaxed"><MapPin size={13} className="mt-0.5 flex-shrink-0" /> Perfect Classes, Near Children Academy School, MBD Road, Noorpur, Bijnor, Uttar Pradesh, 246734</span>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={13} /> +91 98765 43210</a>
              <a href="mailto:support@perfectclassesnoorpur.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={13} /> support@perfectclassesnoorpur.com</a>
            </div>
          </div>
          {/* Test Series */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/70">{T[lang].footerTestSeries}</h4>
            {[6, 7, 8, 9, 10, 11, 12].map(c => (
              <Link key={c} to={`/class/${c}`} className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">{lang === 'hi' ? `क्लास ${c}` : `Class ${c}`}</Link>
            ))}
          </div>
          {/* Subjects (Now Links) */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/70">{T[lang].footerExplore}</h4>
            <Link to="/#books" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">{T[lang].footerOurBooks}</Link>
            <Link to="/mission" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">{T[lang].footer200Village}</Link>
            <Link to="/#test-series" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">{T[lang].footerJuniorIasTests}</Link>
            <Link to="/mission#vipin-sir" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">{T[lang].footerAboutVipin}</Link>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/70">{T[lang].footerQuickLinks}</h4>
            <Link to="/contact" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">{T[lang].footerContactUs}</Link>
            <Link to="/privacy-policy" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">{T[lang].footerPrivacy}</Link>
            <Link to="/terms-of-use" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">{T[lang].footerTerms}</Link>
          </div>
        </div>
        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {[
            { label: 'YouTube', href: 'https://youtube.com/@perfectclassesnoorpur', svg: 'M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z' },
            { label: 'Instagram', href: 'https://instagram.com/perfectclassesnoorpur', svg: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.07 4.07 0 0 1-.98 1.51c-.46.46-.9.74-1.51.98-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.07 4.07 0 0 1-1.51-.98 4.07 4.07 0 0 1-.98-1.51c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.77 5.77 0 0 0-2.09 1.36A5.77 5.77 0 0 0 .69 4.08C.39 4.84.19 5.72.13 6.99.07 8.27.06 8.68.06 11.94s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.36 2.09.62.64 1.29 1.05 2.09 1.36.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.77 5.77 0 0 0 2.09-1.36 5.77 5.77 0 0 0 1.36-2.09c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.77 5.77 0 0 0-1.36-2.09A5.77 5.77 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z' },
            { label: 'Facebook', href: 'https://facebook.com/perfectclassesnoorpur', svg: 'M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z' },
            { label: 'WhatsApp', href: 'https://wa.me/919876543210', svg: 'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zm-5.42 7.4A9.87 9.87 0 0 1 7 20.14l-.36-.21-3.73.98.99-3.64-.24-.37a9.87 9.87 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89a9.87 9.87 0 0 1 7 2.9 9.87 9.87 0 0 1 2.9 7.01c0 5.46-4.44 9.9-9.9 9.9zm8.41-18.31A11.82 11.82 0 0 0 12.05 0C5.49 0 .16 5.33.16 11.88c0 2.1.55 4.14 1.59 5.95L0 24l6.3-1.65a11.82 11.82 0 0 0 5.75 1.47c6.56 0 11.89-5.33 11.89-11.88a11.82 11.82 0 0 0-3.48-8.43z' },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#981F1F] transition-colors group">
              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-white/60 group-hover:text-white transition-colors" fill="currentColor"><path d={s.svg} /></svg>
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">{T[lang].footerCopyright}</p>
          <p className="text-xs text-white/40">{T[lang].footerMadeWith}</p>
        </div>
      </div>
    </footer>
  );
}
