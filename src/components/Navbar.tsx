import { useState, useEffect, useCallback } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimasi deteksi scroll
  useEffect(() => {
    let timeoutId: number | null = null;
    const handleScroll = () => {
      if (timeoutId) return;
      
      timeoutId = window.setTimeout(() => {
        setIsScrolled(window.scrollY > 30);
        timeoutId = null;
      }, 100); // Hanya cek setiap 100ms
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 transform-gpu will-change-transform ${
          isScrolled 
            ? 'py-3 bg-white/90 dark:bg-black/95 backdrop-blur-sm border-b-4 border-black dark:border-[#64FFDA] shadow-[0_4px_0_0_#01CDFE] dark:shadow-[0_4px_0_0_#B967FF]' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* LOGO */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="relative cursor-pointer group flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              <span className="font-black text-xl md:text-3xl uppercase italic tracking-tighter leading-none text-black dark:text-white group-hover:text-[#FF71CE] dark:group-hover:text-[#64FFDA] transition-colors">
                Salma's <span className="text-[#01CDFE] dark:text-[#B967FF]">Project</span>
              </span>
              <motion.div 
                className="h-1 bg-black dark:bg-[#64FFDA] mt-1 w-0 group-hover:w-full transition-all duration-300"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="px-4 py-2 font-black uppercase italic text-xs tracking-widest text-black dark:text-white hover:bg-[#05FFA1] hover:text-black hover:shadow-[3px_3px_0_0_#000] transition-all duration-200"
                >
                  {item.label}
                </motion.a>
              ))}
              
              <div className="h-6 w-[2px] bg-black/20 dark:bg-white/20 mx-3" />

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="border-2 border-black dark:border-white rounded-none bg-[#FFFF00] dark:bg-transparent hover:bg-black hover:text-white dark:hover:bg-[#64FFDA] dark:hover:text-black shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#64FFDA] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                      <Sun className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                      <Moon className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
               <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="border-2 border-black dark:border-white rounded-none bg-[#FFFF00] dark:bg-transparent h-10 w-10"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="border-2 border-black dark:border-white rounded-none shadow-[3px_3px_0_0_#000] dark:shadow-[3px_3px_0_0_#64FFDA] h-10 w-10 active:shadow-none"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Overlay untuk fokus */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] md:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[80%] max-w-[300px] bg-white dark:bg-black border-l-8 border-black dark:border-[#64FFDA] z-[80] p-10 flex flex-col gap-6 shadow-[-10px_0_0_0_#FF71CE] transform-gpu"
            >
              <div className="flex justify-between items-center mb-6">
                 <span className="font-black italic text-xs tracking-widest text-black dark:text-white opacity-50">NAVIGATION</span>
                 <Button onClick={() => setIsMobileMenuOpen(false)} variant="ghost" className="border-2 border-black dark:border-white rounded-none p-1 h-8 w-8">
                   <X className="w-5 h-5" />
                 </Button>
              </div>
              
              <div className="flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-4xl font-black uppercase italic tracking-tighter text-black dark:text-white hover:text-[#01CDFE] active:text-[#FF71CE] transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t-4 border-black dark:border-white/10">
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] dark:text-[#64FFDA]">Salma Fithra © 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}