import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BrandAmbassador() {
  return (
    <section className="sm:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Placeholder */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gray-200 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              {/* Replace with actual image later */}
              <Image
                src="/Dutee-Chand.jpg"
                alt="Ambassador"
                fill
                unoptimized
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Brand Ambassador
            </h2>
            <h3 className="text-xl text-secondary font-medium mb-6">
              JSW VSSUT Burla Marathon 2026
            </h3>
            <blockquote className="text-xl md:text-2xl font-light text-muted-foreground italic mb-8 border-l-4 border-secondary pl-6">
              "Running is about finding your inner strength. I invite you all to
              come to Burla and experience the energy of VSSUT."
            </blockquote>
            <p className="font-bold text-lg text-primary mb-1">Dutee Chand</p>
            <p className="text-muted-foreground mb-8">Indian track and field athlete</p>
           
          </div>
        </div>
      </div>
    </section>
  );
}
