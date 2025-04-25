
import { motion } from "framer-motion";
import { useState } from "react";
import { SkillBar } from "./SkillBar";
import { SkillTabs } from "./SkillTabs";
import { SkillList } from "./SkillList";
import { skillsData } from "./skillsData";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  
  return (
    <section id="skills" className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="grid grid-cols-12 grid-rows-12 gap-8 h-full w-full opacity-10">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="col-span-1 row-span-1 border-t border-l border-white/10"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
        >
          SKILLS
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-4 sm:p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <SkillTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <div className="mt-6">
            <SkillList activeTab={activeTab} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
