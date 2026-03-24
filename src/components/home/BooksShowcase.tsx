import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang, T } from '@/i18n/translations';

const BOOKS = [
  { class: 'Class 6', title: 'Junior IAS — Class 6', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
  { class: 'Class 7', title: 'Junior IAS — Class 7', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
  { class: 'Class 8', title: 'Junior IAS — Class 8', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
  { class: 'Class 9', title: 'Junior IAS — Class 9', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
  { class: 'Class 10', title: 'Junior IAS — Class 10', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
  { class: 'Class 11', title: 'Junior IAS — Class 11', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
  { class: 'Class 12', title: 'Junior IAS — Class 12', tags: ['History', 'Geography', 'Constitution', 'Science', 'Static GK'], type: 'Single Book' },
];

export function BooksShowcase() {
  const [bookLang, setBookLang] = useState<'Hindi' | 'English'>('Hindi');
  const { lang } = useLang();
  const booksRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const onDragStart = (e: React.MouseEvent) => { isDragging.current = true; dragStartX.current = e.pageX - (booksRef.current?.offsetLeft || 0); dragScrollLeft.current = booksRef.current?.scrollLeft || 0; };
  const onDragEnd = () => { isDragging.current = false; };
  const onDragMove = (e: React.MouseEvent) => { if (!isDragging.current || !booksRef.current) return; e.preventDefault(); const x = e.pageX - (booksRef.current.offsetLeft || 0); booksRef.current.scrollLeft = dragScrollLeft.current - (x - dragStartX.current) * 1.5; };

  const scrollBooks = (dir: 'left' | 'right') => {
    if (!booksRef.current) return;
    booksRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <section id="books" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#981F1F]/[0.02] -translate-y-1/3 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#FDB813]/[0.03] translate-y-1/2 -translate-x-1/3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
            <BookOpen size={12} /> {T[lang].booksBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight mb-4">
            <span className="text-[#981F1F]">{T[lang].booksHeading}</span>
          </h2>
          <p className="text-[#555] max-w-2xl mx-auto mt-2 text-lg">
            {T[lang].booksDesc}
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex bg-gray-50 border border-gray-200 rounded-xl p-1">
            <button
              onClick={() => setBookLang('Hindi')}
              className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${bookLang === 'Hindi' ? 'bg-[#981F1F] text-white shadow' : 'text-[#555] hover:text-[#121212]'}`}>
              {T[lang].hindiMedium}
            </button>
            <button
              onClick={() => setBookLang('English')}
              className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${bookLang === 'English' ? 'bg-[#981F1F] text-white shadow' : 'text-[#555] hover:text-[#121212]'}`}>
              {T[lang].englishMedium}
            </button>
          </div>
        </div>

        {/* Scrollable slider with buttons */}
        <div className="relative">
          <button onClick={() => scrollBooks('left')} className="flex absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-lg hover:bg-[#981F1F] hover:text-white hover:border-[#981F1F] transition-all">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scrollBooks('right')} className="flex absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-lg hover:bg-[#981F1F] hover:text-white hover:border-[#981F1F] transition-all">
            <ChevronRight size={18} />
          </button>

          <div
            ref={booksRef}
            onMouseDown={onDragStart}
            onMouseMove={onDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing px-1"
          >
            {BOOKS.map((b, i) => (
              <div key={i} className="snap-center flex-shrink-0 w-[260px] sm:w-[280px] lg:w-[300px] bg-white border text-center border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="h-40 bg-[#FAFAFA] rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-gray-50">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(152,31,31,0.05),transparent_70%)]" />
                   <BookOpen size={48} className="text-[#981F1F] opacity-80" />
                   <div className="absolute bottom-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-[#121212] rounded shadow-sm uppercase border border-gray-100">{bookLang}</div>
                </div>
                <div className="text-xs font-bold text-[#FDB813] tracking-wider mb-2">{b.class}</div>
                <h3 className="font-bold text-[#121212] text-xl mb-3">{b.title}</h3>
                <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                  {b.tags.map(t => (
                    <span key={t} className="text-[10px] bg-gray-50 text-[#555] border border-gray-200 px-2 py-1 rounded-md whitespace-nowrap">{t}</span>
                  ))}
                </div>
                <button className="w-full bg-[#121212] text-white hover:bg-[#333] font-semibold py-2.5 rounded-xl transition-colors">
                  {T[lang].orderNow}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
