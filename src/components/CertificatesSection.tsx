import { useState, memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  X, 
} from 'lucide-react';

// 1. DEFINISI INTERFACE
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

// 2. KOMPONEN KARTU
const CertificateCard = memo(({ cert, index, onSelect }: CertificateCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.4) }}
    className="group relative active:scale-[0.97] transition-all duration-200 transform-gpu cursor-pointer"
    onClick={() => onSelect(cert.image)}
  >
    <div className="absolute inset-0 bg-black dark:bg-[#64FFDA] translate-x-1.5 translate-y-1.5 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
    
    <div className="h-full bg-white dark:bg-[#0a192f] border-[3px] border-black dark:border-white relative flex flex-col overflow-hidden">
      <div className="relative h-44 border-b-[3px] border-black dark:border-white overflow-hidden bg-slate-900">
        <img 
          src={cert.image} 
          alt={cert.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 transform-gpu"
        />
        <div className={`absolute top-2 left-2 px-2 py-0.5 border-2 border-black font-black text-[8px] uppercase shadow-[1.5px_1.5px_0px_0px_#000] z-10 ${cert.color} text-black`}>
          Victory
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-start gap-2.5 mb-2">
          <Award className="h-4.5 w-4.5 text-[#FF71CE] dark:text-[#ADFF2F] shrink-0" strokeWidth={3} />
          <h3 className="text-base font-black uppercase italic tracking-tight leading-tight text-black dark:text-white line-clamp-2">
            {cert.title}
          </h3>
        </div>
        <p className="text-[9px] font-bold uppercase text-black/60 dark:text-white/40 mb-5 italic line-clamp-2">
          {cert.issuer}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-3">
          <div className="flex flex-col gap-0.5 text-[8px] font-black uppercase text-black dark:text-slate-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-2.5 w-2.5" />
              <span>{cert.date}</span>
            </div>
            <span className="font-mono opacity-40 truncate w-24">ID: {cert.credentialId}</span>
          </div>
          <ShieldCheck className="h-5 w-5 text-black dark:text-[#64FFDA] opacity-10" />
        </div>
      </div>
    </div>
  </motion.div>
));

CertificateCard.displayName = "CertificateCard";

// 3. KOMPONEN UTAMA
export default function CertificatesSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const BackgroundPattern = useMemo(() => (
    <div className="absolute inset-0 opacity-[0.08] pointer-events-none transform-gpu z-0" 
         style={{ 
           backgroundImage: 'radial-gradient(#000 1.2px, transparent 1px)', 
           backgroundSize: '24px 24px' 
         }} />
  ), []);

  return (
    <section 
      id="certificates" 
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC] dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464] border-t-[6px] border-black dark:border-white transition-colors duration-1000 transform-gpu"
    >
      {BackgroundPattern}

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block border-[3px] border-black bg-[#ADFF2F] px-4 py-1.5 mb-6 shadow-[4px_4px_0px_0px_#000] -rotate-2"
          >
            <span className="font-black text-[10px] md:text-xs uppercase tracking-widest italic text-black flex items-center gap-2">
              <Sparkles className="h-3 w-3" fill="black" />
              Victory Gallery
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.85] italic text-black dark:text-white">
            <span className="block">Academic</span>
            <div className="inline-block rotate-1 mt-4 px-6 py-2 border-[5px] bg-white border-black shadow-[8px_8px_0px_0px_#01CDFE] dark:bg-black dark:border-white dark:shadow-[8px_8px_0px_0px_#B967FF] transform-gpu">
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
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 touch-none transform-gpu"
              onClick={() => setSelectedImg(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full border-[4px] border-black dark:border-white shadow-[8px_8px_0px_0px_#ADFF2F] overflow-hidden bg-white transform-gpu"
              >
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="absolute top-2 right-2 z-50 bg-[#FF71CE] border-2 border-black p-2 shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all"
                >
                  <X className="h-5 w-5 text-black" strokeWidth={4} />
                </button>
                
                <img 
                  src={selectedImg} 
                  alt="Certificate Detail" 
                  className="w-full h-auto max-h-[85vh] object-contain" 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-20 text-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 font-black uppercase italic text-[11px] text-black dark:text-white active:text-[#FF71CE] transition-all"
          >
            <span className="border-b-2 border-black dark:border-white pb-1 group-hover:border-[#FF71CE]">Back to Top</span>
            <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 rounded-sm">↑</span>
          </button>
        </div>
      </div>
    </section>
  );
}