import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// 1. DATA SKILLS LENGKAP
const skillArsenal = {
  foundation: [
    { id: 'html', name: 'HTML5', icon: '🧱', desc: 'The architect crafting the digital world’s structure.', level: 30, color: 'bg-[#FF71CE]', type: 'solid' },
    { id: 'css', name: 'CSS3', icon: '🎨', desc: 'The painter adding color and style to every corner.', level: 25, color: 'bg-[#FF71CE]', type: 'solid' },
    { id: 'tw', name: 'Tailwind CSS', icon: '⚡', desc: 'Lightning-fast tool for building modern designs.', level: 35, color: 'bg-[#FF71CE]', type: 'solid' },
  ],
  logic: [
    { id: 'js', name: 'JavaScript', icon: '⚡', desc: 'Breathing life into websites for interaction.', level: 20, color: 'bg-[#01CDFE]', type: 'pulse' },
    { id: 'node', name: 'Node.js', icon: '⚙️', desc: 'The engine behind the scenes managing everything.', level: 30, color: 'bg-[#01CDFE]', type: 'pulse' },
    { id: 'py', name: 'Python', icon: '🐍', desc: 'The logic master for intelligent commands.', level: 25, color: 'bg-[#01CDFE]', type: 'pulse' },
  ],
  workshop: [
    { id: 'vs', name: 'VS Code', icon: '💻', desc: 'The main HQ where ideas transform into lines of code.', level: 45, color: 'bg-[#FFFF00]', type: 'steady' },
    { id: 'git', name: 'Git', icon: '🐙', desc: 'A time machine to track every development step.', level: 45, color: 'bg-[#FFFF00]', type: 'steady' },
    { id: 'dev', name: 'DevTools', icon: '🔍', desc: 'The magnifying glass for debugging.', level: 65, color: 'bg-[#FFFF00]', type: 'steady' },
  ],
  human: [
    { id: 'learn', name: 'Fast Learner', icon: '🚀', desc: 'Quickly grasping new concepts.', level: 55, color: 'bg-[#64FFDA]', type: 'partial' },
    { id: 'doc', name: 'Documentation', icon: '📝', desc: 'Consistently logging progress.', level: 65, color: 'bg-[#64FFDA]', type: 'partial' },
    { id: 'collab', name: 'Collaboration', icon: '🤝', desc: 'Thriving in team discussions.', level: 70, color: 'bg-[#64FFDA]', type: 'partial' },
  ],
};

function SkillBar({ name, icon, desc, level, color, type, delay }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="mb-8 group relative"
      onClick={() => setIsActive(!isActive)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: -5 }}
            exit={{ opacity: 0 }}
            className="absolute -top-12 left-0 z-50 bg-black dark:bg-[#112240] text-white p-2 border-2 border-white dark:border-[#64FFDA] shadow-[3px_3px_0px_#01CDFE] dark:shadow-[3px_3px_0px_#B967FF] text-[8px] font-black uppercase italic pointer-events-none"
          >
            {desc}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-end mb-2 px-1 text-black dark:text-white">
        <div className="flex items-center gap-2 uppercase italic font-black text-[10px] tracking-tighter">
          <span>{icon} {name}</span>
        </div>
        <span className="font-mono text-[9px] font-black bg-black text-white px-1.5 py-0.5 rounded shadow-[2px_2px_0px_#01CDFE] dark:shadow-[2px_2px_0px_#B967FF]">
          {level}%
        </span>
      </div>

      <div className={`relative h-7 border-[3px] border-black dark:border-white ${color} transition-all duration-300 z-10
        ${isActive ? 'shadow-[6px_6px_0px_#000] scale-[1.02]' : 'shadow-[4px_4px_0px_#000]'}`}>
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} transition={{ duration: 1 }} className="absolute left-0 top-0 h-full bg-black dark:bg-white" />
        <div className="relative z-10 w-full px-3 flex justify-between items-center mix-blend-difference text-white font-black italic text-[8px]">
          <span>{level > 50 ? 'ADVANCED' : 'LEARNING'}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-36 border-t-[8px] border-black dark:border-white bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC] dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464] overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-5 text-center">
        
        {/* HEADLINE */}
        <div className="mb-16 flex flex-col items-center">
          
          {/* SKILL - Solid Hitam/Putih Tanpa Border */}
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-black uppercase italic text-6xl md:text-8xl tracking-tighter text-black dark:text-white leading-none mb-4"
          >
            SKILL
          </motion.h2>

          {/* ARSENAL - Bingkai Ganda Rapat Kanan-Bawah & Border Teks Khusus */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative transform -rotate-2 group"
          >
             <div className={`
                px-10 md:px-14 py-4 md:py-6
                bg-white dark:bg-black
                border-[6px] border-black dark:border-white
                shadow-[6px_6px_0px_0px_#01CDFE] dark:shadow-[6px_6px_0px_0px_#B967FF]
                transition-all duration-500
             `}>
                <span 
                  className="font-black uppercase italic text-5xl md:text-8xl tracking-tighter text-[#FF71CE] dark:text-[#64FFDA] transition-all duration-500"
                  style={{
                    // Border tulisan Cyan di Light, Ungu di Dark
                    WebkitTextStroke: '1.5px var(--arsenal-text-border)',
                    paintOrder: 'stroke fill'
                  }}
                >
                  ARSENAL
                  <style>{`
                    :root { --arsenal-text-border: #01CDFE; }
                    .dark { --arsenal-text-border: #B967FF; }
                  `}</style>
                </span>
             </div>
          </motion.div>
        </div>

        {/* KUTIPAN BERSIH */}
        <div className="mb-24">
          <p className="font-black uppercase italic text-black/80 dark:text-[#64FFDA]/80 text-sm md:text-xl tracking-tight opacity-80">
            "Not a master yet, but definitely not at zero anymore."
          </p>
          <div className="w-16 h-1 bg-[#01CDFE] dark:bg-[#64FFDA] mx-auto mt-3 transition-colors"></div>
        </div>

        {/* GRID SKILLS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 text-left">
          {Object.entries(skillArsenal).map(([category, items], idx) => (
            <div key={category} className="p-6 border-4 border-black dark:border-white bg-white dark:bg-[#112240] shadow-[10px_10px_0px_#000] hover:-translate-y-1 transition-all">
              <h3 className="font-black uppercase italic text-xl mb-8 border-b-4 border-black dark:border-[#64FFDA] pb-2 text-black dark:text-white flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#01CDFE] dark:bg-[#64FFDA]"></span> {category}
              </h3>
              {items.map((item, i) => (
                <SkillBar key={item.id} {...item} delay={(idx * 0.1) + (i * 0.1)} />
              ))}
            </div>
          ))}
        </div>

        {/* GITHUB BUTTON */}
        <div className="flex justify-center">
          <motion.a
            href="https://github.com/vierginn10-debug" 
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-[#FFFF00] dark:bg-[#64FFDA] border-[4px] border-black dark:border-white px-6 py-4 shadow-[6px_6px_0px_#000] transition-all"
          >
            <span className="text-2xl text-black">🐙</span>
            <div className="flex flex-col text-left text-black font-black uppercase italic leading-none">
              <span className="text-lg tracking-tighter">Inspect Code</span>
              <span className="font-mono text-[8px] tracking-widest opacity-60">GitHub @vierginn10-debug</span>
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}