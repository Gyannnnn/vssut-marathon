"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Medal, Timer, Trophy } from "lucide-react";

const CATEGORIES = [
  {
    title: "5K Fun Run",
    distance: "5 KM",
    description: "Perfect for beginners and families.",
    icon: <Medal className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "10K Challenge",
    distance: "10 KM",
    description: "Push your limits and race against time.",
    icon: <Timer className="w-8 h-8 text-orange-500" />,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Half Marathon",
    distance: "21.1 KM",
    description: " The ultimate test of endurance.",
    icon: <Trophy className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-50 text-purple-600",
  },
];

export default function Highlights() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Race Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your challenge. Whether you are a seasoned runner or a
            first-timer, there is a category for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow border-none shadow-md overflow-hidden relative group h-full">
                <div
                  className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}
                >
                  {cat.icon}
                </div>
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-full ${cat.color} flex items-center justify-center mb-4`}
                  >
                    {cat.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {cat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-extrabold text-foreground mb-2">
                    {cat.distance}
                  </div>
                  <p className="text-muted-foreground">{cat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
