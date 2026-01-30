"use client";

import { motion } from "framer-motion";
import { Heart, Award, GraduationCap, Users } from "lucide-react";

const REASONS = [
  {
    icon: <Heart className="w-10 h-10 text-rose-500" />,
    title: "Fitness & Wellness",
    description:
      "Kickstart your year with a commitment to health and vitality.",
  },
  {
    icon: <Award className="w-10 h-10 text-amber-500" />,
    title: "Medals & Certificates",
    description:
      "Official finisher medals and E-certificates for all participants.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
    title: "Campus Pride",
    description: "Run through the historic and scenic VSSUT Burla campus.",
  },
  {
    icon: <Users className="w-10 h-10 text-green-500" />,
    title: "Community Impact",
    description: "Support the cause against addiction and empower youth.",
  },
];

export default function WhyParticipate() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Participate?
          </h2>
          <p className="text-muted-foreground">
            More than just a run. It is a celebration of spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((reason, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all text-center flex flex-col items-center"
            >
              <div className="bg-primary/5 p-4 rounded-full mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
