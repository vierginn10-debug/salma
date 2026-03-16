import { motion } from 'framer-motion';

// 1. DATA SKILLS (Tetap sama, hanya untuk konteks)
const skills = {
  frontend: [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Next.js', level: 88 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Vue.js', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'PostgreSQL', level: 88 },
    { name: 'MongoDB', level: 82 },
    { name: 'GraphQL', level: 78 },
  ],
  tools: [
    { name: 'Git', level: 95 },
    { name: 'Docker', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'Figma', level: 85 },
    { name: 'CI/CD', level: 82 },
  ],
};

// 2. KOMPONEN SKILLBAR (Diubah Wadah Bar agar Rounded Modern)
function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-3" // Beri jarak sedikit lebih lega
    >
      {/* Label Skill & Persentase */}
      <div className="flex justify-between items-center px-1">
        <span className="font-bold uppercase text-xs tracking-wider text-black">{name}</span>
        <span className="font-mono text-xs font-bold text-gray-800">{level}%</span>
      </div>

      {/* Wadah Progress Bar (Ubah Rounded agar Modern, Hapus Border Ujung Bar, Hapus bg-muted yang akan di-override) */}
      <div className="h-5 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-full overflow-hidden cursor-default">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'circOut' }} // Ganti ease agar lebih "pop"
          // Hapus border ujung bar, ganti warna solid primer yang tegas (Akan di-override di induk)
          className="h-full rounded-full bg-primary"
        />
      </div>
    </motion.div>
  );
}

// 3. SEKSI UTAMA (SkillsSection)
export default function SkillsSection() {
  return (
    // UBAH BACKGROUND DI SINI: Soft Lavender (Lavender)
    <section 
      id="skills" 
      className="py-24 md:py-36 bg-[#E6E6FA] border-t-8 border-black text-black"
    >
      <div className="container mx-auto px-6">
        
        {/* ==========================================================
            MODUL HEADLINE (Gaya Kontras Ekstrim Neo-Brutalism)
            DI SINI TEMPAT PERUBAHAN HIRARKI, SALMA!
        =========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Centerkan container agar rapi
          className="text-center mb-24 max-w-5xl mx-auto"
        >
          {/* 1. JUDUL UTAMA (FROM ZERO TO CODE) -> PAKAI BORDER & SHADOW KERAS */}
          {/* DI SINI SALMA! -> Kita pasang border tebal hitam dan hard shadow keras */}
          {/* text-5xl md:text-8xl -> Font size jumbo, sangat besar di Desktop */}
          {/* -rotate-1 -> Sedikit miring agar terlihat seperti stiker tempel */}
          <div className="inline-block border-4 border-black bg-white px-12 py-5 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] -rotate-1 mb-10 hover:rotate-0 hover:scale-105 transition-all cursor-default">
            <h1 className="font-black uppercase italic text-5xl md:text-8xl tracking-tighter leading-none text-black">
              FROM ZERO TO CODE
            </h1>
          </div>

          {/* 2. SUBHEADLINE ("Documenting...") -> TIDAK PAKAI BORDER/SHADOW (BERSIH) */}
          {/* DI SINI SALMA! -> Kita hapus semua border, shadow, dan background wadah deskripsi */}
          {/* text-base md:text-xl -> Font size standar, nyaman dibaca */}
          {/* tracking-tight -> Rapatkan jarak antar huruf agar terasa padat */}
          {/* text-foreground/80 -> Warna teks sedikit diredupkan agar kalem */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-medium text-base md:text-xl tracking-tight text-foreground/80 leading-relaxed">
              "Documenting my journey of mastering the basics, tackling curriculum challenges, 
              and building my very first digital foundations."
            </h2>
          </div>
        </motion.div>

        {/* ==========================================================
            GRID KARTU SKILL (Gaya Kotak Minimalis Modern - Tanpa Border/Shadow Keras)
        =========================================================== */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          
          {/* ==========================================================
              --- Frontend ---
              Bar Progres & Background Bar: Pink Neon/Magenta Pekat
              UBAH WARNA BAR & BACKGROUND BAR DI SINI: Magenta Pekat
          =========================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // Hapus shadow keras, gunakan glassmorphism/bg-white bersih
            className="p-8 bg-white/50 glass rounded-3xl group"
          >
            {/* Header Kartu - Hapus border bawah hitam */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-black/5 group-hover:rotate-6 transition-transform">
                <span className="text-3xl block">🎨</span>
              </div>
              <h3 className="font-black uppercase italic text-3xl tracking-tight text-black leading-none">Frontend</h3>
            </div>
            
            {/* Daftar Skill - Trik Tailwind Spesifik Tanpa Border Ujung */}
            <div className="space-y-6">
              {skills.frontend.map((skill, index) => (
                // Kita targetting elemen bar dalam dan wadah barnya sekaligus
                // [&_div_div_div]:bg-[#FF1493] [&_div_div_div]:rounded-full -> Ganti warna bar jadi Magenta & rounded
                // [&_div_div]:bg-[#FF1493] -> **DI SINI SALMA!** Kita ganti background wadah bar progresnya jadi Magenta
                // [&_div_div]:border-4 [&_div_div]:border-black -> Tambah border tebal hitam di wadah bar
                // [&_div_div]:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -> Tambah shadow keras di wadah bar
                <div 
                  key={skill.name} 
                  className="[&_div_div_div]:bg-[#FF1493] [&_div_div_div]:rounded-full [&_div_div]:bg-[#FF1493] [&_div_div]:border-4 [&_div_div]:border-black [&_div_div]:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] [&_div_div]:cursor-default"
                >
                  <SkillBar {...skill} delay={index * 0.1} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- Backend ---
              Bar Progres & Background Bar: Biru Cyan/Aqua Ceria
              UBAH WARNA BAR & BACKGROUND BAR DI SINI: Cyan/Aqua Ceria
          =========================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 bg-white/50 glass rounded-3xl group"
          >
            {/* Header Kartu */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-black/5 group-hover:-rotate-6 transition-transform">
                <span className="text-3xl block">⚙️</span>
              </div>
              <h3 className="font-black uppercase italic text-3xl tracking-tight text-black leading-none">Backend</h3>
            </div>
            {/* Daftar Skill dengan Bar Warna Biru Cyan */}
            <div className="space-y-6">
              {skills.backend.map((skill, index) => (
                // [&_div_div_div]:bg-[#00FFFF] -> Warna bar Cyan/Aqua
                // [&_div_div]:bg-[#00FFFF] -> Warna background bar Cyan/Aqua
                <div 
                  key={skill.name} 
                  className="[&_div_div_div]:bg-[#00FFFF] [&_div_div_div]:rounded-full [&_div_div]:bg-[#00FFFF] [&_div_div]:border-4 [&_div_div]:border-black [&_div_div]:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] [&_div_div]:cursor-default"
                >
                  <SkillBar {...skill} delay={index * 0.1} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- Tools ---
              Bar Progres & Background Bar: Kuning Stabilo/Lime Ceria
              UBAH WARNA BAR & BACKGROUND BAR DI SINI: Lime/KuningStabilo Ceria
          =========================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-white/50 glass rounded-3xl group"
          >
            {/* Header Kartu */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-black/5 group-hover:rotate-6 transition-transform">
                <span className="text-3xl block">🛠️</span>
              </div>
              <h3 className="font-black uppercase italic text-3xl tracking-tight text-black leading-none">Tools</h3>
            </div>
            {/* Daftar Skill dengan Bar Warna Kuning Stabilo */}
            <div className="space-y-6">
              {skills.tools.map((skill, index) => (
                // [&_div_div_div]:bg-[#FFFF00] -> Warna bar Lime/KuningStabilo
                // [&_div_div]:bg-[#FFFF00] -> Warna background bar Lime/KuningStabilo
                <div 
                  key={skill.name} 
                  className="[&_div_div_div]:bg-[#FFFF00] [&_div_div_div]:rounded-full [&_div_div]:bg-[#FFFF00] [&_div_div]:border-4 [&_div_div]:border-black [&_div_div]:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] [&_div_div]:cursor-default"
                >
                  <SkillBar {...skill} delay={index * 0.1} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}