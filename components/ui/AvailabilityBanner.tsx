"use client";

import { motion } from "framer-motion";

export function AvailabilityBanner() {
  return (
    <motion.div 
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-brand/90 to-blue-800 border-b border-white/10 shadow-lg backdrop-blur text-white flex items-center justify-center py-2 px-4"
    >
      <div className="flex items-center gap-3 text-sm md:text-base font-semibold tracking-wide">
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
        </span>
        <span className="hidden sm:inline">Availability:</span> 
        <span>Available from May 2026 — Currently Interviewing</span>
      </div>
    </motion.div>
  );
}
