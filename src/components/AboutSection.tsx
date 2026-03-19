import { motion, AnimatePresence } from "framer-motion";
import { Code2, BookOpen, Laptop, Sparkles, ChevronDown, Rocket, Terminal, Cpu, Star } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

export default function AboutSection() {
  const [active, setActive] = useState(0);
  const [typedLines, setTypedLines] = useState<string[]>([]);

  const accordion = useMemo(() => [
    {
      title: "Introduction: Starting from Scratch",
      icon: <Terminal className="w-6 h-6" />,
      color: "bg-[#FF71CE]", 
      content: "Hello! I am a student at MAN 1 Banda Aceh who was initially unfamiliar with the world of programming. Through the Informatics subject, I was challenged to step out of my comfort zone and learn to build something from zero. This website is my 'digital notebook'—a space to document every bit of progress, failure, and small success in this coding journey."
    },
    {
      title: "The Process: Behind the Scenes",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-[#01CDFE]", 
      content: "Learning to use VS Code turned out to be both exciting and challenging! At first, I was often confused when the web layout broke just because of a single character. But from that, I learned the true meaning of precision. Every time I successfully fix an error and update my code to GitHub, there’s a sense of pride."
    },
    {
      title: "Hopes: Future Journey",
      icon: <Rocket className="w-6 h-6" />,
      color: "bg-[#05FFA1]", 
      content: "This assignment made me realize that technology is not just to be enjoyed, but something we can create. My goal is simple: I want to keep learning and not give up easily on new things. I hope this first coding experience becomes a valuable foundation for me to understand the wider world of technology."
    },
  ], []);

  const stats = [
    { icon: Code2, value: "10+", label: "Projects", color: "bg-[#FF71CE]" },
    { icon: BookOpen, value: "20+", label: "Tutorials", color: "bg-[#B967FF]" },
    { icon: Laptop, value: "100%", label: "Self-Taught", color: "bg-[#05FFA1]" },
    { icon: Sparkles, value: "∞", label: "Curiosity", color: "bg-[#FFFB96]" },
  ];

  useEffect(() => {
    if (active !== null) {
      const sentences = accordion[active].content.split(". ").filter(Boolean);
      setTypedLines([]);
      let currentIndex = 0;

      const typeSentence = () => {
        if (currentIndex < sentences.length) {
          const sentence = sentences[currentIndex] + (currentIndex < sentences.length - 1 ? "." : "");
          const highlighted = sentence.replace(
            /(VS Code|GitHub|Informatics|programming|technology|coding|digital notebook|MAN 1 Banda Aceh)/gi,
            (match) => `<span class="bg-black dark:bg-[#64FFDA] text-white dark:text-[#0A192F] px-1.5 py-0.5 mx-0.5 font-black uppercase text-[10px] italic border border-white/20 dark:border-black/20 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">${match}</span>`
          );
          setTypedLines((prev) => [...prev, highlighted]);
          currentIndex++;
          setTimeout(typeSentence, 100);
        }
      };
      const timer = setTimeout(typeSentence, 200);
      return () => clearTimeout(timer);
    }
  }, [active, accordion]);

  return (
    <section 
      id="about" 
      className="py-24 selection:bg-black selection:text-[#05FFA1] relative overflow-hidden
      bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC]
      dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464]"
    >
      
      {/* DEKORASI LATAR BELAKANG (Hidden on Mobile for Performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[5%] w-32 h-32 border-8 border-black dark:border-[#64FFDA]/10 bg-[#FF71CE] rotate-12 opacity-10 hidden md:block" />
        <div className="absolute top-60 right-[5%] w-48 h-48 border-8 border-black dark:border-[#64FFDA]/10 rounded-full bg-[#01CDFE] -rotate-12 opacity-10 hidden md:block" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block border-4 border-black dark:border-[#64FFDA] bg-[#05FFA1] px-6 py-2 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_#64FFDA] -rotate-2">
            <span className="font-black text-lg md:text-xl uppercase tracking-widest italic text-black">Student Profile</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85] italic">
            <span className="text-black dark:text-white transition-colors duration-500">From Logic</span>
            <br />
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-block transform rotate-1 mt-6 px-8 py-3 border-[6px] 
                         bg-white border-black shadow-[8px_8px_0px_0px_#01CDFE]
                         dark:bg-black dark:border-white dark:shadow-[8px_8px_0px_0px_#B967FF]"
            >
              <span className="text-[#FF71CE] drop-shadow-[2px_2px_0px_#01CDFE]
                               dark:text-[#64FFDA] dark:drop-shadow-[2px_2px_0px_#B967FF]">
                To Magic
              </span>
            </motion.div>
          </h2>
          
          <div className="max-w-3xl mx-auto border-4 border-black dark:border-white bg-white dark:bg-[#112240] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(100,255,218,0.1)] relative mt-10">
            <p className="text-xl md:text-2xl font-black uppercase leading-tight italic text-black dark:text-[#CCD6F6]">
              "A student's journey in conquering lines of code and crafting a space in the digital world."
            </p>
            {/* Animasi Bintang - Fixed Error JSX */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 md:-top-8 md:-right-8 z-20"
            >
              <Star className="w-12 h-12 md:w-16 md:h-16 fill-[#FFFB96] dark:fill-[#64FFDA] stroke-black dark:stroke-white stroke-[3px]" />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start max-w-7xl mx-auto">
          
          {/* VISUAL BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 aspect-square border-[8px] md:border-[10px] border-black dark:border-[#64FFDA] bg-[#B967FF] dark:bg-[#112240] shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] dark:shadow-[15px_15px_0px_0px_#64FFDA] flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_2px,transparent_1px)] dark:bg-[radial-gradient(#64FFDA_1px,transparent_1px)] [background-size:20px_20px]" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-[150px] md:text-[280px] z-10 filter drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] group-hover:grayscale transition-all"
              >
                🪄
              </motion.div>
            </div>

            <div className="absolute -bottom-6 -left-4 bg-[#FFFB96] dark:bg-[#64FFDA] border-4 border-black p-4 shadow-[6px_6px_0px_0px_#01CDFE] z-20 rotate-[-8deg]">
              <div className="flex flex-col text-center text-black">
                <span className="text-[10px] font-black uppercase opacity-60">Status</span>
                <span className="text-2xl font-black uppercase italic tracking-tighter">Learning Ninja</span>
              </div>
            </div>

            <div className="absolute top-6 right-6 bg-black dark:bg-[#0A192F] text-[#05FFA1] dark:text-[#64FFDA] font-mono px-3 py-1 border-2 border-white dark:border-[#64FFDA] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 font-bold text-sm italic">
              &lt;salma's /&gt;
            </div>
          </motion.div>

          {/* ACCORDION & STATS */}
          <div className="flex flex-col gap-10">
            <div className="space-y-4">
              {accordion.map((item, index) => (
                <div 
                  key={index}
                  className={`border-4 border-black dark:border-white transition-all overflow-hidden ${
                    active === index ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_#64FFDA] -translate-y-1' : 'bg-white dark:bg-[#112240]'
                  }`}
                >
                  <button
                    onClick={() => setActive(active === index ? null : index)}
                    className={`flex items-center justify-between w-full p-5 text-left transition-colors ${active === index ? item.color : 'bg-white dark:bg-[#112240]'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="p-2 border-[3px] border-black dark:border-white bg-white dark:bg-black text-black dark:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black italic">
                        ?
                      </span>
                      <span className={`text-xl md:text-2xl font-black uppercase italic tracking-tighter text-black ${active === index ? 'text-black' : 'dark:text-white'}`}>
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${active === index ? 'rotate-180 text-black' : 'text-black dark:text-white'} stroke-[3px]`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {active === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white dark:bg-[#0D1B2A]"
                      >
                        <div className="p-6 border-t-4 border-black dark:border-white">
                          {typedLines.map((line, i) => (
                            <p
                              key={i} 
                              className="text-base md:text-xl font-bold leading-tight mb-3 text-black dark:text-[#CCD6F6]"
                              dangerouslySetInnerHTML={{ __html: line }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`${stat.color} border-4 border-black dark:border-white p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(100,255,218,0.2)] flex flex-col items-center justify-center text-black active:scale-95 transition-transform`}
                >
                  <stat.icon className="w-8 h-8 mb-2 stroke-[3px]" />
                  <span className="text-4xl font-black tracking-tighter leading-none">{stat.value}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest mt-3 border-t-2 border-black pt-2 w-full text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}