"use client";

import Link from "next/link";
import { ArrowLeft, Server, Database, Shield, Users, Network, TrendingUp } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { InteractiveGallery } from "@/components/ui/InteractiveGallery";

export default function PomPakCaseStudy() {
  return (
    <main className="min-h-screen bg-[#000] text-foreground pt-32 pb-24 px-6 md:px-12 selection:bg-brand selection:text-white">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-brand hover:text-white transition-colors mb-12 font-semibold">
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
        
        <AnimatedElement>
          <div className="flex gap-4 items-center mb-6">
            <span className="px-3 py-1 rounded-full bg-[#ffaa00]/10 border border-[#ffaa00]/30 text-[#ffaa00] text-sm font-bold uppercase tracking-widest">Case Study</span>
            <span className="text-white/40 text-sm font-medium">Fintech / B2G</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-8 leading-tight">
            Scaling PomPak to 1M+ Users
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-12 font-medium border-l-4 border-brand pl-6">
            Engineering a highly available national financial literacy platform backed by the State Bank of Pakistan. How I led the backend to support massive concurrent spikes across 45+ districts.
          </p>
        </AnimatedElement>

        {/* Global Impact Grid */}
        <AnimatedElement delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Users className="w-6 h-6 text-brand mb-4" />
            <div className="text-3xl font-black text-white mb-1">1M+</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Registered Users</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <TrendingUp className="w-6 h-6 text-[#ffaa00] mb-4" />
            <div className="text-3xl font-black text-white mb-1">750k</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Active Students</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Database className="w-6 h-6 text-green-500 mb-4" />
            <div className="text-3xl font-black text-white mb-1">53</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Multi-tenant DBs</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Shield className="w-6 h-6 text-purple-500 mb-4" />
            <div className="text-3xl font-black text-white mb-1">100%</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Audit Compliance</div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2} className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
          <p className="text-muted leading-relaxed mb-8">
            The platform faced extreme traffic patterns typical of national rollout programs: massive, unpredictable spikes during school hours when entire districts logged on simultaneously to take financial literacy quizzes. The existing monolithic approach was struggling under database transaction locks, causing dreaded timeout drops during high-stakes exams.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">The Architecture</h2>
          
          {/* Visual Architecture Flow */}
          <div className="w-full bg-[#111] border border-white/10 rounded-2xl p-8 mb-8 my-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <Network className="w-8 h-8 text-blue-400" />
                </div>
                <div className="font-bold text-white">AWS Load Balancer</div>
                <div className="text-xs text-white/50">Traffic Distribution</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#ffaa00]/10 border border-[#ffaa00]/30 flex items-center justify-center">
                  <Server className="w-8 h-8 text-[#ffaa00]" />
                </div>
                <div className="font-bold text-white">Dockerised Laravel</div>
                <div className="text-xs text-white/50">Stateless API Node</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <div className="font-bold text-white">SQL Server Stored Procs</div>
                <div className="text-xs text-white/50">Optimized Read/Writes</div>
              </div>
            </div>
            
            <div className="hidden md:flex justify-between w-full px-20 absolute top-1/2 -translate-y-1/2 pointer-events-none">
              <ArrowLeft className="w-6 h-6 text-white/20 rotate-180" />
              <ArrowLeft className="w-6 h-6 text-white/20 rotate-180" />
            </div>
          </div>

          <InteractiveGallery 
            title="PomPak Learning Platform" 
            images={[
              "/project-imgs/pompak-1.jpg",
              "/project-imgs/pompak-2.jpg",
              "/project-imgs/pompak-3.jpg",
              "/project-imgs/pompak-4.jpg",
            ]} 
          />

          <p className="text-muted leading-relaxed mb-6">
            To solve the concurrency bottlenecks, I engineered a massive overhaul:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-muted mb-12">
            <li><strong>SQL Server Stored Procedures:</strong> Offloaded complex grading analytics and multi-table joins from Laravel's Eloquent ORM directly into raw SQL stored procedures, reducing execution time by 85%.</li>
            <li><strong>Stateless Containerization:</strong> Dockerized the Laravel application to allow AWS EC2 instances to auto-scale horizontally when CPU load breached 70%.</li>
            <li><strong>Optimistic Caching:</strong> Integrated caching for high-frequency low-mutation routes.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mb-6">The Result</h2>
          <p className="text-muted leading-relaxed p-6 bg-white/5 border-l-4 border-[#ffaa00] rounded-r-xl">
            PomPak scaled beautifully during the national phase-out. Not only did we achieve over 1 million users reliably, but infrastructure costs scaled efficiently, and server timeout metrics plummeted to absolute zero during examination hours. This project cemented my conviction that framework abstractions are a tool, but database mastery is fundamental.
          </p>
        </AnimatedElement>
        
      </div>
    </main>
  );
}
