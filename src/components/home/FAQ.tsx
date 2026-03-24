import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight } from 'lucide-react';
import { useLang, T } from '@/i18n/translations';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { lang } = useLang();
  const faqs = [
    { q: T[lang].faq1Q, a: T[lang].faq1A },
    { q: T[lang].faq2Q, a: T[lang].faq2A },
    { q: T[lang].faq3Q, a: T[lang].faq3A },
    { q: T[lang].faq4Q, a: T[lang].faq4A },
    { q: T[lang].faq5Q, a: T[lang].faq5A },
    { q: T[lang].faq6Q, a: T[lang].faq6A },
  ];
  return (
    <section className="py-20 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#981F1F]/[0.03] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-[#FDB813]/[0.04] translate-y-1/3 -translate-x-1/3" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#121212]">{T[lang].faqHeading} <span className="text-[#981F1F]">{T[lang].faqHeadingHighlight}</span></h2>
        </motion.div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button className="w-full text-left px-4 py-3 sm:px-6 sm:py-5 flex items-center justify-between font-semibold text-[#121212] hover:text-[#981F1F] transition-colors"
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
