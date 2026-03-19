import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface CustomWindow extends Window {
  webkitAudioContext?: typeof AudioContext;
}

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [phase, setPhase] = useState<"text" | "ascii">("text");
  const [typedText, setTypedText] = useState("");
  
  // Teks baru yang lebih keren & teknis
  const fullText = "BYPASSING_SALMA_CORE_SYSTEM...";

  const playSound = useCallback((frequency: number, type: OscillatorType, duration: number) => {
    try {
      const Win = window as unknown as CustomWindow;
      const AudioContextClass = Win.AudioContext || Win.webkitAudioContext;
      if (!AudioContextClass) return;
      const context = new AudioContextClass();
      
      if (context.state === 'suspended') context.resume();

      const osc = context.createOscillator();
      const gain = context.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, context.currentTime);
      gain.gain.setValueAtTime(0.02, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + duration);
      osc.connect(gain);
      gain.connect(context.destination);
      osc.start();
      osc.stop(context.currentTime + duration);
    } catch (e) { /* Audio error ditangani diam-diam agar tidak lag */ }
  }, []);

  const asciiArt = `cllllcccccc:cclllllllllc:;;,,,;;:cc::::::::::cccccccccccccc:;;;:cccccccc:::;:::,
;;;;;;;;;:cloxkOO000K000Oxol:;:ccccccccllllloooolllccc:::;cccllloooooooc:::cc:;,
,,,,,;;cldkOKNNNNXXXXXXXXXKKOdll::::codkOO0000Oxxooxdodxlcccodoooollllllccccc:;
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
;;;;;;;;;::::::;::,'',;::loll:::c:;;,,,',,,,;;,,,;:cloddxxkOOO0OxxxxkkkOKKKK00OO`;

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
        playSound(150, "square", 0.03);
      }, 40);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setPhase("ascii"), 600);
    }
  }, [typedText, playSound]);

  useEffect(() => {
    if (phase === "ascii") {
      const timer = setTimeout(() => {
        playSound(880, "sine", 0.1);
        onFinished();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [phase, onFinished, playSound]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      // Tambahkan touch-none & will-change agar smooth di HP
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center font-mono overflow-hidden touch-none will-change-transform"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <AnimatePresence mode="wait">
        {phase === "text" ? (
          <motion.div 
            key="text" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="text-[#64FFDA] text-xs sm:text-sm md:text-lg font-bold z-10"
          >
            {">"} {typedText}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }} 
              className="inline-block w-2 h-4 bg-[#64FFDA] ml-1 align-middle" 
            />
          </motion.div>
        ) : (
          <motion.div
            key="ascii-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center z-10 w-full px-6"
          >
            <div className="relative w-full max-w-[300px] md:max-w-[350px] aspect-square flex items-center justify-center overflow-hidden border border-[#64FFDA]/10 bg-black/40 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <motion.pre 
                className="text-[#64FFDA] text-[4px] leading-[0.85] sm:text-[6px] md:text-[8px] whitespace-pre font-bold tracking-[0.05em] text-center select-none"
              >
                {asciiArt}
              </motion.pre>

              {/* Garis Scanner Tipis (Ringan di prosesor HP) */}
              <motion.div 
                animate={{ top: ["-5%", "105%"] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                className="absolute w-full h-[1px] bg-[#64FFDA]/30 shadow-[0_0_8px_#64FFDA]" 
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 5 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <h1 className="text-white text-lg md:text-2xl tracking-[0.4em] font-bold">SALMA</h1>
              <p className="text-[#64FFDA] text-[7px] md:text-[9px] tracking-[0.6em] mt-3 opacity-50">IDENTITY_VERIFIED</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-[#64FFDA]/20" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-[#64FFDA]/20" />
    </motion.div>
  );
}