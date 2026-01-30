import fs from "fs";
import path from "path";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | VSSUT Marathon 2026",
  description:
    "Relive the moments. A visual journey of spirit, endurance, and community.",
};

async function getImages() {
  const imagesDirectory = path.join(process.cwd(), "public/2026marathonpics");
  try {
    const filenames = await fs.promises.readdir(imagesDirectory);
    // Filter for image files just in case
    const images = filenames
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => `/2026marathonpics/${file}`);
    return images;
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    return [];
  }
}

export default async function GalleryPage() {
  const images = await getImages();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className=" text-black pt-30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container px-4 mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Captured Moments
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-400  max-w-3xl mx-auto leading-relaxed">
            Every snapshot tells a story of perseverance, joy, and the
            indomitable spirit of VSSUTians.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 ">
        <div className="container px-4 mx-auto">
          {images.length > 0 ? (
            <GalleryGrid images={images} />
          ) : (
            <div className="text-center py-20">
              <p className="text-black text-lg">
                No images found. They will be uploaded soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
