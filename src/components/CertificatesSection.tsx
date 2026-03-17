import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, ShieldCheck, Bookmark } from 'lucide-react';

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-SAA-123456',
    image: '🏆',
    color: 'bg-[#FF71CE]', // Neon Pink
    link: '#',
  },
  {
    title: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: 'GCP-PCD-789012',
    image: '☁️',
    color: 'bg-[#01CDFE]', // Neon Blue
    link: '#',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: '2023',
    credentialId: 'META-FE-345678',
    image: '⚛️',
    color: 'bg-[#05FFA1]', // Neon Green
    link: '#',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2023',
    credentialId: 'MDB-DEV-901234',
    image: '🍃',
    color: 'bg-[#B967FF]', // Purple
    link: '#',
  },
  {
    title: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
    date: '2022',
    credentialId: 'CKA-567890',
    image: '⚙️',
    color: 'bg-[#FFFB96]', // Yellow
    link: '#',
  },
  {
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: '2022',
    credentialId: 'PSM-I-234567',
    image: '📋',
    color: 'bg-[#ADFF2F]', // Greenish Yellow
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 bg-white dark:bg-[#0F0F0F] relative transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block border-4 border-black dark:border-white bg-[#FFFB96] dark:bg-black px-6 py-2 mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_#ADFF2F] -rotate-2">
            <span className="font-black text-xs uppercase tracking-[0.2em] text-black dark:text-white">Verification Center</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter dark:text-white">
            CERTIFIED <span className="text-[#FF71CE]">SKILLS</span>
          </h2>
        </motion.div>

        {/* GRID SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ rotate: index % 2 === 0 ? 1 : -1 }}
              className="group"
            >
              {/* Certificate Card */}
              <div className="h-full p-8 bg-white dark:bg-[#1A1A1A] border-4 border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] relative overflow-hidden flex flex-col">
                
                {/* Visual Icon with "Stamp" effect */}
                <div className={`w-20 h-20 border-4 border-black dark:border-white ${cert.color} mb-6 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  <span className="text-4xl drop-shadow-[2px_2px_rgba(0,0,0,0.2)]">{cert.image}</span>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-start gap-3 mb-2">
                    <Award className="h-6 w-6 text-black dark:text-white shrink-0" strokeWidth={3} />
                    <h3 className="text-xl font-black uppercase italic tracking-tight leading-none dark:text-white">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs font-black uppercase tracking-widest text-black/40 dark:text-white/40 mb-4 ml-9">
                    Issued by {cert.issuer}
                  </p>

                  <div className="flex flex-col gap-2 ml-9 mb-8">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-black dark:text-white/60">
                      <Calendar className="h-3 w-3" />
                      <span>Batch {cert.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-black/50 dark:text-white/30">
                      <Bookmark className="h-3 w-3" />
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  </div>
                </div>

                {/* Neo-Brutalist Button */}
                <div className="mt-auto">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center py-3 border-4 border-black dark:border-white bg-[#05FFA1] dark:bg-[#ADFF2F] text-black font-black uppercase italic text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <ExternalLink className="h-4 w-4" strokeWidth={3} />
                      Verify Credential
                    </span>
                  </a>
                </div>

                {/* Decoration Corner Seal */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-black dark:bg-white rotate-45 flex items-end justify-center pb-1">
                   <ShieldCheck className="text-white dark:text-black h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER DECORATION */}
        <div className="mt-20 flex justify-center">
          <div className="h-1 w-full bg-black dark:bg-white/10 relative">
             <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-white dark:bg-[#0F0F0F] px-8 py-2 border-2 border-black dark:border-white font-black italic uppercase text-[10px] dark:text-white">
               END OF GALLERY
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}