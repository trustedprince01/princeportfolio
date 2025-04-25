
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { HeroHeader } from "./HeroHeader";
import { ServiceCards } from "./ServiceCards";
import { TechStack } from "./TechStack";
import { Testimonials } from "./Testimonials";

const HeroSection = () => {
  return (
    <section className="min-h-screen py-20 md:py-28 relative overflow-hidden bg-black text-white">
      <HeroBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <HeroHeader />
          <ServiceCards />
          <TechStack />
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
