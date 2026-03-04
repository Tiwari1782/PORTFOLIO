import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../api/axios";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await API.get(`/projects/${id}`);
        setProject(data);
      } catch (error) {
        console.error("Failed to fetch project:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className={`text-xl ${darkMode ? "text-gray-400" : "text-slate-500"}`}>
          Project not found 😕
        </p>
        <Link
          to="/"
          className={`flex items-center gap-2 ${
            darkMode ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-600 hover:text-cyan-700"
          }`}
        >
          <FaArrowLeft /> Go back home
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-16 px-4 max-w-4xl mx-auto"
    >
      {/* Back Button */}
      <Link
        to="/"
        className={`inline-flex items-center gap-2 transition-colors mb-8 ${
          darkMode ? "text-gray-400 hover:text-cyan-400" : "text-slate-500 hover:text-cyan-600"
        }`}
      >
        <FaArrowLeft /> Back to Home
      </Link>

      {/* Project Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={`rounded-2xl overflow-hidden mb-8 border ${
          darkMode ? "border-white/10" : "border-slate-200"
        }`}
      >
        <img
          src={project.image || "https://via.placeholder.com/800x400?text=Project"}
          alt={project.title}
          className="w-full h-64 md:h-96 object-cover"
        />
      </motion.div>

      {/* Category Badge */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`inline-block text-xs font-semibold px-4 py-1 rounded-full border mb-4 ${
          darkMode
            ? "bg-cyan-400/20 text-cyan-400 border-cyan-400/30"
            : "bg-cyan-100 text-cyan-700 border-cyan-300"
        }`}
      >
        {project.category}
      </motion.span>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        {project.title}
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`leading-relaxed mb-8 text-lg ${
          darkMode ? "text-gray-400" : "text-slate-600"
        }`}
      >
        {project.description}
      </motion.p>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <h3
          className={`font-semibold mb-3 ${
            darkMode ? "text-white" : "text-slate-800"
          }`}
        >
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack?.map((tech, i) => (
            <span
              key={i}
              className={`px-4 py-2 rounded-lg text-sm border ${
                darkMode
                  ? "bg-white/5 text-gray-300 border-white/10"
                  : "bg-slate-100 text-slate-600 border-slate-200"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap gap-4"
      >
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 glass rounded-xl transition-all hover:scale-105 ${
              darkMode
                ? "text-white hover:border-cyan-400/30"
                : "text-slate-700 hover:border-cyan-400/30"
            }`}
          >
            <FaGithub className="text-lg" /> View Source Code
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-105"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </motion.div>
    </motion.section>
  );
};

export default ProjectDetail;