import React from 'react';
import { Marquee } from "@/registry/magicui/marquee";
import { CheckCircle, Users, Zap, BookOpen, Star, Award, Heart } from 'lucide-react';
import { useLang, T } from '@/i18n/translations';

export function QuickLinks() {
  const { lang } = useLang();

  const ACHIEVEMENTS = [
    { icon: CheckCircle, text: T[lang].achNcert,  color: '#981F1F' },
    { icon: Zap,          text: T[lang].ach100,   color: '#FDB813' },
    { icon: Users,        text: T[lang].ach5000,  color: '#981F1F' },
    { icon: BookOpen,     text: T[lang].achClass, color: '#2563EB' },
    { icon: Star,         text: T[lang].achVipin, color: '#FDB813' },
    { icon: Award,        text: T[lang].ach200,   color: '#981F1F' },
    { icon: Heart,        text: T[lang].achRural, color: '#E11D48' },
  ];

  return (
    <section id="classes" className="bg-white border-b border-gray-100 py-3 overflow-hidden">
      <Marquee className="[--gap:0.5rem]" style={{"--duration": "28s", "--gap": "0.5rem"} as React.CSSProperties}>
        {ACHIEVEMENTS.map((a, i) => (
          <div key={i}
            className="flex items-center gap-2 bg-gray-50 text-[#333] text-xs font-semibold px-4 py-2 rounded-full border border-gray-200 whitespace-nowrap shadow-sm mx-1.5 shrink-0"
          >
            <a.icon size={13} style={{ color: a.color }} />
            <span>{a.text}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
