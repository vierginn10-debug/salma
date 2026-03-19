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
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.3, delay }}
      className="mb-8 group relative touch-none"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div 
            initial={{ opacity: 0, y: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: -5, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute -top-14 left-0 z-50 bg-black dark:bg-[#112240] text-white p-2 border-2 border-white shadow-[4px_4px_0px_0px_#01CDFE] text-[9px] font-black uppercase italic leading-tight max-w-[180px] pointer-events-none transform-gpu"
          >
            {desc}
            <div className="absolute -bottom-2 left-4 w-2 h-2 bg-inherit border-r-2 border-b-2 border-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-end mb-2 px-1 text-black dark:text-white">
        <div className="flex items-center gap-2">
          <span className={`text-xl transition-transform duration-300 ${isActive ? 'scale-125' : ''}`}>{icon}</span>
          <span className="font-black uppercase italic text-xs tracking-tight">{name}</span>
        </div>
        <span className={`font-mono text-[9px] font-black px-1.5 py-0.5 rounded shadow-[2px_2px_0px_0px_#01CDFE] transition-colors ${isActive ? 'bg-[#01CDFE] text-black' : 'bg-black text-white dark:bg-white dark:text-black'}`}>
          {level}%
        </span>
      </div>

      <div className={`relative h-7 border-[3px] border-black dark:border-white ${color} transition-all duration-300 z-10
        ${isActive ? 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] scale-[1.02]' : 'shadow-[4px_4px_0px_0px_#000]'} 
        overflow-hidden flex items-center transform-gpu`}>
        <motion.div 
          initial={{ width: 0 }} 
          whileInView={{ width: `${level}%` }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: delay + 0.1, ease: "easeOut" }} 
          className="absolute left-0 top-0 h-full bg-black dark:bg-white z-0 will-change-[width]" 
        />
        <div className="relative z-10 w-full px-3 flex justify-between items-center mix-blend-difference text-white">
          <span className="text-[8px] font-black uppercase tracking-widest italic">{level > 80 ? 'STABLE' : 'DEVELOPING'}</span>
          <span className="text-[8px] font-black uppercase opacity-80">{level > 40 ? 'Phase 2' : 'Phase 1'}</span>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={type === 'pulse' ? { opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] } : { opacity: 0.5, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={type === 'pulse' ? { duration: 2, repeat: Infinity } : { duration: 0.3 }}
            className={`absolute inset-0 -z-10 blur-lg ${color} pointer-events-none transform-gpu`}
            style={{
              clipPath: type === 'partial' ? 'polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)' : 'none',
              width: type === 'pulse' ? '110%' : '100%',
              left: type === 'pulse' ? '-5%' : '0',
              willChange: 'transform, opacity'
            }}
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
    <section 
      id="skills" 
      className="py-24 md:py-44 border-t-[8px] border-black dark:border-white relative overflow-hidden bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC] dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464] transition-colors duration-1000"
    >
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none transform-gpu z-0" 
           style={{ 
             backgroundImage: 'radial-gradient(#000 1.2px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }} />

      <div className="container mx-auto px-5 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block border-[3px] border-black bg-[#ADFF2F] px-4 py-1.5 mb-8 shadow-[4px_4px_0px_0px_#000] -rotate-2"
          >
            <span className="font-black text-[10px] md:text-xs uppercase tracking-widest italic text-black">Technical Stack</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85] italic text-black dark:text-white transition-colors">
            <span className="block">Skill</span>
            <div className="inline-block transform-gpu rotate-1 mt-6 px-8 py-3 border-[5px] 
                           bg-white border-black shadow-[8px_8px_0px_0px_#01CDFE]
                           dark:bg-black dark:border-white dark:shadow-[8px_8px_0px_0px_#B967FF]">
              <span className="text-[#FF71CE] dark:text-[#64FFDA]">
                Arsenal
              </span>
            </div>
          </h2>
          
          <p className="max-w-xl mx-auto mt-10 text-lg md:text-2xl font-black uppercase italic leading-tight text-black dark:text-[#CCD6F6]">
            "Not a master yet, but definitely not at zero anymore."
          </p>
        </div>

        {/* GRID KATEGORI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-24">
          {memoizedArsenal.map(([category, items], idx) => (
            <div key={category} className="p-7 border-4 border-black dark:border-white bg-white dark:bg-[#112240] shadow-[10px_10px_0px_0px_#000] dark:shadow-[10px_10px_0px_0px_#64FFDA] relative group transition-transform hover:-translate-y-2 transform-gpu">
              
              <h3 className="font-black uppercase italic text-2xl mb-12 border-b-4 border-black dark:border-[#64FFDA] pb-4 flex items-center justify-center gap-3 text-center text-black dark:text-white">
                <span className="text-3xl filter drop-shadow-[2px_2px_0px_#01CDFE]">
                  {category === 'foundation' ? '🏗️' : category === 'logic' ? '🧠' : category === 'workshop' ? '🛠️' : '🚀'}
                </span>
                {category}
              </h3>

              {items.map((item, i) => (
                <SkillBar 
                  key={item.id} 
                  {...item as SkillItem} 
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 bg-[#FFFF00] dark:bg-[#64FFDA] border-[3px] border-black dark:border-white px-5 py-2.5 shadow-[4px_4px_0px_0px_#01CDFE] dark:shadow-[4px_4px_0px_0px_#B967FF] cursor-pointer transform-gpu transition-all"
          >
            <span className="text-xl text-black group-hover:rotate-12 transition-transform">🐙</span>
            <div className="flex flex-col text-left text-black font-black uppercase italic leading-none">
              <span className="text-xs md:text-sm tracking-tight">Inspect Source Code</span>
              <span className="font-mono text-[8px] opacity-60">@vierginn10-debug →</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}