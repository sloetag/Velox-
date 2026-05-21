import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const techPoints = [
  {
    id: 1,
    title: 'Hybrid Powertrain',
    desc: 'Combines a high-voltage battery with a handcrafted V8 biturbo engine. The result? Unprecedented responsiveness, monumental torque, and the unmistakable Velox sound signature.',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'Aerodynamic Profile',
    desc: 'A drag coefficient reduced to an unprecedented 0.20, slicing through the air with minimal resistance and maximum efficiency.',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'AI Navigation Space',
    desc: 'An adaptive neural interface that predicts driving conditions in real-time, offering autonomous capabilities and intuitive responses.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Discover() {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const [activePoint, setActivePoint] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="innovation" ref={sectionRef} className="py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-white/40"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Innovation</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.1]">
              The architecture of <br />
              <span className="italic font-serif">tomorrow.</span>
            </h2>
            
            <div className="space-y-6 mt-8">
              {techPoints.map((point, index) => (
                <div 
                  key={point.id} 
                  className={`border-l-2 pl-6 cursor-pointer transition-colors duration-500 ${activePoint === index ? 'border-white' : 'border-white/10 hover:border-white/30'}`}
                  onClick={() => setActivePoint(index)}
                >
                  <h3 className={`text-sm uppercase tracking-[0.15em] font-medium mb-3 transition-colors duration-500 ${activePoint === index ? 'text-white' : 'text-white/40'}`}>
                    0{index + 1} — {point.title}
                  </h3>
                  <AnimatePresence>
                    {activePoint === index && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-white/40 text-sm leading-relaxed max-w-sm overflow-hidden"
                      >
                        {point.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button onClick={() => navigate('/services')} className="relative group overflow-hidden border border-white/20 px-8 py-4 uppercase tracking-widest text-[11px] font-bold text-white hover:border-white transition-colors duration-300 cursor-pointer">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Explore Technology</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="relative h-[600px] w-full overflow-hidden border border-white/5 group"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={techPoints[activePoint].image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  src={techPoints[activePoint].image}
                  alt={techPoints[activePoint].title}
                  className="w-full h-full object-cover filter contrast-125 saturate-50 mix-blend-screen opacity-80"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/20 to-[#050505]/80 opacity-80" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
