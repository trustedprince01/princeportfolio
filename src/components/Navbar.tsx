import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
  <Link to="/" className="flex items-center">
    <img src="/p.png" alt="Logo" className="h-6 w-4" />
  </Link>

  {isMobile ? (
    <>
      <button 
        onClick={toggleMenu}
        className="text-gray-300 focus:outline-none"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 py-4"
        >
          <div className="flex flex-col items-center space-y-4">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>ABOUT</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>PORTFOLIO</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>SKILLS</a>
            <a href="#resume" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>EXPERIENCE</a>
            <Button size="sm" asChild className="bg-white text-black hover:bg-white/90 rounded-full w-36">
              <a href="#contact" onClick={toggleMenu}>CONTACT ME</a>
            </Button>
          </div>
        </motion.div>
      )}
    </>
  ) : (
    <>
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="text-gray-300 hover:text-white transition-colors">ABOUT</a>
        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">PORTFOLIO</a>
        <a href="#skills" className="text-gray-300 hover:text-white transition-colors">SKILLS</a>
        <a href="#resume" className="text-gray-300 hover:text-white transition-colors">EXPERIENCE</a>
      </div>
      <Button size="sm" asChild className="bg-white text-black hover:bg-white/90 rounded-full hidden md:flex">
        <a href="#contact">CONTACT ME</a>
      </Button>
    </>
  )}
</div>
    </motion.nav>
  );
};

export default Navbar;
