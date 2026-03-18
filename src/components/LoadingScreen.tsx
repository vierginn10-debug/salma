import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// File ini hanya bertugas menghitung 0-100%
export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinished, 500); 
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
    >
      <h1 className="text-white font-black text-3xl mb-4 italic tracking-tighter">
        SALMA'S <span className="text-[#FF71CE]">PROJECT</span>
      </h1>
      <div className="w-64 h-6 border-4 border-white p-1 bg-black">
        <motion.div 
          className="h-full bg-[#01CDFE]" 
          style={{ width: `${progress}%` }} 
        />
      </div>
      <p className="text-white mt-4 font-mono text-sm">
        LOADING: {progress}%
      </p>
    </motion.div>
  );
}