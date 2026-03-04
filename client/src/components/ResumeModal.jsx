import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload, FaExpand } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ResumeModal = ({ isOpen, onClose }) => {
  const { darkMode } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden border shadow-2xl ${
              darkMode
                ? "bg-[#0a0a1a] border-white/10 shadow-cyan-500/10"
                : "bg-white border-slate-200 shadow-slate-300/30"
            }`}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between px-6 py-4 border-b ${
                darkMode ? "border-white/10" : "border-slate-200"
              }`}
            >
              <h3 className={`font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>
                📄 Resume — Prakash Tiwari
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    darkMode
                      ? "bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20"
                      : "bg-cyan-50 text-cyan-600 hover:bg-cyan-100"
                  }`}
                >
                  <FaDownload /> Download
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all ${
                    darkMode
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <FaExpand />
                </a>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-lg transition-all ${
                    darkMode
                      ? "text-gray-400 hover:text-red-400 hover:bg-white/5"
                      : "text-slate-400 hover:text-red-500 hover:bg-slate-100"
                  }`}
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <iframe
              src="/resume.pdf"
              title="Resume"
              className="w-full h-full"
              style={{ height: "calc(85vh - 65px)" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;