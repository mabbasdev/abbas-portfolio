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
                Muhammad_Abbas_CV<span className="hidden xs:inline">.pdf</span>
                <span className="text-sm font-medium text-neutral-500 ml-2 hidden lg:inline">(Live Web Version)</span>
              </h2>
              
              <div className="flex gap-1.5 sm:gap-4 shrink-0">
                <a 
                  href="/Muhammad_Abbas_CV.pdf" 
                  download
                  className="flex items-center gap-2 bg-[#2563eb] text-white px-3 py-2 sm:px-5 sm:py-2.5 rounded-md font-bold hover:bg-blue-700 transition-colors shadow-sm text-sm sm:text-base whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                  <span className="hidden md:inline">.pdf</span>
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
                  <h1 className="text-[28px] sm:text-4xl text-black uppercase tracking-wider mb-2 font-bold font-serif">MUHAMMAD ABBAS</h1>
                  <h2 className="text-[15px] sm:text-lg text-neutral-800 font-medium mb-3 uppercase tracking-widest">
                    Full-Stack Web Developer • ReactJS &amp; APIs • IT Systems &amp; Automation
                  </h2>
                  <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-neutral-900 text-[14px]">
                    <span>mabbasm1100@gmail.com</span>
                    <span>•</span>
                    <span>Islamabad, Pakistan</span>
                    <span>•</span>
                    <a href="https://github.com/mabbasdev" target="_blank" rel="noreferrer" className="hover:underline text-blue-800">github.com/mabbasdev</a>
                    <span>•</span>
                    <a href="https://www.linkedin.com/in/mabbasdev" target="_blank" rel="noreferrer" className="hover:underline text-blue-800">linkedin.com/in/mabbasdev</a>
                  </div>
                </header>

                {/* Professional Summary */}
                <section className="mb-6">
                  <h3 className="text-[16px] font-bold text-black uppercase border-b border-black mb-2 pb-1">PROFESSIONAL SUMMARY</h3>
                  <p className="text-neutral-900 text-[14px] leading-snug">
                    Full-Stack Web Developer and Computer Science undergraduate (FUUAST) with practical experience building responsive web applications and managing IT infrastructure. Skilled in crafting modern frontend interfaces using ReactJS, TypeScript, and Tailwind CSS, backed by flexible API integrations with PHP, Node.js, Express, MySQL, and PostgreSQL. Combines strong full-stack software development capabilities with hands-on IT support engineering—configuring network IP schemas, managing Active Directory user access policies, and automating desktop workflows using native OS scripting.
                  </p>
                </section>

                {/* Work & Practical Experience */}
                <section className="mb-6">
                  <h3 className="text-[16px] font-bold text-black uppercase border-b border-black mb-3 pb-1">WORK &amp; PRACTICAL EXPERIENCE</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-black text-[14px] leading-snug">
                        <h4>IT Support Engineer Intern • Islamabad Chamber of Commerce &amp; Industry (ICCI) • Islamabad, Pakistan</h4>
                        <span className="font-normal italic">Jul 2025 – Sep 2025</span>
                      </div>
                      <ul className="list-disc pl-[20px] mt-[6px] space-y-[4px] text-neutral-900 text-[14px] leading-snug marker:text-black">
                        <li>Re-engineered official web portal frontends using ReactJS and Tailwind CSS to eliminate cross-device responsiveness issues and optimize Core Web Vital metrics.</li>
                        <li>Managed Active Directory user access policies, role permissions, and access controls across organizational workstations.</li>
                        <li>Configured and troubleshot local network IP schemas, hardware systems, and desktop operating environments to maintain uninterrupted system operations.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline font-bold text-black text-[14px] leading-snug mt-4">
                        <h4>Full-Stack Web Developer • Freelance &amp; Independent Projects • Islamabad, Pakistan</h4>
                        <span className="font-normal italic">2025 – Present</span>
                      </div>
                      <ul className="list-disc pl-[20px] mt-[6px] space-y-[4px] text-neutral-900 text-[14px] leading-snug marker:text-black">
                        <li>Delivered custom web applications for client projects—including responsive frontend layouts and technical digital assets.</li>
                        <li>Developed zero-backend, offline web tools including <strong>MirchiHut</strong>, utilizing vanilla JavaScript, an in-memory cart system, and direct WhatsApp order placement APIs.</li>
                        <li>Built web-based lead capture utilities integrating custom HTML/PHP scripts with TrustedForm compliance protocols, routing data through Google Apps Script endpoints to automated database targets.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline font-bold text-black text-[14px] leading-snug mt-4">
                        <h4>IT &amp; Systems Automation Specialist • Desktop &amp; Operating Systems Operations</h4>
                        <span className="font-normal italic">2025 – Present</span>
                      </div>
                      <ul className="list-disc pl-[20px] mt-[6px] space-y-[4px] text-neutral-900 text-[14px] leading-snug marker:text-black">
                        <li>Engineered native operating system scripts leveraging PowerShell, Batch, VBScript, and Python to automate desktop startup routines and local developer environment setups.</li>
                        <li>Diagnosed operating system configurations and network performance bottlenecks on Android and Windows platforms.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Technical Skills */}
                <section className="mb-6">
                  <h3 className="text-[16px] font-bold text-black uppercase border-b border-black mb-3 pb-1">TECHNICAL SKILLS</h3>
                  <div className="text-[14px] text-neutral-900 leading-[1.6]">
                    <p><span className="font-bold">Frontend Development:</span> ReactJS, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design, Core Web Vitals</p>
                    <p><span className="font-bold">Backend &amp; APIs:</span> PHP, Node.js, Express.js, RESTful APIs, JWT Authentication, Google Apps Script APIs, Webhooks</p>
                    <p><span className="font-bold">Databases &amp; Storage:</span> MySQL, PostgreSQL, MongoDB, Schema Design, SQL Query Optimization, In-Memory Caching</p>
                    <p><span className="font-bold">IT Infrastructure &amp; DevOps:</span> Active Directory, User Access Controls, Network IP Configuration, System Administration, Git/GitHub</p>
                    <p><span className="font-bold">Scripting &amp; Automation:</span> PowerShell, Batch Scripting, VBScript, Python Scripting</p>
                  </div>
                </section>

                {/* Key Projects */}
                <section className="mb-6">
                  <h3 className="text-[16px] font-bold text-black uppercase border-b border-black mb-3 pb-1">KEY PROJECTS</h3>
                  
                  <div className="space-y-[14px]">
                    <div>
                      <div className="font-bold text-black text-[14px]">Islamabad Chamber of Commerce Portal Refactor <span className="font-normal italic"> | ReactJS • Tailwind CSS • JavaScript</span></div>
                      <ul className="list-none pl-3 space-y-1 text-neutral-900 text-[14px] leading-snug mt-1">
                        <li className="relative before:content-['▪'] before:absolute before:-left-3 before:text-[10px] before:top-[3px]">Redesigned and updated core frontend layouts into a modular ReactJS application, resolving multi-device breakpoint scaling issues and enhancing load speeds.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-bold text-black text-[14px]">MirchiHut – Zero-Backend E-Commerce Engine <span className="font-normal italic"> | Vanilla JavaScript • HTML5 • Tailwind CSS • WhatsApp API</span></div>
                      <ul className="list-none pl-3 space-y-1 text-neutral-900 text-[14px] leading-snug mt-1">
                        <li className="relative before:content-['▪'] before:absolute before:-left-3 before:text-[10px] before:top-[3px]">Built an offline, lightweight e-commerce web application featuring client-side cart management and automated WhatsApp order routing without server overhead.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-bold text-black text-[14px]">Lead Capture &amp; Compliance Utility <span className="font-normal italic"> | HTML5 • PHP • Google Apps Script • TrustedForm API</span></div>
                      <ul className="list-none pl-3 space-y-1 text-neutral-900 text-[14px] leading-snug mt-1">
                        <li className="relative before:content-['▪'] before:absolute before:-left-3 before:text-[10px] before:top-[3px]">Created a secure lead collection pipeline mapping form submissions directly to a structured Google Sheets database via automated webhook handlers.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-bold text-black text-[14px]">Color Palette Generator <span className="font-normal italic"> | Vanilla JavaScript • Clipboard API • GitHub Pages</span></div>
                      <ul className="list-none pl-3 space-y-1 text-neutral-900 text-[14px] leading-snug mt-1">
                        <li className="relative before:content-['▪'] before:absolute before:-left-3 before:text-[10px] before:top-[3px]">Engineered a lightweight web application that dynamically generates random hexadecimal color codes with instant clipboard copying, deployed live on GitHub Pages.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Education & Certifications */}
                <section>
                  <h3 className="text-[16px] font-bold text-black uppercase border-b border-black mb-3 pb-1">EDUCATION &amp; CERTIFICATIONS</h3>
                  <div className="text-[14px] text-black font-semibold">B.S. Computer Science • Federal Urdu University of Arts, Sciences &amp; Technology (FUUAST), Islamabad • Expected Graduation: June 2027</div>
                  
                  <div className="text-[14px] text-black font-bold mt-4 mb-2">Professional Credentials &amp; Training</div>
                  <ul className="list-none space-y-[2px] text-neutral-900 text-[14px] leading-snug font-normal pl-2">
                    <li>– ReactJS Web Development Training Program Certificate</li>
                    <li>– IT Support Engineer Internship Certificate — Islamabad Chamber of Commerce &amp; Industry (ICCI)</li>
                  </ul>
                  <p className="mt-6 text-center text-black text-[14px] font-medium">
                    Available for On-Site (Islamabad, Pakistan) &amp; Remote Full-Stack Developer &amp; IT Support Engineer Roles
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