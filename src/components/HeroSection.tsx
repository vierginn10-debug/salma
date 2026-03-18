import { motion } from "framer-motion";
import { Github, Instagram, Code2, Terminal, Rocket, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Varian animasi untuk teks "Hello World!" agar muncul satu per satu
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.08, 
        delayChildren: 0.5 
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const helloText = "Hello World!";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-700 pt-20 pb-20
                 bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC]
                 dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464]" 
    >
      {/* 1. BACKGROUND LAYER (ThreeJS) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <ThreeScene />
      </div>

      {/* 2. FLOATING PARTICLES EFFECT */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-400/30 dark:bg-[#64FFDA]/20 rounded-full blur-sm"
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 items-center">
          
          {/* SEBELAH KIRI: Teks & Deskripsi */}
          <div className="w-full md:w-3/5 text-center md:text-left order-2 md:order-1">
            {/* Badge Version */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-2 border-4 border-black dark:border-white bg-[#ADFF2F] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_#FF71CE] -rotate-1 mb-8"
            >
              <Terminal className="w-4 h-4 text-black" /> 
              <span className="font-black text-[10px] md:text-xs uppercase tracking-widest text-black">
                Salma’s Digital Lab v2.0
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-slate-900 dark:text-white leading-[0.85] tracking-tighter italic flex flex-wrap justify-center md:justify-start transition-colors duration-500"
            >
              {helloText.split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants} 
                  className="hover:text-[#FF71CE] dark:hover:text-[#64FFDA] transition-colors cursor-default"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <br className="w-full" />
              <motion.span 
                initial={{ rotate: -2 }}
                animate={{ 
                    rotate: [-2, -1, -3, -2],
                    transition: { repeat: Infinity, duration: 5, ease: "easeInOut" }
                }}
                className="inline-block mt-2 transition-all duration-500
                           text-[#FF71CE] drop-shadow-[5px_5px_0px_#01CDFE] 
                           dark:text-[#64FFDA] dark:drop-shadow-[5px_5px_0px_#B967FF]"
              >
                Meet Salma.
              </motion.span>
            </motion.h1>

            {/* Description Box */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl p-6 md:p-8 border-4 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0_#64FFDA] mb-10 mx-auto md:mx-0 max-w-xl group transition-all duration-500 hover:-translate-y-1"
            >
              <p className="text-lg md:text-xl font-black text-black dark:text-[#64FFDA] mb-3 flex items-center justify-center md:justify-start gap-2 uppercase italic">
                <Rocket className="text-[#FF71CE] dark:text-[#64FFDA] w-5 h-5 group-hover:animate-bounce" /> From Zero to One
              </p>
              <p className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 leading-tight">
                Salma's Informatics learning journal — A student of <span className="bg-[#ADFF2F] dark:bg-transparent dark:text-[#64FFDA] px-1 border-2 border-black dark:border-[#64FFDA] font-black">MAN 1 Banda Aceh</span> currently taming lines of code with passion.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-10">
              <Button
                size="lg"
                className="h-16 rounded-none px-10 text-base font-black border-4 border-black 
                           bg-[#FF71CE] dark:bg-[#64FFDA] text-black 
                           shadow-[6px_6px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase flex items-center gap-2 group"
                onClick={() => scrollToSection("#projects")}
              >
                <Code2 className="h-5 w-5 group-hover:rotate-12 transition-transform" /> 
                Lihat Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-16 rounded-none px-10 text-base font-black border-4 border-black bg-white dark:bg-transparent text-black dark:text-white shadow-[6px_6px_0px_0px_#ADFF2F] dark:shadow-[6px_6px_0px_0px_#64FFDA] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
                onClick={() => scrollToSection("#contact")}
              >
                Hubungi Saya
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {[
                { icon: Github, href: "https://github.com/vierginn10-debug/", color: "bg-black text-white dark:bg-white dark:text-black" },
                // { icon: Linkedin, href: "#", color: "bg-[#0A66C2] text-white" },
                // { icon: Youtube, href: "#", color: "bg-[#FF0000] text-white" },
                { icon: Instagram, href: "https://www.instagram.com/salmayyawnn", color: "bg-[#FF71CE] text-black" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#64FFDA] transition-all ${social.color}`}
                  whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 5 : -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* SEBELAH KANAN: Foto Profil Neobrutalism */}
          <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2 px-4">
            <div className="relative">
              {/* Background Accent Box */}
              <motion.div 
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: -3 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -inset-4 border-4 border-black dark:border-white bg-[#ADFF2F] z-0 shadow-[10px_10px_0px_0px_#FF71CE] dark:shadow-[10px_10px_0px_0px_#64FFDA]" 
              />
              
              {/* Image Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 border-4 border-black dark:border-white overflow-hidden rotate-3 bg-white"
              >
                 <img
                  src="/foto salma.jpg" 
                  alt="Salma"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                />
                <div className="absolute top-4 right-4 bg-black text-[#FF71CE] dark:text-[#64FFDA] px-2 py-1 border-2 border-[#FF71CE] dark:border-[#64FFDA] text-[10px] font-black uppercase tracking-tighter animate-pulse">
                  Live Lab
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20 group hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-12 border-4 border-black dark:border-white bg-[#ADFF2F] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#64FFDA] flex justify-center p-1">
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