import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Preloader = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: darkMode ? "#0a0a1a" : "#f8fafc" }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className={`w-16 h-16 border-4 rounded-full ${
            darkMode ? "border-cyan-400" : "border-cyan-600"
          } border-t-transparent`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className={`text-lg font-semibold tracking-wider ${
            darkMode ? "text-cyan-400" : "text-cyan-700"
          }`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Preloader;