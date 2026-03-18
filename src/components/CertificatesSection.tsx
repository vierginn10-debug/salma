import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  ShieldCheck, 
  Bookmark, 
  Sparkles, 
  X, 
  Maximize2, 
  ExternalLink 
} from 'lucide-react';

const certificates = [
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

export default function CertificatesSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section 
      id="certificates" 
      className="py-24 relative overflow-hidden transition-colors duration-500
                 bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC]
                 dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464]
                 border-t-8 border-black dark:border-white"
    >
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#ADFF2F] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF71CE] opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block border-4 border-black dark:border-white bg-[#ADFF2F] px-6 py-2 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_#64FFDA] -rotate-2">
            <span className="font-black text-xs uppercase tracking-[0.2em] text-black flex items-center gap-2 italic">
              <Sparkles className="h-4 w-4" fill="black" />
              Victory Gallery
            </span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.85] text-black dark:text-white">
            ACADEMIC <br className="md:hidden" />
            <span className="inline-block mt-2 text-[#FF71CE] drop-shadow-[5px_5px_0px_#01CDFE] dark:text-[#64FFDA] dark:drop-shadow-[5px_5px_0px_#B967FF]">
              RECORDS
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group cursor-pointer relative"
              onClick={() => setSelectedImg(cert.image)}
            >
              {/* Card Background Shadow (The Neubrutalism "Pop") */}
              <div className="absolute inset-0 bg-black dark:bg-[#64FFDA] translate-x-3 translate-y-3 -z-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-300" />

              <div className="h-full bg-white dark:bg-[#0a192f] border-4 border-black dark:border-white relative flex flex-col overflow-hidden">
                
                {/* Image Section with Hover Zoom */}
                <div className="relative h-56 border-b-4 border-black dark:border-white overflow-hidden bg-slate-900">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-[#ADFF2F] border-4 border-black p-3 shadow-[4px_4px_0px_0px_#000] -rotate-3 group-hover:rotate-0 transition-transform">
                       <Maximize2 className="h-6 w-6 text-black" strokeWidth={3} />
                    </div>
                  </div>

                  <div className={`absolute top-4 left-4 px-3 py-1 border-2 border-black font-black text-[10px] uppercase shadow-[2px_2px_0px_0px_#000] z-20 ${cert.color}`}>
                    Awarded
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <Award className="h-6 w-6 text-[#FF71CE] dark:text-[#ADFF2F] shrink-0" strokeWidth={3} />
                    <h3 className="text-xl font-black uppercase italic tracking-tight leading-[1.1] text-black dark:text-white">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-[11px] font-bold uppercase tracking-widest text-black/50 dark:text-white/40 mb-8 italic">
                    {cert.issuer}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t-2 border-black/5 dark:border-white/5 pt-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase text-black dark:text-slate-300">
                        <Calendar className="h-3 w-3" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-black/30 dark:text-white/20">
                        <Bookmark className="h-3 w-3" />
                        <span className="truncate w-32">ID: {cert.credentialId}</span>
                      </div>
                    </div>
                    <ShieldCheck className="h-8 w-8 text-black dark:text-[#64FFDA] opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FULLSCREEN MODAL */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setSelectedImg(null)}
            >
              {/* Confetti Animation Effect (Static Version for performance) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: -20, x: Math.random() * 100 + "%", opacity: 1 }}
                    animate={{ y: "110vh", rotate: 360 }}
                    transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, ease: "linear" }}
                    className={`absolute w-3 h-3 ${['bg-[#ADFF2F]', 'bg-[#FF71CE]', 'bg-[#01CDFE]'][i % 3]}`}
                    style={{ left: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>

              <motion.div
                initial={{ scale: 0.5, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.5, rotate: 10 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-white dark:bg-[#050A30] border-[10px] border-black dark:border-white shadow-[30px_30px_0px_0px_#ADFF2F] flex flex-col"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="absolute -top-12 right-0 md:-right-12 bg-[#FF71CE] border-4 border-black p-2 hover:bg-black group transition-colors shadow-[4px_4px_0px_0px_#000]"
                >
                  <X className="h-8 w-8 text-black group-hover:text-white" strokeWidth={4} />
                </button>
                
                <div className="overflow-auto max-h-[80vh]">
                  <img 
                    src={selectedImg} 
                    alt="Sertifikat Original" 
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="bg-black dark:bg-white p-4 flex justify-between items-center">
                  <span className="text-white dark:text-black font-black uppercase italic text-xs tracking-widest">
                    Credential Verification // Active
                  </span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ADFF2F]" />
                    <div className="w-3 h-3 rounded-full bg-[#FF71CE]" />
                    <div className="w-3 h-3 rounded-full bg-[#01CDFE]" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTTOM DECORATION */}
        <div className="mt-32 flex flex-col items-center">
          <div className="w-full h-1 bg-black dark:bg-white/10 relative mb-8">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-[#ADFF2F] text-black border-4 border-black px-10 py-2 font-black italic uppercase text-xs">
              End of Gallery
            </div>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 font-black uppercase italic text-sm text-black dark:text-white hover:text-[#FF71CE] transition-colors"
          >
            Back to Top
            <div className="p-2 border-2 border-black dark:border-white group-hover:bg-[#ADFF2F] group-hover:text-black transition-all">
               <Maximize2 className="h-4 w-4 rotate-180" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}