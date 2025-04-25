import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

export const HeroHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-left pt-16 md:pt-0"
    >
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
        Hey, I'm <span className="text-gray-400">Prince</span> <span className="text-yellow-400">👋</span>
        <br />
        <span className="text-blue-400">
          <Typewriter
            words={[
              "I'm a Software Developer",
              // "I'm a Blockchain Enthusiast",
              // "I build Web3 Applications",
              "I love Open Source"
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
      Hey there! I’m a web developer crafting intuitive interfaces backed by smart backend logic. I bring ideas to life and keep growing with every project I build.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button
          size="lg"
          asChild
          className="bg-white text-black hover:bg-gray-100 hover:text-blue-600 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg group"
        >
          <a href="#projects">
            View My Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
        <Button
          size="lg"
          asChild
          className="bg-white text-black hover:bg-gray-100 hover:text-blue-600 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg group"
        >
          <a href="/Chibuzor%20Prince%20RESUME.pdf" download="Chibuzor_Prince_Resume.pdf">
            <Download className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            Download CV
          </a>
        </Button>
      </div>
    </motion.div>
  );
};
