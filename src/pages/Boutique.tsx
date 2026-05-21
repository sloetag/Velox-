import { motion } from 'motion/react';

export default function Boutique() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-[#050505]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-[1px] w-12 bg-white/40"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Boutique</span>
          <span className="h-[1px] w-12 bg-white/40"></span>
        </div>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">Coming <span className="italic font-serif">Soon</span></h1>
        <p className="text-white/40 text-sm max-w-sm mx-auto">
          The exclusive Velox lifestyle collection is currently being curated. 
        </p>
      </motion.div>
    </div>
  );
}
