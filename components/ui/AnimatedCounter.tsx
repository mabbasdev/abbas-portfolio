"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  
  // Use a slight margin so it triggers before it's fully in view
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
    
    // Fallback for Bots/Headless Browsers:
    // If we haven't triggered in 2 seconds, just show the value or start animation
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setHasTriggered(true);
        motionValue.set(value);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [value, motionValue, hasTriggered]);

  useEffect(() => {
    if (inView && !hasTriggered) {
      setHasTriggered(true);
      motionValue.set(value);
    }
  }, [inView, value, motionValue, hasTriggered]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  // For SEO and AI Reviewers:
  // Render the actual value in an aria-label and as a hidden span initially
  const fullText = `${value.toLocaleString()}${suffix}`;

  return (
    <span 
      ref={ref} 
      className="tabular-nums inline-flex items-center"
      aria-label={fullText}
      title={fullText}
    >
      {!mounted ? (
        // Initial SSR render shows the full value for SEO/Bots
        <span>{fullText}</span>
      ) : (
        // Client render shows the animated value
        <>
          {displayValue.toLocaleString()}
          {suffix}
        </>
      )}
    </span>
  );
}
