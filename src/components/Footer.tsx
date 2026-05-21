import { Power } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="boutique" className="bg-[#050505] pt-24 pb-0 border-t border-white/5 relative">
      <div id="heritage" className="absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Power className="w-10 h-10 stroke-[1.5] text-white" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Experience the culmination of artisanal craftsmanship and electric intelligence. A new era of automotive excellence, redefined for the modern connoisseur.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-6">Models</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest text-white/40 font-medium">
              <li><Link to="/models" className="hover:text-white transition-colors">Electric</Link></li>
              <li><Link to="/models" className="hover:text-white transition-colors">Hybrid</Link></li>
              <li><Link to="/models" className="hover:text-white transition-colors">Sports & AMG</Link></li>
              <li><Link to="/models" className="hover:text-white transition-colors">Classics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-6">Company</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest text-white/40 font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/innovation" className="hover:text-white transition-colors">Innovation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
        
      <div className="h-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between bg-black text-[9px] uppercase tracking-[0.2em] text-white/20 border-t border-white/5">
        <div className="flex gap-6 mt-4 md:mt-0 order-2 md:order-1">
          <Link to="/boutique" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/boutique" className="hover:text-white transition-colors">Legal Notice</Link>
          <Link to="/boutique" className="hover:text-white transition-colors">Cookies</Link>
        </div>
        <p className="order-1 md:order-2">&copy; {new Date().getFullYear()} Velox Automotive Group AG. All rights reserved.</p>
      </div>
    </footer>
  );
}
