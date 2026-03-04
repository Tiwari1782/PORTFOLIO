import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { FaGraduationCap } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const educationData = [
  {
    institution: "CGC University Mohali",
    degree: "B.Tech — Computer Science & Engineering",
    year: "2023 – 2027",
    description:
      "Currently in 2nd year. Focused on Full Stack Development, DSA, and building real-world projects.",
    current: true,
  },
  {
    institution: "APS Nehru Road, Lucknow",
    degree: "Class 12th — PCM + CS",
    year: "2022-2023",
    description:
      "Completed senior secondary education with focus on Physics, Chemistry, and Mathematics.",
    current: false,
  },
  {
    institution: "APS Nehru Road, Lucknow",
    degree: "Class 10th ",
    year: "2020-2021",
    description:
      "Completed Class 10 with solid academic performance, laying the groundwork for pursuing Physics, Chemistry, and Mathematics in senior secondary education.",
    current: false,
  }
];

const Education = () => {
  const { darkMode } = useTheme();

  return (
    <section id="education" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionTitle title="Education" subtitle="My academic journey" />

      <div className="relative max-w-2xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500" />

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-16 pb-12 last:pb-0"
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-4 top-1 w-5 h-5 rounded-full border-2 ${
                edu.current
                  ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                  : darkMode
                  ? "bg-[#0a0a1a] border-purple-500"
                  : "bg-white border-purple-400"
              }`}
            />

            <div className="glass rounded-xl p-6 hover:border-cyan-400/30 transition-all">
              <div className="flex items-start gap-3 mb-2">
                <FaGraduationCap
                  className={`text-xl mt-1 shrink-0 ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}
                />
                <div>
                  <h3
                    className={`text-lg font-bold ${
                      darkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {edu.institution}
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      darkMode ? "text-cyan-400" : "text-cyan-600"
                    }`}
                  >
                    {edu.degree}
                  </p>
                </div>
              </div>
              <p className={`text-sm mb-2 ${darkMode ? "text-gray-500" : "text-slate-400"}`}>
                {edu.year}
              </p>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}>
                {edu.description}
              </p>
              {edu.current && (
                <span
                  className={`inline-block mt-3 text-xs px-3 py-1 rounded-full border ${
                    darkMode
                      ? "bg-cyan-400/20 text-cyan-400 border-cyan-400/30"
                      : "bg-cyan-100 text-cyan-700 border-cyan-300"
                  }`}
                >
                  Currently Studying
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;