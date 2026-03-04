import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaBookOpen } from "react-icons/fa";
import { useState, useEffect } from "react";
import API from "../api/axios";

const GITHUB_USERNAME = "Tiwari1782";

const GitHub = () => {
  const { darkMode } = useTheme();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGitHubStats();
  }, []);

  const statCards = stats
    ? [
        { icon: <FaBookOpen />, label: "Repositories", value: stats.public_repos },
        { icon: <FaUsers />, label: "Followers", value: stats.followers },
        { icon: <FaStar />, label: "Following", value: stats.following },
        { icon: <FaCodeBranch />, label: "Public Gists", value: stats.public_gists },
      ]
    : [];

  // Theme for GitHub contribution graph
  const graphTheme = darkMode ? "github-dark" : "github-light";

  return (
    <section id="github" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionTitle
        title="GitHub Activity"
        subtitle="My open source contributions and coding activity"
      />

      {/* GitHub Stats Cards */}
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        stats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {statCards.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-5 text-center hover:border-cyan-400/30 transition-all"
              >
                <div
                  className={`text-2xl mb-2 flex justify-center ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}
                >
                  {stat.icon}
                </div>
                <p
                  className={`text-2xl font-bold mb-1 ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {stat.value}
                </p>
                <p className={`text-xs ${darkMode ? "text-gray-500" : "text-slate-400"}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )
      )}

      {/* Contribution Graph */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-6 mb-8 overflow-hidden"
      >
        <h3
          className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
            darkMode ? "text-white" : "text-slate-800"
          }`}
        >
          <FaGithub className={darkMode ? "text-cyan-400" : "text-cyan-600"} />
          Contribution Graph
        </h3>
        <div className="overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/${darkMode ? "00d4ff" : "0891b2"}/${GITHUB_USERNAME}`}
            alt="GitHub Contribution Graph"
            className="w-full min-w-[700px] rounded-lg"
          />
        </div>
      </motion.div>

      {/* GitHub Stats Cards (from github-readme-stats) */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 overflow-hidden"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&count_private=true&title_color=${
              darkMode ? "00d4ff" : "0891b2"
            }&icon_color=${darkMode ? "00d4ff" : "0891b2"}&text_color=${
              darkMode ? "9ca3af" : "64748b"
            }&bg_color=${darkMode ? "0a0a1a00" : "f8fafc00"}`}
            alt="GitHub Stats"
            className="w-full"
          />
        </motion.div>

        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 overflow-hidden"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&title_color=${
              darkMode ? "00d4ff" : "0891b2"
            }&text_color=${darkMode ? "9ca3af" : "64748b"}&bg_color=${
              darkMode ? "0a0a1a00" : "f8fafc00"
            }`}
            alt="Top Languages"
            className="w-full"
          />
        </motion.div>
      </div>

      {/* GitHub Streak */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-6 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USERNAME}&hide_border=true&ring=${
              darkMode ? "00d4ff" : "0891b2"
            }&fire=${darkMode ? "00d4ff" : "0891b2"}&currStreakLabel=${
              darkMode ? "00d4ff" : "0891b2"
            }&sideLabels=${darkMode ? "9ca3af" : "64748b"}&currStreakNum=${
              darkMode ? "ffffff" : "0f172a"
            }&dates=${darkMode ? "6b7280" : "94a3b8"}&sideNums=${
              darkMode ? "ffffff" : "0f172a"
            }&background=${darkMode ? "0a0a1a00" : "f8fafc00"}`}
            alt="GitHub Streak"
            className="w-full min-w-[500px] mx-auto"
          />
        </div>
      </motion.div>

      {/* View Profile Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mt-10"
      >
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
            darkMode
              ? "border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
              : "border border-cyan-600/50 text-cyan-600 hover:bg-cyan-50"
          }`}
        >
          <FaGithub className="text-lg" /> View Full Profile
        </a>
      </motion.div>
    </section>
  );
};

export default GitHub;