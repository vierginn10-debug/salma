import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderCode, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", icon: Home, href: "#hero", color: "bg-[#FF71CE]" },
  { name: "About", icon: User, href: "#about", color: "bg-[#01CDFE]" },
  { name: "Project", icon: FolderCode, href: "#projects", color: "bg-[#05FFA1]" },
  { name: "Victory", icon: GraduationCap, href: "#certificates", color: "bg-[#B967FF]" },
];

export default function FloatingNav() {
  const [active, setActive] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Efek menyembunyikan nav saat scroll ke bawah (biar layar HP lega)
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
          className="fixed bottom-6 left-1/2 z-[100] flex items-center gap-1 bg-white dark:bg-[#112240] border-[3px] border-black p-1.5 shadow-[6px_6px_0px_0px_black] dark:shadow-[6px_6px_0px_0px_#64FFDA] transform-gpu"
        >
          {navItems.map((item) => {
            const isActive = active === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className="relative p-3 group outline-none"
              >
                {/* Background Kotak Berwarna saat Aktif */}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute inset-0 ${item.color} border-2 border-black z-0`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Icon */}
                <div className="relative z-10">
                  <item.icon 
                    size={22} 
                    className={`transition-colors duration-300 stroke-[2.5px] ${
                      isActive ? "text-black" : "text-black dark:text-white"
                    }`} 
                  />
                </div>

                {/* Label Tooltip (Muncul saat Hover di Desktop / Tahan di HP) */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white">
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