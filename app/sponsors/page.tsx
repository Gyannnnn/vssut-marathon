"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SPONSORS = [
  {
    tier: "Title Sponsor",
    items: [{ name: "JSW Energy", image: "/jsw.jpg" }],
    size: "w-64 h-64", // Large for title
  },
  {
    tier: "Powered By",
    items: [
      { name: "VSSUT Overseas Alumni Association", image: "/vssut-logo.png" },
    ],
    size: "w-56 h-40",
  },
  {
    tier: "Gold Sponsors",
    items: [
      { name: "Batch of 2001", image: null }, // Placeholder text
    ],
    size: "w-48 h-32",
  },
  {
    tier: "Hospitality Partner",
    items: [{ name: "Hotel Pearl Orchid", image: null }],
    size: "w-40 h-28",
  },
  {
    tier: "Institutional Partner",
    items: [{ name: "VSSUT Burla", image: "/VSSUTLOGO.png" }],
    size: "w-32 h-32",
  },
];

export default function SponsorsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <div className=" py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-primary tracking-tight pt-8"
          >
            Our Partners
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are deeply grateful to the visionary organizations and alumni who
            make the VSSUT Marathon possible. Together, we run for a cause.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 space-y-24">
        {SPONSORS.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-12 bg-border"></div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase">
                {group.tier}
              </h2>
              <div className="h-px w-12 bg-border"></div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {group.items.map((sponsor, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col items-center justify-center group`}
                >
                  <div
                    className={`relative ${group.size} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
                  >
                    {sponsor.image ? (
                      <Image
                        src={sponsor.image}
                        alt={sponsor.name}
                        fill
                        className="object-contain transition-all duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted/30 rounded-lg border-2 border-dashed border-muted flex items-center justify-center text-center p-4">
                        <span className="font-semibold text-muted-foreground">
                          {sponsor.name}
                        </span>
                      </div>
                    )}
                  </div>
                  {sponsor.image && (
                    <p className="mt-4 text-sm font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      {sponsor.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 relative overflow-hidden rounded-3xl bg-primary text-white p-12 md:p-20 text-center"
        >
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-10 bg-[url('/odisha-pattern.png')] bg-repeat bg-center"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Become a Sponsor
            </h3>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
              Align your brand with the spirit of determination and community.
              Showcase your commitment to health, youth empowerment, and the
              VSSUT legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white min-w-[200px] h-14 text-lg"
              >
                Download Brochure
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black border-white/20 hover:bg-white/10 min-w-[200px] h-14 text-lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
