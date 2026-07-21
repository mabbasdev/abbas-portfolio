"use client";

import { Section } from "@/components/ui/Section";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { useRecruiterMode } from "@/components/providers/RecruiterModeProvider";
import { Zap, ShieldCheck, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend & UI Engineering",
    skills: ["ReactJS", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3", "Responsive UI", "Web Vitals Optimization"],
  },
  {
    title: "Backend Systems & APIs",
    skills: ["Node.js", "Express.js", "PHP", "RESTful APIs", "JWT / Authentication", "JSON Data Mapping", "Google Apps Script API", "Git / GitHub"],
  },
  {
    title: "Databases & Storage",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Relational Schema Design", "SQL Queries & Optimization", "In-Memory Data Systems"],
  },
  {
    title: "IT Support & Systems Admin",
    skills: ["Active Directory", "User Access Controls", "Network IP Configuration", "PowerShell", "Batch Scripting", "Python"],
  },
];

export default function Skills() {
  const { isRecruiterMode } = useRecruiterMode();

  return (
    <Section id="skills" className="bg-white/[0.02]">
      <AnimatedElement className="w-full mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          {isRecruiterMode ? "Core Competencies" : "Technical Arsenal"}
        </h2>
        <p className="text-muted max-w-2xl text-lg">
          {isRecruiterMode
            ? "A structured overview of core engineering competencies across full-stack web applications, type-safe API builds, interface performance, and IT system administration."
            : "A comprehensive breakdown of the frameworks, databases, and IT systems technologies I leverage to build scalable web applications and manage infrastructure."}
        </p>
      </AnimatedElement>

      {isRecruiterMode ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <AnimatedElement delay={0.1} className="bg-[#ffaa00]/10 border border-[#ffaa00]/20 p-8 rounded-2xl flex flex-col items-start shadow-xl shadow-[#ffaa00]/5">
            <ShieldCheck className="w-10 h-10 text-[#ffaa00] mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Full-Stack Capability</h3>
            <p className="text-white/60">Building responsive frontends with ReactJS & Tailwind CSS, powered by flexible API backends across Node.js/Express, PHP, MySQL, and PostgreSQL.</p>
          </AnimatedElement>
          <AnimatedElement delay={0.2} className="bg-[#ffaa00]/10 border border-[#ffaa00]/20 p-8 rounded-2xl flex flex-col items-start shadow-xl shadow-[#ffaa00]/5">
            <Zap className="w-10 h-10 text-[#ffaa00] mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Frontend Optimization</h3>
            <p className="text-white/60">Refactoring user interfaces for high Lighthouse scores, cross-browser compatibility, and zero-dependency offline web applications.</p>
          </AnimatedElement>
          <AnimatedElement delay={0.3} className="bg-[#ffaa00]/10 border border-[#ffaa00]/20 p-8 rounded-2xl flex flex-col items-start shadow-xl shadow-[#ffaa00]/5">
            <Cpu className="w-10 h-10 text-[#ffaa00] mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">IT Infrastructure & Scripting</h3>
            <p className="text-white/60">Hands-on experience in active directory management, network IP configurations, interface debugging, and desktop task automation using PowerShell & Python.</p>
          </AnimatedElement>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {skillCategories.map((category, idx) => (
            <AnimatedElement key={idx} delay={idx * 0.1} className="flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-mono rounded bg-[#111] border border-[#222] text-neutral-300 hover:text-white hover:border-brand/40 hover:bg-[#1a1a1a] transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)] group flex items-center gap-2"
                  >
                    <span className="text-brand opacity-50 group-hover:opacity-100 transition-opacity">{'>'}</span>
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedElement>
          ))}
        </div>
      )}
    </Section>
  );
}