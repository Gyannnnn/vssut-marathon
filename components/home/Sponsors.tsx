import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Organized By
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-end gap-12 md:gap-20 opacity-80 mb-16">
          {/* Logos Placeholders */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <Image
                src="/vssut-main-logo.png"
                alt="VSSUT Burla"
                fill
                unoptimized
                priority
                className="object-contain"
              />
            </div>
            <span className="text-sm font-semibold text-gray-500">
              VSSUT Burla
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <Image
                src="/jsw-energy-logo.jpg"
                alt="JSW Energy"
                fill
                unoptimized
                priority
                className="object-contain rounded-full"
              />
            </div>
            <span className="text-sm font-semibold text-gray-500">
              JSW Energy
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative w-48 h-32 flex items-center justify-center">
              <Image
                src="/vssut-logo.png"
                alt="VSSUT Overseas Alumni"
                fill
                unoptimized
                priority
                className="object-contain"
              />
            </div>
            <span className="text-sm font-semibold text-gray-500">
              VSSUT Overseas Alumni
            </span>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Supported By
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 font-medium">
            <span>Batch of 2001</span>
            <span>•</span>
            <span>Hotel Pearl Orchid</span>
            <span>•</span>
            <span>District Administration</span>
          </div>
        </div>
      </div>
    </section>
  );
}
