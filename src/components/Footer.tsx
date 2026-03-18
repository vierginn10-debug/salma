import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Heart, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/vierginn10-debug', 
      label: 'GitHub', 
      color: 'hover:bg-[#FFFF00] hover:text-black' 
    },
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn', 
      color: 'hover:bg-[#01CDFE] hover:text-black' 
    },
    { 
      icon: Youtube, 
      href: '#', 
      label: 'YouTube', 
      color: 'hover:bg-[#FF0000] hover:text-white' 
    },
    { 
      icon: Instagram, 
      href: '#', 
      label: 'Instagram', 
      color: 'hover:bg-[#FF71CE] hover:text-white' 
    },
  ];

  return (
    <footer className="relative py-20 overflow-hidden transition-colors duration-500
                       /* Mode Light: Mint -> Blue -> Lavender */
                       bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC]
                       /* Mode Dark: Hitam -> Biru Navy -> Ungu Tua */
                       dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464]
                       border-t-8 border-black dark:border-white">
      
      {/* Decorative Marquee (Teks Berjalan) */}
      <div className="absolute top-0 left-0 w-full bg-black py-2.5 border-b-4 border-black overflow-hidden whitespace-nowrap z-30">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-10"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[#ADFF2F] font-black italic uppercase tracking-widest text-[10px] flex items-center gap-2">
              <Zap size={12} fill="#ADFF2F" /> Digital Portfolio 2026 <Zap size={12} fill="#ADFF2F" /> Built by F.S. Virginita <Zap size={12} fill="#ADFF2F" /> Stay Creative
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Brand/Copyright Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <div className="bg-black text-white px-5 py-2 font-black uppercase italic text-xs shadow-[5px_5px_0px_0px_#FF71CE] border border-white/20">
              © {currentYear} ALL RIGHTS RESERVED
            </div>
            
            <div className="flex items-center gap-2 font-black uppercase italic text-sm text-black dark:text-white">
              <span>Made with</span>
              <Heart className="h-5 w-5 text-[#FF0000] fill-[#FF0000] animate-pulse" />
              <span>by <span className="text-[#B967FF] border-b-2 border-black dark:border-[#64FFDA]">F.S. Virginita</span></span>
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-5"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 border-4 border-black dark:border-white bg-white dark:bg-[#112240] 
                           shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] dark:shadow-[7px_7px_0px_0px_#64FFDA] 
                           transition-all hover:-translate-y-2 hover:translate-x-1 hover:shadow-none 
                           ${social.color} group`}
                aria-label={social.label}
              >
                <social.icon 
                  className="h-6 w-6 text-black dark:text-white group-hover:scale-125 transition-all duration-300" 
                  strokeWidth={3} 
                />
              </a>
            ))}
          </motion.div>

        </div>

        {/* Bottom Tagline & Decorative Elements */}
        <div className="mt-20 text-center border-t-4 border-black dark:border-white/10 pt-10 relative">
          {/* Decorative Circles Container: bg disesuaikan dengan warna gradien dark akhir (Ungu) */}
          <div className="hidden md:flex absolute -top-1 left-1/2 -translate-x-1/2 gap-3 bg-white dark:bg-[#1B1464] px-4 border-x-4 border-black dark:border-white">
             <div className="w-3 h-3 bg-[#FF71CE] border-2 border-black rounded-full" />
             <div className="w-3 h-3 bg-[#01CDFE] border-2 border-black rounded-full" />
             <div className="w-3 h-3 bg-[#ADFF2F] border-2 border-black rounded-full" />
          </div>

          <p className="font-mono text-[11px] font-black uppercase tracking-[0.5em] opacity-60 text-black dark:text-white">
            End of Transmission // Keep Coding, Keep Growing
          </p>
        </div>
      </div>

      {/* Subtle Background Accent for Dark Mode */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#B967FF] opacity-5 rounded-full blur-[120px] -z-10 hidden dark:block" />
    </footer>
  );
}