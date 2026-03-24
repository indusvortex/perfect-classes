import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang, T } from '@/i18n/translations';

const VIDEO_TESTIMONIALS = [
  { id: 1, name: 'Rohit Kumar', tag: 'UP Police Selected', thumbnail: '/videos/thumb1.jpg', src: '' },
  { id: 2, name: 'Priya Sharma', tag: 'Super TET Selected', thumbnail: '/videos/thumb2.jpg', src: '' },
  { id: 3, name: 'Arun Singh', tag: 'NDA Cleared 2025', thumbnail: '/videos/thumb3.jpg', src: '' },
  { id: 4, name: 'Kavita Devi', tag: 'Parent — Noorpur', thumbnail: '/videos/thumb4.jpg', src: '' },
];

const GALLERY_PHOTOS = [
  '/gallery/sir-1.jpg',
  '/gallery/sir-2.jpg',
  '/gallery/sir-3.jpg',
  '/gallery/sir-4.jpg',
];

const TESTIMONIALS = [
  { name: 'Rohit Kumar', tag: 'UP Police Selected', stars: 5, text: '"Main Noorpur se hoon. Vipin Sir ke books se padha, test series se practice ki — ek hi attempt mein selection ho gaya. Gaon mein kisi ne socha nahi tha."', avatar: 'RK' },
  { name: 'Priya Sharma', tag: 'Super TET Selected', stars: 5, text: '"School mein sirf PCM padhaya gaya. GS ka G nahi aata tha. Junior IAS ki books ne Class 6 se neenv daali — aaj government teacher hoon."', avatar: 'PS' },
  { name: 'Arun Singh', tag: 'NDA Cleared 2025', stars: 5, text: '"NDA mein 400 marks GS ke hote hain — yeh mujhe Perfect Classes ne samjhaya. Warna main sirf Maths ki tension le raha tha."', avatar: 'AS' },
  { name: 'Kavita Devi', tag: 'Parent — Noorpur', stars: 5, text: '"₹100 mahine mein itni quality padhai? Mere bete ko Class 7 se Junior IAS mein daala. Ab usse Constitution aur Geography aise aati hai jaise Delhi ke bachche padhte hain."', avatar: 'KD' },
  { name: 'Deepak Verma', tag: 'UP Police Selected', stars: 5, text: '"Gaon mein coaching ka koi option nahi tha. Vipin Sir ki books aur test series ne ghar baithe taiyaari karwa di. Pehle attempt mein clear ho gaya."', avatar: 'DV' },
  { name: 'Sunita Yadav', tag: 'Parent — Bijnor', stars: 5, text: '"Meri beti Class 8 mein hai. Pehle History se darr lagta tha, ab khud se padhti hai. ₹100 mein itna koi nahi deta."', avatar: 'SY' },
  { name: 'Manish Tiwari', tag: 'Super TET Selected', stars: 5, text: '"Delhi coaching mein 2 lakh kharch kiye, kuch nahi hua. Vipin Sir ki ₹100 wali system se ek saal mein selection. Sach mein believe nahi hota."', avatar: 'MT' },
  { name: 'Ravi Prakash', tag: 'NDA Cleared 2024', stars: 5, text: '"Class 9 se Junior IAS join kiya tha. NDA ke GS section mein 380+ marks aaye — sab NCERT ki taiyaari ka kamaal tha."', avatar: 'RP' },
  { name: 'Anita Kumari', tag: 'Parent — Moradabad', stars: 5, text: '"Hamare gaon mein koi accha teacher nahi tha. Vipin Sir ki books ne mere dono bachcho ki zindagi badal di. Ab dono IAS ki taiyaari kar rahe hain."', avatar: 'AK' },
];

export function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeText, setActiveText] = useState(0);
  const { lang } = useLang();

  // Auto-rotate text testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveText(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate video testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVideo(prev => (prev + 1) % VIDEO_TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-12 sm:py-20 lg:py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-[#981F1F]/[0.03] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[280px] h-[280px] rounded-full bg-[#FDB813]/[0.04] translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-14">
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full uppercase tracking-wider mb-3 sm:mb-4 border border-[#981F1F]/20">
            <Star size={12} /> {T[lang].testiBadge}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] leading-tight mb-3 sm:mb-4">
            {T[lang].testiHeading} <span className="text-[#981F1F]">{T[lang].testiHeadingHighlight}</span>
          </h2>
          <p className="text-[#555] text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
            {T[lang].testiDesc}
          </p>
        </motion.div>

        {/* MOBILE LAYOUT (< md): Reel video + text+gallery stacked */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {/* Left: Video Reel (9:16) */}
          <div className="relative w-full aspect-[9/16] bg-[#121212] rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <button onClick={() => setActiveVideo(prev => (prev - 1 + VIDEO_TESTIMONIALS.length) % VIDEO_TESTIMONIALS.length)}
              className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all">
              <ChevronLeft size={16} className="text-white" />
            </button>
            <button onClick={() => setActiveVideo(prev => (prev + 1) % VIDEO_TESTIMONIALS.length)}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all">
              <ChevronRight size={16} className="text-white" />
            </button>
            {VIDEO_TESTIMONIALS[activeVideo].src ? (
              <video key={activeVideo} src={VIDEO_TESTIMONIALS[activeVideo].src} className="w-full h-full object-cover" controls autoPlay muted />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#121212] to-[#2a2a2a] px-2">
                <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mb-2 cursor-pointer">
                  <Play size={20} className="text-white ml-0.5" />
                </div>
                <p className="text-white font-bold text-xs text-center">{VIDEO_TESTIMONIALS[activeVideo].name}</p>
                <p className="text-[#FDB813] text-[10px] font-semibold">{VIDEO_TESTIMONIALS[activeVideo].tag}</p>
                <p className="text-white/40 text-[10px] mt-2">{T[lang].videoComingSoon}</p>
              </div>
            )}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
              {VIDEO_TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActiveVideo(i)}
                  className={`rounded-full transition-all ${activeVideo === i ? 'w-3 h-1 bg-white' : 'w-1 h-1 bg-white/50'}`} />
              ))}
            </div>
          </div>

          {/* Right: Text testimonial + Gallery stacked to match reel height */}
          <div className="flex flex-col gap-2" style={{ aspectRatio: '9/16' }}>
            {/* Text testimonial — compact */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div key={activeText} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl border border-[#981F1F]/10 shadow-md relative overflow-hidden p-3">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#981F1F] via-[#FDB813] to-[#981F1F]" />
                  <div className="text-[#981F1F]/10 text-xl font-serif leading-none">"</div>
                  <blockquote className="text-[10px] text-[#333] leading-snug italic line-clamp-3">{TESTIMONIALS[activeText].text}</blockquote>
                  <div className="flex items-center gap-1.5 pt-1.5 mt-1.5 border-t border-gray-100">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#FFF1F1] text-[#981F1F] font-bold text-[8px] shrink-0">{TESTIMONIALS[activeText].avatar}</div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-[#121212] text-[9px] truncate">{TESTIMONIALS[activeText].name}</p>
                      <p className="text-[8px] font-semibold text-[#FDB813] truncate">{TESTIMONIALS[activeText].tag}</p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-1 mt-1.5">
                    {TESTIMONIALS.map((_, i) => (
                      <button key={i} onClick={() => setActiveText(i)}
                        className={`rounded-full transition-all ${activeText === i ? 'w-3 h-1 bg-[#981F1F]' : 'w-1 h-1 bg-[#981F1F]/30'}`} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Vipin Sir Photos — fills remaining space */}
            <div className="flex-1 min-h-0">
              <GalleryCard />
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT (md+): Reel video + text testimonial + gallery */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-start">
          {/* Left: Video Reel (9:16, constrained width) */}
          <div className="w-[280px] lg:w-[320px] flex-shrink-0">
            <div className="relative w-full aspect-[9/16] bg-[#121212] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <button onClick={() => setActiveVideo(prev => (prev - 1 + VIDEO_TESTIMONIALS.length) % VIDEO_TESTIMONIALS.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all">
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button onClick={() => setActiveVideo(prev => (prev + 1) % VIDEO_TESTIMONIALS.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all">
                <ChevronRight size={20} className="text-white" />
              </button>
              {VIDEO_TESTIMONIALS[activeVideo].src ? (
                <video key={activeVideo} src={VIDEO_TESTIMONIALS[activeVideo].src} className="w-full h-full object-cover" controls autoPlay muted />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#121212] to-[#2a2a2a]">
                  <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mb-4 hover:bg-white/20 transition-colors cursor-pointer">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-white font-bold text-lg">{VIDEO_TESTIMONIALS[activeVideo].name}</p>
                  <p className="text-[#FDB813] text-sm font-semibold">{VIDEO_TESTIMONIALS[activeVideo].tag}</p>
                  <p className="text-white/40 text-xs mt-3">{T[lang].videoComingSoon}</p>
                </div>
              )}
              {/* Reel dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                {VIDEO_TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setActiveVideo(i)}
                    className={`rounded-full transition-all ${activeVideo === i ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Vipin Sir Photos (top) + Testimonial Slider (bottom) */}
          <div className="flex-1 flex flex-col gap-4" style={{ height: 'calc(320px * 16 / 9)' }}>
            {/* Vipin Sir Gallery — top half */}
            <div className="flex-1 min-h-0">
              <GalleryCard />
            </div>

            {/* Testimonial Slider — bottom half, draggable horizontal scroll */}
            <TestimonialSlider />
          </div>
        </div>


      </div>
    </section>
  );
}

export function TestimonialSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll — pauses on hover/drag
  useEffect(() => {
    if (!autoScroll || !scrollRef.current) return;
    const el = scrollRef.current;
    const t = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 1, behavior: 'auto' });
      }
    }, 30);
    return () => clearInterval(t);
  }, [autoScroll]);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoScroll(false);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollRef.current!.scrollLeft = scrollLeft - (x - startX);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setAutoScroll(true), 3000);
  };

  return (
    <div className="relative">
      {/* Left/Right buttons */}
      <button onClick={() => { scroll('left'); setAutoScroll(false); setTimeout(() => setAutoScroll(true), 3000); }}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white shadow-md rounded-full flex items-center justify-center border border-gray-200 transition-all">
        <ChevronLeft size={16} className="text-[#981F1F]" />
      </button>
      <button onClick={() => { scroll('right'); setAutoScroll(false); setTimeout(() => setAutoScroll(true), 3000); }}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white shadow-md rounded-full flex items-center justify-center border border-gray-200 transition-all">
        <ChevronRight size={16} className="text-[#981F1F]" />
      </button>

      {/* Scrollable container with equal padding */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="flex gap-4 overflow-x-auto scrollbar-hide items-stretch px-10 cursor-grab active:cursor-grabbing py-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="flex-shrink-0 w-[280px] lg:w-[320px] bg-white rounded-xl border border-[#981F1F]/10 shadow-sm p-5 flex flex-col justify-between select-none">
            <div>
              <div className="text-[#981F1F]/15 text-3xl font-serif leading-none mb-1">"</div>
              <p className="text-sm text-[#333] leading-relaxed italic line-clamp-4 -mt-1">{t.text}</p>
            </div>
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFF1F1] text-[#981F1F] font-bold text-sm shrink-0">{t.avatar}</div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-[#121212] text-sm truncate">{t.name}</p>
                <p className="text-xs font-semibold text-[#FDB813] truncate">{t.tag}</p>
              </div>
              <div className="flex gap-0.5 shrink-0">
                {[...Array(t.stars)].map((_, idx) => (
                  <Star key={idx} size={12} className="fill-[#FDB813] text-[#FDB813]" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GalleryCard() {
  const { lang } = useLang();
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto(prev => (prev + 1) % GALLERY_PHOTOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden relative h-full min-h-[120px] sm:min-h-[200px] bg-gray-200"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={activePhoto}
          src={GALLERY_PHOTOS[activePhoto]}
          alt="Vipin Sir with selected students"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover absolute inset-0"
        />
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <div className="absolute bottom-4 left-5 z-20">
        <p className="text-white font-bold text-sm">{T[lang].galleryTitle}</p>
        <p className="text-white/70 text-xs">{T[lang].gallerySubtitle}</p>
      </div>
      <div className="absolute bottom-4 right-5 flex gap-1.5 z-20">
        {GALLERY_PHOTOS.map((_, i) => (
          <button key={i} onClick={() => setActivePhoto(i)}
            className={`rounded-full transition-all ${activePhoto === i ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
