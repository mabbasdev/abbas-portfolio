"use client";

import Link from "next/link";
import { ArrowLeft, Server, Database, Shield, Users, LayoutDashboard, FileText } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { InteractiveGallery } from "@/components/ui/InteractiveGallery";

export default function SLSCaseStudy() {
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
            <span className="text-white/40 text-sm font-medium">EdTech / ERP</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-8 leading-tight">
            SLS: The School Management Engine
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-12 font-medium border-l-4 border-brand pl-6">
            Building a multi-tenant ERP serving 12,000+ students. How I engineered 8 role-based portals and automated complex financial auditing for a nationwide educational network.
          </p>
        </AnimatedElement>

        {/* Global Impact Grid */}
        <AnimatedElement delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Users className="w-6 h-6 text-brand mb-4" />
            <div className="text-3xl font-black text-white mb-1">12k+</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Active Students</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <LayoutDashboard className="w-6 h-6 text-[#ffaa00] mb-4" />
            <div className="text-3xl font-black text-white mb-1">8</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Role Portals</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <FileText className="w-6 h-6 text-green-500 mb-4" />
            <div className="text-3xl font-black text-white mb-1">Automated</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Financial Audits</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Shield className="w-6 h-6 text-purple-500 mb-4" />
            <div className="text-3xl font-black text-white mb-1">RBAC</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Granular Auth</div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2} className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
          <p className="text-muted leading-relaxed mb-8">
            The SLS School ERP was a massive migration from fragmented systems to a unified, multi-tenant platform. The primary challenge was the "Student Lifecycle"—handling everything from initial admission to fee challan generation, automated grading, and finally, daily financial audit reports that had to match real-world cash books with 100% precision.
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
                <div className="font-bold text-white">8 Role Portals</div>
                <div className="text-xs text-white/50">Admin/Student/Teacher</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#ffaa00]/10 border border-[#ffaa00]/30 flex items-center justify-center">
                  <Server className="w-8 h-8 text-[#ffaa00]" />
                </div>
                <div className="font-bold text-white">Laravel Core</div>
                <div className="text-xs text-white/50">Multi-tenant Logic</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <div className="font-bold text-white">MySQL / Redis</div>
                <div className="text-xs text-white/50">Relational Persistence</div>
              </div>
            </div>
            
            <div className="hidden md:flex justify-between w-full px-20 absolute top-1/2 -translate-y-1/2 pointer-events-none">
              <ArrowLeft className="w-6 h-6 text-white/20 rotate-180" />
              <ArrowLeft className="w-6 h-6 text-white/20 rotate-180" />
            </div>
          </div>

          <InteractiveGallery 
            title="SLS Management Interface" 
            images={[
              "/project-imgs/sls-1.jpg",
              "/project-imgs/sls-2.webp",
            ]} 
          />

          <p className="text-muted leading-relaxed mb-6">
            Key engineering implementations included:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-muted mb-12">
            <li><strong>Bulk Challan Generation:</strong> Engineered a PDF worker queue capable of generating 12,000+ fee challans in a single automated monthly cycle.</li>
            <li><strong>Financial Audit Framework:</strong> Built a double-entry inspired auditing module to track tuition income, discount waivers, and cash collections.</li>
            <li><strong>Staging-to-Production Pipeline:</strong> Managed all deployments and DB migrations, ensuring mission-critical educational data remained safe and available.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mb-6">The Result</h2>
          <p className="text-muted leading-relaxed p-6 bg-white/5 border-l-4 border-[#ffaa00] rounded-r-xl">
             SLS is currently serving as the central nervous system for the Creative IT Park school network. By automating the previously manual fee collection and grading processes, we reduced administrative labor by 60% and eliminated human error in financial reporting for over 12,000 students.
          </p>
        </AnimatedElement>
        
      </div>
    </main>
  );
}
