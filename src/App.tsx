import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen"; 
import Index from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // 1. Inisialisasi state dengan mengecek sessionStorage
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== "undefined") {
      const savedStatus = sessionStorage.getItem("hasLoaded_Salma");
      return savedStatus !== "true";
    }
    return true;
  });

  // 2. Fungsi saat loading selesai
  const handleFinished = () => {
    sessionStorage.setItem("hasLoaded_Salma", "true");
    setIsLoading(false);
  };

  return (
    <div className="bg-white dark:bg-[#020202] min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onFinished={handleFinished} />
        )}
      </AnimatePresence>

      {/* Konten hanya tampil jika loading sudah selesai */}
      <div className={isLoading ? "hidden" : "block animate-in fade-in duration-700"}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;