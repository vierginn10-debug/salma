import React, { useCallback, useEffect, useState, memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight, Sparkles, Code, Video, LucideIcon } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

// --- ASSETS (Ganti path sesuai struktur folder kamu) ---
import folderimg from '../assets/folder.png';
import errorimg from '../assets/error.png';
import jamimg from '../assets/jam.png';
import progresimg from '../assets/progres.png';
import lampuimg from '../assets/lampu.png';
import videoimg from '../assets/video.png';

type ProjectCategory = 'all' | 'code' | 'content';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  category: 'code' | 'content';
  github?: string;
  demo?: string;
  youtube?: string;
}

const projects: Project[] = [
  {
    title: 'Digital Class Library',
    description: 'A centralized archive for Informatics materials and class assignments.',
    tags: ['The Foundation', 'Responsive'],
    image: folderimg,
    color: 'bg-[#FF71CE]',
    category: 'code',
    github: '#',
    demo: '#',
  },
  {
    title: 'The Error Diary',
    description: 'A digital logbook documenting common errors encountered while learning VS Code.',
    tags: ['Problem Solving', 'Logic'],
    image: errorimg,
    color: 'bg-[#01CDFE]',
    category: 'code',
    github: '#',
    demo: '#',
  },
  {
    title: 'Aceh Study Pomodoro',
    description: 'A productivity tool with a focus timer featuring motivational quotes.',
    tags: ['The Logic', 'Productivity'],
    image: jamimg,
    color: 'bg-[#05FFA1]',
    category: 'code',
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio: Journal',
    description: 'This very website! A dedicated space to document every step of my coding journey.',
    tags: ['Creative', 'Workshop'],
    image: lampuimg,
    color: 'bg-[#FFFB96]',
    category: 'code',
    github: '#',
    demo: '#',
  },
];

const ProjectCard = memo(({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-[#112240] border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_black] dark:shadow-[6px_6px_0px_0px_#64FFDA] flex flex-col h-[450px] md:h-[520px] overflow-hidden group mb-6 transform-gpu"
  >
    {/* Window Header Style */}
    <div className="border-b-[3px] border-black dark:border-white bg-white dark:bg-slate-900 p-2.5 flex justify-between items-center px-4">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF71CE] border-2 border-black" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#01CDFE] border-2 border-black" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#05FFA1] border-2 border-black" />
      </div>
      <span className="font-black text-[8px] uppercase dark:text-white italic tracking-widest opacity-40">Project_Files.v26</span>
    </div>

    {/* Image Section */}
    <div className={`h-40 md:h-48 border-b-[3px] border-black dark:border-white relative flex items-center justify-center overflow-hidden ${project.color}`}>
       <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
      <img src={project.image} alt={project.title} loading="lazy" className="z-10 w-24 h-24 md:w-32 md:h-32 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 transform-gpu" />
    </div>

    {/* Content Section */}
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter mb-2 text-black dark:text-white group-hover:text-[#FF71CE] transition-colors line-clamp-1">
        {project.title}
      </h3>
      <p className="text-[11px] md:text-[13px] font-bold text-slate-700 dark:text-slate-400 leading-snug mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[8px] font-black border-2 border-black dark:border-white px-2 py-0.5 bg-white dark:bg-black text-black dark:text-[#64FFDA] shadow-[2px_2px_0px_0px_black] dark:shadow-[2px_2px_0px_0px_#64FFDA]">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-2.5 border-[2.5px] border-black bg-black text-white font-black uppercase text-[9px] active:scale-95 transition-transform shadow-[3px_3px_0px_0px_rgba(255,113,206,0.5)]"><Github size={12} /> Code</a>
        <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-2.5 border-[2.5px] border-black bg-white text-black font-black uppercase text-[9px] active:scale-95 transition-transform shadow-[3px_3px_0px_0px_rgba(1,205,254,0.5)]"><ExternalLink size={12} /> Demo</a>
      </div>
    </div>
  </motion.div>
));

ProjectCard.displayName = 'ProjectCard';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const filteredProjects = useMemo(() => 
    filter === 'all' ? projects : projects.filter(p => p.category === filter),
    [filter]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false, duration: 30 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section 
      id="projects" 
      className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC] dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464] border-t-[6px] border-black dark:border-white transition-colors duration-1000"
    >
      {/* Background Dot Pattern Sederhana */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#000 1.2px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-5 relative z-10">
        
        {/* HEADER - Diselaraskan dengan AboutSection */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-block border-[3px] border-black bg-[#ADFF2F] px-5 py-1.5 mb-6 shadow-[4px_4px_0px_0px_black] -rotate-2">
            <span className="font-black text-xs md:text-sm uppercase italic text-black tracking-widest flex items-center gap-2">
              <Sparkles size={14} fill="black" /> Selected Works
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.85] italic text-black dark:text-white">
            Creative <br />
            <div className="inline-block transform-gpu rotate-1 mt-6 px-8 py-3 border-[5px] bg-white border-black shadow-[8px_8px_0px_0px_#01CDFE] dark:bg-black dark:border-white dark:shadow-[8px_8px_0px_0px_#B967FF]">
              <span className="text-[#FF71CE] dark:text-[#64FFDA]">Projects</span>
            </div>
          </h2>
        </div>

        {/* CAROUSEL SECTION */}
        <div className="relative max-w-6xl mx-auto px-2">
          <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
            <div className="flex ml-[-1rem]">
              {filteredProjects.map((project, idx) => (
                <div 
                  key={project.title + idx}
                  className="flex-[0_0_90%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-[1rem] transform-gpu"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons (Desktop Only) */}
          <button onClick={() => emblaApi?.scrollPrev()} className="absolute top-1/2 -left-16 -translate-y-1/2 bg-[#FFFF00] border-[3px] border-black p-3 hidden xl:block shadow-[4px_4px_0px_0px_black] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"><ChevronLeft size={24} /></button>
          <button onClick={() => emblaApi?.scrollNext()} className="absolute top-1/2 -right-16 -translate-y-1/2 bg-[#FFFF00] border-[3px] border-black p-3 hidden xl:block shadow-[4px_4px_0px_0px_black] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"><ChevronRight size={24} /></button>
        </div>

        {/* DOTS INDICATOR */}
        <div className="flex justify-center gap-3 mt-10">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-3 rounded-full transition-all duration-300 border-2 border-black ${selectedIndex === index ? 'w-10 bg-[#FF71CE]' : 'w-3 bg-white'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}