import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import API from "../api/axios";
import { useTheme } from "../context/ThemeContext";
import {
  FaCertificate, FaTrophy, FaLaptopCode, FaBriefcase, FaExternalLinkAlt,
} from "react-icons/fa";

const typeIcons = {
  Certificate: <FaCertificate />,
  Award: <FaTrophy />,
  Hackathon: <FaLaptopCode />,
  Internship: <FaBriefcase />,
};

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const { data } = await API.get("/achievements");
        setAchievements(data);
      } catch (error) {
        console.error("Failed to fetch achievements:", error);
      }
    };
    fetchAchievements();
  }, []);

  if (achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionTitle
        title="Certificates & Achievements"
        subtitle="Recognitions and milestones"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass rounded-xl p-6 group hover:border-cyan-400/30 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`text-2xl ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
                {typeIcons[item.type] || <FaCertificate />}
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full border ${
                  darkMode
                    ? "bg-white/5 text-gray-400 border-white/10"
                    : "bg-slate-100 text-slate-500 border-slate-200"
                }`}
              >
                {item.type}
              </span>
            </div>
            <h3
              className={`text-lg font-bold mb-1 ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              {item.title}
            </h3>
            <p className={`text-sm mb-2 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
              {item.issuer}
            </p>
            <p className={`text-xs mb-3 ${darkMode ? "text-gray-500" : "text-slate-400"}`}>
              {item.date}
            </p>
            {item.description && (
              <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-slate-500"}`}>
                {item.description}
              </p>
            )}
            {item.certificateLink && item.certificateLink !== "#" && (
              <a
                href={item.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm transition-colors ${
                  darkMode ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-600 hover:text-cyan-700"
                }`}
              >
                <FaExternalLinkAlt className="text-xs" /> View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;