import { useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import API from "../api/axios";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const categories = ["All", "Web", "API", "Full Stack"];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();

  useEffect(() => {
    fetchProjects();
  }, [activeCategory]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const params = activeCategory !== "All" ? { category: activeCategory } : {};
      const { data } = await API.get("/projects", { params });
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionTitle
        title="My Projects"
        subtitle="Things I've built with passion"
      />

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/30"
                : darkMode
                ? "glass text-gray-400 hover:text-white hover:border-cyan-400/30"
                : "glass text-slate-500 hover:text-slate-800 hover:border-cyan-400/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-center py-20 ${darkMode ? "text-gray-500" : "text-slate-400"}`}
        >
          No projects found in this category.
        </motion.p>
      )}
    </section>
  );
};

export default Projects;