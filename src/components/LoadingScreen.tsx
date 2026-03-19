import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [phase, setPhase] = useState<"text" | "ascii">("text");
  const [typedText, setTypedText] = useState("");
  
  const fullText = "BYPASSING_SALMA_CORE_SYSTEM...";

  // 1. FUNGSI SUARA (Bebas dari 'any' - ESLint Friendly)
  const playSound = useCallback((frequency: number, type: OscillatorType, duration: number) => {
    try {
      // Mengatasi error ESLint dengan interface window custom
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
      
      // Volume halus agar tidak pecah
      gain.gain.setValueAtTime(0.02, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(context.destination);
      osc.start();
      osc.stop(context.currentTime + duration);
    } catch (e) {
      // Audio fails silently
    }
  }, []);

  // 2. DATA ASCII (Memoized agar tidak re-render)
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
        if (typedText.length % 2 === 0) playSound(180, "square", 0.03);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setPhase("ascii"), 800);
    }
  }, [typedText, playSound]);

  // 4. LOGIKA SELESAI (Fase 2)
  useEffect(() => {
    if (phase === "ascii") {
      const timer = setTimeout(() => {
        playSound(700, "sine", 0.2);
        onFinished();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [phase, onFinished, playSound]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-[9999] bg-[#020202] flex flex-col items-center justify-center font-mono overflow-hidden touch-none select-none"
    >
      {/* MONITOR EFFECTS (SCANLINES & NOISE) */}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_3px,2px_100%] opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <AnimatePresence mode="wait">
        {phase === "text" ? (
          <motion.div 
            key="text" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="text-[#64FFDA] text-xs md:text-lg font-bold z-10 tracking-[0.3em]"
          >
            <span className="opacity-30">SYS_</span>{typedText}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.5 }} 
              className="inline-block w-2 h-5 bg-[#64FFDA] ml-2 align-middle shadow-[0_0_10px_#64FFDA]" 
            />
          </motion.div>
        ) : (
          <motion.div
            key="ascii-container"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center z-10 w-full px-6"
          >
            {/* TERMINAL BOX */}
            <div className="relative w-full max-w-[300px] md:max-w-[440px] aspect-square flex items-center justify-center border border-[#64FFDA]/20 bg-black/60 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,1)] z-10" />
              
              <motion.pre 
                className="text-[#64FFDA] text-[3.2px] leading-[0.8] sm:text-[4px] md:text-[6.5px] lg:text-[7.5px] whitespace-pre font-bold opacity-80"
              >
                {asciiArt}
              </motion.pre>

              {/* SCANNER LASER */}
              <motion.div 
                animate={{ top: ["-5%", "105%"] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                className="absolute left-0 w-full h-[1.5px] bg-[#64FFDA]/30 shadow-[0_0_15px_#64FFDA] z-20" 
              />
            </div>

            {/* IDENTITY FOOTER */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.5 }}
              className="mt-10 text-center"
            >
              <h1 className="text-white text-4xl md:text-6xl tracking-[0.5em] font-black italic uppercase drop-shadow-[0_0_15px_rgba(100,255,218,0.3)]">
                Salma
              </h1>
              <div className="flex items-center gap-4 mt-6 justify-center">
                <div className="h-[1px] w-12 bg-[#64FFDA]/20" />
                <p className="text-[#64FFDA] text-[9px] md:text-[11px] tracking-[0.4em] uppercase font-bold opacity-50">
                  Authentication Success
                </p>
                <div className="h-[1px] w-12 bg-[#64FFDA]/20" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DECORATIVE CORNERS */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[#64FFDA]/20" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-[#64FFDA]/20" />
    </motion.div>
  );
}