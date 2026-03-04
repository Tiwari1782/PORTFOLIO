import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import SectionTitle from "../components/SectionTitle";
import API from "../api/axios";
import { useTheme } from "../context/ThemeContext";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { darkMode } = useTheme();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      await API.post("/contact", form);
      toast.success("Message sent successfully! 🎉");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `w-full border rounded-xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
    darkMode
      ? "bg-white/5 border-white/10 text-white focus:border-cyan-400/50 focus:ring-cyan-400/30"
      : "bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-cyan-200"
  }`;

  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionTitle title="Get In Touch" subtitle="Have a question or want to work together?" />

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className={`leading-relaxed ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision. Feel free to reach out!
          </p>

          <div className="space-y-4">
            {[
              {
                icon: <FaEnvelope />,
                label: "Email",
                value: "prakashtiwarie06@gmail.com",
                href: "mailto:prakashtiwarie06@gmail.com",
              },
              {
                icon: <FaMapMarkerAlt />,
                label: "Location",
                value: "Mohali, Punjab, India",
                href: null,
              },
              {
                icon: <FaGithub />,
                label: "GitHub",
                value: "github.com/Tiwari1782",
                href: "https://github.com/Tiwari1782",
              },
              {
                icon: <FaLinkedin />,
                label: "LinkedIn",
                value: "Connect on LinkedIn",
                href: "https://www.linkedin.com/in/prakash-tiwari-8900bb2b2/",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 glass rounded-xl p-4">
                <div className={`text-xl ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
                  {item.icon}
                </div>
                <div>
                  <p className={`text-xs ${darkMode ? "text-gray-500" : "text-slate-400"}`}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm transition-colors ${
                        darkMode
                          ? "text-white hover:text-cyan-400"
                          : "text-slate-700 hover:text-cyan-600"
                      }`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className={`text-sm ${
                        darkMode ? "text-white" : "text-slate-700"
                      }`}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label
              className={`block text-sm mb-2 ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={inputClass}
            />
          </div>

          <div>
            <label
              className={`block text-sm mb-2 ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={inputClass}
            />
          </div>

          <div>
            <label
              className={`block text-sm mb-2 ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message here..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              loading
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30"
            }`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
            
    </section>
  );
};

export default Contact;