"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Database, Scale } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

export default function BlogDoubleEntry() {
  return (
    <main className="min-h-screen bg-[#000] text-foreground pt-32 pb-24 px-6 md:px-12 selection:bg-brand selection:text-white">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-brand hover:text-white transition-colors mb-12 font-semibold">
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
        
        <AnimatedElement>
          <div className="flex gap-4 items-center mb-6">
            <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Database className="w-4 h-4" /> Systems Blog
            </span>
            <span className="text-white/40 text-sm font-medium">Read time: 6 mins</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6 leading-tight">
            Architecting Double-Entry Accounting in PHP
          </h1>
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-8">
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center font-bold text-xl text-white">RA</div>
            <div>
              <div className="font-bold text-white tracking-wide">Reyyan Alam</div>
              <div className="text-sm text-muted">Backend Engineer @ Hello Creative IT</div>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.1} className="prose prose-invert prose-lg max-w-none prose-p:text-muted prose-headings:text-white prose-a:text-brand prose-strong:text-white">
          <p>
            When building the <strong>Hello Creative IT</strong> ERP, I was tasked with the most critical module: Financials. In accounting software, there is zero room for error. A single penny lost to floating-point drift can corrupt an entire fiscal year's records.
          </p>

          <h3>The Zero-Tolerance Policy</h3>
          <p>
            The first rule of engineering financial systems: <strong>Never use floats</strong> for currency. Instead, we utilized PostgreSQL and MySQL's <code>DECIMAL(15,2)</code> types to ensure exact decimal precision. But the database type is only half the battle.
          </p>

          <h3>Atomic Double-Entry Transactions</h3>
          <p>
            The core of the system is the double-entry principle: every debit must have a corresponding credit. I implemented this at the service layer level, ensuring that no ledger entry could ever exist in isolation.
          </p>

          <pre className="bg-[#111] p-4 rounded-xl border border-white/10 overflow-x-auto text-sm text-[#ff7700] my-8 shadow-2xl">
            <code>
{`// Ensuring ledger atomicity via Database Transactions
DB::transaction(function () use ($invoice) {
    // 1. Record the primary transaction
    $entry = LedgerEntry::create([...]);

    // 2. Create the DEBIT record (e.g. Accounts Receivable)
    $entry->items()->create([
        'account_id' => $receivableAccount->id,
        'debit' => $invoice->total,
        'credit' => 0
    ]);

    // 3. Create the CREDIT record (e.g. Sales Revenue)
    $entry->items()->create([
        'account_id' => $revenueAccount->id,
        'debit' => 0,
        'credit' => $invoice->total
    ]);

    // Internal check: Balance must be ZERO
    if ($entry->items->sum('debit') !== $entry->items->sum('credit')) {
        throw new \Exception("Ledger Imbalance Detected");
    }
});`}
            </code>
          </pre>

          <h3>The Ledger Pipeline</h3>
          <p>
            By wrapping these operations in monolithic <strong>database transactions</strong>, we guaranteed that if the credit failed, the debit would roll back instantly. This prevents partial data states where money "disappears" from the system.
          </p>

          <h3>Real-time Balance Sheet Generation</h3>
          <p>
            Generating a Balance Sheet or P&L report for a company with thousands of transactions can involve heavy computation. I designed a <strong>Materialized View</strong> pattern where ledger balances are aggregated into summary tables every time a batch is posted, allowing for sub-second report generation regardless of total data volume.
          </p>

          <div className="bg-orange-500/5 border border-orange-500/20 p-8 rounded-3xl my-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <Scale className="w-24 h-24" />
            </div>
            <h4 className="text-white font-bold mb-4 mt-0 uppercase tracking-widest text-xs flex items-center gap-2">
              <Scale className="w-4 h-4 text-orange-500" /> Data Integrity Summary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div>
                  <p className="text-orange-500 font-bold mb-1">Precision</p>
                  <p className="text-sm text-white/60">Strict DECIMAL data types with no floating-point drift.</p>
               </div>
               <div>
                  <p className="text-orange-500 font-bold mb-1">Atomicity</p>
                  <p className="text-sm text-white/60">All side-effects bound to ACID transactions.</p>
               </div>
               <div>
                  <p className="text-orange-500 font-bold mb-1">Auditability</p>
                  <p className="text-sm text-white/60">Immutable trails for every ledger mutation.</p>
               </div>
            </div>
          </div>

          <p>
            Building financial software taught me that the most important features are often the ones the user never sees: the integrity checks, the rollback loops, and the defensive architecture that keeps the books perfectly balanced, every single day.
          </p>
        </AnimatedElement>
        
      </div>
    </main>
  );
}
