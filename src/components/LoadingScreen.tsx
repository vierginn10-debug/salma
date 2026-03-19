import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [phase, setPhase] = useState<"text" | "ascii">("text");
  const [typedText, setTypedText] = useState("");
  
  const fullText = "BYPASSING_SALMA_CORE_SYSTEM...";

  // 1. FUNGSI SUARA (Bebas dari 'any' - ESLint Friendly)
  const playSound = useCallback((frequency: number, type: OscillatorType, duration: number) => {
    try {
      // Definisi tipe agar TypeScript mengenali AudioContext versi lama (Safari/Webkit)
      interface CustomWindow extends Window {
        webkitAudioContext?: typeof AudioContext;
      }

      const AudioContextClass = window.AudioContext || (window as CustomWindow).webkitAudioContext;
      
      if (!AudioContextClass) return;

      const context = new AudioContextClass();
      const osc = context.createOscillator();
      const gain = context.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, context.currentTime);
      gain.gain.setValueAtTime(0.01, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(context.destination);
      osc.start();
      osc.stop(context.currentTime + duration);
    } catch (e) {
      // Error audio tidak akan menghentikan proses loading
    }
  }, []);

  // 2. DATA ASCII (Gunakan useMemo agar tidak render ulang terus-menerus)
  const asciiArt = useMemo(() => `cllllcccccc:cclllllllllc:;;,,,;;:cc::::::::::cccccccccccccc:;;;:cccccccc:::;:::,
;;;;;;;;;:cloxkOO000K000Oxol:;:ccccccccllllloooolllccc:::;cccllloooooooc:::cc:;,
,,,,,;;cldkOKNNNNXXXXXXXXXKKOdll::::codkOOO0000Oxxooxdodxlcccodoooollllllccccc:;
,,,,;codkKXXXXXXXKKKKKKKKKKXXKOxl:coOXNWWWWWNNXXKKKK0xllkdcc::cccccllloooodddl:,
,,;:ldx0XXXXKKKKXXKKXKKK00000KK0kdONWWWWNNXKK0Okxddkkdolxdc:;cdkOO000KKKXK000kl,
,,:lxxOXXXKKKKOOkxxxkOO000OOO00KKKOk0XXXKK0Okxdolc:collk0dcc;lO000KK000OOkxxxo:,
,;cdkkKXKKKK0kkkkO00OOOO0OkOOkOKk:';lx0K00kxdlcc::;;cc;oKklc;:loolllccccccccc:;,
;:oxk0XKKKkox0KXNWWNXOO00dckOxOx,'lOKKK000Okoc::;;;,;:,:k0xl:cdxxkkkOOO000KKK0o;
;cokOKXK0Kxlx0XWWMMWWKkXKocOkxx;.oKNNNX00Okxdl:;;;,';:';oxxo:dNWNNNNXXKKK000Okc,
;cdkO0KK0KOox0KXWWWWXxoKKloOxxo',oxOXKkolc:;:ll:;;,',;',cc:cccddoooollccccc::::;
;cok00KK000xx0O0K0OOdd0WKoxOdd:..,;oOOo;;,''',cc:;,',,.,:;':lodddddxxo:;;;,;;;:;
;clk0O0000KkdOOOxloxOKXNOokxcl;.;oxxOk::oddolc:lc;'','.;:.'clcooollllc:;;;;:;:c;
,;cd00O00O00OkxdlllddxkOkxdlloc,oXXKOo;cox00kl:::;,,'.,;'.,llcloooolodoodl;;,;c:
;;:ld00OO0OkOOOOOOO0Oxddolloxo;:kKKXOl:oxxxdl;,,;;,'.','.';lccdxxxxdxkxxdc;;,;::
;;;:ld0K0kOOOOkxkkOkdlloxkkdc,cO00XX0xllldxoc;,,,;'.','.'';ol:lddddooddolcc:::c;
lol::lokKKOkkOkkOkkkkkxxdo::lk0kooOXKkollooc;,,''..','..';ldlccccccccccccllcc:;;
ccccccclok0KKOkkxxxdddooodk00kdlcdk0XXOolc;,'....';;'..':lddcclllcllccoO0000klc:
xkkkdccc::ldkO00000000000Oxdc:ccoO0Ox00kkdl:,',,,,,'....:xOxloddddddlckXXXXXKdc:
XXNNOlcc:;;:::cloodddoolc:;;::ldOXXd:dKK0Oxdodkxlc;,,',:ccodxxxdddooc:xKXXXKOoc:
KNNXkl:c:ccccccllllllololloolcoKXX0c..;ldxkOKKOkkoc:;;;;;cdxO0Oxddollccoddoolc:;
xxxdoccc:ododdodxdxdoxddddddxk0X0Ox:....,:okKOOkl;;;,'.,coxxolc::llc:;::;;;::;;;
lllllllcc:::::::clllcc:::::lkXWXkoc:,...';okkool:;;:;..,;:;,,;:;;:codddddddxxoc:
00000koc:cooolcclclolcl:;:lkOOKWXOoc;;:clodkkdlc;;,,'.....',;;;::;,;oO000KK00Oo:
00000Odl:lodxocclxkkkolc:okkxxkKWWX00OOOOOkxxkkdo:;,'...',,,,;::::,.'lkxxxxxdo:;
OO0000kl:coodllclkOOOdlcokxddxkkKNNKXXK0OOkkO0xooc;,.'',,,'',::c::;'.,cccccc::::
OOOOOOOdclddolclloO0xolokkoodkOOkk0KKK0000Okkdl:;,,;::;,'''.,c::cc:,..;;,,,''',,
kkkOOOOxllolccccclxkdclxkdollk0OkkdkKK0Okkxddooc:ldkOkx:....'cccccc;..';;,,,,,,'
kkkkkkkkdc:cooclddddddxxddl::x0OkkkXWWNNNXKXX0xold0K0Oko.....:ccccc:,..;:;;;;;,'
xxkkkkkkxl:lddlcllllodxoool;;d0kkx0WWWWMMWNWKkollldxxdl,.....;cccclc,..';;;;,,'.
xxxxxxxxxdcloolcloodxxolllc,:kkdoxXWNWWWWNNXOolcc:;;,'.......,cccloc,...,;;,,,'.
ddddxxxxxxodxdoloodxkdcccc:,:dooco0XXXXNNXK0xl::;;,'.........,cclllc:;;,,;;,,,..
oddddddddddlclccldxxooc;;:;',:co:,okOOO000Oxl;,,,,'..........;cccclc;'.',:;,,'..
oooooddddddollllokkdolc;',,'.';;,.,cddxxxxxdlc,'''...........,::clcc:;;,',;,''..
llooooooddddooookOOxdl:;,.....;:,..,:looddddl;'..''........',cooolllll:;,',,'...
lllllloooooooodxOOkdol,.'...'cooodxddxddddddl;'...',,,:ol;:oddolc::;;;'..';,'...
cccllllllllookOOXKdldl'....,dkOOO0OOkO00OOOOkdddc,,clxOkOd;,;c:',,,''...'';;....
:cccccclcllllocckd,'dKo...;x0Okkxolldxdc:clooool:;,',;lcld;..;;.........';;,....
::::::cccccccl:;ll..cd:..;xOkxxdc:lol;,'''',,,''.,,.'.',,:'..',..........,;'....
;;:::::::::ccc:,:c...'',;okxdollddlcccc:::::;,........''''..',,,,,;;;;;::c::;;,:
;;;;;;;;;::::::;::,'',;::loll:::c:;;,,,',,,,;;,,,;:cloddxxkOOO0OxxxxkkkOKKKK00OO`, []);

  // 3. LOGIKA PENGETIKAN (Fase 1)
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
        // Mainkan suara setiap 2 karakter agar tidak terlalu berisik
        if (typedText.length % 2 === 0) playSound(150, "square", 0.02);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Pindah ke fase ASCII setelah teks selesai
      setTimeout(() => setPhase("ascii"), 800);
    }
  }, [typedText, playSound]);

  // 4. LOGIKA SELESAI (Fase 2)
  useEffect(() => {
    if (phase === "ascii") {
      const timer = setTimeout(() => {
        playSound(880, "sine", 0.1);
        onFinished();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [phase, onFinished, playSound]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#020202] flex flex-col items-center justify-center font-mono overflow-hidden touch-none"
    >
      {/* MONITOR SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <AnimatePresence mode="wait">
        {phase === "text" ? (
          <motion.div 
            key="text" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="text-[#64FFDA] text-sm md:text-xl font-bold z-10 tracking-[0.2em]"
          >
            <span className="opacity-40">SYSTEM_</span>{typedText}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="inline-block w-2 h-5 bg-[#64FFDA] ml-2 align-middle shadow-[0_0_8px_#64FFDA]" 
            />
          </motion.div>
        ) : (
          <motion.div
            key="ascii-container"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center z-10 w-full px-4"
          >
            {/* CONTAINER ASCII DENGAN GLOW SOFT */}
            <div className="relative w-full max-w-[320px] md:max-w-[420px] aspect-square flex items-center justify-center overflow-hidden border border-[#64FFDA]/10 bg-black/40 backdrop-blur-md rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              <motion.pre 
                className="text-[#64FFDA] text-[3.2px] leading-[0.8] sm:text-[4.5px] md:text-[7.5px] whitespace-pre font-bold select-none opacity-70"
              >
                {asciiArt}
              </motion.pre>

              {/* LASER SCANNER LINE */}
              <motion.div 
                animate={{ top: ["-5%", "105%"] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                className="absolute w-full h-[1.5px] bg-[#64FFDA]/40 shadow-[0_0_15px_#64FFDA] z-20" 
              />
            </div>

            {/* IDENTITY FOOTER */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <h1 className="text-white text-3xl md:text-5xl tracking-[0.6em] font-black italic uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Salma
              </h1>
              <div className="flex items-center gap-3 mt-6 justify-center">
                <div className="h-[1px] w-12 bg-[#64FFDA]/20" />
                <p className="text-[#64FFDA] text-[9px] md:text-[11px] tracking-[0.5em] uppercase font-bold opacity-60">
                  Authentication Success
                </p>
                <div className="h-[1px] w-12 bg-[#64FFDA]/20" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CORNER DECORATIONS */}
      <div className="absolute top-10 left-10 w-10 h-10 border-t border-l border-[#64FFDA]/20" />
      <div className="absolute bottom-10 right-10 w-10 h-10 border-b border-r border-[#64FFDA]/20" />
    </motion.div>
  );
}