import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

const EasterEgg = () => {
  const [show, setShow] = useState(false);
  const [inputSequence, setInputSequence] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleKeyDown = useCallback((e) => {
    // Normalize key to lowercase for letter keys
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

    setInputSequence((prev) => {
      const newSequence = [...prev, key].slice(-KONAMI_CODE.length);

      // Check if sequence matches
      const isMatch = newSequence.every(
        (k, i) => k === KONAMI_CODE[i]
      );

      // Update progress indicator
      let matchCount = 0;
      for (let i = 0; i < newSequence.length; i++) {
        if (newSequence[i] === KONAMI_CODE[i]) {
          matchCount++;
        } else {
          break;
        }
      }
      setProgress(matchCount);

      if (isMatch && newSequence.length === KONAMI_CODE.length) {
        console.log("🎮 KONAMI CODE ACTIVATED!");
        setShow(true);
        setTimeout(() => setShow(false), 6000);
        setProgress(0);
        return [];
      }

      return newSequence;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* Progress hint — shows small dots when you start the code */}
      <AnimatePresence>
        {progress > 2 && !show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9998] flex gap-1.5"
          >
            {KONAMI_CODE.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i < progress ? "bg-cyan-400 scale-125" : "bg-white/20"
                }`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter Egg Modal */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={() => setShow(false)}
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-center relative"
            >
              <p className="text-8xl mb-6">🎮</p>
              <h2 className="text-4xl font-bold gradient-text mb-4">
                You found the Easter Egg!
              </h2>
              <p className="text-gray-400 text-lg">
                You're a real one! Here's a cookie: 🍪
              </p>
              <p className="text-cyan-400 text-sm mt-2">
                ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA = Legend 🏆
              </p>
              <p className="text-gray-600 text-sm mt-4">
                (Click anywhere to close)
              </p>

              {/* Confetti emojis */}
              {["🎉", "⭐", "🚀", "💎", "🔥", "✨", "🎊", "💫"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="absolute text-3xl"
                  style={{ left: "50%", top: "50%" }}
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
    </>
  );
};

export default EasterEgg;