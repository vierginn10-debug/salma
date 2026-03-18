import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen"; 
import Index from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className={isLoading ? "hidden" : "block"}>
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