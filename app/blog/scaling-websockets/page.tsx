"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Zap, Share2 } from "lucide-react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

export default function BlogScalingWebSockets() {
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
              <Zap className="w-4 h-4" /> Performance Blog
            </span>
            <span className="text-white/40 text-sm font-medium">Read time: 4 mins</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6 leading-tight">
            Scaling Real-time Events with Redis Pub/Sub
          </h1>
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-8">
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center font-bold text-xl text-white">RA</div>
            <div>
              <div className="font-bold text-white tracking-wide">Reyyan Alam</div>
              <div className="text-sm text-muted">Backend Engineer @ BuzzMap Project</div>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.1} className="prose prose-invert prose-lg max-w-none prose-p:text-muted prose-headings:text-white prose-a:text-brand prose-strong:text-white">
          <p>
            For a real-time event discovery platform like <strong>BuzzMap</strong>, latency is the enemy. When thousands of users are moving across a map, receiving geolocation-based updates every second, the backend must broadcast events with sub-50ms precision.
          </p>

          <h3>The Horizontal Scaling Wall</h3>
          <p>
            Standard WebSocket libraries like Socket.io work perfectly on a single server. However, as traffic grows, you must scale horizontally. The problem? If User A is connected to <code>Server 1</code> and User B is connected to <code>Server 2</code>, they cannot "see" each other's events. The servers are isolated silos.
          </p>

          <h3>Solving the Silo with Redis Pub/Sub</h3>
          <p>
            To bridge this gap, I implemented a centralized message broker using <strong>Redis Pub/Sub</strong>. Instead of servers trying to talk to each other, they all subscribe to specific "channels" on a lightning-fast Redis instance.
          </p>

          <pre className="bg-[#111] p-4 rounded-xl border border-white/10 overflow-x-auto text-sm text-[#00aaff] my-8 shadow-2xl">
            <code>
{`// Broadcasting an event across the entire server swarm
const redis = require('redis');
const publisher = redis.createClient();

function broadcastToCluster(room, eventData) {
    // 1. Send the event to the global Redis bus
    publisher.publish('map_events', JSON.stringify({
        room: room,
        data: eventData
    }));
}

// Every Node.js instance listens for this bus
subscriber.on('message', (channel, message) => {
    const payload = JSON.parse(message);
    // 2. Only broadcast to clients actually connected to THIS instance
    io.to(payload.room).emit('event', payload.data);
});`}
            </code>
          </pre>

          <h3>Geolocation Sharding</h3>
          <p>
            Sending every map update to every server would create a "broadcast storm." To optimize, we implemented <strong>Geospatial Sharding</strong>. Events were published to channels based on geographic quadrants (e.g., <code>map_events:nyc:lower_manhattan</code>). 
          </p>
          <p>
            Servers only subscribed to the channels that their active users were currently viewing, reducing unneccesary network overhead by over <strong>85%</strong>.
          </p>

          <div className="my-10 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 relative group">
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                   <Share2 className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="text-white font-bold m-0 p-0">High-Availability Metrics</h4>
                   <p className="text-white/40 text-sm m-0 p-0">Production stats from the US deployment</p>
                </div>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                   <p className="text-xs text-white/40 uppercase font-black mb-1">Latency</p>
                   <p className="text-xl font-bold text-blue-400">&lt;50ms</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                   <p className="text-xs text-white/40 uppercase font-black mb-1">Max Conn</p>
                   <p className="text-xl font-bold text-white">10k/sec</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                   <p className="text-xs text-white/40 uppercase font-black mb-1">Uptime</p>
                   <p className="text-xl font-bold text-emerald-400">99.99%</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                   <p className="text-xs text-white/40 uppercase font-black mb-1">Bus Speed</p>
                   <p className="text-xl font-bold text-white">1M msg/s</p>
                </div>
             </div>
          </div>

          <p>
            Modern real-time systems aren't built on single servers anymore. They are built on distributed message buses. By leveraging Redis primitives, we transformed a fragile Node.js app into a resilient, globally-scalable infrastructure capable of handling high-velocity US production traffic.
          </p>
        </AnimatedElement>
        
      </div>
    </main>
  );
}
