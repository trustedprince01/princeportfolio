
import { motion } from "framer-motion";

type SkillBarProps = {
  name: string;
  level: number;
}

export const SkillBar = ({ name, level }: SkillBarProps) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-300 text-sm sm:text-base">{name}</span>
      <span className="text-gray-400 text-sm sm:text-base">{level}%</span>
    </div>
    <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
      />
    </div>
  </div>
);
