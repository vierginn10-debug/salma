import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Heart, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vierginn10-debug', label: 'GitHub', color: 'hover:bg-[#FFFF00]' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-[#01CDFE]' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-[#FF0000]' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-[#FF71CE]' },
  ];

  return (
    <footer className="bg-white dark:bg-[#0A192F] border-t-8 border-black dark:border-white pt-16 pb-8 transition-colors duration-500 overflow-hidden relative">
      
      {/* Decorative Marquee (Teks Berjalan) */}
      <div className="absolute top-0 left-0 w-full bg-black py-2 border-b-4 border-black overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-10"
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-[#ADFF2F] font-black italic uppercase tracking-widest text-[10px] flex items-center gap-2">
              <Zap size={12} /> Digital Portfolio 2026 <Zap size={12} /> Built by F.S. Virginita <Zap size={12} /> Stay Creative
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand/Copyright Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="bg-black text-white px-3 py-1 font-black uppercase italic text-xs shadow-[4px_4px_0px_0px_#FF71CE]">
              © {currentYear} ALL RIGHTS RESERVED
            </div>
            <div className="flex items-center gap-2 font-black uppercase italic text-sm dark:text-white">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-[#FF0000] fill-[#FF0000] animate-pulse" />
              <span>by <span className="text-[#B967FF]">F.S. Virginita</span></span>
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={`p-3 border-4 border-black dark:border-white bg-white dark:bg-transparent shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_#64FFDA] transition-all hover:-translate-y-1 hover:shadow-none ${social.color} group`}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-black dark:text-white group-hover:scale-110 transition-transform" strokeWidth={3} />
              </a>
            ))}
          </motion.div>

        </div>

        {/* Bottom Tagline */}
        <div className="mt-12 text-center border-t-2 border-dashed border-black/10 dark:border-white/10 pt-6">
          <p className="font-mono text-[9px] font-black uppercase tracking-[0.3em] opacity-40 dark:text-white">
            End of Transmission // Keep Coding, Keep Growing
          </p>
        </div>
      </div>
    </footer>
  );
}