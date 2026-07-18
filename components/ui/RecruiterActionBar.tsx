"use client";

import { useRecruiterMode } from "@/components/providers/RecruiterModeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Mail, Phone, CheckCircle2, Download } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function RecruiterActionBar() {
  const { isRecruiterMode } = useRecruiterMode();
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <AnimatePresence>
        {isRecruiterMode && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] md:w-auto max-w-fit"
          >
            <div className="bg-black/80 backdrop-blur-xl border border-[#ffaa00]/30 rounded-2xl p-1 md:p-2 flex items-center gap-1 md:gap-2 shadow-[0_0_50px_-12px_rgba(255,170,0,0.4)]">
              {/* Status Indicator */}
              <div className="flex items-center gap-2 px-2 md:px-4 py-2 bg-[#ffaa00]/10 rounded-xl border border-[#ffaa00]/20">
                <div className="w-2 h-2 rounded-full bg-[#ffaa00] animate-pulse shrink-0" />
                <span className="text-[#ffaa00] text-[10px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap">
                  <span className="hidden sm:inline">Immediate Start Available</span>
                  <span className="sm:hidden">Available</span>
                </span>
              </div>

              <div className="h-8 w-px bg-white/10 mx-0.5 md:mx-2" />

              {/* Actions */}
              <div className="flex items-center gap-0.5 md:gap-1">
                <a
                  href="/Reyyan_Alam_CV.docx"
                  download
                  className="p-2 md:p-3 rounded-xl hover:bg-[#ffaa00] hover:text-black text-white transition-all group relative"
                  title="Download Resume"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#ffaa00] text-black text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Download CV
                  </span>
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=reyyanalam6@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 rounded-xl hover:bg-[#ffaa00] hover:text-black text-white transition-all group relative"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/reyyan-alam-a23679363/"
                  target="_blank"
                  className="p-2 md:p-3 rounded-xl hover:bg-[#ffaa00] hover:text-black text-white transition-all group relative"
                >
                  <LinkedinIcon className="w-4 h-4 md:w-5 md:h-5" />
                </a>

                <a
                  href="https://github.com/Reyyan31"
                  target="_blank"
                  className="p-2 md:p-3 rounded-xl hover:bg-[#ffaa00] hover:text-black text-white transition-all group relative"
                >
                  <GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
                </a>

                <button
                  onClick={() => copyToClipboard("+92 322 9113106")}
                  className="p-2 md:p-3 rounded-xl hover:bg-[#ffaa00] hover:text-black text-white transition-all group relative"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[101] bg-[#ffaa00] text-black font-bold px-4 py-2 rounded-lg shadow-xl flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            Phone Number Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
