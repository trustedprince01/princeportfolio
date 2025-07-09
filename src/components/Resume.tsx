import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Code, ArrowRight } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-16 md:py-20 min-h-screen flex items-center justify-center text-white relative">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">EXPERIENCE</h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            My education, work experience, and professional growth
          </p>
        </motion.div>

        {/* Centered Experience and Projects Section */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-white"
          >
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">CHIBUZOR PRINCE</h3>
                <p className="text-blue-300">Developer</p>
              </div>
              <a
                //href="/Chibuzor%20Prince%20RESUME.pdf" 
                //download="Chibuzor_Prince_Resume.pdf" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm w-full sm:w-auto flex items-center justify-center px-4 py-2 rounded"
              >
                <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Download CV
              </a>
            </div>

            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-800 flex items-center justify-center mr-3 sm:mr-4">
                  <GraduationCap className="text-white h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">EDUCATION</h3>
              </div>

              <div className="relative pl-6 sm:pl-8 pb-6 border-l border-blue-800/50 ml-4 sm:ml-5">
                {/* First Course */}
                <div className="mb-4">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-800 rounded-full -left-1.5 sm:-left-2 mt-1"></div>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
                    <span className="text-blue-300 font-semibold text-sm sm:text-base">2023-2024</span>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">Advanced Diploma in Software Engineering</h4>
                      <p className="text-blue-300 text-xs sm:text-sm">Aptech Computer Education</p>
                      <ul className="list-disc pl-5 mt-2 text-xs sm:text-sm text-gray-300">
                        <li>Product Design: UI/UX principles, user research, Figma wireframing & prototyping</li>
                        <li>Frontend: HTML, CSS, JavaScript, React for responsive web applications</li>
                        <li>Backend: Python, Django, database management systems</li>
                        <li>Mobile: Cross-platform app development with Flutter</li>
                        <li>Architecture: Software design patterns, microservices, scalable systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Cyfrin Updraft Course */}
                <div className="mb-4">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-800 rounded-full -left-1.5 sm:-left-2 mt-1"></div>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
                    <span className="text-blue-300 font-semibold text-sm sm:text-base">2024-2025</span>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">Blockchain Development</h4>
                      <p className="text-blue-300 text-xs sm:text-sm">Cyfrin Updraft</p>
                      <ul className="list-disc pl-5 mt-2 text-xs sm:text-sm text-gray-300">
                        <li>Smart Contract Development</li>
                        <li>Blockchain Security</li>
                        <li>Web3 Integration</li>
                        <li>Stil learning ...................</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-800 flex items-center justify-center mr-3 sm:mr-4">
                  <Briefcase className="text-white h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">EXPERIENCE</h3>
              </div>

              <div className="relative pl-6 sm:pl-8 pb-6 border-l border-blue-800/50 ml-4 sm:ml-5">
                <div className="mb-4">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-800 rounded-full -left-1.5 sm:-left-2 mt-1"></div>
                  <div>
                    <p className="font-medium text-xs sm:text-sm text-gray-300">
                      Gained hands-on experience in UI/UX design, frontend development, and backend 
                      programming while working on real-world projects.
                    </p>
                    <ul className="list-disc pl-5 mt-3 text-xs sm:text-sm text-gray-300 space-y-2">
                    <li>Designed wireframes & prototypes using Figma.</li>
                    <li>Built web interfaces with HTML, CSS, and JavaScript.</li>
                    <li>Developed backend systems using Python, Django, and MySQL.</li>
                    <li>Created dynamic and interactive UIs using React and TypeScript.</li>
                    <li>Implemented state management and API integrations in React apps.</li>
                    <li>Currently learning Web3 development, focusing on smart contracts and blockchain integration.</li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-800 flex items-center justify-center mr-3 sm:mr-4">
                  <Code className="text-white h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">KEY PROJECT HIGHLIGHTS</h3>
              </div>

              <div className="relative pl-6 sm:pl-8 pb-6 border-l border-blue-800/50 ml-4 sm:ml-5">
                <div className="mb-4">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-800 rounded-full -left-1.5 sm:-left-2 mt-1"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-900/30 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-bold text-sm sm:text-base">E-Commerce Website</h4>
                      <p className="text-xs text-blue-300">HTML, CSS, JavaScript & MySQL</p>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1">
                        Created core shopping functionality with secure payment system
                      </p>
                    </div>

                    <div className="bg-blue-900/30 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-bold text-sm sm:text-base">City Guide App</h4>
                      <p className="text-xs text-blue-300">Flutter & Firebase</p>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1">
                        Implemented location services and user recommendations
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <a href="#projects" className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm inline-flex items-center">
                      View full portfolio details <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
