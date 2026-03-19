import React, { useCallback, useEffect, useState, memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight, Sparkles, Code, Video } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

// --- ASSETS ---
import folderimg from '../assets/folder.png';
import errorimg from '../assets/error.png';
import jamimg from '../assets/jam.png';
import progresimg from '../assets/progres.png';
import lampuimg from '../assets/lampu.png';
import videoimg from '../assets/video.png';

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
    color: 'bg-[#E0FFFB]',
    category: 'code',
    github: '#',
    demo: '#',
  },
  {
    title: 'The Error Diary',
    description: 'A digital logbook documenting common errors encountered while learning VS Code.',
    tags: ['Problem Solving', 'Logic'],
    image: errorimg,
    color: 'bg-[#8EC5FC]',
    category: 'code',
    github: '#',
    demo: '#',
  },
  {
    title: 'Aceh Study Pomodoro',
    description: 'A productivity tool with a focus timer featuring motivational quotes.',
    tags: ['The Logic', 'Productivity'],
    image: jamimg,
    color: 'bg-[#E0C3FC]',
    category: 'code',
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio: Journal',
    description: 'This very website! A dedicated space to document every step of my coding journey.',
    tags: ['Creative', 'Workshop'],
    image: lampuimg,
    color: 'bg-[#ADFF2F]',
    category: 'code',
    github: '#',
    demo: '#',
  },
  {
    title: 'Daily Coding Tips',
    description: 'Sharing quick programming tips and VS Code hacks for beginners.',
    tags: ['Content', 'Education'],
    image: progresimg,
    color: 'bg-[#FF71CE]',
    category: 'content',
    youtube: '#',
  },
  {
    title: 'Informatics Vlog',
    description: 'Documenting the excitement of learning technology at school.',
    tags: ['Vlog', 'School Life'],
    image: videoimg,
    color: 'bg-[#01CDFE]',
    category: 'content',
    youtube: '#',
  },
];

const Typewriter = ({ text }: { text: string }) => {
  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: i * 0.03 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const ProjectCard = memo(({ project }: { project: Project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.2 }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-[#112240] border-[4px] border-black dark:border-white shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#64FFDA] flex flex-col h-[460px] md:h-[500px] overflow-hidden transition-all group mb-4"
  >
    <div className="border-b-[4px] border-black dark:border-white bg-white dark:bg-slate-900 p-2 flex justify-between items-center px-3">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#FF71CE] border border-black" />
        <div className="w-2 h-2 rounded-full bg-[#01CDFE] border border-black" />
        <div className="w-2 h-2 rounded-full bg-[#ADFF2F] border border-black" />
      </div>
      <span className="font-black text-[7px] uppercase dark:text-white italic tracking-widest opacity-60">sys.v26</span>
    </div>

    <div className={`h-36 md:h-40 border-b-[4px] border-black dark:border-white relative flex items-center justify-center overflow-hidden ${project.color}`}>
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:10px_10px]" />
      <img src={project.image} alt={project.title} loading="lazy" className="z-10 w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-300 group-hover:scale-110" />
    </div>

    <div className="p-4 md:p-5 flex flex-col flex-grow">
      <h3 className="text-lg md:text-xl font-black uppercase italic tracking-tighter mb-2 text-black dark:text-white group-hover:text-[#FF71CE] transition-colors line-clamp-1">
        {project.title}
      </h3>
      <p className="text-[10px] md:text-[12px] font-bold text-slate-700 dark:text-slate-400 leading-tight mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[7px] font-black border-2 border-black dark:border-white px-1.5 py-0.5 bg-white dark:bg-black text-black dark:text-[#64FFDA] uppercase">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2 mt-auto">
        {project.category === 'code' ? (
          <>
            <a href={project.github} className="flex-1 flex items-center justify-center gap-1.5 py-2 border-[2px] border-black dark:border-white bg-black dark:bg-[#64FFDA] text-white dark:text-black font-black uppercase text-[8px] active:scale-95 shadow-[3px_3px_0px_0px_#FF71CE]"><Github size={10} /> Code</a>
            <a href={project.demo} className="flex-1 flex items-center justify-center gap-1.5 py-2 border-[2px] border-black dark:border-white bg-white dark:text-black font-black uppercase text-[8px] active:scale-95 shadow-[3px_3px_0px_0px_#ADFF2F]"><ExternalLink size={10} /> Demo</a>
          </>
        ) : (
          <a href={project.youtube} className="w-full flex items-center justify-center gap-1.5 py-2 border-[2px] border-black dark:border-white bg-[#FF71CE] text-black font-black uppercase text-[8px] active:scale-95 shadow-[3px_3px_0px_0px_black]"><Play size={10} fill="black" /> Watch Video Content</a>
        )}
      </div>
    </div>
  </motion.div>
));

ProjectCard.displayName = 'ProjectCard';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'code' | 'content'>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredProjects = useMemo(() => 
    filter === 'all' ? projects : projects.filter(p => p.category === filter),
    [filter]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false, containScroll: 'trimSnaps' },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => { emblaApi.off('select', onSelect); emblaApi.off('reInit', onSelect); };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [filter, emblaApi]);

  return (
    <section id="projects" className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC] dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464] border-t-[6px] border-black dark:border-white transition-colors duration-1000">
      
      {/* Mesh Dot Matrix Pattern Background */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none transform-gpu z-0" 
           style={{ 
             backgroundImage: 'radial-gradient(#000 1.2px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }} />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADLINE */}
        <div className="text-center mb-8 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block border-[3px] border-black dark:border-[#64FFDA] bg-[#05FFA1] px-3 py-1 mb-6 shadow-[4px_4px_0px_0px_black] -rotate-1">
            <span className="font-black text-[9px] md:text-[11px] uppercase tracking-widest italic text-black flex items-center gap-2">
              <Sparkles size={10} fill="black" /> Showcase Log
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase leading-[0.85] italic text-black dark:text-white">
            <span className="block">Tamed</span>
            <div className="inline-block transform rotate-1 mt-2 px-6 py-2 border-[5px] md:border-[7px] bg-white border-black shadow-[6px_6px_0px_0px_#01CDFE] dark:bg-black dark:border-white dark:shadow-[6px_6px_0px_0px_#B967FF]">
              <span className="text-[#FF71CE] dark:text-[#64FFDA]">Projects</span>
            </div>
          </h2>
          
          <div className="max-w-[280px] md:max-w-xl mx-auto mt-8">
            <p className="text-[11px] md:text-lg font-black uppercase tracking-tight italic opacity-80 text-black dark:text-[#CCD6F6] leading-tight min-h-[40px]">
              <Typewriter text='"Crafting ideas into reality, one line of code at a time."' />
            </p>
            <div className="w-16 h-1.5 bg-[#FFFF00] dark:bg-[#64FFDA] mx-auto mt-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          </div>
        </div>

        {/* FILTER BUTTONS (Fixed ESLint any error) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Works', icon: Sparkles },
            { id: 'code', label: 'Projects', icon: Code },
            { id: 'content', label: 'Vlogs', icon: Video },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as 'all' | 'code' | 'content')}
              className={`flex items-center gap-2 px-4 py-2 border-[3px] border-black font-black uppercase text-[10px] transition-all transform active:scale-95 shadow-[4px_4px_0px_0px_black] ${
                filter === btn.id 
                ? 'bg-[#FFFF00] translate-x-1 translate-y-1 shadow-none' 
                : 'bg-white hover:bg-slate-50'
              }`}
            >
              <btn.icon size={14} /> {btn.label}
            </button>
          ))}
        </div>

        {/* CAROUSEL */}
        <div className="relative max-w-6xl mx-auto px-2">
          <div className="overflow-hidden touch-pan-x" ref={emblaRef}>
            <div className="flex ml-[-1rem]">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div 
                    key={project.title}
                    layout
                    className="flex-[0_0_88%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-[1rem]"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <button onClick={() => emblaApi?.scrollPrev()} className="absolute top-1/2 -left-12 -translate-y-1/2 bg-[#FFFF00] border-[3px] border-black p-2.5 shadow-[4px_4px_0px_0px_black] hidden xl:block active:shadow-none transition-all"><ChevronLeft size={24} className="text-black" strokeWidth={4} /></button>
          <button onClick={() => emblaApi?.scrollNext()} className="absolute top-1/2 -right-12 -translate-y-1/2 bg-[#FFFF00] border-[3px] border-black p-2.5 shadow-[4px_4px_0px_0px_black] hidden xl:block active:shadow-none transition-all"><ChevronRight size={24} className="text-black" strokeWidth={4} /></button>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-10">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2.5 transition-all duration-300 border-2 border-black dark:border-white ${selectedIndex === index ? 'w-10 bg-[#FF71CE] dark:bg-[#64FFDA]' : 'w-2.5 bg-white dark:bg-slate-800'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}