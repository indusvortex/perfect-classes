import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen, ChevronRight, ChevronLeft, Star, CheckCircle, Trophy, Check,
  Users, Clock, Award, Phone, Mail, MapPin, ArrowRight, Menu, X,
  FileText, Target, Layers, Zap, BarChart2, Shield, Play,
  TrendingUp, GraduationCap, Globe
} from 'lucide-react';
import { Navbar as ResizableNav, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/resizable-navbar";
import { Marquee } from "@/registry/magicui/marquee";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Lang, LangContext, useLang, T } from '@/i18n/translations';

// ─── LANGUAGE SYSTEM ──────────────────────────────────────────────────────────

const T: Record<Lang, Record<string, string>> = {
  en: {
    // Hero
    badge: 'Junior IAS Program',
    heading1: 'Early Preparation,',
    heading2: 'Bright Future.',
    subtitle: 'Building UPSC-ready minds from Class 6. No coaching. No lakhs. Just \u20B9100.',
    journeyGaon: 'Village',
    journeyJuniorIas: 'Junior IAS',
    journeySarkariNaukri: 'Govt Job',
    videoTitle: 'Watch: How Junior IAS Works',
    videoSubtitle: '2 min intro by Vipin Sir',
    ctaJoin: 'Join the Movement',
    trustNcert: 'Pure NCERT \u2014 No Junk',
    trust5000: '5,000+ Students Enrolled',
    trust100: 'Just \u20B9100/month',
    trustClass: 'Class 6 to 12 Coverage',

    // Test Series
    testBadge: 'Junior IAS Test Series',
    testHeading: 'NCERT-Based',
    testHeadingHighlight: 'Test Series',
    testDesc: "Every question comes directly from Vipin Sir\u2019s NCERT-based books. Study the book, take the test \u2014 no surprises, only results.",
    exploreSeries: 'Explore Series',

    // Books
    booksBadge: 'Pure NCERT Books',
    booksHeading: "The NCERT That Schools Don\u2019t Teach.",
    booksDesc: "Written by Vipin Sir himself \u2014 one book per class covering History, Geography, Constitution, Science & Static GK. The same NCERT foundation that decides UPSC, NDA, and every state exam. No market junk, only what matters.",
    hindiMedium: 'Hindi Medium',
    englishMedium: 'English Medium',
    orderNow: 'Order Now',

    // Why Us
    whyBadge: 'The Difference',
    whyHeading: 'Why',
    whyHeadingHighlight: 'Junior IAS?',
    whyDesc: "Because your school won\u2019t teach you what UPSC will ask. We fill that gap \u2014 from Class 6 itself.",
    feature1Title: 'Book-Linked Tests',
    feature1Desc: "Every question comes directly from Vipin Sir\u2019s Junior IAS books. No random questions \u2014 study the chapter, ace the test. 100% alignment.",
    feature2Title: 'Track Your Growth',
    feature2Desc: "See exactly where you stand \u2014 subject-wise scores, weak topics, and improvement trends after every test. Know what to fix next.",
    feature3Title: 'Proven by 350+ Selections',
    feature3Desc: "This isn\u2019t a new experiment. The same teaching system that produced 350+ UP Police and 125+ Super TET selections \u2014 now digital.",
    trustBadge1: 'Pure NCERT \u2014 No Junk Content',
    trustBadge2: 'Class 6 to 12, One System',
    trustBadge3: 'Just \u20B9100/Month',
    trustBadge4: 'Written by Vipin Sir Himself',

    // Testimonials
    testiBadge: 'Student Reviews',
    testiHeading: 'Their Story,',
    testiHeadingHighlight: 'In Their Words.',
    testiDesc: "From small towns to government jobs \u2014 real students and parents from Noorpur and nearby villages who trusted Vipin Sir\u2019s system.",
    videoComingSoon: 'Video coming soon',
    galleryTitle: 'Vipin Sir with Selected Students',
    gallerySubtitle: 'Building futures from Noorpur',
    studentsAndCounting: 'students and counting!',

    // Stats
    statsHeading: 'The Perfect Classes',
    statsHeadingHighlight: 'Legacy',
    statsDesc: 'From 5 students in Noorpur to thousands of government selections \u2014 built on trust, not marketing.',
    stat1Label: 'Students at a Time',
    stat2Label: 'UP Police Selections',
    stat3Label: 'Super TET Selections',
    stat4Label: 'Years of Legacy',

    // CTA
    ctaBadge: 'Just \u20B9100/Month \u2014 No Excuses',
    ctaHeading1: "Your Child\u2019s Future,",
    ctaHeading2: 'Just \u20B9100.',
    ctaDesc: 'The same NCERT foundation that IAS toppers build in Delhi \u2014 now available for every village, every family. 350+ selections prove this system works.',
    ctaStartTest: 'Start Free Test',
    ctaCallUs: 'Call Us',

    // FAQ
    faqHeading: 'Frequently Asked',
    faqHeadingHighlight: 'Questions',
    faq1Q: 'What is the Junior IAS program?',
    faq1A: "Junior IAS is Vipin Sir’s mission to build UPSC-level General Studies foundations from Class 6 itself. It covers History, Geography, Constitution, Science, and Static GK — the same NCERT subjects that decide every competitive exam in India.",
    faq2Q: 'Why should my child start preparing from Class 6?',
    faq2A: "Because competitive exams like UPSC, NDA, and State PCS test NCERT knowledge from Class 6-12. Schools only focus on PCM to clear boards — they completely ignore the Humanities that actually decide your rank. Starting early means no last-minute cramming in Delhi coaching centers.",
    faq3Q: 'How does the test series work with the books?',
    faq3A: "Every single question in our test series comes directly from Vipin Sir’s Junior IAS books (NCERT-based). Study the chapter, take the test — 100% alignment, zero surprises. This is how 350+ students cleared UP Police from a single center.",
    faq4Q: 'Is ₹100/month really the full price?',
    faq4A: "Yes. ₹100/month (₹1,200/year) gives you access to the complete Junior IAS ecosystem — books and test series. Vipin Sir deliberately priced it so that no rural or semi-urban family is ever priced out of quality education.",
    faq5Q: 'Who is Vipin Sir?',
    faq5A: "Vipin Sir is a B.Tech + M.Tech Aeronautical Engineer who left a BSF government job to teach. He taught at India's top UPSC coaching centers in Delhi before founding Perfect Classes in Noorpur in 2016. Starting with just 5 students, he built it to 5,000 students with 350+ UP Police and 125+ Super TET selections — all from one center, purely by word of mouth.",
    faq6Q: 'Can I access tests on mobile?',
    faq6A: "Yes. Our platform is fully mobile-optimised — attempt tests anytime, anywhere, even on basic smartphones with slow internet.",

    // Footer
    footerDesc: "From Noorpur to every village — building India’s future since 2016.",
    footerTestSeries: 'Test Series',
    footerExplore: 'Explore',
    footerQuickLinks: 'Quick Links',
    footerOurBooks: 'Our Books',
    footer200Village: '200-Village Tour',
    footerJuniorIasTests: 'Junior IAS Tests',
    footerAboutVipin: 'About Vipin Sir',
    footerContactUs: 'Contact Us',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Use',
    footerCopyright: '© 2026 Perfect Classes. All rights reserved.',
    footerMadeWith: 'Designed with ❤️ for Indian students',

    // Navbar
    navTestSeries: 'Test Series',
    navBooks: 'Books',
    navMission: 'Mission',
    navResults: 'Results',
    navAbout: 'About',
    navStartFreeTest: 'Start Free Test',
  },
  hi: {
    // Hero
    badge: 'जूनियर IAS प्रोग्राम',
    heading1: 'गाँव की मिट्टी से',
    heading2: 'लाल बत्ती तक।',
    subtitle: 'क्लास 6 से UPSC की नींव। शुद्ध NCERT। सिर्फ़ ₹100/महीना।',
    journeyGaon: 'गाँव',
    journeyJuniorIas: 'जूनियर IAS',
    journeySarkariNaukri: 'सरकारी नौकरी',
    videoTitle: 'देखिये: जूनियर IAS कैसे काम करता है',
    videoSubtitle: 'विपिन सर का 2 मिनट का परिचय',
    ctaJoin: 'आंदोलन में जुड़ें',
    trustNcert: 'शुद्ध NCERT — कोई फालतू नहीं',
    trust5000: '5,000+ छात्र जुड़े हुए',
    trust100: 'सिर्फ़ ₹100/महीना',
    trustClass: 'क्लास 6 से 12 तक',

    // Test Series
    testBadge: 'जूनियर IAS टेस्ट सीरीज़',
    testHeading: 'NCERT-आधारित',
    testHeadingHighlight: 'टेस्ट सीरीज़',
    testDesc: 'हर सवाल सीधे विपिन सर की NCERT किताबों से आता है। किताब पढ़ो, टेस्ट दो — कोई सरप्राइज़ नहीं, सिर्फ़ नतीजे।',
    exploreSeries: 'सीरीज़ देखें',

    // Books
    booksBadge: 'शुद्ध NCERT किताबें',
    booksHeading: 'वो NCERT जो स्कूल नहीं पढ़ाते।',
    booksDesc: 'विपिन सर ने खुद लिखी हैं — हर क्लास के लिए एक किताब जिसमें इतिहास, भूगोल, संविधान, विज्ञान और स्टैटिक GK शामिल है। वही NCERT नींव जो UPSC, NDA और हर राज्य परीक्षा तय करती है। बाज़ार का कूड़ा नहीं, सिर्फ़ वो जो ज़रूरी है।',
    hindiMedium: 'हिंदी माध्यम',
    englishMedium: 'अंग्रेज़ी माध्यम',
    orderNow: 'अभी ऑर्डर करें',

    // Why Us
    whyBadge: 'फर्क क्या है',
    whyHeading: 'क्यों',
    whyHeadingHighlight: 'जूनियर IAS?',
    whyDesc: 'क्योंकि आपका स्कूल वो नहीं पढ़ाएगा जो UPSC पूछेगा। हम वो कमी भरते हैं — क्लास 6 से ही।',
    feature1Title: 'किताब से जुड़े टेस्ट',
    feature1Desc: 'हर सवाल सीधे विपिन सर की NCERT किताबों से आता है। कोई बेतरतीब सवाल नहीं — अध्याय पढ़ो, टेस्ट में टॉप करो। 100% संरेखण।',
    feature2Title: 'अपनी प्रगति ट्रैक करें',
    feature2Desc: 'देखें आप कहाँ खड़े हैं — विषय-वार स्कोर, कमजोर टॉपिक्स, और हर टेस्ट के बाद सुधार के रुझान। जानें अगला क्या सुधारना है।',
    feature3Title: '350+ चयनों से प्रमाणित',
    feature3Desc: 'यह कोई नया प्रयोग नहीं है। वही पढ़ाई का तरीका जिसने 350+ UP Police और 125+ Super TET चयन दिए — अब डिजिटल।',
    trustBadge1: 'शुद्ध NCERT — कोई फालतू कंटेंट नहीं',
    trustBadge2: 'क्लास 6 से 12, एक सिस्टम',
    trustBadge3: 'सिर्फ़ ₹100/महीना',
    trustBadge4: 'विपिन सर ने खुद लिखी हैं',

    // Testimonials
    testiBadge: 'छात्रों की राय',
    testiHeading: 'उनकी कहानी,',
    testiHeadingHighlight: 'उन्हीं की ज़ुबानी।',
    testiDesc: 'छोटे कस्बों से सरकारी नौकरी तक — नूरपुर और आसपास के गाँवों के असली छात्र और अभिभावक जिन्होंने विपिन सर पर भरोसा किया।',
    videoComingSoon: 'वीडियो जल्द आ रहा है',
    galleryTitle: 'विपिन सर चयनित छात्रों के साथ',
    gallerySubtitle: 'नूरपुर से भविष्य बना रहे हैं',
    studentsAndCounting: 'छात्र और बढ़ रहे हैं!',

    // Stats
    statsHeading: 'परफेक्ट क्लासेज़ की',
    statsHeadingHighlight: 'विरासत',
    statsDesc: 'नूरपुर में 5 छात्रों से हजारों सरकारी चयनों तक — भरोसे पर बना, मार्केटिंग पर नहीं।',
    stat1Label: 'एक समय में छात्र',
    stat2Label: 'UP Police चयन',
    stat3Label: 'Super TET चयन',
    stat4Label: 'सालों की विरासत',

    // CTA
    ctaBadge: 'सिर्फ़ ₹100/महीना — कोई बहाना नहीं',
    ctaHeading1: 'आपके बच्चे का भविष्य,',
    ctaHeading2: 'सिर्फ़ ₹100 में।',
    ctaDesc: 'वही NCERT नींव जो IAS टॉपर्स दिल्ली में बनाते हैं — अब हर गाँव, हर परिवार के लिए उपलब्ध। 350+ चयन साबित करते हैं कि यह सिस्टम काम करता है।',
    ctaStartTest: 'मुफ़्त टेस्ट शुरू करें',
    ctaCallUs: 'कॉल करें',

    // FAQ
    faqHeading: 'अक्सर पूछे जाने वाले',
    faqHeadingHighlight: 'सवाल',
    faq1Q: 'जूनियर IAS प्रोग्राम क्या है?',
    faq1A: 'जूनियर IAS विपिन सर का मिशन है जो क्लास 6 से ही UPSC-स्तर की सामान्य अध्ययन की नींव तैयार करता है। इसमें इतिहास, भूगोल, संविधान, विज्ञान और स्टैटिक GK शामिल है — वही NCERT विषय जो भारत की हर प्रतियोगी परीक्षा तय करते हैं।',
    faq2Q: 'मेरे बच्चे को क्लास 6 से तैयारी क्यों शुरू करनी चाहिए?',
    faq2A: 'क्योंकि UPSC, NDA और State PCS जैसी प्रतियोगी परीक्षाएँ क्लास 6-12 की NCERT से पूछती हैं। स्कूल सिर्फ़ बोर्ड पास करने के लिए PCM पर ध्यान देते हैं — वे Humanities को पूरी तरह नज़रअंदाज़ कर देते हैं जबकि वही रैंक तय करती है। जल्दी शुरू करने से दिल्ली कोचिंग में आखिरी वक्त की भागदौड़ नहीं मचती।',
    faq3Q: 'टेस्ट सीरीज़ किताबों के साथ कैसे काम करती है?',
    faq3A: 'हमारी टेस्ट सीरीज़ का हर सवाल सीधे विपिन सर की NCERT किताबों से आता है। अध्याय पढ़ो, टेस्ट दो — 100% संरेखण, कोई सरप्राइज़ नहीं। इसी तरीके से 350+ छात्रों ने एक ही सेंटर से UP Police क्लियर किया।',
    faq4Q: 'क्या ₹100/महीना सचमुच पूरी कीमत है?',
    faq4A: 'हाँ। ₹100/महीना (₹1,200/साल) में आपको पूरा जूनियर IAS इकोसिस्टम मिलता है — किताबें और टेस्ट सीरीज़। विपिन सर ने जानबूझकर कीमत इतनी रखी है कि कोई भी ग्रामीण या अर्ध-शहरी परिवार अच्छी शिक्षा से वंचित न रहे।',
    faq5Q: 'विपिन सर कौन हैं?',
    faq5A: 'विपिन सर B.Tech + M.Tech एयरोनॉटिकल इंजीनियर हैं जिन्होंने BSF की सरकारी नौकरी छोड़कर पढ़ाना चुना। दिल्ली में भारत के टॉप UPSC कोचिंग में पढ़ाने के बाद 2016 में नूरपुर में परफेक्ट क्लासेज़ की स्थापना की। सिर्फ़ 5 छात्रों से शुरू करके 5,000 छात्रों तक पहुँचे, 350+ UP Police और 125+ Super TET चयन — सब एक ही सेंटर से, सिर्फ़ लोगों की ज़ुबानी से।',
    faq6Q: 'क्या मोबाइल पर टेस्ट दे सकते हैं?',
    faq6A: 'हाँ। हमारा प्लेटफ़ॉर्म पूरी तरह मोबाइल पर चलता है — कभी भी, कहीं भी, बेसिक स्मार्टफ़ोन और धीमे इंटरनेट पर भी टेस्ट दें।',

    // Footer
    footerDesc: 'नूरपुर से हर गाँव तक — 2016 से भारत का भविष्य बना रहे हैं।',
    footerTestSeries: 'टेस्ट सीरीज़',
    footerExplore: 'एक्सप्लोर करें',
    footerQuickLinks: 'त्वरित लिंक',
    footerOurBooks: 'हमारी किताबें',
    footer200Village: '200 गाँव यात्रा',
    footerJuniorIasTests: 'जूनियर IAS टेस्ट',
    footerAboutVipin: 'विपिन सर के बारे में',
    footerContactUs: 'संपर्क करें',
    footerPrivacy: 'गोपनीयता नीति',
    footerTerms: 'उपयोग की शर्तें',
    footerCopyright: '© 2026 परफेक्ट क्लासेज़। सर्वाधिकार सुरक्षित।',
    footerMadeWith: 'भारतीय छात्रों के लिए ❤️ से बनाया',

    // Navbar
    navTestSeries: 'टेस्ट सीरीज़',
    navBooks: 'किताबें',
    navMission: 'मिशन',
    navResults: 'परिणाम',
    navAbout: 'परिचय',
    navStartFreeTest: 'मुफ़्त टेस्ट शुरू करें',
  },
};

// ─── END LANGUAGE SYSTEM ─────────────────────────────────────────────────────

// Scroll to top or hash on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const NAV_LINKS = ['Home', 'Test Series', 'Results', 'About', 'Blog'];

const QUICK_LINKS = [
  { label: 'Class 6', icon: '📖' },
  { label: 'Class 7', icon: '📘' },
  { label: 'Class 8', icon: '📗' },
  { label: 'Class 9', icon: '📙' },
  { label: 'Class 10', icon: '📕' },
  { label: 'Class 11', icon: '📓' },
  { label: 'Class 12', icon: '📚' },
];

const BY_CLASS_SERIES = [
  { class: '6', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 40, badge: { en: 'CLASS 6', hi: 'क्लास 6' }, gradient: 'from-amber-400 to-orange-500', image: '/students/class6.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '7', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 50, badge: { en: 'CLASS 7', hi: 'क्लास 7' }, gradient: 'from-emerald-400 to-teal-500', image: '/students/class7.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '8', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 60, badge: { en: 'CLASS 8', hi: 'क्लास 8' }, gradient: 'from-blue-400 to-indigo-500', image: '/students/class8.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '9', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 80, badge: { en: 'CLASS 9', hi: 'क्लास 9' }, gradient: 'from-violet-500 to-purple-600', image: '/students/class9.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '10', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 120, badge: { en: 'CLASS 10', hi: 'क्लास 10' }, gradient: 'from-rose-500 to-red-600', image: '/students/class10.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '11', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 150, badge: { en: 'CLASS 11', hi: 'क्लास 11' }, gradient: 'from-[#981F1F] to-[#6B1515]', image: '/students/class11.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '12', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 200, badge: { en: 'CLASS 12', hi: 'क्लास 12' }, gradient: 'from-[#121212] to-[#333]', image: '/students/class12.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
];

// Detailed class data for individual class pages
const CLASS_DATA: Record<string, {
  heroDesc: string;
  subjects: { name: string; icon: string; chapters: string[]; tests: number }[];
  bookPages: number;
}> = {
  '6': {
    heroDesc: 'Where every topper\'s journey begins. Build an unshakable NCERT foundation in History, Geography, Civics, Science & GK — the subjects your school ignores but UPSC demands.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['What, Where, How and When?', 'From Hunting-Gathering to Growing Food', 'In the Earliest Cities', 'What Books and Burials Tell Us', 'Kingdoms, Kings and an Early Republic', 'New Questions and Ideas', 'Ashoka, The Emperor Who Gave Up War', 'Vital Villages, Thriving Towns', 'Traders, Kings and Pilgrims', 'New Empires and Kingdoms', 'Buildings, Paintings and Books'], tests: 8 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['The Earth in the Solar System', 'Globe: Latitudes and Longitudes', 'Motions of the Earth', 'Maps', 'Major Domains of the Earth', 'Major Landforms of the Earth', 'Our Country — India', 'India: Climate, Vegetation and Wildlife'], tests: 8 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['Understanding Diversity', 'Diversity and Discrimination', 'What is Government?', 'Key Elements of a Democratic Government', 'Panchayati Raj', 'Rural Administration', 'Urban Administration', 'Rural Livelihoods', 'Urban Livelihoods'], tests: 8 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['Food: Where Does It Come From?', 'Components of Food', 'Fibre to Fabric', 'Sorting Materials into Groups', 'Separation of Substances', 'Changes Around Us', 'Getting to Know Plants', 'Body Movements', 'The Living Organisms and Their Surroundings', 'Motion and Measurement of Distances'], tests: 8 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['India: States & Capitals', 'National Symbols', 'Important Days & Events', 'Famous Personalities', 'First in India & World', 'Books & Authors', 'Awards & Honours', 'Basic Indian Geography Facts'], tests: 8 },
    ],
    bookPages: 180,
  },
  '7': {
    heroDesc: 'Concepts deepen. From Medieval India to the Indian Constitution\'s evolution — Class 7 bridges curiosity with real competitive exam thinking.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['Tracing Changes Through a Thousand Years', 'New Kings and Kingdoms', 'The Delhi Sultans', 'The Mughal Empire', 'Rulers and Buildings', 'Towns, Traders and Craftspersons', 'Tribes, Nomads and Settled Communities', 'Devotional Paths to the Divine', 'The Making of Regional Cultures', 'Eighteenth-Century Political Formations'], tests: 10 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['Environment', 'Inside Our Earth', 'Our Changing Earth', 'Air', 'Water', 'Natural Vegetation and Wildlife', 'Human Environment: Settlement, Transport and Communication', 'Human-Environment Interactions: The Tropical and Subtropical Region', 'Life in the Deserts'], tests: 10 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['On Equality', 'Role of the Government in Health', 'How the State Government Works', 'Growing Up as Boys and Girls', 'Women Change the World', 'Understanding Media', 'Understanding Advertising', 'Markets Around Us', 'A Shirt in the Market'], tests: 10 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['Nutrition in Plants', 'Nutrition in Animals', 'Fibre to Fabric', 'Heat', 'Acids, Bases and Salts', 'Physical and Chemical Changes', 'Weather, Climate and Adaptations', 'Winds, Storms and Cyclones', 'Soil', 'Respiration in Organisms', 'Transportation in Animals and Plants', 'Reproduction in Plants'], tests: 10 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['World: Countries & Capitals', 'International Organisations', 'Indian Rivers & Mountains', 'Important Inventions', 'Sports & Trophies', 'Currencies of the World', 'Famous Monuments', 'Indian Arts & Culture Basics'], tests: 10 },
    ],
    bookPages: 210,
  },
  '8': {
    heroDesc: 'The bridge between basics and boards. Modern Indian History, the Constitution in practice, and advanced Geography — the real competitive exam syllabus starts here.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['How, When and Where', 'From Trade to Territory', 'Ruling the Countryside', 'Tribals, Dikus and the Vision of a Golden Age', 'When People Rebel (1857)', 'Civilising the Native, Educating the Nation', 'Women, Caste and Reform', 'The Making of the National Movement', 'India After Independence'], tests: 12 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['Resources', 'Land, Soil, Water, Natural Vegetation and Wildlife Resources', 'Mineral and Power Resources', 'Agriculture', 'Industries', 'Human Resources'], tests: 12 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['The Indian Constitution', 'Understanding Secularism', 'Why Do We Need a Parliament?', 'Understanding Laws', 'Judiciary', 'Understanding Our Criminal Justice System', 'Understanding Marginalisation', 'Confronting Marginalisation'], tests: 12 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['Crop Production and Management', 'Microorganisms', 'Synthetic Fibres and Plastics', 'Materials: Metals and Non-Metals', 'Coal and Petroleum', 'Combustion and Flame', 'Conservation of Plants and Animals', 'Cell: Structure and Functions', 'Reproduction in Animals', 'Force and Pressure', 'Friction', 'Sound', 'Chemical Effects of Electric Current'], tests: 12 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['Indian Freedom Fighters', 'Important Acts & Laws in Indian History', 'UN & Its Agencies', 'Indian Defence', 'Space Missions — India & World', 'Dams & Rivers of India', 'Census & Demographics', 'Current Affairs Framework'], tests: 12 },
    ],
    bookPages: 240,
  },
  '9': {
    heroDesc: 'Competition-level preparation officially begins. French Revolution, Indian Constitution at depth, Climate & Population — the chapters UPSC Prelims directly tests.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['The French Revolution', 'Socialism in Europe and the Russian Revolution', 'Nazism and the Rise of Hitler', 'Forest Society and Colonialism', 'Pastoralists in the Modern World'], tests: 16 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['India — Size and Location', 'Physical Features of India', 'Drainage', 'Climate', 'Natural Vegetation and Wildlife', 'Population'], tests: 16 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['What is Democracy? Why Democracy?', 'Constitutional Design', 'Electoral Politics', 'Working of Institutions', 'Democratic Rights'], tests: 16 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['Matter in Our Surroundings', 'Is Matter Around Us Pure?', 'Atoms and Molecules', 'Structure of the Atom', 'The Fundamental Unit of Life', 'Tissues', 'Diversity in Living Organisms', 'Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy', 'Sound', 'Why Do We Fall Ill?', 'Natural Resources', 'Improvement in Food Resources'], tests: 16 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['World Wars — Causes & Effects', 'Indian Geography Advanced', 'Constitutional Bodies of India', 'Economic Terms & Concepts', 'Important Committees & Commissions', 'Environmental Conventions', 'Indian Polity Advanced', 'Science & Technology in India'], tests: 16 },
    ],
    bookPages: 280,
  },
  '10': {
    heroDesc: 'Board exams meet competition prep. Nationalism, Federalism, Development Economics — these chapters appear word-for-word in UPSC, NDA, and every state exam.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['The Rise of Nationalism in Europe', 'Nationalism in India', 'The Making of a Global World', 'The Age of Industrialisation', 'Print Culture and the Modern World'], tests: 24 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['Resources and Development', 'Forest and Wildlife Resources', 'Water Resources', 'Agriculture', 'Minerals and Energy Resources', 'Manufacturing Industries', 'Lifelines of National Economy'], tests: 24 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['Power Sharing', 'Federalism', 'Democracy and Diversity', 'Gender, Religion and Caste', 'Popular Struggles and Movements', 'Political Parties', 'Outcomes of Democracy', 'Challenges to Democracy'], tests: 24 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals', 'Carbon and its Compounds', 'Periodic Classification of Elements', 'Life Processes', 'Control and Coordination', 'How do Organisms Reproduce?', 'Heredity and Evolution', 'Light: Reflection and Refraction', 'Human Eye and Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Sources of Energy', 'Our Environment'], tests: 24 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['Indian Economy Basics', 'Five Year Plans', 'Indian Political System Deep Dive', 'International Relations', 'Environmental Issues & Policies', 'Indian Agriculture Data', 'Transport & Communication', 'Social Issues & Schemes'], tests: 24 },
    ],
    bookPages: 320,
  },
  '11': {
    heroDesc: 'IAS and NDA-level depth begins. Indian Constitution in full, World History, Economic Development, and advanced Geography — this is where serious aspirants separate from the crowd.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['From the Beginning of Time', 'Writing and City Life', 'An Empire Across Three Continents', 'The Central Islamic Lands', 'Nomadic Empires', 'The Three Orders', 'Changing Cultural Traditions', 'Confrontation of Cultures', 'The Industrial Revolution', 'Displacing Indigenous Peoples', 'Paths to Modernisation'], tests: 30 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['Geography as a Discipline', 'The Origin and Evolution of the Earth', 'Interior of the Earth', 'Distribution of Oceans and Continents', 'Minerals and Rocks', 'Geomorphic Processes', 'Landforms and their Evolution', 'Composition and Structure of Atmosphere', 'Solar Radiation, Heat Balance and Temperature', 'Atmospheric Circulation and Weather Systems', 'Water in the Atmosphere', 'World Climate and Climate Change', 'Water (Oceans)', 'Movements of Ocean Water', 'Life on the Earth', 'Biodiversity and Conservation'], tests: 30 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['Constitution — Why and How?', 'Rights in the Indian Constitution', 'Election and Representation', 'Executive', 'Legislature', 'Judiciary', 'Federalism', 'Local Governments', 'Constitution as a Living Document', 'The Philosophy of the Constitution'], tests: 30 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle and Cell Division', 'Transport in Plants', 'Mineral Nutrition', 'Photosynthesis', 'Respiration in Plants', 'Plant Growth and Development', 'Digestion and Absorption', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination', 'Locomotion and Movement', 'Neural Control and Coordination', 'Chemical Coordination and Integration'], tests: 30 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['Indian Polity — Complete Framework', 'World Geography Advanced', 'Indian Economy — Macro Concepts', 'Science & Technology Current', 'Art & Culture of India', 'Modern Indian History — Advanced', 'International Organisations Deep Dive', 'Ethics & Governance Basics'], tests: 30 },
    ],
    bookPages: 380,
  },
  '12': {
    heroDesc: 'The final year. Cold War, Indian Politics since Independence, Contemporary World Politics, Human Geography — the exact syllabus of UPSC Mains GS papers. Finish this, and you\'re exam ready.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['Bricks, Beads and Bones', 'Kings, Farmers and Towns', 'Kinship, Caste and Class', 'Thinkers, Beliefs and Buildings', 'Through the Eyes of Travellers', 'Bhakti-Sufi Traditions', 'An Imperial Capital: Vijayanagara', 'Peasants, Zamindars and the State', 'Kings and Chronicles: The Mughal Courts', 'Colonialism and the Countryside', 'Rebels and the Raj', 'Colonial Cities', 'Mahatma Gandhi and the Nationalist Movement', 'Understanding Partition', 'Framing the Constitution'], tests: 40 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['Human Geography: Nature and Scope', 'The World Population: Distribution, Density and Growth', 'Population Composition', 'Human Development', 'Primary Activities', 'Secondary Activities', 'Tertiary and Quaternary Activities', 'Transport and Communication', 'International Trade', 'Human Settlements'], tests: 40 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['The Cold War Era', 'The End of Bipolarity', 'US Hegemony in World Politics', 'Alternative Centres of Power', 'Contemporary South Asia', 'International Organisations', 'Security in the Contemporary World', 'Environment and Natural Resources', 'Globalisation', 'Era of One-Party Dominance', 'Challenges of Nation Building', 'Politics of Planned Development', 'India\'s External Relations', 'Challenges to and Restoration of the Congress System', 'Rise of Popular Movements', 'Regional Aspirations', 'Recent Developments in Indian Politics'], tests: 40 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Evolution', 'Human Health and Disease', 'Strategies for Enhancement in Food Production', 'Microbes in Human Welfare', 'Biotechnology: Principles and Processes', 'Biotechnology and its Applications', 'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation', 'Environmental Issues'], tests: 40 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['UPSC Prelims GS Pattern', 'Indian History — Complete Timeline', 'World Politics & Relations', 'Indian Economy — Budget & Policy', 'Geography — Map-Based Questions', 'Governance & Social Justice', 'Disaster Management', 'Internal Security Basics', 'Ethics Case Studies Intro'], tests: 40 },
    ],
    bookPages: 420,
  },
};

const BY_EXAM_SERIES = [
  { exam: 'UPSC', title: 'UPSC Foundation Series', desc: 'The same NCERT foundation every IAS topper builds. Start from Class 6 level — reach Prelims level.', tests: 120, badge: 'UPSC', emoji: '\uD83C\uDFDB\uFE0F', gradient: 'from-[#981F1F] to-[#6B1515]' },
  { exam: 'NDA', title: 'NDA Complete Test Series', desc: 'GS holds 400/900 marks in NDA. Our tests cover the exact NCERT chapters that NDA actually asks.', tests: 80, badge: 'NDA', emoji: '\uD83C\uDF96\uFE0F', gradient: 'from-emerald-600 to-emerald-800' },
  { exam: 'CUET', title: 'CUET Subject-wise Series', desc: 'Domain-specific tests for History, Geography, Political Science & General Studies sections of CUET.', tests: 150, badge: 'CUET', emoji: '\uD83C\uDF93', gradient: 'from-indigo-600 to-indigo-800' },
];

const RESULTS: { type: 'quote' | 'stat'; name?: string; score?: string; year?: string; subject: string; quote: string; avatar?: string; statValue?: string; statLabel?: string }[] = [
  { type: 'stat', subject: 'All', quote: 'Students successfully placed in top merit lists globally.', statValue: '12K+', statLabel: 'Selections' },
  { type: 'quote', name: 'Aarav Sharma', score: 'NDA AIR 12', year: '2025', subject: 'NDA', quote: 'Perfect Classes test series was the game-changer.', avatar: 'AS' },
  { type: 'stat', subject: 'All', quote: 'Total mock tests attempted by our students this year.', statValue: '1M+', statLabel: 'Tests Taken' },
  { type: 'quote', name: 'Priya Verma', score: 'CUET 99.4 %ile', year: '2025', subject: 'CUET', quote: 'Subject-wise tests helped me identify weak areas fast.', avatar: 'PV' },
  { type: 'quote', name: 'Rohit Singh', score: 'Agniveer Selected', year: '2024', subject: 'Agniveer', quote: 'The pattern-based tests gave me real exam confidence.', avatar: 'RS' },
  { type: 'stat', subject: 'All', quote: 'Average score improvement after 3 months of practice.', statValue: '+40%', statLabel: 'Score Jump' },
  { type: 'quote', name: 'Sneha Gupta', score: '98.2% Class 12', year: '2025', subject: 'Class 12', quote: 'Chapter tests + mocks made board prep stress-free.', avatar: 'SG' },
];

const FEATURES = [
  { icon: FileText, title: 'Book-Linked Tests', desc: 'Every question comes directly from Vipin Sir\'s NCERT books. No random questions — study the chapter, ace the test. 100% alignment.' },
  { icon: BarChart2, title: 'Track Your Growth', desc: 'See exactly where you stand — subject-wise scores, weak topics, and improvement trends after every test. Know what to fix next.' },
  { icon: Shield, title: 'Proven by 350+ Selections', desc: 'This isn\'t a new experiment. The same teaching system that produced 350+ UP Police and 125+ Super TET selections — now digital.' },
];

const TESTIMONIALS = [
  { name: 'Rohit Kumar', tag: 'UP Police Selected', stars: 5, text: '"Main Noorpur se hoon. Vipin Sir ke books se padha, test series se practice ki — ek hi attempt mein selection ho gaya. Gaon mein kisi ne socha nahi tha."', avatar: 'RK' },
  { name: 'Priya Sharma', tag: 'Super TET Selected', stars: 5, text: '"School mein sirf PCM padhaya gaya. GS ka G nahi aata tha. Junior IAS ki books ne Class 6 se neenv daali — aaj government teacher hoon."', avatar: 'PS' },
  { name: 'Arun Singh', tag: 'NDA Cleared 2025', stars: 5, text: '"NDA mein 400 marks GS ke hote hain — yeh mujhe Perfect Classes ne samjhaya. Warna main sirf Maths ki tension le raha tha."', avatar: 'AS' },
  { name: 'Kavita Devi', tag: 'Parent — Noorpur', stars: 5, text: '"₹100 mahine mein itni quality padhai? Mere bete ko Class 7 se Junior IAS mein daala. Ab usse Constitution aur Geography aise aati hai jaise Delhi ke bachche padhte hain."', avatar: 'KD' },
  { name: 'Deepak Verma', tag: 'UP Police Selected', stars: 5, text: '"Gaon mein coaching ka koi option nahi tha. Vipin Sir ki books aur test series ne ghar baithe taiyaari karwa di. Pehle attempt mein clear ho gaya."', avatar: 'DV' },
  { name: 'Sunita Yadav', tag: 'Parent — Bijnor', stars: 5, text: '"Meri beti Class 8 mein hai. Pehle History se darr lagta tha, ab khud se padhti hai. ₹100 mein itna koi nahi deta."', avatar: 'SY' },
  { name: 'Manish Tiwari', tag: 'Super TET Selected', stars: 5, text: '"Delhi coaching mein 2 lakh kharch kiye, kuch nahi hua. Vipin Sir ki ₹100 wali system se ek saal mein selection. Sach mein believe nahi hota."', avatar: 'MT' },
  { name: 'Ravi Prakash', tag: 'NDA Cleared 2024', stars: 5, text: '"Class 9 se Junior IAS join kiya tha. NDA ke GS section mein 380+ marks aaye — sab NCERT ki taiyaari ka kamaal tha."', avatar: 'RP' },
  { name: 'Anita Kumari', tag: 'Parent — Moradabad', stars: 5, text: '"Hamare gaon mein koi accha teacher nahi tha. Vipin Sir ki books ne mere dono bachcho ki zindagi badal di. Ab dono IAS ki taiyaari kar rahe hain."', avatar: 'AK' },
];

const STATS = [
  { value: 5000, suffix: '+', label: 'Students at a Time' },
  { value: 350, suffix: '+', label: 'UP Police Selections' },
  { value: 125, suffix: '+', label: 'Super TET Selections' },
  { value: 10, suffix: '+', label: 'Years of Legacy' },
];

const FAQS = [
  { q: 'What is the Junior IAS program?', a: 'Junior IAS is Vipin Sir\'s mission to build UPSC-level General Studies foundations from Class 6 itself. It covers History, Geography, Constitution, Science, and Static GK — the same NCERT subjects that decide every competitive exam in India.' },
  { q: 'Why should my child start preparing from Class 6?', a: 'Because competitive exams like UPSC, NDA, and State PCS test NCERT knowledge from Class 6-12. Schools only focus on PCM to clear boards — they completely ignore the Humanities that actually decide your rank. Starting early means no last-minute cramming in Delhi coaching centers.' },
  { q: 'How does the test series work with the books?', a: 'Every single question in our test series comes directly from Vipin Sir\'s Junior IAS books (NCERT-based). Study the chapter, take the test — 100% alignment, zero surprises. This is how 350+ students cleared UP Police from a single center.' },
  { q: 'Is ₹100/month really the full price?', a: 'Yes. ₹100/month (₹1,200/year) gives you access to the complete Junior IAS ecosystem — books and test series. Vipin Sir deliberately priced it so that no rural or semi-urban family is ever priced out of quality education.' },
  { q: 'Who is Vipin Sir?', a: 'Vipin Sir is a B.Tech + M.Tech Aeronautical Engineer who left a BSF government job to teach. He taught at India\'s top UPSC coaching centers in Delhi before founding Perfect Classes in Noorpur in 2016. Starting with just 5 students, he built it to 5,000 students with 350+ UP Police and 125+ Super TET selections — all from one center, purely by word of mouth.' },
  { q: 'Can I access tests on mobile?', a: 'Yes. Our platform is fully mobile-optimised — attempt tests anytime, anywhere, even on basic smartphones with slow internet.' },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────
// Note: Navbar and Footer have been extracted to separate files in src/components/layout/

// Removed: function Navbar() - now imported from '@/components/layout/Navbar'
function OldNavbar_Removed() {
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

function InteractiveHero() {
  const [showVideo, setShowVideo] = useState(false);
  const { lang } = useLang();

  return (
    <>
    <section id="hero" className="relative overflow-hidden pt-24 sm:pt-32 pb-10 sm:pb-16 bg-[#F5F5F7]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(152,31,31,0.06),transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(253,184,19,0.04),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(152,31,31,0.03),transparent_50%)] z-0" />
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden hidden md:block">
        {/* Road SVG — starts top-right, curves to left mid, then back to bottom-right */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          {/* Road surface */}
          <path
            id="heroRoadPath"
            d="M1420,100 C1250,100 1100,140 950,200 C800,260 200,280 80,350 C-20,400 80,480 200,500 C400,530 900,520 1100,580 C1250,620 1350,660 1420,700"
            fill="none" stroke="#E5E0D8" strokeWidth="24" strokeLinecap="round" opacity="0.5"
          />
          {/* Road center dashes */}
          <path
            d="M1420,100 C1250,100 1100,140 950,200 C800,260 200,280 80,350 C-20,400 80,480 200,500 C400,530 900,520 1100,580 C1250,620 1350,660 1420,700"
            fill="none" stroke="#D4C5A9" strokeWidth="1.5" strokeDasharray="10 7" opacity="0.4"
          />
        </svg>

        {/* Milestone: Gaon — top-right, icon + photo connected by dots */}
        <div className="absolute top-[8%] right-[6%] lg:top-[6%] lg:right-[8%] flex flex-col items-center scale-[0.85] lg:scale-[1.3] xl:scale-[1.5] origin-top-right">
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-lg">
              <span className="text-2xl">🏘️</span>
            </div>
          </motion.div>
          <span className="text-[9px] font-bold text-[#8B7355] mt-1 tracking-wide">{T[lang].journeyGaon}</span>
          <svg width="2" height="20" className="my-1"><line x1="1" y1="0" x2="1" y2="20" stroke="#D4C5A9" strokeWidth="2" strokeDasharray="3 3" /></svg>
          <div className="w-[90px] h-[65px] rounded-lg overflow-hidden border-2 border-[#D4C5A9] shadow-md bg-gray-200">
            <img src="/hero/gaon.jpg" alt="Vipin Sir in villages" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Milestone: Junior IAS — left middle, icon + photo connected by dots */}
        <div className="absolute top-[38%] left-[3%] lg:top-[35%] lg:left-[5%] flex items-center scale-[0.85] lg:scale-[1.3] xl:scale-[1.5] origin-left">
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -5, 0], boxShadow: ['0 4px 15px rgba(152,31,31,0.1)', '0 6px 25px rgba(152,31,31,0.25)', '0 4px 15px rgba(152,31,31,0.1)'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#981F1F] to-[#7A1818] flex items-center justify-center shadow-lg border-2 border-white">
                <GraduationCap size={20} className="text-white" />
              </div>
            </motion.div>
            <span className="text-[9px] font-bold text-[#981F1F] mt-1 tracking-wide">{T[lang].journeyJuniorIas}</span>
          </div>
          <svg width="20" height="2" className="mx-1"><line x1="0" y1="1" x2="20" y2="1" stroke="#981F1F" strokeWidth="2" strokeDasharray="3 3" opacity="0.5" /></svg>
          <div className="w-[90px] h-[65px] rounded-lg overflow-hidden border-2 border-[#981F1F]/40 shadow-md bg-gray-200">
            <img src="/hero/junior-ias.jpg" alt="Junior IAS Program" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Milestone: Sarkari Naukri — bottom-right, icon on top then photo below */}
        <div className="absolute bottom-[6%] right-[6%] lg:bottom-[8%] lg:right-[8%] flex flex-col items-center scale-[0.85] lg:scale-[1.3] xl:scale-[1.5] origin-bottom-right">
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
            <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-lg">
              <span className="text-2xl">🏛️</span>
            </div>
          </motion.div>
          <span className="text-[9px] font-bold text-[#FDB813] mt-1 tracking-wide">{T[lang].journeySarkariNaukri}</span>
          <svg width="2" height="20" className="my-1"><line x1="1" y1="0" x2="1" y2="20" stroke="#FDB813" strokeWidth="2" strokeDasharray="3 3" /></svg>
          <div className="w-[90px] h-[65px] rounded-lg overflow-hidden border-2 border-[#FDB813]/50 shadow-md bg-gray-200">
            <img src="/hero/selected-students.jpg" alt="Selected students with Vipin Sir" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Static village pin markers on the road */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          {/* Small village dots along the road path */}
          <circle cx="1100" cy="145" r="3" fill="#981F1F" opacity="0.15" />
          <circle cx="800" cy="260" r="3.5" fill="#981F1F" opacity="0.12" />
          <circle cx="350" cy="310" r="3" fill="#981F1F" opacity="0.15" />
          <circle cx="120" cy="420" r="3" fill="#FDB813" opacity="0.15" />
          <circle cx="500" cy="520" r="3.5" fill="#981F1F" opacity="0.12" />
          <circle cx="1050" cy="565" r="3" fill="#FDB813" opacity="0.15" />
        </svg>
      </div>


      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        {/* Centered Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge — same on all screens */}
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-wider mb-4 sm:mb-6 border border-[#981F1F]/20">
            <Trophy size={14} /> {T[lang].badge}
          </span>

          {/* Journey curvy road — mobile only */}
          <div className="md:hidden relative w-full max-w-xs mx-auto mb-3 mt-1" style={{ height: '80px' }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 80" fill="none" preserveAspectRatio="xMidYMid meet">
              {/* Road surface — thick curvy path */}
              <path d="M20,60 C60,60 80,20 150,20 C220,20 240,60 280,60" stroke="#E5E0D8" strokeWidth="12" strokeLinecap="round" fill="none" />
              {/* Road center dashes */}
              <path d="M20,60 C60,60 80,20 150,20 C220,20 240,60 280,60" stroke="#C4B896" strokeWidth="1" strokeDasharray="6 4" fill="none" opacity="0.6" />
              {/* Static village dots on road */}
              <circle cx="80" cy="35" r="2.5" fill="#981F1F" opacity="0.2" />
              <circle cx="220" cy="35" r="2.5" fill="#FDB813" opacity="0.2" />
            </svg>
            {/* Gaon — left, aligned to road start */}
            <div className="absolute z-10 flex flex-col items-center" style={{ left: '2%', top: '28px' }}>
              <div className="w-9 h-9 rounded-xl bg-[#F5F0E8] border border-[#D4C5A9]/40 flex items-center justify-center shadow-sm">
                <span className="text-base">🏘️</span>
              </div>
              <span className="text-[8px] font-bold text-[#8B7355] mt-0.5">{T[lang].journeyGaon}</span>
            </div>
            {/* Junior IAS — center top, aligned to road peak */}
            <div className="absolute z-10 flex flex-col items-center left-1/2 -translate-x-1/2" style={{ top: '-8px' }}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#981F1F] to-[#7A1818] border-2 border-white flex items-center justify-center shadow-md">
                <GraduationCap size={18} className="text-white" />
              </div>
              <span className="text-[8px] font-bold text-[#981F1F] mt-0.5">{T[lang].journeyJuniorIas}</span>
            </div>
            {/* Sarkari Naukri — right, aligned to road end */}
            <div className="absolute z-10 flex flex-col items-center" style={{ right: '2%', top: '28px' }}>
              <div className="w-9 h-9 rounded-xl bg-[#FFF8E7] border border-[#FDB813]/40 flex items-center justify-center shadow-sm">
                <span className="text-base">🏛️</span>
              </div>
              <span className="text-[8px] font-bold text-[#FDB813] mt-0.5">{T[lang].journeySarkariNaukri}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#121212] leading-[1.25] mb-3 sm:mb-6 tracking-tight">
            {T[lang].heading1} <br />
            <span className="text-[#981F1F]">{T[lang].heading2}</span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-[#555] mb-4 sm:mb-6 max-w-xs sm:max-w-md mx-auto leading-relaxed">
            {T[lang].subtitle}
          </p>

          {/* Hero Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-sm sm:max-w-2xl mx-auto mb-5 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-200 cursor-pointer relative group"
            onClick={() => setShowVideo(true)}
          >
            <div className="aspect-video bg-gradient-to-br from-[#121212] to-[#2a2a2a] flex items-center justify-center relative">
              {/* Video thumbnail placeholder — replace with actual thumbnail */}
              <img src="/hero/video-thumb.jpg" alt="Perfect Classes Introduction" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity" />
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#981F1F] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play size={28} className="text-white ml-1" fill="white" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-white font-bold text-sm sm:text-base">{T[lang].videoTitle}</p>
                <p className="text-white/60 text-xs">{T[lang].videoSubtitle}</p>
              </div>
            </div>
          </motion.div>

          {/* CTAs below video */}
          <div className="flex justify-center">
            <Link to="/#classes" className="bg-gradient-to-r from-[#981F1F] to-[#B52A2A] hover:from-[#7a1818] hover:to-[#981F1F] text-white font-bold px-6 py-3 sm:px-10 sm:py-4 rounded-2xl flex items-center gap-2 sm:gap-3 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 text-base sm:text-lg group">
              {T[lang].ctaJoin} <TrendingUp size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:gap-6 lg:gap-10 mt-3 sm:mt-10 text-[11px] sm:text-sm text-[#888]"
        >
          {[
            { icon: CheckCircle, text: T[lang].trustNcert },
            { icon: Users, text: T[lang].trust5000 },
            { icon: Zap, text: T[lang].trust100 },
            { icon: BookOpen, text: T[lang].trustClass },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 sm:gap-2">
              <item.icon size={14} className="text-[#981F1F]" />
              <span className="font-semibold">{item.text}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>

    {/* Video Modal */}
    <AnimatePresence>
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/PLACEHOLDER_VIDEO_ID?autoplay=1"
              title="Perfect Classes Introduction"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

function QuickLinks() {
  return (
    <section id="classes" className="bg-white border-b border-gray-100 py-3 overflow-hidden">
      <Marquee className="[--gap:0.5rem]" style={{"--duration": "20s", "--gap": "0.5rem"} as React.CSSProperties}>
        {QUICK_LINKS.map((l, i) => (
          <button key={i}
            className="flex items-center gap-1.5 bg-gray-50 hover:bg-[#981F1F] hover:text-white text-[#333] text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#981F1F] transition-all whitespace-nowrap shadow-sm hover:shadow-md mx-1 shrink-0">
            <span className="text-sm">{l.icon}</span>{l.label}
          </button>
        ))}
      </Marquee>
    </section>
  );
}

function TestSeriesExplorer() {
  // const [tab, setTab] = useState<'class' | 'exam'>('class');
  const { lang } = useLang();
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeftRef.current = sliderRef.current?.scrollLeft || 0;
  };
  const scrollBy = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.querySelector('a')?.offsetWidth || 320;
    sliderRef.current.scrollBy({ left: dir === 'left' ? -cardWidth - 24 : cardWidth + 24, behavior: 'smooth' });
  };

  const handleMouseLeave = () => { isDown.current = false; };
  const handleMouseUp = () => { isDown.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  // const tabs: { key: 'class' | 'exam'; label: string }[] = [
  //   { key: 'class', label: 'By Class' },
  //   { key: 'exam', label: 'By Competitive Exam' },
  // ];
  return (
    <section id="test-series" className="py-20 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-[#981F1F]/[0.03] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full bg-[#FDB813]/[0.04] translate-y-1/3 translate-x-1/3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-white border border-[#981F1F]/20 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <Target size={12} /> {T[lang].testBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121212]">{T[lang].testHeading} <span className="text-[#981F1F]">{T[lang].testHeadingHighlight}</span></h2>
          <p className="text-[#555] mt-2 max-w-xl mx-auto">{T[lang].testDesc}</p>
        </div>
        {/* Tab bar — hidden for now, only showing class view */}
        {/* <div className="flex justify-center mb-10 mx-auto px-2">
          <div className="flex flex-wrap justify-center bg-white border border-gray-200 rounded-2xl p-1 gap-1 max-w-full">
            {tabs.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${tab === t.key ? 'bg-[#981F1F] text-white shadow' : 'text-[#555] hover:bg-gray-50'}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div> */}

        <div>
            <div className="relative">
              {/* Left arrow */}
              <button onClick={() => scrollBy('left')} className="flex absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-lg hover:bg-[#981F1F] hover:text-white hover:border-[#981F1F] transition-all">
                <ChevronLeft size={18} />
              </button>
              {/* Right arrow */}
              <button onClick={() => scrollBy('right')} className="flex absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-lg hover:bg-[#981F1F] hover:text-white hover:border-[#981F1F] transition-all">
                <ChevronRight size={20} />
              </button>
              <div
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing px-1">
              {BY_CLASS_SERIES.map((s, i) => (
                <Link to={`/class/${s.class}`} key={i} className="snap-center flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[320px]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`group relative bg-gradient-to-b ${s.gradient} rounded-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-between p-6 text-white shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
                  >
                    {/* Decorative shapes */}
                    <div className="absolute top-3 right-3 w-20 h-20 rounded-full bg-white/10" />
                    <div className="absolute bottom-10 left-2 w-12 h-12 rounded-full bg-white/5" />

                    {/* Top: Class number — big and bold */}
                    <div className="relative z-10 self-start w-full">
                      <h3 className="text-4xl font-extrabold leading-none tracking-tight">{lang === 'hi' ? `क्लास ${s.class}` : `Class ${s.class}`}</h3>
                      <p className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mt-1">{lang === 'hi' ? 'जूनियर IAS' : 'JUNIOR IAS'}</p>
                    </div>

                    {/* Illustration */}
                    <div className="relative z-10 flex-grow flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img src={s.image} alt={`Class ${s.class} student`} className="w-36 h-40 drop-shadow-xl object-contain" />
                    </div>

                    {/* Bottom Text */}
                    <div className="relative z-10 text-center w-full">
                      <p className="text-white/90 text-sm font-semibold italic leading-snug">"{typeof s.tagline === 'string' ? s.tagline : s.tagline[lang]}"</p>
                      <div className="mt-3 bg-white/20 backdrop-blur-sm text-sm font-bold px-5 py-2.5 rounded-full border border-white/30 inline-flex items-center gap-2 group-hover:bg-white/30 transition-colors">
                        {T[lang].exploreSeries} <ArrowRight size={14} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}


const BOOKS = [
  { class: 'Class 6', title: 'Junior IAS — Class 6', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
  { class: 'Class 7', title: 'Junior IAS — Class 7', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
  { class: 'Class 8', title: 'Junior IAS — Class 8', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
  { class: 'Class 9', title: 'Junior IAS — Class 9', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
  { class: 'Class 10', title: 'Junior IAS — Class 10', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
  { class: 'Class 11', title: 'Junior IAS — Class 11', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
  { class: 'Class 12', title: 'Junior IAS — Class 12', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
];

function BooksShowcase() {
  const [bookLang, setBookLang] = useState<'Hindi' | 'English'>('Hindi');
  const { lang } = useLang();
  const booksRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const onDragStart = (e: React.MouseEvent) => { isDragging.current = true; dragStartX.current = e.pageX - (booksRef.current?.offsetLeft || 0); dragScrollLeft.current = booksRef.current?.scrollLeft || 0; };
  const onDragEnd = () => { isDragging.current = false; };
  const onDragMove = (e: React.MouseEvent) => { if (!isDragging.current || !booksRef.current) return; e.preventDefault(); const x = e.pageX - (booksRef.current.offsetLeft || 0); booksRef.current.scrollLeft = dragScrollLeft.current - (x - dragStartX.current) * 1.5; };

  const scrollBooks = (dir: 'left' | 'right') => {
    if (!booksRef.current) return;
    booksRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <section id="books" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#981F1F]/[0.02] -translate-y-1/3 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#FDB813]/[0.03] translate-y-1/2 -translate-x-1/3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
            <BookOpen size={12} /> {T[lang].booksBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight mb-4">
            <span className="text-[#981F1F]">{T[lang].booksHeading}</span>
          </h2>
          <p className="text-[#555] max-w-2xl mx-auto mt-2 text-lg">
            {T[lang].booksDesc}
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex bg-gray-50 border border-gray-200 rounded-xl p-1">
            <button
              onClick={() => setBookLang('Hindi')}
              className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${bookLang === 'Hindi' ? 'bg-[#981F1F] text-white shadow' : 'text-[#555] hover:text-[#121212]'}`}>
              {T[lang].hindiMedium}
            </button>
            <button
              onClick={() => setBookLang('English')}
              className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${bookLang === 'English' ? 'bg-[#981F1F] text-white shadow' : 'text-[#555] hover:text-[#121212]'}`}>
              {T[lang].englishMedium}
            </button>
          </div>
        </div>

        {/* Scrollable slider with buttons */}
        <div className="relative">
          <button onClick={() => scrollBooks('left')} className="flex absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-lg hover:bg-[#981F1F] hover:text-white hover:border-[#981F1F] transition-all">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scrollBooks('right')} className="flex absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-lg hover:bg-[#981F1F] hover:text-white hover:border-[#981F1F] transition-all">
            <ChevronRight size={18} />
          </button>

          <div
            ref={booksRef}
            onMouseDown={onDragStart}
            onMouseMove={onDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing px-1"
          >
            {BOOKS.map((b, i) => (
              <div key={i} className="snap-center flex-shrink-0 w-[260px] sm:w-[280px] lg:w-[300px] bg-white border text-center border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="h-40 bg-[#FAFAFA] rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-gray-50">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(152,31,31,0.05),transparent_70%)]" />
                   <BookOpen size={48} className="text-[#981F1F] opacity-80" />
                   <div className="absolute bottom-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-[#121212] rounded shadow-sm uppercase border border-gray-100">{bookLang}</div>
                </div>
                <div className="text-xs font-bold text-[#FDB813] tracking-wider mb-2">{b.class}</div>
                <h3 className="font-bold text-[#121212] text-xl mb-3">{b.title}</h3>
                <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                  {b.tags.map(t => (
                    <span key={t} className="text-[10px] bg-gray-50 text-[#555] border border-gray-200 px-2 py-1 rounded-md whitespace-nowrap">{t}</span>
                  ))}
                </div>
                <button className="w-full bg-[#121212] text-white hover:bg-[#333] font-semibold py-2.5 rounded-xl transition-colors">
                  {T[lang].orderNow}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section id="mission" className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#981F1F]/20 text-[#FDB813] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 border border-[#FDB813]/20">
              <Award size={12} /> Vipin Sir's Legacy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Gaon Ka Bachcha Bhi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] to-orange-500">IAS Ban Sake.</span>
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              Vipin Sir left a BSF government job and a position at Delhi's Drishti IAS to return to Noorpur. Why? Because he saw the truth: <strong>schools teach PCM to pass boards, but competitive exams are decided by General Studies</strong> — a subject no school teaches properly.
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              The result? Rural students are forced to migrate to Delhi or Prayagraj and spend lakhs relearning Class 6-12 NCERT books. Junior IAS fixes this — building the foundation while the child is still in school, at a price every family can afford.
            </p>
            
            <motion.div animate={{ boxShadow: ['0 0 0px rgba(253,184,19,0)', '0 0 20px rgba(253,184,19,0.15)', '0 0 0px rgba(253,184,19,0)'] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8">
               <h3 className="text-white font-bold text-xl flex items-center gap-2 mb-3"><MapPin className="text-[#FDB813]" size={20} /> 200 Gaon, Ek Mission</h3>
               <p className="text-white/60 text-sm leading-relaxed">
                 Vipin Sir is personally visiting 200 villages in a vanity van — sleeping in it, eating on the road — to sit with parents and show them what their children deserve. No grand seminar halls, no marketing gimmicks. Just a teacher going door-to-door proving that ₹100/month can change a family's future forever.
               </p>
            </motion.div>
          </div>

          <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2071&auto=format&fit=crop" alt="Education Mission Vanity Van Tour" className="absolute inset-0 w-full h-full object-cover opacity-50" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
             <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex gap-4">
                  <div className="bg-[#981F1F] h-14 w-14 rounded-xl flex items-center justify-center shrink-0">
                    <Target size={28} className="text-white" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-white font-bold text-xl">Har Gaon Tak Padhai</h4>
                    <p className="text-white/70 text-sm">Woh talent jo Delhi nahi ja sakta — hum uske paas aa rahe hain.</p>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ResultsShowcase() {
  return (
    <section id="results" className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#981F1F]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <span className="inline-flex items-center gap-2 bg-[#981F1F]/10 text-[#FDB813] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#FDB813]/20">
            <Award size={12} /> Wall of Fame
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Noorpur Se <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] to-orange-500">Sarkari Naukri Tak.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s] flex items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="mx-4 overflow-hidden rounded-2xl border border-[#981F1F]/20 shadow-[0_0_30px_rgba(152,31,31,0.1)] relative group shrink-0">
              <img 
                src="/classt.webp" 
                alt="Perfect Classes Achievements Placeholder" 
                className="h-[300px] sm:h-[400px] w-auto max-w-none object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#121212] to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#121212] to-transparent z-20"></div>
      </div>
    </section>
  );
}

/* ── Meet Vipin Sir — WebVeda-style: text left, cycling photo right ── */
function VipinSirSection({ lang }: { lang: string }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const photos = ['/hero/vipin-sir-1.png', '/hero/vipin-sir-2.png', '/hero/vipin-sir-3.png'];

  useEffect(() => {
    const t = setInterval(() => setPhotoIdx(p => (p + 1) % photos.length), 3500);
    return () => clearInterval(t);
  }, [photos.length]);

  return (
    <section className="relative py-20 sm:py-28 bg-[#FFF8F0] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — About text */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:w-[55%]">
            <span className="inline-block bg-[#981F1F]/10 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5 border border-[#981F1F]/20">
              {lang === 'hi' ? 'संस्थापक से मिलें' : 'Meet Our Founder'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2A1810] leading-tight mb-6">
              {lang === 'hi' ? 'मिलिए ' : 'Meet '}<span className="text-[#981F1F]">{lang === 'hi' ? 'विपिन सर' : 'Vipin Sir'}</span>
            </h2>

            <div className="space-y-4 text-[#5A4A3A] text-base sm:text-lg leading-relaxed">
              <p>
                {lang === 'hi'
                  ? 'एक इंजीनियर जिसने सरकारी नौकरी और दिल्ली का करियर छोड़कर अपने गाँव नूरपुर लौटने का फ़ैसला किया — सिर्फ़ इसलिए कि गाँव के बच्चों को वही शिक्षा मिले जो शहर के बच्चों को मिलती है।'
                  : 'An engineer who walked away from a government career and the bright lights of Delhi to return to his village Noorpur — because he believed every child in rural India deserves the same quality of education that city kids get.'}
              </p>
              <p>
                {lang === 'hi'
                  ? '2016 में 5 छात्रों और एक छोटे हॉल से शुरू किया। आज 5,000+ छात्र, 350+ सरकारी चयन, और 4 ज़िलों में शाखाएँ — सब कुछ बिना किसी विज्ञापन के, सिर्फ़ ज़ुबानी प्रचार से।'
                  : 'Started in 2016 with 5 students and a rented hall. Today — 5,000+ students, 350+ government selections, branches across 4 districts. All through word-of-mouth alone. Zero advertising.'}
              </p>
              <p className="font-semibold text-[#2A1810]">
                {lang === 'hi'
                  ? 'अब मिशन है 200 गाँवों तक पहुँचना। ₹100/महीना। कोई बहाना नहीं, कोई बच्चा पीछे नहीं।'
                  : 'Now on a mission to reach 200 villages. ₹100/month. No excuses, no child left behind.'}
              </p>
            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {[
                { label: 'YouTube', href: 'https://youtube.com/@perfectclassesnoorpur', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg> },
                { label: 'Instagram', href: 'https://instagram.com/perfectclassesnoorpur', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.07 4.07 0 0 1-.98 1.51c-.46.46-.9.74-1.51.98-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.07 4.07 0 0 1-1.51-.98 4.07 4.07 0 0 1-.98-1.51c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.77 5.77 0 0 0-2.09 1.36A5.77 5.77 0 0 0 .69 4.08C.39 4.84.19 5.72.13 6.99.07 8.27.06 8.68.06 11.94s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.36 2.09.62.64 1.29 1.05 2.09 1.36.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.77 5.77 0 0 0 2.09-1.36 5.77 5.77 0 0 0 1.36-2.09c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.77 5.77 0 0 0-1.36-2.09A5.77 5.77 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z"/></svg> },
                { label: 'Facebook', href: 'https://facebook.com/perfectclassesnoorpur', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#2A1810] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#981F1F] hover:text-white hover:border-[#981F1F] transition-all shadow-sm">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Cycling photo */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:w-[45%] flex justify-center">
            <div className="relative">
              {/* Decorative blob behind photo */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#981F1F]/10 to-[#FDB813]/10 rounded-[3rem] -rotate-3" />

              <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[#F5ECD7] to-[#E8DCC4] shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={photoIdx}
                    src={photos[photoIdx]}
                    alt="Vipin Sir"
                    className="absolute inset-0 w-full h-full object-contain object-bottom"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                  />
                </AnimatePresence>
              </div>

              {/* Photo dots */}
              <div className="flex justify-center gap-2 mt-4">
                {photos.map((_, i) => (
                  <button key={i} onClick={() => setPhotoIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === photoIdx ? 'bg-[#981F1F] w-6' : 'bg-[#D4C5A9] w-2'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionPage() {
  const { lang } = useLang();
  const milestones = [
    { year: '2014', icon: '🛩️', title: lang === 'hi' ? 'BSF इंजीनियर' : 'BSF Engineer', desc: lang === 'hi' ? 'B.Tech + M.Tech एयरोनॉटिकल इंजीनियरिंग। BSF में सरकारी नौकरी।' : 'B.Tech + M.Tech Aeronautical Engineering. Government job at BSF.', side: 'left' as const, rotate: '-2deg' },
    { year: '2015', icon: '🏛️', title: lang === 'hi' ? 'UPSC कोचिंग, दिल्ली' : 'UPSC Coaching, Delhi', desc: lang === 'hi' ? 'सरकारी नौकरी छोड़ी। दिल्ली के टॉप UPSC कोचिंग में GS पढ़ाया।' : 'Left govt job. Taught GS at India\'s top UPSC coaching.', side: 'right' as const, rotate: '1.5deg' },
    { year: '2016', icon: '🏫', title: lang === 'hi' ? 'परफेक्ट क्लासेज़ की शुरुआत' : 'Perfect Classes Born', desc: lang === 'hi' ? 'नूरपुर लौटे। ₹40,000/साल के हॉल में 5 छात्रों से शुरुआत।' : 'Returned to Noorpur. 5 students in a ₹40,000/year hall.', side: 'left' as const, rotate: '1deg' },
    { year: '2020', icon: '📈', title: lang === 'hi' ? '5,000 छात्र' : '5,000 Students', desc: lang === 'hi' ? 'ज़ुबानी प्रचार से 5,000 छात्र। कांठ, धनौरा, छज्जलेट में शाखाएँ।' : 'Word-of-mouth to 5,000 students. Branches across districts.', side: 'right' as const, rotate: '-1.5deg' },
    { year: '2024', icon: '🏆', title: lang === 'hi' ? '350+ सरकारी चयन' : '350+ Govt Selections', desc: lang === 'hi' ? 'एक सेंटर से 350+ UP Police, 125+ Super TET चयन।' : '350+ UP Police, 125+ Super TET from one center.', side: 'left' as const, rotate: '2deg' },
    { year: '2025', icon: '🚀', title: lang === 'hi' ? '200 गाँव मिशन' : '200 Gaon Mission', desc: lang === 'hi' ? 'जूनियर IAS — ₹100/महीना। 200 गाँवों तक शिक्षा पहुँचाने का मिशन।' : 'Junior IAS at ₹100/month. Mission to reach 200 villages.', side: 'right' as const, rotate: '-1deg' },
  ];

  /* MapBg — removed village background, returns null */
  const MapBg = ({ dark = false }: { dark?: boolean }) => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{
      backgroundColor: dark ? "#322A3A" : "#DFDBE5",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Cpath fill='%239C92AC' fill-opacity='${dark ? '0.2' : '0.4'}' d='M600 325.1v-1.17c-6.5 3.83-13.06 7.64-14.68 8.64-10.6 6.56-18.57 12.56-24.68 19.09-5.58 5.95-12.44 10.06-22.42 14.15-1.45.6-2.96 1.2-4.83 1.9l-4.75 1.82c-9.78 3.75-14.8 6.27-18.98 10.1-4.23 3.88-9.65 6.6-16.77 8.84-1.95.6-3.99 1.17-6.47 1.8l-6.14 1.53c-5.29 1.35-8.3 2.37-10.54 3.78-3.08 1.92-6.63 3.26-12.74 5.03a384.1 384.1 0 0 1-4.82 1.36c-2.04.58-3.6 1.04-5.17 1.52a110.03 110.03 0 0 0-11.2 4.05c-2.7 1.15-5.5 3.93-8.78 8.4a157.68 157.68 0 0 0-6.15 9.2c-5.75 9.07-7.58 11.74-10.24 14.51a50.97 50.97 0 0 1-4.6 4.22c-2.33 1.9-10.39 7.54-11.81 8.74a14.68 14.68 0 0 0-3.67 4.15c-1.24 2.3-1.9 4.57-2.78 8.87-2.17 10.61-3.52 14.81-8.2 22.1-4.07 6.33-6.8 9.88-9.83 12.99-.47.48-.95.96-1.5 1.48l-3.75 3.56c-1.67 1.6-3.18 3.12-4.86 4.9m-9.89 16.94c-2.5 8.13-2.72 15.47-1.76 27.22.47 5.82.51 6.36.51 8.18 0 10.51.12 17.53.63 25.78.24 4.05.56 7.8.97 11.22h.9c-1.13-9.58-1.5-21.83-1.5-37 0-1.86-.04-2.4-.52-8.26-.94-11.63-.72-18.87 1.73-26.85a41.44 41.44 0 0 1 9.65-16.55c1.67-1.76 3.18-3.27 4.83-4.85.63-.6 3.13-2.96 3.75-3.57a71.6 71.6 0 0 0 1.52-1.5c3.09-3.16 5.86-6.76 9.96-13.15 4.77-7.42 6.15-11.71 8.34-22.44.86-4.21 1.5-6.4 2.68-8.6.68-1.25 1.79-2.48 3.43-3.86 1.38-1.15 9.43-6.8 11.8-8.72 1.71-1.4 3.26-2.81 4.7-4.3 2.72-2.85 4.56-5.54 10.36-14.67a156.9 156.9 0 0 1 6.1-9.15c3.2-4.33 5.9-7.01 8.37-8.07 3.5-1.5 7.06-2.77 11.1-4.02a233.84 233.84 0 0 1 7.6-2.2l2.38-.67c6.19-1.79 9.81-3.16 12.98-5.15 2.14-1.33 5.08-2.33 10.27-3.65l6.14-1.53c2.5-.63 4.55-1.2 6.52-1.82 7.24-2.27 12.79-5.06 17.15-9.05 4.05-3.72 9-6.2 18.66-9.9l4.75-1.82c1.87-.72 3.39-1.31 4.85-1.91 10.1-4.15 17.07-8.32 22.76-14.4 6.05-6.45 13.95-12.4 24.49-18.92 1.56-.96 7.82-4.6 14.15-8.33v-64.58c-4 8.15-8.52 14.85-12.7 17.9-2.51 1.82-5.38 4.02-9.04 6.92a1063.87 1063.87 0 0 0-6.23 4.98l-1.27 1.02a2309.25 2309.25 0 0 1-4.87 3.9c-7.55 6-12.9 10.05-17.61 13.19-3.1 2.06-3.86 2.78-8.06 7.13-5.84 6.07-11.72 8.62-29.15 10.95-11.3 1.5-20.04 4.91-30.75 11.07-1.65.94-7.27 4.27-6.97 4.1-2.7 1.58-4.69 2.69-6.64 3.66-5.63 2.8-10.47 4.17-15.71 4.17-17.13 0-41.44 11.51-51.63 22.83-12.05 13.4-31.42 27.7-45.25 31.16-7.4 1.85-11.85 7.05-14.04 14.69-1.26 4.4-1.58 8.28-1.58 13.82 0 .82.01.98.24 3.63.45 5.18.35 8.72-.77 13.26-1.53 6.2-4.89 12.6-10.59 19.43-13.87 16.65-22.88 46.58-22.88 71.68 0 2.39.02 4.26.06 8.75.12 10.8.1 15.8-.22 21.95-.56 11.18-2.09 20.73-5 29.3h-1.05c2.94-8.56 4.49-18.12 5.05-29.35.31-6.13.34-11.1.22-21.9-.04-4.48-.06-6.36-.06-8.75 0-25.32 9.07-55.47 23.12-72.32 5.6-6.72 8.88-12.99 10.38-19.03 1.09-4.4 1.18-7.85.74-12.93-.23-2.7-.24-2.86-.24-3.72 0-5.62.32-9.57 1.62-14.1 2.28-7.95 6.97-13.44 14.76-15.39 13.6-3.4 32.82-17.59 44.75-30.84C409 360.14 433.58 348.5 451 348.5c5.07 0 9.77-1.33 15.26-4.07 1.93-.96 3.9-2.05 6.58-3.62-.3.18 5.33-3.16 6.98-4.11 10.82-6.21 19.66-9.67 31.11-11.2 17.23-2.3 22.9-4.75 28.57-10.64 4.25-4.41 5.04-5.16 8.22-7.28 4.68-3.11 10.01-7.14 17.55-13.14a1113.33 1113.33 0 0 0 4.86-3.89l1.28-1.02a4668.54 4668.54 0 0 1 6.23-4.98c3.67-2.9 6.55-5.12 9.07-6.95 4.37-3.19 9.16-10.56 13.29-19.4v66.9zm0-116.23c-.62.01-1.27.06-1.95.13-6.13.63-13.83 3.45-21.83 7.45-3.64 1.82-8.46 2.67-14.17 2.71-4.7.04-9.72-.47-14.73-1.33-1.7-.3-3.26-.61-4.67-.93a31.55 31.55 0 0 0-3.55-.57 273.4 273.4 0 0 0-16.66-.88c-10.42-.16-17.2.74-17.97 2.73-.38.97.6 2.55 3.03 4.87 1.01.97 2.22 2.03 4.04 3.55a1746.07 1746.07 0 0 0 4.79 4.02c1.39 1.2 3.1 1.92 5.5 2.5.7.16.86.2 2.64.54 3.53.7 5.03 1.25 6.15 2.63 1.41 1.76 1.4 4.54-.15 8.88-2.44 6.83-5.72 10.05-10.19 10.33-3.63.23-7.6-1.29-14.52-5.06-4.53-2.47-6.82-7.3-8.32-15.26-.17-.87-.32-1.78-.5-2.86l-.43-2.76c-1.05-6.58-1.9-9.2-3.73-10.11-.81-.4-1.59-.74-2.36-1-2.27-.77-4.6-1.02-8.1-.92-2.29.07-14.7 1-13.77.93-20.55 1.37-28.8 5.05-37.09 14.99a133.07 133.07 0 0 0-4.25 5.44l-2.3 3.09-2.51 3.32c-4.1 5.36-7.06 8.48-10.39 11.12-.65.52-1.33 1.04-2.13 1.62l-4.11 2.94a106.8 106.8 0 0 0-5.16 3.99c-4.55 3.74-9.74 8.6-16.25 15.38-8.25 8.58-11.78 13.54-11.7 15.95.07 1.65 1.64 2.11 6.79 2.38 1.61.09 2.15.12 2.98.2 2.95.24 5.09.73 6.81 1.68 7.48 4.15 11.63 7.26 13.95 11.58 3.3 6.15.8 12.88-8.89 20.26-8.28 6.3-11.1 10.37-11.31 14.96-.06 1.17 0 1.93.26 4.43.69 6.47.25 10.65-2.8 17.42a44.23 44.23 0 0 1-4.16 7.53c-2.82 3.97-5.47 5.74-10.6 7.69-.43.16-3.34 1.23-4.27 1.59-1.8.68-3.38 1.36-5.01 2.14-4.18 2-8.4 4.6-13.1 8.24-8.44 6.51-13.23 14.56-15.98 25.06-1.1 4.2-1.55 6.81-2.8 15.21-1.26 8.6-2.17 12.64-4.08 16.55-2.1 4.28-11.93 26.59-12.97 28.88a382.7 382.7 0 0 1-6.37 13.41c-4.07 8.11-7.61 14.07-10.73 17.81-5.38 6.46-8.98 14.37-13.77 28.42a810.14 810.14 0 0 0-1.89 5.6c-1.8 5.35-2.96 8.6-4.26 11.85-6.13 15.32-25.43 26.31-46.46 26.31-11.2 0-20.58-2.74-31.02-8.55-5.6-3.13-4.55-2.42-22.26-14.54-14.33-9.8-17.7-10.73-20.47-6.9-.37.5-1.81 2.74-1.83 2.77a52.24 52.24 0 0 1-4.94 5.9c-.73.79-5.52 5.87-6.97 7.45-2.38 2.6-4.3 4.81-5.98 6.93a45.6 45.6 0 0 0-5.08 7.66c-1.29 2.57-1.9 5.25-2.66 10.6a997.6 997.6 0 0 1-.46 3.18h-1l.47-3.32c.77-5.45 1.4-8.2 2.75-10.9a46.54 46.54 0 0 1 5.2-7.84c1.7-2.14 3.63-4.38 6.03-6.98 1.45-1.59 6.24-6.68 6.96-7.46a51.58 51.58 0 0 0 4.84-5.78s1.47-2.26 1.86-2.8c3.25-4.5 7.08-3.44 21.84 6.67 17.67 12.08 16.62 11.38 22.19 14.48 10.3 5.73 19.5 8.43 30.53 8.43 20.65 0 39.57-10.77 45.54-25.69a219.7 219.7 0 0 0 4.24-11.8 6752.32 6752.32 0 0 0 1.88-5.6c4.83-14.16 8.47-22.14 13.96-28.73 3.05-3.66 6.56-9.57 10.6-17.61 1.97-3.93 4.04-8.31 6.35-13.38 1.03-2.28 10.88-24.61 12.98-28.91 1.85-3.79 2.75-7.76 4-16.25 1.24-8.44 1.7-11.07 2.81-15.32 2.8-10.7 7.71-18.94 16.33-25.6a73.18 73.18 0 0 1 13.29-8.35c1.66-.8 3.27-1.48 5.08-2.18.94-.36 3.86-1.43 4.28-1.59 4.95-1.88 7.44-3.55 10.14-7.33 1.35-1.9 2.68-4.3 4.06-7.37 2.97-6.58 3.39-10.59 2.72-16.9a27.13 27.13 0 0 1-.27-4.58c.22-4.94 3.21-9.24 11.7-15.7 9.33-7.11 11.66-13.34 8.62-19-2.2-4.09-6.25-7.12-13.55-11.17-1.57-.88-3.6-1.33-6.42-1.57-.8-.07-1.34-.1-2.95-.19-5.77-.3-7.63-.85-7.72-3.34-.1-2.81 3.5-7.87 11.97-16.69 6.53-6.8 11.75-11.69 16.33-15.45 1.79-1.47 3.42-2.72 5.2-4.03l4.12-2.94c.79-.58 1.46-1.08 2.1-1.59 3.26-2.6 6.16-5.65 10.21-10.94a383.2 383.2 0 0 0 2.5-3.32l2.31-3.09c1.8-2.39 3.04-4 4.29-5.48 8.47-10.17 16.98-13.96 37.27-15.3-.44.02 12-.9 14.32-.98 3.62-.1 6.05.16 8.46.98.8.27 1.62.62 2.47 1.04 2.27 1.14 3.17 3.87 4.27 10.85l.44 2.76c.17 1.07.33 1.97.5 2.83 1.44 7.69 3.62 12.29 7.8 14.57 6.76 3.68 10.6 5.15 13.99 4.94 4-.25 6.99-3.17 9.3-9.67 1.45-4.04 1.46-6.49.32-7.92-.9-1.12-2.28-1.62-5.57-2.27a55.8 55.8 0 0 1-2.67-.55c-2.54-.6-4.39-1.4-5.93-2.71a252.63 252.63 0 0 0-4.78-4.01 84.35 84.35 0 0 1-4.08-3.6c-2.73-2.6-3.86-4.43-3.28-5.95 1.02-2.64 7.82-3.54 18.93-3.37a230.56 230.56 0 0 1 16.73.88c2.76.39 3.2.49 3.68.6 1.4.3 2.95.62 4.62.91a82.9 82.9 0 0 0 14.56 1.32c5.56-.04 10.24-.86 13.73-2.6 8.1-4.05 15.89-6.9 22.17-7.56.7-.07 1.4-.11 2.05-.13z')`
    }} />
);

  return (
    <div className="bg-[#FFF8F0] overflow-hidden">

      {/* ── Hero — Dark with map ── */}
      <section className="relative bg-[#0A0A0A] pt-28 pb-32 sm:pt-32 sm:pb-40 overflow-hidden min-h-[85vh] flex items-center">
        {/* Topography texture background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23981F1F' stroke-width='1'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.08
        }} />
        {/* Warm orbs */}
        <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#981F1F]/15 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] rounded-full bg-[#FDB813]/10 blur-[120px]" />

        {/* Village silhouette at bottom */}
        <svg className="absolute bottom-0 left-0 right-0 w-full h-24 sm:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 L0,90 L60,90 L60,70 L80,50 L100,70 L100,90 L180,90 L180,75 L200,60 L220,75 L220,90 L320,90 L320,65 L330,40 L340,65 L340,90 L400,90 L400,80 L410,55 L420,80 L420,90 L520,90 L520,70 L540,45 L560,70 L560,90 L650,90 L650,85 L660,60 L670,85 L670,90 L780,90 L780,75 L790,50 L800,75 L800,90 L900,90 L900,65 L915,35 L930,65 L930,90 L1020,90 L1020,80 L1035,55 L1050,80 L1050,90 L1140,90 L1140,70 L1155,48 L1170,70 L1170,90 L1280,90 L1280,85 L1290,60 L1300,85 L1300,90 L1380,90 L1380,72 L1395,50 L1410,72 L1410,90 L1440,90 L1440,120Z" fill="#121212" opacity="0.6" />
          <path d="M0,120 L0,100 L100,100 L100,88 L120,75 L140,88 L140,100 L260,100 L260,92 L275,78 L290,92 L290,100 L420,100 L420,85 L435,68 L450,85 L450,100 L580,100 L580,95 L600,80 L620,95 L620,100 L760,100 L760,90 L775,72 L790,90 L790,100 L920,100 L920,88 L940,75 L960,88 L960,100 L1100,100 L1100,92 L1115,78 L1130,92 L1130,100 L1260,100 L1260,95 L1280,82 L1300,95 L1300,100 L1440,100 L1440,120Z" fill="#0A0A0A" />
        </svg>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Centered hero text */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 bg-[#FDB813]/10 text-[#FDB813] text-sm font-bold px-5 py-2 rounded-full uppercase tracking-wider mb-8 border border-[#FDB813]/20 backdrop-blur-sm">
                <MapPin size={14} /> {lang === 'hi' ? '200 गाँव मिशन' : '200 Gaon Mission'}
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-6">
              {lang === 'hi' ? 'हर गाँव को' : 'Every Village'}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] via-orange-400 to-[#981F1F]">
                {lang === 'hi' ? 'मौक़ा मिलेगा।' : 'Deserves a Chance.'}
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              {lang === 'hi'
                ? 'एक शिक्षक जो ख़ुद 200 गाँवों में जा रहा है — ताकि किसी बच्चे को पढ़ाई के लिए शहर न जाना पड़े। सब कुछ सिर्फ़ ₹100/महीना में।'
                : 'One teacher. 200 villages. A promise that no child should have to leave home to get a world-class education. All for just ₹100/month.'}
            </motion.p>

            {/* Stats bar */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-10">
              {[
                { val: '200', label: lang === 'hi' ? 'गाँव' : 'Villages' },
                { val: '₹100', label: lang === 'hi' ? '/महीना' : '/Month' },
                { val: '7', label: lang === 'hi' ? 'क्लास' : 'Classes' },
                { val: '5000+', label: lang === 'hi' ? 'छात्र' : 'Students' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-[#FDB813] font-extrabold text-2xl sm:text-3xl">{s.val}</div>
                  <div className="text-white/30 text-xs font-semibold uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-wrap justify-center gap-4">
              <Link to="/#test-series" className="inline-flex bg-gradient-to-r from-[#981F1F] to-[#7A1818] text-white font-bold px-8 py-4 rounded-xl items-center gap-2 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5 text-sm sm:text-base">
                {lang === 'hi' ? 'अभी जुड़ें' : 'Join the Mission'} <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                className="inline-flex bg-white/5 border border-white/15 text-white/80 font-semibold px-8 py-4 rounded-xl items-center gap-2 transition-all hover:bg-white/10 text-sm sm:text-base backdrop-blur-sm">
                <Phone size={16} /> WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vipin Sir — Sticky photo left + scrolling timeline right ── */}
      <VipinSirSection lang={lang} />

      {/* ── Problem vs Solution — Torn paper pinboard style ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <MapBg />
        {/* Warm background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0] via-[#FBF3E4] to-[#FFF8F0]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-[#981F1F]/10 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
                {lang === 'hi' ? 'फ़र्क़ समझो' : 'See the Difference'}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2A1810] leading-tight">
                {lang === 'hi' ? 'स्कूल vs' : 'Schools vs'} <span className="text-[#981F1F]">{lang === 'hi' ? 'Junior IAS' : 'Junior IAS'}</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 relative">
            {/* Red thread connecting the two sides */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 800 500">
              <path d="M380,80 Q400,250 380,420" stroke="#C41E1E" strokeWidth="1.5" fill="none" opacity="0.25" strokeDasharray="6 4" />
              <circle cx="400" cy="250" r="4" fill="#C41E1E" opacity="0.3" />
            </svg>

            {/* Left — What Schools Do (torn paper note) */}
            <motion.div initial={{ opacity: 0, x: -30, rotate: -1 }} whileInView={{ opacity: 1, x: 0, rotate: -1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative bg-[#F5ECD7] rounded-sm p-7 sm:p-9 shadow-xl" style={{ clipPath: 'polygon(0% 0%, 100% 0.5%, 99.5% 100%, 0.5% 99.5%)' }}>
              {/* Red pin */}

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <X size={22} className="text-red-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2A1810]">
                  {lang === 'hi' ? 'स्कूल क्या करते हैं?' : 'What Schools Do'}
                </h3>
              </div>
              <div className="space-y-3.5">
                {(lang === 'hi'
                  ? ['सिर्फ़ PCM रटवाते हैं — बोर्ड पास करने के लिए', 'General Studies को पूरी तरह ignore करते हैं', '12वीं के बाद बच्चा competitive exams में lost', 'दिल्ली/प्रयागराज जाकर लाखों खर्च कर NCERT फिर पढ़ो']
                  : ['Force students to cram PCM just for boards', 'Completely ignore General Studies', 'After 12th, students are lost in competitive exams', 'Migrate to Delhi, spend lakhs relearning NCERT']
                ).map((point, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-200 flex items-center justify-center mt-0.5">
                      <X size={10} className="text-red-600" />
                    </div>
                    <p className="text-[#5A4A3A] text-sm sm:text-base leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
              {/* Paper texture line */}
              <div className="absolute bottom-3 left-6 right-6 h-px bg-[#D4C5A9]/40" />
            </motion.div>

            {/* Right — What Junior IAS Does (torn paper note) */}
            <motion.div initial={{ opacity: 0, x: 30, rotate: 1.5 }} whileInView={{ opacity: 1, x: 0, rotate: 1.5 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative bg-[#F5ECD7] rounded-sm p-7 sm:p-9 shadow-xl" style={{ clipPath: 'polygon(0.5% 0.5%, 99.5% 0%, 100% 99.5%, 0% 100%)' }}>
              <div className="absolute top-0.5 right-[37px] w-1 h-4 bg-red-800/50" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Check size={22} className="text-green-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2A1810]">
                  {lang === 'hi' ? 'Junior IAS क्या करता है?' : 'What Junior IAS Does'}
                </h3>
              </div>
              <div className="space-y-3.5">
                {(lang === 'hi'
                  ? ['क्लास 6 से NCERT-based GS की नींव', 'विपिन सर की किताब + 365 टेस्ट + लाइव क्लास', 'सिर्फ़ ₹100/महीना — कोई छुपा शुल्क नहीं', 'दिल्ली जाने की ज़रूरत ही नहीं पड़ेगी']
                  : ['Build NCERT-based GS foundation from Class 6', 'Junior IAS Book + 365 Tests + Live Classes', 'Just ₹100/month — no hidden charges', 'No need to migrate to Delhi for coaching']
                ).map((point, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5">
                      <Check size={10} className="text-green-700" />
                    </div>
                    <p className="text-[#5A4A3A] text-sm sm:text-base leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-3 left-6 right-6 h-px bg-[#D4C5A9]/40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Three Pillars — Pinboard cards with red pins ── */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF3E4] to-[#FFF8F0]" />
        <MapBg />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-[#981F1F]/10 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
                {lang === 'hi' ? 'कैसे काम करता है' : 'How It Works'}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2A1810] leading-tight">
                {lang === 'hi' ? 'तीन स्तंभ,' : 'Three Pillars,'} <span className="text-[#981F1F]">{lang === 'hi' ? 'एक मिशन' : 'One Mission'}</span>
              </h2>
            </motion.div>
          </div>

          {/* Red thread connecting all 3 cards */}
          <div className="relative">
            <svg className="absolute top-1/2 left-0 right-0 w-full h-8 -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 1000 40">
              <path d="M100,20 C250,5 350,35 500,20 C650,5 750,35 900,20" stroke="#C41E1E" strokeWidth="1.5" fill="none" opacity="0.25" />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: '📕', title: lang === 'hi' ? 'जूनियर IAS किताब' : 'Junior IAS Book', desc: lang === 'hi' ? 'विपिन सर द्वारा लिखी NCERT-based किताब। इतिहास, भूगोल, संविधान, विज्ञान और GK — सब एक किताब में।' : 'Written by Vipin Sir. NCERT-based — History, Geography, Constitution, Science & GK, all in one book.', stat: lang === 'hi' ? '200+ पेज' : '200+ Pages', rot: '-1.5deg' },
                { icon: '🎥', title: lang === 'hi' ? 'लाइव क्लास + टेस्ट' : 'Live Classes + Tests', desc: lang === 'hi' ? 'रोज़ लाइव क्लास। हर हफ़्ते ऑफलाइन टेस्ट। रोज़ ऑनलाइन प्रैक्टिस। पूरा ecosystem एक जगह।' : 'Daily live classes. Weekly offline tests. Daily online practice. The complete ecosystem in one place.', stat: lang === 'hi' ? '365 दिन' : '365 Days', rot: '1deg' },
                { icon: '💰', title: lang === 'hi' ? 'सिर्फ़ ₹100/महीना' : 'Just ₹100/Month', desc: lang === 'hi' ? 'दिल्ली के कोचिंग लाखों लेते हैं। हम सब कुछ देते हैं ₹100/महीना में। कोई भी परिवार बाहर नहीं।' : 'Delhi coaching charges lakhs. We give everything for ₹100/month. No family is priced out.', stat: '₹1,200/yr', rot: '-0.5deg' },
              ].map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  whileHover={{ scale: 1.03, rotate: '0deg' }}
                  style={{ rotate: card.rot }}
                  className="group relative bg-[#F5ECD7] rounded-sm p-7 sm:p-9 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D4C5A9]/30">
                  {/* Red push pin icon - custom SVG for better visibility */}
                  <svg
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 drop-shadow-md"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ transform: 'translateX(-50%) rotate(-15deg)' }}
                  >
                    <circle cx="12" cy="8" r="5" fill="#C41E1E" stroke="#8B1515" strokeWidth="1.5"/>
                    <path d="M12 13L12 21" stroke="#8B1515" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="8" r="2.5" fill="#E63939"/>
                  </svg>

                  <div className="text-3xl mb-4 mt-2">{card.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#2A1810] mb-3">{card.title}</h3>
                  <p className="text-[#5A4A3A] text-sm sm:text-base leading-relaxed mb-5">{card.desc}</p>
                  <span className="inline-block bg-[#981F1F] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {card.stat}
                  </span>
                  {/* Paper ruled lines */}
                  <div className="absolute bottom-12 left-6 right-6 h-px bg-[#D4C5A9]/30" />
                  <div className="absolute bottom-8 left-6 right-6 h-px bg-[#D4C5A9]/20" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Journey — Pinboard with red thread timeline ── */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0] via-[#F8EDD8] to-[#FFF8F0]" />
        <MapBg />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-[#981F1F]/10 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
                {lang === 'hi' ? 'एक सफ़र' : 'The Journey'}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2A1810] leading-tight">
                {lang === 'hi' ? 'सड़क जो' : 'The Road That'} <span className="text-[#981F1F]">{lang === 'hi' ? 'यहाँ तक लाई' : 'Led Here'}</span>
              </h2>
              <p className="text-[#5A4A3A] mt-3 text-base max-w-lg mx-auto">
                {lang === 'hi' ? 'BSF इंजीनियर से 200 गाँवों के मिशन तक — हर मोड़ पर एक कहानी।' : 'From BSF engineer to a 200-village mission — a story at every turn.'}
              </p>
            </motion.div>
          </div>

          {/* Timeline with red thread and pinned notes */}
          <div className="relative">
            {/* Red thread center line — desktop */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 hidden sm:block">
              <svg className="w-4 h-full" viewBox="0 0 10 1000" preserveAspectRatio="none">
                <path d="M5,0 Q8,100 3,200 Q-1,300 7,400 Q10,500 4,600 Q0,700 6,800 Q9,900 5,1000" stroke="#C41E1E" strokeWidth="1.5" fill="none" opacity="0.35" />
              </svg>
            </div>

            {/* Mobile: simple red thread left */}
            <div className="absolute left-6 top-0 bottom-0 sm:hidden">
              <svg className="w-2 h-full" viewBox="0 0 4 1000" preserveAspectRatio="none">
                <path d="M2,0 Q4,100 1,200 Q-1,300 3,400 Q5,500 2,600 Q0,700 3,800 Q4,900 2,1000" stroke="#C41E1E" strokeWidth="1.5" fill="none" opacity="0.3" />
              </svg>
            </div>

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-14 last:mb-0"
              >
                {/* Desktop: alternating torn-paper notes */}
                <div className={`hidden sm:flex w-full items-center ${m.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-[44%] ${m.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                    <div
                      className="relative bg-[#F5ECD7] rounded-sm p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#D4C5A9]/30 group"
                      style={{ rotate: m.rotate, clipPath: i % 2 === 0 ? 'polygon(0% 0%, 100% 0.8%, 99.2% 100%, 0.5% 99%)' : 'polygon(0.5% 0.5%, 99.5% 0%, 100% 99.5%, 0% 99.8%)' }}
                    >
                      {/* Red push pin icon - custom SVG for better visibility */}
                      <svg
                        className={`absolute -top-3 ${m.side === 'left' ? 'right-2' : 'left-2'} z-10 drop-shadow-md`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ transform: m.side === 'left' ? 'rotate(15deg)' : 'rotate(-15deg)' }}
                      >
                        <circle cx="12" cy="8" r="5" fill="#C41E1E" stroke="#8B1515" strokeWidth="1.5"/>
                        <path d="M12 13L12 21" stroke="#8B1515" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="12" cy="8" r="2.5" fill="#E63939"/>
                      </svg>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{m.icon}</span>
                        <span className="text-[#981F1F] font-extrabold text-xl">{m.year}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#2A1810] mb-2">{m.title}</h3>
                      <p className="text-[#5A4A3A] text-sm leading-relaxed">{m.desc}</p>
                      {/* Ruled line */}
                      <div className="absolute bottom-3 left-5 right-5 h-px bg-[#D4C5A9]/30" />
                    </div>
                  </div>

                  {/* Center red pin on the thread */}
                  <div className="flex-shrink-0 w-[12%] flex justify-center relative z-10">
                    <div className="w-5 h-5 rounded-full bg-red-600 border-2 border-red-700 shadow-lg" />
                  </div>

                  <div className="w-[44%]" />
                </div>

                {/* Mobile: always left-aligned */}
                <div className="flex sm:hidden items-start gap-4">
                  <div className="flex-shrink-0 relative z-10 mt-2">
                    <div className="w-4 h-4 rounded-full bg-red-600 border-2 border-red-700 shadow-md" />
                  </div>
                  <div className="flex-1 bg-[#F5ECD7] rounded-sm shadow-md p-5 border border-[#D4C5A9]/30" style={{ rotate: m.rotate }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{m.icon}</span>
                      <span className="text-[#981F1F] font-extrabold text-lg">{m.year}</span>
                    </div>
                    <h3 className="text-base font-extrabold text-[#2A1810] mb-1">{m.title}</h3>
                    <p className="text-[#5A4A3A] text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Finish — destination pin */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mt-10"
            >
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F5ECD7] rounded-sm shadow-xl flex items-center justify-center text-3xl sm:text-4xl border border-[#D4C5A9]/30" style={{ rotate: '3deg' }}>
                  🏁
                </div>
                {/* Red push pin icon - custom SVG for better visibility */}
                <svg
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 drop-shadow-md"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ transform: 'translateX(-50%) rotate(-10deg)' }}
                >
                  <circle cx="12" cy="8" r="5" fill="#C41E1E" stroke="#8B1515" strokeWidth="1.5"/>
                  <path d="M12 13L12 21" stroke="#8B1515" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="8" r="2.5" fill="#E63939"/>
                </svg>
              </div>
            </motion.div>
            <p className="text-center text-[#981F1F] font-extrabold text-lg mt-4">
              {lang === 'hi' ? '200 गाँव — मिशन जारी है...' : '200 Villages — Mission Continues...'}
            </p>
          </div>

          {/* Quote — torn paper style */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-16 relative bg-[#F5ECD7] rounded-sm p-6 sm:p-8 shadow-xl border border-[#D4C5A9]/30" style={{ rotate: '-0.5deg', clipPath: 'polygon(0% 0.5%, 100% 0%, 99.5% 100%, 0.5% 99.5%)' }}>
            {/* Two red push pin icons - custom SVG for better visibility */}
            <svg
              className="absolute -top-4 left-8 z-10 drop-shadow-md"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              style={{ transform: 'rotate(-15deg)' }}
            >
              <circle cx="12" cy="8" r="5" fill="#C41E1E" stroke="#8B1515" strokeWidth="1.5"/>
              <path d="M12 13L12 21" stroke="#8B1515" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="8" r="2.5" fill="#E63939"/>
            </svg>
            <svg
              className="absolute -top-4 right-8 z-10 drop-shadow-md"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              style={{ transform: 'rotate(15deg)' }}
            >
              <circle cx="12" cy="8" r="5" fill="#C41E1E" stroke="#8B1515" strokeWidth="1.5"/>
              <path d="M12 13L12 21" stroke="#8B1515" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="8" r="2.5" fill="#E63939"/>
            </svg>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="text-5xl sm:text-6xl">💬</div>
              <blockquote className="text-[#2A1810] text-lg sm:text-xl italic leading-relaxed text-center sm:text-left" style={{ fontFamily: 'Georgia, serif' }}>
                {lang === 'hi'
                  ? '"वो टैलेंट जो दिल्ली नहीं जा सकता — हम उसके पास जा रहे हैं।"'
                  : '"The talent that can\'t go to Delhi — we\'re going to them."'}
                <span className="block text-[#981F1F] text-sm not-italic font-bold mt-2">— Vipin Sir</span>
              </blockquote>
            </div>
            {/* Ruled lines */}
            <div className="absolute bottom-10 left-6 right-6 h-px bg-[#D4C5A9]/25" />
            <div className="absolute bottom-6 left-6 right-6 h-px bg-[#D4C5A9]/15" />
          </motion.div>
        </div>
      </section>

      {/* ── CTA — gradient with map overlay ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#981F1F] via-[#7A1818] to-[#121212]" />
        <MapBg dark />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {/* Removed India flag */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {lang === 'hi' ? 'मिशन में जुड़ें' : 'Join the Mission'}
            </h2>
            <p className="text-white/70 text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
              {lang === 'hi'
                ? 'आज ही अपने बच्चे की UPSC नींव शुरू करें — क्लास 6 से। सिर्फ़ ₹100/महीना।'
                : 'Start Your Child\'s UPSC Foundation Today — from Class 6 Itself. Just ₹100/month.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#test-series" className="inline-flex bg-white text-[#981F1F] font-bold px-8 py-4 sm:px-10 sm:py-5 rounded-xl items-center gap-3 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 text-base sm:text-lg">
                {lang === 'hi' ? 'टेस्ट सीरीज़ देखें' : 'Explore Test Series'} <ArrowRight size={20} />
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                className="inline-flex bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 sm:px-10 sm:py-5 rounded-xl items-center gap-3 transition-all hover:bg-white/20 text-base sm:text-lg">
                <Phone size={18} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function WhyUs() {
  const { lang } = useLang();
  const features = [
    { icon: FileText, title: T[lang].feature1Title, desc: T[lang].feature1Desc },
    { icon: BarChart2, title: T[lang].feature2Title, desc: T[lang].feature2Desc },
    { icon: Shield, title: T[lang].feature3Title, desc: T[lang].feature3Desc },
  ];
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FAFAFA] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#981F1F]/[0.03] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#FDB813]/[0.04] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
            <Zap size={12} /> {T[lang].whyBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121212]">{T[lang].whyHeading} <span className="text-[#981F1F]">{T[lang].whyHeadingHighlight}</span></h2>
          <p className="text-[#555] mt-3 max-w-xl mx-auto text-sm sm:text-base">{T[lang].whyDesc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6 sm:p-8 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFF1F1] rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#981F1F] transition-colors">
                  <Icon size={24} className="text-[#981F1F] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[#121212] font-bold text-lg sm:text-xl mb-2 sm:mb-3">{f.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="mt-8 sm:mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: CheckCircle, label: T[lang].trustBadge1 },
              { icon: Layers, label: T[lang].trustBadge2 },
              { icon: Zap, label: T[lang].trustBadge3 },
              { icon: Users, label: T[lang].trustBadge4 },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#FFF1F1] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#981F1F]" />
                  </div>
                  <span className="text-[#333] text-xs sm:text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Video testimonials — replace src with actual video URLs later
const VIDEO_TESTIMONIALS = [
  { id: 1, name: 'Rohit Kumar', tag: 'UP Police Selected', thumbnail: '/videos/thumb1.jpg', src: '' },
  { id: 2, name: 'Priya Sharma', tag: 'Super TET Selected', thumbnail: '/videos/thumb2.jpg', src: '' },
  { id: 3, name: 'Arun Singh', tag: 'NDA Cleared 2025', thumbnail: '/videos/thumb3.jpg', src: '' },
  { id: 4, name: 'Kavita Devi', tag: 'Parent — Noorpur', thumbnail: '/videos/thumb4.jpg', src: '' },
];

// Photos of Vipin Sir with selected students — add to public/gallery/
const GALLERY_PHOTOS = [
  '/gallery/sir-1.jpg',
  '/gallery/sir-2.jpg',
  '/gallery/sir-3.jpg',
  '/gallery/sir-4.jpg',
];

function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeText, setActiveText] = useState(0);
  const { lang } = useLang();

  // Auto-rotate text testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveText(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate video testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVideo(prev => (prev + 1) % VIDEO_TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-12 sm:py-20 lg:py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-[#981F1F]/[0.03] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[280px] h-[280px] rounded-full bg-[#FDB813]/[0.04] translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-14">
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-wider mb-3 sm:mb-4 border border-[#981F1F]/20">
            <Star size={12} /> {T[lang].testiBadge}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] leading-tight mb-3 sm:mb-4">
            {T[lang].testiHeading} <span className="text-[#981F1F]">{T[lang].testiHeadingHighlight}</span>
          </h2>
          <p className="text-[#555] text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
            {T[lang].testiDesc}
          </p>
        </motion.div>

        {/* ═══ MOBILE LAYOUT (< md): Reel video + text+gallery stacked ═══ */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {/* Left: Video Reel (9:16) */}
          <div className="relative w-full aspect-[9/16] bg-[#121212] rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <button onClick={() => setActiveVideo(prev => (prev - 1 + VIDEO_TESTIMONIALS.length) % VIDEO_TESTIMONIALS.length)}
              className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all">
              <ChevronLeft size={16} className="text-white" />
            </button>
            <button onClick={() => setActiveVideo(prev => (prev + 1) % VIDEO_TESTIMONIALS.length)}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all">
              <ChevronRight size={16} className="text-white" />
            </button>
            {VIDEO_TESTIMONIALS[activeVideo].src ? (
              <video key={activeVideo} src={VIDEO_TESTIMONIALS[activeVideo].src} className="w-full h-full object-cover" controls autoPlay muted />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#121212] to-[#2a2a2a] px-2">
                <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mb-2 cursor-pointer">
                  <Play size={20} className="text-white ml-0.5" />
                </div>
                <p className="text-white font-bold text-xs text-center">{VIDEO_TESTIMONIALS[activeVideo].name}</p>
                <p className="text-[#FDB813] text-[10px] font-semibold">{VIDEO_TESTIMONIALS[activeVideo].tag}</p>
                <p className="text-white/40 text-[10px] mt-2">{T[lang].videoComingSoon}</p>
              </div>
            )}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
              {VIDEO_TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActiveVideo(i)}
                  className={`rounded-full transition-all ${activeVideo === i ? 'w-3 h-1 bg-white' : 'w-1 h-1 bg-white/50'}`} />
              ))}
            </div>
          </div>

          {/* Right: Text testimonial + Gallery stacked to match reel height */}
          <div className="flex flex-col gap-2" style={{ aspectRatio: '9/16' }}>
            {/* Text testimonial — compact */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div key={activeText} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl border border-[#981F1F]/10 shadow-md relative overflow-hidden p-3">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#981F1F] via-[#FDB813] to-[#981F1F]" />
                  <div className="text-[#981F1F]/10 text-xl font-serif leading-none">"</div>
                  <blockquote className="text-[10px] text-[#333] leading-snug italic line-clamp-3">{TESTIMONIALS[activeText].text}</blockquote>
                  <div className="flex items-center gap-1.5 pt-1.5 mt-1.5 border-t border-gray-100">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#FFF1F1] text-[#981F1F] font-bold text-[8px] shrink-0">{TESTIMONIALS[activeText].avatar}</div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-[#121212] text-[9px] truncate">{TESTIMONIALS[activeText].name}</p>
                      <p className="text-[8px] font-semibold text-[#FDB813] truncate">{TESTIMONIALS[activeText].tag}</p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-1 mt-1.5">
                    {TESTIMONIALS.map((_, i) => (
                      <button key={i} onClick={() => setActiveText(i)}
                        className={`rounded-full transition-all ${activeText === i ? 'w-3 h-1 bg-[#981F1F]' : 'w-1 h-1 bg-[#981F1F]/30'}`} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Vipin Sir Photos — fills remaining space */}
            <div className="flex-1 min-h-0">
              <GalleryCard />
            </div>
          </div>
        </div>

        {/* ═══ DESKTOP LAYOUT (md+): Reel video + text testimonial + gallery ═══ */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-start">
          {/* Left: Video Reel (9:16, constrained width) */}
          <div className="w-[280px] lg:w-[320px] flex-shrink-0">
            <div className="relative w-full aspect-[9/16] bg-[#121212] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <button onClick={() => setActiveVideo(prev => (prev - 1 + VIDEO_TESTIMONIALS.length) % VIDEO_TESTIMONIALS.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all">
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button onClick={() => setActiveVideo(prev => (prev + 1) % VIDEO_TESTIMONIALS.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all">
                <ChevronRight size={20} className="text-white" />
              </button>
              {VIDEO_TESTIMONIALS[activeVideo].src ? (
                <video key={activeVideo} src={VIDEO_TESTIMONIALS[activeVideo].src} className="w-full h-full object-cover" controls autoPlay muted />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#121212] to-[#2a2a2a]">
                  <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mb-4 hover:bg-white/20 transition-colors cursor-pointer">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-white font-bold text-lg">{VIDEO_TESTIMONIALS[activeVideo].name}</p>
                  <p className="text-[#FDB813] text-sm font-semibold">{VIDEO_TESTIMONIALS[activeVideo].tag}</p>
                  <p className="text-white/40 text-xs mt-3">{T[lang].videoComingSoon}</p>
                </div>
              )}
              {/* Reel dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                {VIDEO_TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setActiveVideo(i)}
                    className={`rounded-full transition-all ${activeVideo === i ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Vipin Sir Photos (top) + Testimonial Slider (bottom) */}
          <div className="flex-1 flex flex-col gap-4" style={{ height: 'calc(320px * 16 / 9)' }}>
            {/* Vipin Sir Gallery — top half */}
            <div className="flex-1 min-h-0">
              <GalleryCard />
            </div>

            {/* Testimonial Slider — bottom half, draggable horizontal scroll */}
            <TestimonialSlider />
          </div>
        </div>


      </div>
    </section>
  );
}

function TestimonialSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll — pauses on hover/drag
  useEffect(() => {
    if (!autoScroll || !scrollRef.current) return;
    const el = scrollRef.current;
    const t = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 1, behavior: 'auto' });
      }
    }, 30);
    return () => clearInterval(t);
  }, [autoScroll]);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoScroll(false);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollRef.current!.scrollLeft = scrollLeft - (x - startX);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setAutoScroll(true), 3000);
  };

  return (
    <div className="relative">
      {/* Left/Right buttons */}
      <button onClick={() => { scroll('left'); setAutoScroll(false); setTimeout(() => setAutoScroll(true), 3000); }}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white shadow-md rounded-full flex items-center justify-center border border-gray-200 transition-all">
        <ChevronLeft size={16} className="text-[#981F1F]" />
      </button>
      <button onClick={() => { scroll('right'); setAutoScroll(false); setTimeout(() => setAutoScroll(true), 3000); }}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white shadow-md rounded-full flex items-center justify-center border border-gray-200 transition-all">
        <ChevronRight size={16} className="text-[#981F1F]" />
      </button>

      {/* Scrollable container with equal padding */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="flex gap-4 overflow-x-auto scrollbar-hide items-stretch px-10 cursor-grab active:cursor-grabbing py-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="flex-shrink-0 w-[280px] lg:w-[320px] bg-white rounded-xl border border-[#981F1F]/10 shadow-sm p-5 flex flex-col justify-between select-none">
            <div>
              <div className="text-[#981F1F]/15 text-3xl font-serif leading-none mb-1">"</div>
              <p className="text-sm text-[#333] leading-relaxed italic line-clamp-4 -mt-1">{t.text}</p>
            </div>
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFF1F1] text-[#981F1F] font-bold text-sm shrink-0">{t.avatar}</div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-[#121212] text-sm truncate">{t.name}</p>
                <p className="text-xs font-semibold text-[#FDB813] truncate">{t.tag}</p>
              </div>
              <div className="flex gap-0.5 shrink-0">
                {[...Array(t.stars)].map((_, idx) => (
                  <Star key={idx} size={12} className="fill-[#FDB813] text-[#FDB813]" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryCard() {
  const { lang } = useLang();
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto(prev => (prev + 1) % GALLERY_PHOTOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative h-full min-h-[120px] sm:min-h-[200px] bg-gray-200"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={activePhoto}
          src={GALLERY_PHOTOS[activePhoto]}
          alt="Vipin Sir with selected students"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover absolute inset-0"
        />
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <div className="absolute bottom-4 left-5 z-20">
        <p className="text-white font-bold text-sm">{T[lang].galleryTitle}</p>
        <p className="text-white/70 text-xs">{T[lang].gallerySubtitle}</p>
      </div>
      <div className="absolute bottom-4 right-5 flex gap-1.5 z-20">
        {GALLERY_PHOTOS.map((_, i) => (
          <button key={i} onClick={() => setActivePhoto(i)}
            className={`rounded-full transition-all ${activePhoto === i ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

function Stats() {
  const { lang } = useLang();
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        STATS.forEach((s, i) => {
          const duration = 1800;
          const step = Math.ceil(s.value / (duration / 16));
          let cur = 0;
          const t = setInterval(() => {
            cur = Math.min(cur + step, s.value);
            setCounts(prev => { const n = [...prev]; n[i] = cur; return n; });
            if (cur >= s.value) clearInterval(t);
          }, 16);
        });
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#981F1F]/[0.02] -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#FDB813]/[0.03] translate-y-1/2 -translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121212]">{T[lang].statsHeading} <span className="text-[#981F1F]">{T[lang].statsHeadingHighlight}</span></h2>
          <p className="text-[#555] mt-2">{T[lang].statsDesc}</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {STATS.map((s, i) => {
            const statLabels = [T[lang].stat1Label, T[lang].stat2Label, T[lang].stat3Label, T[lang].stat4Label];
            return (
              <div key={i} className="text-center bg-gray-50/50 p-4 sm:p-0 rounded-2xl sm:bg-transparent">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#981F1F]">{counts[i].toLocaleString()}{s.suffix}</div>
                <div className="mt-2 text-xs sm:text-sm text-[#555] font-medium">{statLabels[i]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EnrollCTA() {
  const { lang } = useLang();
  return (
    <section className="py-20 bg-[#981F1F] relative overflow-hidden">
      {/* Topography pattern background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23701616' stroke-width='1'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.15
      }} />
      {/* Decorative bubbles/circles */}
      <div className="absolute top-10 left-[10%] w-32 h-32 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute top-1/4 right-[15%] w-40 h-40 rounded-full bg-white/[0.03] blur-3xl" />
      <div className="absolute bottom-10 left-[20%] w-24 h-24 rounded-full bg-[#FDB813]/10 blur-2xl" />
      <div className="absolute bottom-1/4 right-[25%] w-36 h-36 rounded-full bg-white/[0.04] blur-3xl" />
      <div className="absolute top-1/2 left-[5%] w-20 h-20 rounded-full bg-white/[0.06]" />
      <div className="absolute top-[20%] right-[8%] w-16 h-16 rounded-full bg-[#FDB813]/[0.08]" />
      <div className="absolute bottom-[15%] right-[12%] w-28 h-28 rounded-full bg-white/[0.04]" />

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.span animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="inline-block bg-[#FDB813] text-[#121212] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
          {T[lang].ctaBadge}
        </motion.span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">
          {T[lang].ctaHeading1}<br />{T[lang].ctaHeading2}
        </h2>
        <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
          {T[lang].ctaDesc}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#FDB813] text-[#121212] font-bold px-8 py-4 rounded-xl hover:bg-[#e5a810] transition-colors flex items-center gap-2 text-lg">
            {T[lang].ctaStartTest} <ArrowRight size={18} />
          </button>
          <a href="tel:+919876543210" className="bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-xl transition-colors flex items-center gap-2 border border-white/20">
            <Phone size={18} /> {T[lang].ctaCallUs}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { lang } = useLang();
  const faqs = [
    { q: T[lang].faq1Q, a: T[lang].faq1A },
    { q: T[lang].faq2Q, a: T[lang].faq2A },
    { q: T[lang].faq3Q, a: T[lang].faq3A },
    { q: T[lang].faq4Q, a: T[lang].faq4A },
    { q: T[lang].faq5Q, a: T[lang].faq5A },
    { q: T[lang].faq6Q, a: T[lang].faq6A },
  ];
  return (
    <section className="py-20 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#981F1F]/[0.03] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-[#FDB813]/[0.04] translate-y-1/3 -translate-x-1/3" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#121212]">{T[lang].faqHeading} <span className="text-[#981F1F]">{T[lang].faqHeadingHighlight}</span></h2>
        </motion.div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button className="w-full text-left px-4 py-3 sm:px-6 sm:py-5 flex items-center justify-between font-semibold text-[#121212] hover:text-[#981F1F] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className={`ml-4 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${open === i ? 'bg-[#981F1F] text-white' : 'bg-gray-100 text-[#555]'}`}>
                  {open === i ? <X size={14} /> : <ChevronRight size={14} />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-[#555] leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Removed: function Footer() - now imported from '@/components/layout/Footer'
function OldFooter_Removed() {
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
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={13} /> +91 98765 43210</a>
              <a href="mailto:support@perfectclassesnoorpur.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={13} /> support@perfectclassesnoorpur.com</a>
              <span className="flex items-start gap-2 leading-relaxed"><MapPin size={13} className="mt-0.5 flex-shrink-0" /> Perfect Classes, Near Children Academy School, MBD Road, Noorpur, Bijnor, Uttar Pradesh, 246734</span>
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
            <Link to="/#results" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">{T[lang].footerAboutVipin}</Link>
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

// ─── PAGES ───────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <>
      <InteractiveHero />
      <QuickLinks />
      <TestSeriesExplorer />
      <BooksShowcase />
      <WhyUs />
      <Testimonials />
      <Stats />
      <EnrollCTA />
      <FAQ />
    </>
  );
}

// ─── DEDICATED PAGES (PLACEHOLDERS) ──────────────────────────────────────────

function PagePlaceholder({ title }: { title: string }) {
  return (
    <div className="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[#FAFAFA]">
      <div className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-6">
        <Target size={32} className="text-[#981F1F]" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#121212] mb-4">{title}</h1>
      <p className="text-[#666] max-w-lg mb-8 text-lg">
        This dedicated page is currently being structured. Our team is adding the specific content for {title}.
      </p>
      <Link to="/" className="bg-[#981F1F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#7a1818] transition-colors shadow-lg shadow-[#981F1F]/20 flex items-center gap-2">
        <ArrowRight className="rotate-180" size={18} /> Return to Homepage
      </Link>
    </div>
  );
}

// ─── CLASS PAGE ──────────────────────────────────────────────────────────────

// Floating icon component for playful background
function FloatingIcon({ emoji, className, delay = 0, duration = 4 }: { emoji: string; className: string; delay?: number; duration?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute text-2xl sm:text-3xl lg:text-4xl select-none pointer-events-none ${className}`}
    >
      {emoji}
    </motion.div>
  );
}

function ClassPage() {
  const { classId } = useParams();
  const { lang } = useLang();
  const classInfo = BY_CLASS_SERIES.find(s => s.class === classId);
  const data = classId ? CLASS_DATA[classId] : null;
  const [openSubject, setOpenSubject] = useState<number | null>(null);

  if (!classInfo || !data) return <PagePlaceholder title="Class Not Found" />;



  // Bilingual class page text
  const cp = {
    en: {
      back: 'All Classes',
      badge: `Junior IAS — Class ${classInfo.class}`,
      heading: `Class ${classInfo.class}`,
      heroDesc: data.heroDesc,
      startTest: 'Start Free Test',
      orderBook: 'Order Book',
      priceTag: 'Just ₹100/month — Complete Access',
      whatYouGet: "What You'll Get",
      whatYouGetDesc: 'Everything included in one package — no hidden charges.',
      getBook: 'Junior IAS Book',
      getBookDesc: `${data.bookPages}+ Pages, 5 Subjects, Written By Vipin Sir`,
      getLive: '365 Days Live Classes',
      getLiveDesc: 'Daily Live Sessions With Doubt Clearing',
      getOffline: '52 Offline Tests',
      getOfflineDesc: 'Weekly Chapter-Wise Test Series',
      getOnline: '365 Online Tests',
      getOnlineDesc: 'Daily Practice Tests With Instant Results',
      journeyTitle: 'Your UPSC',
      journeyTitleHL: 'Journey Starts Here',
      journeyDesc: 'From your classroom to the civil services — here\'s the path we walk together.',
      step1: 'Get Your Junior IAS Book',
      step1Desc: 'A carefully crafted book covering History, Geography, Constitution, Science & GK — your foundation stone.',
      step2: 'Attend Daily Live Classes',
      step2Desc: 'Vipin Sir breaks down every concept, every day. Ask doubts, get clarity, build confidence.',
      step3: 'Take Weekly Offline Tests',
      step3Desc: 'Every Sunday, test what you learned. Real exam conditions. Real growth.',
      step4: 'Practice Daily Online Tests',
      step4Desc: 'Quick 10-minute tests every day. Track your score, watch yourself improve.',
      step5: 'Become UPSC Ready',
      step5Desc: 'By the time you reach Class 12, you won\'t need a coaching institute. You\'ll already be ahead.',
      chapters: 'chapters',
      tests: 'tests',
      viewChapters: 'View Chapters',
      chapterBreakdown: 'Explore What You\'ll',
      chapterBreakdownHL: 'Learn',
      chapterDesc: 'Tap any subject to dive into the chapters. Every chapter = one step closer to your dream.',
      completePackage: `Complete Class ${classInfo.class} Package`,
      packageHeading: 'Book + Tests + Live Classes',
      perMonth: '/month',
      packageDesc: `₹1,200/year for the complete Junior IAS ecosystem. Book + 365 online tests + 52 offline tests + daily live classes.`,
      enrollNow: 'Enroll Now',
      askWhatsApp: 'Ask on WhatsApp',
      included: 'All included:',
      inclBook: 'Junior IAS Book',
      inclLive: '365 Live Classes',
      inclOffline: '52 Offline Tests',
      inclOnline: '365 Online Tests',
    },
    hi: {
      back: 'सभी क्लास',
      badge: `जूनियर IAS — क्लास ${classInfo.class}`,
      heading: `क्लास ${classInfo.class}`,
      heroDesc: data.heroDesc,
      startTest: 'मुफ़्त टेस्ट शुरू करें',
      orderBook: 'किताब ऑर्डर करें',
      priceTag: 'सिर्फ़ ₹100/महीना — पूरा एक्सेस',
      whatYouGet: 'आपको क्या मिलेगा',
      whatYouGetDesc: 'एक पैकेज में सब कुछ — कोई छुपा शुल्क नहीं।',
      getBook: 'जूनियर IAS किताब',
      getBookDesc: `${data.bookPages}+ पेज, 5 विषय, विपिन सर द्वारा लिखी`,
      getLive: '365 दिन लाइव क्लास',
      getLiveDesc: 'रोज़ लाइव सेशन और डाउट क्लियरिंग',
      getOffline: '52 ऑफलाइन टेस्ट',
      getOfflineDesc: 'हर हफ़्ते अध्याय-वार टेस्ट सीरीज़',
      getOnline: '365 ऑनलाइन टेस्ट',
      getOnlineDesc: 'रोज़ प्रैक्टिस टेस्ट, तुरंत रिज़ल्ट',
      journeyTitle: 'तुम्हारा UPSC',
      journeyTitleHL: 'सफ़र यहीं से शुरू',
      journeyDesc: 'क्लासरूम से सिविल सर्विसेज़ तक — यह रास्ता हम साथ चलेंगे।',
      step1: 'जूनियर IAS किताब लो',
      step1Desc: 'इतिहास, भूगोल, संविधान, विज्ञान और GK — तुम्हारी नींव का पत्थर।',
      step2: 'रोज़ लाइव क्लास लो',
      step2Desc: 'विपिन सर हर कॉन्सेप्ट समझाएँगे। डाउट पूछो, क्लैरिटी पाओ।',
      step3: 'हफ़्ते का ऑफलाइन टेस्ट दो',
      step3Desc: 'हर रविवार, असली परीक्षा जैसा माहौल। असली तैयारी।',
      step4: 'रोज़ ऑनलाइन टेस्ट दो',
      step4Desc: 'रोज़ 10 मिनट का टेस्ट। स्कोर ट्रैक करो, खुद को बढ़ते देखो।',
      step5: 'UPSC रेडी बनो',
      step5Desc: 'क्लास 12 तक पहुँचते-पहुँचते कोचिंग की ज़रूरत ही नहीं पड़ेगी।',
      chapters: 'अध्याय',
      tests: 'टेस्ट',
      viewChapters: 'अध्याय देखें',
      chapterBreakdown: 'जानो क्या',
      chapterBreakdownHL: 'सीखोगे',
      chapterDesc: 'किसी भी विषय पर टैप करो। हर अध्याय = सपने के एक कदम और करीब।',
      completePackage: `क्लास ${classInfo.class} का पूरा पैकेज`,
      packageHeading: 'किताब + टेस्ट + लाइव क्लास',
      perMonth: '/महीना',
      packageDesc: `₹1,200/साल में पूरा जूनियर IAS इकोसिस्टम। किताब + 365 ऑनलाइन टेस्ट + 52 ऑफलाइन टेस्ट + रोज़ लाइव क्लास।`,
      enrollNow: 'अभी एनरोल करें',
      askWhatsApp: 'WhatsApp पर पूछें',
      included: 'सब शामिल:',
      inclBook: 'जूनियर IAS किताब',
      inclLive: '365 लाइव क्लास',
      inclOffline: '52 ऑफलाइन टेस्ट',
      inclOnline: '365 ऑनलाइन टेस्ट',
    },
  };
  const t = cp[lang];

  return (
    <div className="bg-[#FFF8F0] relative overflow-hidden">

      {/* ── Background decorative elements across the page ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {Number(classInfo.class) <= 8 ? (
          <>
            {/* Playful squiggly SVG lines for Class 6-8 */}
            <svg className="absolute top-[15%] left-0 w-32 opacity-[0.06]" viewBox="0 0 100 200"><path d="M50,0 Q80,50 50,100 Q20,150 50,200" stroke="#981F1F" strokeWidth="3" fill="none" /></svg>
            <svg className="absolute top-[45%] right-0 w-24 opacity-[0.05]" viewBox="0 0 100 200"><path d="M50,0 Q20,50 50,100 Q80,150 50,200" stroke="#FDB813" strokeWidth="3" fill="none" /></svg>
            <svg className="absolute top-[70%] left-[5%] w-20 opacity-[0.04]" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="#981F1F" strokeWidth="2" fill="none" strokeDasharray="8 6" /></svg>
            <svg className="absolute top-[30%] right-[8%] w-16 opacity-[0.05]" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" rx="20" stroke="#FDB813" strokeWidth="2" fill="none" strokeDasharray="10 8" /></svg>
            <div className="absolute top-[55%] left-[3%] grid grid-cols-3 gap-2 opacity-[0.06]">
              {[...Array(9)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-[#981F1F]" />)}
            </div>
            <div className="absolute top-[25%] right-[4%] grid grid-cols-3 gap-2 opacity-[0.05]">
              {[...Array(9)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-[#FDB813]" />)}
            </div>
            <div className="absolute top-[80%] right-[15%] text-[#981F1F]/[0.06] text-6xl font-thin">+</div>
            <div className="absolute top-[10%] left-[20%] text-[#FDB813]/[0.08] text-5xl font-thin">+</div>
          </>
        ) : (
          <>
            {/* Clean geometric lines for Class 9-12 — serious academic */}
            <svg className="absolute top-[12%] left-0 w-40 opacity-[0.04]" viewBox="0 0 160 300"><line x1="20" y1="0" x2="20" y2="300" stroke="#981F1F" strokeWidth="1" /><line x1="40" y1="0" x2="40" y2="300" stroke="#981F1F" strokeWidth="0.5" /><line x1="60" y1="0" x2="60" y2="300" stroke="#981F1F" strokeWidth="0.5" /></svg>
            <svg className="absolute top-[40%] right-0 w-40 opacity-[0.03]" viewBox="0 0 160 300"><line x1="100" y1="0" x2="100" y2="300" stroke="#333" strokeWidth="1" /><line x1="120" y1="0" x2="120" y2="300" stroke="#333" strokeWidth="0.5" /><line x1="140" y1="0" x2="140" y2="300" stroke="#333" strokeWidth="0.5" /></svg>
            <svg className="absolute top-[65%] left-[5%] w-24 opacity-[0.03]" viewBox="0 0 100 100"><rect x="5" y="5" width="90" height="90" stroke="#981F1F" strokeWidth="1" fill="none" /><rect x="15" y="15" width="70" height="70" stroke="#981F1F" strokeWidth="0.5" fill="none" /></svg>
            <svg className="absolute top-[25%] right-[6%] w-20 opacity-[0.03]" viewBox="0 0 100 100"><polygon points="50,5 95,95 5,95" stroke="#333" strokeWidth="1" fill="none" /></svg>
            <div className="absolute top-[75%] right-[12%] w-px h-32 bg-[#981F1F]/[0.06]" />
            <div className="absolute top-[50%] left-[8%] w-px h-24 bg-[#333]/[0.04]" />
          </>
        )}
      </div>

      {/* ── Hero Section — Playful, KidWise-inspired ── */}
      <section className={`relative bg-gradient-to-b ${classInfo.gradient} pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-visible`}>
        {/* Decorative background shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-white/10" />
        <div className="absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-white/5" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10" />
        <div className="absolute bottom-16 right-[15%] w-24 h-24 rounded-2xl bg-white/5 rotate-12" />
        <div className="absolute top-20 left-[40%] w-12 h-12 rounded-lg bg-white/5 -rotate-12" />
        {/* Dot grid pattern */}
        <div className="absolute top-[20%] right-[5%] opacity-[0.12] hidden lg:block">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <g fill="white">
              <circle cx="12" cy="12" r="3"/><circle cx="36" cy="12" r="3"/><circle cx="60" cy="12" r="3"/><circle cx="84" cy="12" r="3"/><circle cx="108" cy="12" r="3"/>
              <circle cx="12" cy="36" r="3"/><circle cx="36" cy="36" r="3"/><circle cx="60" cy="36" r="3"/><circle cx="84" cy="36" r="3"/><circle cx="108" cy="36" r="3"/>
              <circle cx="12" cy="60" r="3"/><circle cx="36" cy="60" r="3"/><circle cx="60" cy="60" r="3"/><circle cx="84" cy="60" r="3"/><circle cx="108" cy="60" r="3"/>
              <circle cx="12" cy="84" r="3"/><circle cx="36" cy="84" r="3"/><circle cx="60" cy="84" r="3"/><circle cx="84" cy="84" r="3"/><circle cx="108" cy="84" r="3"/>
              <circle cx="12" cy="108" r="3"/><circle cx="36" cy="108" r="3"/><circle cx="60" cy="108" r="3"/><circle cx="84" cy="108" r="3"/><circle cx="108" cy="108" r="3"/>
            </g>
          </svg>
        </div>
        {/* Open book SVG */}
        <svg className="absolute bottom-[25%] left-[3%] w-16 sm:w-20 opacity-[0.08]" viewBox="0 0 100 80" fill="none">
          <path d="M50,15 C40,5 20,5 5,10 L5,70 C20,65 40,65 50,75 C60,65 80,65 95,70 L95,10 C80,5 60,5 50,15Z" stroke="white" strokeWidth="2.5" fill="none" />
          <line x1="50" y1="15" x2="50" y2="75" stroke="white" strokeWidth="1.5" />
        </svg>
        {/* Pencil SVG */}
        <svg className="absolute top-[60%] right-[8%] w-8 sm:w-12 opacity-[0.1] rotate-[-30deg]" viewBox="0 0 24 80" fill="none">
          <rect x="4" y="0" width="16" height="60" rx="2" stroke="white" strokeWidth="2" />
          <polygon points="4,60 20,60 12,78" stroke="white" strokeWidth="2" fill="none" />
          <line x1="4" y1="50" x2="20" y2="50" stroke="white" strokeWidth="1.5" />
        </svg>

        {/* Floating icons — playful for 6-8, serious/academic for 9-12 */}
        {Number(classInfo.class) <= 8 ? (
          <>
            <FloatingIcon emoji="📚" className="top-[15%] left-[8%] opacity-60" delay={0} duration={5} />
            <FloatingIcon emoji="✏️" className="top-[20%] right-[12%] opacity-50" delay={1} duration={4.5} />
            <FloatingIcon emoji="🎯" className="bottom-[20%] left-[15%] opacity-40" delay={0.5} duration={5.5} />
            <FloatingIcon emoji="🧠" className="top-[35%] right-[5%] opacity-50" delay={1.5} duration={4} />
            <FloatingIcon emoji="⭐" className="bottom-[15%] right-[20%] opacity-60" delay={0.8} duration={3.5} />
            <FloatingIcon emoji="🏆" className="top-[10%] left-[30%] opacity-40" delay={2} duration={6} />
            <FloatingIcon emoji="📝" className="bottom-[30%] right-[35%] opacity-30 hidden sm:block" delay={1.2} duration={5} />
            <FloatingIcon emoji="🚀" className="top-[60%] left-[5%] opacity-40 hidden sm:block" delay={0.3} duration={4.5} />
          </>
        ) : (
          <>
            <FloatingIcon emoji="🏛️" className="top-[15%] left-[8%] opacity-40" delay={0} duration={6} />
            <FloatingIcon emoji="⚖️" className="top-[20%] right-[12%] opacity-35" delay={1.2} duration={5.5} />
            <FloatingIcon emoji="🎖️" className="bottom-[20%] left-[15%] opacity-30" delay={0.5} duration={6} />
            <FloatingIcon emoji="📊" className="top-[35%] right-[5%] opacity-35" delay={1.8} duration={5} />
            <FloatingIcon emoji="🔬" className="bottom-[15%] right-[20%] opacity-30" delay={0.8} duration={5.5} />
            <FloatingIcon emoji="🗺️" className="top-[10%] left-[30%] opacity-30 hidden sm:block" delay={2} duration={6.5} />
          </>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Link to="/#test-series" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 text-sm mb-4 transition-colors px-4 py-2 rounded-full border border-white/30 font-medium">
                <ArrowRight className="rotate-180" size={14} /> {t.back}
              </Link>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 ml-2 border border-white/30">
                {t.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.25] mb-4">
                {t.heading}
              </h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                {t.heroDesc}
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                <button className="bg-white text-[#121212] font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg text-base sm:text-lg">
                  {t.startTest} <ArrowRight size={18} />
                </button>
                <button className="bg-white/15 border border-white/30 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-white/25 transition-colors flex items-center gap-2">
                  <BookOpen size={18} /> {t.orderBook}
                </button>
              </div>

              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-2 rounded-full border border-white/20">
                {t.priceTag}
              </div>
            </div>

            {/* Right side — Student illustration with floating stats */}
            <div className="flex justify-center items-center mt-8 lg:mt-0 relative">
              {/* Large decorative circle behind */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-white/10" />

              {/* Student illustration */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img src={classInfo.image} alt={`Class ${classInfo.class}`} className="w-44 h-52 sm:w-56 sm:h-64 lg:w-64 lg:h-72 drop-shadow-2xl object-contain" />
              </motion.div>

              {/* Floating stat badges — 4 corners with gradient icons */}
              {/* Top-left: Online Tests */}
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-6 -left-4 sm:-top-4 sm:-left-6 lg:-left-10 bg-white/15 backdrop-blur-xl rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl z-20 border border-white/25 scale-[0.8] sm:scale-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center shadow-lg text-base sm:text-lg">💻</div>
                  <div>
                    <span className="text-white font-extrabold text-base sm:text-xl block leading-none">365</span>
                    <span className="text-white/60 text-[8px] sm:text-[10px] font-medium">{lang === 'hi' ? 'ऑनलाइन टेस्ट' : 'Online Tests'}</span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom-left: Junior IAS Book */}
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-2 sm:-bottom-2 sm:-left-6 lg:-left-8 bg-white/15 backdrop-blur-xl rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl z-20 border border-white/25 scale-[0.8] sm:scale-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg text-base sm:text-lg">📕</div>
                  <div>
                    <span className="text-white font-extrabold text-xs sm:text-sm block leading-tight">{lang === 'hi' ? 'जूनियर IAS' : 'Junior IAS'}</span>
                    <span className="text-white/60 text-[8px] sm:text-[10px] font-medium">{lang === 'hi' ? 'किताब' : 'Book'}</span>
                  </div>
                </div>
              </motion.div>

              {/* Top-right: Live Classes */}
              <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -top-2 -right-4 sm:-top-2 sm:-right-6 lg:-right-8 bg-white/15 backdrop-blur-xl rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl z-20 border border-white/25 scale-[0.8] sm:scale-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg text-base sm:text-lg">🎥</div>
                  <div>
                    <span className="text-white font-extrabold text-base sm:text-xl block leading-none">365</span>
                    <span className="text-white/60 text-[8px] sm:text-[10px] font-medium">{lang === 'hi' ? 'लाइव क्लास' : 'Live Classes'}</span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom-right: Offline Tests */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -bottom-6 -right-2 sm:-bottom-4 sm:-right-4 lg:-right-6 bg-white/15 backdrop-blur-xl rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl z-20 border border-white/25 scale-[0.8] sm:scale-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg text-base sm:text-lg">📝</div>
                  <div>
                    <span className="text-white font-extrabold text-base sm:text-xl block leading-none">52+</span>
                    <span className="text-white/60 text-[8px] sm:text-[10px] font-medium">{lang === 'hi' ? 'ऑफलाइन टेस्ट' : 'Offline Tests'}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gradient bridge from hero to content ── */}
      <div className="relative h-24 sm:h-32 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${classInfo.gradient} opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFF8F0]/70 to-[#FFF8F0]" />
        {/* Subtle curved separator */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 Q360,60 720,30 Q1080,0 1440,30 L1440,60 L0,60Z" fill="#FFF8F0" />
        </svg>
      </div>

      {/* ── What You Get — 4 pillars ── */}
      <section className="py-16 sm:py-20 relative z-10 bg-gradient-to-b from-[#FFF8F0] to-[#FFF8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121212]">
              {t.whatYouGet}
            </h2>
            <p className="text-[#555] mt-2 max-w-xl mx-auto">{t.whatYouGetDesc}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: '📖', title: t.getBook, desc: t.getBookDesc, color: 'from-amber-50 to-orange-50', border: 'border-amber-200', iconBg: 'bg-amber-100' },
              { icon: '🎥', title: t.getLive, desc: t.getLiveDesc, color: 'from-green-50 to-emerald-50', border: 'border-green-200', iconBg: 'bg-green-100' },
              { icon: '📝', title: t.getOffline, desc: t.getOfflineDesc, color: 'from-blue-50 to-indigo-50', border: 'border-blue-200', iconBg: 'bg-blue-100' },
              { icon: '💻', title: t.getOnline, desc: t.getOnlineDesc, color: 'from-purple-50 to-violet-50', border: 'border-purple-200', iconBg: 'bg-purple-100' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl border ${item.border} p-5 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all`}
              >
                <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#121212] text-sm sm:text-base mb-2">{item.title}</h3>
                <p className="text-xs text-[#666] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Price highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-[#981F1F] to-[#7A1818] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">🎁</div>
              <div>
                <p className="font-bold text-lg sm:text-xl">{lang === 'hi' ? 'यह सब सिर्फ़' : 'All this for just'}</p>
                <p className="text-white/70 text-sm">{lang === 'hi' ? 'किताब + टेस्ट + लाइव क्लास' : 'Book + Tests + Live Classes'}</p>
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#FDB813]">₹100</span>
              <span className="text-white/60 text-lg">{t.perMonth}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Your Journey Timeline ── */}
      <section className="py-16 sm:py-20 relative z-10 overflow-hidden">
        {/* Decorative SVGs */}
        <svg className="absolute top-12 right-[5%] w-20 sm:w-28 opacity-[0.04]" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" stroke="#981F1F" strokeWidth="2" fill="none" /><circle cx="50" cy="50" r="30" stroke="#981F1F" strokeWidth="1.5" fill="none" /><circle cx="50" cy="50" r="15" stroke="#981F1F" strokeWidth="1" fill="none" /></svg>
        <svg className="absolute bottom-20 left-[3%] w-16 sm:w-24 opacity-[0.05] rotate-12" viewBox="0 0 100 80" fill="none">
          <path d="M50,15 C40,5 20,5 5,10 L5,70 C20,65 40,65 50,75 C60,65 80,65 95,70 L95,10 C80,5 60,5 50,15Z" stroke="#FDB813" strokeWidth="2.5" fill="none" />
          <line x1="50" y1="15" x2="50" y2="75" stroke="#FDB813" strokeWidth="1.5" />
        </svg>
        <svg className="absolute top-[40%] right-[2%] w-10 opacity-[0.04]" viewBox="0 0 40 40"><polygon points="20,2 38,38 2,38" stroke="#981F1F" strokeWidth="2" fill="none" /></svg>
        {/* Dot pattern */}
        <div className="absolute top-[60%] left-[6%] opacity-[0.03] hidden sm:block">
          <svg width="80" height="80" viewBox="0 0 80 80"><g fill="#981F1F">
            <circle cx="10" cy="10" r="2.5"/><circle cx="30" cy="10" r="2.5"/><circle cx="50" cy="10" r="2.5"/><circle cx="70" cy="10" r="2.5"/>
            <circle cx="10" cy="30" r="2.5"/><circle cx="30" cy="30" r="2.5"/><circle cx="50" cy="30" r="2.5"/><circle cx="70" cy="30" r="2.5"/>
            <circle cx="10" cy="50" r="2.5"/><circle cx="30" cy="50" r="2.5"/><circle cx="50" cy="50" r="2.5"/><circle cx="70" cy="50" r="2.5"/>
            <circle cx="10" cy="70" r="2.5"/><circle cx="30" cy="70" r="2.5"/><circle cx="50" cy="70" r="2.5"/><circle cx="70" cy="70" r="2.5"/>
          </g></svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121212]">
              {t.journeyTitle} <span className="text-[#981F1F]">{t.journeyTitleHL}</span>
            </h2>
            <p className="text-[#555] mt-3 max-w-lg mx-auto text-base">{t.journeyDesc}</p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#981F1F] via-[#FDB813] to-green-500 rounded-full" />

            {[
              { emoji: '📖', title: t.step1, desc: t.step1Desc, color: 'bg-amber-500', ring: 'ring-amber-100' },
              { emoji: '🎥', title: t.step2, desc: t.step2Desc, color: 'bg-[#981F1F]', ring: 'ring-red-100' },
              { emoji: '📝', title: t.step3, desc: t.step3Desc, color: 'bg-blue-500', ring: 'ring-blue-100' },
              { emoji: '💻', title: t.step4, desc: t.step4Desc, color: 'bg-purple-500', ring: 'ring-purple-100' },
              { emoji: '🏆', title: t.step5, desc: t.step5Desc, color: 'bg-green-500', ring: 'ring-green-100' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative flex items-start gap-5 sm:gap-6 mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full ${step.color} ring-4 ${step.ring} flex items-center justify-center text-xl sm:text-2xl shadow-lg`}>
                  {step.emoji}
                </div>
                {/* Content card */}
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-white bg-[#981F1F]/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {lang === 'hi' ? `चरण ${i + 1}` : `Step ${i + 1}`}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-[#121212] text-lg sm:text-xl mb-1">{step.title}</h3>
                  <p className="text-[#666] text-sm sm:text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chapter Breakdown (Accordion) ── */}
      <section className="pb-16 sm:pb-20 relative z-10 overflow-hidden">
        {/* Decorative background SVGs */}
        <svg className="absolute top-10 left-[2%] w-14 sm:w-20 opacity-[0.04]" viewBox="0 0 80 80"><rect x="5" y="5" width="70" height="70" rx="15" stroke="#981F1F" strokeWidth="2" fill="none" /><rect x="18" y="18" width="44" height="44" rx="10" stroke="#981F1F" strokeWidth="1.5" fill="none" /></svg>
        <svg className="absolute top-[30%] right-[3%] w-24 opacity-[0.03]" viewBox="0 0 100 200"><path d="M50,0 Q80,50 50,100 Q20,150 50,200" stroke="#FDB813" strokeWidth="3" fill="none" /></svg>
        <svg className="absolute bottom-[15%] left-[5%] w-12 opacity-[0.04]" viewBox="0 0 50 50"><circle cx="25" cy="25" r="22" stroke="#981F1F" strokeWidth="2" fill="none" strokeDasharray="6 4" /></svg>
        {/* Graduation cap SVG */}
        <svg className="absolute bottom-10 right-[6%] w-16 sm:w-20 opacity-[0.04]" viewBox="0 0 100 80" fill="none">
          <polygon points="50,10 95,35 50,55 5,35" stroke="#981F1F" strokeWidth="2.5" />
          <line x1="50" y1="55" x2="50" y2="75" stroke="#981F1F" strokeWidth="2" />
          <path d="M30,42 L30,60 Q50,72 70,60 L70,42" stroke="#981F1F" strokeWidth="2" fill="none" />
        </svg>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-[#981F1F]/10 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
                {data.subjects.length} {lang === 'hi' ? 'विषय' : 'Subjects'} · {data.subjects.reduce((s, sub) => s + sub.chapters.length, 0)} {t.chapters}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] leading-tight">
                {t.chapterBreakdown} <span className="text-[#981F1F]">{t.chapterBreakdownHL}</span>
              </h2>
              <p className="text-[#555] mt-3 max-w-md mx-auto text-base">{t.chapterDesc}</p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            {data.subjects.map((subj, i) => {
              const colors = [
                { bg: 'from-red-50 to-orange-50', border: 'border-red-200', accent: 'bg-[#981F1F]', accentLight: 'bg-[#981F1F]/10', text: 'text-[#981F1F]' },
                { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', accent: 'bg-blue-600', accentLight: 'bg-blue-100', text: 'text-blue-600' },
                { bg: 'from-amber-50 to-yellow-50', border: 'border-amber-200', accent: 'bg-amber-600', accentLight: 'bg-amber-100', text: 'text-amber-600' },
                { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', accent: 'bg-green-600', accentLight: 'bg-green-100', text: 'text-green-600' },
                { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', accent: 'bg-purple-600', accentLight: 'bg-purple-100', text: 'text-purple-600' },
              ];
              const c = colors[i % colors.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-gradient-to-r ${c.bg} rounded-2xl border ${c.border} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
                >
                  <button
                    className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between"
                    onClick={() => setOpenSubject(openSubject === i ? null : i)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${c.accent} flex items-center justify-center text-2xl sm:text-3xl shadow-md`}>
                        <span className="drop-shadow-sm">{subj.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-extrabold text-[#121212] text-lg sm:text-xl">{subj.name}</h3>
                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                          <span className={`text-xs font-semibold ${c.text}`}>{subj.chapters.length} {t.chapters}</span>
                          <span className="text-[#ccc]">·</span>
                          <span className="text-xs font-semibold text-[#888]">{subj.tests}+ {lang === 'hi' ? 'ऑफलाइन' : 'Offline'}</span>
                          <span className="text-[#ccc]">·</span>
                          <span className="text-xs font-semibold text-[#888]">70+ {lang === 'hi' ? 'ऑनलाइन' : 'Online'}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`hidden sm:inline-block text-xs font-bold ${c.text} uppercase tracking-wider`}>{t.viewChapters}</span>
                      <span className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openSubject === i ? `${c.accent} text-white rotate-90 shadow-md` : `${c.accentLight} ${c.text}`}`}>
                        <ChevronRight size={18} />
                      </span>
                    </div>
                  </button>
                  <AnimatePresence>
                    {openSubject === i && (
                      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {subj.chapters.map((ch, ci) => (
                              <motion.div
                                key={ci}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: ci * 0.03 }}
                                className="flex items-start gap-3 py-2.5 px-3 rounded-xl bg-white/80 border border-white shadow-sm hover:shadow transition-shadow"
                              >
                                <span className={`flex-shrink-0 w-7 h-7 rounded-lg ${c.accent} text-white text-[11px] font-bold flex items-center justify-center mt-0.5 shadow-sm`}>
                                  {ci + 1}
                                </span>
                                <span className="text-sm text-[#333] leading-snug font-medium">{ch}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing CTA ── */}
      <section className="pb-20 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#121212] rounded-3xl p-5 sm:p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#981F1F]/10 -translate-y-1/2" />
            {/* Floating icons in CTA */}
            <div className="absolute top-6 left-6 text-2xl opacity-20 animate-bounce">📚</div>
            <div className="absolute bottom-6 right-6 text-2xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>🎯</div>
            <div className="absolute top-8 right-10 text-xl opacity-15 animate-bounce" style={{ animationDelay: '1s' }}>⭐</div>
            <div className="relative z-10">
              <div className="inline-block bg-[#FDB813] text-[#121212] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
                {t.completePackage}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-[1.25]">
                {t.packageHeading}
              </h2>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-extrabold text-[#FDB813]">₹100</span>
                <span className="text-white/60 text-lg">{t.perMonth}</span>
              </div>
              <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
                {t.packageDesc}
              </p>
              {/* Included items */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {[t.inclBook, t.inclLive, t.inclOffline, t.inclOnline].map((item, i) => (
                  <span key={i} className="bg-white/10 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                    ✓ {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#981F1F] text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-[#7a1818] transition-colors flex items-center gap-2 shadow-lg text-base sm:text-lg">
                  {t.enrollNow} <ArrowRight size={18} />
                </button>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2">
                  <Phone size={16} /> {t.askWhatsApp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────

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

// ─── PRIVACY POLICY PAGE ──────────────────────────────────────────────────────

function PrivacyPolicyPage() {
  const lastUpdated = 'March 2026';
  const sections = [
    {
      title: '1. Information We Collect',
      content: `When you register or use our platform, we may collect the following information:

• **Personal Identification:** Name, email address, phone number, and date of birth.
• **Academic Information:** Class, stream, target exam, and performance data from tests taken on our platform.
• **Payment Information:** Transaction details processed securely through third-party payment gateways. We do not store card or banking information.
• **Usage Data:** Pages visited, test attempts, time spent, device type, IP address, and browser type.
• **Communications:** Messages or enquiries you send to our support team.`,
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information collected to:

• Provide and improve our test series and educational services.
• Personalise your learning experience and generate performance reports.
• Send important updates, course notifications, and result alerts.
• Process payments and send transaction confirmations.
• Respond to your queries and provide customer support.
• Analyse usage patterns to improve platform performance.
• Comply with legal obligations.`,
    },
    {
      title: '3. Sharing of Information',
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your data in the following limited circumstances:

• **Service Providers:** With trusted partners (e.g., payment processors, hosting providers) who assist in operating our platform, subject to confidentiality agreements.
• **Legal Requirements:** When required by law, court order, or government authority.
• **Business Transfers:** In the event of a merger, acquisition, or sale of assets, your data may be transferred with appropriate notice.`,
    },
    {
      title: '4. Data Security',
      content: `We implement industry-standard security measures to protect your personal information:

• SSL/TLS encryption for all data transmission.
• Secure, access-controlled servers for data storage.
• Regular security audits and vulnerability assessments.
• Restricted access to personal data on a need-to-know basis.

While we strive to protect your data, no method of internet transmission is 100% secure. We encourage you to use strong passwords and keep your login credentials confidential.`,
    },
    {
      title: '5. Cookies',
      content: `We use cookies and similar tracking technologies to enhance your experience on our platform. Cookies help us:

• Keep you logged in during your session.
• Remember your preferences and settings.
• Analyse traffic and usage patterns.
• Deliver relevant content.

You can control or disable cookies through your browser settings. However, disabling cookies may affect the functionality of certain features.`,
    },
    {
      title: '6. Children\'s Privacy',
      content: `Our platform is designed for students of Class 6 and above. We do not knowingly collect personal information from children under 13 years of age without verifiable parental consent. If you are a parent or guardian and believe your child has provided personal information, please contact us immediately at info@perfectclassesnoorpur.com and we will take appropriate action.`,
    },
    {
      title: '7. Your Rights',
      content: `You have the following rights regarding your personal data:

• **Access:** Request a copy of the personal data we hold about you.
• **Correction:** Request correction of inaccurate or incomplete information.
• **Deletion:** Request deletion of your account and associated data, subject to legal retention requirements.
• **Opt-Out:** Unsubscribe from marketing communications at any time via the link in our emails.

To exercise any of these rights, contact us at info@perfectclassesnoorpur.com.`,
    },
    {
      title: '8. Third-Party Links',
      content: `Our website may contain links to third-party websites (e.g., Graphy course platform, social media pages). We are not responsible for the privacy practices or content of those websites. We encourage you to read their privacy policies before providing any personal information.`,
    },
    {
      title: '9. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify registered users of significant changes via email or a notice on our platform. The "Last Updated" date at the top of this page will always reflect the most recent version.`,
    },
    {
      title: '10. Contact Us',
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:

• **Email:** info@perfectclassesnoorpur.com
• **Phone:** +91 98765 43210
• **Address:** Perfect Classes, Noorpur, Bijnor District, Uttar Pradesh, India`,
    },
  ];

  return (
    <div className="bg-[#FAFAFA] pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
            <Shield size={12} /> Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#121212] mb-3">Privacy <span className="text-[#981F1F]">Policy</span></h1>
          <p className="text-[#555] text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="bg-[#FFF1F1] border border-[#981F1F]/20 rounded-2xl p-6 mb-10">
          <p className="text-[#555] text-sm leading-relaxed">
            Perfect Classes ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website at <strong>perfectclassesnoorpur.com</strong> and our associated test series platform. By using our services, you agree to the terms described in this policy.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {sections.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-lg font-bold text-[#121212] mb-4">{s.title}</h2>
              <div className="text-sm text-[#555] leading-relaxed whitespace-pre-line">
                {s.content.split('\n').map((line, j) => {
                  const trimmed = line.trim();
                  if (trimmed.startsWith('•')) {
                    return <p key={j} className="mb-1 pl-2">{trimmed}</p>;
                  }
                  if (trimmed === '') return <br key={j} />;
                  return <p key={j} className="mb-2">{trimmed}</p>;
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 bg-[#981F1F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#7a1818] transition-colors shadow-lg">
            <ArrowRight className="rotate-180" size={18} /> Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── TERMS OF USE PAGE ────────────────────────────────────────────────────────

function TermsOfUsePage() {
  const lastUpdated = 'March 2026';
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing or using the Perfect Classes website (perfectclassesnoorpur.com) and its associated services, you confirm that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our platform.

These terms apply to all users including students, parents, and guardians.`,
    },
    {
      title: '2. About Perfect Classes',
      content: `Perfect Classes is an educational platform based in Noorpur, Uttar Pradesh, India, that provides test series, study materials, and coaching for students of Class 6–12 and competitive exam aspirants (NDA, CUET, Agniveer, and others). Content is delivered through our website and integrated third-party platforms.`,
    },
    {
      title: '3. User Accounts',
      content: `• You must provide accurate and complete information when creating an account.
• You are responsible for maintaining the confidentiality of your login credentials.
• You must not share your account with others or allow multiple users to access a single account.
• You must notify us immediately at info@perfectclassesnoorpur.com if you suspect unauthorised access to your account.
• We reserve the right to suspend or terminate accounts that violate these terms.`,
    },
    {
      title: '4. Use of the Platform',
      content: `You agree to use Perfect Classes only for lawful educational purposes. You must NOT:

• Copy, reproduce, distribute, or resell any test questions, answers, or content from our platform.
• Attempt to gain unauthorised access to any part of the platform or its systems.
• Use automated tools, bots, or scripts to access or scrape content.
• Impersonate any person or entity, including Perfect Classes staff.
• Post or transmit any content that is offensive, harmful, or violates any applicable law.
• Use the platform for any commercial purpose without our written consent.`,
    },
    {
      title: '5. Intellectual Property',
      content: `All content on the Perfect Classes platform — including test questions, study materials, graphics, logos, videos, and text — is the exclusive intellectual property of Perfect Classes or its licensors.

You are granted a limited, non-exclusive, non-transferable licence to access and use the content solely for your personal educational purposes. Any unauthorised use, reproduction, or distribution of our content is strictly prohibited and may result in legal action.`,
    },
    {
      title: '6. Payments and Refunds',
      content: `• All fees for test series, courses, or subscriptions are displayed clearly before purchase.
• Payments are processed securely through authorised third-party payment gateways.
• Once a course or test series is activated and accessed, refunds will not be provided unless the content is found to be materially defective.
• Refund requests must be raised within 48 hours of purchase by contacting info@perfectclassesnoorpur.com.
• We reserve the right to modify pricing at any time, with prior notice for existing subscribers.`,
    },
    {
      title: '7. Disclaimer of Warranties',
      content: `Perfect Classes provides its platform and content on an "as is" and "as available" basis. While we make every effort to ensure accuracy and quality, we do not guarantee:

• That the platform will be uninterrupted or error-free at all times.
• That test content will guarantee a particular score or exam result.
• That all information is completely up-to-date at all times.

Use of our platform is at your own risk. We are not liable for any academic outcomes or exam results.`,
    },
    {
      title: '8. Limitation of Liability',
      content: `To the fullest extent permitted by applicable law, Perfect Classes shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of (or inability to use) our platform, including but not limited to loss of data, loss of revenue, or loss of opportunity.

Our total liability in any matter shall not exceed the amount you paid for the specific service in question.`,
    },
    {
      title: '9. Third-Party Services',
      content: `Our platform integrates with third-party services (such as Graphy for course delivery and payment gateways for transactions). These services have their own terms of service and privacy policies. Perfect Classes is not responsible for the practices or content of these third-party providers.`,
    },
    {
      title: '10. Termination',
      content: `We reserve the right to suspend or permanently terminate your access to the platform, without prior notice, if you:

• Violate any of these Terms of Use.
• Engage in fraudulent, abusive, or harmful behaviour.
• Attempt to compromise the integrity of our tests or platform.

Upon termination, your right to access the platform ceases immediately. You may contact us at info@perfectclassesnoorpur.com to appeal a termination decision.`,
    },
    {
      title: '11. Governing Law',
      content: `These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Bijnor District, Uttar Pradesh, India.`,
    },
    {
      title: '12. Changes to Terms',
      content: `We may revise these Terms of Use at any time. Updated terms will be posted on this page with a revised "Last Updated" date. Continued use of our platform after changes are posted constitutes your acceptance of the revised terms. We recommend reviewing this page periodically.`,
    },
    {
      title: '13. Contact',
      content: `For any questions regarding these Terms of Use, please contact us:

• **Email:** info@perfectclassesnoorpur.com
• **Phone:** +91 98765 43210
• **Address:** Perfect Classes, Noorpur, Bijnor District, Uttar Pradesh, India`,
    },
  ];

  return (
    <div className="bg-[#FAFAFA] pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
            <FileText size={12} /> Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#121212] mb-3">Terms of <span className="text-[#981F1F]">Use</span></h1>
          <p className="text-[#555] text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="bg-[#FFF1F1] border border-[#981F1F]/20 rounded-2xl p-6 mb-10">
          <p className="text-[#555] text-sm leading-relaxed">
            Please read these Terms of Use carefully before using the Perfect Classes platform. These terms constitute a legally binding agreement between you and Perfect Classes regarding your use of our website and services.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {sections.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-lg font-bold text-[#121212] mb-4">{s.title}</h2>
              <div className="text-sm text-[#555] leading-relaxed">
                {s.content.split('\n').map((line, j) => {
                  const trimmed = line.trim();
                  if (trimmed.startsWith('•')) {
                    return <p key={j} className="mb-1 pl-2">{trimmed}</p>;
                  }
                  if (trimmed === '') return <br key={j} />;
                  return <p key={j} className="mb-2">{trimmed}</p>;
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 bg-[#981F1F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#7a1818] transition-colors shadow-lg">
            <ArrowRight className="rotate-180" size={18} /> Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

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
