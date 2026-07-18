"use client";

import { Section } from "@/components/ui/Section";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { useRecruiterMode } from "@/components/providers/RecruiterModeProvider";
import { TrendingUp, Award, Zap } from "lucide-react";

const experiences = [
  {
    company: "Creative IT Park",
    role: "Backend Developer",
    date: "Jan 2026 – Present",
    impact: "Maintained ≥99% uptime across live systems, standardized deployments, and built full HR/ERP platforms serving 12,000+ users.",
    roi: "60% Admin Reduction"
  },
  {
    company: "Nodescale LLC (US)",
    role: "Backend Engineer (Remote)",
    date: "Oct 2025 – Jan 2026",
    impact: "Built a real-time event-discovery production backend (BuzzMap) delivering geolocation APIs to US standards in an async team.",
    roi: "99.99% Node Uptime"
  },
  {
    company: "Seven Koncepts",
    role: "Full Stack Software Engineer",
    date: "Aug 2025 – Dec 2025",
    impact: "Built and shipped content platforms and e-commerce projects across Node.js, Django, Flask, and PHP. Containerised services with Docker, deployed to AWS EC2/S3, and maintained CI/CD pipelines.",
    roi: "Framework-Agnostic Delivery"
  },
  {
    company: "National Testing Service (NTS)",
    role: "Full Stack Developer",
    date: "Jun 2025 – Aug 2025",
    impact: "Improved page load times by 25% for 100,000+ active users. Integrated React with Laravel via JWT/OAuth.",
    roi: "25% Performance Lift"
  },
];

export default function Experience() {
  const { isRecruiterMode } = useRecruiterMode();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section id="experience">
      <AnimatedElement className="w-full mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          {isRecruiterMode ? "Operational Impact History" : "Experience"}
        </h2>
        <p className="text-muted max-w-2xl text-lg">
          {isRecruiterMode 
            ? "A track record of engineering high-ROI platforms and leading mission-critical backend architectures."
            : "A track record of engineering scalable platforms and leading backend architectures."}
        </p>
      </AnimatedElement>

      <div ref={containerRef} className="w-full relative ml-3 md:ml-4 pl-8 space-y-16">
        {/* The Animated Glowing Data Stream Line */}
        <div className="absolute top-0 bottom-0 left-[2px] w-px bg-white/10" />
        <motion.div 
          className={`absolute top-0 bottom-0 left-[1px] w-[3px] origin-top transition-colors duration-500 z-20 ${isRecruiterMode ? 'bg-[#ffaa00] shadow-[0_0_15px_1px_rgba(255,170,0,0.5)]' : 'bg-brand shadow-[0_0_15px_1px_rgba(59,130,246,0.5)]'}`}
          style={{ scaleY }}
        />

        {experiences.map((exp, index) => (
          <AnimatedElement key={index} delay={0.1} className="relative z-10 group">
            <div className={`absolute -left-[40px] top-1.5 h-4 w-4 rounded-full bg-black border-2 flex items-center justify-center transition-all duration-500 z-20 ${isRecruiterMode ? 'border-[#ffaa00] shadow-[0_0_10px_0px_rgba(255,170,0,0.8)]' : 'border-brand shadow-[0_0_10px_0px_rgba(59,130,246,0.8)]'}`}>
              <div className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${isRecruiterMode ? 'bg-[#ffaa00]' : 'bg-brand'}`} />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
              <span className={`font-bold text-lg transition-colors duration-500 ${isRecruiterMode ? 'text-[#ffaa00]' : 'text-brand'}`}>{exp.company}</span>
              
              {isRecruiterMode && (
                <div className="px-3 py-1 rounded-lg bg-[#ffaa00]/10 border border-[#ffaa00]/20 flex items-center gap-2 text-[#ffaa00] text-xs font-black uppercase tracking-widest sm:ml-4">
                  <TrendingUp className="w-3 h-3" />
                  {exp.roi}
                </div>
              )}
              
              <span className="text-sm font-medium text-muted/60 sm:ml-auto border border-white/5 bg-white/5 py-1 px-3 rounded-full">{exp.date}</span>
            </div>
            
            <p className="text-muted leading-relaxed max-w-3xl text-lg relative">
              {exp.impact}
            </p>
          </AnimatedElement>
        ))}
      </div>
    </Section>
  );
}
