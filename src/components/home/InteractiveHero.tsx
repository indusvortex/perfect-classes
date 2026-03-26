import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Play, X, TrendingUp } from 'lucide-react';
import { useLang, T } from '@/i18n/translations';

// ─── Shared photo card size ───────────────────────────────────────────────────
//  All three cards use identical dimensions so they look uniform.

interface MilestoneCardProps {
  src: string;
  alt: string;
  label: string;
  sublabel: string;
  accentColor: string; // border + gradient tint
  animate?: object;
  transition?: object;
  className?: string;
}

function MilestoneCard({ src, alt, label, sublabel, accentColor, animate, transition, className = '' }: MilestoneCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={`origin-center cursor-pointer ${className}`}
      animate={animate ?? { y: [0, -7, 0] }}
      transition={transition ?? { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.08, rotate: 0, y: -15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card */}
      <div
        className="rounded-2xl overflow-hidden bg-white relative group/card"
        style={{
          width: 240, // Wider for YouTube style
          border: `3px solid ${accentColor}`,
        }}
      >
        {/* Hardware-accelerated shadow layers (avoid animating boxShadow directly) */}
        <div className="absolute inset-0 shadow-[0_8px_30px_rgba(0,0,0,0.15)] pointer-events-none transition-opacity duration-300" style={{ opacity: isHovered ? 0 : 1 }} />
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-300" style={{ boxShadow: `0 20px 50px ${accentColor}60`, opacity: isHovered ? 1 : 0 }} />

        {/* Sparkle effect on hover */}
        {isHovered && (
          <motion.div
            className="absolute top-2 right-2 z-10"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: [0, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-5 h-5 text-yellow-300 drop-shadow-md">✨</div>
          </motion.div>
        )}

        {/* Photo — Horizontal 16:9 aspect ratio like YouTube */}
        <div className="relative aspect-video w-full">
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 will-change-transform"
            style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
          />
          {/* gradient overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `linear-gradient(to top, ${accentColor}DD 0%, ${accentColor}44 50%, transparent 100%)`,
              opacity: isHovered ? 1 : 0.85
            }}
          />
        </div>
        {/* Label bar */}
        <div className="px-3 py-2 text-center transition-all duration-300" style={{ background: accentColor }}>
          <p className="text-white font-bold text-[12px] leading-tight">{label}</p>
          <p className="text-white/90 text-[9px] mt-0.5">{sublabel}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────

export function InteractiveHero() {
  const [showVideo, setShowVideo] = useState(false);
  const { lang } = useLang();

  return (
    <>
    <section id="hero" className="relative overflow-hidden pt-20 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 bg-white min-h-screen flex items-center">
      {/* Dynamic brand color glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(152,31,31,0.12),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(253,184,19,0.10),transparent_45%),radial-gradient(ellipse_at_20%_80%,rgba(152,31,31,0.08),transparent_55%)] z-0" />

      {/* Vibrant dot-grid background */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#981F1F" fillOpacity="0.18" />
              <circle cx="18" cy="18" r="1" fill="#FDB813" fillOpacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>

        {/* Vibrant STATIC orbs with brand colors - No animation to prevent lag */}
        <div
          className="absolute rounded-full"
          style={{ width: 600, height: 600, top: '-12%', right: '-10%',
            background: 'radial-gradient(circle, rgba(152,31,31,0.15) 0%, rgba(152,31,31,0.08) 40%, transparent 70%)',
            opacity: 0.9 }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 450, height: 450, bottom: '0%', left: '-8%',
            background: 'radial-gradient(circle, rgba(253,184,19,0.18) 0%, rgba(253,184,19,0.08) 40%, transparent 70%)',
            opacity: 0.85 }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 320, height: 320, top: '35%', left: '45%',
            background: 'radial-gradient(circle, rgba(152,31,31,0.10) 0%, rgba(253,184,19,0.05) 50%, transparent 75%)',
            opacity: 0.7 }}
        />

        {/* Floating STATIC particles - No animation */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 2 === 0 ? 6 : 8,
              height: i % 2 === 0 ? 6 : 8,
              left: `${15 + i * 15}%`,
              top: `${15 + (i * 20) % 60}%`,
              background: i % 3 === 0 ? '#981F1F' : '#FDB813',
              opacity: 0.25
            }}
          />
        ))}

      </div>



      {/* DESKTOP ONLY: Floating milestone cards - hidden on mobile/tablet to prevent overlap */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden hidden xl:block">

        {/* Milestone 1 — Village / Gaon (top-left) */}
        <motion.div
          className="absolute top-[10%] left-[6%] xl:top-[8%] xl:left-[8%] 2xl:top-[6%] 2xl:left-[10%] scale-[0.9] xl:scale-[1] 2xl:scale-[1.15] origin-top-left will-change-transform"
          initial={{ opacity: 0, x: -50, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MilestoneCard
            src="/hero/gaon.jpg"
            alt="Vipin Sir in villages"
            label={lang === 'hi' ? 'गाँव से शुरुआत' : 'Village Roots'}
            sublabel={lang === 'hi' ? 'हर घर तक शिक्षा' : 'Education to every home'}
            accentColor="#E8D5C4"
            animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Milestone 2 — Junior IAS (top-right) */}
        <motion.div
          className="absolute top-[10%] right-[6%] xl:top-[8%] xl:right-[8%] 2xl:top-[6%] 2xl:right-[10%] scale-[0.9] xl:scale-[1] 2xl:scale-[1.15] origin-top-right"
          initial={{ opacity: 0, x: 50, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MilestoneCard
            src="/hero/junior-ias.jpg"
            alt="Junior IAS Program"
            label={lang === 'hi' ? 'जूनियर IAS' : 'Junior IAS'}
            sublabel={lang === 'hi' ? 'किताब + टेस्ट = रैंक' : 'Book + Test = Rank'}
            accentColor="#FFD4D4"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

      </div>

      {/* Main content - Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[calc(100vh-80px)] mt-4 sm:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[55%] xl:w-[50%] text-center lg:text-left pt-10 sm:pt-16 lg:pt-0"
        >
          {/* Badge */}
          <motion.span
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#981F1F] to-[#B52A2A] text-white text-xs font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full uppercase tracking-wider mb-4 sm:mb-6 shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FDB813] to-[#981F1F] opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <Trophy size={16} className="relative z-10" />
            <span className="relative z-10">{T[lang].badge}</span>
          </motion.span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-[#121212] leading-[1.25] mb-3 sm:mb-4 lg:mb-6 tracking-tight px-2">
            {T[lang].heading1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#981F1F] via-[#B52A2A] to-[#981F1F] animate-gradient">
              {T[lang].heading2}
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#555] mb-6 sm:mb-8 max-w-sm sm:max-w-lg lg:max-w-xl mx-auto leading-relaxed px-4">
            {T[lang].subtitle}
          </p>

          {/* Hero Video Thumbnail & CTA Side-by-Side on Desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full lg:w-auto mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="will-change-transform w-full sm:w-auto">
              <Link
                to="/#classes"
                className="bg-gradient-to-r from-[#981F1F] via-[#B52A2A] to-[#981F1F] hover:from-[#B52A2A] hover:via-[#981F1F] hover:to-[#B52A2A] text-white font-bold px-6 py-3 sm:px-8 lg:px-10 sm:py-3.5 lg:py-4 rounded-xl lg:rounded-2xl flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(152,31,31,0.3)] text-sm sm:text-base lg:text-lg group relative overflow-hidden"
              >
                <span className="relative z-10">{T[lang].ctaJoin}</span>
                <TrendingUp size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>

            <motion.div 
              className="group cursor-pointer flex items-center gap-4 bg-white/60 hover:bg-white backdrop-blur-sm px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow-md border border-gray-100"
              onClick={() => setShowVideo(true)}
              whileHover={{ y: -2 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#981F1F] to-[#B52A2A] flex items-center justify-center shadow-md group-hover:shadow-[0_0_15px_rgba(152,31,31,0.4)] transition-all">
                <Play size={16} className="text-white ml-0.5" fill="white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm text-[#121212] group-hover:text-[#981F1F] transition-colors leading-tight">{T[lang].videoTitle}</p>
                <p className="text-[10px] text-[#FDB813] font-bold uppercase">{T[lang].videoSubtitle}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Circular Orbits */}
        <motion.div 
          className="w-full lg:w-[45%] xl:w-[50%] flex items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] relative mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Outer Orbit */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[400px] lg:h-[400px] xl:w-[520px] xl:h-[520px] border border-gray-200 rounded-full flex items-center justify-center will-change-transform"
          >
            {/* Outer Planet 1 */}
            <div className="absolute top-0 -mt-2 sm:-mt-3 w-4 h-4 sm:w-6 sm:h-6 bg-[#FDB813] rounded-full shadow-[0_0_15px_rgba(253,184,19,0.5)]" />
            {/* Outer Planet 2 */}
            <div className="absolute bottom-0 -mb-2 sm:-mb-3 w-5 h-5 sm:w-6 sm:h-6 bg-[#981F1F] rounded-full shadow-[0_0_15px_rgba(152,31,31,0.5)]" />
          </motion.div>

          {/* Inner Orbit */}
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[260px] lg:h-[260px] xl:w-[320px] xl:h-[320px] border border-gray-200 rounded-full flex items-center justify-center will-change-transform"
            style={{ borderStyle: 'dashed' }}
          >
            {/* Inner Planet 1 */}
            <div className="absolute right-0 -mr-2 sm:-mr-2.5 w-4 h-4 sm:w-5 sm:h-5 bg-[#121212] rounded-full shadow-lg" />
          </motion.div>

          {/* Innermost decoration ring */}
          <div className="absolute w-[130px] h-[130px] sm:w-[180px] sm:h-[180px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[200px] border border-[#981F1F]/10 rounded-full bg-white/40 backdrop-blur-sm" />

          {/* Center Content: Perfect Classes Logo */}
          <motion.div 
            className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 lg:w-32 lg:h-32 xl:w-44 xl:h-44 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 sm:border-8 border-white overflow-hidden p-3 sm:p-5"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src="/logo.png" alt="Perfect Classes Logo" className="w-full h-auto object-contain z-10" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="font-extrabold text-[#981F1F] text-center text-sm leading-tight tracking-tight">PERFECT<br/>CLASSES</span>'; }} />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFF1F1] to-white z-0" />
          </motion.div>
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
