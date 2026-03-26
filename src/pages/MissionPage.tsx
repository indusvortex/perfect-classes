import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, ArrowRight, Check, X } from 'lucide-react';
import { useLang } from '@/i18n/translations';

// Helper component
/* ── Meet Vipin Sir — WebVeda-style: text left, cycling photo right ── */
function VipinSirSection({ lang }: { lang: string }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const [imageError, setImageError] = useState(false);
  const photos = ['/hero/vipin-sir-1.png', '/hero/vipin-sir-2.png', '/hero/vipin-sir-3.png'];

  useEffect(() => {
    const t = setInterval(() => setPhotoIdx(p => (p + 1) % photos.length), 3500);
    return () => clearInterval(t);
  }, [photos.length]);

  return (
    <section id="vipin-sir" className="relative py-12 sm:py-20 md:py-28 bg-[#FFF8F0] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Mobile: Photo on top, text below */}
        <div className="lg:hidden flex flex-col items-center text-center">
          {/* Mobile Photo - Large portrait */}
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="w-full max-w-sm mb-6">
            {/* Mobile blob photo */}
            <div className="relative flex justify-center items-end mx-auto" style={{ width: 280, height: 340 }}>
              <motion.div className="absolute" style={{ width: 240, height: 240, top: 20, left: 20 }}
                animate={{ rotate: [0, 6, 0, -6, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path fill="#FDB813" opacity="0.25" d="M42.7,-65.3C54.6,-56.1,62.8,-42.4,67.3,-27.7C71.8,-13,72.5,2.7,68.4,16.8C64.3,30.9,55.4,43.4,43.5,52.5C31.6,61.6,16.8,67.3,0.8,66.2C-15.2,65.1,-30.4,57.2,-43.1,47C-55.8,36.7,-66.1,24,-70,9.3C-73.9,-5.4,-71.4,-22.1,-63.2,-35.3C-55,-48.5,-41.1,-58.2,-27,-63.5C-12.9,-68.8,1.4,-69.7,15.6,-67.1C29.8,-64.5,30.8,-74.5,42.7,-65.3Z" transform="translate(100 100)" />
                </svg>
              </motion.div>
              <motion.div className="absolute" style={{ width: 260, height: 260, top: 10, left: 5 }}
                animate={{ rotate: [0, -8, 0, 8, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path fill="#981F1F" opacity="0.18" d="M47.4,-71.4C59.7,-62.3,67,-46.1,71.9,-29.5C76.8,-12.9,79.2,4.1,74.7,18.9C70.2,33.7,58.9,46.3,45.5,55.7C32.1,65.1,16,71.2,-0.9,72.5C-17.8,73.8,-35.6,70.4,-49.1,61.1C-62.5,51.8,-71.7,36.7,-75.2,20.3C-78.7,3.9,-76.6,-13.8,-69.7,-29.1C-62.8,-44.4,-51.2,-57.3,-37.5,-66.2C-23.8,-75.1,-7.9,-80.1,7.2,-79.2C22.3,-78.3,35.1,-80.5,47.4,-71.4Z" transform="translate(100 100)" />
                </svg>
              </motion.div>
              <div className="relative z-10 w-full flex justify-center items-end" style={{ height: 340 }}>
                <AnimatePresence mode="wait">
                  <motion.img key={photoIdx} src={photos[photoIdx]} alt="Vipin Sir"
                    className="object-contain object-bottom drop-shadow-2xl"
                    style={{ maxHeight: 340, maxWidth: 240 }}
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.55 }} onError={() => setImageError(true)} />
                </AnimatePresence>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-1">
                {photos.map((_, i) => (
                  <button key={i} onClick={() => setPhotoIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === photoIdx ? 'bg-[#981F1F] w-6' : 'bg-[#D4C5A9] w-2'}`} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile Text */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block bg-[#981F1F]/10 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
              {lang === 'hi' ? 'संस्थापक से मिलें' : 'Meet Our Founder'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A1810] leading-tight mb-4">
              {lang === 'hi' ? 'मिलिए ' : 'Meet '}<span className="text-[#981F1F]">{lang === 'hi' ? 'विपिन सर' : 'Vipin Sir'}</span>
            </h2>

            <div className="space-y-3 text-[#5A4A3A] text-sm leading-relaxed text-left max-w-lg mx-auto">
              <p>
                {lang === 'hi'
                  ? 'एक इंजीनियर जिसने सरकारी नौकरी और दिल्ली का करियर छोड़कर अपने गाँव नूरपुर लौटने का फ़ैसला किया — सिर्फ़ इसलिए कि गाँव के बच्चों को वही शिक्षा मिले जो शहर के बच्चों को मिलती है।'
                  : 'An engineer who walked away from a government career and the bright lights of Delhi to return to his village Noorpur — because he believed every child in rural India deserves the same quality of education that city kids get.'}
              </p>
              <p>
                {lang === 'hi'
                  ? '2016 में 5 छात्रों और एक छोटे हॉल से शुरुआत किया। आज 5,000+ छात्र, 350+ सरकारी चयन, और 4 ज़िलों में शाखाएँ — सब कुछ बिना किसी विज्ञापन के, सिर्फ़ ज़ुबानी प्रचार से।'
                  : 'Started in 2016 with 5 students and a rented hall. Today — 5,000+ students, 350+ government selections, branches across 4 districts. All through word-of-mouth alone. Zero advertising.'}
              </p>
              <p className="font-semibold text-[#2A1810]">
                {lang === 'hi'
                  ? 'अब मिशन है 200 गाँवों तक पहुँचना। ₹100/महीना। कोई बहाना नहीं, कोई बच्चा पीछे नहीं।'
                  : 'Now on a mission to reach 200 villages. ₹100/month. No excuses, no child left behind.'}
              </p>
            </div>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
              {[
                { label: 'YouTube', href: 'https://youtube.com/channel/UC5axZEqn8or1vnIBBQAN6XA', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg> },
                { label: 'Instagram', href: 'https://www.instagram.com/vipinkumarposwal', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.07 4.07 0 0 1-.98 1.51c-.46.46-.9.74-1.51.98-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.07 4.07 0 0 1-1.51-.98 4.07 4.07 0 0 1-.98-1.51c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.77 5.77 0 0 0-2.09 1.36A5.77 5.77 0 0 0 .69 4.08C.39 4.84.19 5.72.13 6.99.07 8.27.06 8.68.06 11.94s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.36 2.09.62.64 1.29 1.05 2.09 1.36.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.77 5.77 0 0 0 2.09-1.36 5.77 5.77 0 0 0 1.36-2.09c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.77 5.77 0 0 0-1.36-2.09A5.77 5.77 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z"/></svg> },
                { label: 'Facebook', href: 'https://facebook.com/Vipinkumarsheelaram', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#2A1810] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#981F1F] hover:text-white hover:border-[#981F1F] transition-all shadow-sm">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop: Side by side */}
        <div className="hidden lg:flex flex-row items-center gap-20">

          {/* Left — About text */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="w-[55%]">
            <span className="inline-block bg-[#981F1F]/10 text-[#981F1F] text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-wider mb-2 sm:mb-3 md:mb-5 border border-[#981F1F]/20">
              {lang === 'hi' ? 'संस्थापक से मिलें' : 'Meet Our Founder'}
            </span>
            <h2 className="text-base sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2A1810] leading-tight mb-2 sm:mb-4 md:mb-6">
              {lang === 'hi' ? 'मिलिए ' : 'Meet '}<span className="text-[#981F1F]">{lang === 'hi' ? 'विपिन सर' : 'Vipin Sir'}</span>
            </h2>

            <div className="space-y-1.5 sm:space-y-3 md:space-y-4 text-[#5A4A3A] text-[10px] sm:text-sm md:text-base lg:text-lg leading-relaxed">
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
            <div className="mt-2 sm:mt-6 md:mt-8 flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3">
              {[
                { label: 'YouTube', href: 'https://youtube.com/channel/UC5axZEqn8or1vnIBBQAN6XA', icon: <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg> },
                { label: 'Instagram', href: 'https://www.instagram.com/vipinkumarposwal', icon: <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.07 4.07 0 0 1-.98 1.51c-.46.46-.9.74-1.51.98-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.07 4.07 0 0 1-1.51-.98 4.07 4.07 0 0 1-.98-1.51c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.77 5.77 0 0 0-2.09 1.36A5.77 5.77 0 0 0 .69 4.08C.39 4.84.19 5.72.13 6.99.07 8.27.06 8.68.06 11.94s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.36 2.09.62.64 1.29 1.05 2.09 1.36.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.77 5.77 0 0 0 2.09-1.36 5.77 5.77 0 0 0 1.36-2.09c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.77 5.77 0 0 0-1.36-2.09A5.77 5.77 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z"/></svg> },
                { label: 'Facebook', href: 'https://facebook.com/Vipinkumarsheelaram', icon: <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 bg-white border border-gray-200 text-[#2A1810] text-[8px] sm:text-[10px] md:text-sm font-semibold px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2.5 rounded-md sm:rounded-lg md:rounded-xl hover:bg-[#981F1F] hover:text-white hover:border-[#981F1F] transition-all shadow-sm">
                  {s.icon}
                  <span className="hidden sm:inline">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Photo on organic blob */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="w-[42%] sm:w-[40%] lg:w-[45%] flex justify-center">
            <div className="relative flex justify-center items-end" style={{ width: 340, height: 420 }}>
              {/* Gold blob */}
              <motion.div className="absolute" style={{ width: 300, height: 300, top: 30, left: 30 }}
                animate={{ rotate: [0, 6, 0, -6, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path fill="#FDB813" opacity="0.25" d="M42.7,-65.3C54.6,-56.1,62.8,-42.4,67.3,-27.7C71.8,-13,72.5,2.7,68.4,16.8C64.3,30.9,55.4,43.4,43.5,52.5C31.6,61.6,16.8,67.3,0.8,66.2C-15.2,65.1,-30.4,57.2,-43.1,47C-55.8,36.7,-66.1,24,-70,9.3C-73.9,-5.4,-71.4,-22.1,-63.2,-35.3C-55,-48.5,-41.1,-58.2,-27,-63.5C-12.9,-68.8,1.4,-69.7,15.6,-67.1C29.8,-64.5,30.8,-74.5,42.7,-65.3Z" transform="translate(100 100)" />
                </svg>
              </motion.div>
              {/* Red blob */}
              <motion.div className="absolute" style={{ width: 320, height: 320, top: 20, left: 10 }}
                animate={{ rotate: [0, -8, 0, 8, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path fill="#981F1F" opacity="0.18" d="M47.4,-71.4C59.7,-62.3,67,-46.1,71.9,-29.5C76.8,-12.9,79.2,4.1,74.7,18.9C70.2,33.7,58.9,46.3,45.5,55.7C32.1,65.1,16,71.2,-0.9,72.5C-17.8,73.8,-35.6,70.4,-49.1,61.1C-62.5,51.8,-71.7,36.7,-75.2,20.3C-78.7,3.9,-76.6,-13.8,-69.7,-29.1C-62.8,-44.4,-51.2,-57.3,-37.5,-66.2C-23.8,-75.1,-7.9,-80.1,7.2,-79.2C22.3,-78.3,35.1,-80.5,47.4,-71.4Z" transform="translate(100 100)" />
                </svg>
              </motion.div>
              {/* Photo — no box, floats over blobs */}
              <div className="relative z-10 w-full flex justify-center items-end" style={{ height: 420 }}>
                <AnimatePresence mode="wait">
                  <motion.img key={photoIdx} src={photos[photoIdx]} alt="Vipin Sir"
                    className="object-contain object-bottom drop-shadow-2xl"
                    style={{ maxHeight: 420, maxWidth: 300 }}
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.55 }} onError={() => setImageError(true)} />
                </AnimatePresence>
              </div>
              {/* Dots */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-1">
                {photos.map((_, i) => (
                  <button key={i} onClick={() => setPhotoIdx(i)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${i === photoIdx ? 'bg-[#981F1F] w-4 sm:w-6' : 'bg-[#D4C5A9] w-1.5 sm:w-2'}`} />
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
      <section className="relative bg-[#0A0A0A] pt-20 pb-16 sm:pt-32 sm:pb-40 overflow-hidden min-h-[70vh] sm:min-h-[85vh] flex items-center">
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
              className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-4 sm:mb-6">
              {lang === 'hi' ? 'हर गाँव को' : 'Every Village'}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] via-orange-400 to-[#981F1F]">
                {lang === 'hi' ? 'मौक़ा मिलेगा।' : 'Deserves a Chance.'}
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10">
              {lang === 'hi'
                ? 'एक शिक्षक जो ख़ुद 200 गाँवों में जा रहा है — ताकि किसी बच्चे को पढ़ाई के लिए शहर न जाना पड़े। सब कुछ सिर्फ़ ₹100/महीना में।'
                : 'One teacher. 200 villages. A promise that no child should have to leave home to get a world-class education. All for just ₹100/month.'}
            </motion.p>

            {/* Stats bar - REMOVED */}

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4">
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
      <section className="relative py-10 sm:py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#FBF3E4] to-[#FFF8F0]">

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
      <section className="py-20 sm:py-28 relative overflow-hidden bg-[#FFF8F0]">
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

      {/* ── The Journey — Clean timeline without pins ── */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-[#981F1F]/10 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
                {lang === 'hi' ? 'विपिन सर की यात्रा' : 'Vipin Sir\'s Journey'}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2A1810] leading-tight">
                {lang === 'hi' ? 'इंजीनियर से' : 'From Engineer to'} <span className="text-[#981F1F]">{lang === 'hi' ? 'शिक्षक तक' : 'Educator'}</span>
              </h2>
              <p className="text-[#5A4A3A] mt-3 text-base max-w-lg mx-auto">
                {lang === 'hi' ? 'BSF से शुरू करके 200 गाँवों तक — हर कदम एक कहानी।' : 'From BSF to 200 villages — every step tells a story.'}
              </p>
            </motion.div>
          </div>

          {/* Clean Modern Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-20 w-0.5 bg-gradient-to-b from-[#981F1F] via-[#FDB813] to-green-500" />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Desktop: alternating cards */}
                <div className={`hidden sm:flex w-full items-center ${m.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-[46%] ${m.side === 'left' ? 'pr-12' : 'pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#981F1F] to-[#7A1818] flex items-center justify-center text-2xl shadow-md">
                          {m.icon}
                        </div>
                        <span className="text-[#981F1F] font-extrabold text-2xl">{m.year}</span>
                      </div>
                      <h3 className="text-xl font-extrabold text-[#2A1810] mb-2">{m.title}</h3>
                      <p className="text-[#5A4A3A] text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="flex-shrink-0 w-[8%] flex justify-center relative z-10">
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-[#981F1F] shadow-lg" />
                  </div>

                  <div className="w-[46%]" />
                </div>

                {/* Mobile: left-aligned */}
                <div className="flex sm:hidden items-start gap-4">
                  <div className="flex-shrink-0 relative z-10 mt-1">
                    <div className="w-5 h-5 rounded-full bg-white border-3 border-[#981F1F] shadow-md" />
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-md p-5 border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{m.icon}</span>
                      <span className="text-[#981F1F] font-extrabold text-lg">{m.year}</span>
                    </div>
                    <h3 className="text-base font-extrabold text-[#2A1810] mb-1">{m.title}</h3>
                    <p className="text-[#5A4A3A] text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Final destination - clean version */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center sm:justify-center mt-8"
            >
              <div className="bg-gradient-to-br from-[#981F1F] to-[#7A1818] text-white rounded-2xl px-8 py-6 shadow-xl text-center">
                <div className="text-4xl mb-2">🎯</div>
                <p className="font-extrabold text-lg">
                  {lang === 'hi' ? '200 गाँव — मिशन जारी है' : '200 Villages — Mission Continues'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision Statement — Full Width Strip ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#981F1F] to-[#7A1818] py-16 sm:py-20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#FDB813]/5 rounded-full -translate-y-1/2" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block text-6xl mb-6">🌟</div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              {lang === 'hi'
                ? 'हमारा विज़न'
                : 'Our Vision'}
            </h3>
            <p className="text-white/90 text-xl sm:text-2xl font-medium leading-relaxed max-w-3xl mx-auto mb-4">
              {lang === 'hi'
                ? '"जो बच्चे दिल्ली नहीं जा सकते — हम उनके गाँव में जाएंगे।"'
                : '"For Students Who Can\'t Go To Delhi — We Bring Education To Their Village."'}
            </p>
            <p className="text-[#FDB813] font-bold text-lg">— Vipin Sir</p>

            <div className="mt-10 pt-10 border-t border-white/20">
              <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-4 md:gap-8 text-white/90 text-xs sm:text-base md:text-lg font-medium">
                <div className="flex items-baseline gap-1">
                  <span className="text-[#FDB813] text-lg sm:text-2xl md:text-3xl font-extrabold">200</span>
                  <span className="text-xs sm:text-base">{lang === 'hi' ? 'गाँव' : 'Villages'}</span>
                </div>
                <span className="text-white/30">•</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[#FDB813] text-lg sm:text-2xl md:text-3xl font-extrabold">₹100</span>
                  <span className="text-xs sm:text-base">{lang === 'hi' ? '/महीना' : '/Month'}</span>
                </div>
                <span className="text-white/30">•</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[#FDB813] text-lg sm:text-2xl md:text-3xl font-extrabold">∞</span>
                  <span className="text-xs sm:text-base">{lang === 'hi' ? 'संभावनाएँ' : 'Possibilities'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA — Clean, matches website vibe ── */}
      <section className="relative py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#FFF8F0] to-[#FBF3E4] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center relative overflow-hidden border-2 border-[#981F1F]/10"
          >
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#981F1F]/5 rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#FDB813]/5 rounded-full" />

            <div className="relative z-10">
              <div className="inline-block text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">🚀</div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A1810] mb-2 sm:mb-3 leading-tight">
                {lang === 'hi' ? 'तैयार हो?' : 'Ready to Begin?'}
              </h2>

              <p className="text-[#5A4A3A] text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                {lang === 'hi'
                  ? 'आज से ही अपने बच्चे की UPSC नींव रखें। क्लास 6 से शुरू करें — सिर्फ़ ₹100/महीना।'
                  : 'Start building your child\'s UPSC foundation today. Begin from Class 6 — just ₹100/month.'}
              </p>

              {/* Stats bar */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 py-3 sm:py-4">
                {[
                  { icon: '📖', label: lang === 'hi' ? 'किताब' : 'Book', value: '200+', sub: lang === 'hi' ? 'पेज' : 'Pages' },
                  { icon: '🎥', label: lang === 'hi' ? 'लाइव क्लास' : 'Live Classes', value: '365', sub: lang === 'hi' ? 'दिन' : 'Days' },
                  { icon: '📝', label: lang === 'hi' ? 'टेस्ट' : 'Tests', value: '400+', sub: lang === 'hi' ? 'सालाना' : 'Yearly' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl mb-1">{stat.icon}</div>
                    <div className="text-[#981F1F] font-extrabold text-xl sm:text-2xl">{stat.value}</div>
                    <div className="text-[#5A4A3A] text-xs sm:text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  to="/#test-series"
                  className="inline-flex bg-[#981F1F] text-white font-bold px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
                >
                  {lang === 'hi' ? 'टेस्ट सीरीज़ देखें' : 'Explore Test Series'} <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-white border-2 border-[#981F1F]/20 text-[#981F1F] font-semibold px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl items-center gap-2 transition-all hover:bg-[#981F1F]/5 text-sm sm:text-base"
                >
                  <Phone size={16} /> WhatsApp
                </a>
              </div>

              {/* Price highlight */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#981F1F]/10">
                <p className="text-[#5A4A3A] text-xs sm:text-sm mb-1">{lang === 'hi' ? 'सभी कुछ शामिल' : 'Everything included'}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-[#981F1F] text-3xl sm:text-4xl font-extrabold">₹100</span>
                  <span className="text-[#5A4A3A] text-base sm:text-lg">{lang === 'hi' ? '/महीना' : '/month'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default MissionPage;
