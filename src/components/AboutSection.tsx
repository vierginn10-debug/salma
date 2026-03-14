import { motion, AnimatePresence } from "framer-motion";
import { Code2, Video, Coffee, Rocket, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [active, setActive] = useState(null);
  const [typedLines, setTypedLines] = useState([]);

  const stats = [
    { icon: Code2, value: "50+", label: "Projects Selesai" },
    { icon: Video, value: "100+", label: "Video Konten" },
    // { icon: Coffee, value: "1000+", label: "Cangkir Kopi" },
    // { icon: Rocket, value: "5+", label: "Tahun Pengalaman" },
  ];

  const accordion = [
    {
      title: "Who I am?",
      content:
        "I enjoy exploring the world of technology 👨‍💻 and creativity. Through simple web projects, I continuously sharpen my skills, learn new things, and turn ideas into real applications."
    },
    {
      title: "My Journey",
      content:
        "I started learning programming because of my curiosity 🤔 about how websites work. Over time, I became interested in building web applications and improving my skills in modern technologies."
    },
  
  ];

  const toggleAccordion = (index) => {
    setActive(active === index ? null : index);
  };

  // Staggered typing with emoji & highlight keywords
  useEffect(() => {
    if (active !== null) {
      const sentences = accordion[active].content.split(". ").filter(Boolean);
      setTypedLines([]);
      let currentIndex = 0;

      const typeSentence = () => {
        if (currentIndex < sentences.length) {
          const sentence = sentences[currentIndex] + (currentIndex < sentences.length - 1 ? "." : "");
          // Wrap keywords in span
          const highlighted = sentence
            .replace(/technology|skills|projects|creativity|Content Creator/gi, (match) => `<span class="text-primary font-bold">${match}</span>`);
          setTypedLines((prev) => [...prev, highlighted]);
          currentIndex++;
          setTimeout(typeSentence, 500);
        }
      };

      typeSentence();
    } else {
      setTypedLines([]);
    }
  }, [active]);

  const accordionVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: { opacity: 1, height: "auto", y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, y: -10, transition: { duration: 0.3, ease: "easeIn" } }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Mengenal Lebih Dekat</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <motion.span
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-8xl"
                  >
                    👨‍💻
                  </motion.span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card">
                <p className="font-display font-bold text-2xl text-gradient"></p>
                <p className="text-sm text-muted-foreground"></p>
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold">Passionate Developer & Creator</h3>

            {/* ACCORDION */}
            <div className="space-y-3">
              {accordion.map((item, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full p-4 font-semibold"
                  >
                    {item.title}
                    <motion.div
                      animate={{ rotate: active === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {active === index && (
                      <motion.div
                        variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="px-4 pb-4 text-muted-foreground"
                      >
                        {typedLines.map((line, i) => (
                          <motion.p
                            key={i}
                            className="mb-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.3 }}
                            dangerouslySetInnerHTML={{ __html: line }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 glass rounded-xl text-center hover:shadow-card-hover transition-shadow"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}