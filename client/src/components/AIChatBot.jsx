import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import API from "../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faXmark,
  faPaperPlane,
  faUser,
  faSpinner,
  faMinus,
  faExpand,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";

const INITIAL_MESSAGE = {
  role: "ai",
  text: "Hey! 👋 I'm PrakashAI — Prakash's personal assistant. Ask me anything about his skills, projects, experience, or availability!",
};

const SUGGESTED_QUESTIONS = [
  "What projects has Prakash built?",
  "What tech stack does he use?",
  "Is Prakash available for hire?",
  "Tell me about his achievements",
];

const AIChatBot = () => {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async (text = input) => {
    const question = text.trim();
    if (!question || loading) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);

    try {
      const { data } = await API.post("/ai/chat", { message: question });
      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch (error) {
      const errorMsg =
        error.response?.data?.reply ||
        "Sorry, something went wrong. Try again!";
      setMessages((prev) => [...prev, { role: "ai", text: errorMsg }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 1 }}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/30 hover:shadow-cyan-500/50"
            aria-label="Open AI Chat"
          >
            <FontAwesomeIcon icon={faRobot} className="text-xl" />

            {/* Notification dot */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "500px",
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden border shadow-2xl flex flex-col ${
              darkMode
                ? "bg-[#0a0a1a] border-white/10 shadow-cyan-500/10"
                : "bg-white border-slate-200 shadow-slate-300/30"
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faRobot} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">PrakashAI</h4>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/70 text-[10px]">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  title="Clear chat"
                >
                  <FontAwesomeIcon icon={faEraser} className="text-xs" />
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  title={isMinimized ? "Expand" : "Minimize"}
                >
                  <FontAwesomeIcon
                    icon={isMinimized ? faExpand : faMinus}
                    className="text-xs"
                  />
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsMinimized(false);
                  }}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  title="Close"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-sm" />
                </button>
              </div>
            </div>

            {/* Chat Body (hidden when minimized) */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div
                  className={`flex-1 overflow-y-auto p-4 space-y-4 ${
                    darkMode ? "bg-[#0a0a1a]" : "bg-slate-50"
                  }`}
                  style={{ maxHeight: "350px" }}
                >
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2 ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.role === "ai" && (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 mt-1">
                          <FontAwesomeIcon
                            icon={faRobot}
                            className="text-white text-xs"
                          />
                        </div>
                      )}

                      <div
                        className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-md"
                            : darkMode
                            ? "bg-white/5 text-gray-300 border border-white/10 rounded-bl-md"
                            : "bg-white text-slate-700 border border-slate-200 rounded-bl-md shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>

                      {msg.role === "user" && (
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                            darkMode ? "bg-white/10" : "bg-slate-200"
                          }`}
                        >
                          <FontAwesomeIcon
                            icon={faUser}
                            className={`text-xs ${
                              darkMode ? "text-gray-400" : "text-slate-500"
                            }`}
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Loading indicator */}
                  {loading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2"
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shrink-0">
                        <FontAwesomeIcon
                          icon={faRobot}
                          className="text-white text-xs"
                        />
                      </div>
                      <div
                        className={`px-4 py-3 rounded-2xl rounded-bl-md ${
                          darkMode
                            ? "bg-white/5 border border-white/10"
                            : "bg-white border border-slate-200"
                        }`}
                      >
                        <div className="flex gap-1.5">
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                darkMode ? "bg-cyan-400" : "bg-cyan-600"
                              }`}
                              animate={{ y: [0, -6, 0] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.15,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested Questions (show only at start) */}
                {messages.length <= 1 && (
                  <div
                    className={`px-4 py-2 border-t ${
                      darkMode ? "border-white/5" : "border-slate-100"
                    }`}
                  >
                    <p
                      className={`text-[10px] mb-2 ${
                        darkMode ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      Try asking:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {SUGGESTED_QUESTIONS.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => sendMessage(q)}
                          className={`text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                            darkMode
                              ? "border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                              : "border-slate-200 text-slate-500 hover:text-cyan-600 hover:border-cyan-300 hover:bg-cyan-50"
                          }`}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div
                  className={`p-3 border-t shrink-0 ${
                    darkMode ? "border-white/10" : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask about Prakash..."
                      disabled={loading}
                      className={`flex-1 px-4 py-2.5 rounded-full text-sm focus:outline-none transition-all ${
                        darkMode
                          ? "bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-cyan-400/50"
                          : "bg-slate-100 border border-slate-200 text-slate-800 placeholder-slate-400 focus:border-cyan-400"
                      }`}
                    />
                    <button
                      onClick={() => sendMessage()}
                      disabled={!input.trim() || loading}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                        !input.trim() || loading
                          ? darkMode
                            ? "bg-white/5 text-gray-600 cursor-not-allowed"
                            : "bg-slate-100 text-slate-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={loading ? faSpinner : faPaperPlane}
                        className={`text-sm ${loading ? "animate-spin" : ""}`}
                      />
                    </button>
                  </div>
                  <p
                    className={`text-[9px] text-center mt-2 ${
                      darkMode ? "text-gray-700" : "text-slate-300"
                    }`}
                  >
                    Powered by Gemini AI • Responses may not be 100% accurate
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatBot;