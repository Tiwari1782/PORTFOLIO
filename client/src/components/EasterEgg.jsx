import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

const EasterEgg = () => {
  const [show, setShow] = useState(false);
  const [inputSequence, setInputSequence] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setInputSequence((prev) => {
        const newSequence = [...prev, e.key].slice(-KONAMI_CODE.length);

        if (JSON.stringify(newSequence) === JSON.stringify(KONAMI_CODE)) {
          setShow(true);
          setTimeout(() => setShow(false), 5000);
          return [];
        }

        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={() => setShow(false)}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-center"
          >
            <p className="text-8xl mb-6">🎮</p>
            <h2 className="text-4xl font-bold gradient-text mb-4">
              You found the Easter Egg!
            </h2>
            <p className="text-gray-400 text-lg">
              You're a real one! Here's a cookie: 🍪
            </p>
            <p className="text-gray-600 text-sm mt-4">
              (Click anywhere to close)
            </p>

            {/* Confetti-like emojis */}
            {["🎉", "⭐", "🚀", "💎", "🔥", "✨", "🎊", "💫"].map((emoji, i) => (
              <motion.span
                key={i}
                className="absolute text-3xl"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                animate={{
                  x: (Math.random() - 0.5) * 600,
                  y: (Math.random() - 0.5) * 600,
                  opacity: 0,
                  rotate: Math.random() * 720,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;