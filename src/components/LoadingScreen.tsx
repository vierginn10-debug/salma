import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [text, setText] = useState("");
  const fullText = "FETCHING_PORTFOLIO_DATA_V2.0...";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const doneTimeout = setTimeout(onFinished, 1000);
      return () => clearTimeout(doneTimeout);
    }
  }, [index, onFinished]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center font-mono p-6"
    >
      {/* Efek Garis TV Jadul (Scanlines) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]" />

      <div className="w-full max-w-lg border border-[#64FFDA]/30 bg-black/50 p-6 shadow-[0_0_30px_rgba(100,255,218,0.1)] backdrop-blur-md">
        <div className="flex gap-2 mb-6 opacity-50">
          <div className="w-2 h-2 bg-[#64FFDA] rounded-full" />
          <div className="w-2 h-2 bg-[#64FFDA] rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-[#64FFDA] rounded-full" />
        </div>

        <p className="text-[#64FFDA] text-lg md:text-xl font-bold tracking-tight">
          {">"} {text}
          <motion.span 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-5 bg-[#64FFDA] ml-2"
          />
        </p>

        <div className="mt-8 space-y-1 text-[#64FFDA]/40 text-[10px] md:text-xs uppercase tracking-[0.2em]">
          <p>{">"} SYNCING_RESOURCES... OK</p>
          <p>{">"} BOOTING_CREATIVE_ENGINE... OK</p>
          <p>{">"} SALMA_IDENTITY_VERIFIED... TRUE</p>
        </div>
      </div>
    </motion.div>
  );
}