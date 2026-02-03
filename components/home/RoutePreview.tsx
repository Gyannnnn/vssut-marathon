"use client";

import { Button } from "@/components/ui/button";
import { Map, Download, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const ROUTES = [
  {
    id: "21km",
    label: "21 KM",
    title: "Half Marathon (21.1 KM)",
    description: "The ultimate test of grit: longest dyke & elevation changes.",
    mapPlaceholderColor: "bg-orange-50",
    accentColor: "text-orange-600",
    borderColor: "border-orange-100",
    image: "/2026marathonpics/MAPS/21 km.png",
  },
  {
    id: "10km",
    label: "10 KM",
    title: "10K Challenge",
    description:
      "Scenic loop towards Hirakud reservoir with breathtaking views.",
    mapPlaceholderColor: "bg-blue-50",
    accentColor: "text-blue-600",
    borderColor: "border-blue-100",
    image: "/2026marathonpics/MAPS/10km.png",
  },
  {
    id: "5km",
    label: "5 KM",
    title: "5K Fun Run",
    description: "Beginner-friendly route through the VSSUT campus & gardens.",
    mapPlaceholderColor: "bg-green-50",
    accentColor: "text-green-600",
    borderColor: "border-green-100",
    image: "/2026marathonpics/MAPS/5km.png",
  },
];

const SCHEDULE = [
  { time: "5:00 AM", event: "Assembly Start Time" },
  { time: "5:00 AM", event: "Inaugural Cultural" },
  { time: "5:30 AM", event: "National Anthem" },
  { time: "5:35 AM", event: "Flag Off (21.1 KM)" },
  { time: "5:45 AM", event: "Zumba Starts" },
  { time: "6:30 AM", event: "DJ, Dance & Cultural Program" },
  { time: "8:00 AM", event: "Final Wave to Leave" },
];

export default function RoutePreview() {
  return (
    <section id="route" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm tracking-wide uppercase"
          >
            Race Day Guide
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight"
          >
            Route Maps & Schedule
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Everything you need for the big day. Study the routes and check the
            timeline to be ready at the starting line.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Column: Event Schedule */}
          <div className="xl:col-span-4">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-primary mb-8 px-2">
                Event Schedule
              </h3>

              <div className="space-y-0 relative">
                {/* Vertical Line track */}
                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gray-200"></div>

                {SCHEDULE.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    key={index}
                    className="relative flex items-start gap-6 py-4 group hover:bg-white hover:shadow-sm hover:rounded-xl transition-all duration-300 px-2"
                  >
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-secondary/20 flex items-center justify-center group-hover:border-secondary group-hover:scale-110 transition-all duration-300">
                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      </div>
                    </div>

                    <div className="flex-1 pt-1">
                      <span className="block text-secondary font-bold text-sm mb-1 uppercase tracking-wider">
                        {item.time}
                      </span>
                      <span className="text-gray-900 font-medium text-lg leading-tight">
                        {item.event}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Maps Grid */}
          <div className="xl:col-span-8 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ROUTES.map((route, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={route.id}
                  className={clsx(
                    "group relative bg-white rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-xl",
                    route.borderColor,
                    index === 0
                      ? "md:col-span-2 aspect-[21/9] md:aspect-[21/9]"
                      : "aspect-video", // Make first one wider if wanted, or just standard grid
                  )}
                >
                  {/* Content Overlay / Structure */}
                  <div className="absolute inset-0 flex flex-col z-10 pointer-events-none p-6 justify-between">
                    <div className="flex justify-between items-start">
                      <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-gray-100">
                        <span
                          className={clsx(
                            "font-bold text-lg",
                            route.accentColor,
                          )}
                        >
                          {route.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Map Visual Placeholder */}
                  <div
                    className={clsx(
                      "w-full h-full transition-transform duration-700 group-hover:scale-105 flex items-center justify-center relative",
                      route.mapPlaceholderColor,
                    )}
                  >
                    <Image
                      src={route.image}
                      alt={`${route.title} Map`}
                      fill
                      unoptimized
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 text-white text-center z-20 pointer-events-auto">
                      <h4 className="text-xl font-bold mb-2 shadow-black drop-shadow-md">
                        {route.title}
                      </h4>
                      <p className="text-gray-100 text-sm max-w-[200px] mx-auto hidden sm:block drop-shadow-md font-medium">
                        {route.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Combined Action Area */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 flex flex-col items-center text-center bg-gray-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl overflow-hidden relative"
            >
              {/* Decorative background pattern */}
              {/* <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

              <div className="relative z-10 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Navigate?
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Download the complete guide containing all route maps,
                  elevation profiles, and the detailed event schedule in high
                  resolution.
                </p>

                
              </div> */}
              <Button
                  size="lg"
                  className="bg-white  text-gray-900 hover:bg-gray-100 hover:text-primary h-14 px-8 text-lg font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 group max-sm:px-2 text-wrap"
                >
                  <Link href="/2026marathonpics/MAPS/21 km.png" target="_blank" className="w-full flex gap-2 items-center">
                  <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform " />
                  Download  Maps
                  <ChevronRight className="ml-1 h-5 w-5 opacity-50 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
