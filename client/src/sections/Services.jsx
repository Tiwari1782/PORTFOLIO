import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { useTheme } from "../context/ThemeContext";
import {
  FaLaptopCode, FaServer, FaDatabase, FaMobileAlt, FaPaintBrush, FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description: "Building responsive, interactive UIs with React.js, Tailwind CSS, and modern JavaScript.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "Creating robust REST APIs with Node.js, Express.js, and secure authentication systems.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    description: "Designing efficient MongoDB schemas, data modeling, and optimized queries.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description: "Pixel-perfect, mobile-first designs that work flawlessly across all devices.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces with smooth animations and great user experience.",
  },
  {
    icon: <FaRocket />,
    title: "Deployment & DevOps",
    description: "Deploying apps on Vercel, Render, and managing CI/CD pipelines with GitHub.",
  },
];

const Services = () => {
  const { darkMode } = useTheme();

  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionTitle
        title="What I Do"
        subtitle="Services I offer as a developer"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass rounded-xl p-6 group hover:border-cyan-400/30 transition-all relative overflow-hidden"
          >
            {/* Hover Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: darkMode
                  ? "radial-gradient(circle at 50% 0%, rgba(0,212,255,0.08), transparent 70%)"
                  : "radial-gradient(circle at 50% 0%, rgba(8,145,178,0.06), transparent 70%)",
              }}
            />

            <div
              className={`relative text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 ${
                darkMode ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              {service.icon}
            </div>
            <h3
              className={`relative text-lg font-bold mb-2 ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`relative text-sm leading-relaxed ${
                darkMode ? "text-gray-400" : "text-slate-500"
              }`}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;