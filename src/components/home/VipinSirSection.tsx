import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface VipinSirSectionProps {
  lang: string;
}

export function VipinSirSection({ lang }: VipinSirSectionProps) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const photos = ['/hero/vipin-sir-1.png', '/hero/vipin-sir-2.png', '/hero/vipin-sir-3.png'];

  useEffect(() => {
    const t = setInterval(() => setPhotoIdx(p => (p + 1) % photos.length), 3500);
    return () => clearInterval(t);
  }, [photos.length]);

  return (
    <section className="relative py-20 sm:py-28 bg-[#FFF8F0] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — About text */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:w-[55%]">
            <span className="inline-block bg-[#981F1F]/10 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5 border border-[#981F1F]/20">
              {lang === 'hi' ? 'संस्थापक से मिलें' : 'Meet Our Founder'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2A1810] leading-tight mb-6">
              {lang === 'hi' ? 'मिलिए ' : 'Meet '}<span className="text-[#981F1F]">{lang === 'hi' ? 'विपिन सर' : 'Vipin Sir'}</span>
            </h2>

            <div className="space-y-4 text-[#5A4A3A] text-base sm:text-lg leading-relaxed">
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
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {[
                { label: 'YouTube', href: 'https://youtube.com/@perfectclassesnoorpur', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg> },
                { label: 'Instagram', href: 'https://instagram.com/perfectclassesnoorpur', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.07 4.07 0 0 1-.98 1.51c-.46.46-.9.74-1.51.98-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.07 4.07 0 0 1-1.51-.98 4.07 4.07 0 0 1-.98-1.51c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.77 5.77 0 0 0-2.09 1.36A5.77 5.77 0 0 0 .69 4.08C.39 4.84.19 5.72.13 6.99.07 8.27.06 8.68.06 11.94s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.36 2.09.62.64 1.29 1.05 2.09 1.36.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.77 5.77 0 0 0 2.09-1.36 5.77 5.77 0 0 0 1.36-2.09c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.77 5.77 0 0 0-1.36-2.09A5.77 5.77 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z"/></svg> },
                { label: 'Facebook', href: 'https://facebook.com/perfectclassesnoorpur', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#2A1810] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#981F1F] hover:text-white hover:border-[#981F1F] transition-all shadow-sm">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Photo on organic blob */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:w-[45%] flex justify-center">
            <div className="relative flex justify-center items-end" style={{ width: 340, height: 420 }}>

              {/* Blob layer 2 — offset gold accent */}
              <motion.div
                className="absolute"
                style={{ width: 300, height: 300, top: 30, left: 30 }}
                animate={{ rotate: [0, 6, 0, -6, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path fill="#FDB813" opacity="0.25"
                    d="M42.7,-65.3C54.6,-56.1,62.8,-42.4,67.3,-27.7C71.8,-13,72.5,2.7,68.4,16.8C64.3,30.9,55.4,43.4,43.5,52.5C31.6,61.6,16.8,67.3,0.8,66.2C-15.2,65.1,-30.4,57.2,-43.1,47C-55.8,36.7,-66.1,24,-70,9.3C-73.9,-5.4,-71.4,-22.1,-63.2,-35.3C-55,-48.5,-41.1,-58.2,-27,-63.5C-12.9,-68.8,1.4,-69.7,15.6,-67.1C29.8,-64.5,30.8,-74.5,42.7,-65.3Z"
                    transform="translate(100 100)" />
                </svg>
              </motion.div>

              {/* Blob layer 1 — main red blob */}
              <motion.div
                className="absolute"
                style={{ width: 320, height: 320, top: 20, left: 10 }}
                animate={{ rotate: [0, -8, 0, 8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path fill="#981F1F" opacity="0.18"
                    d="M47.4,-71.4C59.7,-62.3,67,-46.1,71.9,-29.5C76.8,-12.9,79.2,4.1,74.7,18.9C70.2,33.7,58.9,46.3,45.5,55.7C32.1,65.1,16,71.2,-0.9,72.5C-17.8,73.8,-35.6,70.4,-49.1,61.1C-62.5,51.8,-71.7,36.7,-75.2,20.3C-78.7,3.9,-76.6,-13.8,-69.7,-29.1C-62.8,-44.4,-51.2,-57.3,-37.5,-66.2C-23.8,-75.1,-7.9,-80.1,7.2,-79.2C22.3,-78.3,35.1,-80.5,47.4,-71.4Z"
                    transform="translate(100 100)" />
                </svg>
              </motion.div>

              {/* Photo — sits above blobs, no background box */}
              <div className="relative z-10 w-full flex justify-center items-end" style={{ height: 420 }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={photoIdx}
                    src={photos[photoIdx]}
                    alt="Vipin Sir"
                    className="object-contain object-bottom drop-shadow-2xl"
                    style={{ maxHeight: 420, maxWidth: 300 }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.55 }}
                  />
                </AnimatePresence>
              </div>

              {/* Dot indicators */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-1">
                {photos.map((_, i) => (
                  <button key={i} onClick={() => setPhotoIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === photoIdx ? 'bg-[#981F1F] w-6' : 'bg-[#D4C5A9] w-2'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
