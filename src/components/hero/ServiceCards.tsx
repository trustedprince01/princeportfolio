
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
      {services.map((service, index) => (
        <motion.div 
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
        >
          <div className="flex gap-2 mb-3">
            {service.icons.map((Icon, i) => (
              <Icon key={i} className={`h-5 w-5 ${service.iconColors[i]}`} />
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-400 text-sm">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

const services = [
  {
    title: "Web Development",
    icons: [ArrowRight, ArrowRight, ArrowRight],
    iconColors: ["text-red-400", "text-blue-400", "text-green-400"],
    description: "Creating beautiful and functional interfaces with a focus on user experience and accessibility."
  },
  {
    title: "Mobile Development",
    icons: [ArrowRight, ArrowRight, ArrowRight],
    iconColors: ["text-blue-400", "text-red-400", "text-green-400"],
    description: "Creating cross-platform and native mobile applications with seamless user experiences."
  },
  {
    title: "UI/UX Design",
    icons: [ArrowRight, ArrowRight, ArrowRight],
    iconColors: ["text-blue-400", "text-pink-400", "text-blue-400"],
    description: "Crafting intuitive and visually appealing user experiences for web and mobile applications."
  },
  {
    title: "System Architecture",
    icons: [ArrowRight, ArrowRight, ArrowRight],
    iconColors: ["text-blue-400", "text-red-400", "text-green-400"],
    description: "APIs, endpoints, auth, hosting, git, deployment and maintenance." 
  }
];
