import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Eye, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink
} from "@/components/ui/pagination";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A showcase of my skills and projects",
    tags: ["React", "Tailwind CSS", "Html and css"],
    category: "Frontend",
    image: "/images/Portfolio.png",
    githubUrl: "https://github.com/trustedprince01/my_portfolio",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Food ordering site",
    description: "A website for user-friendly food website",
    tags: ["React", "Tailwind CSS"],
    category: "Frontend",
    image: "/images/pfood.png",
    githubUrl: "https://github.com/trustedprince01/p_palace_food",
    demoUrl: "https://ppalacefood.netlify.app/"
  },
  {
    id: 3,
    title: "Banking Dashboard",
    description: "Real-time weather forecasting with location-based services",
    tags: ["React", "Tailwind CSS", "Html and css"],
    category: "Frontend",
    image:"/images/dashboard.png",
    githubUrl: "#",
    demoUrl: "https://princepay-expensesdashboard.netlify.app/"
  },
  {
    id: 4,
    title: "Food ordering service site",
    description: "Backend services for food Ordering system",
    tags: ["Python(Django)", "Railways", "Cloudinary"],
    category: "Backend",
    image: "/images/sem4.png",
    githubUrl: "https://github.com/trustedprince01/foodordering",
    demoUrl: "https://foodordering-productions.up.railway.app/"
  },
  {
    id: 5,
    title: "Redesigned Nike Platform Design",
    description: "User interface design for a Nike display page",
    tags: ["Figma", "UI/UX", "Prototype"],
    category: "UI/UX",
    image: "/images/nike.jpg",
    githubUrl: "#",
    demoUrl: "https://www.figma.com/proto/jMvcGyY4inOFNUATMTuh61/NIKE-DESIGN?page-id=0%3A1&node-id=4-89&viewport=-254%2C4809%2C0.27&t=UW3hZOBJyuaFFLSF-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4%3A46" 
  },
  {
    id: 6,
    title: "Apple watch store Design",
    description: "User interface design for a Apple display page",
    tags: ["Figma", "UI/UX", "Prototype"],
    category: "UI/UX",
    image: "/images/applewatch.svg",
    githubUrl: "#",
    demoUrl: "https://www.figma.com/proto/JnGKk8Nmir69ro6uO0CDM4/apple?node-id=1-2&t=bcfzk1pOpRYOxiZI-1" 
  },

  { id: 7,
    title: "Redesigned Nike Platform Design",
    description: "User interface design for a Nike display page",
    tags: ["Figma", "UI/UX", "Prototype"],
    category: "UI/UX",
    image: "/images/nike2.jpg",
    githubUrl: "#",
    demoUrl: "https://www.figma.com/proto/uSF1rlEbs7cmsOHkRJ5ENl/NIke-shoe?node-id=11-2&t=lQwi4Zbt4mcosMZz-1" 
  },
  { id: 8,
    title: "Moon and sun Effect",
    description: "Sun and Moon toggle effect ",
    tags: ["Figma", "UI/UX", "Prototype"],
    category: "UI/UX",
    image: "/images/sunandmoon.png",
    githubUrl: "#",
    demoUrl: "https://www.figma.com/proto/hu2pYYkxoRHYe3a2147mac/sun-and-moon-effect?node-id=25-19&t=mlsZwfpoKU3hlN0W-1" 
  },
 
  { id: 9,
    title: "Food Delivery site",
    description: "A user-friendly food delivery website",
    tags: ["Figma", "UI/UX", "Prototype"],
    category: "UI/UX",
    image: "/images/fastfood.svg",
    githubUrl: "#",
    demoUrl: "https://www.figma.com/design/dphaFZwmuV45iMJXpXivsA/desktop-site?node-id=0-1&t=RViGvzSuRlRYxC8k-1" 
  },
  { id: 10,
    title: "Food ordering site",
    description: "A user-friendly food website",
    tags: ["Figma", "UI/UX", "Prototype"],
    category: "UI/UX",
    image: "/images/p_place.png",
    githubUrl: "#",
    demoUrl: "https://www.figma.com/proto/4s2V5bBBEs2ID1OEtYZs1W/food-Landing-page?node-id=0-1&t=KPW9gFOrNSdKIVAH-1" 
  },
  { id: 11,
    title: "Whatsapp Redesign",
    description: "A redesign of whatsapp mobile UI",
    tags: ["Figma", "UI/UX", "Prototype"],
    category: "UI/UX",
    image: "/images/whatsapp.svg",
    githubUrl: "#",
    demoUrl: "https://www.figma.com/design/hQvVyDyCJfaNyTj3ZIkOhn/A1?node-id=0-1&t=A3ZEN3V0CmKYhTXo-1" 
  }, 

  { id: 12,
    title: "city guide App UI design",
    description: "A design for a mobile city guide app",
    tags: ["Figma", "UI/UX", "Prototype"],
    category: "UI/UX",
    image: "/images/cityguide.png",
    githubUrl: "#",
    demoUrl: "https://www.figma.com/proto/RIlMaCH78WU6Yd3HtwVCUe/sems-3-project?node-id=0-1&t=Fo4RDAPD13BJwakQ-1" 
  }, 

  { id: 13,
    title: "TechSphere Innovation Hub",
    description: "A design for a Tech company",
    tags: ["Figma", "UI/UX", "Prototype"],
    category: "UI/UX",
    image: "/images/sh.png",
    githubUrl: "#",
    demoUrl: "https://www.figma.com/design/Ija9Hxs3d1m8VUb8Ggd5b8/About-Us-Page?node-id=0-1&t=QvP4okNJOZ6pkswm-1" 
  },
 {
    id: 14,
    title: "Food delievery website",
    description: "A front-end design for food ordering for backend ",
    tags: ["React", "Tailwind CSS", "Html and css"],
    category: "Frontend",
    image:"/images/foo.jpg",
    githubUrl: "https://github.com/trustedprince01/fast-food",
    demoUrl: "https://fastyfoo.netlify.app/"
  },
  { id: 14,
    title: "Apple vision pro",
    description: "A design for a Apple vision pro",
    tags: ["Figma", "UI/UX", "Prototype"],
    category: "UI/UX",
    image: "/images/applevision.jpg",
    githubUrl: "#",
    demoUrl: "https://www.figma.com/proto/UZC6sqVtzVvwr8VRv7OwZx/APPLE-VISON-PRO?node-id=0-1&t=eNW7Sp9qjQTpcJRH-1" 
  },
  { id: 15,
    title: "Mealify",
    description: "modern, responsive dashboard for Mealify—an online food ordering app.Users can browse foods, manage orders, view their cart,",
    tags: ["React", "Type-script", "Django", "Railway"],
    category: "Backend", 
    image: "/images/mealify.png",
    githubUrl: "https://github.com/trustedprince01/mealify_backend",
    demoUrl: "https://mealify-food-production.up.railway.app/" 
  },
  { id: 16,
    title: "Landtenats",
    description: "LandTenants is a modern web application built to streamline communication and operations between landlords and tenants",
    tags: ["React", "Type-script","Tailwinds"],
    category: "Frontend", 
    image: "/images/landtenants.png",
    githubUrl: "https://github.com/trustedprince01/landtenants-frontend",
    demoUrl: "https://landtenants.netlify.app/" 
  },
];

const categories = ["All", "Frontend", "Backend", "UI/UX"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <section id="projects" className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
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
          className="text-2xl sm:text-3xl font-bold text-center mb-4"
        >
          PORTFOLIO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto mb-8"
        >
          Detailed showcase of my complete projects with live demos and source code
        </motion.p>
        
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1); // Reset to first page when changing category
              }}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={`rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" 
                  : "border-white/20 text-gray-400 hover:text-white hover:border-white/40"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-transparent border border-white/10 hover:border-white/20 transition-all overflow-hidden h-full flex flex-col">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - ${project.description}`}
                      width="600"
                      height="400"
                      loading="lazy" 
                    />
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </div>
                  </div>
                  <CardContent className="flex-grow flex flex-col p-4 sm:p-6 bg-black/80">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-200">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                      {/* Only show View Code for non-UI/UX projects */}
                      {project.category !== "UI/UX" ? (
                        <a href={project.githubUrl} className="text-gray-400 hover:text-white flex items-center text-xs">
                          <Github className="mr-1 h-3 w-3" /> View Code
                        </a>
                      ) : (
                        <span className="text-xs text-gray-500">Design Project</span>
                      )}
                      <a 
                        href={project.demoUrl} 
                        className="text-gray-400 hover:text-white flex items-center text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="mr-1 h-3 w-3" /> 
                        {project.category === "UI/UX" ? "View Design" : "Live Demo"}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400">No projects found in this category.</p>
            </div>
          )}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                    className={`${
                      currentPage === i + 1 
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 border-none" 
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
};

export default Projects;
