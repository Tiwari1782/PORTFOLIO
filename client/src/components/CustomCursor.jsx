import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide on mobile/touch devices
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile("ontouchstart" in window);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            backgroundColor: darkMode ? "#00d4ff" : "#0891b2",
          }}
        />
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <div
          className="w-10 h-10 rounded-full border-2"
          style={{
            borderColor: darkMode ? "#00d4ff" : "#0891b2",
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;