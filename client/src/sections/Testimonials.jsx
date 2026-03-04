import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { useTheme } from "../context/ThemeContext";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Professor Name",
    role: "Faculty, CGC Mohali",
    text: "Prakash is one of the most dedicated students I've seen. His projects show real-world understanding of full-stack development.",
    avatar: "👨‍🏫",
  },
  {
    name: "Team Lead Name",
    role: "Hackathon Team Lead",
    text: "Working with Prakash during the hackathon was amazing. He built the entire backend in just one night!",
    avatar: "👨‍💻",
  },
  {
    name: "Classmate Name",
    role: "CSE Student, CGC Mohali",
    text: "Prakash helped me learn React from scratch. His teaching style is simple and effective. Great developer and friend!",
    avatar: "🧑‍🎓",
  },
];

const Testimonials = () => {
  const { darkMode } = useTheme();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionTitle
        title="What People Say"
        subtitle="Feedback from professors, teammates, and peers"
      />

      <div className="max-w-3xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-8 md:p-12 text-center"
          >
            {/* Quote Icon */}
            <FaQuoteLeft
              className={`text-3xl mx-auto mb-6 ${
                darkMode ? "text-cyan-400/30" : "text-cyan-200"
              }`}
            />

            {/* Testimonial Text */}
            <p
              className={`text-lg md:text-xl leading-relaxed mb-8 italic ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              "{testimonials[current].text}"
            </p>

            {/* Avatar & Name */}
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-3">{testimonials[current].avatar}</span>
              <p className={`font-bold ${darkMode ? "text-white" : "text-slate-800"}`}>
                {testimonials[current].name}
              </p>
              <p className={`text-sm ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={prev}
            className={`p-3 rounded-full transition-all ${
              darkMode
                ? "glass text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30"
                : "glass text-slate-400 hover:text-cyan-600 hover:border-cyan-300"
            }`}
          >
            <FaChevronLeft />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? darkMode
                      ? "bg-cyan-400 w-8"
                      : "bg-cyan-600 w-8"
                    : darkMode
                    ? "bg-gray-600 hover:bg-gray-500"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className={`p-3 rounded-full transition-all ${
              darkMode
                ? "glass text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30"
                : "glass text-slate-400 hover:text-cyan-600 hover:border-cyan-300"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;