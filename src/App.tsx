import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen, ChevronRight, ChevronLeft, Star, CheckCircle, Trophy,
  Users, Clock, Award, Phone, Mail, MapPin, ArrowRight, Menu, X,
  FileText, Target, Layers, Zap, BarChart2, Shield
} from 'lucide-react';
import { Navbar as ResizableNav, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/resizable-navbar";
import { InteractiveGridPattern } from "@/registry/magicui/interactive-grid-pattern";
import { Marquee } from "@/registry/magicui/marquee";

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
  { label: 'UPSC', icon: '🏛️' },
  { label: 'NDA', icon: '🎖️' },
  { label: 'CUET', icon: '🎓' },
];

const BY_CLASS_SERIES = [
  { class: '6', label: 'History, Geography, Constitution, Science, Static GK', tests: 40, badge: 'CLASS 6', gradient: 'from-amber-400 to-orange-500', illustration: 'child', tagline: 'Neev Ka Pehla Patthar' },
  { class: '7', label: 'History, Geography, Constitution, Science, Static GK', tests: 50, badge: 'CLASS 7', gradient: 'from-emerald-400 to-teal-500', illustration: 'child', tagline: 'Samajh Badho, Ratta Chhodo' },
  { class: '8', label: 'History, Geography, Constitution, Science, Static GK', tests: 60, badge: 'CLASS 8', gradient: 'from-blue-400 to-indigo-500', illustration: 'child', tagline: 'Board Se Pehle Ki Tayyari' },
  { class: '9', label: 'History, Geography, Constitution, Science, Static GK', tests: 80, badge: 'CLASS 9', gradient: 'from-violet-500 to-purple-600', illustration: 'teen', tagline: 'Competitive Edge Shuru' },
  { class: '10', label: 'History, Geography, Constitution, Science, Static GK', tests: 120, badge: 'CLASS 10', gradient: 'from-rose-500 to-red-600', illustration: 'teen', tagline: 'Board + Competition Ready' },
  { class: '11', label: 'History, Geography, Constitution, Science, Static GK', tests: 150, badge: 'CLASS 11', gradient: 'from-[#981F1F] to-[#6B1515]', illustration: 'senior', tagline: 'IAS/NDA Level Foundation' },
  { class: '12', label: 'History, Geography, Constitution, Science, Static GK', tests: 200, badge: 'CLASS 12', gradient: 'from-[#121212] to-[#333]', illustration: 'senior', tagline: 'Exam Ready, Future Ready' },
];

// Student illustration SVGs — 3 age variants
function StudentIllustration({ type, className = '' }: { type: string; className?: string }) {
  if (type === 'child') {
    return (
      <svg viewBox="0 0 80 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Backpack */}
        <rect x="20" y="42" width="40" height="36" rx="6" fill="white" fillOpacity="0.25" />
        <rect x="28" y="50" width="24" height="10" rx="3" fill="white" fillOpacity="0.15" />
        {/* Body */}
        <rect x="25" y="52" width="30" height="28" rx="5" fill="white" fillOpacity="0.9" />
        {/* Head */}
        <circle cx="40" cy="30" r="18" fill="white" fillOpacity="0.9" />
        {/* Hair */}
        <path d="M22 28c0-10 8-18 18-18s18 8 18 18" fill="white" fillOpacity="0.3" />
        <ellipse cx="40" cy="14" rx="16" ry="6" fill="#333" fillOpacity="0.7" />
        {/* Eyes */}
        <circle cx="33" cy="30" r="2.5" fill="#333" />
        <circle cx="47" cy="30" r="2.5" fill="#333" />
        {/* Smile */}
        <path d="M34 37c2 3 10 3 12 0" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Book in hand */}
        <rect x="50" y="58" width="14" height="18" rx="2" fill="#FDB813" fillOpacity="0.8" />
        <line x1="54" y1="62" x2="60" y2="62" stroke="white" strokeWidth="1" />
        <line x1="54" y1="65" x2="60" y2="65" stroke="white" strokeWidth="1" />
        <line x1="54" y1="68" x2="58" y2="68" stroke="white" strokeWidth="1" />
      </svg>
    );
  }
  if (type === 'teen') {
    return (
      <svg viewBox="0 0 80 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <rect x="24" y="48" width="32" height="34" rx="5" fill="white" fillOpacity="0.9" />
        {/* Head */}
        <circle cx="40" cy="26" r="17" fill="white" fillOpacity="0.9" />
        {/* Hair - side parted */}
        <path d="M23 24c0-10 8-18 17-18s17 8 17 18" fill="#333" fillOpacity="0.7" />
        <path d="M24 24c1-8 7-14 14-15" stroke="#333" strokeWidth="2" fill="none" />
        {/* Eyes */}
        <circle cx="33" cy="26" r="2" fill="#333" />
        <circle cx="47" cy="26" r="2" fill="#333" />
        {/* Glasses */}
        <rect x="29" y="22" width="9" height="8" rx="4" stroke="#333" strokeWidth="1.2" fill="none" />
        <rect x="42" y="22" width="9" height="8" rx="4" stroke="#333" strokeWidth="1.2" fill="none" />
        <line x1="38" y1="26" x2="42" y2="26" stroke="#333" strokeWidth="1" />
        {/* Smile */}
        <path d="M35 34c2 2 8 2 10 0" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Notebook */}
        <rect x="12" y="54" width="16" height="22" rx="2" fill="#FDB813" fillOpacity="0.8" />
        <line x1="15" y1="58" x2="25" y2="58" stroke="white" strokeWidth="1" />
        <line x1="15" y1="61" x2="25" y2="61" stroke="white" strokeWidth="1" />
        <line x1="15" y1="64" x2="22" y2="64" stroke="white" strokeWidth="1" />
        {/* Pen in hand */}
        <rect x="55" y="50" width="3" height="20" rx="1.5" fill="white" fillOpacity="0.5" transform="rotate(15 55 50)" />
      </svg>
    );
  }
  // senior
  return (
    <svg viewBox="0 0 80 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Body - formal */}
      <rect x="22" y="46" width="36" height="36" rx="5" fill="white" fillOpacity="0.9" />
      {/* Tie */}
      <polygon points="40,50 37,60 40,72 43,60" fill="#981F1F" fillOpacity="0.7" />
      {/* Head */}
      <circle cx="40" cy="24" r="17" fill="white" fillOpacity="0.9" />
      {/* Hair - neat */}
      <path d="M23 22c0-10 8-17 17-17s17 7 17 17" fill="#333" fillOpacity="0.8" />
      {/* Eyes - determined */}
      <ellipse cx="33" cy="24" rx="2" ry="1.8" fill="#333" />
      <ellipse cx="47" cy="24" rx="2" ry="1.8" fill="#333" />
      {/* Eyebrows */}
      <line x1="30" y1="20" x2="36" y2="21" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="44" y1="21" x2="50" y2="20" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      {/* Confident smile */}
      <path d="M34 32c2 3 10 3 12 0" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Trophy */}
      <path d="M58 52 L62 52 L64 62 L60 66 L56 62 Z" fill="#FDB813" fillOpacity="0.9" />
      <rect x="58" y="66" width="4" height="3" fill="#FDB813" fillOpacity="0.7" />
      <rect x="56" y="69" width="8" height="2" rx="1" fill="#FDB813" fillOpacity="0.6" />
      {/* Star on trophy */}
      <circle cx="60" cy="57" r="2" fill="white" fillOpacity="0.8" />
    </svg>
  );
}

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
  { q: 'How does the test series work with the books?', a: 'Every single question in our test series comes directly from Vipin Sir\'s custom NCERT books. Study the chapter, take the test — 100% alignment, zero surprises. This is how 350+ students cleared UP Police from a single center.' },
  { q: 'Is ₹100/month really the full price?', a: 'Yes. ₹100/month (₹1,200/year) gives you access to the complete Junior IAS ecosystem — books and test series. Vipin Sir deliberately priced it so that no rural or semi-urban family is ever priced out of quality education.' },
  { q: 'Who is Vipin Sir?', a: 'Vipin Sir is a B.Tech + M.Tech Aeronautical Engineer who left a BSF government job to teach. He taught at Drishti IAS (Delhi) before founding Perfect Classes in Noorpur in 2016. Starting with just 5 students, he built it to 5,000 students with 350+ UP Police and 125+ Super TET selections — all from one center, purely by word of mouth.' },
  { q: 'Can I access tests on mobile?', a: 'Yes. Our platform is fully mobile-optimised — attempt tests anytime, anywhere, even on basic smartphones with slow internet.' },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Test Series", link: "/#test-series" },
    { name: "Books", link: "/#books" },
    { name: "Mission", link: "/#mission" },
    { name: "Results", link: "/#results" },
    { name: "About", link: "/#about" },
  ];

  return (
    <div className="relative w-full z-50">
      <ResizableNav>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3">
            <a href="tel:+919876543210" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-[#555] hover:text-[#981F1F] hover:bg-[#FFF1F1] transition-colors" title="Call Us">
              <Phone size={16} />
            </a>
            <NavbarButton variant="brand" href="/#test-series">Start Free Test</NavbarButton>
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
                Start Free Test
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNav>
    </div>
  );
}

function InteractiveHero() {
  const floatingIcons = [
    { icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50', size: 24, radius: 140, startAngle: 0 },
    { icon: Target, color: 'text-[#981F1F]', bg: 'bg-[#981F1F]/10', size: 28, radius: 180, startAngle: 60 },
    { icon: Award, color: 'text-[#FDB813]', bg: 'bg-[#FDB813]/20', size: 32, radius: 120, startAngle: 120 },
    { icon: Zap, color: 'text-purple-500', bg: 'bg-purple-50', size: 22, radius: 160, startAngle: 180 },
    { icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-50', size: 26, radius: 130, startAngle: 240 },
    { icon: Layers, color: 'text-orange-500', bg: 'bg-orange-50', size: 24, radius: 170, startAngle: 300 },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] bg-[#FAFAFA] flex items-center overflow-hidden pt-24 sm:pt-20 lg:pt-16">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(152,31,31,0.05),transparent_50%)] z-0" />
      <div className="absolute inset-0 z-0">
        <InteractiveGridPattern
          className="[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
          width={40}
          height={40}
          squares={[24, 24]}
          squaresClassName="hover:fill-[#981F1F]/20"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text & CTA */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 border border-[#981F1F]/20">
            <Trophy size={14} /> Junior IAS Program
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#121212] leading-[1.1] mb-6 tracking-tight">
            School Mein Padho, <br />
            <span className="text-[#981F1F]">IAS Ki Tayyari Karo.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#555] mb-8 sm:mb-10 max-w-lg leading-relaxed">
            From the institute that produced 350+ UP Police & 125+ Super TET selections — Vipin Sir's Junior IAS program builds UPSC-level foundations from Class 6 itself. Strictly NCERT. Just ₹100/month.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <div className="relative flex-grow">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email" 
                placeholder="Enter email to begin" 
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#981F1F] focus:ring-2 focus:ring-[#981F1F]/20 bg-white shadow-sm transition-all text-[#121212]"
              />
            </div>
            <Link to="/test-series" className="bg-[#981F1F] hover:bg-[#7a1818] text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap">
              Start Free Test <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-sm text-[#666] font-medium">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
              ))}
            </div>
            <p><span className="text-[#121212] font-bold">350+ selections</span> from one center</p>
          </div>
        </motion.div>

        {/* Right Column: Interactive Orbital Animation */}
        <div className="hidden lg:flex justify-center items-center relative h-[600px] w-full">
          {/* Central Hub */}
          <div className="absolute z-20 w-32 h-32 bg-white rounded-full shadow-2xl border-4 border-[#FFF1F1] flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-[#981F1F] flex items-center justify-center">
              <span className="text-white font-bold text-4xl">P</span>
            </div>
          </div>
          
          {/* Dotted orbits */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border border-dashed border-gray-300 absolute" />
            <div className="w-[450px] h-[450px] rounded-full border border-dashed border-gray-200 absolute" />
          </div>

          {/* Orbiting Icons */}
          {floatingIcons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2"
                initial={{ rotate: item.startAngle }}
                animate={{ rotate: item.startAngle + 360 }}
                transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                style={{ width: `${item.radius * 2}px`, height: `${item.radius * 2}px`, marginLeft: `-${item.radius}px`, marginTop: `-${item.radius}px` }}
              >
                {/* Counter-rotate the inner content so it doesn't spin upside down */}
                <motion.div 
                  className={`absolute -top-6 left-1/2 -ml-6 w-12 h-12 rounded-full ${item.bg} border border-white shadow-lg flex items-center justify-center`}
                  initial={{ rotate: -item.startAngle }}
                  animate={{ rotate: -(item.startAngle + 360) }}
                  transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                >
                  <Icon size={item.size} className={item.color} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className="bg-white border-b border-gray-100 py-6 overflow-hidden">
      <Marquee className="[--gap:1rem]" style={{"--duration": "20s", "--gap": "1rem"} as React.CSSProperties}>
        {QUICK_LINKS.map((l, i) => (
          <button key={i}
            className="flex items-center gap-2 bg-gray-50 hover:bg-[#981F1F] hover:text-white text-[#333] text-sm font-medium px-5 py-2.5 rounded-full border border-gray-200 hover:border-[#981F1F] transition-all whitespace-nowrap shadow-sm hover:shadow-md hover:-translate-y-0.5 mx-2 shrink-0">
            <span className="text-base">{l.icon}</span>{l.label}
          </button>
        ))}
      </Marquee>
    </section>
  );
}

function TestSeriesExplorer() {
  const [tab, setTab] = useState<'class' | 'exam'>('class');
  const tabs: { key: 'class' | 'exam'; label: string }[] = [
    { key: 'class', label: 'By Class' },
    { key: 'exam', label: 'By Competitive Exam' },
  ];
  return (
    <section id="test-series" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-white border border-[#981F1F]/20 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <Target size={12} /> Junior IAS Test Series
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121212]">NCERT-Based <span className="text-[#981F1F]">Test Series</span></h2>
          <p className="text-[#555] mt-2 max-w-xl mx-auto">Every question comes directly from Vipin Sir's NCERT-based books. Study the book, take the test — no surprises, only results.</p>
        </div>
        {/* Tab bar */}
        <div className="flex justify-center mb-10 mx-auto px-2">
          <div className="flex flex-wrap justify-center bg-white border border-gray-200 rounded-2xl p-1 gap-1 max-w-full">
            {tabs.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${tab === t.key ? 'bg-[#981F1F] text-white shadow' : 'text-[#555] hover:bg-gray-50'}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'class' && (
            <motion.div key="class" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BY_CLASS_SERIES.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#981F1F]/30 transition-all duration-300 relative overflow-hidden flex flex-col">

                  {/* Visual Header with Gradient + Student Illustration */}
                  <div className={`relative h-36 bg-gradient-to-br ${s.gradient} flex items-end justify-between px-5 pb-4`}>
                    {/* Decorative shapes */}
                    <div className="absolute top-3 right-3 w-24 h-24 rounded-full bg-white/10" />
                    <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-white/5 -translate-x-4 -translate-y-4" />

                    <div className="relative z-10 flex flex-col">
                      <span className="text-white text-3xl font-extrabold leading-none">Class {s.class}</span>
                    </div>

                    {/* Student Illustration */}
                    <div className="relative z-10 group-hover:scale-105 transition-transform duration-500">
                      <StudentIllustration type={s.illustration} className="w-20 h-24 drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-xs font-bold text-[#981F1F] mb-2 italic">"{s.tagline}"</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {s.label.split(', ').map(subj => (
                        <span key={subj} className="text-[10px] bg-gray-50 text-[#555] border border-gray-200 px-2 py-0.5 rounded-md whitespace-nowrap">{subj}</span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                      <span className="text-sm text-[#666]"><span className="font-bold text-[#981F1F]">{s.tests}+</span> Tests</span>
                      <button className="text-sm text-white font-semibold flex items-center gap-1 group-hover:gap-2 transition-all bg-[#981F1F] hover:bg-[#7a1818] px-4 py-1.5 rounded-lg shadow-sm">
                        View <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {tab === 'exam' && (
            <motion.div key="exam" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {BY_EXAM_SERIES.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  {/* Gradient Header */}
                  <div className={`relative h-36 bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10" />
                    <div className="absolute bottom-2 left-4 w-10 h-10 rounded-full bg-white/10" />
                    <div className="relative z-10 text-center">
                      <span className="text-5xl block mb-2">{s.emoji}</span>
                      <span className="text-white font-extrabold text-xl tracking-wide">{s.badge}</span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-[#121212] text-lg mb-2">{s.title}</h3>
                    <p className="text-sm text-[#555] mb-5 leading-relaxed">{s.desc}</p>
                    <div className="text-2xl font-extrabold text-[#981F1F] mb-1">{s.tests}+</div>
                    <div className="text-xs text-[#666] mb-5">Mock Tests Available</div>
                    <button className="w-full bg-[#981F1F] text-white font-semibold py-3 rounded-xl hover:bg-[#7a1818] transition-colors shadow-sm group-hover:shadow-md">
                      Explore Series
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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
  const [lang, setLang] = useState<'Hindi' | 'English'>('Hindi');
  return (
    <section id="books" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
            <BookOpen size={12} /> Pure NCERT Books
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight mb-4">
            Wahi NCERT, <span className="text-[#981F1F]">Jo Schools Nahi Padhate.</span>
          </h2>
          <p className="text-[#555] max-w-2xl mx-auto mt-2 text-lg">
            Written by Vipin Sir himself — one book per class covering History, Geography, Constitution, Science & Static GK. The same NCERT foundation that decides UPSC, NDA, and every state exam. No market junk, only what matters.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex bg-gray-50 border border-gray-200 rounded-xl p-1">
            <button 
              onClick={() => setLang('Hindi')}
              className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${lang === 'Hindi' ? 'bg-[#981F1F] text-white shadow' : 'text-[#555] hover:text-[#121212]'}`}>
              Hindi Medium
            </button>
            <button 
              onClick={() => setLang('English')}
              className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${lang === 'English' ? 'bg-[#981F1F] text-white shadow' : 'text-[#555] hover:text-[#121212]'}`}>
              English Medium
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOOKS.slice(0, 4).map((b, i) => (
            <div key={i} className="bg-white border text-center border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="h-40 bg-[#FAFAFA] rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-gray-50">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(152,31,31,0.05),transparent_70%)]" />
                 <BookOpen size={48} className="text-[#981F1F] opacity-80" />
                 <div className="absolute bottom-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-[#121212] rounded shadow-sm uppercase border border-gray-100">{lang}</div>
              </div>
              <div className="text-xs font-bold text-[#FDB813] tracking-wider mb-2">{b.class}</div>
              <h3 className="font-bold text-[#121212] text-xl mb-3">{b.title}</h3>
              <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                {b.tags.map(t => (
                  <span key={t} className="text-[10px] bg-gray-50 text-[#555] border border-gray-200 px-2 py-1 rounded-md whitespace-nowrap">{t}</span>
                ))}
              </div>
              <button className="w-full bg-[#121212] text-white hover:bg-[#333] font-semibold py-2.5 rounded-xl transition-colors">
                Order Now
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
           <button className="text-[#981F1F] font-semibold hover:underline flex items-center gap-1">View All Classes (6-12) <ArrowRight size={16} /></button>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section id="mission" className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8">
               <h3 className="text-white font-bold text-xl flex items-center gap-2 mb-3"><MapPin className="text-[#FDB813]" size={20} /> 200 Gaon, Ek Mission</h3>
               <p className="text-white/60 text-sm leading-relaxed">
                 Vipin Sir is personally visiting 200 villages in a vanity van — sleeping in it, eating on the road — to sit with parents and show them what their children deserve. No grand seminar halls, no marketing gimmicks. Just a teacher going door-to-door proving that ₹100/month can change a family's future forever.
               </p>
            </div>
          </div>

          <div className="relative h-[550px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
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
        </div>
      </div>
    </section>
  );
}

function ResultsShowcase() {
  return (
    <section id="results" className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#981F1F]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 bg-[#981F1F]/10 text-[#FDB813] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#FDB813]/20">
            <Award size={12} /> Wall of Fame
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Noorpur Se <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] to-orange-500">Sarkari Naukri Tak.</span>
          </h2>
        </div>
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

function WhyUs() {
  return (
    <section id="about" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Why <span className="text-[#FDB813]">Junior IAS?</span></h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto">Because your school won't teach you what UPSC will ask. We fill that gap — from Class 6 itself.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-[#FDB813]/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={26} className="text-[#FDB813]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: CheckCircle, label: 'Pure NCERT — no junk content' },
            { icon: Layers, label: 'Class 6 to 12, one system' },
            { icon: Zap, label: 'Just ₹100/month' },
            { icon: Users, label: 'Written by Vipin Sir himself' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3 text-white/70">
                <Icon size={18} className="text-[#FDB813] flex-shrink-0" />
                <span className="text-sm">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const firstRow = [...TESTIMONIALS, ...TESTIMONIALS].slice(0, 4);
  const secondRow = [...TESTIMONIALS, ...TESTIMONIALS].slice(4, 8);

  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Header & Context */}
        <div>
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
            <Star size={12} /> Student Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-extrabold text-[#121212] leading-tight mb-6">
            Unki Kahani, <span className="text-[#981F1F]">Apni Zubaani.</span>
          </h2>
          <p className="text-[#555] text-lg leading-relaxed mb-8 max-w-lg">
            From small towns to government jobs — these are real students and parents from Noorpur and nearby villages who trusted Vipin Sir's system.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200" />
              ))}
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#FDB813] text-[#FDB813]" />)}
              </div>
              <p className="font-bold text-sm text-[#121212]">Trusted by 5,000+ families</p>
            </div>
          </div>
        </div>

        {/* Right Side: Animated Vertical Marquee */}
        <div className="relative flex h-[400px] sm:h-[500px] lg:h-[600px] w-full flex-row items-center justify-center overflow-hidden [perspective:1000px] [transform-style:preserve-3d]">
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 flex flex-col items-center px-2">
            <Marquee pauseOnHover vertical className="[--duration:30s] [--gap:1.5rem]" style={{"--gap": "1.5rem"} as React.CSSProperties}>
              {firstRow.map((t, i) => (
                <div key={`col1-${i}`} className="w-full max-w-sm lg:w-80 cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-row items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#FFF1F1] text-[#981F1F] font-bold text-lg shrink-0">{t.avatar}</div>
                    <div className="flex flex-col">
                      <figcaption className="text-base font-bold text-[#121212]">{t.name}</figcaption>
                      <p className="text-xs font-bold text-[#FDB813]">{t.tag}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.stars)].map((_, idx) => <Star key={idx} size={14} className="fill-[#FDB813] text-[#FDB813]" />)}
                  </div>
                  <blockquote className="mt-2 text-sm text-[#555] italic leading-relaxed">{t.text}</blockquote>
                </div>
              ))}
            </Marquee>
          </div>
          
          <div className="absolute inset-y-0 right-0 hidden md:flex w-1/2 flex-col items-center pt-16 lg:pt-24 px-2">
            <Marquee reverse pauseOnHover vertical className="[--duration:35s] [--gap:1.5rem]" style={{"--gap": "1.5rem"} as React.CSSProperties}>
              {secondRow.map((t, i) => (
                <div key={`col2-${i}`} className="w-full max-w-sm lg:w-80 cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-row items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#FFF1F1] text-[#981F1F] font-bold text-lg shrink-0">{t.avatar}</div>
                    <div className="flex flex-col">
                      <figcaption className="text-base font-bold text-[#121212]">{t.name}</figcaption>
                      <p className="text-xs font-bold text-[#FDB813]">{t.tag}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.stars)].map((_, idx) => <Star key={idx} size={14} className="fill-[#FDB813] text-[#FDB813]" />)}
                  </div>
                  <blockquote className="mt-2 text-sm text-[#555] italic leading-relaxed">{t.text}</blockquote>
                </div>
              ))}
            </Marquee>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#FAFAFA] to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#FAFAFA] to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
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
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121212]">The Perfect Classes <span className="text-[#981F1F]">Legacy</span></h2>
          <p className="text-[#555] mt-2">From 5 students in Noorpur to thousands of government selections — built on trust, not marketing.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="text-center bg-gray-50/50 p-4 sm:p-0 rounded-2xl sm:bg-transparent">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#981F1F]">{counts[i].toLocaleString()}{s.suffix}</div>
              <div className="mt-2 text-xs sm:text-sm text-[#555] font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnrollCTA() {
  return (
    <section className="py-20 bg-[#981F1F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block bg-[#FDB813] text-[#121212] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
          Just ₹100/Month — No Excuses
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">
          Aapke Bachche Ka Future,<br />Sirf ₹100 Mein.
        </h2>
        <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
          The same NCERT foundation that IAS toppers build in Delhi — now available for every village, every family. 350+ selections prove this system works.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#FDB813] text-[#121212] font-bold px-8 py-4 rounded-xl hover:bg-[#e5a810] transition-colors flex items-center gap-2 text-lg">
            Start Free Test <ArrowRight size={18} />
          </button>
          <a href="tel:+919876543210" className="bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-xl transition-colors flex items-center gap-2 border border-white/20">
            <Phone size={18} /> Call Us
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#121212]">Frequently Asked <span className="text-[#981F1F]">Questions</span></h2>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-[#121212] hover:text-[#981F1F] transition-colors"
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

function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#981F1F] flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-white text-lg">Perfect Classes</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">From Noorpur to every village — building IAS-level foundations for India's future since 2016.</p>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={13} /> +91 98765 43210</a>
              <a href="mailto:info@perfectclassesnoorpur.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={13} /> info@perfectclassesnoorpur.com</a>
              <span className="flex items-center gap-2"><MapPin size={13} /> Noorpur, Bijnor, Uttar Pradesh</span>
            </div>
          </div>
          {/* Test Series */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/70">Test Series</h4>
            {['Class 6–8', 'Class 9–10', 'Class 11–12', 'NDA', 'CUET', 'Agniveer'].map(l => (
              <Link key={l} to={`/test-series?filter=${l.replace(' ', '-').toLowerCase()}`} className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">{l}</Link>
            ))}
          </div>
          {/* Subjects (Now Links) */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/70">Explore</h4>
            <Link to="/#books" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">Our Books</Link>
            <Link to="/#mission" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">200-Village Tour</Link>
            <Link to="/#test-series" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">Junior IAS Tests</Link>
            <Link to="/#about" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">About Vipin Sir</Link>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/70">Quick Links</h4>
            <Link to="/contact" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">Contact Us</Link>
            <Link to="/privacy-policy" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">Terms of Use</Link>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© 2026 Perfect Classes. All rights reserved.</p>
          <p className="text-xs text-white/40">Designed with ❤️ for Indian students</p>
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
      <MissionSection />
      <ResultsShowcase />
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

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
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen font-sans bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test-series" element={<PagePlaceholder title="All Test Series" />} />
            <Route path="/results" element={<PagePlaceholder title="Our Hall of Fame" />} />
            <Route path="/about" element={<PagePlaceholder title="About Perfect Classes" />} />
            <Route path="/blog" element={<PagePlaceholder title="Latest Articles & Tips" />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/subject/:subjectId" element={<PagePlaceholder title="Subject Details" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
