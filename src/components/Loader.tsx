import { motion, AnimatePresence } from 'motion/react';
import { Power } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onLoadingComplete, 800); // Wait for exit animation
    }, 2000);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Power className="w-16 h-16 text-white stroke-[1]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
