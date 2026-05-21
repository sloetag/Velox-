import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050505]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-[1px] w-12 bg-white/40"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Heritage</span>
          <span className="h-[1px] w-12 bg-white/40"></span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-12">
          A Century of <span className="italic font-serif">Greatness</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-center mt-20">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
           >
             <h2 className="text-2xl tracking-tight text-white mb-6 font-light">
               The pursuit of perfection <span className="italic font-serif text-white/50">since 1924</span>.
             </h2>
             <div className="space-y-6">
               <p className="text-white/50 text-sm leading-relaxed">
                 Velox was born from a singular vision: to craft the most exquisite automobiles the world has ever seen. For over a century, our engineers and artisans have pushed the boundaries of automotive performance, design, and luxury. Our heritage is built on the racetracks of Europe, where our classic models first demonstrated the raw power and reliability that would define the Velox name.
               </p>
               <p className="text-white/50 text-sm leading-relaxed">
                 From the iconic curves of our 1950s touring cars to the precise aerodynamics of our modern hypercars, every era of Velox has been characterized by an uncompromising dedication to craftsmanship. We blend old-world artisanal techniques with cutting-edge engineering, ensuring that each vehicle is not just assembled, but meticulously crafted.
               </p>
               <p className="text-white/50 text-sm leading-relaxed">
                 Today, the Velox name stands as a testament to unrelenting innovation. As we transition into an electrified future, our commitment to driving pleasure remains absolute. We are not merely adapting to the future; we are inventing it. By combining high-density battery technology with our legendary driving dynamics, we ensure that the soul of a Velox remains pure, electrifying, and unmistakably ours.
               </p>
             </div>
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="h-[500px] border border-white/5 overflow-hidden"
           >
             <img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200" alt="Velox Heritage" className="w-full h-full object-cover filter contrast-125 saturate-50 opacity-80" />
           </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
