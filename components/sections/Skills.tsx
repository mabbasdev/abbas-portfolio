"use client";

import { Section } from "@/components/ui/Section";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { useRecruiterMode } from "@/components/providers/RecruiterModeProvider";
import { Zap, ShieldCheck, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Core",
    skills: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "WebSockets", "JWT/OAuth", "Swagger/OpenAPI"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Linux Admin (cPanel/Nginx)", "Docker & Compose", "CI/CD Pipelines", "AWS (EC2/S3)", "SSL/DNS", "Zero-Downtime Deploys", "Git/GitHub"],
  },
  {
    title: "Databases & Caching",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Redis", "Schema Design", "Query Optimization"],
  },
  {
    title: "Languages & Frameworks",
    skills: ["TypeScript / JavaScript", "PHP / Laravel", "Python / Django", "SQL", "React.js / Next.js", "Tailwind CSS"],
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
            ? "I bridge the gap between complex engineering and business goals. My focus is on delivering systems that do not crash, scale infinitely, and protect user data."
            : "My expertise is deeply rooted in backend systems and infrastructure, with full-stack capabilities when needed."}
        </p>
      </AnimatedElement>

      {isRecruiterMode ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <AnimatedElement delay={0.1} className="bg-[#ffaa00]/10 border border-[#ffaa00]/20 p-8 rounded-2xl flex flex-col items-start shadow-xl shadow-[#ffaa00]/5">
            <ShieldCheck className="w-10 h-10 text-[#ffaa00] mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">High Availability</h3>
            <p className="text-white/60">Architecting zero-downtime, multi-tenant databases and load balancing traffic for mission-critical enterprise platforms.</p>
          </AnimatedElement>
          <AnimatedElement delay={0.2} className="bg-[#ffaa00]/10 border border-[#ffaa00]/20 p-8 rounded-2xl flex flex-col items-start shadow-xl shadow-[#ffaa00]/5">
            <Zap className="w-10 h-10 text-[#ffaa00] mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Rapid Delivery</h3>
            <p className="text-white/60">Familiar with Agile/Scrum sprints, pushing clean PRs, and meeting tight deadlines across async global engineering teams.</p>
          </AnimatedElement>
          <AnimatedElement delay={0.3} className="bg-[#ffaa00]/10 border border-[#ffaa00]/20 p-8 rounded-2xl flex flex-col items-start shadow-xl shadow-[#ffaa00]/5">
            <Cpu className="w-10 h-10 text-[#ffaa00] mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">System Optimization</h3>
            <p className="text-white/60">Dropping latency metrics, caching heavy SQL queries with Redis, and slicing massive server hosting costs via optimization.</p>
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
