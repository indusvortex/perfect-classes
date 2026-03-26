import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, TrendingUp, Play, X, Sparkles } from 'lucide-react';
import { useLang, T } from '@/i18n/translations';

export function ModernHero() {
  const [showVideo, setShowVideo] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { lang } = useLang();

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-red-50/30 to-red-100/20">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#981F1F08_1px,transparent_1px),linear-gradient(to_bottom,#981F1F08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Floating gradient orbs - Crimson Red */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#981F1F]/15 to-[#DC143C]/15 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#DC143C]/15 to-[#981F1F]/15 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}


        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="text-center max-w-5xl mx-auto relative">

            {/* Floating Educational Icons around heading - only visible on desktop */}

            {/* Top Left */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute left-0 xl:left-2 top-0 text-5xl sm:text-6xl opacity-70 hidden lg:block"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                aria-hidden="true"
              >
                🧪
              </motion.div>
            )}

            {/* Top Right */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute right-0 xl:right-2 top-0 text-5xl sm:text-6xl opacity-70 hidden lg:block"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
                aria-hidden="true"
              >
                🎓
              </motion.div>
            )}

            {/* Middle Left - Books */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute left-0 xl:left-[-5%] top-[35%] text-6xl sm:text-7xl opacity-80 hidden lg:block"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
                aria-hidden="true"
              >
                📚
              </motion.div>
            )}

            {/* Left Lower */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute left-0 xl:left-[-3%] top-[55%] text-5xl opacity-70 hidden lg:block"
                animate={{
                  y: [0, 18, 0],
                  rotate: [0, -6, 0],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.8
                }}
                aria-hidden="true"
              >
                🔬
              </motion.div>
            )}

            {/* Middle Right - Building */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute right-0 xl:right-[-5%] top-[35%] text-6xl sm:text-7xl opacity-80 hidden lg:block"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.9
                }}
                aria-hidden="true"
              >
                🏛️
              </motion.div>
            )}

            {/* Right Lower */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute right-0 xl:right-[-3%] top-[55%] text-5xl opacity-70 hidden lg:block"
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.1
                }}
                aria-hidden="true"
              >
                📝
              </motion.div>
            )}

            {/* Bottom Center Left */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute left-[10%] bottom-[15%] text-5xl opacity-65 hidden lg:block motion-safe:block"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
                aria-hidden="true"
              >
                ✏️
              </motion.div>
            )}

            {/* Bottom Center Right */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute right-[10%] bottom-[15%] text-5xl opacity-65 hidden lg:block motion-safe:block"
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                aria-hidden="true"
              >
                🌍
              </motion.div>
            )}

            {/* Top Center */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute left-[50%] translate-x-[-50%] top-[-8%] text-4xl opacity-60 hidden lg:block motion-safe:block"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                aria-hidden="true"
              >
                ⭐
              </motion.div>
            )}

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#981F1F] to-[#DC143C] text-white px-6 py-3 rounded-full shadow-lg">
                <Trophy className="w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wide">{T[lang].badge}</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-5 leading-tight"
            >
              <span className="text-gray-900">{T[lang].heading1}</span>
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#981F1F] via-[#DC143C] to-[#981F1F] animate-gradient bg-[length:200%_auto]">
                  {T[lang].heading2}
                </span>
                {/* Underline decoration */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#981F1F] to-[#DC143C] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-medium"
            >
              {T[lang].subtitle}
            </motion.p>

            {/* Video Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto mb-8 px-4 sm:px-0"
            >
              <motion.div
                onClick={() => setShowVideo(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setShowVideo(true);
                  }
                }}
                whileHover={!prefersReducedMotion ? { scale: 1.02, y: -4 } : {}}
                whileTap={{ scale: 0.98 }}
                role="button"
                tabIndex={0}
                aria-label={`${T[lang]?.videoTitle || 'Watch video'}: ${T[lang]?.videoSubtitle || ''}`}
                className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl cursor-pointer group focus:outline-none focus:ring-4 focus:ring-[#981F1F]/50"
              >
                {/* Video thumbnail background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#981F1F]/20 to-[#DC143C]/20" />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#981F1F] to-[#DC143C] flex items-center justify-center shadow-2xl group-hover:shadow-[0_0_40px_rgba(152,31,31,0.6)] transition-all"
                    aria-hidden="true"
                  >
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white ml-1" />
                  </motion.div>
                </div>

                {/* Video info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-bold text-lg sm:text-xl mb-1">{T[lang].videoTitle}</p>
                  <p className="text-[#FDB813] text-sm font-semibold">{T[lang].videoSubtitle}</p>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
              </motion.div>
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center px-4 sm:px-0"
            >
              <Link to="/#classes" className="w-full sm:w-auto">
                <motion.button
                  whileHover={!prefersReducedMotion ? { scale: 1.05, y: -2 } : {}}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#981F1F] to-[#DC143C] text-white font-bold text-lg sm:text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#981F1F]/50 min-h-[44px]"
                  aria-label={T[lang]?.ctaJoin || 'Join the movement'}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#DC143C] to-[#981F1F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-3">
                    {T[lang]?.ctaJoin || 'Join the Movement'}
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
          >
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { scale: 0.9, opacity: 0 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-4xl aspect-video max-h-[90vh] bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close video"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/PLACEHOLDER_VIDEO_ID?autoplay=1"
                title={T[lang]?.videoTitle || 'Perfect Classes Introduction'}
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
