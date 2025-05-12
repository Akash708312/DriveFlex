
import HeroSection from "@/components/home/HeroSection";
import FeaturedCars from "@/components/home/FeaturedCars";
import HowItWorks from "@/components/home/HowItWorks";
import FeatureSection from "@/components/home/FeatureSection";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import { useEffect } from "react";

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <HeroSection />
      <FeaturedCars />
      <HowItWorks />
      <FeatureSection />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default Home;
