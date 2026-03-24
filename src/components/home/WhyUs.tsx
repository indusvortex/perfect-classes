import React from 'react';
import { motion } from 'motion/react';
import { FileText, BarChart2, Shield, Zap, CheckCircle, Layers, Users } from 'lucide-react';
import { useLang, T } from '@/i18n/translations';

export function WhyUs() {
  const { lang } = useLang();
  const features = [
    { icon: FileText, title: T[lang].feature1Title, desc: T[lang].feature1Desc },
    { icon: BarChart2, title: T[lang].feature2Title, desc: T[lang].feature2Desc },
    { icon: Shield, title: T[lang].feature3Title, desc: T[lang].feature3Desc },
  ];
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FAFAFA] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#981F1F]/[0.03] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#FDB813]/[0.04] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
            <Zap size={12} /> {T[lang].whyBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121212]">{T[lang].whyHeading} <span className="text-[#981F1F]">{T[lang].whyHeadingHighlight}</span></h2>
          <p className="text-[#555] mt-3 max-w-xl mx-auto text-sm sm:text-base">{T[lang].whyDesc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6 sm:p-8 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFF1F1] rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#981F1F] transition-colors">
                  <Icon size={24} className="text-[#981F1F] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[#121212] font-bold text-lg sm:text-xl mb-2 sm:mb-3">{f.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="mt-8 sm:mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: CheckCircle, label: T[lang].trustBadge1 },
              { icon: Layers, label: T[lang].trustBadge2 },
              { icon: Zap, label: T[lang].trustBadge3 },
              { icon: Users, label: T[lang].trustBadge4 },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#FFF1F1] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#981F1F]" />
                  </div>
                  <span className="text-[#333] text-xs sm:text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
