import React from 'react';
import { motion } from 'motion/react';
import { Award, Target, MapPin } from 'lucide-react';

export function MissionSection() {
  return (
    <section id="mission" className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#981F1F]/20 text-[#FDB813] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 border border-[#FDB813]/20">
              <Award size={12} /> Vipin Sir's Legacy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Gaon Ka Bachcha Bhi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] to-orange-500">IAS Ban Sake.</span>
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              Vipin Sir left a BSF government job and a position at Delhi's Drishti IAS to return to Noorpur. Why? Because he saw the truth: <strong>schools teach PCM to pass boards, but competitive exams are decided by General Studies</strong> — a subject no school teaches properly.
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              The result? Rural students are forced to migrate to Delhi or Prayagraj and spend lakhs relearning Class 6-12 NCERT books. Junior IAS fixes this — building the foundation while the child is still in school, at a price every family can afford.
            </p>

            <motion.div animate={{ boxShadow: ['0 0 0px rgba(253,184,19,0)', '0 0 20px rgba(253,184,19,0.15)', '0 0 0px rgba(253,184,19,0)'] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8">
               <h3 className="text-white font-bold text-xl flex items-center gap-2 mb-3"><MapPin className="text-[#FDB813]" size={20} /> 200 Gaon, Ek Mission</h3>
               <p className="text-white/60 text-sm leading-relaxed">
                 Vipin Sir is personally visiting 200 villages in a vanity van — sleeping in it, eating on the road — to sit with parents and show them what their children deserve. No grand seminar halls, no marketing gimmicks. Just a teacher going door-to-door proving that ₹100/month can change a family's future forever.
               </p>
            </motion.div>
          </div>

          <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2071&auto=format&fit=crop" alt="Education Mission Vanity Van Tour" className="absolute inset-0 w-full h-full object-cover opacity-50" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
             <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex gap-4">
                  <div className="bg-[#981F1F] h-14 w-14 rounded-xl flex items-center justify-center shrink-0">
                    <Target size={28} className="text-white" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-white font-bold text-xl">Har Gaon Tak Padhai</h4>
                    <p className="text-white/70 text-sm">Woh talent jo Delhi nahi ja sakta — hum uske paas aa rahe hain.</p>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
