import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, memo, useMemo } from 'react';

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

const SkillBar = memo(({ name, icon, desc, level, color, delay }: SkillItem) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mb-6 relative transform-gpu">
      <AnimatePresence>
        {isActive && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -top-10 left-0 z-50 bg-black text-white p-2 border-2 border-white shadow-[3px_3px_0px_0px_#01CDFE] text-[8px] font-black uppercase italic leading-none max-w-[140px] pointer-events-none"
          >
            {desc}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-end mb-1.5 px-1 text-black dark:text-white">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="font-black uppercase italic text-[10px] tracking-tight">{name}</span>
        </div>
        <span className="font-mono text-[8px] font-black px-1.5 py-0.5 bg-black text-white dark:bg-white dark:text-black shadow-[2px_2px_0px_0px_#01CDFE]">
          {level}%
        </span>
      </div>

      <div 
        onClick={() => setIsActive(!isActive)}
        className={`relative h-6 border-[2.5px] border-black dark:border-white ${color} shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#64FFDA] overflow-hidden flex items-center transform-gpu active:scale-[0.98] transition-transform`}
      >
        <motion.div 
          initial={{ width: 0 }} 
          whileInView={{ width: `${level}%` }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay, ease: "easeOut" }} 
          className="absolute left-0 top-0 h-full bg-black dark:bg-white z-0 will-change-[width]" 
        />
        
        <div className="relative z-10 w-full px-2 flex justify-between items-center mix-blend-difference text-white">
          <span className="text-[7px] font-black uppercase tracking-widest italic">{level > 60 ? 'STABLE' : 'DEV'}</span>
          <span className="text-[7px] font-black uppercase opacity-80">PHASE {level > 40 ? '2' : '1'}</span>
        </div>
      </div>
    </div>
  );
});

SkillBar.displayName = 'SkillBar';

export default function SkillsSection() {
  const memoizedArsenal = useMemo(() => Object.entries(skillArsenal), []);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || /Android|iPhone/i.test(navigator.userAgent));
  }, []);

  return (
    <section 
      id="skills" 
      className="py-16 md:py-32 bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC] dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464] relative overflow-hidden transition-colors duration-1000"
    >
      {/* Background Dot Pattern Sederhana */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#000 1.2px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="container mx-auto px-5 relative z-10">
        
        {/* HEADER - Diselaraskan dengan AboutSection */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block border-[3px] border-black bg-[#ADFF2F] px-5 py-1.5 mb-6 shadow-[4px_4px_0px_0px_#000] -rotate-2"
          >
            <span className="font-black text-xs md:text-sm uppercase italic text-black tracking-widest">Technical Stack</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.85] italic text-black dark:text-white">
            Skill <br />
            <div className="inline-block transform-gpu rotate-1 mt-6 px-8 py-3 border-[5px] bg-white border-black shadow-[8px_8px_0px_0px_#01CDFE] dark:bg-black dark:border-white dark:shadow-[8px_8px_0px_0px_#B967FF]">
              <span className="text-[#FF71CE] dark:text-[#64FFDA]">Arsenal</span>
            </div>
          </h2>
        </div>

        {/* GRID KATEGORI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 max-w-7xl mx-auto">
          {memoizedArsenal.map(([category, items]) => (
            <div key={category} className="p-5 border-[3px] border-black dark:border-white bg-white dark:bg-[#112240] shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#64FFDA] transform-gpu">
              
              <h3 className="font-black uppercase italic text-lg mb-6 border-b-[3px] border-black dark:border-[#64FFDA] pb-2 flex items-center gap-2 text-black dark:text-white">
                <span className="text-xl">
                  {category === 'foundation' ? '🏗️' : category === 'logic' ? '🧠' : category === 'workshop' ? '🛠️' : '🚀'}
                </span>
                {category}
              </h3>

              {items.map((item, i) => (
                <SkillBar 
                  key={item.id} 
                  {...item as SkillItem} 
                  delay={isMobile ? 0 : i * 0.1} 
                />
              ))}
            </div>
          ))}
        </div>

        {/* GITHUB BUTTON */}
        <div className="flex justify-center">
          <a
            href="https://github.com/vierginn10-debug" 
            target="_blank" rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[#FFFF00] dark:bg-[#64FFDA] border-[2px] border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all transform-gpu"
          >
            <span className="text-lg text-black">🐙</span>
            <div className="flex flex-col text-left text-black font-black uppercase italic leading-tight">
              <span className="text-[10px] tracking-tight">Source Code</span>
              <span className="font-mono text-[7px] opacity-60">@vierginn10-debug</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}