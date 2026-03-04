import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import CustomCursor from "./components/CustomCursor";
import VisitorCounter from "./components/VisitorCounter";
import EasterEgg from "./components/EasterEgg";
import AIChatBot from "./components/AIChatBot";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={3000}
        hideProgressBar={false}
      />
      <CustomCursor />
      <EasterEgg />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <VisitorCounter />
      <AIChatBot />
    </>
  );
}

export default App;