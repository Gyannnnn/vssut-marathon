import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import WhyParticipate from "@/components/home/WhyParticipate";
import ThemeSection from "@/components/home/ThemeSection";
import BrandAmbassador from "@/components/home/BrandAmbassador";
import RoutePreview from "@/components/home/RoutePreview";
import Sponsors from "@/components/home/Sponsors";
import FeaturedGallery from "@/components/home/FeaturedGallery";
import VCMessage from "@/components/home/VCMessage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <VCMessage />
      <Highlights />
      <ThemeSection />
      <WhyParticipate />
      <div id="route">
        <RoutePreview />
      </div>
      <FeaturedGallery />
      <BrandAmbassador />
      <Sponsors />
    </div>
  );
}
