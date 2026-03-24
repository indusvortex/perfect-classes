import React from 'react';
import { Marquee } from "@/registry/magicui/marquee";

const QUICK_LINKS = [
  { label: 'Class 6', icon: '📖' },
  { label: 'Class 7', icon: '📘' },
  { label: 'Class 8', icon: '📗' },
  { label: 'Class 9', icon: '📙' },
  { label: 'Class 10', icon: '📕' },
  { label: 'Class 11', icon: '📓' },
  { label: 'Class 12', icon: '📚' },
];

export function QuickLinks() {
  return (
    <section id="classes" className="bg-white border-b border-gray-100 py-3 overflow-hidden">
      <Marquee className="[--gap:0.5rem]" style={{"--duration": "20s", "--gap": "0.5rem"} as React.CSSProperties}>
        {QUICK_LINKS.map((l, i) => (
          <button key={i}
            className="flex items-center gap-1.5 bg-gray-50 hover:bg-[#981F1F] hover:text-white text-[#333] text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#981F1F] transition-all whitespace-nowrap shadow-sm hover:shadow-md mx-1 shrink-0">
            <span className="text-sm">{l.icon}</span>{l.label}
          </button>
        ))}
      </Marquee>
    </section>
  );
}
