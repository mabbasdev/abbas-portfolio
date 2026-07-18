"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const rawLogs = [
  { time: "00.000", service: "SYSTEM", message: "Kernel initialized. Node.js runtime booted." },
  { time: "00.045", service: "NETWORK", message: "Binding to port 8080..." },
  { time: "00.120", service: "DATABASE", message: "Connecting to primary cluster []... SUCCESS." },
  { time: "00.180", service: "CACHE", message: "Redis pool established. 10ms latency." },
  { time: "00.320", service: "SYSTEM", message: "API Gateway online. Accepting requests." },
  { time: "01.102", service: "LOAD_BALANCER", message: "Traffic spike detected. Auto-scaling worker nodes." },
  { time: "01.405", service: "AUTH", message: "Validating JWT signature... OK" },
  { time: "01.890", service: "ROUTER", message: "GET /api/v1/users/metrics -> 200 OK (12ms)" },
  { time: "02.300", service: "WEBSOCKET", message: "Client connected. Streaming live data." },
  { time: "03.010", service: "WORKER", message: "Processing background job queue [1,000,000+ items]..." },
  { time: "03.500", service: "WORKER", message: "Job queue completed successfully." },
  { time: "04.100", service: "ROUTER", message: "POST /api/v1/erp/sync -> 201 Created (45ms)" },
  { time: "04.880", service: "SYSTEM", message: "All services nominal. Zero downtime recorded." },
];

export function LiveLogTerminal() {
  const [logs, setLogs] = useState<{ time: string; service: string; message: string }[]>([]);

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    
    // Simulate terminal typing out logs over time
    rawLogs.forEach((log, index) => {
      const delay = index === 0 ? 500 : 500 + index * 400 + Math.random() * 300;
      const tid = setTimeout(() => {
        setLogs((prev) => {
          const newLogs = [...prev, log];
          if (newLogs.length > 8) return newLogs.slice(newLogs.length - 8);
          return newLogs;
        });
      }, delay);
      timeoutIds.push(tid);
    });

    const loop = setInterval(() => {
      setLogs([]);
      rawLogs.forEach((log, index) => {
        const delay = index === 0 ? 200 : 200 + index * 400 + Math.random() * 300;
        const tid = setTimeout(() => {
          setLogs((prev) => {
            const newLogs = [...prev, log];
            if (newLogs.length > 8) return newLogs.slice(newLogs.length - 8);
            return newLogs;
          });
        }, delay);
        timeoutIds.push(tid);
      });
    }, 10000);

    return () => {
      timeoutIds.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md shadow-2xl p-6 font-mono text-sm sm:text-xs overflow-hidden flex flex-col items-start justify-end group">
      {/* Glow effect */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-brand/20 blur-[100px] rounded-full group-hover:bg-brand/30 transition-colors duration-700" />
      
      {/* Terminal Header */}
      <div className="absolute top-0 left-0 w-full h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-4 text-white/30 text-xs tracking-wider">prod@server-cluster-alpha:~</span>
      </div>

      <div className="flex flex-col gap-2 w-full mt-8">
        {logs.map((log, i) => (
          <motion.div
            key={i + log.time}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex gap-4 w-full"
          >
            <span className="text-white/30 shrink-0">[{log.time}]</span>
            <span className="text-brand shrink-0 w-24 sm:w-32 truncate">{log.service}</span>
            <span className="text-white/80 whitespace-nowrap overflow-hidden text-ellipsis">{log.message}</span>
          </motion.div>
        ))}
        {logs.length > 0 && logs.length < rawLogs.length && (
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-white/50 mt-1"
          />
        )}
      </div>
    </div>
  );
}
