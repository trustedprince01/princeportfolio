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
    title: "Food ordering site",
    description: "A website for user-friendly food website",
    tags: ["React", "Tailwind CSS"],
    category: "Projects",
    image: "/images/pfood.png",
    githubUrl: "https://github.com/trustedprince01/p_palace_food",
    demoUrl: "https://ppalacefood.netlify.app/"
  },
  {
    id: 2,
    title: "Banking Dashboard",
    description: "Real-time banking dashboard for users to manage their finances",
    tags: ["React", "Tailwind CSS", "Html and css"],
    category: "Projects",
    image:"/images/dashboard.png",
    githubUrl: "#",
    demoUrl: "https://princepay-expensesdashboard.netlify.app/"
  },
  {
    id: 3,
    title: "Food ordering service site",
    description: "Backend services for food Ordering system",
    tags: ["Python(Django)", "Railways", "Cloudinary"],
    category: "Projects",
    image: "/images/sem4.png",
    githubUrl: "https://github.com/trustedprince01/foodordering",
    demoUrl: "https://foodordering-productions.up.railway.app/"
  },
 
  
 {
    id: 4,
    title: "Food delievery website",
    description: "A front-end design for food ordering for backend ",
    tags: ["React", "Tailwind CSS", "Html and css"],
    category: "Projects",
    image:"/images/foo.jpg",
    githubUrl: "https://github.com/trustedprince01/fast-food",
    demoUrl: "https://fastyfoo.netlify.app/"
  },
  
  { id: 5,
    title: "Mealify",
    description: "modern, responsive dashboard for Mealify—an online food ordering app.Users can browse foods, manage orders, view their cart,",
    tags: ["React", "Type-script", "Django", "Railway"],
    category: "Projects", 
    image: "/images/mealify.png",
    githubUrl: "https://github.com/trustedprince01/mealify_backend",
    demoUrl: "https://mealify-food-production.up.railway.app/" 
  },
  { id: 6,
    title: "Landtenats",
    description: "LandTenants is a modern web application built to streamline communication and operations between landlords and tenants",
    tags: ["React", "Type-script","Tailwinds"],
    category: "Projects", 
    image: "/images/landtenants.png",
    githubUrl: "https://github.com/trustedprince01/landtenants-frontend",
    demoUrl: "https://landtenants.netlify.app/" 
  },
  { id: 7,
    title: "SubTrackr",
    description: "Track All Your Subscriptions, One Platform ",
    tags: ["React", "Type-script","Tailwinds", "Django", "Railway"],
    category: "Projects", 
    image: "/images/subtacker.png",
    githubUrl: "https://github.com/trustedprince01/subtracker_frontend",
    demoUrl: "https://subtraker.netlify.app/" 
  },
];

const categories = ["Projects"];

const Projects = () => {
 
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
                      <a href={project.githubUrl} className="text-gray-400 hover:text-white flex items-center text-xs">
                        <Github className="mr-1 h-3 w-3" /> View Code
                      </a>
                      <a 
                        href={project.demoUrl} 
                        className="text-gray-400 hover:text-white flex items-center text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="mr-1 h-3 w-3" /> Live Demo
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
