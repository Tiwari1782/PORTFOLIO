import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import API from "../api/axios";
import { useTheme } from "../context/ThemeContext";
import {
  FaPlus, FaTrash, FaSignOutAlt, FaProjectDiagram, FaCertificate, FaEnvelope,
} from "react-icons/fa";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    techStack: "",
    category: "Web",
    liveLink: "",
    githubLink: "",
    image: "",
  });

  const [achievementForm, setAchievementForm] = useState({
    title: "",
    issuer: "",
    date: "",
    description: "",
    certificateLink: "",
    type: "Certificate",
  });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin");
      return;
    }
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      setLoading(true);
      const [projRes, achRes, msgRes] = await Promise.all([
        API.get("/projects"),
        API.get("/achievements"),
        API.get("/contact"),
      ]);
      setProjects(projRes.data);
      setAchievements(achRes.data);
      setMessages(msgRes.data);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast.info("Logged out");
    navigate("/admin");
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...projectForm,
        techStack: projectForm.techStack.split(",").map((s) => s.trim()),
      };
      await API.post("/projects", payload);
      toast.success("Project added! 🎉");
      setProjectForm({
        title: "", description: "", techStack: "", category: "Web",
        liveLink: "", githubLink: "", image: "",
      });
      fetchAll();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add project");
    }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      await API.delete(`/projects/${id}`);
      toast.success("Project deleted");
      fetchAll();
    } catch (error) {
      toast.error("Failed to delete");
    }
  };

  const handleAddAchievement = async (e) => {
    e.preventDefault();
    try {
      await API.post("/achievements", achievementForm);
      toast.success("Achievement added! 🎉");
      setAchievementForm({
        title: "", issuer: "", date: "", description: "",
        certificateLink: "", type: "Certificate",
      });
      fetchAll();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add achievement");
    }
  };

  const handleDeleteAchievement = async (id) => {
    if (!window.confirm("Delete this achievement?")) return;
    try {
      await API.delete(`/achievements/${id}`);
      toast.success("Achievement deleted");
      fetchAll();
    } catch (error) {
      toast.error("Failed to delete");
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    try {
      await API.delete(`/contact/${id}`);
      toast.success("Message deleted");
      fetchAll();
    } catch (error) {
      toast.error("Failed to delete");
    }
  };

  const tabs = [
    { key: "projects", label: "Projects", icon: <FaProjectDiagram />, count: projects.length },
    { key: "achievements", label: "Achievements", icon: <FaCertificate />, count: achievements.length },
    { key: "messages", label: "Messages", icon: <FaEnvelope />, count: messages.length },
  ];

  const inputClass = `w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-1 transition-all text-sm ${
    darkMode
      ? "bg-white/5 border-white/10 text-white placeholder-gray-600 focus:border-cyan-400/50 focus:ring-cyan-400/30"
      : "bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-200"
  }`;

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-3xl font-bold gradient-text"
        >
          Admin Dashboard
        </motion.h1>
        <button
          onClick={handleLogout}
          className={`flex items-center gap-2 text-sm transition-colors ${
            darkMode ? "text-gray-400 hover:text-red-400" : "text-slate-500 hover:text-red-500"
          }`}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab.key
                ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/30"
                : darkMode
                ? "glass text-gray-400 hover:text-white"
                : "glass text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab.icon} {tab.label}
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === tab.key
                  ? "bg-black/20"
                  : darkMode
                  ? "bg-white/10"
                  : "bg-slate-200"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <>
          {/* ===== PROJECTS TAB ===== */}
          {activeTab === "projects" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div className="glass rounded-2xl p-6">
                <h3
                  className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  <FaPlus className={darkMode ? "text-cyan-400" : "text-cyan-600"} /> Add New Project
                </h3>
                <form onSubmit={handleAddProject} className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Project Title *"
                    value={projectForm.title}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                    className={inputClass}
                    required
                  />
                  <select
                    value={projectForm.category}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                    className={inputClass}
                  >
                    <option value="Web">Web</option>
                    <option value="API">API</option>
                    <option value="Full Stack">Full Stack</option>
                  </select>
                  <textarea
                    placeholder="Description *"
                    value={projectForm.description}
                    onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                    className={`${inputClass} md:col-span-2`}
                    rows="3"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Tech Stack (comma separated): React, Node.js, MongoDB"
                    value={projectForm.techStack}
                    onChange={(e) => setProjectForm({ ...projectForm, techStack: e.target.value })}
                    className={`${inputClass} md:col-span-2`}
                  />
                  <input
                    type="url"
                    placeholder="Live Link (https://...)"
                    value={projectForm.liveLink}
                    onChange={(e) => setProjectForm({ ...projectForm, liveLink: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="url"
                    placeholder="GitHub Link (https://...)"
                    value={projectForm.githubLink}
                    onChange={(e) => setProjectForm({ ...projectForm, githubLink: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="url"
                    placeholder="Image URL (https://...)"
                    value={projectForm.image}
                    onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                    className={`${inputClass} md:col-span-2`}
                  />
                  <button
                    type="submit"
                    className="md:col-span-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    Add Project
                  </button>
                </form>
              </div>

              <div className="space-y-3">
                {projects.map((project) => (
                  <div
                    key={project._id}
                    className="glass rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold truncate ${darkMode ? "text-white" : "text-slate-800"}`}>
                        {project.title}
                      </h4>
                      <p className={`text-sm truncate ${darkMode ? "text-gray-500" : "text-slate-400"}`}>
                        {project.description}
                      </p>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            darkMode
                              ? "bg-cyan-400/20 text-cyan-400"
                              : "bg-cyan-100 text-cyan-700"
                          }`}
                        >
                          {project.category}
                        </span>
                        {project.techStack?.slice(0, 3).map((t, i) => (
                          <span
                            key={i}
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              darkMode
                                ? "bg-white/5 text-gray-400"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteProject(project._id)}
                      className={`ml-4 transition-colors p-2 ${
                        darkMode ? "text-gray-500 hover:text-red-400" : "text-slate-400 hover:text-red-500"
                      }`}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
                {projects.length === 0 && (
                  <p className={`text-center py-8 ${darkMode ? "text-gray-600" : "text-slate-400"}`}>
                    No projects yet. Add one above!
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* ===== ACHIEVEMENTS TAB ===== */}
          {activeTab === "achievements" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div className="glass rounded-2xl p-6">
                <h3
                  className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  <FaPlus className={darkMode ? "text-cyan-400" : "text-cyan-600"} /> Add New Achievement
                </h3>
                <form onSubmit={handleAddAchievement} className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Title *"
                    value={achievementForm.title}
                    onChange={(e) => setAchievementForm({ ...achievementForm, title: e.target.value })}
                    className={inputClass}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Issuer * (e.g., Coursera, NPTEL)"
                    value={achievementForm.issuer}
                    onChange={(e) => setAchievementForm({ ...achievementForm, issuer: e.target.value })}
                    className={inputClass}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Date (e.g., 2024)"
                    value={achievementForm.date}
                    onChange={(e) => setAchievementForm({ ...achievementForm, date: e.target.value })}
                    className={inputClass}
                  />
                  <select
                    value={achievementForm.type}
                    onChange={(e) => setAchievementForm({ ...achievementForm, type: e.target.value })}
                    className={inputClass}
                  >
                    <option value="Certificate">Certificate</option>
                    <option value="Internship">Internship</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Award">Award</option>
                  </select>
                  <textarea
                    placeholder="Description"
                    value={achievementForm.description}
                    onChange={(e) => setAchievementForm({ ...achievementForm, description: e.target.value })}
                    className={`${inputClass} md:col-span-2`}
                    rows="2"
                  />
                  <input
                    type="url"
                    placeholder="Certificate Link (https://...)"
                    value={achievementForm.certificateLink}
                    onChange={(e) => setAchievementForm({ ...achievementForm, certificateLink: e.target.value })}
                    className={`${inputClass} md:col-span-2`}
                  />
                  <button
                    type="submit"
                    className="md:col-span-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    Add Achievement
                  </button>
                </form>
              </div>

              <div className="space-y-3">
                {achievements.map((item) => (
                  <div
                    key={item._id}
                    className="glass rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold truncate ${darkMode ? "text-white" : "text-slate-800"}`}>
                        {item.title}
                      </h4>
                      <p className={`text-sm ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
                        {item.issuer}
                      </p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${
                          darkMode
                            ? "bg-white/5 text-gray-400"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteAchievement(item._id)}
                      className={`ml-4 transition-colors p-2 ${
                        darkMode ? "text-gray-500 hover:text-red-400" : "text-slate-400 hover:text-red-500"
                      }`}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
                {achievements.length === 0 && (
                  <p className={`text-center py-8 ${darkMode ? "text-gray-600" : "text-slate-400"}`}>
                    No achievements yet.
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* ===== MESSAGES TAB ===== */}
          {activeTab === "messages" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg._id}
                  className="glass rounded-xl p-5 hover:border-cyan-400/20 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>
                          {msg.name}
                        </h4>
                        <span className={`text-sm ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
                          {msg.email}
                        </span>
                      </div>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}>
                        {msg.message}
                      </p>
                      <p className={`text-xs mt-2 ${darkMode ? "text-gray-600" : "text-slate-400"}`}>
                        {new Date(msg.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteMessage(msg._id)}
                      className={`ml-4 transition-colors p-2 ${
                        darkMode ? "text-gray-500 hover:text-red-400" : "text-slate-400 hover:text-red-500"
                      }`}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
              {messages.length === 0 && (
                <p className={`text-center py-8 ${darkMode ? "text-gray-600" : "text-slate-400"}`}>
                  No messages yet.
                </p>
              )}
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminDashboard;