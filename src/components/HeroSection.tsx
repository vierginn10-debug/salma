import { motion } from "framer-motion";
import { Github, Instagram, Code2, Terminal, Rocket, Linkedin, YoutubeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback, Suspense, lazy } from "react";

// Lazy load ThreeScene agar tidak membebani RAM HP saat awal buka
const ThreeScene = lazy(() => import("./ThreeScene"));

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      // Deteksi HP lebih ketat agar performa terjaga
      setIsMobile(window.innerWidth < 768 || /Android|iPhone/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20
                 bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC]
                 dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464] transform-gpu"
    >
      {/* 1. BACKGROUND PATTERN - Ringan & Statis */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.08] dark:opacity-[0.05] pointer-events-none"
        style={{ 
          backgroundImage: `radial-gradient(circle, currentColor 1.2px, transparent 1.2px)`,
          backgroundSize: '30px 30px'
        }} 
      />

      {/* 2. THREEJS - Dimatikan di HP (Penyelamat Anti-Layar Putih) */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <Suspense fallback={null}>
            <ThreeScene />
          </Suspense>
        </div>
      )}

      {/* 3. DYNAMIC PARTICLES - Dikurangi drastis di HP */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(isMobile ? 2 : 5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-500/20 dark:bg-[#64FFDA]/20 rounded-full will-change-transform"
            animate={{ y: [0, -250], opacity: [0, 0.5, 0] }}
            transition={{ duration: 12 + i, repeat: Infinity, ease: "linear", delay: i * 2 }}
            style={{ left: `${15 + (i * 20)}%`, top: "110%" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          
          {/* KIRI: Konten Teks */}
          <div className="w-full md:w-3/5 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border-[3px] border-black dark:border-white bg-[#ADFF2F] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_#FF71CE] -rotate-1 mb-6"
            >
              <Terminal className="w-4 h-4 text-black" /> 
              <span className="font-black text-[10px] md:text-xs uppercase tracking-widest text-black italic">Salma’s Lab v2.0</span>
            </motion.div>

            {/* HELLO WORLD! - DIKECILKAN SEDIKIT (text-7xl di Desktop) */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-7xl font-black mb-1 text-slate-900 dark:text-white leading-none tracking-tighter italic whitespace-nowrap transform-gpu"
            >
              HELLO WORLD<span className="text-[#FF71CE] dark:text-[#64FFDA]">!</span>
            </motion.h1>

            {/* MEET SALMA - SEBAGAI SUB-JUDUL (text-6xl di Desktop) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-6xl font-black text-[#FF71CE] drop-shadow-[4px_4px_0px_#01CDFE] dark:text-[#64FFDA] dark:drop-shadow-[4px_4px_0px_#B967FF] italic tracking-tighter mb-8"
            >
              Meet Salma.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-6 md:p-8 border-[3px] border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0_#64FFDA] mb-8 max-w-xl group transition-transform transform-gpu"
            >
              <p className="text-base md:text-xl font-black text-black dark:text-[#64FFDA] mb-3 flex items-center justify-center md:justify-start gap-2 uppercase italic">
                <Rocket className="text-[#FF71CE] dark:text-[#64FFDA] w-5 h-5 group-hover:animate-bounce" /> From Zero to One
              </p>
              <p className="text-sm md:text-lg font-bold text-slate-800 dark:text-slate-200 leading-tight">
                Salma's Informatics learning journal — A student of <span className="bg-[#ADFF2F] dark:bg-transparent dark:text-[#64FFDA] px-1 border-2 border-black dark:border-[#64FFDA] font-black">MAN 1 Banda Aceh</span> currently taming code with passion.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button
                size="lg"
                className="h-14 md:h-16 rounded-none px-8 text-sm md:text-base font-black border-[3px] border-black bg-[#FF71CE] dark:bg-[#64FFDA] text-black shadow-[5px_5px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase flex items-center gap-2 transform-gpu"
                onClick={() => scrollToSection("#projects")}
              >
                <Code2 className="h-5 w-5" /> Lihat Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 md:h-16 rounded-none px-8 text-sm md:text-base font-black border-[3px] border-black bg-white dark:bg-transparent text-black dark:text-white shadow-[5px_5px_0px_0px_#ADFF2F] dark:shadow-[5px_5px_0px_0px_#64FFDA] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase transform-gpu"
                onClick={() => scrollToSection("#contact")}
              >
                Hubungi Saya
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { icon: Github, href: "https://github.com/vierginn10-debug/", color: "bg-black text-white" },
                // { icon: Linkedin, href: "#", color: "bg-black text-white" },
                // { icon: YoutubeIcon, href: "#", color: "bg-black text-white" },
                { icon: Instagram, href: "https://www.instagram.com/salmayyawnn", color: "bg-[#FF71CE] text-black" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#64FFDA] transition-all ${social.color} transform-gpu`}
                  whileHover={!isMobile ? { scale: 1.1, rotate: idx % 2 === 0 ? 8 : -8 } : {}}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* KANAN: Foto Profil */}
          <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2 px-4 group">
            <div className="relative scale-90 md:scale-110 transform-gpu">
              <div className="absolute -inset-4 border-[3px] border-black dark:border-white bg-[#ADFF2F] z-0 shadow-[10px_10px_0px_0px_#FF71CE] dark:shadow-[10px_10px_0px_0px_#64FFDA] -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
              <div className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 border-[4px] border-black dark:border-white overflow-hidden rotate-2 bg-white transition-all duration-500 group-hover:rotate-0 transform-gpu">
                <img
                  src="/foto salma.jpg" 
                  alt="Salma Fithra"
                  loading="eager"
                  className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700 scale-105"
                />
                <div className="absolute top-4 right-4 bg-black text-[#FF71CE] dark:text-[#64FFDA] px-3 py-1 border-2 border-[#FF71CE] dark:border-[#64FFDA] text-[10px] font-black uppercase z-20">
                  Live Lab
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR - Hanya Desktop */}
      {!isMobile && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection("#projects")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        >
          <div className="w-8 h-12 border-[3px] border-black dark:border-white bg-[#ADFF2F] shadow-[3px_3px_0px_0px_black] dark:shadow-[3px_3px_0px_0px_#64FFDA] flex justify-center p-1 transform-gpu">
            <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-1" />
          </div>
        </motion.div>
      )}
    </section>
  );
}