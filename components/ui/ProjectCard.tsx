"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

import { ProjectImageSlider } from "./ProjectImageSlider";

type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  metrics: string;
  images: string[];
  live: string | null;
  github: string | null;
  caseStudyHref?: string;
  blogHref?: string;
};

export function ProjectCard({ project }: { project: ProjectProps }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col p-6 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden group w-full"
    >
      {/* Dynamic Hover Glow Background */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
      
      {/* Content wrapper to float above glow */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Interactive Image Slider */}
        <ProjectImageSlider images={project.images} />

        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            {project.live && (
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            )}
            <h3 className="text-xl font-semibold text-white tracking-tight">{project.title}</h3>
          </div>
          <div className="flex gap-3 text-muted shrink-0 z-20 relative">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer p-1">
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer p-1">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-brand font-bold mb-4 text-xs tracking-widest uppercase bg-brand/10 border border-brand/20 py-1.5 px-3 rounded-lg inline-flex w-fit shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
          {project.metrics}
        </p>

        <p className="text-white/60 mb-6 flex-grow leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/5 text-neutral-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* High-Conversion Deep Dives */}
        {(project.caseStudyHref || project.blogHref) && (
          <div className="flex gap-3 mt-2">
            {project.caseStudyHref && (
              <Link href={project.caseStudyHref} className="w-full text-center py-2.5 rounded-lg bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors">
                Read Case Study
              </Link>
            )}
            {project.blogHref && (
              <Link href={project.blogHref} className="w-full text-center py-2.5 rounded-lg border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-colors">
                Read Dev Blog
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
