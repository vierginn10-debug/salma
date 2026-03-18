import { useState, useEffect } from 'react';
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

  // Deteksi scroll untuk mengubah tampilan navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Jarak agar tidak tertutup navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b-4 border-black dark:border-[#64FFDA] shadow-[0_4px_0_0_#01CDFE] dark:shadow-[0_4px_0_0_#B967FF]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO: SALMA'S PROJECT (Tanpa Bingkai) */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="relative cursor-pointer group flex flex-col"
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-black text-2xl md:text-3xl uppercase italic tracking-tighter leading-none transition-colors duration-300 text-black dark:text-white group-hover:text-[#FF71CE] dark:group-hover:text-[#64FFDA]">
              Salma's <span className="text-[#01CDFE] dark:text-[#B967FF] group-hover:text-black dark:group-hover:text-white">Project</span>
            </span>
            {/* Garis aksen bawah saat hover */}
            <motion.div 
              className="h-1.5 bg-black dark:bg-[#64FFDA] mt-1 w-0 group-hover:w-full transition-all duration-300 shadow-[2px_2px_0_0_#01CDFE]"
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
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
            
            <div className="h-6 w-[2px] bg-black/20 dark:bg-white/20 mx-3" />

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="border-2 border-black dark:border-white rounded-none bg-[#FFFF00] dark:bg-transparent hover:bg-black hover:text-white dark:hover:bg-[#64FFDA] dark:hover:text-black transition-all shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#64FFDA]"
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
              className="border-2 border-black dark:border-white rounded-none bg-[#FFFF00] dark:bg-transparent"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="border-2 border-black dark:border-white rounded-none shadow-[3px_3px_0_0_#000] dark:shadow-[3px_3px_0_0_#64FFDA]"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-y-0 right-0 w-[280px] bg-white dark:bg-black border-l-8 border-black dark:border-[#64FFDA] z-[60] p-10 shadow-[-10px_0_0_0_#FF71CE] flex flex-col gap-8"
          >
            <div className="flex justify-between items-center mb-4">
               <span className="font-black italic text-sm text-black dark:text-white">MENU</span>
               <Button onClick={() => setIsMobileMenuOpen(false)} variant="ghost" className="border-2 border-black dark:border-white rounded-none p-1">
                 <X className="w-6 h-6" />
               </Button>
            </div>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-3xl font-black uppercase italic tracking-tighter text-black dark:text-white hover:text-[#01CDFE] transition-colors border-b-2 border-transparent hover:border-black dark:hover:border-[#64FFDA] pb-2"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}