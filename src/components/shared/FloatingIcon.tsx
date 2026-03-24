import React from 'react';
import { motion } from 'motion/react';


// Floating icon component for playful background
function FloatingIcon({ emoji, className, delay = 0, duration = 4 }: { emoji: string; className: string; delay?: number; duration?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute text-2xl sm:text-3xl lg:text-4xl select-none pointer-events-none ${className}`}
    >
      {emoji}
    </motion.div>
  );
}

export default FloatingIcon;
