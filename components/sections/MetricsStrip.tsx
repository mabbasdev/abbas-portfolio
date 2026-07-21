import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const metrics = [
  { label: "Core Web Vitals Performance", value: 95, suffix: "+" },
  { label: "Full-Stack & Utility Builds", value: 5, suffix: "+" },
  { label: "Responsive UI Compatibility", value: 100, suffix: "%" },
  { label: "System Uptime & Reliability", value: 99.9, suffix: "%" },
];
export default function MetricsStrip() {
  return (
    <section className="w-full py-16 border-y border-white/5 bg-white/[0.02]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <AnimatedElement
              key={index}
              delay={0.1 * index}
              direction="up"
              className="flex flex-col items-start md:items-center md:text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-2">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm font-bold text-brand uppercase tracking-[0.2em]">
                {metric.label}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
