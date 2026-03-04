import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { FaUniversity, FaCode, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import AnimatedCounter from "../components/AnimatedCounter";

const About = () => {
  const { darkMode } = useTheme();

  const stats = [
    { icon: <FaUniversity />, label: "University", value: "CGC Mohali" },
    { icon: <FaCode />, label: "Year", value: "2nd Year B.Tech CSE" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Mohali, Punjab" },
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionTitle
        title="About Me"
        subtitle="Get to know me a little better"
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              className={`w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 shadow-lg ${
                darkMode
                  ? "border-cyan-400/30 shadow-cyan-500/10"
                  : "border-cyan-300 shadow-cyan-200/30"
              }`}
            >
              <img
                src="/photo.png"
                alt="Prakash Tiwari"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`absolute -bottom-4 -right-4 w-full h-full border-2 rounded-2xl -z-10 ${
                darkMode ? "border-purple-500/30" : "border-purple-300"
              }`}
            />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className={`leading-relaxed mb-6 ${darkMode ? "text-gray-400" : "text-slate-600"}`}
          >
            Hi! I'm{" "}
            <span
              className={`font-semibold ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}
            >
              Prakash Tiwari
            </span>
            , a passionate Full Stack Developer and 2nd year B.Tech Computer
            Science student at{" "}
            <span className={darkMode ? "text-cyan-400" : "text-cyan-600"}>
              CGC University Mohali
            </span>
            .
          </p>
          <p
            className={`leading-relaxed mb-8 ${darkMode ? "text-gray-400" : "text-slate-600"}`}
          >
            I love building web applications that solve real-world problems. My
            journey in development started with curiosity about how websites
            work, and now I'm deep into the MERN stack, building full-stack
            projects and continuously learning new technologies.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-xl p-4 text-center hover:border-cyan-400/30 transition-all"
              >
                <div
                  className={`text-xl mb-2 flex justify-center ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}
                >
                  {stat.icon}
                </div>
                <p
                  className={`text-xs ${darkMode ? "text-gray-500" : "text-slate-400"}`}
                >
                  {stat.label}
                </p>
                <p
                  className={`text-sm font-semibold ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
          {/* Animated Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { end: 10, suffix: "+", label: "Projects Built" },
              { end: 5, suffix: "+", label: "Technologies" },
              { end: 500, suffix: "+", label: "GitHub Commits" },
              { end: 3, suffix: "+", label: "Certificates" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p
                  className={`text-3xl font-bold ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}
                >
                  <AnimatedCounter end={item.end} suffix={item.suffix} />
                </p>
                <p
                  className={`text-xs mt-1 ${darkMode ? "text-gray-500" : "text-slate-400"}`}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
