import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight,
  BookOpen,
  Target,
  Quote,
  Play
} from 'lucide-react';

// --- DATA STRUCTURES ---

const classesHierarchy = {
  categories: [
    {
      id: "foundation",
      name: "6-12 Foundation",
      description: "Building the bedrock for future success.",
      items: [
        { id: "class-6-8", name: "Classes 6-8", subjects: ["Mathematics", "Science", "Social Studies", "English"] },
        { id: "class-9-10", name: "Classes 9-10", subjects: ["Mathematics", "Science", "Social Studies", "English"] },
        { id: "class-11-12", name: "Classes 11-12", subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Humanities"] }
      ]
    },
    {
      id: "competitive",
      name: "Competitive Exams",
      description: "Targeted preparation for elite careers.",
      items: [
        { id: "ias", name: "IAS Foundation", subjects: ["General Studies", "History", "Geography", "Polity"] },
        { id: "nda", name: "NDA", subjects: ["Mathematics", "General Ability Test", "English"] },
        { id: "cuet", name: "CUET", subjects: ["Language", "Domain Specific", "General Test"] },
        { id: "agniveer", name: "Agniveer", subjects: ["General Knowledge", "General Science", "Mathematics"] }
      ]
    }
  ]
};

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "NDA Cadet",
    content: "The foundation I built in Class 9 and 10 at Perfect Classes was the key to cracking the NDA exam on my first attempt.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "IAS Aspirant",
    content: "Their integrated approach to NCERTs and competitive exams saved me years of preparation time. Truly elite faculty.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "CUET Top Percentiler",
    content: "The conceptual clarity provided here is unmatched. They don't just teach for exams; they build scholars.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];

// --- COMPONENTS ---

const Navbar = ({ currentRoute, setCurrentRoute }: { currentRoute: string, setCurrentRoute: (r: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'blogs', label: 'Journal' },
  ];

  return (
    <nav className={`fixed top-0 md:top-6 w-full md:w-[90%] md:left-[5%] max-w-7xl z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md md:rounded-full border-b md:border border-black/10 py-3 shadow-sm' : 'bg-transparent py-6 md:py-4'}`}>
      <div className="px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => setCurrentRoute('home')}>
            <span className="font-serif font-bold text-2xl tracking-tight text-[#121212]">
              Perfect<span className="text-[#981F1F] italic font-light ml-1">Classes.</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentRoute(item.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  currentRoute === item.id ? 'text-[#981F1F]' : 'text-gray-500 hover:text-[#121212]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-[#121212] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#981F1F] transition-colors duration-300 premium-shadow">
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#121212] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black/5 shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentRoute(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-left text-lg font-medium ${
                    currentRoute === item.id ? 'text-[#981F1F]' : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-black/5">
                <button className="w-full bg-[#121212] text-white px-8 py-4 rounded-full text-sm font-medium">
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(classesHierarchy.categories[0].id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FAFAFA]"
    >
      {/* Hero Section - Craft/Jitter Inspired */}
      <section className="pt-40 lg:pt-56 pb-20 px-6 lg:px-12 max-w-7xl mx-auto text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#981F1F]/20 bg-[#981F1F]/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#981F1F] animate-pulse"></span>
            <span className="text-[#981F1F] text-xs uppercase tracking-widest font-semibold">Admissions Open 2026</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-serif text-[#121212] leading-[0.95] tracking-tight mb-8">
            Mastery <br />
            <span className="italic font-light text-[#981F1F]">begins here.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            The definitive foundation for Class 6-12, architected specifically for future IAS, NDA, and CUET scholars.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#121212] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#981F1F] transition-colors duration-300 premium-shadow flex items-center justify-center gap-2">
              Start Journey <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto text-[#121212] px-8 py-4 rounded-full text-sm font-medium border border-black/10 hover:border-[#121212] transition-colors duration-300 bg-white"
            >
              Explore Programs
            </button>
          </div>
        </motion.div>
        
        {/* Floating Video/Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-20 w-full max-w-5xl relative rounded-2xl lg:rounded-[2rem] p-2 lg:p-4 bg-white/50 backdrop-blur-sm border border-black/5 premium-shadow"
        >
          <div className="aspect-video w-full rounded-xl lg:rounded-[1.5rem] overflow-hidden relative bg-[#121212] group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000" 
              alt="Students studying" 
              className="w-full h-full object-cover opacity-70 group-hover:opacity-60 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
            
            {/* Floating Stats Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl flex items-center gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="w-10 h-10 bg-[#981F1F]/10 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-[#981F1F]" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-0.5">Success Rate</p>
                <p className="text-xl font-serif text-[#121212] leading-none">94.8%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar - Clean & Minimal */}
      <section className="py-12 border-y border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
            {[
              { label: "Students Mentored", value: "50k+" },
              { label: "Elite Selections", value: "1,200+" },
              { label: "Expert Faculty", value: "150+" },
              { label: "Years Legacy", value: "15+" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h4 className="text-3xl lg:text-4xl font-serif text-[#121212] mb-2">{stat.value}</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Philosophy Section */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-[#121212] mb-6 tracking-tight">The Perfect Philosophy</h2>
          <p className="text-lg text-gray-500 font-light">How early foundations translate to ultimate competitive success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {[
            { step: "01", title: "Building the Core", subtitle: "Classes 6-10", desc: "Mastering NCERTs, developing analytical thinking, and building a strong conceptual base." },
            { step: "02", title: "Specialization", subtitle: "Classes 11-12", desc: "Deep diving into chosen streams while maintaining a competitive edge for board exams." },
            { step: "03", title: "Elite Preparation", subtitle: "IAS / NDA / CUET", desc: "Leveraging the 6-year foundation to tackle the nation's toughest exams with confidence." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group bg-white p-8 rounded-3xl border border-black/5 hover:border-black/10 transition-colors premium-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-black/5 flex items-center justify-center mb-8 font-serif text-xl text-[#121212]">
                {item.step}
              </div>
              <p className="text-[#981F1F] text-[10px] uppercase tracking-[0.2em] font-semibold mb-3">{item.subtitle}</p>
              <h3 className="text-2xl font-serif text-[#121212] mb-4">{item.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Classes / Programs Section */}
      <section id="programs" className="py-32 bg-[#121212] text-white rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">Academic Programs</h2>
              <p className="text-gray-400 font-light text-lg">Structured pathways designed to build foundational strength and competitive supremacy.</p>
            </div>
            
            {/* Category Filter - Pill Style */}
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
              {classesHierarchy.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-white text-[#121212] shadow-sm'
                      : 'bg-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {classesHierarchy.categories
                .find(c => c.id === activeCategory)?.items.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
                  >
                    <div className="mb-12">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                        <BookOpen className="w-5 h-5 text-[#FDB813]" />
                      </div>
                      <h3 className="text-2xl font-serif mb-6">{item.name}</h3>
                      <ul className="space-y-3">
                        {item.subjects.map((subject, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-3 text-gray-400 font-light text-sm">
                            <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span>
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between text-sm font-medium text-white group-hover:text-[#FDB813] transition-colors cursor-pointer">
                      <span>View Details</span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FDB813]/20 transition-colors">
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif text-[#121212] mb-6 tracking-tight">Stories of Excellence</h2>
            <p className="text-lg text-gray-500 font-light">Hear from the scholars who built their foundation with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-10 rounded-3xl border border-black/5 premium-shadow flex flex-col">
                <Quote className="w-8 h-8 text-[#981F1F]/20 mb-8" />
                <p className="text-lg text-gray-600 font-serif italic leading-relaxed mb-10 flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-black/5">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                  <div>
                    <h4 className="font-medium text-[#121212] text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-[#981F1F] font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const BlogsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FAFAFA] pt-40 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Laws of UX inspired Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-6xl md:text-8xl font-serif text-[#121212] mb-6 tracking-tight">The Journal</h1>
          <p className="text-xl text-gray-500 font-light">Insights, strategies, and updates from our expert faculty.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-5 py-2 rounded-full bg-[#121212] text-white text-sm font-medium">All</button>
            <button className="px-5 py-2 rounded-full bg-white border border-black/10 text-gray-600 hover:border-black/30 text-sm font-medium transition-colors">Strategy</button>
            <button className="px-5 py-2 rounded-full bg-white border border-black/10 text-gray-600 hover:border-black/30 text-sm font-medium transition-colors">Notifications</button>
            <button className="px-5 py-2 rounded-full bg-white border border-black/10 text-gray-600 hover:border-black/30 text-sm font-medium transition-colors">Topper Secrets</button>
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-4 pr-10 py-2.5 bg-white rounded-full border border-black/10 focus:outline-none focus:border-[#121212] transition-colors text-sm font-light"
            />
            <BookOpen className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Laws of UX inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <article key={item} className="group cursor-pointer flex flex-col h-full">
              <div className="aspect-[4/3] w-full bg-[#121212] rounded-[2rem] overflow-hidden relative mb-6 border border-black/5 premium-shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-[#981F1F]/20 to-transparent mix-blend-overlay z-10"></div>
                <img 
                  src={`https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&sig=${item}`} 
                  alt="Blog cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold text-[#121212] uppercase tracking-[0.2em]">
                  Strategy
                </div>
              </div>
              <div className="flex flex-col flex-grow px-2">
                <h2 className="text-2xl lg:text-3xl font-serif text-[#121212] mb-4 group-hover:text-[#981F1F] transition-colors leading-tight">
                  Decoding the NCERT: Why it's the Bible for IAS Preparation
                </h2>
                <p className="text-gray-500 font-light text-sm line-clamp-3 mb-6 flex-grow">
                  A comprehensive guide on how to read, analyze, and make notes from NCERT textbooks for maximum retention during competitive exams.
                </p>
                <div className="flex items-center justify-between border-t border-black/10 pt-4 mt-auto">
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Oct 24, 2023</span>
                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#121212] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Footer = () => (
  <footer className="bg-[#121212] text-white pt-24 pb-12 rounded-t-[3rem] lg:rounded-t-[4rem] mt-[-2rem] relative z-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <span className="font-serif font-bold text-3xl tracking-tight text-white">
              Perfect<span className="text-[#981F1F] italic font-light ml-1">Classes.</span>
            </span>
          </div>
          <p className="text-gray-400 font-light max-w-sm leading-relaxed">
            Elite educational platform bridging Class 6-12 foundations to IAS/NDA/CUET success. We build scholars, not just test-takers.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-white">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 font-light text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Faculty</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Results</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-white">Programs</h4>
          <ul className="space-y-4 text-gray-400 font-light text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Foundation (6-10)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Senior Secondary (11-12)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">IAS Foundation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">NDA Target</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Perfect Classes. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  return (
    <div className="font-sans text-[#121212] selection:bg-[#981F1F] selection:text-white">
      <Navbar currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
      
      <main>
        <AnimatePresence mode="wait">
          {currentRoute === 'home' && <HomePage key="home" />}
          {currentRoute === 'blogs' && <BlogsPage key="blogs" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
