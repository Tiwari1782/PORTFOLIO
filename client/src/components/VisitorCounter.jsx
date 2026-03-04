import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import API from "../api/axios";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const { darkMode } = useTheme();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Check if already visited this session
        const visited = sessionStorage.getItem("portfolio_visited");
        if (!visited) {
          const { data } = await API.post("/visitors");
          setCount(data.count);
          sessionStorage.setItem("portfolio_visited", "true");
        } else {
          const { data } = await API.get("/visitors");
          setCount(data.count);
        }
      } catch (error) {
        console.error("Visitor tracking failed:", error);
      }
    };
    trackVisit();
  }, []);

  if (count === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      className={`fixed bottom-20 left-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border ${
        darkMode
          ? "bg-[#0a0a1a]/80 border-white/10 text-gray-400"
          : "bg-white/80 border-slate-200 text-slate-500"
      } backdrop-blur-md`}
    >
      <FaEye className={darkMode ? "text-cyan-400" : "text-cyan-600"} />
      <span>
        <span className={`font-bold ${darkMode ? "text-white" : "text-slate-800"}`}>
          {count.toLocaleString()}
        </span>{" "}
        visitors
      </span>
    </motion.div>
  );
};

export default VisitorCounter;