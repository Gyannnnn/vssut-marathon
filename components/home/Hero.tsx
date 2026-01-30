"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-16">
      <div className="absolute inset-0 bg-black/60 z-0">
        <Image
          src="/VSSUT-Gate.jpg"
          alt="VSSUT Gate"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/80 via-[#0f3460]/70 to-primary/80 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        {/* Date Chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="text-white border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-sm mb-6 uppercase tracking-wider"
          >
            📅 Sunday, 11 January 2026
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4"
        >
          SAY YES TO LIFE <br />
          <span className="text-secondary">NO TO ADDICTION</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-10 leading-relaxed font-light"
        >
          Welcome to the Inaugural Edition of{" "}
          <span className="font-semibold text-white">
            JSW VSSUT Burla Marathon 2026
          </span>
        </motion.p>

        {/* Info Cards Row - Mobile Stack, Desktop Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12 w-full max-w-4xl justify-center"
        >
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl text-left flex-1">
            <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold">11 January</h3>
              <p className="text-gray-400 text-sm">2026, Sunday</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl text-left flex-1">
            <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold">5:30 AM IST</h3>
              <p className="text-gray-400 text-sm">Race Start</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl text-left flex-1">
            <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold">VSSUT Burla</h3>
              <p className="text-gray-400 text-sm">Main Gate</p>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90e min-w-[200px] text-lg h-14 font-semibold shadow-lg shadow-secondary/20"
          >
            <Link href="/register/participant-register" className=" text-whit">Register Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-black border-white/30 hover:bg-white/10 min-w-[150px] text-lg h-14"
          >
            <a href="#route">View Route</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
