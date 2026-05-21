import { motion, useInView } from 'motion/react';
import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const vehicles = [
  {
    id: 'ev',
    category: 'Electric / EQ',
    name: 'E-Vanguard',
    description: 'Zero emissions. Infinite possibilities. Step into the next era of silent performance.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200',
    color: 'from-blue-500/20'
  },
  {
    id: 'sports',
    category: 'AMG / Sports',
    name: 'GT-R',
    description: 'Track-bred DNA. Unbridled power designed for the purist.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200',
    color: 'from-red-500/20'
  },
  {
    id: 'hybrid',
    category: 'PHEV / Hybrid',
    name: 'S-Hybrid',
    description: 'The pinnacle of luxury combined with the highest level of efficiency.',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1200',
    color: 'from-emerald-500/20'
  },
  {
    id: 'classic',
    category: 'Heritage',
    name: '1954 Classic',
    description: 'Where the legend began. Timeless elegance perfectly preserved.',
    image: 'https://images.unsplash.com/photo-1511407397940-d57f68e81203?auto=format&fit=crop&q=80&w=1200',
    color: 'from-amber-500/20'
  }
];

export default function Showcase() {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="models" className="py-24 bg-[#050505] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-white/40"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Models</span>
          </div>
          <h2 className="text-5xl font-light tracking-tight text-white mb-4">Our <span className="italic font-serif">Lineup</span></h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm">
            From the roar of our classic combustion engines to the whisper of our electric future.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row h-[80vh] w-full gap-2" ref={containerRef}>
          {vehicles.map((vehicle, index) => (
             <VehicleCard 
                key={vehicle.id} 
                vehicle={vehicle} 
                index={index} 
                isHovered={hoveredIndex === index}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
                anyHovered={hoveredIndex !== null}
             />
          ))}
        </div>
      </div>
    </section>
  );
}

const VehicleCard: React.FC<{ vehicle: any, index: number, isHovered: boolean, onHover: () => void, onLeave: () => void, anyHovered: boolean }> = ({ vehicle, index, isHovered, onHover, onLeave, anyHovered }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  const scrollToConfigurator = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/models');
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { 
         opacity: 1, 
         y: 0,
         flex: isHovered ? 3 : anyHovered ? 0.8 : 1
      } : { opacity: 0, y: 50, flex: 1 }}
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], opacity: { duration: 0.8, delay: index * 0.15 } }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      tabIndex={0}
      className="group relative bg-[#0a0a0a] border border-white/5 flex flex-col justify-end p-6 md:p-8 overflow-hidden cursor-pointer h-full min-h-[150px]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.img
          animate={{
             scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: isHovered ? 1 : 0.4 }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${vehicle.color} via-transparent to-transparent mix-blend-multiply opacity-50`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full min-w-[200px] pointer-events-none">
        <motion.div 
           initial={{ y: 20 }}
           animate={{ y: isHovered ? 0 : 10 }}
           transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] uppercase tracking-widest text-[#E5E5E5]/50 group-hover:text-white/80 transition-colors duration-300">
              {vehicle.category}
            </p>
            <span className="text-[9px] text-white/20 font-mono">0{index + 1}</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 text-white whitespace-nowrap">{vehicle.name}</h3>
          
          <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ 
                opacity: isHovered ? 1 : 0,
                height: isHovered ? 'auto' : 0
             }}
             transition={{ duration: 0.3, ease: 'easeOut' }}
             className="overflow-hidden pointer-events-auto"
          >
             <p className="text-[11px] text-white/50 uppercase tracking-widest leading-relaxed max-w-sm mb-6 pointer-events-none">
               {vehicle.description}
             </p>
             <button onClick={scrollToConfigurator} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white transition-colors duration-300 py-2 hover:opacity-80 cursor-pointer">
               <span>Configure</span>
               <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
             </button>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
}
