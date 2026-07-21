"use client";

import { Section } from "@/components/ui/Section";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { useRecruiterMode } from "@/components/providers/RecruiterModeProvider";

export default function AboutContact() {
  const { isRecruiterMode } = useRecruiterMode();

  return (
    <Section id="contact" className="pb-32 border-t border-white/5 bg-white/[0.02]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
        {/* About Context */}
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-muted leading-relaxed mb-6">
            I am a Full Stack Developer and IT Specialist who chooses the right tool for the job. While I excel in building responsive ReactJS interfaces and modern TypeScript applications, I bring versatile experience across PHP, Node.js, MySQL, and PostgreSQL.
          </p>
          <p className="text-muted leading-relaxed">
            I don't just write frontend components or API endpoints; I optimize user performance, manage network access controls, and build native system automation scripts to ensure both web applications and IT infrastructure run reliably.
          </p>
        </AnimatedElement>

        {/* Contact CTA */}
        <AnimatedElement delay={0.2} className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-white font-medium text-lg mb-8">
            Open for Full-Stack & IT Support Roles.{" "}
            <span className={isRecruiterMode ? "text-[#ffaa00]" : "text-brand"}>
              On-Site (Islamabad) / Remote.
            </span>
            <span className="block mt-2 text-muted text-base">
              Available for internship & developer opportunities.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="https://calendly.com/" 
              target="_blank" 
              rel="noreferrer" 
              className={`flex items-center justify-center gap-2 text-white font-bold px-6 py-4 rounded-xl transition-colors ${
                isRecruiterMode 
                  ? "bg-[#ffaa00] text-black hover:bg-[#e69900] shadow-[0_0_20px_-5px_rgba(255,170,0,0.5)]" 
                  : "bg-brand hover:bg-blue-600 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]"
              }`}
            >
              Book a 15-min intro call
            </a>
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#ffaa00]/10 border border-[#ffaa00]/20 text-[#ffaa00] font-semibold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffaa00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ffaa00]"></span>
              </span>
              Avg. response time: under 2 hours
            </div>
          </div>

          <div className="space-y-4">
            <a 
              href="mailto:your-email@example.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted hover:text-white transition-colors group p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 w-fit md:w-full max-w-sm"
            >
              <Mail className={`w-5 h-5 ${isRecruiterMode ? "text-[#ffaa00]" : "text-brand"}`} />
              <span className="font-medium">your-email@example.com</span>
            </a>
            
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-muted hover:text-white transition-colors group p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 w-fit md:w-full max-w-sm"
            >
              <GithubIcon className={`w-5 h-5 ${isRecruiterMode ? "text-[#ffaa00]" : "text-brand"}`} />
              <span className="font-medium">github.com/your-username</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-muted hover:text-[#0a66c2] transition-colors group p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 w-fit md:w-full max-w-sm"
            >
              <LinkedinIcon className={`w-5 h-5 ${isRecruiterMode ? "text-[#ffaa00]" : "text-brand"} group-hover:text-[#0a66c2] transition-colors`} />
              <span className="font-medium text-white group-hover:text-[#0a66c2] transition-colors">LinkedIn Profile</span>
            </a>

            <div className="flex items-center gap-4 text-muted p-4 rounded-xl border border-transparent w-fit md:w-full max-w-sm">
              <div className="relative flex items-center justify-center w-5 h-5">
                <MapPin className="w-5 h-5 text-neutral-500 z-10 relative" />
                <span className={`absolute w-3 h-3 rounded-full animate-ping z-0 opacity-70 ${isRecruiterMode ? "bg-[#ffaa00]" : "bg-brand"}`} />
                <span className={`absolute w-1.5 h-1.5 rounded-full z-0 ${isRecruiterMode ? "bg-[#ffaa00]" : "bg-brand"}`} />
              </div>
              <span className="font-medium">Islamabad, Pakistan</span>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Section>
  );
}