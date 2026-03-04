import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const ProjectCard = ({ project, index }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass rounded-xl overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image || "https://via.placeholder.com/600x400?text=Project"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background: darkMode
              ? "linear-gradient(to top, #0a0a1a, transparent, transparent)"
              : "linear-gradient(to top, #f8fafc, transparent, transparent)",
          }}
        />
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full border ${
            darkMode
              ? "bg-cyan-400/20 text-cyan-400 border-cyan-400/30"
              : "bg-cyan-100 text-cyan-700 border-cyan-300"
          }`}
        >
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <Link to={`/project/${project._id}`}>
          <h3
            className={`text-xl font-bold mb-2 transition-colors ${
              darkMode ? "text-white hover:text-cyan-400" : "text-slate-900 hover:text-cyan-600"
            }`}
          >
            {project.title}
          </h3>
        </Link>
        <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? "text-gray-400" : "text-slate-500"}`}>
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack?.map((tech, i) => (
            <span
              key={i}
              className={`text-xs px-2 py-1 rounded-md border ${
                darkMode
                  ? "bg-white/5 text-gray-300 border-white/10"
                  : "bg-slate-100 text-slate-600 border-slate-200"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm transition-colors ${
                darkMode ? "text-gray-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <FaGithub /> Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm transition-colors ${
                darkMode ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-600 hover:text-cyan-700"
              }`}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;