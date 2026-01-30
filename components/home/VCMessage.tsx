"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Quote } from "lucide-react";

export default function VCMessage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-1 w-12 bg-secondary rounded-full" />
                <span className="text-sm font-bold tracking-widest text-secondary uppercase">
                  Leadership
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                Message from the <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-orange-500">
                  Vice Chancellor
                </span>
              </h2>
            </div>

            <div className="relative pl-8 border-l-4 border-gray-200 py-2">
              <Quote className="absolute top-0 left-0 -ml-5 -mt-4 h-8 w-8 text-gray-200 fill-current" />
              <p className="text-xl md:text-2xl text-gray-600 font-medium italic leading-relaxed">
                "We run not just for fitness, but to inspire a generation. Join
                us in making history at the VSSUT Marathon 2026."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-lg">
                  {/* Placeholder for VC Image if needed, or keeping it abstract */}
                  <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400 text-xs font-bold">
                    VSSUT
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Prof. Dipak Kumar Sahoo
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    Vice Chancellor, VSSUT Burla
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative group lg:h-[500px] flex items-center"
          >
            {/* Video Card */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video lg:aspect-auto lg:h-[400px] transform transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none" />

              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                playsInline
                controls={false}
              >
                <source
                  src="/2026marathonpics/WhatsApp-Video-2025-12-04-at-9.03.47-PM.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Controls */}
              <div
                className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 ${
                  isPlaying
                    ? "opacity-0 hover:opacity-100 backdrop-blur-none"
                    : "opacity-100 backdrop-blur-[2px]"
                }`}
              >
                {/* Pulse Animation Circle */}
                <div
                  className={`absolute w-24 h-24 bg-white/30 rounded-full animate-ping ${isPlaying ? "hidden" : "block"}`}
                ></div>

                <Button
                  onClick={togglePlayback}
                  className="relative rounded-full w-20 h-20 md:w-24 md:h-24 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 group/btn flex items-center justify-center hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 md:w-10 md:h-10 fill-white" />
                  ) : (
                    <Play className="w-8 h-8 md:w-10 md:h-10 ml-1.5 fill-white" />
                  )}
                  <span className="sr-only">Toggle Playback</span>
                </Button>
              </div>
            </div>

            {/* Decorative offset border */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl -z-10 transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 lg:h-[400px] top-1/2 -translate-y-1/2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
