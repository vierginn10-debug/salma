import { useState, memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  X 
} from 'lucide-react';

// --- 1. TYPE DEFINITIONS ---
interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  color: string;
}

interface CertificateCardProps {
  cert: Certificate;
  index: number;
  onSelect: (image: string) => void;
}

const certificates: Certificate[] = [
  {
    title: 'Medali Emas - Bahasa Inggris',
    issuer: 'SEAOSM 2024 (South East Asia Olympiad Of Science Medicine)',
    date: 'Juli 2024',
    credentialId: '1628170',
    image: '/certificates/INGGRIS.jpg',
    color: 'bg-[#FFD700]',
  },
  {
    title: 'Peringkat 1 Provinsi Aceh',
    issuer: 'Kihajar STEM 2024 - Tahap Basic (Kemendikbudristek)',
    date: 'Agustus 2024',
    credentialId: '28566/J1.1/TI.10.01/2024',
    image: '/certificates/STEM1.jpeg',
    color: 'bg-[#ADFF2F]',
  },
  {
    title: 'Medali Emas - IPA',
    issuer: 'FASNAS 2024 (Festival Akademik Nasional)',
    date: 'Juni 2024',
    credentialId: '1628159/P/PKT/FASNAS/VI/2024',
    image: '/certificates/IPA.jpeg',
    color: 'bg-[#FF71CE]',
  },
  {
    title: 'Medali Perak - Bidang IPA',
    issuer: 'Aceh Science Competition & Seminar Nasional',
    date: 'Mei 2024',
    credentialId: '100/SER-ASC/OI/XII/2024',
    image: '/certificates/OLIMPIADE.jpeg',
    color: 'bg-[#C0C0C0]',
  },
  {
    title: 'Peringkat 3 PAS Kelas X-11',
    issuer: 'MAN 1 Banda Aceh - TP 2025/2026',
    date: 'Desember 2025',
    credentialId: 'REG: MAN1-BA-2025',
    image: '/certificates/MAN 1.jpeg',
    color: 'bg-[#01CDFE]',
  },
  {
    title: 'Medali Emas - IPS',
    issuer: 'SEAOSM 2024 (South East Asia Olympiad Of Science Medicine)',
    date: 'Juli 2024',
    credentialId: '1628172',
    image: '/certificates/IPS.jpeg',
    color: 'bg-[#8EC5FC]',
  },
];

// --- 2. SUB-COMPONENT: CARD ---
const CertificateCard = memo(({ cert, index, onSelect }: CertificateCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10px" }}
    transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
    className="group relative active:scale-[0.98] transition-transform duration-200 transform-gpu cursor-pointer"
    onClick={() => onSelect(cert.image)}
  >
    <div className="absolute inset-0 bg-black dark:bg-[#64FFDA] translate-x-1.5 translate-y-1.5 -z-10" />
    
    <div className="h-full bg-white dark:bg-[#0a192f] border-[3px] border-black dark:border-white relative flex flex-col overflow-hidden">
      <div className="relative h-44 md:h-52 border-b-[3px] border-black dark:border-white overflow-hidden bg-slate-900">
        <img 
          src={cert.image} 
          alt={cert.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className={`absolute top-2 left-2 px-2 py-0.5 border-2 border-black font-black text-[8px] uppercase shadow-[1.5px_1.5px_0px_0px_#000] z-10 italic ${cert.color} text-black`}>
          Victory
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-start gap-2.5 mb-2">
          <Award className="h-5 w-5 text-[#FF71CE] dark:text-[#ADFF2F] shrink-0" strokeWidth={3} />
          <h3 className="text-lg font-black uppercase italic tracking-tight leading-none text-black dark:text-white">
            {cert.title}
          </h3>
        </div>
        <p className="text-[10px] font-bold uppercase text-black/60 dark:text-white/40 mb-5 italic leading-tight">
          {cert.issuer}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-3">
          <div className="flex flex-col gap-0.5 text-[9px] font-black uppercase text-black dark:text-slate-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{cert.date}</span>
            </div>
            <span className="font-mono opacity-40 truncate w-32">ID: {cert.credentialId}</span>
          </div>
          <ShieldCheck className="h-5 w-5 text-black dark:text-[#64FFDA] opacity-10" />
        </div>
      </div>
    </div>
  </motion.div>
));

CertificateCard.displayName = "CertificateCard";

// --- 3. MAIN COMPONENT ---
export default function CertificatesSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const BackgroundDecor = useMemo(() => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-[0.05]">
      <div className="absolute top-8 left-8 w-16 h-16 border-t-[5px] border-l-[5px] border-black dark:border-white" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-[5px] border-r-[5px] border-black dark:border-white" />
    </div>
  ), []);

  return (
    <section 
      id="certificates" 
      className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC] dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464] border-t-[6px] border-black dark:border-white transform-gpu transition-colors duration-1000"
    >
      {/* Background Matrix - Dot Pattern Added Back */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none transform-gpu z-0" 
           style={{ 
             backgroundImage: 'radial-gradient(#000 1.5px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }} />
      
      {BackgroundDecor}

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 md:mb-24 transform-gpu">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block border-[3px] border-black bg-[#ADFF2F] px-5 py-1.5 mb-6 shadow-[4px_4px_0px_0px_#000] -rotate-2"
          >
            <span className="font-black text-xs uppercase tracking-widest italic text-black flex items-center gap-2">
              <Sparkles className="h-4 w-4" fill="black" />
              Victory Gallery
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.85] italic text-black dark:text-white">
            Academic <br />
            <div className="inline-block transform-gpu rotate-1 mt-6 px-8 py-3 border-[5px] bg-white border-black shadow-[8px_8px_0px_0px_#01CDFE] dark:bg-black dark:border-white dark:shadow-[8px_8px_0px_0px_#B967FF]">
              <span className="text-[#FF71CE] dark:text-[#64FFDA]">Records</span>
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <CertificateCard 
              key={cert.credentialId} 
              cert={cert} 
              index={index} 
              onSelect={setSelectedImg} 
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 touch-none"
              onClick={() => setSelectedImg(null)}
            >
              <motion.div
                initial={{ scale: 0.9, rotate: -1 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.9, rotate: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-white dark:bg-[#050A30] border-[5px] border-black dark:border-white shadow-[8px_8px_0px_0px_#ADFF2F] overflow-hidden transform-gpu"
              >
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="absolute top-2 right-2 md:-top-4 md:-right-4 z-50 bg-[#FF71CE] border-[3px] border-black p-2 shadow-[4px_4px_0px_0px_#000] active:translate-y-1 active:shadow-none transition-all"
                >
                  <X className="h-6 w-6 text-black" strokeWidth={4} />
                </button>
                
                <img 
                  src={selectedImg} 
                  alt="Certificate Preview" 
                  className="w-full h-auto max-h-[85vh] object-contain" 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-24 text-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-black uppercase italic text-xs text-black dark:text-white border-b-4 border-black dark:border-white pb-1 active:text-[#FF71CE] transition-all transform-gpu"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </section>
  );
}