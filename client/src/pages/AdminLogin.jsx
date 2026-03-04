import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import API from "../api/axios";
import { useTheme } from "../context/ThemeContext";
import { FaLock, FaUser, FaSignInAlt } from "react-icons/fa";

const AdminLogin = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const { data } = await API.post("/auth/login", form);
      localStorage.setItem("adminToken", data.token);
      toast.success("Login successful! 🎉");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `w-full border rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-1 transition-all ${
    darkMode
      ? "bg-white/5 border-white/10 text-white placeholder-gray-600 focus:border-cyan-400/50 focus:ring-cyan-400/30"
      : "bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-200"
  }`;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="glass rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full border mb-4 ${
                darkMode
                  ? "bg-cyan-400/10 border-cyan-400/30"
                  : "bg-cyan-50 border-cyan-200"
              }`}
            >
              <FaLock className={`text-2xl ${darkMode ? "text-cyan-400" : "text-cyan-600"}`} />
            </div>
            <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-800"}`}>
              Admin Login
            </h2>
            <p className={`text-sm mt-1 ${darkMode ? "text-gray-500" : "text-slate-400"}`}>
              Access your dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={`block text-sm mb-2 ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                Username
              </label>
              <div className="relative">
                <FaUser
                  className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                    darkMode ? "text-gray-600" : "text-slate-400"
                  }`}
                />
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="admin"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm mb-2 ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                Password
              </label>
              <div className="relative">
                <FaLock
                  className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                    darkMode ? "text-gray-600" : "text-slate-400"
                  }`}
                />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={inputClass}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                loading
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Logging in...
                </>
              ) : (
                <>
                  <FaSignInAlt /> Login
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;