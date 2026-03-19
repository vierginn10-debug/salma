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
  image: string; // Diubah ke string untuk optimasi img tag
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
    title: 'Portfolio: Learning Journal',
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
    title: 'Informatics MAN 1 Vlog',
    description: 'Documenting the excitement of learning technology at school through short-form video content.',
    tags: ['Vlog', 'School Life'],
    image: videoimg,
    color: 'bg-[#01CDFE]', 
    isContent: true,
    youtube: '#',
  },
];

// Optimasi: Memisahkan Card menjadi komponen memo agar tidak re-render masal
const ProjectCard = memo(({ project }: { project: Project }) => (
  <motion.div 
    // Menggunakan layoutId jika diperlukan, tapi untuk performa kita pakai standard hover
    whileHover={{ y: -5, rotate: -0.5 }}
    className="bg-white/90 dark:bg-[#112240]/80 backdrop-blur-md border-[5px] border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_#64FFDA] flex flex-col h-full overflow-hidden transition-all group mb-4 will-change-transform"
  >
    <div className="border-b-[5px] border-black dark:border-white bg-[#E0FFFB] dark:bg-slate-800 p-3 flex justify-between items-center">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#FF71CE] border-2 border-black" />
        <div className="w-3 h-3 rounded-full bg-[#01CDFE] border-2 border-black" />
        <div className="w-3 h-3 rounded-full bg-[#ADFF2F] border-2 border-black" />
      </div>
      <span className="font-black text-[9px] uppercase opacity-60 dark:text-white italic tracking-widest">v.2026.exe</span>
    </div>

    <div className={`h-48 border-b-[5px] border-black dark:border-white relative flex items-center justify-center overflow-hidden ${project.color} transition-colors duration-500`}>
       <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#000_1.5px,transparent_1px)] [background-size:10px_10px]" />
       <div className="w-full h-full z-10 group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy" // Optimasi loading gambar
          className="max-w-full max-h-full object-contain p-4 drop-shadow-md" 
        />
       </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2 text-black dark:text-white group-hover:text-[#FF71CE] dark:group-hover:text-[#64FFDA] transition-colors">
        {project.title}
      </h3>
      <p className="text-sm font-bold text-slate-700 dark:text-slate-400 leading-tight mb-6 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[9px] font-black border-2 border-black dark:border-white px-2 py-0.5 bg-white dark:bg-black text-black dark:text-[#64FFDA] uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {project.github && (
          <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-3 border-[3px] border-black dark:border-white bg-black dark:bg-[#64FFDA] text-white dark:text-black font-black uppercase text-[10px] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_#FF71CE] dark:shadow-none">
            <Github size={14} /> Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-3 border-[3px] border-black dark:border-white bg-white dark:bg-transparent text-black dark:text-white font-black uppercase text-[10px] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_#ADFF2F] dark:shadow-none">
            <ExternalLink size={14} /> Demo
          </a>
        )}
        {project.isContent && (
          <a href={project.youtube} className="flex-1 flex items-center justify-center gap-2 py-3 border-[3px] border-black dark:border-white bg-[#FF71CE] text-black font-black uppercase text-[10px] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_black]">
            <Play size={14} fill="black" /> Watch
          </a>
        )}
      </div>
    </div>
  </motion.div>
));

ProjectCard.displayName = 'ProjectCard';

export default function ProjectsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Optimasi Embla: Tambahkan watchDrag untuk menghindari lag saat swipe
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start', 
      skipSnaps: false,
      watchDrag: true 
    }, 
    [Autoplay({ delay: 4000, stopOnInteraction: true })] // Stop on interaction agar tidak tabrakan dengan user swipe
  );

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    // Cleanup event listener
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden transition-colors duration-700
                 bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC]
                 dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464]
                 border-t-8 border-black dark:border-white">
      
      {/* Background Dots - Menggunakan CSS translateZ agar dirender GPU */}
      <div className="absolute inset-0 opacity-[0.2] dark:opacity-[0.1] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', 
             backgroundSize: '30px 30px',
             transform: 'translateZ(0)' 
           }} />

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }} // Trigger sedikit lebih awal
          className="text-center mb-16"
        >
          <div className="inline-block border-4 border-black dark:border-white bg-[#ADFF2F] px-6 py-2 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_#64FFDA] -rotate-1">
            <span className="font-black text-sm uppercase tracking-widest text-black flex items-center gap-2 italic">
              <Sparkles size={16} fill="black" /> Learning Progress
            </span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.85] text-black dark:text-white transition-colors duration-500">
            TAMED <br className="md:hidden" />
            <span className="inline-block mt-2 transition-all duration-500
                           text-[#FF71CE] drop-shadow-[5px_5px_0px_#01CDFE] 
                           dark:text-[#64FFDA] dark:drop-shadow-[5px_5px_0px_#B967FF]">
              PROJECTS
            </span>
          </h2>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ml-[-1.5rem] touch-pan-y"> {/* Tambahkan touch-pan-y agar scroll vertikal browser tidak terganggu */}
              {projects.map((project, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-[1.5rem]">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={scrollPrev}
            aria-label="Previous Project"
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 bg-[#ADFF2F] border-4 border-black p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:shadow-none transition-all z-20 hidden md:block active:scale-95"
          >
            <ChevronLeft size={28} className="text-black" strokeWidth={3} />
          </button>
          <button 
            onClick={scrollNext}
            aria-label="Next Project"
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-[#ADFF2F] border-4 border-black p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:shadow-none transition-all z-20 hidden md:block active:scale-95"
          >
            <ChevronRight size={28} className="text-black" strokeWidth={3} />
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-4 transition-all duration-500 border-4 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
                selectedIndex === index 
                  ? 'w-12 bg-[#FF71CE] dark:bg-[#64FFDA]' 
                  : 'w-4 bg-white dark:bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}