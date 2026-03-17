import { motion } from "framer-motion";
import { Github, Instagram, Code2, Terminal, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Varians untuk animasi huruf (staggered)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 }
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
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-700
                 bg-gradient-to-br from-amber-100 via-rose-100 to-purple-200
                 dark:from-[#030712] dark:via-[#111827] dark:to-[#1e1b4b] pt-20 pb-20" 
    >
      {/* 1. BACKGROUND LAYER: 3D Scene */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-40 pointer-events-none">
        <ThreeScene />
      </div>

      {/* 2. EFFECT LAYER: Floating Particles (Efek Debu Berkilau) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-sm"
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 80 - 40, 0],
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-primary/20 backdrop-blur-md text-pink-600 dark:text-pink-400 font-bold text-[10px] md:text-xs tracking-[0.2em] mb-8 shadow-sm uppercase border border-white/50"
            >
              <Terminal className="w-4 h-4 text-amber-500" /> Salma’s Digital Lab v2.0
            </motion.div>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-900 dark:text-white leading-tight tracking-tight flex flex-wrap justify-center md:justify-start"
            >
              {helloText.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span 
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="inline-block ml-3 text-3xl md:text-5xl"
              >
                🌎
              </motion.span>
              <br className="w-full" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500">
                Meet Salma.
              </span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-slate-900/40 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border-2 border-white/50 dark:border-white/5 shadow-2xl mb-10 mx-auto md:mx-0 max-w-xl group hover:shadow-pink-500/10 transition-all duration-500"
            >
              <p className="text-lg md:text-xl font-extrabold text-purple-900 dark:text-white mb-3 flex items-center justify-center md:justify-start gap-2">
                <Rocket className="text-pink-500 w-5 h-5 group-hover:animate-bounce" /> From Zero to One
              </p>
              <p className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                Salma's Informatics learning journal — A student of <span className="text-pink-600 dark:text-primary font-black underline decoration-4 decoration-amber-400/30 underline-offset-4">MAN 1 Banda Aceh</span> currently taming lines of code with passion.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
              <Button
                size="lg"
                className="h-14 rounded-xl px-8 text-base font-black bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] active:scale-95 transition-all text-white border-none shadow-xl flex items-center gap-2 group relative overflow-hidden"
                onClick={() => scrollToSection("#projects")}
              >
                <Code2 className="h-5 w-5 group-hover:rotate-12 transition-transform relative z-10" /> 
                <span className="relative z-10 uppercase">Lihat Projects</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-xl px-8 text-base font-black border-[3px] border-purple-600/50 text-purple-700 dark:text-white hover:bg-purple-600 hover:text-white transition-all shadow-md active:scale-95 bg-white/20 backdrop-blur-sm uppercase"
                onClick={() => scrollToSection("#contact")}
              >
                Hubungi Saya
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { icon: Github, href: "https://github.com/vierginn10-debug/", color: "bg-slate-900 text-white" },
                { icon: Instagram, href: "https://www.instagram.com/salmayyawnn", color: "bg-white/80 text-pink-600 border border-white/50 shadow-md backdrop-blur-sm" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all ${social.color}`}
                  whileHover={{ scale: 1.25, y: -5, rotate: idx % 2 === 0 ? 10 : -10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* SEBELAH KANAN: Foto Profil Transparent & Signal */}
          <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2 px-4">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-pink-400/30 animate-[ping_3s_ease-in-out_infinite] scale-90 z-0" />
              <div className="absolute inset-0 rounded-full bg-purple-400/20 animate-[ping_4s_ease-in-out_infinite] scale-100 z-0" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [0, -25, 0] 
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  opacity: { duration: 1 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { type: "spring", stiffness: 100 }
                }}
                className="relative z-10"
              >
                <div className="absolute -top-2 -right-2 md:top-4 md:right-4 z-30 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-3 rounded-2xl shadow-2xl border border-white/50 dark:border-white/10 flex flex-col items-center gap-1">
                  <div className="flex gap-[3px] items-end h-4 w-6 justify-center">
                    <motion.div 
                      animate={{ height: ["30%", "80%", "30%"] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1.5 bg-pink-600 rounded-full shadow-[0_0_8px_rgba(219,39,119,0.5)]"
                    />
                    <motion.div 
                      animate={{ height: ["60%", "100%", "60%"] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                      className="w-1.5 bg-purple-600 rounded-full shadow-[0_0_8px_rgba(147,51,234,0.5)]"
                    />
                    <motion.div 
                      animate={{ height: ["20%", "60%", "20%"] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      className="w-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                    />
                  </div>
                  <span className="text-[8px] font-black text-slate-500 dark:text-slate-300 uppercase tracking-tighter">Live Lab</span>
                </div>

                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-[6px] border-white/60 backdrop-blur-sm shadow-[0_30px_70px_-15px_rgba(236,72,153,0.3)] overflow-hidden bg-transparent group">
                   <img
                    src="/foto salma.jpg" 
                    alt="Salma"
                    className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-700"
                  />
                </div>
                
                <motion.div 
                  animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.1, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-40 h-5 bg-pink-900/20 blur-xl rounded-[100%]" 
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20 group"
      >
        <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-pink-500/50 rounded-full p-1 flex justify-center group-hover:border-pink-500 transition-colors">
                <motion.div 
                    animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-1.5 h-1.5 bg-pink-600 rounded-full shadow-[0_0_8px_rgba(219,39,119,0.8)]"
                />
            </div>
            <span className="text-[9px] font-bold text-pink-600/60 uppercase tracking-widest group-hover:text-pink-600">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}