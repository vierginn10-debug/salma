import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface CustomWindow extends Window {
  webkitAudioContext?: typeof AudioContext;
}

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [phase, setPhase] = useState<"text" | "ascii" | "photo">("text");
  const [typedText, setTypedText] = useState("");
  const fullText = "DECODING_SALMA_IDENTITY...";

  const playSound = useCallback((frequency: number, type: OscillatorType, duration: number) => {
    try {
      const Win = window as unknown as CustomWindow;
      const AudioContextClass = Win.AudioContext || Win.webkitAudioContext;
      if (!AudioContextClass) return;
      const context = new AudioContextClass();
      const osc = context.createOscillator();
      const gain = context.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, context.currentTime);
      gain.gain.setValueAtTime(0.05, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + duration);
      osc.connect(gain);
      gain.connect(context.destination);
      osc.start();
      osc.stop(context.currentTime + duration);
    } catch (e) { console.log(e); }
  }, []);

  // ASCII Hasil Konversi Width: 80
  const asciiArt = `cllllcccccc:cclllllllllc:;;,,,;;:cc::::::::::cccccccccccccc:;;;:cccccccc:::;:::,
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
;;;;;;;;;::::::;::,'',;::loll:::c:;;,,,',,,,;;,,,;:cloddxxkOOO0OxxxxkkkOKKKK00OO`;

  useEffect(() => {
    if (typedText.length < fullText.length) {
      setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
        playSound(150, "square", 0.05);
      }, 30);
    } else {
      setTimeout(() => setPhase("ascii"), 600);
    }
  }, [typedText, playSound]);

  useEffect(() => {
    if (phase === "ascii") {
      setTimeout(() => { setPhase("photo"); playSound(880, "sine", 0.1); }, 1500);
    } else if (phase === "photo") {
      setTimeout(onFinished, 2000);
    }
  }, [phase, onFinished, playSound]);

  return (
    <motion.div
      exit={{ opacity: 0, filter: "blur(20px)" }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center font-mono overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <AnimatePresence mode="wait">
        {phase === "text" ? (
          <motion.div key="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[#64FFDA] text-lg font-bold">
            {">"} {typedText}<motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.5 }} className="inline-block w-2.5 h-5 bg-[#64FFDA] ml-1 align-middle" />
          </motion.div>
        ) : (
          <motion.div
            key="frame"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            {/* WADAH UTAMA - UKURAN TETAP */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center overflow-hidden border border-[#64FFDA]/20 bg-black/60 rounded-2xl shadow-2xl">
              <AnimatePresence mode="wait">
                {phase === "ascii" ? (
                  <motion.pre 
                    key="ascii" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    className="text-[#64FFDA] text-[6px] sm:text-[8.5px] md:text-[9.5px] leading-[0.75] whitespace-pre font-bold tracking-[0.1px] text-center"
                  >
                    {asciiArt}
                  </motion.pre>
                ) : (
                  <motion.img 
                    key="photo" 
                    src="/muslimah-produktif.jpg" 
                    alt="Salma" 
                    initial={{ opacity: 0, filter: "grayscale(1)" }} 
                    animate={{ opacity: 1, filter: "grayscale(0)" }} 
                    className="w-full h-full object-cover rounded-2xl" 
                  />
                )}
              </AnimatePresence>
              {/* Efek Garis Bergerak */}
              <motion.div animate={{ top: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute w-full h-10 bg-[#64FFDA]/5 pointer-events-none" />
            </div>

            {/* LABEL DI BAWAH FRAME */}
            {phase === "photo" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-center">
                <span className="text-[#64FFDA] text-[10px] tracking-[1em] font-light italic">IDENTITY VERIFIED</span>
                <h1 className="text-white text-2xl font-bold tracking-[0.2em] uppercase mt-1">SALMA</h1>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-10 left-10 w-8 h-8 border-t border-l border-[#64FFDA]/30" />
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b border-r border-[#64FFDA]/30" />
    </motion.div>
  );
}