import { motion } from "framer-motion";
import { FaArrowDown, FaDownload, FaEye, FaCircle } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import ResumeModal from "../components/ResumeModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faRocket,
  faGraduationCap,
  faGlobe,
  faBrain,
  faHandPeace,
} from "@fortawesome/free-solid-svg-icons";

const roles = [
  { text: "Full Stack Developer", icon: faLaptopCode, color: "#00d4ff" },
  { text: "MERN Stack Enthusiast", icon: faRocket, color: "#a78bfa" },
  { text: "CSE Student @ CGC Mohali", icon: faGraduationCap, color: "#fbbf24" },
  { text: "Open Source Contributor", icon: faGlobe, color: "#22c55e" },
  { text: "Problem Solver", icon: faBrain, color: "#ec4899" },
];

const Hero = () => {
  const { darkMode } = useTheme();
  const [showResume, setShowResume] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (!isDeleting) {
      // Typing
      if (displayText.length < role.text.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.text.slice(0, displayText.length + 1));
        }, 60);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 35);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[120px] animate-float"
          style={{ backgroundColor: darkMode ? "rgba(0,212,255,0.2)" : "rgba(6,182,212,0.15)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-float"
          style={{
            backgroundColor: darkMode ? "rgba(124,58,237,0.2)" : "rgba(139,92,246,0.15)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-[100px] animate-float"
          style={{
            backgroundColor: darkMode ? "rgba(236,72,153,0.1)" : "rgba(236,72,153,0.08)",
            animationDelay: "4s",
          }}
        />
      </div>

      <div className="text-center px-4 max-w-4xl">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border ${
              darkMode
                ? "bg-green-400/10 text-green-400 border-green-400/30"
                : "bg-green-50 text-green-600 border-green-200"
            }`}
          >
            <FaCircle className="text-[6px] animate-pulse" />
            Available for Freelance & Internships
          </span>
        </motion.div>

                <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-sm md:text-base font-mono mb-4 flex items-center justify-center gap-2 ${
            darkMode ? "text-cyan-400" : "text-cyan-600"
          }`}
        >
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            className="inline-block"
          >
            <FontAwesomeIcon icon={faHandPeace} />
          </motion.span>
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">Prakash Tiwari</span>
        </motion.h1>

        {/* Custom Typing Animation with Font Awesome Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`text-lg md:text-2xl mb-8 max-w-2xl mx-auto h-10 flex items-center justify-center gap-3 ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          <motion.span
            key={currentRole}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl"
            style={{ color: roles[currentRole].color }}
          >
            <FontAwesomeIcon icon={roles[currentRole].icon} />
          </motion.span>
          <span>
            {displayText}
            <span
              className="inline-block w-[2px] h-6 ml-1 align-middle animate-pulse"
              style={{
                backgroundColor: darkMode ? "#00d4ff" : "#0891b2",
              }}
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className={`text-sm md:text-base mb-10 max-w-xl mx-auto ${
            darkMode ? "text-gray-500" : "text-slate-500"
          }`}
        >
          Building beautiful, functional web experiences with the MERN Stack.
          Passionate about clean code and creative solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <button
            onClick={() => setShowResume(true)}
            className={`flex items-center gap-2 px-8 py-3 border font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                : "border-cyan-600/50 text-cyan-600 hover:bg-cyan-50"
            }`}
          >
            <FaEye /> View Resume
          </button>
          <a
            href="/resume.pdf"
            download
            className={`flex items-center gap-2 px-8 py-3 border font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "border-purple-400/50 text-purple-400 hover:bg-purple-400/10"
                : "border-purple-600/50 text-purple-600 hover:bg-purple-50"
            }`}
          >
            <FaDownload /> Download CV
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={darkMode ? "text-gray-600" : "text-slate-400"}
          >
            <FaArrowDown />
          </motion.div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
};

export default Hero;