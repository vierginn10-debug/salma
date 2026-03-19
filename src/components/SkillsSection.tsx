import { motion, AnimatePresence } from 'framer-motion';
import { useState, memo, useMemo } from 'react';

// 1. DEFINISI TIPE
interface SkillItem {
  id: string;
  name: string;
  icon: string;
  desc: string;
  level: number;
  color: string;
  type: 'solid' | 'pulse' | 'partial';
  delay: number;
}

// 2. DATA SKILLS
const skillArsenal: Record<string, Omit<SkillItem, 'delay'>[]> = {
  foundation: [
    { id: 'html', name: 'HTML5', icon: '🧱', desc: 'The architect crafting the digital world’s structure.', level: 30, color: 'bg-[#FF71CE]', type: 'solid' },
    { id: 'css', name: 'CSS3', icon: '🎨', desc: 'The painter adding color and style to every corner.', level: 25, color: 'bg-[#FF71CE]', type: 'solid' },
    { id: 'tw', name: 'Tailwind CSS', icon: '⚡', desc: 'Lightning-fast tool for building modern designs.', level: 35, color: 'bg-[#FF71CE]', type: 'solid' },
  ],
  logic: [
    { id: 'node', name: 'Node.js', icon: '⚙️', desc: 'The engine behind the scenes managing everything.', level: 30, color: 'bg-[#01CDFE]', type: 'pulse' },
    { id: 'py', name: 'Python', icon: '🐍', desc: 'The logic master for intelligent commands.', level: 25, color: 'bg-[#01CDFE]', type: 'pulse' },
    { id: 'js', name: 'JavaScript', icon: '⚡', desc: 'Breathing life into websites for interaction.', level: 20, color: 'bg-[#01CDFE]', type: 'pulse' },
  ],
  workshop: [
    { id: 'vs', name: 'VS Code', icon: '💻', desc: 'The main HQ where ideas transform into lines of code.', level: 45, color: 'bg-[#FFFF00]', type: 'solid' },
    { id: 'git', name: 'Git', icon: '🐙', desc: 'A time machine to track every development step.', level: 45, color: 'bg-[#FFFF00]', type: 'solid' },
    { id: 'dev', name: 'DevTools', icon: '🔍', desc: 'The magnifying glass for dissecting and debugging.', level: 65, color: 'bg-[#FFFF00]', type: 'solid' },
  ],
  human: [
    { id: 'learn', name: 'Fast Learner', icon: '🚀', desc: 'Quickly grasping new concepts from teachers.', level: 55, color: 'bg-[#ADFF2F]', type: 'partial' },
    { id: 'doc', name: 'Documentation', icon: '📝', desc: 'Consistently logging progress—proof is this web!', level: 65, color: 'bg-[#ADFF2F]', type: 'partial' },
    { id: 'collab', name: 'Collaboration', icon: '🤝', desc: 'Thriving in team discussions and group projects.', level: 70, color: 'bg-[#ADFF2F]', type: 'partial' },
  ],
};

const SkillBar = memo(({ name, icon, desc, level, color, type, delay }: SkillItem) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5px" }} // Margin diperkecil agar trigger lebih cepat
      transition={{ duration: 0.3, delay: delay > 0.5 ? 0.5 : delay }} // Batasi delay maksimal agar tidak terasa macet
      className="mb-8 group relative touch-none select-none" // Anti-getar & anti-select teks saat disentuh
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute -top-14 left-0 z-50 bg-black dark:bg-[#112240] text-white p-2 border-2 border-white shadow-[4px_4px_0px_0px_#01CDFE] text-[9px] font-black uppercase italic leading-tight max-w-[180px] pointer-events-none will-change-transform"
          >
            {desc}
            <div className="absolute -bottom-2 left-4 w-2 h-2 bg-inherit border-r-2 border-b-2 border-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-end mb-2 px-1 text-black dark:text-white">
        <div className="flex items-center gap-2">
          <span className={`text-xl transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>{icon}</span>
          <span className="font-black uppercase italic text-xs tracking-tight">{name}</span>
        </div>
        <span className="font-mono text-[9px] font-black px-1.5 py-0.5 rounded bg-black text-white dark:bg-white dark:text-black shadow-[2px_2px_0px_0px_#01CDFE]">
          {level}%
        </span>
      </div>

      <div className={`relative h-7 border-[3px] border-black dark:border-white ${color} transition-all duration-200 z-10
        ${isActive ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[3px_3px_0px_0px_#000]'} 
        overflow-hidden flex items-center transform-gpu`}>
        <motion.div 
          initial={{ width: 0 }} 
          whileInView={{ width: `${level}%` }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} 
          className="absolute left-0 top-0 h-full bg-black dark:bg-white z-0 will-change-[width]" 
        />
        <div className="relative z-10 w-full px-3 flex justify-between items-center mix-blend-difference text-white">
          <span className="text-[8px] font-black uppercase tracking-widest italic">{level > 80 ? 'STABLE' : 'DEVELOPING'}</span>
          <span className="text-[8px] font-black uppercase opacity-80">{level > 40 ? 'Phase 2' : 'Phase 1'}</span>
        </div>
      </div>

      {/* Glow effect hanya muncul jika aktif, menggunakan opacity rendah untuk performa */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 -z-10 blur-md ${color} pointer-events-none transform-gpu`}
            style={{ willChange: 'opacity' }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
});

SkillBar.displayName = 'SkillBar';

export default function SkillsSection() {
  const memoizedArsenal = useMemo(() => Object.entries(skillArsenal), []);

  return (
    <section id="skills" className="py-20 md:py-44 border-t-[8px] border-black dark:border-white transition-colors duration-500 overflow-hidden bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC] dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464]">
      <div className="container mx-auto px-5">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-32"
        >
          <div className="inline-block border-[3px] border-black dark:border-[#64FFDA] bg-[#05FFA1] px-4 py-1.5 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_#64FFDA] -rotate-2">
            <span className="font-black text-sm md:text-base uppercase tracking-widest italic text-black">Tech Stack</span>
          </div>
          
          <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter uppercase leading-[0.85] italic">
            <span className="text-black dark:text-white">Skill</span>
            <br />
            
            <motion.div 
              className="inline-block transform rotate-1 mt-6 px-8 py-3 border-[6px] 
                         bg-white border-black shadow-[6px_6px_0px_0px_#01CDFE]
                         dark:bg-black dark:border-white dark:shadow-[6px_6px_0px_0px_#B967FF]"
            >
              <span className="text-[#FF71CE] dark:text-[#64FFDA]">
                Arsenal
              </span>
            </motion.div>
          </h2>
          
          <div className="max-w-3xl mx-auto mt-10">
            <p className="text-xl md:text-3xl font-black uppercase leading-tight italic text-black dark:text-[#CCD6F6] tracking-tight">
              "Not a master yet, but definitely not at zero anymore."
            </p>
          </div>
        </motion.div>

        {/* GRID KATEGORI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-24">
          {memoizedArsenal.map(([category, items], idx) => (
            <div key={category} className="p-6 border-4 border-black dark:border-white bg-white dark:bg-[#112240] shadow-[10px_10px_0px_0px_#000] relative group transition-transform hover:-translate-y-1 will-change-transform">
              <h3 className="font-black uppercase italic text-2xl mb-10 border-b-4 border-black dark:border-[#64FFDA] pb-3 flex items-center gap-3 text-black dark:text-white">
                <span className="text-3xl">
                  {category === 'foundation' ? '🏗️' : category === 'logic' ? '🐍' : category === 'workshop' ? '🛠️' : '🚀'}
                </span>
                {category}
              </h3>
              {items.map((item, i) => (
                <SkillBar 
                  key={item.id} 
                  {...item} 
                  delay={(idx * 0.05) + (i * 0.05)} 
                />
              ))}
            </div>
          ))}
        </div>

        {/* GITHUB BUTTON */}
        <div className="flex justify-center mt-6">
          <motion.a
            href="https://github.com/vierginn10-debug" 
            target="_blank" rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 bg-[#FFFF00] dark:bg-[#64FFDA] border-[4px] border-black dark:border-white px-5 py-3 shadow-[6px_6px_0px_0px_#01CDFE] dark:shadow-[6px_6px_0px_0px_#B967FF] cursor-pointer"
          >
            <span className="text-2xl text-black">🐙</span>
            <div className="flex flex-col text-left text-black font-black uppercase italic leading-tight">
              <span className="text-sm md:text-base tracking-tighter text-black">Inspect Source Code</span>
              <span className="font-mono text-[8px] opacity-70 text-black">@vierginn10-debug →</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}