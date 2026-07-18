"use client";

import Link from "next/link";
import { ArrowLeft, Server, Database, Shield, Zap, TrendingUp, LayoutDashboard, FileText } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { InteractiveGallery } from "@/components/ui/InteractiveGallery";

export default function HelloITCaseStudy() {
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
            <span className="text-white/40 text-sm font-medium">Enterprise / CRM</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-8 leading-tight">
            Hello Creative IT Portal
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-12 font-medium border-l-4 border-brand pl-6">
            Engineering an all-in-one internal corporate gateway. From Kanban project pipelines to double-entry accounting—how I built the operational backbone of a fast-growing IT firm.
          </p>
        </AnimatedElement>

        {/* Global Impact Grid */}
        <AnimatedElement delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Database className="w-6 h-6 text-brand mb-4" />
            <div className="text-3xl font-black text-white mb-1">Atomic</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Financial Ledger</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <TrendingUp className="w-6 h-6 text-[#ffaa00] mb-4" />
            <div className="text-3xl font-black text-white mb-1">CRM</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Deal Pipelines</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Zap className="w-6 h-6 text-green-500 mb-4" />
            <div className="text-3xl font-black text-white mb-1">Payroll</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Automated Payouts</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Shield className="w-6 h-6 text-purple-500 mb-4" />
            <div className="text-3xl font-black text-white mb-1">B2B</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Client Invoicing</div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2} className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
          <p className="text-muted leading-relaxed mb-8">
            The portal was designed to replace three separate SaaS products: a CRM, a Project Management tool, and an Accounting software. The biggest engineering hurdle was building a custom "Double-Entry Accounting" module that tracked and balanced every single penny across HR payroll, project costs, and client invoicing in real-time.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">The Architecture</h2>
          
          {/* Visual Architecture Flow */}
          <div className="w-full bg-[#111] border border-white/10 rounded-2xl p-8 mb-8 my-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <LayoutDashboard className="w-8 h-8 text-blue-400" />
                </div>
                <div className="font-bold text-white">Full HR Suite</div>
                <div className="text-xs text-white/50">Shifts / Leaves / Payroll</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#ffaa00]/10 border border-[#ffaa00]/30 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-[#ffaa00]" />
                </div>
                <div className="font-bold text-white">Project Engines</div>
                <div className="text-xs text-white/50">Kanban / Gantt Tracking</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <div className="font-bold text-white">Accounting Core</div>
                <div className="text-xs text-white/50">P&L / Balance Sheet</div>
              </div>
            </div>
            
            <div className="hidden md:flex justify-between w-full px-20 absolute top-1/2 -translate-y-1/2 pointer-events-none">
              <ArrowLeft className="w-6 h-6 text-white/20 rotate-180" />
              <ArrowLeft className="w-6 h-6 text-white/20 rotate-180" />
            </div>
          </div>

          <InteractiveGallery 
            title="Hello Enterprise Portal" 
            images={[
              "/project-imgs/hello-1.jpg",
              "/project-imgs/hello-2.webp",
            ]} 
          />

          <p className="text-muted leading-relaxed mb-6">
            Core features built from the ground up:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-muted mb-12">
            <li><strong>Double-Entry Ledger:</strong> Implemented a strictly atomic database transaction layer to ensure debit/credit balance across the entire ecosystem.</li>
            <li><strong>Kanban-to-Invoice Flow:</strong> Created a seamless pipeline where moving a project ticket to "Completed" automatically generates a draft invoice for the client.</li>
            <li><strong>Biometric Integration:</strong> Synced staff attendance with payroll modules to automate overtime and leave-balance calculations.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mb-6">The Result</h2>
          <p className="text-muted leading-relaxed p-6 bg-white/5 border-l-4 border-[#ffaa00] rounded-r-xl">
             The Creative IT Portal consolidated the firm's entire operations into a single sign-on experience. By owning the data layer for both project work and financial accounting, the executive team achieved 100% visibility into project profitability and reduced payroll processing time from 3 days to under 15 minutes.
          </p>
        </AnimatedElement>
        
      </div>
    </main>
  );
}
