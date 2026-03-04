import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919335955385"; // ✏️ Replace with your number (country code + number, no +)

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=Hi%20Prakash!%20I%20visited%20your%20portfolio%20website.`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />

      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </motion.a>
  );
};

export default WhatsAppButton;