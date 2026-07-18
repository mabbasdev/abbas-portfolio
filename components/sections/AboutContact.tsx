import { Section } from "@/components/ui/Section";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export default function AboutContact() {
  return (
    <Section id="contact" className="pb-32 border-t border-white/5 bg-white/[0.02]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
        {/* About Context */}
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-muted leading-relaxed mb-6">
            I am a Backend Engineer who chooses the right tool for the job. While I excel in Node.js and TypeScript, I am framework-agnostic, having shipped production platforms in PHP/Laravel and Django. 
          </p>
          <p className="text-muted leading-relaxed">
            I don't just write API endpoints; I own the deployment process, set up CI/CD pipelines, optimize database queries, and ensure systems can handle real-world scale reliably.
          </p>
        </AnimatedElement>

        {/* Contact CTA */}
        <AnimatedElement delay={0.2} className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-white font-medium text-lg mb-8">
            Open to global opportunities. <span className="text-brand">EU Relocation Ready / Open to Remote.</span>
            <span className="block mt-2 text-muted text-base">I can start immediately.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="https://calendly.com/reyyanalam6/15-minute-meeting" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-brand text-white font-bold px-6 py-4 rounded-xl hover:bg-blue-600 transition-colors shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]">
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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=reyyanalam6@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted hover:text-white transition-colors group p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 w-fit md:w-full max-w-sm"
            >
              <Mail className="w-5 h-5 text-brand" />
              <span className="font-medium">reyyanalam6@gmail.com</span>
            </a>
            
            <a 
              href="https://github.com/Reyyan31" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-muted hover:text-white transition-colors group p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 w-fit md:w-full max-w-sm"
            >
              <GithubIcon className="w-5 h-5 text-brand" />
              <span className="font-medium">github.com/Reyyan31</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/reyyan-alam-a23679363/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-muted hover:text-[#0a66c2] transition-colors group p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 w-fit md:w-full max-w-sm"
            >
              <LinkedinIcon className="w-5 h-5 text-brand group-hover:text-[#0a66c2] transition-colors" />
              <span className="font-medium text-white group-hover:text-[#0a66c2] transition-colors">LinkedIn Profile</span>
            </a>

            <div className="flex items-center gap-4 text-muted p-4 rounded-xl border border-transparent w-fit md:w-full max-w-sm">
              <div className="relative flex items-center justify-center w-5 h-5">
                <MapPin className="w-5 h-5 text-neutral-500 z-10 relative" />
                <span className="absolute w-3 h-3 bg-brand rounded-full animate-ping z-0 opacity-70" />
                <span className="absolute w-1.5 h-1.5 bg-brand rounded-full z-0" />
              </div>
              <span className="font-medium">Islamabad, Pakistan</span>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Section>
  );
}
