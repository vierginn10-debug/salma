import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, Code2, Sparkles, Terminal, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Varian untuk kontainer teks (stagger children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  // Varian untuk memunculkan huruf satu per satu
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
                 bg-gradient-to-br from-amber-200 via-rose-200 to-indigo-300
                 dark:from-[#030712] dark:via-[#111827] dark:to-[#1e1b4b] pt-20 pb-20" 
    >
      {/* Background 3D */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-40">
        <ThreeScene />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
          
          {/* SEBELAH KIRI: Deskripsi */}
          <div className="w-full md:w-3/5 text-center md:text-left order-2 md:order-1">
            {/* Identity Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white dark:bg-primary font-bold text-[10px] md:text-xs tracking-[0.2em] mb-6 shadow-lg uppercase"
            >
              <Terminal className="w-4 h-4 text-amber-300" /> Salma’s Digital Lab v2.0
            </motion.div>

            {/* Headline Animasi Karakter */}
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
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block ml-2 text-3xl md:text-5xl"
              >
                🌎
              </motion.span>
              <br className="hidden md:block w-full" />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-rose-600 to-amber-600 dark:from-primary dark:via-pink-400 dark:to-amber-400"
              >
                Meet Salma.
              </motion.span>
            </motion.h1>

            {/* Deskripsi Card dengan Animasi Muncul */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="bg-white/60 dark:bg-slate-900/50 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border-2 border-white dark:border-white/10 shadow-xl mb-10 mx-auto md:mx-0 max-w-xl"
            >
              <p className="text-lg md:text-xl font-extrabold text-indigo-900 dark:text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                <Rocket className="text-rose-500 w-5 h-5 animate-bounce" /> From Zero to One
              </p>
              <p className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                Salma's Informatics learning journal — A student of <span className="text-rose-600 dark:text-primary font-black underline decoration-2 underline-offset-4 decoration-indigo-500/30">MAN 1 Banda Aceh</span> currently taming lines of code.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-10"
            >
              <Button
                size="lg"
                className="h-14 rounded-xl px-8 text-base font-black bg-slate-900 dark:bg-primary hover:scale-105 active:scale-95 transition-all text-white shadow-xl flex items-center gap-2"
                onClick={() => scrollToSection("#projects")}
              >
                <Code2 className="h-5 w-5" /> LIHAT PROJECTS
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-xl px-8 text-base font-black border-[3px] border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white transition-all shadow-md"
                onClick={() => scrollToSection("#contact")}
              >
                HUBUNGI SAYA
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/vierginn10-debug/", color: "bg-slate-900 text-white" },
                { icon: Instagram, href: "https://www.instagram.com/salmayyawnn", color: "bg-white text-rose-600 border-2 border-rose-100 shadow-sm" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all ${social.color}`}
                  whileHover={{ scale: 1.2, rotate: idx % 2 === 0 ? 10 : -10 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* SEBELAH KANAN: Foto Profil */}
          <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white dark:bg-primary animate-[ping_3s_linear_infinite] opacity-20 scale-75" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -15, 0] }}
                transition={{ 
                  opacity: { duration: 1 },
                  scale: { type: "spring", duration: 1.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative z-10"
              >
                <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border-[5px] border-white dark:border-primary shadow-2xl overflow-hidden bg-white/50 backdrop-blur-sm">
                   <img
                    src="/foto salma.jpg" 
                    alt="Salma"
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 dark:bg-primary/20 blur-xl rounded-[100%]" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 bg-white dark:bg-primary rounded-xl shadow-lg border-2 border-slate-900 dark:border-white animate-bounce z-20"
      >
        <ArrowDown className="h-5 w-5 text-slate-900 dark:text-white" />
      </motion.button>
    </section>
  );
}