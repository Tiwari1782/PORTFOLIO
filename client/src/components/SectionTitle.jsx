import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const SectionTitle = ({ title, subtitle }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-xl mx-auto ${darkMode ? "text-gray-500" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
    </motion.div>
  );
};

export default SectionTitle;