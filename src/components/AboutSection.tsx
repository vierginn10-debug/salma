import { motion, AnimatePresence } from "framer-motion";
import { Code2, BookOpen, Laptop, Sparkles, ChevronDown, Rocket, Terminal, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [active, setActive] = useState(0);
  const [typedLines, setTypedLines] = useState([]);

  const stats = [
    { icon: Code2, value: "10+", label: "Projects", color: "text-blue-400" },
    { icon: BookOpen, value: "20+", label: "Tutorials", color: "text-purple-400" },
    { icon: Laptop, value: "100%", label: "Self-Taught", color: "text-emerald-400" },
    { icon: Sparkles, value: "∞", label: "Curiosity", color: "text-amber-400" },
  ];

  const accordion = [
    {
      title: " Introduction: Starting from Scratch",
      icon: <Terminal className="w-5 h-5" />,
      content: "Hello! I am a student at MAN 1 Banda Aceh who was initially unfamiliar with the world of programming. Through the Informatics subject, I was challenged to step out of my comfort zone and learn to build something from zero. This website is my 'digital notebook'—a space to document every bit of progress, failure, and small success in this coding journey."
    },
    {
      title: " The Process: Behind the Scenes",
      icon: <Cpu className="w-5 h-5" />,
      content: "Learning to use VS Code turned out to be both exciting and challenging! At first, I was often confused when the web layout broke just because of a single character. But from that, I learned the true meaning of precision. Every time I successfully fix an error and update my code to GitHub, there’s a sense of pride."
    },
    {
      title: " Hopes: Future Journey",
      icon: <Rocket className="w-5 h-5" />,
      content: "This assignment made me realize that technology is not just to be enjoyed, but something we can create. My goal is simple: I want to keep learning and not give up easily on new things. I hope this first coding experience becomes a valuable foundation for me to understand the wider world of technology."
    },
  ];

  const toggleAccordion = (index) => {
    setActive(active === index ? null : index);
  };

  useEffect(() => {
    if (active !== null) {
      const sentences = accordion[active].content.split(". ").filter(Boolean);
      setTypedLines([]);
      let currentIndex = 0;

      const typeSentence = () => {
        if (currentIndex < sentences.length) {
          const sentence = sentences[currentIndex] + (currentIndex < sentences.length - 1 ? "." : "");
          const highlighted = sentence.replace(
            /(VS Code|GitHub|Informatics|programming|technology|coding|digital notebook)/gi,
            (match) => `<span class="text-primary font-bold border-b border-primary/30">${match}</span>`
          );
          
          setTypedLines((prev) => [...prev, highlighted]);
          currentIndex++;
          setTimeout(typeSentence, 300);
        }
      };
      typeSentence();
    }
  }, [active]);

  return (
    <section id="about" className="py-24 md:py-32 bg-[#030712] text-slate-200 relative overflow-hidden">
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 mb-4">
            Hello World: My Journey into Coding
          </h2>
          <p className="text-slate-400 font-mono tracking-widest uppercase text-sm">Turning Logic into Art</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* LEFT SIDE: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl overflow-hidden group">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="text-[140px] md:text-[200px] filter drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                🪄
              </motion.div>

              {/* Decorative Tags */}
              <div className="absolute top-8 left-8 bg-blue-500/20 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-mono text-blue-300">
                &lt;student /&gt;
              </div>
            </div>

            {/* Experience Card */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-8 -right-8 bg-[#1e293b]/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Sparkles className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-tighter">Current Status</p>
                  <p className="text-xl font-bold text-white">Learning Ninja</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Accordion & Stats */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              {accordion.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={false}
                  className={`rounded-2xl border transition-all duration-300 ${
                    active === index ? 'bg-white/5 border-primary/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'bg-transparent border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`p-2 rounded-lg ${active === index ? 'bg-primary text-white' : 'bg-white/5 text-slate-400'}`}>
                        {item.icon}
                      </span>
                      <span className={`text-lg font-semibold ${active === index ? 'text-white' : 'text-slate-400'}`}>
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown className={`transition-transform duration-300 ${active === index ? 'rotate-180 text-primary' : 'text-slate-600'}`} />
                  </button>

                  <AnimatePresence>
                    {active === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-6 ml-14">
                          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-4" />
                          {typedLines.map((line, i) => (
                            <motion.p
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="text-slate-400 leading-relaxed mb-2"
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

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center flex flex-col items-center justify-center transition-all"
                >
                  <stat.icon className={`w-6 h-6 mb-2 ${stat.color}`} />
                  <span className="text-2xl font-bold text-white block">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}