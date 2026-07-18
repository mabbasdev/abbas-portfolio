"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

export default function Blog1MUsers() {
  return (
    <main className="min-h-screen bg-[#000] text-foreground pt-32 pb-24 px-6 md:px-12 selection:bg-brand selection:text-white">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-brand hover:text-white transition-colors mb-12 font-semibold">
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
        
        <AnimatedElement>
          <div className="flex gap-4 items-center mb-6">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Technical Blog
            </span>
            <span className="text-white/40 text-sm font-medium">Read time: 4 mins</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6 leading-tight">
            How I Handled 1M Users on Laravel using SQL Server
          </h1>
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-8">
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center font-bold text-xl text-white">RA</div>
            <div>
              <div className="font-bold text-white tracking-wide">Reyyan Alam</div>
              <div className="text-sm text-muted">Backend Engineer @ PomPak Project</div>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.1} className="prose prose-invert prose-lg max-w-none prose-p:text-muted prose-headings:text-white prose-a:text-brand prose-strong:text-white">
          <p>
            When you're building a B2G (Business to Government) educational platform endorsed by the State Bank of Pakistan, failure is not an option. You cannot afford an error screen when entire districts of students log into the portal simultaneously at 9:00 AM on a Monday. 
          </p>

          <p>
            The scaling challenge for <strong>PomPak</strong>—a financial literacy application that quickly accrued over 1 million users and 750,000 active students—required a specialized architectural approach. The stack? <strong>Laravel/PHP running against SQL Server</strong>.
          </p>

          <h3>The ORM Bottleneck</h3>
          <p>
            Initially, the platform leaned heavily on Laravel's Eloquent ORM. For standard CRUD operations covering single users, Eloquent is incredible. But when generating complex state-wide analytics, grading millions of exam attempts, and tracking multi-tenant organization access... Eloquent started showing its limits. 
          </p>
          <p>
            We noticed query execution times drifting into the multi-second territory during peak <code>N+1</code> query traps. Wait logic and transaction limits started rejecting new student signups.
          </p>

          <h3>The Architecture Pivot</h3>
          <p>
            To solve this without massive infrastructure costs, we implemented a <strong>Command Query Responsibility Segregation (CQRS)</strong> lite approach. We kept Eloquent for writes (to maintain business logic and validation) but moved complex read-aggregations to raw SQL engine primitives.
          </p>

          <pre className="bg-[#111] p-4 rounded-xl border border-white/10 overflow-x-auto text-sm text-[#ffaa00] my-8 shadow-2xl">
            <code>
{`-- Moving heavy aggregation to the database layer
CREATE PROCEDURE [dbo].[GetDistrictAnalytics]
    @DistrictID Int,
    @StartDate DateTime,
    @EndDate DateTime
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        S.SchoolName,
        COUNT(DISTINCT ST.StudentID) TotalStudents,
        AVG(CAST(E.FinalScore AS FLOAT)) AveragePerformance,
        SUM(CASE WHEN E.Status = 'Certified' THEN 1 ELSE 0 END) Certifications
    FROM Schools S
    JOIN Students ST ON S.SchoolID = ST.SchoolID
    LEFT JOIN Exams E ON ST.StudentID = E.StudentID
    WHERE S.DistrictID = @DistrictID 
      AND E.CompletedAt BETWEEN @StartDate AND @EndDate
    GROUP BY S.SchoolName
    OPTION (RECOMPILE); -- Optimize for varying parameter ranges
END`}
            </code>
          </pre>

          <h3>The Implementation Layer</h3>
          <p>
            By executing these procedures directly via the <code>DB::statement()</code> or <code>DB::select()</code> facade, we bypassed the entire Eloquent object hydration cycle. Instantiating 10,000 PHP objects in memory just to get a single "Average" number was the primary cause of our memory leaks. 
          </p>
          <p>
            Combined with <strong>Redis Tags</strong> for intelligent cache invalidation, the performance gains were immediate. We could now handle 10k+ concurrent exam submissions without the CPU usage crossing 30%.
          </p>

          <h3>Quantifiable Results</h3>
          <div className="overflow-hidden rounded-xl border border-white/10 my-8">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-white font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Metric</th>
                  <th className="px-4 py-3">Before (Eloquent)</th>
                  <th className="px-4 py-3">After (Stored Procs)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/70">
                <tr>
                  <td className="px-4 py-3 font-semibold text-white">Aggregated Report Query</td>
                  <td className="px-4 py-3 text-red-400">4,200ms</td>
                  <td className="px-4 py-3 text-emerald-400">85ms</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-white">Peak Concurrent Capacity</td>
                  <td className="px-4 py-3 text-red-400">~1,500 Users</td>
                  <td className="px-4 py-3 text-emerald-400">10,000+ Users</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-white">Memory Usage / Request</td>
                  <td className="px-4 py-3 text-red-400">128MB+</td>
                  <td className="px-4 py-3 text-emerald-400">~12MB</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The lesson remains clear: An ORM is a tool, not a religion. When you hit a million users, knowing how to write pure SQL and architecting directly on engine primitives is the difference between a system crash and a high-performance deployment.
          </p>
        </AnimatedElement>
        
      </div>
    </main>
  );
}
