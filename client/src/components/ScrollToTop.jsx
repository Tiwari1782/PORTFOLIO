import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            darkMode
              ? "bg-cyan-400 text-black shadow-cyan-400/30 hover:shadow-cyan-400/50"
              : "bg-cyan-600 text-white shadow-cyan-600/30 hover:shadow-cyan-600/50"
          }`}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;