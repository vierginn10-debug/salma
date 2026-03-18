import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, ShieldCheck, Bookmark, Sparkles } from 'lucide-react';

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-SAA-123456',
    image: '🏆',
    color: 'bg-[#E0FFFB]', // Mint
    link: '#',
  },
  {
    title: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: 'GCP-PCD-789012',
    image: '☁️',
    color: 'bg-[#8EC5FC]', // Blue
    link: '#',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: '2023',
    credentialId: 'META-FE-345678',
    image: '⚛️',
    color: 'bg-[#E0C3FC]', // Lavender
    link: '#',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2023',
    credentialId: 'MDB-DEV-901234',
    image: '🍃',
    color: 'bg-[#ADFF2F]', // Neon Green
    link: '#',
  },
  {
    title: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
    date: '2022',
    credentialId: 'CKA-567890',
    image: '⚙️',
    color: 'bg-[#FF71CE]', // Neon Pink
    link: '#',
  },
  {
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: '2022',
    credentialId: 'PSM-I-234567',
    image: '📋',
    color: 'bg-[#01CDFE]', // Cyan
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section 
      id="certificates" 
      className="py-24 relative overflow-hidden transition-colors duration-500
                 bg-gradient-to-br from-[#E0FFFB] via-[#8EC5FC] to-[#E0C3FC]
                 dark:from-[#000000] dark:via-[#050A30] dark:to-[#1B1464]
                 border-t-8 border-black dark:border-white"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#64FFDA] opacity-10 rounded-full blur-[120px] -z-10 hidden dark:block" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#B967FF] opacity-10 rounded-full blur-[120px] -z-10 hidden dark:block" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION - Updated to match Hero/Projects style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block border-4 border-black dark:border-white bg-[#ADFF2F] px-6 py-2 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_#64FFDA] -rotate-2">
            <span className="font-black text-xs uppercase tracking-[0.2em] text-black flex items-center gap-2 italic">
              <Sparkles className="h-4 w-4" fill="black" />
              Verification Center
            </span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.85] text-black dark:text-white transition-colors duration-500">
            CERTIFIED <br className="md:hidden" />
            <span className="inline-block mt-2 transition-all duration-500
                           text-[#FF71CE] drop-shadow-[5px_5px_0px_#01CDFE] 
                           dark:text-[#64FFDA] dark:drop-shadow-[5px_5px_0px_#B967FF]">
              SKILLS
            </span>
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
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* Certificate Card */}
              <div className="h-full p-8 bg-white/80 dark:bg-[#112240]/40 backdrop-blur-md border-4 border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_#64FFDA] relative overflow-hidden flex flex-col transition-all">
                
                {/* Visual Icon with "Stamp" effect */}
                <div className={`w-20 h-20 border-4 border-black dark:border-white ${cert.color} mb-6 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  <span className="text-4xl drop-shadow-[2px_2px_rgba(0,0,0,0.2)]">{cert.image}</span>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-start gap-3 mb-2">
                    <Award className="h-6 w-6 text-black dark:text-[#ADFF2F] shrink-0" strokeWidth={3} />
                    <h3 className="text-xl font-black uppercase italic tracking-tight leading-none text-black dark:text-white">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/60 dark:text-white/40 mb-4 ml-9">
                    Issued by {cert.issuer}
                  </p>

                  <div className="flex flex-col gap-2 ml-9 mb-8">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-black/80 dark:text-slate-300">
                      <Calendar className="h-3 w-3" />
                      <span>Batch {cert.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-black/40 dark:text-white/30">
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
                    className="block text-center py-4 border-4 border-black dark:border-white bg-black dark:bg-[#64FFDA] text-white dark:text-black font-black uppercase italic text-xs shadow-[5px_5px_0px_0px_#FF71CE] dark:shadow-[5px_5px_0px_0px_#ADFF2F] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <ExternalLink className="h-4 w-4" strokeWidth={3} />
                      Verify Credential
                    </span>
                  </a>
                </div>

                {/* Decoration Corner Seal */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-black dark:bg-[#64FFDA] rotate-45 flex items-end justify-center pb-1">
                   <ShieldCheck className="text-white dark:text-black h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER DECORATION */}
        <div className="mt-24 flex justify-center">
          <div className="h-1 w-full bg-black dark:bg-white/20 relative">
             <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-white dark:bg-[#050A30] px-8 py-2 border-4 border-black dark:border-white font-black italic uppercase text-[10px] text-black dark:text-white">
                Verification Protocol // Active
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}