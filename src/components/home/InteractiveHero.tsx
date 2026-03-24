import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen, CheckCircle, Trophy, Users, Zap, Play, X,
  TrendingUp, GraduationCap
} from 'lucide-react';
import { useLang, T } from '@/i18n/translations';

export function InteractiveHero() {
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
