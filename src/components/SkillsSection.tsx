import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// 1. DATA SKILLS (Ditambahkan ID untuk state management)
const skillArsenal = {
  foundation: [
    { id: 'html', name: 'HTML5', icon: '🧱', desc: 'The architect crafting the digital world’s structure.', level: 90, color: 'bg-[#FF1493]' },
    { id: 'css', name: 'CSS3', icon: '🎨', desc: 'The painter adding color and style to every corner.', level: 85, color: 'bg-[#FF1493]' },
    { id: 'tw', name: 'Tailwind CSS', icon: '⚡', desc: 'Lightning-fast tool for building modern designs.', level: 80, color: 'bg-[#FF1493]' },
  ],
  logic: [
    { id: 'node', name: 'Node.js', icon: '⚙️', desc: 'The engine behind the scenes managing everything.', level: 40, color: 'bg-[#00FFFF]' },
    { id: 'py', name: 'Python', icon: '🐍', desc: 'The logic master for intelligent commands.', level: 30, color: 'bg-[#00FFFF]' },
    { id: 'js', name: 'JavaScript', icon: '⚡', desc: 'Breathing life into websites for interaction.', level: 65, color: 'bg-[#00FFFF]' },
  ],
  workshop: [
    { id: 'vs', name: 'VS Code', icon: '💻', desc: 'The main HQ where ideas transform into lines of code.', level: 95, color: 'bg-[#FFFF00]' },
    { id: 'git', name: 'Git', icon: '🐙', desc: 'A time machine to track every development step.', level: 70, color: 'bg-[#FFFF00]' },
    { id: 'dev', name: 'DevTools', icon: '🔍', desc: 'The magnifying glass for dissecting and debugging.', level: 60, color: 'bg-[#FFFF00]' },
  ],
  human: [
    { id: 'learn', name: 'Fast Learner', icon: '🚀', desc: 'Quickly grasping new concepts from teachers.', level: 95, color: 'bg-[#ADFF2F]' },
    { id: 'doc', name: 'Documentation', icon: '📝', desc: 'Consistently logging progress—proof is this web!', level: 100, color: 'bg-[#ADFF2F]' },
    { id: 'collab', name: 'Collaboration', icon: '🤝', desc: 'Thriving in team discussions and group projects.', level: 90, color: 'bg-[#ADFF2F]' },
  ],
};

// 2. KOMPONEN SKILLBAR DENGAN TOOLTIP & INTERACTIVE HOVER
function SkillBar({ name, icon, desc, level, color, delay, id }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-8 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* TOOLTIP POPUP */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: -10 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute -top-16 left-0 z-30 bg-black dark:bg-[#64FFDA] text-white dark:text-black p-3 border-2 border-white dark:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[10px] font-black uppercase italic leading-tight max-w-[200px]"
          >
            {desc}
            <div className="absolute -bottom-2 left-4 w-3 h-3 bg-inherit border-r-2 border-b-2 border-white dark:border-black rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-end mb-2 px-1 text-black dark:text-white">
        <div className="flex items-center gap-2">
          <span className="text-xl group-hover:scale-125 transition-transform duration-300">{icon}</span>
          <span className="font-black uppercase italic text-sm tracking-tight">{name}</span>
        </div>
        <span className="font-mono text-[10px] font-black bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {level}%
        </span>
      </div>

      {/* THE PROGRESS BAR */}
      <div className={`relative h-7 border-4 border-black dark:border-white ${color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(100,255,218,0.2)] overflow-hidden flex items-center`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute left-0 top-0 h-full bg-black dark:bg-white z-0"
        />
        
        {/* MIX BLEND TEXT */}
        <div className="relative z-10 w-full px-3 flex justify-between items-center mix-blend-difference text-white">
           <span className="text-[9px] font-black uppercase tracking-widest italic">
            {level > 80 ? 'STABLE' : 'DEVELOPING'}
          </span>
          <span className="text-[8px] font-black uppercase opacity-80">
            {level > 80 ? 'Mastery' : level > 40 ? 'Phase 2' : 'Phase 1'}
          </span>
        </div>
      </div>

      {/* GLOW EFFECT ON HOVER */}
      <div className={`absolute inset-0 -z-10 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${color}`} />
    </motion.div>
  );
}

// 3. MAIN SECTION
export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-36 bg-[#E6E6FA] dark:bg-[#0F0F0F] border-t-8 border-black dark:border-white transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Headline */}
        <div className="text-center mb-24 relative">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block border-4 border-black dark:border-white bg-white dark:bg-black px-8 md:px-12 py-5 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_#64FFDA] -rotate-1 mb-8 relative z-10"
          >
            <h1 className="font-black uppercase italic text-4xl md:text-7xl tracking-tighter leading-none text-black dark:text-white">
              SKILL <span className="text-[#FF1493] dark:text-[#64FFDA]">ARSENAL</span>
            </h1>
          </motion.div>
          
          <div className="max-w-3xl mx-auto px-4 mt-4">
            <p className="font-black uppercase italic text-black/80 dark:text-[#8892B0] text-lg md:text-xl tracking-tight mb-4">
              "Not a master yet, but definitely not at zero anymore."
            </p>
            <div className="w-24 h-2 bg-black dark:bg-[#64FFDA] mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
          </div>
        </div>

        {/* Grid Kategorisasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {Object.entries(skillArsenal).map(([category, items], idx) => (
            <div key={category} className="group p-6 border-4 border-black dark:border-white bg-white dark:bg-[#112240] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(100,255,218,0.1)] hover:translate-y-[-5px] transition-all duration-300">
              <h3 className="font-black uppercase italic text-xl mb-8 border-b-4 border-black dark:border-[#64FFDA] pb-2 flex items-center gap-2 text-black dark:text-white">
                {category === 'foundation' ? '🏗️ Foundation' : 
                 category === 'logic' ? '🐍 Logic' : 
                 category === 'workshop' ? '🛠️ Workshop' : '🚀 Human'}
              </h3>
              {items.map((item, i) => (
                <SkillBar key={item.id} {...item} delay={(idx * 0.1) + (i * 0.1)} />
              ))}
            </div>
          ))}
        </div>

        {/* GitHub Button - Tautan sudah disesuaikan ke GitHub Salma */}
        <div className="flex justify-center mt-20">
          <motion.a
            href="https://github.com/vierginn10-debug" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-6 bg-[#FFFF00] dark:bg-[#64FFDA] border-8 border-black dark:border-white px-10 py-6 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(100,255,218,0.2)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer"
          >
            <span className="text-5xl md:text-6xl group-hover:rotate-12 transition-transform duration-300 text-black">
              🐙
            </span>
            <div className="flex flex-col text-left text-black font-black uppercase italic">
              <span className="text-3xl md:text-4xl tracking-tighter leading-none">
                Inspect Source Code
              </span>
              <span className="font-mono text-[10px] md:text-xs tracking-widest opacity-60 mt-2">
                Verify my progress on GitHub @vierginn10-debug →
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}