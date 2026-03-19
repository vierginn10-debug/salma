import { motion } from "framer-motion";
import { Github, Instagram, Code2, Terminal, Rocket, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
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
                 dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464]" 
    >
      {/* 1. BACKGROUND LAYER (ThreeJS) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <ThreeScene />
      </div>

      {/* 2. OPTIMIZED PARTICLES */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-400/20 dark:bg-[#64FFDA]/20 rounded-full"
            animate={{ y: [0, -150], opacity: [0, 0.5, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "linear", delay: i * 2 }}
            style={{ left: `${15 + (i * 15)}%`, top: "100%", translateZ: 0 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          
          {/* KIRI: Konten Teks & Socials */}
          <div className="w-full md:w-3/5 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border-[3px] md:border-4 border-black dark:border-white bg-[#ADFF2F] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_#FF71CE] -rotate-1 mb-6"
            >
              <Terminal className="w-4 h-4 text-black" /> 
              <span className="font-black text-[9px] md:text-xs uppercase tracking-widest text-black">Salma’s Digital Lab v2.0</span>
            </motion.div>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl sm:text-6xl md:text-8xl font-black mb-6 text-slate-900 dark:text-white leading-[0.9] tracking-tighter italic flex flex-wrap justify-center md:justify-start"
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
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="inline-block mt-2 text-[#FF71CE] drop-shadow-[4px_4px_0px_#01CDFE] dark:text-[#64FFDA] dark:drop-shadow-[4px_4px_0px_#B967FF]"
              >
                Meet Salma.
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/90 dark:bg-slate-900/60 backdrop-blur-md p-5 md:p-8 border-[3px] md:border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0_#64FFDA] mb-8 max-w-xl group transition-transform hover:-translate-y-1"
            >
              <p className="text-base md:text-xl font-black text-black dark:text-[#64FFDA] mb-2 flex items-center justify-center md:justify-start gap-2 uppercase italic">
                <Rocket className="text-[#FF71CE] dark:text-[#64FFDA] w-4 h-4 group-hover:animate-bounce" /> From Zero to One
              </p>
              <p className="text-sm md:text-lg font-bold text-slate-800 dark:text-slate-200 leading-tight">
                Salma's Informatics learning journal — A student of <span className="bg-[#ADFF2F] dark:bg-transparent dark:text-[#64FFDA] px-1 border-2 border-black dark:border-[#64FFDA] font-black">MAN 1 Banda Aceh</span> currently taming code with passion.
              </p>
            </motion.div>

            {/* Tombol Aksi */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button
                size="lg"
                className="h-14 md:h-16 rounded-none px-8 text-sm md:text-base font-black border-[3px] md:border-4 border-black bg-[#FF71CE] dark:bg-[#64FFDA] text-black shadow-[4px_4px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase flex items-center gap-2 group"
                onClick={() => scrollToSection("#projects")}
              >
                <Code2 className="h-5 w-5 group-hover:rotate-12 transition-transform" /> Lihat Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 md:h-16 rounded-none px-8 text-sm md:text-base font-black border-[3px] md:border-4 border-black bg-white dark:bg-transparent text-black dark:text-white shadow-[4px_4px_0px_0px_#ADFF2F] dark:shadow-[4px_4px_0px_0px_#64FFDA] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase"
                onClick={() => scrollToSection("#contact")}
              >
                Hubungi Saya
              </Button>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                { icon: Github, href: "https://github.com/vierginn10-debug/", color: "bg-black text-white" },
                // { icon: Linkedin, href: "#", color: "bg-[#0A66C2] text-white" },
                // { icon: Youtube, href: "#", color: "bg-[#FF0000] text-white" },
                { icon: Instagram, href: "https://www.instagram.com/salmayyawnn", color: "bg-[#FF71CE] text-black" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 border-[3px] border-black dark:border-white shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#64FFDA] transition-all ${social.color}`}
                  whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 5 : -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* KANAN: Foto Profil */}
          <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2 px-4 group">
            <div className="relative scale-90 md:scale-100">
              <div className="absolute -inset-3 border-[3px] md:border-4 border-black dark:border-white bg-[#ADFF2F] z-0 shadow-[8px_8px_0px_0px_#FF71CE] dark:shadow-[8px_8px_0px_0px_#64FFDA] -rotate-3" />
              
              <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 border-[3px] md:border-4 border-black dark:border-white overflow-hidden rotate-2 bg-white transition-all duration-500 group-hover:rotate-0">
                 <img
                  src="/foto salma.jpg" 
                  alt="Salma"
                  className="w-full h-full object-cover transition-all duration-500 scale-105 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-black text-[#FF71CE] dark:text-[#64FFDA] px-2 py-0.5 border-2 border-[#FF71CE] dark:border-[#64FFDA] text-[8px] font-black uppercase tracking-tighter">
                  Live Lab
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR (SUDAH KEMBALI) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20 group hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-12 border-[3px] border-black dark:border-white bg-[#ADFF2F] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#64FFDA] flex justify-center p-1">
                <motion.div 
                    animate={{ y: [0, 16, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 bg-black dark:bg-white rounded-full"
                />
            </div>
            <span className="text-[10px] font-black text-black dark:text-white uppercase tracking-widest">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}