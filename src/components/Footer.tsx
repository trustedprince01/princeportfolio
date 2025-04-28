
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Prince</h3>
            <p className="text-gray-400 text-sm">
              Software Developer
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/trustedprince01" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/chibuzor-prince-68976b35b/" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://x.com/JokerElon" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Prince. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
