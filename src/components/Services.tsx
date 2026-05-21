import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const servicesList = [
  { title: 'Bespoke Personalization', desc: 'Tailor every detail to your exacting standards.', path: '/boutique' },
  { title: 'Velox Concierge', desc: '24/7 global support and exclusive event access.', path: '/boutique' },
  { title: 'Maintenance & Care', desc: 'White-glove service, delivered to your door.', path: '/boutique' },
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="services" className="py-32 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
           transition={{ duration: 0.8 }}
           className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-white/40"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">Ownership <span className="italic font-serif">Experience</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => navigate(service.path)}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 border border-white/5 bg-[#050505] hover:border-white/20 transition-colors group cursor-pointer flex flex-col justify-between min-h-[250px]"
            >
              <div>
                <h3 className="text-xl font-medium tracking-tight mb-4 text-white group-hover:text-blue-200 transition-colors">{service.title}</h3>
                <p className="text-[11px] uppercase tracking-widest text-white/40 leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>
              <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white opacity-50 group-hover:opacity-100 transition-opacity self-start cursor-pointer">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
