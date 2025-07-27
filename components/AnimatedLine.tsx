"use client";

import { motion } from "framer-motion";

export default function AnimatedLine() {
  return (
    <div className="relative w-full h-1 overflow-hidden">
      {/* Glowing Line */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-70"
      />

      {/* Base Line */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-700/40 via-slate-500/80 to-slate-700/40 h-[2px]" />

      {/* Ripple Effect */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-full w-1 bg-indigo-500 origin-center"
      />
    </div>
  );
}
