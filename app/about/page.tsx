"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-background py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6 pt-12"
          >
            About Us
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A legacy in the making. Celebrating the spirit of VSSUT Burla.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 sm:py-20 ">
        {/* Vision Section */}
        <section className="flex flex-col md:flex-row items-center gap-12 sm:mb-20">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The JSW VSSUT Burla Marathon 2026 is conceived not just as a
              sporting event, but as a movement. A movement to unite the vast
              alumni network, the energetic student body, and the local
              community of Sambalpur.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our theme,{" "}
              <span className="font-semibold text-secondary">
                "Say Yes to Life, No to Addiction"
              </span>
              , reflects our commitment to social responsibility. We run to
              inspire health, discipline, and a drug-free lifestyle among the
              youth.
            </p>
          </div>
          <div className="flex-1 h-64 md:h-96 bg-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <Image
              src="/SVM05420.JPG"
              alt="Marathon Vision"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Legacy Section */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold text-primary mb-4">
              The VSSUT Legacy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 1956, Veer Surendra Sai University of Technology
              (formerly UCE Burla) is the oldest engineering college in Odisha.
              Nestled at the foot of the Hirakud Dam, our campus is a blend of
              history and nature.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This marathon is a tribute to our Alma Mater, organized by the
              VSSUT Overseas Alumni Association in collaboration with JSW Energy
              and the University.
            </p>
          </div>
          <div className="flex-1 h-64 md:h-96 bg-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <Image
              src="/cultural.JPG"
              alt="VSSUT Campus"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
