"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredImages = [
  "/2026marathonpics/SVM05346.JPG",
  "/2026marathonpics/SVM05421.JPG",
  "/2026marathonpics/SVM06129.JPG",
  "/2026marathonpics/SVM05539.JPG",
];

export default function FeaturedGallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              More Than a Run
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              It&apos;s a celebration of spirit, endurance, and the unbreakable
              bond of the VSSUT community. Every step tells a story.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {featuredImages.map((src, index) => {
            let gridClass = "";

            // Bento Grid Logic
            if (index === 0) {
              // First image: Large (Left Half) -> row-span-2, col-span-2
              gridClass = "md:col-span-2 md:row-span-2 h-[300px] md:h-full";
            } else if (index === 1) {
              // Second image: Wide (Top Right) -> col-span-2
              gridClass = "md:col-span-2 md:h-[calc(100%-0.5rem)]";
            } else {
              // Third and Fourth: Small (Bottom Right) -> col-span-1
              gridClass = "md:col-span-1 md:h-full";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group rounded-2xl overflow-hidden shadow-lg ${gridClass}`}
              >
                <Image
                  src={src}
                  alt={`Marathon Highlight ${index + 1}`}
                  fill
                  unoptimized
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : index === 1
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, 25vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2 text-center"
        >
          <Link href="/gallery">
            <Button
              size="lg"
              className="group rounded-full px-8 text-lg font-medium"
            >
              View All Memories
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
