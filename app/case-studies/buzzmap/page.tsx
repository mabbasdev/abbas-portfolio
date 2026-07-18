"use client";

import Link from "next/link";
import { ArrowLeft, Server, Database, Shield, Zap, Network, TrendingUp } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { InteractiveGallery } from "@/components/ui/InteractiveGallery";

export default function BuzzMapCaseStudy() {
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
            <span className="text-white/40 text-sm font-medium">Real-time / Geolocation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-8 leading-tight">
            BuzzMap: Scaling Real-time Discovery
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-12 font-medium border-l-4 border-brand pl-6">
            Architecting a live event-discovery backend for the US market. How I utilized WebSockets and Redis to achieve sub-50ms latency for geolocation-based event feeds.
          </p>
        </AnimatedElement>

        {/* Global Impact Grid */}
        <AnimatedElement delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Zap className="w-6 h-6 text-[#ffaa00] mb-4" />
            <div className="text-3xl font-black text-white mb-1">{"<"}50ms</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Socket Latency</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <TrendingUp className="w-6 h-6 text-brand mb-4" />
            <div className="text-3xl font-black text-white mb-1">10k+</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Concurrent Subs</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Database className="w-6 h-6 text-green-500 mb-4" />
            <div className="text-3xl font-black text-white mb-1">GeoJSON</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Optimized Queries</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start">
            <Shield className="w-6 h-6 text-purple-500 mb-4" />
            <div className="text-3xl font-black text-white mb-1">OAuth 2.0</div>
            <div className="text-sm font-semibold text-white/50 uppercase tracking-wide">Secure Access</div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2} className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
          <p className="text-muted leading-relaxed mb-8">
            The core requirement for BuzzMap was "Zero Latency Discovery." In a US-market product, users expect event pins to appear instantly as they pan across a map. Standard REST polling was quickly discarded due to overhead, and the challenge shifted to managing high-frequency spatial updates without overloading the MongoDB primary cluster.
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
                <div className="font-bold text-white">Client Socket.io</div>
                <div className="text-xs text-white/50">Bi-directional Flow</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#ffaa00]/10 border border-[#ffaa00]/30 flex items-center justify-center">
                  <Server className="w-8 h-8 text-[#ffaa00]" />
                </div>
                <div className="font-bold text-white">Node.js / Redis</div>
                <div className="text-xs text-white/50">Pub/Sub Message Bus</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <div className="font-bold text-white">MongoDB Atlas</div>
                <div className="text-xs text-white/50">Spatial Indexing</div>
              </div>
            </div>
            
            <div className="hidden md:flex justify-between w-full px-20 absolute top-1/2 -translate-y-1/2 pointer-events-none">
              <ArrowLeft className="w-6 h-6 text-white/20 rotate-180" />
              <ArrowLeft className="w-6 h-6 text-white/20 rotate-180" />
            </div>
          </div>

          <InteractiveGallery 
            title="BuzzMap Real-time Interface" 
            images={[
              "/project-imgs/buzzmap-1.jpeg",
              "/project-imgs/buzzmap-2.jpeg",
              "/project-imgs/buzzmap-3.jpeg",
              "/project-imgs/buzzmap-4.jpeg",
            ]} 
          />

          <p className="text-muted leading-relaxed mb-6">
            To solve the scaling bottlenecks, I implemented a robust real-time pipeline:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-muted mb-12">
            <li><strong>Redis Pub/Sub Architecture:</strong> Decoupled the API gateway from the websocket server using Redis, allowing horizontal scaling of socket nodes.</li>
            <li><strong>GeoJSON 2dsphere Indexing:</strong> Optimized MongoDB queries to retrieve pins within a specific radius in under 15ms.</li>
            <li><strong>Rate Limiting & Throttling:</strong> Protected the infrastructure from spike-traffic using express-rate-limit and sliding-window counters.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mb-6">The Result</h2>
          <p className="text-muted leading-relaxed p-6 bg-white/5 border-l-4 border-[#ffaa00] rounded-r-xl">
             BuzzMap successfully launched with a stable, high-performance backend serving the US engineering standards. We achieved a 99.99% uptime during initial traffic spikes and maintained a sub-50ms latency profile for active users, proving that Node.js when paired with Redis can handle massive real-time coordination.
          </p>
        </AnimatedElement>
        
      </div>
    </main>
  );
}
