import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangContext, Lang } from '@/i18n/translations';
import { ScrollToTop } from '@/components/shared/ScrollToTop';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import ClassPage from '@/pages/ClassPage';
import MissionPage from '@/pages/MissionPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsOfUsePage from '@/pages/TermsOfUsePage';
import PagePlaceholder from '@/pages/PagePlaceholder';

export default function App() {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <div className="min-h-screen font-sans bg-white flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/test-series" element={<PagePlaceholder title="All Test Series" />} />
              <Route path="/mission" element={<MissionPage />} />
              <Route path="/results" element={<PagePlaceholder title="Our Hall of Fame" />} />
              <Route path="/about" element={<PagePlaceholder title="About Perfect Classes" />} />
              <Route path="/blog" element={<PagePlaceholder title="Latest Articles & Tips" />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-use" element={<TermsOfUsePage />} />
              <Route path="/class/:classId" element={<ClassPage />} />
              <Route path="/subject/:subjectId" element={<PagePlaceholder title="Subject Details" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LangContext.Provider>
  );
}
