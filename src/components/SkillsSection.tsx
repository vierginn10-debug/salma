import { motion } from 'framer-motion';

// ==========================================================
// 1. DATA SKILLS (Edisi "Weapon Labels" Salma)
// Kita buang angka 'level', ganti dengan data yang lebih personal.
// ==========================================================
const skillWeapons = {
  foundation: [
    { icon: '🧱', name: 'HTML5', desc: 'Arsitek yang menyusun struktur dunia digital.', status: 'Blooming', color: 'bg-[#8A2BE2]' }, // Ungu Mekar
    { icon: '🎨', name: 'CSS3', desc: 'Pelukis yang memberi warna dan gaya di setiap sudut.', status: 'Growing', color: 'bg-[#FF1493]' }, // Pink Tumbuh
    { icon: '⚡', name: 'Tailwind', desc: 'Alat kilat untuk membuat desain yang modern.', status: 'Sprouting', color: 'bg-[#00FFFF]' }, // Cyan Tunas
  ],
  logic: [
    { icon: '🐍', name: 'Python', desc: 'Sang pawang logika untuk perintah yang cerdas.', status: 'Blooming', color: 'bg-[#8A2BE2]' },
    { icon: '⚡', name: 'JavaScript', desc: "Pemberi 'nyawa' agar website bisa berinteraksi.", status: 'Growing', color: 'bg-[#FF1493]' },
    { icon: '⚙️', name: 'Node.js', desc: 'Mesin di balik layar yang mengatur segalanya.', status: 'Sprouting', color: 'bg-[#00FFFF]' },
  ],
  workshop: [
    { icon: '💻', name: 'VS Code', desc: 'Markas utama tempat ide berubah menjadi kode.', status: 'On Orbit', color: 'bg-[#FFFF00]' }, // Kuning Meluncur
    { icon: '🐙', name: 'GitHub', desc: 'Mesin waktu untuk menjaga setiap jejak langkah.', status: 'Blooming', color: 'bg-[#8A2BE2]' },
    { icon: '🔍', name: 'DevTools', desc: 'Kaca pembesar membedah dan mencari error.', status: 'Growing', color: 'bg-[#FF1493]' },
  ],
};

// ==========================================================
// 2. DEFINISI LEVEL EVOLUSI (The "Evolution" Labels)
// Menentukan teks, emoji, dan perkiraan lebar bar untuk visualisasi.
// ==========================================================
const evolutionLevels = {
  Sprouting: { label: '🌱 Sprouting (Tunas)', width: '25%' },
  Growing: { label: '🌿 Growing (Tumbuh)', width: '50%' },
  Blooming: { label: '🌳 Blooming (Mekar)', width: '75%' },
  'On Orbit': { label: '🚀 On Orbit (Meluncur)', width: '100%' },
};

// ==========================================================
// 3. KOMPONEN SKILLBAR (Edisi Tanpa Angka, Pake Level Evolusi)
// ==========================================================
function PawangSkillBar({ icon, name, desc, status, color, delay }) {
  const levelInfo = evolutionLevels[status] || evolutionLevels['Sprouting'];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-3 pb-2 border-b-2 border-black/5 last:border-b-0"
    >
      {/* Label Skill & Kalimat Unik (Weapon Labels) */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="font-black uppercase italic tracking-tight text-lg text-black">{name}</span>
        </div>
        <p className="text-xs text-foreground/70 font-medium leading-relaxed italic px-1">
          "{desc}"
        </p>
      </div>

      {/* Wadah Progress Bar (Neo-Brutalism: Kotak, Border Hitam, Shadow Keras) */}
      {/* Kita targetting background wadah barnya agar sama dengan warna barnya (trik Salma sebelumnya) */}
      <div 
        className={`h-6 border-4 border-black ${color} shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-full overflow-hidden cursor-default relative group`}
      >
        {/* Bar Progres Solid (Warna Hitam Pekat agar kontras) */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: levelInfo.width }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'circOut' }}
          className="h-full rounded-full bg-black border-r-4 border-black"
        />

        {/* LABEL EVOLUSI (🌱/🌿/🌳/🚀) - Muncul di pojok kanan atas bar saat hover */}
        <div className="absolute top-1/2 right-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider z-10 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
          {levelInfo.label}
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================================
// 4. SEKSI UTAMA (SkillsSection - Final Edisi Pawang Kode)
// ==========================================================
export default function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="py-24 md:py-36 bg-[#E6E6FA] border-t-8 border-black text-black"
    >
      <div className="container mx-auto px-6">
        
        {/* HEADLINE (Hirarki Dramatis: Jumbo vs Kalem Bersih) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 max-w-5xl mx-auto"
        >
          {/* JUDUL UTAMA (Pake Border & Shadow Keras) - Jumbo */}
          <div className="inline-block border-4 border-black bg-white px-12 py-5 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] -rotate-1 mb-10 hover:rotate-0 hover:scale-105 transition-all cursor-default relative">
            <h1 className="font-black uppercase italic text-5xl md:text-8xl tracking-tighter leading-none text-black">
              FROM ZERO TO CODE
            </h1>
            {/* Ikon tambahan stiker miring */}
            <span className="absolute -top-6 -right-6 text-5xl rotate-12">🎮</span>
          </div>

          {/* SUBHEADLINE (Bersih Tanpa Border) - Kalem */}
          <div className="max-w-3xl mx-auto pt-4 border-t-4 border-black/10">
            <h2 className="font-black uppercase italic text-base md:text-xl tracking-tight text-foreground/80 leading-tight">
              "Documenting my journey of mastering the basics, tackling curriculum challenges, 
              and building my very first digital foundations."
            </h2>
          </div>
        </motion.div>

        {/* GRID KARTU SKILL ("The Arsenal") */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
          
          {/* --- Kategori 1: The Foundation --- */}
          <motion.div className="p-8 bg-white/50 glass rounded-3xl group border-2 border-black/5 hover:border-black transition-all">
            <div className="flex items-center gap-4 mb-10 border-b-4 border-black pb-6">
              <div className="p-4 rounded-2xl bg-black/5 group-hover:rotate-6 transition-transform">
                <span className="text-3xl">🧱</span>
              </div>
              <h3 className="font-black uppercase italic text-3xl tracking-tight text-black leading-none">The Foundation</h3>
            </div>
            <div className="space-y-8">
              {skillWeapons.foundation.map((weapon, index) => (
                <PawangSkillBar key={weapon.name} {...weapon} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* --- Kategori 2: The Logic --- */}
          <motion.div className="p-8 bg-white/50 glass rounded-3xl group border-2 border-black/5 hover:border-black transition-all">
            <div className="flex items-center gap-4 mb-10 border-b-4 border-black pb-6">
              <div className="p-4 rounded-2xl bg-black/5 group-hover:-rotate-6 transition-transform">
                <span className="text-3xl">🐍</span>
              </div>
              <h3 className="font-black uppercase italic text-3xl tracking-tight text-black leading-none">The Logic</h3>
            </div>
            <div className="space-y-8">
              {skillWeapons.logic.map((weapon, index) => (
                <PawangSkillBar key={weapon.name} {...weapon} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* --- Kategori 3: The Workshop --- */}
          <motion.div className="p-8 bg-white/50 glass rounded-3xl group border-2 border-black/5 hover:border-black transition-all">
            <div className="flex items-center gap-4 mb-10 border-b-4 border-black pb-6">
              <div className="p-4 rounded-2xl bg-black/5 group-hover:rotate-6 transition-transform">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="font-black uppercase italic text-3xl tracking-tight text-black leading-none">The Workshop</h3>
            </div>
            <div className="space-y-8">
              {skillWeapons.workshop.map((weapon, index) => (
                <PawangSkillBar key={weapon.name} {...weapon} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ==========================================================
            SARAN TAMBAHAN AGAR WEB "NAIK LEVEL"
        =========================================================== */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          
          {/* A. "Pawang Error Minggu Ini" ⚠️ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl"
          >
            <div className="flex items-center gap-3 mb-5 border-b-2 border-black pb-4">
              <span className="text-3xl">⚠️</span>
              <h4 className="font-black uppercase italic text-2xl tracking-tight text-black">Pawang Error Minggu Ini</h4>
            </div>
            <p className="font-medium text-sm text-black/80 leading-relaxed bg-[#FFFACD] p-4 border-2 border-black rounded-lg">
              "Lupa tutup tag <span className="font-mono bg-black/10 px-1">div</span> sampai tampilan websitenya berantakan total selama 1 jam, tapi akhirnya ketemu dan rasanya lega banget! 😂" 
              <span className="block mt-2 font-bold text-black">— Jiwa Problem Solver: ON!</span>
            </p>
          </motion.div>

          {/* B. Tombol "Lihat Markas GitHub" 🐙 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl flex flex-col justify-center items-center text-center group"
          >
            <span className="text-6xl mb-6 group-hover:scale-110 transition-transform">🐙</span>
            <h4 className="font-black uppercase italic text-2xl tracking-tight text-black mb-3">Penasaran dengan Kode Aslinya?</h4>
            <p className="text-sm text-black/70 mb-8 max-w-sm">
              Dokumentasi lengkap dan semua jejak langkah kodingku tersimpan rapi di markas GitHub. Mari bedah kodenya bersama-masing!
            </p>
            {/* Tombol Gaya Neo-Brutalism Ceria (Warna Pink Tumbuh) */}
            <a 
              href="https://github.com/salma-anda" // GANTI DENGAN LINK GITHUBMU
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-4 border-black bg-[#FF1493] text-black font-black uppercase italic px-10 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all tracking-tighter text-lg"
            >
              Kunjungi Markas GitHub 🚀
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}