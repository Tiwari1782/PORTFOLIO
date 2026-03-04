import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faMoon,
  faHeadphones,
  faBaseballBatBall,
  faBookOpen,
  faBullseye,
  faTerminal,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const facts = [
  { icon: faMugHot, color: "#D2691E", fact: "I run on chai and code" },
  { icon: faMoon, color: "#7C3AED", fact: "Most productive after midnight" },
  { icon: faHeadphones, color: "#06B6D4", fact: "Code with lo-fi beats on" },
  { icon: faBaseballBatBall, color: "#22C55E", fact: "Cricket is my stress buster" },
  { icon: faBookOpen, color: "#3B82F6", fact: "Currently learning TypeScript & Next.js" },
  { icon: faBullseye, color: "#EF4444", fact: "Goal: SDE at a top tech company" },
  { icon: faTerminal, color: "#F59E0B", fact: "Linux > Windows for development" },
  { icon: faBrain, color: "#EC4899", fact: "Solve at least 1 DSA problem daily" },
];

const FunFacts = () => {
  const { darkMode } = useTheme();

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <SectionTitle title="Fun Facts" subtitle="A few things about me beyond code" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {facts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
            className="glass rounded-xl p-5 text-center cursor-default hover:border-cyan-400/30 transition-all group"
          >
            <div
              className="text-3xl mb-3 flex justify-center transition-transform duration-300 group-hover:scale-125"
              style={{ color: item.color }}
            >
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-slate-500"
              }`}
            >
              {item.fact}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;