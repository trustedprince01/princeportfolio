
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="grid grid-cols-12 grid-rows-12 gap-8 h-full w-full opacity-10">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="col-span-1 row-span-1 border-t border-l border-white/10"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
        >
          ABOUT
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg max-w-[350px] mx-auto md:mx-0 md:max-w-none md:ml-auto md:mr-0"
          >
            <img 
              src="/images/me.jpg" 
              alt="Profile" 
              className="w-full aspect-square object-cover object-top"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              I'm Prince, a web developer driven by curiosity, creativity, and a love for clean, functional design. I specialize in building sleek, responsive digital experiences using 
              <span className="text-blue-400 font-semibold"> React, Typescript</span> and modern UI frameworks — blending solid logic with smooth user interactions.
            </p>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              I'm always leveling up — learning new tech, mastering backend systems, and contributing to open-source whenever I can. Growth isn't optional for me. It's my default mode.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 mb-6">
              "Don’t judge me by my wins. Judge me by my losses — because there are so few."
            </blockquote>
            <p className="text-sm sm:text-base text-gray-400">
              When I’m not coding, you’ll find me exploring new ideas, sharpening my backend skills, or touching grass to stay grounded beyond the screen. Let's build something incredible together.
            </p>
      </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
