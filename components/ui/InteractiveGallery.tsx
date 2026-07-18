"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveGalleryProps {
  images: string[];
  title?: string;
}

export function InteractiveGallery({ images, title }: InteractiveGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") setIsMaximized(false);
    };

    if (isMaximized) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMaximized]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="w-full my-12">
      {/* Main Display */}
      <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group shadow-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            {/* Blurred Backdrop for Ambient Fill */}
            <Image
              src={images[currentIndex]}
              alt=""
              fill
              className="object-cover blur-2xl opacity-20 scale-110"
              quality={10}
            />
            {/* Main Foreground Image */}
            <Image
              src={images[currentIndex]}
              alt={`${title || "Project"} slide ${currentIndex + 1}`}
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Mac-style Window Controls */}
        <div className="absolute top-4 left-5 flex gap-1.5 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>

        {/* Controls Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
        
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prevSlide();
            }}
            className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all pointer-events-auto shadow-xl hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              nextSlide();
            }}
            className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all pointer-events-auto shadow-xl hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsMaximized(true);
          }}
          className="absolute top-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 shadow-xl z-30"
        >
          <Maximize2 className="w-5 h-5" />
        </button>

        {title && (
          <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-1">Visual Deep Dive</p>
            <h4 className="text-xl font-bold tracking-tight">{title}</h4>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-6 overflow-x-auto pb-4 no-scrollbar">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={cn(
              "relative shrink-0 w-32 md:w-48 aspect-video rounded-xl overflow-hidden border-2 transition-all hover:scale-105 active:scale-95",
              currentIndex === idx ? "border-brand ring-4 ring-brand/20" : "border-white/10 grayscale hover:grayscale-0"
            )}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-contain bg-white/5"
              sizes="200px"
            />
          </button>
        ))}
      </div>

      {/* Maximize / Lightbox Mode */}
      <AnimatePresence>
        {isMaximized && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-6 md:p-12"
          >
            <button
              onClick={() => setIsMaximized(false)}
              className="absolute top-8 right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all z-[110]"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
              <button
                onClick={prevSlide}
                className="absolute left-0 p-4 text-white hover:text-brand transition-colors z-[110]"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              <div className="relative w-full h-full">
                <Image
                  src={images[currentIndex]}
                  alt="Maximized"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              <button
                onClick={nextSlide}
                className="absolute right-0 p-4 text-white hover:text-brand transition-colors z-[110]"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </div>

            <div className="absolute bottom-8 text-white/50 font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
