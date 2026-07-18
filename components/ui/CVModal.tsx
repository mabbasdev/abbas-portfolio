"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";

type CVModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CVModal({ isOpen, onClose }: CVModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
           {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white text-black rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header / Action Bar */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-200 bg-neutral-50 shrink-0 gap-2">
              <h2 className="text-lg sm:text-2xl font-black tracking-tight text-neutral-900 truncate pr-2">
                Reyyan_Alam_CV<span className="hidden xs:inline">.docx</span>
                <span className="text-sm font-medium text-neutral-500 ml-2 hidden lg:inline">(Live Web Version)</span>
              </h2>
              
              <div className="flex gap-1.5 sm:gap-4 shrink-0">
                <a 
                  href="/Reyyan_Alam_CV.docx" 
                  download
                  className="flex items-center gap-2 bg-[#2563eb] text-white px-3 py-2 sm:px-5 sm:py-2.5 rounded-md font-bold hover:bg-blue-700 transition-colors shadow-sm text-sm sm:text-base whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                  <span className="hidden md:inline">.docx</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 sm:p-2.5 rounded-md hover:bg-neutral-200 text-neutral-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable CV Document Body - Styled like a classic resume sheet */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-12 pb-24 styled-scrollbar bg-[#f8f9fa] block">
              <div className="w-full max-w-[850px] mx-auto bg-white shadow-md border border-neutral-200 p-8 sm:p-14 min-h-[1056px] h-fit">
                
                {/* CV Header */}
                <header className="mb-6 text-center border-b-2 border-black pb-4">
                  <h1 className="text-[28px] sm:text-4xl text-black uppercase tracking-wider mb-2 font-bold font-serif">REYYAN ALAM</h1>
                  <h2 className="text-[15px] sm:text-lg text-neutral-800 font-medium mb-3 uppercase tracking-widest">
                    Backend Engineer • Node.js & APIs • Cloud & DevOps
                  </h2>
                  <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-neutral-900 text-[14px]">
                    <span>reyyanalam6@gmail.com</span>
                    <span>•</span>
                    <span>+92 322 9113106</span>
                    <span>•</span>
                    <span>Islamabad, Pakistan</span>
                    <span>•</span>
                    <a href="https://github.com/Reyyan31" target="_blank" rel="noreferrer" className="hover:underline text-blue-800">github.com/Reyyan31</a>
                  </div>
                </header>

                {/* Professional Summary */}
                <section className="mb-6">
                  <h3 className="text-[16px] font-bold text-black uppercase border-b border-black mb-2 pb-1">PROFESSIONAL SUMMARY</h3>
                  <p className="text-neutral-900 text-[14px] leading-snug">
                    Backend Engineer with 1+ year of production experience building systems that handle real users at real scale — from a national government platform with 1M+ users to an ERP managing 12,000+ students. Comfortable in Node.js, PHP/Laravel, and Django, choosing the right tool for the job. Solid DevOps fundamentals: Linux administration, Docker, CI/CD, and cloud deployments. Experienced in remote async collaboration with a US-based engineering team. Open to relocation to EU/UK/US with visa sponsorship, or fully remote.
                  </p>
                </section>

                {/* Work Experience */}
                <section className="mb-6">
                  <h3 className="text-[16px] font-bold text-black uppercase border-b border-black mb-3 pb-1">WORK EXPERIENCE</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-black text-[14px] leading-snug">
                        <h4>Backend Developer • Creative IT Park • Islamabad, Pakistan</h4>
                        <span className="font-normal italic">Jan 2026 – Present</span>
                      </div>
                      <ul className="list-disc pl-[20px] mt-[6px] space-y-[4px] text-neutral-900 text-[14px] leading-snug marker:text-black">
                        <li>Built SLS — a school ERP serving 12,000+ students across 8 role-based portals. Covers full student lifecycle, fee/challan generation with bulk print, attendance, exam grading, and financial audit reports (Excel/PDF).</li>
                        <li>Built Hello Creative IT Portal — a company-wide CRM/ERP managing all staff HR (payroll, shifts, leaves), Kanban deal pipelines, Gantt-chart project tracking, invoicing, and a double-entry accounting module (P&L, balance sheet, ledger).</li>
                        <li>Own all server operations: Linux/cPanel provisioning, SSL/DNS, environment separation, DB migrations, and production monitoring — maintaining ≥99% uptime across live systems.</li>
                        <li>Standardised deployment process (staging → production, rollback procedures, health checks), cutting production incidents significantly.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline font-bold text-black text-[14px] leading-snug mt-4">
                        <h4>Backend Engineer (Remote) • Nodescale LLC • United States</h4>
                        <span className="font-normal italic">Oct 2025 – Jan 2026</span>
                      </div>
                      <ul className="list-disc pl-[20px] mt-[6px] space-y-[4px] text-neutral-900 text-[14px] leading-snug marker:text-black">
                        <li>Built the production backend for BuzzMap (buzzmap.org) — a live real-time event-discovery platform — using Node.js/Express, MongoDB, Redis, and WebSockets.</li>
                        <li>Delivered geolocation APIs, OAuth 2.0 auth, rate limiting, and structured error handling to US production standards in a fully async remote team.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline font-bold text-black text-[14px] leading-snug mt-4">
                        <h4>Full Stack Software Engineer • Seven Koncepts • Islamabad, Pakistan</h4>
                        <span className="font-normal italic">Aug 2025 – Dec 2025</span>
                      </div>
                      <ul className="list-disc pl-[20px] mt-[6px] space-y-[4px] text-neutral-900 text-[14px] leading-snug marker:text-black">
                        <li>Built and shipped content platforms (content upload, feed/scroll experiences) and e-commerce projects across multiple client engagements.</li>
                        <li>Delivered across Node.js, Django, Flask, and PHP within the same company — framework-agnostic backend delivery under Agile/Scrum.</li>
                        <li>Containerised services with Docker, deployed to AWS EC2/S3, maintained CI/CD pipelines and automated DB migrations.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline font-bold text-black text-[14px] leading-snug mt-4">
                        <h4>Full Stack Developer • National Testing Service (NTS) • Islamabad, Pakistan</h4>
                        <span className="font-normal italic">Jun 2025 – Aug 2025</span>
                      </div>
                      <ul className="list-disc pl-[20px] mt-[6px] space-y-[4px] text-neutral-900 text-[14px] leading-snug marker:text-black">
                        <li>Built 15+ React/Redux components, improving page load performance by 25% for 100,000+ active users on Pakistan's largest national testing platform.</li>
                        <li>Integrated React frontend with Laravel backend using JWT/OAuth and role-based access control.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Technical Skills */}
                <section className="mb-6">
                  <h3 className="text-[16px] font-bold text-black uppercase border-b border-black mb-3 pb-1">TECHNICAL SKILLS</h3>
                  <div className="text-[14px] text-neutral-900 leading-[1.6]">
                    <p><span className="font-bold">Primary — Backend:</span> Node.js, Express.js, NestJS, RESTful APIs, WebSockets, JWT/OAuth, API design & documentation (Swagger/OpenAPI)</p>
                    <p><span className="font-bold">Primary — DevOps:</span> Linux Admin (cPanel / Nginx / WHM), Docker & Compose, CI/CD Pipelines, AWS (EC2 • S3), SSL/DNS, Zero-Downtime Deployments, Git/GitHub</p>
                    <p><span className="font-bold">Also Proficient:</span> Laravel / PHP, Django / Flask — additional backend stacks used in production</p>
                    <p><span className="font-bold">Frontend:</span> React.js, Next.js, Redux, TypeScript, JavaScript (ES6+), Tailwind CSS, PHP Blade</p>
                    <p><span className="font-bold">Databases:</span> MySQL, PostgreSQL, MongoDB, SQL Server, Redis — schema design, query optimisation</p>
                    <p><span className="font-bold">Languages:</span> JavaScript / TypeScript • PHP • Python • SQL • C/C++</p>
                  </div>
                </section>

                 {/* Key Projects */}
                 <section className="mb-6">
                  <h3 className="text-[16px] font-bold text-black uppercase border-b border-black mb-3 pb-1">KEY PROJECTS</h3>
                  
                  <div className="space-y-[14px]">
                    <div>
                      <div className="font-bold text-black text-[14px]">SLS – School Management System <span className="font-normal italic"> | PHP • Laravel • MySQL • Bootstrap</span></div>
                      <a href="https://sls.creativeitpark.org" className="text-blue-800 text-[14px] mb-[4px] inline-block hover:underline">🔗 sls.creativeitpark.org</a>
                      <ul className="list-none pl-3 space-y-1 text-neutral-900 text-[14px] leading-snug">
                        <li className="relative before:content-['▪'] before:absolute before:-left-3 before:text-[10px] before:top-[3px]">12,000+ students across 8 role portals; full student lifecycle, fee collection, challan bulk-print, exam grading, attendance.</li>
                        <li className="relative before:content-['▪'] before:absolute before:-left-3 before:text-[10px] before:top-[3px]">Financial audit suite with daily cash book, month-end reports, and Excel/PDF exports used by administrators daily.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-bold text-black text-[14px]">Hello Creative IT Portal – CRM / ERP <span className="font-normal italic"> | PHP • Laravel • MySQL • Vue.js • Redis</span></div>
                      <a href="https://hello.creativeitpark.org" className="text-blue-800 text-[14px] mb-[4px] inline-block hover:underline">🔗 hello.creativeitpark.org</a>
                      <ul className="list-none pl-3 space-y-1 text-neutral-900 text-[14px] leading-snug">
                        <li className="relative before:content-['▪'] before:absolute before:-left-3 before:text-[10px] before:top-[3px]">Company-wide system: full HR (payroll, shifts, leaves, attendance), Kanban deal pipelines, Gantt project tracking.</li>
                        <li className="relative before:content-['▪'] before:absolute before:-left-3 before:text-[10px] before:top-[3px]">Double-entry accounting module — ledger, P&L, balance sheet, cash flow, trial balance — used as the live financial system.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-bold text-black text-[14px]">PomPak – National Financial Literacy Platform <span className="font-normal italic"> | PHP • Laravel • SQL Server • JavaScript</span></div>
                      <a href="https://nflpy.knowledgeplatform.com" className="text-blue-800 text-[14px] mb-[4px] inline-block hover:underline">🔗 nflpy.knowledgeplatform.com</a>
                      <ul className="list-none pl-3 space-y-1 text-neutral-900 text-[14px] leading-snug">
                        <li className="relative before:content-['▪'] before:absolute before:-left-3 before:text-[10px] before:top-[3px]">1M+ registered users • 750,000+ students • 45+ districts — backed by State Bank of Pakistan and JazzCash.</li>
                        <li className="relative before:content-['▪'] before:absolute before:-left-3 before:text-[10px] before:top-[3px]">53 bilingual modules (English/Urdu) with SQL Server stored procedures and multi-tenant auth at national scale.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-bold text-black text-[14px]">BuzzMap – Real-Time Event Discovery Platform <span className="font-normal italic"> | Node.js • Express • MongoDB • Redis • WebSockets</span></div>
                      <a href="https://buzzmap.org" className="text-blue-800 text-[14px] mb-[4px] inline-block hover:underline">🔗 buzzmap.org</a>
                      <ul className="list-none pl-3 space-y-1 text-neutral-900 text-[14px] leading-snug">
                        <li className="relative before:content-['▪'] before:absolute before:-left-3 before:text-[10px] before:top-[3px]">Live platform for US client (Nodescale LLC): real-time event feeds, geolocation APIs, OAuth 2.0, Redis caching.</li>
                        <li className="relative before:content-['▪'] before:absolute before:-left-3 before:text-[10px] before:top-[3px]">Fully remote delivery to US engineering standards — async collaboration, PR discipline, API versioning.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section>
                  <h3 className="text-[16px] font-bold text-black uppercase border-b border-black mb-3 pb-1">EDUCATION & CERTIFICATIONS</h3>
                  <div className="text-[14px] text-black">B.Sc. Computer Science • Air University, Islamabad • In progress</div>
                  
                  <div className="text-[14px] text-black font-bold mt-4 mb-2">Professional Credentials</div>
                  <ul className="list-none space-y-[2px] text-neutral-900 text-[14px] leading-snug font-normal pl-2">
                    <li>– Experience Letter — Creative IT Park — Backend Developer • Jan 2026–Present</li>
                    <li>– Experience Letter — Nodescale LLC (USA) — Backend Engineer • BuzzMap • Remote</li>
                    <li>– Employment Certificate — Seven Koncepts — Full Stack Software Engineer</li>
                  </ul>
                  <p className="mt-6 text-center text-black text-[14px]">
                    Available for remote,hybrid and onsite roles - globally and in Pakistan • Can start immediately
                  </p>
                </section>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
