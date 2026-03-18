import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [phase, setPhase] = useState<"text" | "ascii" | "photo">("text");
  const [typedText, setTypedText] = useState("");
  const fullText = "DECODING_SALMA_IDENTITY...";

  // ASCII Art Shaded Terdetail milikmu
  const asciiArt = `
t8%.S;%SS8t;:.:;:8X%.8.t%tSXXXX;XSS@ X: ;SSXX@@XXXS%t;8S;t.S@XS Xt.8;.8X.:t8@.S@
t8t8%8X8:S8:88@@:8X8X:88@8;XXXX:8X@8t8 8.8.XtS:;.:8;8;t8S8S@S%;S8;8;8tt8.8;8X.8S
SS8X8X8S8S%8X.X8@@S%SXX88@St8%Xt.8 S8X8S8%88;8;88%8888S88t8%.88@.@X 8X 8X8;X8 :8
XXXSXXXSt88t.t8888S888S8SS:8S 88@8%8.8;8tX88t88S8%8%@St8;888S .@ . 8S88 8 8:888S
XXX@@S S8 XX8S888 88 8 8 8S888 X8888tS8;...:t;%@@S8S.88%X88t88 888t8;88.8888 8t@
X@XXt% 88888888S88888888888S .8tSS8X;..:tS@88S%t %X8.:8.888%.@X ;%SS@SX8@SS:8XS@
XX@%8S@%8888888888888888888 8% 8:X8..;%S88@%: :tS%.S8@88%:S88 .S 88@8@X@@8X X@8S
XXX .S 88 888@ XS@888XX 88%8. 8 88:88;88%t: :SX8 X88S8S8@8X%8S8SS 8S@8@8888888:@
S@.@:888S8888% 8S888;  8 8Xt88 888@S8: S@t X@  88 %t8%@.X888 8888888 8.888S88 8%
XXX@ S8888888 8S8t:..88.X%XS8 88;8t 8X88S8S@8888. ;SS:@88XX8 88tS 8@88tS%.::.@8t
@S8.  8 888t8  8%.::;%.8X::888;.8@ 8XSX8X;%@8.8% .tS@;SX.t:8:@...  .:tt%%%%SStXX
@.%%  88SS888S88t:::.t8 ; 8t888@X ;.88@@88 t%:: ..tX ;X ;S8%8t;St@@@@@88888888:8
@8@%  888%8 8 8SX   :888 .t@ @:X;888S8%8888t@8%:  SS ;X @%X@88%.888888:8;8:8S;88
Xt8 8X88%S8;8 888 @S888t  888888t88@88@8888tX@88:.@%:S@X:SS8@:t;   t;8;8:8;%8t.8
S%S88 S 888888X%X8:S t8888@88X@S@S;S%888 . @8; tS;@:t8t8S8.t88888:88 8:88%8X%888
S8:@ 8 %8 88@ t;8t88@8S88 X8888 S8@88 ;  8 8S%% XS%.X@. 8%.X 8888X8t@%@ 8;88%8X
XXS@88 S88%XS:88%;SS 8S @888@S8X t88 8 8X S88:;; .:X8: XX:  8:. % S@; S S8;t%%8t
SX@88888XS SXX@@XS  @888X8SSX88 S888@8@8X X8888@: %S;:@S%S .X8;@SSXXXtXX8S8X8888
SXt%8888t 8   SSX@8@%S SS%X8888:;8X8888t8X8%S%%@ :t; S%88;.: X8888888888888X88@X
;::@8.;8 88S8 XSSX@XS8XS8S%8 X@;8:@XX8 S8X8.;%X;XS: t88S:8:88t8:8.88S88X88888%8%
:888888:88 8@8  XS8@88888 S88S888% .8t8@8S8X@@@8X  t8@%;8t ;8%X888@X88t88888S;88
tS%S.8888@888 8ttX88888X%8t88:8@8% 88S@;   SX@X  SX8@%S%;88.8 8@Xt@%8@888%88 888
S@S88X;88:8t8888S  S S @888S8.888 8888:%8:t8 @XX.%@S88X;@;@;8:8:X:St88.888888888
:8%X88888:t8.88:88888.888888888%X88SX@S8.;:%8% S;@8;%:8.88  8X;@X8S888@SS@88888%
t88.888888:@    8 t8 88.8t8%8.88t 8X8XX8S;;88 X@:X;t%%@t8t; 8@.X;:88888 88:88S%8
8@88888888 @@X88XX8888888@888:X:88 @X888S S: X88;%t.X8X 8;.8S88888%88t88 888.8:t
S88@X8888%888t888888888t8:8;X:t.S88.%8@tX8. 888..t: XXS. @8X@XSX88:.:        S8;
88@888 8 8XX8X88X888S8 8;8;  X ;.%:SX8 @ %XXX88::;tXX8S8XS88@@X8%888;8;888888X88
X8@@@@ 88%SX: 888:   @8 888SXS8 :.tt..::..:    88SSSX@X8X88888t@ ;888.SS 8S8@8:8
SSX@XX%@8;888888%  8 8888XX8X@ @ t;8SX@X::X%;88888 %88XX8@88888888888.8t88888888
tt%SXSX @8    888888 S888 8888XS8S:.S@8SXXX8; 88:@@888X@8@@8@88 8 %88StX88XX: @8
;;;tt%St88t8888888S8888@S 8X88S@X88 @8SSS;X @88X8XXt.%8@8S88;;:@88%88@%8888XX8X%
:.:::;t%;888888@888@8888SS8888  8 S88@8@% 8SS8%8%8.;8  8%88@8X8;;.888X: ;;;%t;%X
.. ...:;t8888888   :  8 8@S8888%S@8:.;%St88ttS@X%S8.: X 8888t;8:t88%88X.;:;;t;%@
.      . tSt8 %X8888888 888888;8X ;8%:;;;.88 ; 88.8: 8S88@@8S@.88%888888S:;;tt;X8
;::: : .  X8t8X8888@8S8@S8S@X8S@88:;%;::.8S888888X:S%XSX8@8X888888888@88:8.ttt8@
tt;;;:::. :8SX@:X88  SS88 8888X88:8@%t;;:88;X8888;S@88X@@8888 8;888:t88X:.%%tt8@
%%ttt;;;:...X S@88@%SX8888;t88S88X 88888@SS@.88888X8@8@8@@@8S:8X8X@.8%;8%;tt%S88
XXSS%%X%t;:t888888XX88@:8%@%%%;%88:S  :;%t 88;8888@888@8@@888:;t@88.X888%8.t%@88
@@@XSSS%%%t;.8;88XS8888%%8%8@8X8888 @%;:: X88%@@@88XS8@8888@8S88%888.S@8@:t%S888
888@@@XX@X%: @%8@. SXS.8S%8@XSSS8X8S 88X%tS@.tX88888@@8@888@8;8888 8888%XXS%S888
888888888XX8%X8XS X88888XS@88% 88;X8 @88@%S88%8S888@%8X;%X %888888%%8@88X@SS@8X8
88888888888@X:; 888 @8%t@88X@ t t%:t8;88S :88@88XS% ;  8:8888@X8888888@S%X:S@888
X@.88888888888XS@t8t @t8S8@8;X88S X X8 8X88%; ;: :t@%% X8888t.888S8888X8S8tX@88@
 8.88 8;8;88@8@88X8@8@%@X@8:tX@@.88tX%@%@t 8;.  . X8;8@888S88;8888S88@8%%:SS8888
  8%%8;8:888S8XX8@88S 8XS@8 %8  S.;%888@8@XS:.:%8 %SS@@8  88@t8@8888@8888:XX888X
  .8t.888 8 8.8.8Xt8@8tX; S.8 88t.:88@@%  X:.@@%88X@S888SS%8@88@S888888@SttS@@8:
. :; 8.t 8t;88 X:8%XX%t %St888.%XX;:...:.::  :;.  XX8@S;; :tt%S;S  t;. X888@SS%t`;

  useEffect(() => {
    // Phase 1: Typing Text (Dipercepat)
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 30); // Sangat cepat
    } else {
      setTimeout(() => setPhase("ascii"), 600);
    }
  }, [typedText]);

  useEffect(() => {
    if (phase === "ascii") {
      // ASCII hanya muncul sebentar (1.5 detik)
      setTimeout(() => setPhase("photo"), 1500);
    } else if (phase === "photo") {
      // Foto asli muncul (2 detik) lalu masuk web
      setTimeout(onFinished, 2000);
    }
  }, [phase, onFinished]);

  return (
    <motion.div
      exit={{ opacity: 0, filter: "blur(20px)" }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center font-mono"
    >
      <div className="relative flex flex-col items-center w-full px-4">
        <AnimatePresence mode="wait">
          {phase === "text" && (
            <motion.div
              key="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[#64FFDA] text-xl font-bold"
            >
              {">"} {typedText}
              <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.5 }} className="inline-block w-2.5 h-5 bg-[#64FFDA] ml-1 align-middle" />
            </motion.div>
          )}

          {phase === "ascii" && (
            <motion.div
              key="ascii"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="border border-[#64FFDA]/10 p-4 bg-black/40"
            >
              <pre className="text-[#64FFDA] text-[3.5px] sm:text-[5px] md:text-[7px] leading-[1] whitespace-pre font-bold tracking-[0.4px]">
                {asciiArt}
              </pre>
            </motion.div>
          )}

          {phase === "photo" && (
            <motion.div
              key="photo"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="relative p-1 bg-gradient-to-tr from-[#64FFDA]/20 to-transparent rounded-2xl shadow-2xl">
                <img 
                  src="/muslimah-produktif.jpg" 
                  alt="Salma"
                  className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-2xl"
                />
              </div>
              <motion.h1 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="mt-4 text-[#64FFDA] text-lg font-bold tracking-[0.5em]"
              >
                SALMA
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}