import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { useLang, T } from '@/i18n/translations';

export function EnrollCTA() {
  const { lang } = useLang();
  return (
    <section className="py-20 bg-gradient-to-br from-[#981F1F] to-[#7A1818] relative overflow-hidden">
      {/* Decorative bubbles/circles only */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-[#FDB813]/5 blur-3xl -translate-y-1/2" />
      <div className="absolute top-10 right-[10%] w-32 h-32 rounded-full bg-white/[0.03] blur-2xl" />
      <div className="absolute bottom-10 left-[15%] w-40 h-40 rounded-full bg-white/[0.04] blur-2xl" />
      <div className="absolute top-1/3 right-[20%] w-24 h-24 rounded-full bg-[#FDB813]/[0.06]" />
      <div className="absolute bottom-1/3 left-[30%] w-36 h-36 rounded-full bg-white/[0.02]" />

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
