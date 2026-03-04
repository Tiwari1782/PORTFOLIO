import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const LoadSpeed = () => {
  const [loadTime, setLoadTime] = useState(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        const nav = performance.getEntriesByType("navigation")[0];
        if (nav) {
          const time = (nav.loadEventEnd - nav.startTime) / 1000;
          setLoadTime(time.toFixed(2));
        }
      }, 100);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loadTime) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
      className={`flex items-center justify-center gap-2 py-2 text-xs ${
        darkMode ? "text-gray-600" : "text-slate-400"
      }`}
    >
      <FaBolt className={darkMode ? "text-yellow-400" : "text-yellow-500"} />
      Page loaded in{" "}
      <span className={`font-bold ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
        {loadTime}s
      </span>
    </motion.div>
  );
};

export default LoadSpeed;