import { Github, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/vierginn10-debug', 
      label: 'GitHub', 
      active: true,
      color: 'hover:bg-[#FFFF00] hover:shadow-[2px_2px_0px_0px_black] dark:hover:shadow-[2px_2px_0px_0px_#64FFDA]' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/salmayyawnn', 
      label: 'Instagram', 
      active: true,
      color: 'hover:bg-[#FF71CE] hover:shadow-[2px_2px_0px_0px_black] dark:hover:shadow-[2px_2px_0px_0px_#FF71CE]' 
    },
  ];

  return (
    <footer className="relative py-6 md:py-8 overflow-hidden transition-colors duration-1000
                       bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC]
                       dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464]
                       border-t-[4px] border-black dark:border-white">
      
      {/* --- LAYER PATTERN (DOTS) --- */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'radial-gradient(#000 1.2px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* 1. BRANDING (More Compact) */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-center gap-2 font-black uppercase italic text-[10px] md:text-xs text-black dark:text-white">
              <span> © 2026 Made with</span>
              <Heart className="h-3.5 w-3.5 text-[#FF0000] fill-[#FF0000] animate-pulse" strokeWidth={3} />
              <span>by <span className="text-[#B967FF] dark:text-[#64FFDA] border-b-[1.5px] border-black/20 dark:border-[#64FFDA]/40">F.S. Virginita</span></span>
            </div>
            <p className="font-mono text-[8px] font-black uppercase tracking-[0.15em] opacity-60 dark:text-slate-400">
              © {currentYear} // ALL RIGHTS RESERVED
            </p>
          </div>

          {/* 2. SOCIAL BUTTONS (Smaller Boxes) */}
          <div className="flex items-center gap-4">
            {socialLinks
              .filter((social) => social.active) 
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 border-[2.5px] border-black dark:border-white bg-white dark:bg-[#112240]
                               shadow-[3px_3px_0px_0px_black] dark:shadow-[3px_3px_0px_0px_#64FFDA] 
                               transition-all active:scale-90 active:shadow-none
                               ${social.color} group transform-gpu`}
                  aria-label={social.label}
                >
                  <social.icon 
                    className="h-4 w-4 text-black dark:text-white" 
                    strokeWidth={3} 
                  />
                </a>
              ))}
          </div>
        </div>

        {/* 3. TINY DECOR (Smaller Dots) */}
        <div className="mt-6 flex justify-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#FF71CE] border-[2px] border-black dark:border-white shadow-[1.5px_1.5px_0px_0px_black] dark:shadow-[1.5px_1.5px_0px_0px_#64FFDA] animate-bounce [animation-delay:-0.3s]" />
            <div className="w-2.5 h-2.5 bg-[#01CDFE] border-[2px] border-black dark:border-white shadow-[1.5px_1.5px_0px_0px_black] dark:shadow-[1.5px_1.5px_0px_0px_#64FFDA] animate-bounce [animation-delay:-0.15s]" />
            <div className="w-2.5 h-2.5 bg-[#ADFF2F] border-[2px] border-black dark:border-white shadow-[1.5px_1.5px_0px_0px_black] dark:shadow-[1.5px_1.5px_0px_0px_#64FFDA] animate-bounce" />
        </div>
      </div>
    </footer>
  );
}