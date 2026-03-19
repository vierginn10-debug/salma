import { motion } from "framer-motion";
import { Github, Instagram, Code2, Terminal, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Cek apakah user buka di HP untuk optimasi partikel
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 }
    }
  };

  const helloText = "Hello World!";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20
                 bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC]
                 dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464] transform-gpu" 
    >
      {/* 1. BACKGROUND PATTERN (Titik-titik Retro) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.1] pointer-events-none"
        style={{ 
          backgroundImage: `radial-gradient(circle, currentColor 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
          color: 'inherit'
        }} 
      />

      {/* 2. BACKGROUND LAYER (ThreeJS - Sedikit Lebih Redup Agar Teks Jelas) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <ThreeScene />
      </div>

      {/* 3. DYNAMIC PARTICLES (Jumlah dikurangi di HP agar tidak lag) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(isMobile ? 3 : 6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-500/30 dark:bg-[#64FFDA]/30 rounded-full"
            animate={{ y: [0, -250], opacity: [0, 0.5, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "linear", delay: i * 2 }}
            style={{ left: `${15 + (i * 15)}%`, top: "110%", translateZ: 0 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          
          {/* KIRI: Konten Teks */}
          <div className="w-full md:w-3/5 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border-[3px] border-black dark:border-white bg-[#ADFF2F] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_#FF71CE] -rotate-1 mb-6"
            >
              <Terminal className="w-4 h-4 text-black" /> 
              <span className="font-black text-[10px] md:text-xs uppercase tracking-widest text-black">Salma’s Digital Lab v2.0</span>
            </motion.div>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl sm:text-6xl md:text-8xl font-black mb-6 text-slate-900 dark:text-white leading-[0.9] tracking-tighter italic flex flex-wrap justify-center md:justify-start transform-gpu"
            >
              {helloText.split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants}
                  className="hover:text-[#FF71CE] dark:hover:text-[#64FFDA] transition-colors duration-200 cursor-default"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <br className="hidden md:block w-full" />
              <motion.span 
                animate={{ rotate: [-0.5, 0.5, -0.5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="inline-block mt-4 text-[#FF71CE] drop-shadow-[4px_4px_0px_#01CDFE] dark:text-[#64FFDA] dark:drop-shadow-[4px_4px_0px_#B967FF]"
              >
                Meet Salma.
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm p-6 md:p-8 border-[3px] border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0_#64FFDA] mb-8 max-w-xl group transition-transform hover:-translate-y-1 transform-gpu"
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
                className="h-14 md:h-16 rounded-none px-8 text-sm md:text-base font-black border-[3px] border-black bg-[#FF71CE] dark:bg-[#64FFDA] text-black shadow-[5px_5px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase flex items-center gap-2 group transform-gpu"
                onClick={() => scrollToSection("#projects")}
              >
                <Code2 className="h-5 w-5 group-hover:rotate-12 transition-transform" /> Lihat Projects
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

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {[
                { icon: Github, href: "https://github.com/vierginn10-debug/", color: "bg-black text-white" },
                { icon: Instagram, href: "https://www.instagram.com/salmayyawnn", color: "bg-[#FF71CE] text-black" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#64FFDA] transition-all ${social.color} transform-gpu`}
                  whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 8 : -8 }}
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
              <div className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 border-[4px] border-black dark:border-white overflow-hidden rotate-2 bg-white transition-all duration-500 group-hover:rotate-0">
                 <img
                  src="/foto salma.jpg" 
                  alt="Salma Fithra"
                  loading="eager"
                  className="w-full h-full object-cover transition-all duration-700 scale-105 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black text-[#FF71CE] dark:text-[#64FFDA] px-3 py-1 border-2 border-[#FF71CE] dark:border-[#64FFDA] text-[10px] font-black uppercase tracking-tighter z-20">
                  Live Lab
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20 group hidden md:block"
      >
        <div className="flex flex-col items-center gap-3">
            <div className="w-9 h-14 border-[3px] border-black dark:border-white bg-[#ADFF2F] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#64FFDA] flex justify-center p-1.5 transform-gpu">
                <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2.5 h-2.5 bg-black dark:bg-white rounded-full"
                />
            </div>
            <span className="text-[10px] font-black text-black dark:text-white uppercase tracking-[0.2em] italic">Scroll Down</span>
        </div>
      </motion.div>
    </section>
  );
}