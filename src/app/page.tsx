import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import VideoPlayerSection from "@/components/sections/VideoPlayerSection";
import { TranslationProvider } from "@/context/TranslationContext";

export default function Home() {
  return (
    <main className="bg-[#141414]">
      <TranslationProvider>
        <NavBar />
        <div className="mt-24 md:32 lg:mt-8 px-4 md:px-[5rem] 2xl:px-24">
          <HeroSection />
          <ServiceSection />
          <VideoPlayerSection />
          <TestimonialSection />
          <TeamSection />
          <NewsletterSection />
          <FooterSection />
        </div>
      </TranslationProvider>
    </main>
  );
}
