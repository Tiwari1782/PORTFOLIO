import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { useTheme } from "../context/ThemeContext";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiExpress, SiMongodb, SiTailwindcss, SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#444" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#333" },
      { name: "VS Code", icon: <VscCode />, color: "#007ACC" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    ],
  },
];

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionTitle
        title="Skills & Technologies"
        subtitle="Technologies I work with"
      />

      <div className="space-y-12">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            <h3
              className={`text-xl font-semibold mb-6 flex items-center gap-2 ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              <span className="w-8 h-[2px] bg-cyan-400" />
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass rounded-xl p-4 text-center cursor-default group hover:border-cyan-400/30 transition-all"
                >
                  <div
                    className="text-3xl mb-2 flex justify-center transition-colors duration-300"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <p
                    className={`text-sm transition-colors ${
                      darkMode
                        ? "text-gray-400 group-hover:text-white"
                        : "text-slate-500 group-hover:text-slate-900"
                    }`}
                  >
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;