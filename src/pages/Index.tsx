import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Add throttling to improve performance
  useEffect(() => {
    let timeoutId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!timeoutId) {
        timeoutId = window.setTimeout(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          timeoutId = 0;
        }, 16); // Approximately 60fps
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
        if (timeoutId) window.clearTimeout(timeoutId);
      }
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Only show cursor on desktop and when user is moving mouse */}
      {!isMobile && mousePosition.x !== 0 && (
        <div 
          className="fixed w-6 h-6 rounded-full border-2 border-white/50 pointer-events-none z-50 mix-blend-difference hidden md:block"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            willChange: 'transform'
          }}
        />
      )}
      
      {/* Rest of your components */}
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
