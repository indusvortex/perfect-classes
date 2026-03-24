import React from 'react';
import { Link } from 'react-router-dom';
import { Target, ArrowRight } from 'lucide-react';

// ─── DEDICATED PAGES (PLACEHOLDERS) ──────────────────────────────────────────

function PagePlaceholder({ title }: { title: string }) {
  return (
    <div className="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[#FAFAFA]">
      <div className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-6">
        <Target size={32} className="text-[#981F1F]" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#121212] mb-4">{title}</h1>
      <p className="text-[#666] max-w-lg mb-8 text-lg">
        This dedicated page is currently being structured. Our team is adding the specific content for {title}.
      </p>
      <Link to="/" className="bg-[#981F1F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#7a1818] transition-colors shadow-lg shadow-[#981F1F]/20 flex items-center gap-2">
        <ArrowRight className="rotate-180" size={18} /> Return to Homepage
      </Link>
    </div>
  );
}

export default PagePlaceholder;
