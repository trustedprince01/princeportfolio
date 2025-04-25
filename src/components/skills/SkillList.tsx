
import { motion } from "framer-motion";
import { SkillBar } from "./SkillBar";
import { skillsData } from "./skillsData";

type SkillListProps = {
  activeTab: string;
}

export const SkillList = ({ activeTab }: SkillListProps) => {
  return (
    <>
      {activeTab === "frontend" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {skillsData.frontend.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </motion.div>
      )}
      
      {activeTab === "backend" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {skillsData.backend.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </motion.div>
      )}
      
      {activeTab === "other" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {skillsData.other.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </motion.div>
      )}
    </>
  );
};
