import { motion } from 'framer-motion';

// 1. DATA SKILLS (Tetap konsisten dengan warna aksen)
const skillArsenal = {
  foundation: [
    { name: 'HTML5', icon: '🧱', desc: 'The architect crafting the digital world’s structure.', level: 0, color: 'bg-[#FF1493]' },
    { name: 'CSS3', icon: '🎨', desc: 'The painter adding color and style to every corner.', level: 10, color: 'bg-[#FF1493]' },
    { name: 'Tailwind CSS', icon: '⚡', desc: 'Lightning-fast tool for building modern designs.', level: 30, color: 'bg-[#FF1493]' },
  ],
  logic: [
    { name: 'Node.js', icon: '⚙️', desc: 'The engine behind the scenes managing everything.', level: 20, color: 'bg-[#00FFFF]' },
    { name: 'Python', icon: '🐍', desc: 'The logic master for intelligent commands.', level: 5, color: 'bg-[#00FFFF]' },
    { name: 'JavaScript', icon: '⚡', desc: 'Breathing life into websites for interaction.', level: 0, color: 'bg-[#00FFFF]' },
  ],
  workshop: [
    { name: 'VS Code', icon: '💻', desc: 'The main HQ where ideas transform into lines of code.', level: 55, color: 'bg-[#FFFF00]' },
    { name: 'Git', icon: '🐙', desc: 'A time machine to track every development step.', level: 50, color: 'bg-[#FFFF00]' },
    { name: 'DevTools', icon: '🔍', desc: 'The magnifying glass for dissecting and debugging.', level: 5, color: 'bg-[#FFFF00]' },
  ],
  human: [
    { name: 'Fast Learner', icon: '🚀', desc: 'Quickly grasping new concepts from teachers.', level: 95, color: 'bg-[#ADFF2F]' },
    { name: 'Documentation', icon: '📝', desc: 'Consistently logging progress—proof is this web!', level: 100, color: 'bg-[#ADFF2F]' },
    { name: 'Collaboration', icon: '🤝', desc: 'Thriving in team discussions and group projects.', level: 90, color: 'bg-[#ADFF2F]' },
  ],
};

// 2. DYNAMIC SKILLBAR (Auto-adjust for Light/Dark)
function SkillBar({ name, icon, desc, level, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-8 group"
    >
      <div className="flex justify-between items-end mb-2 px-1 text-black dark:text-white">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="font-black uppercase italic text-sm tracking-tight">{name}</span>
        </div>
        <span className="font-mono text-[10px] font-black bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]">
          {level}%
        </span>
      </div>

      <div className={`relative h-6 border-4 border-black dark:border-white ${color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] overflow-hidden flex items-center mb-2`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute left-0 top-0 h-full bg-black dark:bg-white z-0"
        />
        <div className="relative z-10 w-full px-2 flex justify-end mix-blend-difference text-white">
          <span className="text-[8px] font-black uppercase tracking-widest opacity-80">
            {level > 80 ? 'Mastered' : level > 40 ? 'Learning' : 'Sprouting'}
          </span>
        </div>
      </div>

      <div className="px-1 text-black/70 dark:text-white/50">
        <p className="text-[11px] font-bold italic leading-snug border-l-2 border-current pl-2 py-1">
          "{desc}"
        </p>
      </div>
    </motion.div>
  );
}

// 3. MAIN SECTION (Responsive Background)
export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-36 bg-[#E6E6FA] dark:bg-[#0F0F0F] border-t-8 border-black dark:border-white transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Headline */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block border-4 border-black dark:border-white bg-white dark:bg-black px-8 md:px-12 py-5 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_#ADFF2F] -rotate-1 mb-8"
          >
            <h1 className="font-black uppercase italic text-4xl md:text-7xl tracking-tighter leading-none text-black dark:text-white">
              FROM ZERO TO CODE
            </h1>
          </motion.div>
          
          <div className="max-w-3xl mx-auto px-4 mt-4">
            <p className="font-black uppercase italic text-black/80 dark:text-white/90 text-lg md:text-xl tracking-tight mb-4">
              "Not a master yet, but definitely not at zero anymore."
            </p>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-6"></div>
            <p className="font-medium text-black/60 dark:text-white/50 leading-relaxed text-sm md:text-lg italic">
              Documenting my journey of mastering the basics, tackling challenges, and growing as a student coder.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {Object.entries(skillArsenal).map(([category, items], idx) => (
            <div key={category} className="p-6 border-4 border-black dark:border-white bg-white dark:bg-[#1A1A1A] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-none transition-all duration-300">
              <h3 className="font-black uppercase italic text-xl mb-8 border-b-4 border-black dark:border-white pb-2 flex items-center gap-2 text-black dark:text-white">
                {category === 'foundation' ? '🏗️ Foundation' : 
                 category === 'logic' ? '🐍 Logic' : 
                 category === 'workshop' ? '🛠️ Workshop' : '🚀 Human Skill'}
              </h3>
              {items.map((item, i) => (
                <SkillBar key={item.name} {...item} delay={(idx * 0.1) + (i * 0.1)} />
              ))}
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="flex justify-center mt-20">
          <motion.a
            href="https://github.com/USERNAME_KAMU" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-6 bg-[#FFFF00] dark:bg-[#ADFF2F] border-8 border-black dark:border-white px-10 py-6 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer"
          >
            <span className="text-5xl md:text-6xl group-hover:rotate-12 transition-transform duration-300 filter dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] text-black">
              🐙
            </span>
            <div className="flex flex-col text-left text-black font-black uppercase italic">
              <span className="text-3xl md:text-4xl tracking-tighter leading-none">
                View Original Code
              </span>
              <span className="font-mono text-[10px] md:text-xs tracking-widest opacity-60 mt-2">
                Verify my progress on GitHub →
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}