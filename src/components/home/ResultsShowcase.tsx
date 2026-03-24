import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { Marquee } from "@/registry/magicui/marquee";

export function ResultsShowcase() {
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
