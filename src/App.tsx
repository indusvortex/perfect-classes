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

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const NAV_LINKS = ['Home', 'Test Series', 'Results', 'About', 'Blog'];

const QUICK_LINKS = [
  { label: 'Class 6–8', icon: '📖' },
  { label: 'Class 9–10', icon: '📘' },
  { label: 'Class 11–12', icon: '📗' },
  { label: 'NDA', icon: '🎖️' },
  { label: 'CUET', icon: '🏛️' },
  { label: 'Agniveer', icon: '⚡' },
  { label: 'Mathematics', icon: '📐' },
  { label: 'Physics', icon: '⚗️' },
  { label: 'Biology', icon: '🧬' },
  { label: 'English', icon: '📝' },
  { label: 'GK / GS', icon: '🌍' },
  { label: 'Reasoning', icon: '🧩' },
];

const BY_CLASS_SERIES = [
  { class: '6–8', label: 'Foundation', subjects: ['Maths', 'Science', 'English', 'Social Studies'], tests: 120, badge: 'FOUNDATION' },
  { class: '9–10', label: 'Board Prep', subjects: ['Maths', 'Science', 'Social Studies', 'English'], tests: 180, badge: 'BOARD PREP' },
  { class: '11 PCM', label: 'Science Stream', subjects: ['Physics', 'Chemistry', 'Maths', 'English'], tests: 240, badge: 'PCM' },
  { class: '11 PCB', label: 'Medical Stream', subjects: ['Physics', 'Chemistry', 'Biology', 'English'], tests: 240, badge: 'PCB' },
  { class: '12 PCM', label: 'Board + JEE Prep', subjects: ['Physics', 'Chemistry', 'Maths'], tests: 300, badge: 'CLASS 12' },
  { class: '12 PCB', label: 'Board + NEET Prep', subjects: ['Physics', 'Chemistry', 'Biology'], tests: 300, badge: 'CLASS 12' },
];

const BY_EXAM_SERIES = [
  { exam: 'NDA', title: 'NDA Complete Test Series', desc: 'Section-wise + full-length mocks for Maths & GAT.', tests: 80, badge: 'NDA' },
  { exam: 'CUET', title: 'CUET Subject-wise Series', desc: 'Domain-specific tests for all 27 CUET subjects.', tests: 150, badge: 'CUET' },
  { exam: 'Agniveer', title: 'Agniveer All Trades', desc: 'Army, Navy & Air Force — complete mock test battery.', tests: 60, badge: 'AGNIVEER' },
];

const BY_SUBJECT = [
  { subject: 'Mathematics', icon: '📐', tests: 200, classes: 'Class 6–12 + NDA' },
  { subject: 'Physics', icon: '⚗️', tests: 150, classes: 'Class 9–12 + CUET' },
  { subject: 'Chemistry', icon: '🧪', tests: 140, classes: 'Class 9–12 + CUET' },
  { subject: 'Biology', icon: '🧬', tests: 120, classes: 'Class 9–12 + CUET' },
  { subject: 'English', icon: '📝', tests: 90, classes: 'Class 6–12 + NDA' },
  { subject: 'General Knowledge', icon: '🌍', tests: 100, classes: 'NDA + Agniveer' },
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
  { icon: FileText, title: '2000+ Tests', desc: 'Covering every class, subject, chapter, and competitive exam — always updated to the latest pattern.' },
  { icon: BarChart2, title: 'AI Performance Analysis', desc: 'Instant reports on accuracy, speed, and weak topics. Personalised improvement plan after every test.' },
  { icon: Shield, title: 'Exam-Accurate Pattern', desc: 'All tests designed to exactly mirror real exam formats — NDA, CUET, Agniveer, CBSE, and more.' },
];

const TESTIMONIALS = [
  { name: 'Rahul Yadav', tag: 'NDA Cleared 2025', stars: 5, text: '"The NDA test series is incredibly detailed. Daily practice shifted my accuracy from 60% to 89% in just 2 months."', avatar: 'RY' },
  { name: 'Meera Pillai', tag: 'CUET 99.1 %ile', stars: 5, text: '"I tried three platforms. Perfect Classes CUET tests were the only ones that matched the actual exam difficulty."', avatar: 'MP' },
  { name: 'Vikram Tiwari', tag: 'Class 10 — 96%', stars: 5, text: '"Chapter-wise tests after each topic made revision so systematic. I scored 40 marks more than my mock avg."', avatar: 'VT' },
  { name: 'Anjali Nair', tag: 'Agniveer Navy Selected', stars: 5, text: '"The Agniveer series had the exact question types. When I sat for the real exam it felt like another mock test."', avatar: 'AN' },
];

const STATS = [
  { value: 50000, suffix: '+', label: 'Students Enrolled' },
  { value: 2000, suffix: '+', label: 'Tests Available' },
  { value: 95, suffix: '%', label: 'Selection Rate' },
  { value: 15, suffix: '+', label: 'Years of Excellence' },
];

const FAQS = [
  { q: 'Which classes does Perfect Classes cover?', a: 'We cover Classes 6 to 12 (all subjects) plus competitive exams — NDA, CUET, and Agniveer.' },
  { q: 'Are the test series updated for the latest pattern?', a: 'Yes. Our expert team updates all tests every academic year to match the current NDA/CUET/CBSE pattern.' },
  { q: 'Can I access tests on mobile?', a: 'Absolutely. Our platform is fully mobile-optimised — attempt tests anytime, anywhere.' },
  { q: 'Is there a free trial?', a: 'Yes! You can attempt 5 full-length tests for free — no credit card required.' },
  { q: 'Do you provide solutions and analysis?', a: 'Every test includes step-by-step solutions and a detailed performance report with rank, accuracy, and topic-wise breakdown.' },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Test Series", link: "/#test-series" },
    { name: "Results", link: "/#results" },
    { name: "About", link: "/#about" },
    { name: "Blog", link: "/blog" },
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
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-[#121212] font-semibold text-lg block py-3 border-b border-gray-100 w-full hover:text-[#981F1F] transition-colors"
              >
                {item.name}
              </a>
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
    <section id="hero" className="relative min-h-[90vh] bg-[#FAFAFA] flex items-center overflow-hidden pt-16">
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
            <Trophy size={14} /> India's Premier Coaching
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#121212] leading-[1.1] mb-6 tracking-tight">
            Score More. <br />
            <span className="text-[#981F1F]">Every Subject.</span>
          </h1>
          <p className="text-lg text-[#555] mb-10 max-w-lg leading-relaxed">
            A collaborative learning ecosystem extending beyond the classroom. From Foundation to NDA, prepare with India's most rigorous interactive test series.
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
            <p>Join <span className="text-[#121212] font-bold">50,000+</span> students</p>
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
  const [tab, setTab] = useState<'class' | 'exam' | 'subject'>('class');
  const tabs: { key: 'class' | 'exam' | 'subject'; label: string }[] = [
    { key: 'class', label: 'By Class' },
    { key: 'exam', label: 'By Competitive Exam' },
    { key: 'subject', label: 'By Subject' },
  ];
  return (
    <section id="test-series" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-white border border-[#981F1F]/20 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <Target size={12} /> Test Series
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121212]">Explore Our <span className="text-[#981F1F]">Test Series</span></h2>
          <p className="text-[#555] mt-2 max-w-xl mx-auto">Find the right test series for your goal — filter by class, exam, or subject.</p>
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BY_CLASS_SERIES.map((s, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-card-hover hover:-translate-y-2 hover:border-[#981F1F]/30 transition-all duration-300 p-6 relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#981F1F] to-[#FDB813] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#FFF1F1] group-hover:bg-[#981F1F] rounded-xl flex items-center justify-center transition-colors duration-300">
                      <BookOpen size={22} className="text-[#981F1F] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-bold bg-[#FDB813]/20 text-[#8a6500] px-2.5 py-1 rounded-full">{s.badge}</span>
                  </div>
                  <h3 className="font-bold text-[#121212] flex items-center gap-2 group-hover:text-[#981F1F] transition-colors text-lg mb-1">
                    Class {s.class}
                  </h3>
                  <p className="text-sm text-[#555] mb-4">{s.label}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.subjects.map(sub => (
                      <span key={sub} className="text-xs bg-gray-100 text-[#444] px-2.5 py-1 rounded-full">{sub}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-[#666]"><span className="font-bold text-[#981F1F]">{s.tests}+</span> Tests</span>
                    <button className="text-sm text-[#981F1F] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all bg-[#981F1F]/5 group-hover:bg-[#981F1F]/10 px-3 py-1.5 rounded-lg">
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {tab === 'exam' && (
            <motion.div key="exam" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {BY_EXAM_SERIES.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-8 text-center">
                  <div className="w-16 h-16 bg-[#121212] rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Trophy size={28} className="text-[#FDB813]" />
                  </div>
                  <span className="text-xs font-bold bg-[#FDB813]/20 text-[#8a6500] px-3 py-1 rounded-full">{s.badge}</span>
                  <h3 className="font-bold text-[#121212] text-xl mt-4 mb-2">{s.title}</h3>
                  <p className="text-sm text-[#555] mb-6">{s.desc}</p>
                  <div className="text-2xl font-extrabold text-[#981F1F] mb-1">{s.tests}+</div>
                  <div className="text-xs text-[#666] mb-6">Mock Tests Available</div>
                  <button className="w-full bg-[#981F1F] text-white font-semibold py-3 rounded-xl hover:bg-[#7a1818] transition-colors">
                    Explore Series
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {tab === 'subject' && (
            <motion.div key="subject" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {BY_SUBJECT.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-5 text-center cursor-pointer group">
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#121212] text-sm mb-1">{s.subject}</h3>
                  <p className="text-xs text-[#666] mb-2">{s.classes}</p>
                  <span className="text-xs font-bold text-[#981F1F]">{s.tests}+ Tests</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] to-orange-500">Achievements.</span>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Perfect <span className="text-[#FDB813]">Classes?</span></h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto">Not just tests — a complete preparation ecosystem designed to get you selected.</p>
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
            { icon: CheckCircle, label: 'AI-powered analysis' },
            { icon: Layers, label: 'Chapter + Full-syllabus' },
            { icon: Zap, label: 'Instant results' },
            { icon: Users, label: 'Expert-curated questions' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Header & Context */}
        <div>
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
            <Star size={12} /> Student Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#121212] leading-tight mb-6">
            Stories of <span className="text-[#981F1F]">Excellence.</span>
          </h2>
          <p className="text-[#555] text-lg leading-relaxed mb-8 max-w-lg">
            Don't just take our word for it. Thousands of students have transformed their preparation and achieved top ranks across India using Perfect Classes.
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
              <p className="font-bold text-sm text-[#121212]">4.9/5 from 12,000+ reviews</p>
            </div>
          </div>
        </div>

        {/* Right Side: Animated Vertical Marquee */}
        <div className="relative flex h-[500px] lg:h-[600px] w-full flex-row items-center justify-center overflow-hidden [perspective:1000px] [transform-style:preserve-3d]">
          <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 flex flex-col items-center px-2">
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
          
          <div className="absolute inset-y-0 right-0 hidden lg:flex w-1/2 flex-col items-center pt-24 px-2">
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121212]">Impact, <span className="text-[#981F1F]">At Scale</span></h2>
          <p className="text-[#555] mt-2">Numbers that reflect the trust of thousands of students.</p>
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
          Limited Seats — 2026 Batch
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
          Start Your Preparation Today
        </h2>
        <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
          Join 50,000+ students who cracked NDA, CUET, Agniveer, and board exams with Perfect Classes.
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
            <p className="text-white/50 text-sm leading-relaxed mb-5">India's premier test series platform for Classes 6–12 and competitive exams.</p>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={13} /> +91 98765 43210</a>
              <a href="mailto:info@perfectclasses.in" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={13} /> info@perfectclasses.in</a>
              <span className="flex items-center gap-2"><MapPin size={13} /> Rajasthan, India</span>
            </div>
          </div>
          {/* Test Series */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/70">Test Series</h4>
            {['Class 6–8', 'Class 9–10', 'Class 11–12', 'NDA', 'CUET', 'Agniveer'].map(l => (
              <Link key={l} to={`/test-series?filter=${l.replace(' ', '-').toLowerCase()}`} className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">{l}</Link>
            ))}
          </div>
          {/* Subjects */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/70">Subjects</h4>
            {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'GK / General Studies'].map(l => (
              <Link key={l} to={`/subject/${l.replace(' / ', '-').toLowerCase()}`} className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">{l}</Link>
            ))}
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/70">Quick Links</h4>
            <Link to="/about" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">About Us</Link>
            <Link to="/results" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">Our Results</Link>
            <Link to="/blog" className="block text-sm text-white/50 hover:text-white mb-2 transition-colors">Blog</Link>
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

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
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
            <Route path="/contact" element={<PagePlaceholder title="Contact Support" />} />
            <Route path="/privacy-policy" element={<PagePlaceholder title="Privacy Policy" />} />
            <Route path="/terms-of-use" element={<PagePlaceholder title="Terms of Use" />} />
            <Route path="/subject/:subjectId" element={<PagePlaceholder title="Subject Details" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
