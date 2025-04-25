
import { motion } from "framer-motion";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-24"
    >
      <h2 className="text-3xl font-bold mb-8 text-left">Tech Stack</h2>
      <TooltipProvider>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-h-[400px] overflow-y-auto">
          {techStack.map((tech, index) => (
            <Tooltip key={tech.name}>
              <TooltipTrigger asChild>
                <motion.div
                  className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    delay: index * 0.2 
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <tech.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${tech.color}`} />
                  <span className="mt-2 text-xs sm:text-sm text-gray-300">{tech.name}</span>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-900 border border-gray-700 text-white">
                <p>{tech.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </motion.div>
  );
};

export const techStack = [
  // Frontend Development
  {
    name: "HTML",
    icon: (props: { className?: string }) => <img src="/images/html.svg" alt="HTML Logo" className={`h-10 w-10 ${props.className || ""}`} />,
    color: "text-orange-400",
    description: "Markup language for web pages"
  },
  {
    name: "CSS",
    icon: () => <img src="/images/css.svg" alt="CSS Logo" className="h-10 w-10" />,
    color: "text-blue-500",
    description: "Styling language for web pages"
  },
  {
    name: "JavaScript",
    icon: () => <img src="/images/javascript.svg" alt="Java Script" className="h-10 w-10" />, 
    color: "text-yellow-500",
    description: "Programming language for web development"
  },
  {
    name: "React",
    icon: () => <img src="/images/react.svg" alt="React" className="h-10 w-10" />,
    color: "text-blue-400",
    description: "Building interactive UIs with React"
  },
  {
    name: "Tailwind CSS",
    icon: () => <img src="/images/tailwind.svg" alt="tailwind" className="h-10 w-10" />,
    color: "text-cyan-400",
    description: "Utility-first CSS framework"
  },
  // {
  //   name: "Bootstrap",
  //   icon: () => <img src="/images/bootstrap.svg" alt="Bootstrap Logo" className="h-10 w-10" />,
  //   color: "text-purple-500",
  //   description: "CSS framework for responsive design"
  // },
  {
    name: "Figma",
    icon: () => <img src="/images/figma.svg" alt="figma logo" className="h-10 w-10" />,
    color: "text-purple-500",
    description: "Designs responsive design"
  },

  // Backend Development
  {
    name: "Python (Django)",
    icon: () => <img src="/images/python.svg" alt="Python Logo" className="h-10 w-10" />, 
    color: "text-blue-400",
    description: "Backend web development framework"
  },
  // {
  //   name: "Node.js",
  //   icon: () => <img src="/images/nodejs.svg" alt="nodejs" className="h-10 w-10" />, 
  //   color: "text-green-400",
  //   description: "JavaScript runtime for backend development"
  // },
  {
    name: "Firebase Auth",
    icon: () => <img src="/images/firebase.svg" alt="Firebase Logo" className="h-10 w-10" />,
    color: "text-yellow-400",
    description: "Authentication for web and mobile apps"
  },

  {
    name: "Flutter",
    icon: () => <img src="/images/flutter.svg" alt="Flutter Logo" className="h-10 w-10" />,
    color: "text-blue-500",
    description: "UI toolkit for building natively compiled applications",
  },

  // Database Management
  {
    name: "PostgreSQL",
    icon: () => <img src="/images/postgresql.svg" alt="postgresql" className="h-10 w-10" />,
    color: "text-green-500",
    description: "Relational database management system"
  },
  // {
  //   name: "MongoDB",
  //   icon: () => <img src="/images/mongodb.svg" alt="mongodb" className="h-10 w-10" />,
  //   color: "text-green-500",
  //   description: "NoSQL database for modern applications"
  // },
  
  // DevOps & Deployment
  // {
  //   name: "Vercel",
  //   icon: () => <img src="/images/vercel.svg" alt="vercel" className="h-10 w-10" />,
  //   color: "text-blue-400",
  //   description: "Cloud platform for static sites and serverless functions"
  // },
  {
    name: "Netlify",
    icon: () => <img src="/images/netlify.svg" alt="netflify" className="h-10 w-10" />,
    color: "text-green-400",
    description: "Hosting and automation platform"
  },
  {
    name: "Cloudinary",
    icon: () => <img src="/images/cloudinary.svg" alt="render logo" className="h-10 w-10" />,
    color: "text-blue-500",
    description: "Media optimization and cloud storage",
  },
  {
    name: "Render",
    icon: () => <img src="/images/render.jpg" alt="render logo" className="h-10 w-10" />,
    color: "text-indigo-500",
    description: "Cloud platform for web applications"
  },
  {
    name: "GitHub",
    icon: () => <img src="/images/github.svg" alt="github logo" className="h-10 w-10" />,
    color: "text-gray-500",
    description: "Automates code integration, testing, and deployment."
  }
];
