import { motion, AnimatePresence } from "framer-motion";
import { Code2, BookOpen, Laptop, Sparkles, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [active, setActive] = useState(0); // Default buka yang pertama
  const [typedLines, setTypedLines] = useState([]);

  const stats = [
    { icon: Code2, value: "10+", label: "Learning Projects" },
    { icon: BookOpen, value: "20+", label: "Tutorials Completed" },
    { icon: Laptop, value: "100%", label: "Self-Taught" },
    { icon: Sparkles, value: "∞", label: "Curiosity" },
  ];

  const accordion = [
    {
      title: "Who I am? 🪄",
      content:
        "I am a high school student with a big dream in the digital world. I treat my computer as a laboratory where I experiment with code, turning curiosity into functional websites."
    },
    {
      title: "The Learning Process 🌱",
      content:
        "I believe the best way to learn is by doing. I spend my time studying tutorials and documentation, then I manually type every line in VS Code to truly understand how things work."
    },
    {
      title: "My Mission 🚀",
      content:
        "My mission is to bridge the gap between imagination and reality. I want to continue growing, mastering modern technologies, and sharing my journey with other learners."
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
          // Highlight keywords matching the Hero Section theme
          const highlighted = sentence
            .replace(/laboratory|code|websites|VS Code|technologies|imagination|reality/gi, 
              (match) => `<span class="text-primary font-bold decoration-primary/30 underline decoration-2">${match}</span>`);
          
          setTypedLines((prev) => [...prev, highlighted]);
          currentIndex++;
          setTimeout(typeSentence, 400);
        }
      };

      typeSentence();
    } else {
      setTypedLines([]);
    }
  }, [active]);

  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.5, ease: "circOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "circIn" } }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest mb-2 block uppercase">Inside the Lab</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Behind the Code</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* LEFT: ANIMATED ICON/IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass border border-white/10 shadow-glow flex items-center justify-center bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1] 
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <span className="text-[120px] md:text-[180px] drop-shadow-2xl">🪄</span>
                {/* Floating Particles */}
                <motion.div 
                  animate={{ y: [-20, 20], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 right-0 text-4xl"
                >✨</motion.div>
              </motion.div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl shadow-xl border border-white/20">
              <p className="font-display font-bold text-3xl text-primary">Student</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Leveling Up Daily</p>
            </div>
          </motion.div>

          {/* RIGHT: CONTENT & ACCORDION */}
          <div className="space-y-8">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-display text-2xl md:text-3xl font-bold"
            >
              Turning <span className="text-primary italic">Ideas</span> into Reality
            </motion.h3>

            <div className="space-y-4">
              {accordion.map((item, index) => (
                <div key={index} className="border-b border-white/10">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full py-4 text-left group"
                  >
                    <span className={`text-lg font-medium transition-colors ${active === index ? 'text-primary' : 'text-foreground/70'}`}>
                      {item.title}
                    </span>
                    <motion.div
                      animate={{ rotate: active === index ? 180 : 0, color: active === index ? "#3b82f6" : "#94a3b8" }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {active === index && (
                      <motion.div
                        variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-4">
                          {typedLines.map((line, i) => (
                            <motion.p
                              key={i}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-muted-foreground leading-relaxed mb-2"
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
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all"
                >
                  <stat.icon size={20} className="text-primary mb-2" />
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}