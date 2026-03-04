import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import LoadSpeed from "./LoadSpeed";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`border-t py-8 transition-colors duration-300 ${
        darkMode ? "bg-[#060612] border-white/10" : "bg-slate-50 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          {[
            { icon: <FaGithub />, href: "https://github.com/Tiwari1782", label: "GitHub" },
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/prakash-tiwari-8900bb2b2/", label: "LinkedIn" },
            { icon: <FaInstagram />, href: "https://www.instagram.com/heree_prakash_/?__pwa=1", label: "Instagram" },
            { icon: <FaEnvelope />, href: "mailto:prakashtiwarie06@gmail.com", label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl transition-all duration-300 hover:scale-125 ${
                darkMode
                  ? "text-gray-500 hover:text-cyan-400"
                  : "text-slate-400 hover:text-cyan-600"
              }`}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Quick Links */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          {["About", "Projects", "Skills", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm transition-colors ${
                darkMode
                  ? "text-gray-600 hover:text-cyan-400"
                  : "text-slate-400 hover:text-cyan-600"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Load Speed */}
        <LoadSpeed />

        {/* Copyright */}
        <p className={`text-sm mt-2 ${darkMode ? "text-gray-600" : "text-slate-500"}`}>
          © {new Date().getFullYear()} — Made with{" "}
          <FaHeart className="inline text-red-500 mx-1 animate-pulse" /> by{" "}
          <span className={darkMode ? "text-cyan-400" : "text-cyan-600"}>
            Prakash Tiwari
          </span>
        </p>

        {/* Easter Egg Hint */}
        <p
          className={`text-[10px] mt-4 ${
            darkMode ? "text-gray-800" : "text-slate-300"
          }`}
        >
          ↑↑↓↓←→←→BA
        </p>
      </div>
    </footer>
  );
};

export default Footer;