import React, { useCallback, useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel'; 
import Autoplay from 'embla-carousel-autoplay';

// --- IMPORT ASSETS ---
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
  github?: string;
  demo?: string;
  isContent?: boolean;
  youtube?: string;
}

const projects: Project[] = [
  {
    title: 'Digital Class Library',
    description: 'A centralized archive for Informatics materials and class assignments. Designed to help classmates access learning resources.',
    tags: ['The Foundation', 'Responsive'],
    image: folderimg,
    color: 'bg-[#E0FFFB]', 
    github: '#',
    demo: '#',
  },
  {
    title: 'The Error Diary',
    description: 'A digital logbook documenting common errors encountered while learning VS Code and their solutions.',
    tags: ['Problem Solving', 'Logic'],
    image: errorimg,
    color: 'bg-[#8EC5FC]', 
    github: '#',
    demo: '#',
  },
  {
    title: 'Aceh Study Pomodoro',
    description: 'A productivity tool with a focus timer, featuring motivational quotes to help students stay disciplined.',
    tags: ['The Logic', 'Productivity'],
    image: jamimg,
    color: 'bg-[#E0C3FC]', 
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio: Journal',
    description: 'This very website! A dedicated space to document every step of my coding journey from scratch.',
    tags: ['Creative', 'Workshop'],
    image: lampuimg,
    color: 'bg-[#ADFF2F]', 
    github: '#',
    demo: '#',
  },
  {
    title: 'Daily Coding Tips',
    description: 'Sharing quick programming tips and VS Code hacks for beginners through social media content.',
    tags: ['Content', 'Education'],
    image: progresimg,
    color: 'bg-[#FF71CE]', 
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Informatics Vlog',
    description: 'Documenting the excitement of learning technology at school through short-form video content.',
    tags: ['Vlog', 'School Life'],
    image: videoimg,
    color: 'bg-[#01CDFE]', 
    isContent: true,
    youtube: '#',
  },
];

const ProjectCard = memo(({ project }: { project: Project }) => (
  <motion.div 
    whileHover={{ y: -8, rotate: -0.5 }}
    className="bg-white dark:bg-[#112240] border-[5px] border-black dark:border-white shadow-[12px_12px_0px_0px_#000] dark:shadow-[12px_12px_0px_0px_#64FFDA] flex flex-col h-[520px] overflow-hidden transition-all group mb-4 will-change-transform"
  >
    {/* Header Card Style OS */}
    <div className="border-b-[5px] border-black dark:border-white bg-white dark:bg-slate-900 p-3 flex justify-between items-center">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF71CE] border-2 border-black" />
        <div className="w-3 h-3 rounded-full bg-[#01CDFE] border-2 border-black" />
        <div className="w-3 h-3 rounded-full bg-[#ADFF2F] border-2 border-black" />
      </div>
      <span className="font-black text-[9px] uppercase dark:text-white italic tracking-widest opacity-70">build.v26</span>
    </div>

    {/* Project Image Container */}
    <div className={`h-44 border-b-[5px] border-black dark:border-white relative flex items-center justify-center overflow-hidden ${project.color}`}>
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#000_1.5px,transparent_1px)] [background-size:12px_12px]" />
      <img 
        src={project.image} 
        alt={project.title} 
        loading="lazy"
        className="z-10 w-28 h-28 object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-500" 
      />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2 text-black dark:text-white group-hover:text-[#FF71CE] transition-colors">
        {project.title}
      </h3>
      <p className="text-[12px] font-bold text-slate-700 dark:text-slate-400 leading-tight mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[8px] font-black border-2 border-black dark:border-white px-2 py-0.5 bg-white dark:bg-black text-black dark:text-[#64FFDA] uppercase">
            #{tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-auto">
        {project.github && (
          <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-2.5 border-[3px] border-black dark:border-white bg-black dark:bg-[#64FFDA] text-white dark:text-black font-black uppercase text-[9px] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_#FF71CE]">
            <Github size={12} /> Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-2.5 border-[3px] border-black dark:border-white bg-white dark:bg-transparent text-black dark:text-white font-black uppercase text-[9px] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_#ADFF2F]">
            <ExternalLink size={12} /> Demo
          </a>
        )}
        {project.isContent && (
          <a href={project.youtube} className="flex-1 flex items-center justify-center gap-2 py-2.5 border-[3px] border-black dark:border-white bg-[#FF71CE] text-black font-black uppercase text-[9px] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_black]">
            <Play size={12} fill="black" /> Watch
          </a>
        )}
      </div>
    </div>
  </motion.div>
));

ProjectCard.displayName = 'ProjectCard';

export default function ProjectsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false, watchDrag: true }, 
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
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="py-24 md:py-44 relative overflow-hidden transition-colors duration-700 bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC] dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464] border-t-[8px] border-black dark:border-white">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADLINE - Scaled to match Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="inline-block border-4 border-black dark:border-white bg-[#ADFF2F] px-6 py-2 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            <span className="font-black text-sm uppercase tracking-widest text-black flex items-center gap-2 italic">
              <Sparkles size={16} fill="black" /> Showcase progress
            </span>
          </div>
          
          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-[-0.06em] italic leading-[0.8] text-black dark:text-white transform -rotate-2">
            TAMED <br />
            <span className="inline-block mt-4 text-[#FF71CE] dark:text-[#64FFDA] drop-shadow-[5px_5px_0px_#01CDFE] dark:drop-shadow-[5px_5px_0px_#B967FF] border-[6px] md:border-[10px] border-black dark:border-white bg-white dark:bg-black px-10 py-4 shadow-[15px_15px_0px_0px_#01CDFE]">
              PROJECTS
            </span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex ml-[-1.5rem] touch-pan-y">
              {projects.map((project, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-[1.5rem]">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-[#FFFF00] border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all z-20 hidden lg:block active:scale-90"
          >
            <ChevronLeft size={32} className="text-black" strokeWidth={4} />
          </button>
          <button 
            onClick={() => emblaApi?.scrollNext()}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-[#FFFF00] border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all z-20 hidden lg:block active:scale-90"
          >
            <ChevronRight size={32} className="text-black" strokeWidth={4} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-4 mt-16">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-5 transition-all duration-300 border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                selectedIndex === index 
                  ? 'w-16 bg-[#FF71CE] dark:bg-[#64FFDA]' 
                  : 'w-5 bg-white dark:bg-slate-800'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}