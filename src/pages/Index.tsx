
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  // Mouse position state for custom cursor effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Add the Google font
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Custom cursor - only show on desktop */}
      {!isMobile && (
        <div 
          className="fixed w-6 h-6 rounded-full border-2 border-white/50 pointer-events-none z-50 mix-blend-difference hidden md:block"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
            transition: "transform 0.1s ease-out, left 0.15s ease-out, top 0.15s ease-out"
          }}
        />
      )}
      
      {/* Gradient background effect */}
      <div className="fixed inset-0 bg-black z-[-2]" />
      <div className="fixed inset-0 opacity-30 z-[-1] bg-grid" />
      
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
