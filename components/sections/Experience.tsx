"use client";

import { Section } from "@/components/ui/Section";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { useRecruiterMode } from "@/components/providers/RecruiterModeProvider";
import { TrendingUp } from "lucide-react";

const experiences = [
  {
    company: "Islamabad Chamber of Commerce & Industry (ICCI)",
    role: "IT Support Engineer Intern",
    date: "Jul 2025 – Sep 2025",
    impact: "Re-engineered official portal frontends using ReactJS and Tailwind CSS to resolve cross-device responsiveness issues, managed Active Directory user access policies, and configured local network IP schemas.",
    roi: "UI Responsiveness & Core Vitals Lift"
  },
  {
    company: "Freelance & Independent Client Work",
    role: "Full-Stack Web Developer",
    date: "2025 – Present",
    impact: "Delivered tailored web applications for client projects—including custom frontend layouts and technical assets for clients like Boiler Techniques—focusing on responsive design, modern UI/UX, and fast load times.",
    roi: "Client-Centric Web Delivery"
  },
  {
    company: "Self-Initiated Software Projects",
    role: "Full-Stack Web Engineer",
    date: "2025 – Present",
    impact: "Architected a custom PHP & MySQL full-stack e-commerce platform featured with a responsive client storefront, dynamic product catalog, and an administrative management dashboard for order, inventory, and user handling—alongside building zero-backend web engines like MirchiHut and custom API lead utilities.",
    roi: "Full-Stack System Architecture"
  },
  {
    company: "Systems & Desktop Operations",
    role: "IT & Scripting Automation Specialist",
    date: "2025 – Present",
    impact: "Developed native system scripts (PowerShell, Batch, VBScript, Python) to automate local developer workflows, system startup tasks, and administrative procedures.",
    roi: "Automated Workflows"
  }
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
          {isRecruiterMode ? "Professional & Practical Impact" : "Experience"}
        </h2>
        <p className="text-muted max-w-2xl text-lg">
          {isRecruiterMode
            ? "A proven track record delivering responsive web applications for clients, engineering independent full-stack builds, and managing IT infrastructure."
            : "A showcase of professional internships, freelance client solutions, independent software builds, and system automation workflows."}
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