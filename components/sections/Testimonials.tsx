import { Section } from "@/components/ui/Section";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahsan",
    role: "Network Administrator, ICCI",
    text: "Muhammad stands out for his proactive problem-solving and technical versatility. Whether configuring user permissions, writing OS automation scripts, or debugging complex layout issues, he works efficiently and ensures absolute reliability.",
  },
  {
    name: "Arsalan",
    role: "Systems Administrator, ICCI",
    text: "Muhammad’s ability to troubleshoot complex UI issues and maintain smooth IT network operations was invaluable. His attention to detail on front-end optimization significantly improved user experience and system responsiveness.",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-black py-24">
      <AnimatedElement className="w-full mb-16 text-center lg:text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Professional Endorsements</h2>
        <p className="text-muted max-w-2xl text-lg mx-auto lg:mx-0">
          References from exact people I have built production infrastructure with.
        </p>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto lg:mx-0">
        {testimonials.map((test, index) => (
          <AnimatedElement key={index} delay={0.1 * index} direction="up" className="relative group">
            <div className="absolute inset-0 bg-brand/5 rounded-2xl blur-lg transition duration-500 group-hover:bg-brand/10 opacity-0 group-hover:opacity-100" />
            <div className="relative p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] flex flex-col h-full shadow-2xl">
              <Quote className="w-10 h-10 text-brand/20 mb-6" />
              <p className="text-white/80 leading-relaxed text-lg mb-8 italic flex-grow">"{test.text}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="h-12 w-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center font-bold text-lg text-brand uppercase">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-tight">{test.name}</h4>
                  <p className="text-brand text-sm font-medium">{test.role}</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </Section>
  );
}
