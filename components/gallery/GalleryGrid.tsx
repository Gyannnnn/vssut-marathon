"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryGridProps {
  images: string[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images2 = [
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM05156.JPG",
    },
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM05156+(1).JPG",
    },
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM05203.JPG",
    },
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM05305.JPG",
    },
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM05316.JPG",
    },
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM05346.JPG",
    },
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM05362.JPG",
    },
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM05393.JPG",
    },
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM05421.JPG",
    },
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM05539.JPG",
    },
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM05908.JPG",
    },
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM06204.JPG",
    },
    {
      url: "https://veerpreps.s3.ap-south-1.amazonaws.com/uploads/marathon/SVM06129.JPG",
    },
  ];

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images2.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(src.url)}
          >
            <Image
              src={src.url}
              alt={`Gallery Image ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                {/* Using object-contain to ensure full image is visible without cropping in lightbox */}
                <Image
                  src={selectedImage}
                  alt="Full view"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
