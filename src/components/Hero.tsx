import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* Background Video */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full bg-black z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=2000"
          className="object-cover w-full h-full opacity-50 relative z-0"
          src="https://assets.mixkit.co/videos/preview/mixkit-super-car-driving-on-a-highway-at-night-41551-large.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-[#050505]/40 to-[#0a0a0a]/80 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 pointer-events-none" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-30 h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-[1px] w-12 bg-white/40 hidden md:block"></span>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            The Future of Performance
          </p>
          <span className="h-[1px] w-12 bg-white/40 hidden md:block"></span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-2xl md:text-4xl lg:text-4xl font-light tracking-widest text-white w-full max-w-5xl mx-auto leading-tight"
        >
          <span className="inline-block">ENGINEERED</span> <span className="inline-block">BEYOND</span>
          <br className="hidden md:block" />
          <span className="italic font-serif text-white">
            EXPECTATIONS
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/40">Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
