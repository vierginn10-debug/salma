import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Heart, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/vierginn10-debug', 
      label: 'GitHub', 
      color: 'hover:bg-[#FFFF00] hover:text-black hover:shadow-[5px_5px_0px_0px_#000]' 
    },
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn', 
      color: 'hover:bg-[#01CDFE] hover:text-black hover:shadow-[5px_5px_0px_0px_#000]' 
    },
    { 
      icon: Youtube, 
      href: '#', 
      label: 'YouTube', 
      color: 'hover:bg-[#FF0000] hover:text-white hover:shadow-[5px_5px_0px_0px_#000]' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/salmayyawnn', 
      label: 'Instagram', 
      color: 'hover:bg-[#FF71CE] hover:text-white hover:shadow-[5px_5px_0px_0px_#000]' 
    },
  ];

  return (
    <footer className="relative py-24 overflow-hidden transition-colors duration-700
                       /* Mode Light: Mint -> Blue -> Lavender */
                       bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC]
                       /* Mode Dark: Hitam -> Biru Navy -> Ungu Tua */
                       dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464]
                       border-t-8 border-black dark:border-white">
      
      {/* 1. DECORATIVE MARQUEE (Teks Berjalan) */}
      <div className="absolute top-0 left-0 w-full bg-black py-3 border-b-4 border-black overflow-hidden whitespace-nowrap z-30 shadow-[0px_4px_10px_rgba(0,0,0,0.3)]">
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-12"
        >
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-[#ADFF2F] font-black italic uppercase tracking-[0.2em] text-[11px] flex items-center gap-3">
              <Zap size={14} fill="#ADFF2F" /> Digital Portfolio 2026 
              <Zap size={14} fill="#ADFF2F" /> Built by F.S. Virginita 
              <Zap size={14} fill="#ADFF2F" /> Status: Online & Growing
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* 2. BRAND / COPYRIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-5"
          >
            <div className="bg-black text-white px-6 py-3 font-black uppercase italic text-xs 
                            shadow-[6px_6px_0px_0px_#FF71CE] dark:shadow-[6px_6px_0px_0px_#64FFDA] 
                            border-2 border-white/20 transition-all duration-500">
              © {currentYear} ALL RIGHTS RESERVED
            </div>
            
            <div className="flex items-center gap-2 font-black uppercase italic text-sm text-black dark:text-white transition-colors duration-500">
              <span>Made with</span>
              <Heart className="h-6 w-6 text-[#FF0000] fill-[#FF0000] animate-pulse drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
              <span className="flex items-center gap-2">
                by <span className="text-black dark:text-[#64FFDA] border-b-4 border-[#B967FF] pb-1">F.S. Virginita</span>
              </span>
            </div>
          </motion.div>

          {/* 3. SOCIAL LINKS SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 border-4 border-black dark:border-white bg-white/90 dark:bg-[#112240]/80 backdrop-blur-sm
                           shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_#64FFDA] 
                           transition-all hover:-translate-y-2 hover:translate-x-1 hover:shadow-none 
                           ${social.color} group`}
                aria-label={social.label}
              >
                <social.icon 
                  className="h-7 w-7 text-black dark:text-white group-hover:scale-110 transition-transform duration-300" 
                  strokeWidth={2.5} 
                />
              </a>
            ))}
          </motion.div>

        </div>

        {/* 4. BOTTOM TAGLINE & DECORATIVE ELEMENTS */}
        <div className="mt-24 text-center border-t-4 border-black dark:border-white/20 pt-12 relative">
          
          {/* Decorative Window Controls (Indicator tengah) */}
          <div className="flex absolute -top-[14px] left-1/2 -translate-x-1/2 gap-3 bg-white dark:bg-[#1B1464] px-6 border-x-4 border-black dark:border-white transition-colors duration-700">
             <div className="w-3.5 h-3.5 bg-[#FF71CE] border-2 border-black rounded-full" />
             <div className="w-3.5 h-3.5 bg-[#01CDFE] border-2 border-black rounded-full" />
             <div className="w-3.5 h-3.5 bg-[#ADFF2F] border-2 border-black rounded-full" />
          </div>

          <motion.p 
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="font-mono text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] text-black dark:text-[#64FFDA]"
          >
            End of Transmission // Keep Coding, Keep Growing
          </motion.p>
          
          <div className="mt-4 font-black italic text-[9px] text-black/40 dark:text-white/20 uppercase tracking-widest">
            v2.0.4 - Localhost:Salma_Journal
          </div>
        </div>
      </div>

      {/* Subtle Glow Background (Hanya muncul di Dark Mode) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#B967FF]/10 blur-[150px] -z-10 hidden dark:block" />
    </footer>
  );
}