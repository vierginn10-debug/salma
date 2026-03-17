import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

// --- 0. IMPORT ASSETS ---
// Pastikan file-file ini sudah ada di folder src/assets/ kamu
import folderimg from '../assets/folder.png';
import errorimg from '../assets/error.png';
import jamimg from '../assets/jam.png';
import progresimg from '../assets/progres.png';
import lampuimg from '../assets/lampu.png';
import videoimg from '../assets/video.png';

const projects = [
  {
    title: 'Digital Class Library',
    description: 'A centralized archive for Informatics materials and class assignments. Designed to help classmates access learning resources with just one click.',
    tags: ['The Foundation', 'Responsive'],
    image: <img src={folderimg} alt="folder" className="w-full h-full object-contain p-4 transition-transform hover:scale-110 duration-500" />,
    color: 'bg-[#FFD1DC]', // Pastel Pink
    github: '#',
    demo: '#',
  },
  {
    title: 'The Error Diary',
    description: 'A digital logbook documenting common errors encountered while learning VS Code and their solutions. Taming bugs one line at a time!',
    tags: ['Problem Solving', 'Logic'],
    image: <img src={errorimg} alt="error" className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500" />,
    color: 'bg-[#B2E2F2]', // Pastel Blue
    github: '#',
    demo: '#',
  },
  {
    title: 'Aceh Study Pomodoro',
    description: 'A productivity tool with a focus timer, featuring motivational quotes to help students stay disciplined during study sessions.',
    tags: ['The Logic', 'Productivity'],
    image: <img src={jamimg} alt="jam" className="w-full h-full object-contain p-4 hover:scale-110 duration-500" />,
    color: 'bg-[#C1E1C1]', // Pastel Green
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio: Learning Journal',
    description: 'This very website! A dedicated space to document every step of my coding journey from scratch.',
    tags: ['Creative', 'Workshop'],
    image: <img src={lampuimg} alt="lampu" className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500" />,
    color: 'bg-[#D7BDE2]', // Pastel Purple
    github: '#',
    demo: '#',
  },
  {
    title: 'Daily Coding Tips',
    description: 'Sharing quick programming tips and VS Code hacks for beginners through social media content.',
    tags: ['Content', 'Education'],
    image: <img src={progresimg} alt="progress" className="w-full h-full object-contain p-2" />,
    color: 'bg-[#FDFD96]', // Pastel Yellow
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Informatics MAN 1 Vlog',
    description: 'Documenting the excitement of learning technology at school through short-form video content.',
    tags: ['Vlog', 'School Life'],
    image: <img src={videoimg} alt="video" className="w-full h-full object-contain p-4 hover:scale-110 duration-500" />,
    color: 'bg-[#FFB7B2]', // Pastel Salmon
    isContent: true,
    youtube: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#FFF1F2] dark:bg-[#0A192F] relative overflow-hidden transition-colors duration-500">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.1] pointer-events-none dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(#FDA4AF 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block border-4 border-black dark:border-[#64FFDA] bg-[#FECDD3] px-6 py-2 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_#64FFDA] -rotate-1">
            <span className="font-black text-sm uppercase tracking-widest text-black text-center">Learning Progress</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic dark:text-white leading-[0.85] text-[#881337]">
            Tamed <span className="text-black dark:text-[#64FFDA]">Projects</span>
          </h2>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <motion.div 
                whileHover={{ 
                  y: -8,
                  x: -8,
                  shadow: "16px 16px 0px 0px rgba(0,0,0,1)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-[#112240] border-[5px] border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_#64FFDA] flex flex-col h-full overflow-hidden transition-all group"
              >
                
                {/* Window Top Bar */}
                <div className="border-b-[5px] border-black dark:border-white bg-[#FFF1F2] dark:bg-slate-800 p-3 flex justify-between items-center">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FFB2B2] border-2 border-black" />
                    <div className="w-3 h-3 rounded-full bg-[#FFD9B2] border-2 border-black" />
                    <div className="w-3 h-3 rounded-full bg-[#B2FFB2] border-2 border-black" />
                  </div>
                  <span className="font-mono text-[9px] font-black uppercase opacity-50 dark:text-white">taming_process.journal</span>
                </div>

                {/* Preview Area */}
                <div className={`h-44 border-b-[5px] border-black dark:border-white relative flex items-center justify-center overflow-hidden ${project.color}`}>
                   <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#000_1.5px,transparent_1px)] [background-size:10px_10px]" />
                   <span className="w-full h-full z-10 group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                   </span>
                </div>

                {/* Info Area */}
                <div className="p-6 flex flex-col flex-grow bg-white dark:bg-[#112240]">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2 text-slate-800 dark:text-white group-hover:text-[#FB7185] dark:group-hover:text-[#64FFDA] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-400 leading-tight mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-black border-2 border-black dark:border-white px-2 py-0.5 bg-[#FDFD96] dark:bg-transparent dark:text-[#64FFDA] uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-2.5 border-[3px] border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[10px] hover:bg-[#FECDD3] hover:text-black transition-all active:translate-y-1">
                        <Github size={14} /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-2.5 border-[3px] border-black dark:border-white bg-white dark:bg-transparent text-black dark:text-white font-black uppercase text-[10px] hover:bg-black hover:text-white dark:hover:bg-[#64FFDA] dark:hover:text-black transition-all active:translate-y-1">
                        <ExternalLink size={14} /> Demo
                      </a>
                    )}
                    {project.isContent && (
                      <a href={project.youtube} className="flex-1 flex items-center justify-center gap-2 py-2.5 border-[3px] border-black dark:border-white bg-[#FFB7B2] text-black font-black uppercase text-[10px] hover:bg-black hover:text-white transition-all active:translate-y-1">
                        <Play size={14} /> Watch
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}