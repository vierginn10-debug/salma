import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderCode, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  // HAPUS PROPERTI COLOR, KITA PAKAI WARNA KONSISTEN
  { name: "Home", icon: Home, href: "#hero" },
  { name: "About", icon: User, href: "#about" },
  { name: "Project", icon: FolderCode, href: "#projects" },
  { name: "Victory", icon: GraduationCap, href: "#certificates" },
];

export default function FloatingNav() {
  const [active, setActive] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Efek menyembunyikan nav saat scroll (biar layar HP lega)
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          setIsVisible(false); // Scroll bawah: sembunyi
        } else {
          setIsVisible(true);  // Scroll atas: muncul
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: 100, x: "-50%", opacity: 0 }}
          // --- GAYA NEO-BRUTALISM DENGAN STRUKTUR RAPI ---
          className="fixed bottom-6 left-1/2 z-[100] transform-gpu 
                     flex items-center gap-2 p-2
                     /* GAYA GAMBAR 2 (NEO-BRUTALISM) */
                     bg-white dark:bg-[#112240] 
                     border-[3px] border-black dark:border-white
                     shadow-[6px_6px_0px_0px_black] dark:shadow-[6px_6px_0px_0px_#64FFDA]
                     /* STRUKTUR GAMBAR 1 (RAPI & MELENGKUNG) */
                     rounded-full" /* Membuat nav melengkung rapi */
        >
          {navItems.map((item) => {
            const isActive = active === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className="relative p-3 rounded-full outline-none group"
              >
                {/* Background saat Aktif (Meluncur Halus) */}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    // Pakai satu warna aksen yang konsisten, misal Pink Neon
                    className="absolute inset-0 bg-[#FF71CE] rounded-full z-0 border-2 border-black" 
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Icon (Hanya Icon, Tidak Ada Teks biar Gak Penuh di HP) */}
                <div className="relative z-10 flex items-center justify-center">
                  <item.icon 
                    size={22} 
                    className={`transition-colors duration-300 stroke-[2.5px] ${
                      isActive ? "text-black" : "text-black dark:text-white"
                    }`} 
                  />
                </div>

                {/* Tooltip (Teks Deskripsi Kecil Muncul saat Tahan Ikon di HP) */}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-3 py-1.5 font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-2 border-white shadow-[3px_3px_0px_0px_black]">
                  {item.name}
                </span>
              </a>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}