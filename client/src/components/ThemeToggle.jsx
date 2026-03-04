import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
        border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 0 : 180, scale: [0.8, 1] }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <FaSun className="text-yellow-400 text-lg" />
        ) : (
          <FaMoon className="text-slate-700 text-lg" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;