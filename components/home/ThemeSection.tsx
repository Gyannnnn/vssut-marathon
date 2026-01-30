"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ThemeSection() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">
            Our Mission
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            "SAY <span className="text-secondary">YES</span> TO LIFE,
            <br />
            <span className="text-gray-400">NO</span> TO ADDICTION"
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            We run not just for fitness, but to spread awareness. Join us in our
            pledge to build a healthier, addiction-free society. Empowering the
            youth, one step at a time.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-full"
          >
            <Link href="/register/participant-register">
              Join the Movement
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
