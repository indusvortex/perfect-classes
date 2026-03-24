import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Globe } from 'lucide-react';
import { Navbar as ResizableNav, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/resizable-navbar";
import { useLang, T } from '@/i18n/translations';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLang();

  const navItems = [
    { name: T[lang].navTestSeries, link: "/#test-series" },
    { name: T[lang].navBooks, link: "/#books" },
    { name: T[lang].navMission, link: "/mission" },
    { name: T[lang].navResults, link: "/#testimonials" },
    { name: T[lang].navAbout, link: "/#about" },
  ];

  const toggleLang = () => setLang(lang === 'en' ? 'hi' : 'en');

  return (
    <div className="relative w-full z-50">
      <ResizableNav>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <a href="tel:+919876543210" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 text-[#555] hover:text-[#981F1F] hover:bg-[#FFF1F1] transition-colors" title="Call Us">
              <Phone size={15} />
            </a>
            <button
              onClick={toggleLang}
              className="flex items-center justify-center gap-1 h-9 px-2.5 rounded-full bg-gray-50 text-[#555] hover:text-[#981F1F] hover:bg-[#FFF1F1] transition-colors border border-gray-200 text-xs font-bold"
              title="Switch Language"
            >
              <Globe size={13} />
              <span>{lang === 'en' ? 'HI' : 'EN'}</span>
            </button>
            <NavbarButton variant="brand" href="/#test-series">{T[lang].navStartFreeTest}</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-[#121212] font-semibold text-lg block py-3 border-b border-gray-100 w-full hover:text-[#981F1F] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex w-full flex-row gap-4 mt-4">
              <button
                onClick={() => { toggleLang(); setIsMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-1.5 w-12 h-12 flex-shrink-0 rounded-xl bg-gray-50 border border-gray-200 text-[#555] hover:text-[#981F1F] hover:bg-[#FFF1F1] transition-colors text-xs font-bold"
                title="Switch Language"
              >
                <Globe size={18} />
              </button>
              <a
                href="tel:+919876543210"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-12 h-12 flex-shrink-0 rounded-xl bg-gray-50 border border-gray-200 text-[#555] hover:text-[#981F1F] hover:bg-[#FFF1F1] transition-colors"
                title="Call Us"
              >
                <Phone size={20} />
              </a>
              <NavbarButton
                href="/#test-series"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="brand"
                className="w-full flex-1"
              >
                {T[lang].navStartFreeTest}
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNav>
    </div>
  );
}
