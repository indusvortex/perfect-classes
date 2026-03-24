import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { useLang, T } from '@/i18n/translations';

export function EnrollCTA() {
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
