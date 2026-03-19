import { motion, AnimatePresence } from "framer-motion";
import { Code2, BookOpen, Laptop, Sparkles, ChevronDown, Star, LucideIcon } from "lucide-react";
import { useState, useEffect, useMemo, memo } from "react";

interface StatProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

const StatCard = memo(({ stat }: { stat: StatProps }) => (
  <motion.div
    layout
    whileTap={{ scale: 0.92 }}
    className={`${stat.color} border-[3px] border-black dark:border-white p-3 md:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(100,255,218,0.2)] flex flex-col items-center justify-center text-black transform-gpu`}
    style={{ willChange: 'transform' }}
  >
    <stat.icon className="w-7 h-7 mb-2 stroke-[2.5px]" />
    <span className="text-2xl md:text-3xl font-black tracking-tighter leading-none">
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

  useEffect(() => {
    if (active === null) return;
    setDisplayText("");
    let i = 0;
    const fullText = accordion[active].content;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 12);
    return () => clearInterval(timer);
  }, [active, accordion]);

  return (
    <section 
      id="about" 
      className="py-16 bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC] dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464] relative overflow-hidden transform-gpu"
    >
      {/* 🛠️ CYBER FRAME DECORATION (Aman & Tidak Ngelag) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Garis Frame Samping (Kiri & Kanan) */}
        <div className="absolute top-0 bottom-0 left-4 w-[2px] bg-black/10 dark:bg-white/10 hidden md:block" />
        <div className="absolute top-0 bottom-0 right-4 w-[2px] bg-black/10 dark:bg-white/10 hidden md:block" />

        {/* Akses Pojok (L-Shape Brackets) */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-black dark:border-[#05FFA1] opacity-40" />
        <div className="absolute top-10 right-10 w-20 h-20 border-t-4 border-r-4 border-black dark:border-[#FF71CE] opacity-40" />
        <div className="absolute bottom-10 left-10 w-20 h-20 border-b-4 border-l-4 border-black dark:border-[#01CDFE] opacity-40" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-black dark:border-[#B967FF] opacity-40" />

        {/* Dekorasi Titik-Titik di Pojok */}
        <div className="absolute top-12 left-12 grid grid-cols-2 gap-1 opacity-40">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-black dark:bg-white" />
            ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block border-[3px] border-black bg-[#05FFA1] px-5 py-1.5 mb-6 shadow-[4px_4px_0px_0px_#000] -rotate-2">
            <span className="font-black text-sm md:text-base uppercase italic text-black">Student Profile</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-[0.85] italic dark:text-white">
            From Logic <br />
            <span className="inline-block rotate-1 mt-4 px-6 py-2 border-[5px] bg-white border-black shadow-[6px_6px_0px_0px_#01CDFE] dark:bg-black dark:border-white dark:shadow-[6px_6px_0px_0px_#B967FF] transform-gpu">
              <span className="text-[#FF71CE] drop-shadow-[2px_2px_0px_#01CDFE] dark:text-[#64FFDA] dark:drop-shadow-[2px_2px_0px_#B967FF]">
                To Magic
              </span>
            </span>
          </h2>

          <div className="max-w-xl mx-auto border-[3px] border-black bg-white dark:bg-[#112240] p-5 shadow-[6px_6px_0px_0px_#000] relative mt-8 transform-gpu">
            <p className="text-base md:text-lg font-black uppercase italic text-black dark:text-white leading-tight">
              "A student's journey in conquering lines of code."
            </p>
            <Star className="absolute -top-5 -right-5 w-10 h-10 fill-[#FFFB96] stroke-black stroke-[2.5px]" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          
          {/* VISUAL BOX */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative transform-gpu px-2 max-w-[350px] md:max-w-md mx-auto"
          >
            <div className="aspect-square border-[10px] border-black bg-[#B967FF] dark:bg-[#112240] shadow-[18px_18px_0px_0px_#000] dark:shadow-[18px_18px_0px_0px_#64FFDA] flex items-center justify-center overflow-hidden">
               <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-[150px] md:text-[240px] select-none"
               >
                🪄
               </motion.div>
            </div>
            <div className="absolute -bottom-8 -left-4 bg-[#FFFB96] border-[4px] border-black p-4 md:p-5 shadow-[8px_8px_0px_0px_#01CDFE] rotate-[-5deg] z-20">
               <span className="font-black uppercase text-[12px] md:text-base italic text-black">Learning Ninja 🥷</span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              {accordion.map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className={`border-[3px] border-black bg-white dark:bg-[#112240] shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#64FFDA] transition-all transform-gpu ${active === index ? '-translate-y-0.5' : ''}`}
                >
                  <button
                    onClick={() => setActive(active === index ? null : index)}
                    className={`flex items-center justify-between w-full p-4 text-left border-b-[3px] border-black transition-colors ${active === index ? item.color : ''}`}
                  >
                    <span className="text-base md:text-lg font-black uppercase italic tracking-tighter text-black dark:text-white active:text-black">
                      {item.title}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${active === index ? 'rotate-180 text-black' : 'text-black dark:text-white'} stroke-[3.5px]`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {active === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden bg-white dark:bg-[#0D1B2A]"
                      >
                        <div className="p-5 font-bold text-black dark:text-white leading-relaxed text-sm md:text-base">
                          {displayText}
                          <motion.span 
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="inline-block w-1.5 h-4 bg-current ml-1" 
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 md:gap-4 max-w-sm md:max-w-none mx-auto lg:mx-0"
            >
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}