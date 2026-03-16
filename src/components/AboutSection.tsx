import { motion, AnimatePresence } from "framer-motion";
import { Code2, BookOpen, Laptop, Sparkles, ChevronDown, Rocket, Terminal, Cpu, Star } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

export default function AboutSection() {
  const [active, setActive] = useState(0);
  const [typedLines, setTypedLines] = useState([]);

  // Data Accordion - Menggunakan useMemo agar referensi data stabil
  const accordion = useMemo(() => [
    {
      title: "Introduction: Starting from Scratch",
      icon: <Terminal className="w-6 h-6" />,
      color: "bg-[#FF71CE]", // Pink Neon
      content: "Hello! I am a student at MAN 1 Banda Aceh who was initially unfamiliar with the world of programming. Through the Informatics subject, I was challenged to step out of my comfort zone and learn to build something from zero. This website is my 'digital notebook'—a space to document every bit of progress, failure, and small success in this coding journey."
    },
    {
      title: "The Process: Behind the Scenes",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-[#01CDFE]", // Blue Neon
      content: "Learning to use VS Code turned out to be both exciting and challenging! At first, I was often confused when the web layout broke just because of a single character. But from that, I learned the true meaning of precision. Every time I successfully fix an error and update my code to GitHub, there’s a sense of pride."
    },
    {
      title: "Hopes: Future Journey",
      icon: <Rocket className="w-6 h-6" />,
      color: "bg-[#05FFA1]", // Green Neon
      content: "This assignment made me realize that technology is not just to be enjoyed, but something we can create. My goal is simple: I want to keep learning and not give up easily on new things. I hope this first coding experience becomes a valuable foundation for me to understand the wider world of technology."
    },
  ], []);

  const stats = [
    { icon: Code2, value: "10+", label: "Projects", color: "bg-[#FF71CE]" },
    { icon: BookOpen, value: "20+", label: "Tutorials", color: "bg-[#B967FF]" },
    { icon: Laptop, value: "100%", label: "Self-Taught", color: "bg-[#05FFA1]" },
    { icon: Sparkles, value: "∞", label: "Curiosity", color: "bg-[#FFFB96]" },
  ];

  // Efek Typewriter dengan Highlight Kontras Tinggi
  useEffect(() => {
    if (active !== null) {
      const sentences = accordion[active].content.split(". ").filter(Boolean);
      setTypedLines([]);
      let currentIndex = 0;

      const typeSentence = () => {
        if (currentIndex < sentences.length) {
          const sentence = sentences[currentIndex] + (currentIndex < sentences.length - 1 ? "." : "");
          // Highlight kata kunci: Hitam tebal dengan border putih tipis
          const highlighted = sentence.replace(
            /(VS Code|GitHub|Informatics|programming|technology|coding|digital notebook)/gi,
            (match) => `<span class="bg-black text-white px-1.5 py-0.5 mx-0.5 font-black uppercase text-xs italic border border-white/20">${match}</span>`
          );
          
          setTypedLines((prev) => [...prev, highlighted]);
          currentIndex++;
          setTimeout(typeSentence, 150);
        }
      };
      const timer = setTimeout(typeSentence, 100);
      return () => clearTimeout(timer);
    }
  }, [active, accordion]);

  return (
    <section id="about" className="py-24 bg-[#FFFB96]/10 text-black relative overflow-hidden selection:bg-black selection:text-[#05FFA1]">
      
      {/* --- DEKORASI LATAR BELAKANG (BENTUK GEOMETRIS) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[5%] w-32 h-32 border-8 border-black bg-[#FF71CE] rotate-12 opacity-20" />
        <div className="absolute top-60 right-[5%] w-48 h-48 border-8 border-black rounded-full bg-[#01CDFE] -rotate-12 opacity-20" />
        <div className="absolute bottom-20 left-[15%] w-24 h-24 border-8 border-black bg-[#B967FF] rotate-45 opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER: Dibuat sangat mencolok */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block border-4 border-black bg-[#05FFA1] px-6 py-2 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-2">
            <span className="font-black text-xl uppercase tracking-widest italic">Student Profile</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85] italic">
            From Logic <br />
            <span className="text-white bg-black px-4 inline-block transform rotate-1 mt-4 shadow-[8px_8px_0px_0px_#FF71CE]">To Magic</span>
          </h2>
          
          <div className="max-w-3xl mx-auto border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative mt-10">
            <p className="text-xl md:text-2xl font-black uppercase leading-tight italic">
              "A student's journey in conquering lines of code and crafting a space in the digital world."
            </p>
            <Star className="absolute -top-8 -right-8 w-16 h-16 fill-[#FFFB96] stroke-black stroke-[3px] animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          
          {/* SISI KIRI: KOTAK VISUAL UTAMA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 aspect-square border-[10px] border-black bg-[#B967FF] shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
              {/* Pattern Titik-titik Retro */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#000_3px,transparent_1px)] [background-size:24px_24px]" />
              
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                  y: [0, -20, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-[200px] md:text-[280px] z-10 filter drop-shadow-[15px_15px_0px_rgba(0,0,0,1)]"
              >
                🪄
              </motion.div>
            </div>

            {/* Label Melayang (Ninja Badge) */}
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 0 }}
              className="absolute -bottom-10 -left-6 bg-[#FFFB96] border-4 border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] z-20 rotate-[-8deg]"
            >
              <div className="flex flex-col text-center">
                <span className="text-sm font-black uppercase opacity-60">Status</span>
                <span className="text-4xl font-black uppercase italic tracking-tighter">Learning Ninja</span>
              </div>
            </motion.div>

            {/* Tag Siswa Pojok Kanan */}
            <div className="absolute top-10 right-10 bg-black text-[#05FFA1] font-mono px-4 py-2 border-2 border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20 font-bold text-lg italic">
              &lt;salma's /&gt;
            </div>
          </motion.div>

          {/* SISI KANAN: ACCORDION & BENTO STATS */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              {accordion.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`border-4 border-black transition-all duration-300 ${
                    active === index ? 'shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] translate-x-[-4px] translate-y-[-4px]' : 'bg-white shadow-none'
                  }`}
                >
                  <button
                    onClick={() => setActive(active === index ? null : index)}
                    className={`flex items-center justify-between w-full p-6 text-left border-b-4 border-black transition-colors ${active === index ? item.color : 'bg-white hover:bg-slate-50'}`}
                  >
                    <div className="flex items-center gap-5">
                      <span className="p-3 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-xl italic">
                        ?
                      </span>
                      <span className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-tight">
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown className={`w-10 h-10 transition-transform duration-500 ${active === index ? 'rotate-180' : ''} stroke-[4px]`} />
                  </button>

                  <AnimatePresence>
                    {active === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="p-8 border-t-4 border-black">
                          {typedLines.map((line, i) => (
                            <motion.p
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="text-lg md:text-xl font-bold leading-tight mb-4"
                              dangerouslySetInnerHTML={{ __html: line }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* STATS GRID (BENTO BRUTALISM) */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10, x: -10, shadow: "15px 15px 0px 0px rgba(0,0,0,1)" }}
                  className={`${stat.color} border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center transition-all cursor-default`}
                >
                  <stat.icon className="w-10 h-10 mb-3 stroke-[3px]" />
                  <span className="text-5xl font-black tracking-tighter leading-none">{stat.value}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] mt-3 border-t-4 border-black pt-2 w-full text-center">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}