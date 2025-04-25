
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-24"
    >
      <h2 className="text-3xl font-bold mb-8 text-left">Testimonials</h2>
      <div className="relative overflow-x-auto scrollbar-hide flex gap-4 sm:gap-6 snap-x snap-mandatory px-2 sm:px-0">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg min-w-[250px] sm:min-w-[300px] md:min-w-[350px] snap-center"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20"
              />
              <div>
                <h4 className="text-base sm:text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 italic">"{testimonial.review}"</p>
            <div className="flex mt-2 sm:mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-xs sm:text-sm text-yellow-400 ${i < testimonial.rating ? "opacity-100" : "opacity-50"}`}>⭐</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const testimonials = [
  {
    name: "Abel promise",
    role: "CEO at kings technology",
    review: "Designed my website and it looks amazing!.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Samson",
    role: "front-end developer",
    review: "Helped me with my backend auth for my productivity site",
    rating: 3,
    avatar: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  // {
  //   name: "Michael Brown",
  //   role: "Blockchain Engineer",
  //   review: "Prince's understanding of smart contracts and Web3 is truly impressive. Highly recommend him!",
  //   rating: 5,
  //   avatar: "https://randomuser.me/api/portraits/men/76.jpg"
  // }
];
