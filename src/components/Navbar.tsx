import { motion, AnimatePresence } from 'motion/react';
import { Search, User, Power, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showLogoText, setShowLogoText] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show text briefly only on first load, then back to logo
    const timer1 = setTimeout(() => {
       setShowLogoText(true);
    }, 1000);
    
    const timer2 = setTimeout(() => {
       setShowLogoText(false);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex flex-col items-center justify-between transition-all duration-300 overflow-hidden ${
          scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full flex items-center justify-between mb-2">
          {/* Left spacing for centering */}
          <div className="flex-1 hidden md:block"></div>

          {/* Central Logo */}
          <div className="flex-1 flex justify-center items-center h-8">
            <Link to="/" className="text-white hover:text-white/80 transition-transform hover:scale-105 active:scale-95 group cursor-pointer inline-flex items-center gap-2 relative">
              <AnimatePresence mode="wait">
                {showLogoText ? (
                  <motion.span
                    key="text"
                    initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[10px] uppercase tracking-[0.3em] font-medium whitespace-nowrap"
                  >
                    A Century of Greatness
                  </motion.span>
                ) : (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Power className="w-8 h-8 stroke-[1.5] group-hover:stroke-[2] transition-all" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex-1 flex items-center justify-end gap-6">
            <button onClick={() => setSearchOpen(true)} className="text-white/60 hover:text-white transition-colors hidden md:block cursor-pointer">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/login" className="text-white/60 hover:text-white transition-colors cursor-pointer">
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Nav Links below */}
        <AnimatePresence>
          {showNav && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:flex items-center justify-center gap-12 text-[11px] uppercase tracking-[0.15em] font-medium text-white/60 w-full pt-4 pb-2"
            >
              <Link to="/vehicles" className={`${location.pathname === '/vehicles' ? 'text-white' : 'hover:text-white'} transition-colors cursor-pointer`}>Vehicles</Link>
              <Link to="/innovation" className={`${location.pathname === '/innovation' ? 'text-white' : 'hover:text-white'} transition-colors cursor-pointer`}>Innovation</Link>
              <Link to="/services" className={`${location.pathname === '/services' ? 'text-white' : 'hover:text-white'} transition-colors cursor-pointer`}>Services</Link>
              <Link to="/boutique" className={`${location.pathname === '/boutique' ? 'text-white' : 'hover:text-white'} transition-colors cursor-pointer`}>Boutique</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setSearchOpen(false)}
              className="absolute top-8 right-8 text-white/60 hover:text-white cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-2xl px-6 flex items-center border-b border-white/20 pb-4">
              <Search className="w-6 h-6 text-white/40 mr-4" />
              <input 
                type="text" 
                placeholder="Search models, technology, innovation..." 
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setSearchOpen(false);
                    // Minimal search behavior: redirect to innovation page as a demo
                    window.location.href = '/innovation';
                  }
                }}
                className="w-full bg-transparent text-xl text-white outline-none placeholder:text-white/20 font-light"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
