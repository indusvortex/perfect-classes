import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Target, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLang, T } from '@/i18n/translations';

const BY_CLASS_SERIES = [
  { class: '6', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 40, badge: { en: 'CLASS 6', hi: 'क्लास 6' }, gradient: 'from-amber-400 to-orange-500', image: '/students/class6.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '7', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 50, badge: { en: 'CLASS 7', hi: 'क्लास 7' }, gradient: 'from-emerald-400 to-teal-500', image: '/students/class7.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '8', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 60, badge: { en: 'CLASS 8', hi: 'क्लास 8' }, gradient: 'from-blue-400 to-indigo-500', image: '/students/class8.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '9', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 80, badge: { en: 'CLASS 9', hi: 'क्लास 9' }, gradient: 'from-violet-500 to-purple-600', image: '/students/class9.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '10', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 120, badge: { en: 'CLASS 10', hi: 'क्लास 10' }, gradient: 'from-rose-500 to-red-600', image: '/students/class10.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '11', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 150, badge: { en: 'CLASS 11', hi: 'क्लास 11' }, gradient: 'from-[#981F1F] to-[#6B1515]', image: '/students/class11.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '12', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 200, badge: { en: 'CLASS 12', hi: 'क्लास 12' }, gradient: 'from-[#121212] to-[#333]', image: '/students/class12.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
];

export function TestSeriesExplorer() {
  const { lang } = useLang();
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeftRef.current = sliderRef.current?.scrollLeft || 0;
  };
  const scrollBy = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.querySelector('a')?.offsetWidth || 320;
    sliderRef.current.scrollBy({ left: dir === 'left' ? -cardWidth - 24 : cardWidth + 24, behavior: 'smooth' });
  };

  const handleMouseLeave = () => { isDown.current = false; };
  const handleMouseUp = () => { isDown.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <section id="test-series" className="py-20 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-[#981F1F]/[0.03] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full bg-[#FDB813]/[0.04] translate-y-1/3 translate-x-1/3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-white border border-[#981F1F]/20 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <Target size={12} /> {T[lang].testBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121212]">{T[lang].testHeading} <span className="text-[#981F1F]">{T[lang].testHeadingHighlight}</span></h2>
          <p className="text-[#555] mt-2 max-w-xl mx-auto">{T[lang].testDesc}</p>
        </div>

        <div>
            <div className="relative">
              {/* Left arrow */}
              <button onClick={() => scrollBy('left')} className="flex absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-lg hover:bg-[#981F1F] hover:text-white hover:border-[#981F1F] transition-all">
                <ChevronLeft size={18} />
              </button>
              {/* Right arrow */}
              <button onClick={() => scrollBy('right')} className="flex absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-lg hover:bg-[#981F1F] hover:text-white hover:border-[#981F1F] transition-all">
                <ChevronRight size={20} />
              </button>
              <div
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing px-1">
              {BY_CLASS_SERIES.map((s, i) => (
                <Link to={`/class/${s.class}`} key={i} className="snap-center flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[320px]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`group relative bg-gradient-to-b ${s.gradient} rounded-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-between p-6 text-white shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
                  >
                    {/* Decorative shapes */}
                    <div className="absolute top-3 right-3 w-20 h-20 rounded-full bg-white/10" />
                    <div className="absolute bottom-10 left-2 w-12 h-12 rounded-full bg-white/5" />

                    {/* Top: Class number — big and bold */}
                    <div className="relative z-10 self-start w-full">
                      <h3 className="text-4xl font-extrabold leading-none tracking-tight">{lang === 'hi' ? `क्लास ${s.class}` : `Class ${s.class}`}</h3>
                      <p className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mt-1">{lang === 'hi' ? 'जूनियर IAS' : 'JUNIOR IAS'}</p>
                    </div>

                    {/* Illustration */}
                    <div className="relative z-10 flex-grow flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img src={s.image} alt={`Class ${s.class} student`} className="w-36 h-40 drop-shadow-xl object-contain" />
                    </div>

                    {/* Bottom Text */}
                    <div className="relative z-10 text-center w-full">
                      <p className="text-white/90 text-sm font-semibold italic leading-snug">"{typeof s.tagline === 'string' ? s.tagline : s.tagline[lang]}"</p>
                      <div className="mt-3 bg-white/20 backdrop-blur-sm text-sm font-bold px-5 py-2.5 rounded-full border border-white/30 inline-flex items-center gap-2 group-hover:bg-white/30 transition-colors">
                        {T[lang].exploreSeries} <ArrowRight size={14} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
