import { motion, AnimatePresence } from "framer-motion";
import { Code2, BookOpen, Laptop, Sparkles, ChevronDown, Star, LucideIcon } from "lucide-react";
import { useState, useEffect, useMemo, memo } from "react";

interface StatProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

// Komponen StatCard yang dioptimasi
const StatCard = memo(({ stat }: { stat: StatProps }) => (
  <motion.div
    layout
    whileTap={{ scale: 0.95 }}
    className={`${stat.color} border-[3px] border-black dark:border-white p-3 md:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(100,255,218,0.2)] flex flex-col items-center justify-center text-black transform-gpu`}
  >
    <stat.icon className="w-6 h-6 md:w-7 md:h-7 mb-2 stroke-[2.5px]" />
    <span className="text-xl md:text-3xl font-black tracking-tighter leading-none">
      {stat.value}
    </span>
    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] mt-2 border-t-2 border-black pt-1 w-full text-center">
      {stat.label}
    </span>
  </motion.div>
));

StatCard.displayName = "StatCard";

export default function AboutSection() {
  const [active, setActive] = useState<number | null>(0);
  const [displayText, setDisplayText] = useState("");

  const accordion = useMemo(() => [
    {
      title: "Introduction: Starting from Scratch",
      color: "bg-[#FF71CE]", 
      content: "Hello! I am a student at MAN 1 Banda Aceh who was initially unfamiliar with the world of programming. Through the Informatics subject, I was challenged to step out of my comfort zone and learn to build something from zero. This website is my 'digital notebook'—a space to document every bit of progress."
    },
    {
      title: "The Process: Behind the Scenes",
      color: "bg-[#01CDFE]", 
      content: "Learning to use VS Code turned out to be both exciting and challenging! At first, I was often confused when the web layout broke. Every time I successfully fix an error and update my code to GitHub, there’s a sense of pride."
    },
    {
      title: "Hopes: Future Journey",
      color: "bg-[#05FFA1]", 
      content: "This assignment made me realize that technology is not just to be enjoyed, but something we can create. I hope this first coding experience becomes a valuable foundation for me to understand the wider world of technology."
    },
  ], []);

  const stats: StatProps[] = [
    { icon: Code2, value: "10+", label: "Projects", color: "bg-[#FF71CE]" },
    { icon: BookOpen, value: "20+", label: "Tutorials", color: "bg-[#B967FF]" },
    { icon: Laptop, value: "100%", label: "Self-Taught", color: "bg-[#05FFA1]" },
    { icon: Sparkles, value: "∞", label: "Curiosity", color: "bg-[#FFFB96]" },
  ];

  // Efek Typing yang lebih halus
  useEffect(() => {
    if (active === null) return;
    setDisplayText("");
    let i = 0;
    const fullText = accordion[active].content;
    const speed = fullText.length > 100 ? 10 : 15;
    
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [active, accordion]);

  return (
    <section 
      id="about" 
      className="py-16 md:py-24 bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC] dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464] relative overflow-hidden transition-colors duration-1000"
    >
      {/* --- DECORATION LAYER --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-black dark:border-[#05FFA1] opacity-30" />
        <div className="absolute top-10 right-10 w-20 h-20 border-t-4 border-r-4 border-black dark:border-[#FF71CE] opacity-30" />
        <div className="absolute bottom-10 left-10 w-20 h-20 border-b-4 border-l-4 border-black dark:border-[#01CDFE] opacity-30" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-black dark:border-[#B967FF] opacity-30" />
        
        {/* Dot Pattern Background Utama */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#000 1.2px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block border-[3px] border-black bg-[#05FFA1] px-5 py-1.5 mb-6 shadow-[4px_4px_0px_0px_#000] -rotate-2">
            <span className="font-black text-xs md:text-sm uppercase italic text-black tracking-widest">Student Profile</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.85] italic dark:text-white">
            From Logic <br />
            <div className="inline-block transform-gpu rotate-1 mt-6 px-8 py-3 border-[5px] bg-white border-black shadow-[8px_8px_0px_0px_#01CDFE] dark:bg-black dark:border-white dark:shadow-[8px_8px_0px_0px_#B967FF]">
              <span className="text-[#FF71CE] dark:text-[#64FFDA]">To Magic</span>
            </div>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* VISUAL BOX (Magic Wand) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative transform-gpu px-2 order-2 lg:order-1"
          >
            {/* KOTAK DENGAN PATTERN TITIK-TITIK HALUS */}
            <div className="aspect-square max-w-[320px] md:max-w-md mx-auto border-[10px] border-black bg-[#B967FF] dark:bg-[#112240] shadow-[15px_15px_0px_0px_#000] dark:shadow-[15px_15px_0px_0px_#64FFDA] flex items-center justify-center overflow-hidden relative transform-gpu">
                
                {/* --- INNER DOT PATTERN --- */}
                <div className="absolute inset-0 opacity-[0.2] dark:opacity-[0.1] pointer-events-none z-0"
                     style={{ 
                       backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                       backgroundSize: '15px 15px'
                     }} />

                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[140px] md:text-[200px] select-none z-10 filter drop-shadow-[5px_5px_0px_rgba(0,0,0,0.2)]"
                >
                  🪄
                </motion.div>
                
                {/* Decorative floating shapes inside box */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-[#FFFB96] border-2 border-black rotate-12 z-10" />
                <div className="absolute bottom-8 right-6 w-6 h-6 bg-[#01CDFE] border-2 border-black -rotate-12 z-10" />
            </div>
            
            <div className="absolute -bottom-6 -left-2 md:-left-6 bg-[#FFFB96] border-[4px] border-black px-4 py-2 shadow-[6px_6px_0px_0px_#01CDFE] rotate-[-5deg] z-20">
               <span className="font-black uppercase text-xs md:text-sm italic text-black flex items-center gap-2">
                 Learning Ninja <span className="text-lg">🥷</span>
               </span>
            </div>
          </motion.div>

          {/* CONTENT (Accordion & Stats) */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div className="space-y-4">
              {accordion.map((item, index) => (
                <div key={index} className="border-[3px] border-black bg-white dark:bg-[#112240] shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#64FFDA] transform-gpu">
                  <button
                    onClick={() => setActive(active === index ? null : index)}
                    className={`flex items-center justify-between w-full p-4 md:p-5 text-left border-b-[3px] border-black transition-colors ${active === index ? item.color : ''}`}
                  >
                    <span className={`text-sm md:text-lg font-black uppercase italic tracking-tighter ${active === index ? 'text-black' : 'text-black dark:text-white'}`}>
                      {item.title}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${active === index ? 'rotate-180 text-black' : 'text-black dark:text-white'} stroke-[3.5px]`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {active === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="overflow-hidden bg-white dark:bg-[#0D1B2A]"
                      >
                        <div className="p-5 font-bold text-black dark:text-white leading-relaxed text-sm md:text-base border-black/5">
                          {displayText}
                          <motion.span 
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity }}
                            className="inline-block w-2 h-4 bg-[#B967FF] ml-1 align-middle" 
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}