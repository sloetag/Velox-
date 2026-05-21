import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data collected:', { firstName, lastName, email, password });
    navigate('/');
  };

  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-[#050505]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md px-6"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-[1px] w-8 bg-white/40"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Account</span>
          <span className="h-[1px] w-8 bg-white/40"></span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-2 text-center">
          Create <span className="italic font-serif">Account</span>
        </h1>
        <p className="text-white/40 text-[11px] uppercase tracking-widest text-center mb-12">
          Join the exclusive Velox circle
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">First Name</label>
              <input 
                type="text" 
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Last Name</label>
              <input 
                type="text" 
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors text-sm"
            />
          </div>
          
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full relative group overflow-hidden border border-white/20 px-8 py-4 uppercase tracking-widest text-[11px] font-bold text-white hover:border-white transition-colors duration-300 cursor-pointer"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Register</span>
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-[11px] uppercase tracking-widest text-white/40">
          <p>Already have an account? <Link to="/login" className="text-white hover:text-white/80 border-b border-white/20 pb-1 ml-2 transition-colors">Sign In</Link></p>
        </div>
      </motion.div>
    </div>
  );
}
