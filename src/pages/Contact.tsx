import { motion } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact data:', { name, email, message });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 4000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050505]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6"
      >
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-white/40"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Contact</span>
            <span className="h-[1px] w-8 bg-white/40"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            Get in <span className="italic font-serif">Touch</span>
          </h1>
          <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
            Whether you have a question about our lineup, services, or unparalleled heritage, our dedicated concierge team is available to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4 font-bold">Headquarters</h3>
              <p className="text-white/80 text-sm font-light leading-relaxed">
                Velox Automotive Group AG<br/>
                124 Automobilstrasse<br/>
                8001 Zurich, Switzerland
              </p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4 font-bold">Concierge</h3>
              <p className="text-white/80 text-sm font-light leading-relaxed">
                +41 44 200 12 34<br/>
                concierge@velox.com
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {submitted && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 border border-white/10 p-4 text-center text-[11px] uppercase tracking-widest text-green-400"
              >
                Message Received. We will contact you shortly.
              </motion.div>
            )}
            <div>
              <input 
                type="text" 
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white outline-none focus:border-white transition-colors text-sm placeholder:text-white/30"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white outline-none focus:border-white transition-colors text-sm placeholder:text-white/30"
              />
            </div>
            <div>
              <textarea 
                placeholder="Message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white outline-none focus:border-white transition-colors text-sm resize-none placeholder:text-white/30"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="relative group overflow-hidden border border-white/20 px-8 py-4 uppercase tracking-widest text-[11px] font-bold text-white hover:border-white transition-colors duration-300 cursor-pointer"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Send Message</span>
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
