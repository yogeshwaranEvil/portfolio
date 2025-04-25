import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar"; // Path to your Navbar component
import HomePage from "./pages/Home"; // Path to your HomePage component
import AboutPage from "./pages/About"; // Path to the above AboutPage component
import ProjectsPage from "./pages/Projects"; // Path to the above ProjectsPage component
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact"; // Path to the above ContactPage component
import CertificationsPage from "./pages/Certifications";
import ToolsPages from "./pages/Tools"; // Path to the above ToolsPages component

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const playSound = (type) => {
    const audio = new Audio(
      type === "hover" ? "/sounds/hover.mp3" : "/sounds/click.mp3"
    );
    audio.play();
  };

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <Navbar
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          playSound={playSound}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage soundEnabled={soundEnabled} playSound={playSound} />}
          />
          <Route
            path="/about"
            element={<AboutPage soundEnabled={soundEnabled} playSound={playSound} />}
          />
          <Route
            path="/projects"
            element={<ProjectsPage soundEnabled={soundEnabled} playSound={playSound} />}
          />
          <Route
            path="/blog"
            element={<BlogPage soundEnabled={soundEnabled} playSound={playSound} />}
          />
          <Route
            path="/contact"
            element={<ContactPage soundEnabled={soundEnabled} playSound={playSound} />}
          />
           <Route
            path="/certifications"
            element={<CertificationsPage soundEnabled={soundEnabled} playSound={playSound} />}
          />
           <Route
            path="/tools"

            element={<ToolsPages soundEnabled={soundEnabled} playSound={playSound} />}
          />
    
          <Route path="/blog/:id" element={<div>Blog Post Placeholder</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;