"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Cpu, ShieldCheck } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

export default function BlogERPAudits() {
  return (
    <main className="min-h-screen bg-[#000] text-foreground pt-32 pb-24 px-6 md:px-12 selection:bg-brand selection:text-white">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-brand hover:text-white transition-colors mb-12 font-semibold">
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
        
        <AnimatedElement>
          <div className="flex gap-4 items-center mb-6">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Engineering Blog
            </span>
            <span className="text-white/40 text-sm font-medium">Read time: 5 mins</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6 leading-tight">
            Automating Mass ERP Audits with Distributed Queues
          </h1>
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-8">
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center font-bold text-xl text-white">RA</div>
            <div>
              <div className="font-bold text-white tracking-wide">Reyyan Alam</div>
              <div className="text-sm text-muted">Lead Developer @ SLS Project</div>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.1} className="prose prose-invert prose-lg max-w-none prose-p:text-muted prose-headings:text-white prose-a:text-brand prose-strong:text-white">
          <p>
            When managing a school network of over 12,000 students, the end-of-month audit cycle is the ultimate stress test for any ERP. At <strong>SLS</strong>, our administrative team needed to generate bulk financial challenges, report cards, and audit trails for every single student simultaneously.
          </p>

          <h3>The "White Screen of Death"</h3>
          <p>
            The initial implementation used a standard synchronous PDF generation flow. When a user clicked "Generate Monthly Audits," the server would attempt to query thousands of ledger entries, calculate balances, and render a PDF using DOMpdf. 
          </p>
          <p>
            The result? <strong>504 Gateway Timeouts</strong> and the dreaded PHP memory exhaustion errors. Processing 12,000 documents consumes gigabytes of RAM that no single web request should ever touch.
          </p>

          <h3>The Distributed Solution</h3>
          <p>
            I architected a background processing pipeline using <strong>Laravel Queues</strong> backed by <strong>Redis</strong> and <strong>Horizon</strong>. Instead of processing the batch in-request, we dispatched a "GenerateAudit" job for every student into a high-priority queue.
          </p>

          <pre className="bg-[#111] p-4 rounded-xl border border-white/10 overflow-x-auto text-sm text-[#00ffcc] my-8 shadow-2xl">
            <code>
{`// Dispatching distributed audit jobs with chunking
public function generateBatch()
{
    Student::active()->chunkById(500, function ($students) {
        foreach ($students as $student) {
            GenerateAuditPdf::dispatch($student)
                ->onQueue('audits')
                ->delay(now()->addSeconds(2)); // Throttling for IO stability
        }
    });

    return response()->json(['message' => 'Batch generation initiated.']);
}`}
            </code>
          </pre>

          <h3>Supervisor and Horizon Monitoring</h3>
          <p>
            We deployed 8 dedicated <strong>Laravel Supervisor</strong> workers on an independent EC2 instance. This decoupled the PDF generation (CPU intensive) from the main web application (IO intensive). Using Horizon, we could monitor throughput in real-time, observing as the queue cleared thousands of documents in minutes without a single dropped packet.
          </p>

          <h3>Financial Data Integrity</h3>
          <p>
            Automation is dangerous without verification. Every generated PDF was checksummed and its metadata stored in a hash-table. This allowed accountants to immediately identify any missing or corrupted files in a 12,000-deep batch, ensuring that the double-entry books always matched the physical records.
          </p>

          <div className="bg-brand/5 border border-brand/20 p-6 rounded-2xl my-10">
            <h4 className="flex items-center gap-2 text-white font-bold mb-4 mt-0 uppercase tracking-widest text-xs">
              <Cpu className="w-4 h-4" /> Performance Gains
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
              <li className="flex flex-col">
                <span className="text-white/40 text-xs font-bold uppercase tracking-tighter">Throughput</span>
                <span className="text-2xl font-bold text-white">400 PDFs / min</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 text-xs font-bold uppercase tracking-tighter">Failure Rate</span>
                <span className="text-2xl font-bold text-emerald-400">0.00%</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 text-xs font-bold uppercase tracking-tighter">Wait Time</span>
                <span className="text-2xl font-bold text-white">Async (Immediate UI)</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 text-xs font-bold uppercase tracking-tighter">Memory Profile</span>
                <span className="text-2xl font-bold text-white">Flat (~64MB)</span>
              </li>
            </ul>
          </div>

          <p>
            By moving from synchronous blocks to distributed queues, we turned a week-long manual accounting headache into a 30-minute automated background task. Scaling isn't always about more power; it's about better choreography.
          </p>
        </AnimatedElement>
        
      </div>
    </main>
  );
}
