import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLang, T } from '@/i18n/translations';

const STATS = [
  { value: 5000, suffix: '+', label: 'Students at a Time' },
  { value: 350, suffix: '+', label: 'UP Police Selections' },
  { value: 125, suffix: '+', label: 'Super TET Selections' },
  { value: 10, suffix: '+', label: 'Years of Legacy' },
];

export function Stats() {
  const { lang } = useLang();
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
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#981F1F]/[0.02] -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#FDB813]/[0.03] translate-y-1/2 -translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121212]">{T[lang].statsHeading} <span className="text-[#981F1F]">{T[lang].statsHeadingHighlight}</span></h2>
          <p className="text-[#555] mt-2">{T[lang].statsDesc}</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {STATS.map((s, i) => {
            const statLabels = [T[lang].stat1Label, T[lang].stat2Label, T[lang].stat3Label, T[lang].stat4Label];
            return (
              <div key={i} className="text-center bg-gray-50/50 p-4 sm:p-0 rounded-2xl sm:bg-transparent">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#981F1F]">{counts[i].toLocaleString()}{s.suffix}</div>
                <div className="mt-2 text-xs sm:text-sm text-[#555] font-medium">{statLabels[i]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
