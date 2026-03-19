import { Github, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/vierginn10-debug', 
      label: 'GitHub', 
      active: true,
      color: 'hover:bg-[#FFFF00] hover:shadow-[3px_3px_0px_0px_black]' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/salmayyawnn', 
      label: 'Instagram', 
      active: true,
      color: 'hover:bg-[#FF71CE] hover:shadow-[3px_3px_0px_0px_black]' 
    },
  ];

  return (
    <footer className="relative py-8 md:py-10 overflow-hidden transition-colors duration-700
                       bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC]
                       dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464]
                       border-t-[4px] border-black dark:border-white">
      
      {/* --- LAYER PATTERN (DOTS) --- */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'radial-gradient(#000 1.2px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* 1. BRANDING */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 font-black uppercase italic text-[10px] text-black dark:text-white">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-[#FF0000] fill-[#FF0000] animate-pulse" />
              <span>by <span className="text-[#B967FF] dark:text-[#64FFDA] border-b-2 border-black/10 dark:border-[#64FFDA]/30">F.S. Virginita</span></span>
            </div>
            <p className="font-mono text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] opacity-60 dark:text-slate-400">
              © {currentYear} // ALL RIGHTS RESERVED
            </p>
          </div>

          {/* 2. SOCIAL BUTTONS */}
          <div className="flex items-center gap-4">
            {socialLinks
              .filter((social) => social.active) 
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 border-[2px] border-black dark:border-white bg-white/90 dark:bg-[#112240]/90 backdrop-blur-sm
                               shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_#64FFDA] 
                               transition-all active:scale-90 active:shadow-none
                               ${social.color} group transform-gpu`}
                  aria-label={social.label}
                >
                  <social.icon 
                    className="h-4 w-4 md:h-5 md:w-5 text-black dark:text-white transition-transform" 
                    strokeWidth={2.5} 
                  />
                </a>
              ))}
          </div>
        </div>

        {/* 3. TINY DECOR */}
        <div className="mt-8 flex justify-center gap-2.5 opacity-70">
           <div className="w-2.5 h-2.5 bg-[#FF71CE] border-2 border-black rounded-full shadow-[1px_1px_0px_0px_black]" />
           <div className="w-2.5 h-2.5 bg-[#01CDFE] border-2 border-black rounded-full shadow-[1px_1px_0px_0px_black]" />
           <div className="w-2.5 h-2.5 bg-[#ADFF2F] border-2 border-black rounded-full shadow-[1px_1px_0px_0px_black]" />
        </div>
      </div>
    </footer>
  );
}