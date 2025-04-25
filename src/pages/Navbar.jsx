import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [theme, setTheme] = useState("cyberpunk"); // Theme state
  const [soundEnabled, setSoundEnabled] = useState(false); // Sound toggle

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Work",
      dropdown: [
        { name: "Projects", path: "/projects" },
        { name: "Certifications", path: "/certifications" },
        { name: "Tools", path: "/tools" },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "CTF Challenges", path: "/ctf-challenges" },
    { name: "Contact", path: "/contact" },
  ];

  // Toggle dropdown
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    if (soundEnabled) playSound("hover");
  };

  // Theme toggle
  const toggleTheme = () => {
    const themes = ["cyberpunk", "minimal", "retro"];
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (soundEnabled) playSound("click");
  };

  // Sound effects
  const playSound = (type) => {
    const audio = new Audio(
      type === "hover"
        ? "/sounds/hover.mp3" // Add your sound files in public/sounds/
        : "/sounds/click.mp3"
    );
    audio.play();
  };

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 50) {
        nav.classList.add("py-2");
        nav.classList.remove("py-4");
      } else {
        nav.classList.add("py-4");
        nav.classList.remove("py-2");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Particle initialization
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  // Keyboard navigation for dropdowns
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown(index);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-[0_0_20px_rgba(255,0,0,0.5)] animate-gradient-shift ${
        theme === "minimal" ? "bg-gray-100 dark:bg-gray-700" : theme === "retro" ? "bg-green-900" : ""
      }`}
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: ["#ef4444", "#ec4899"] },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 0.5, direction: "none", random: true },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition-all duration-300 hover-tilt"
        >
          CyberPortfolio
        </Link>

        {/* Hamburger Menu (Mobile View) */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (soundEnabled) playSound("click");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsMenuOpen(!isMenuOpen);
                if (soundEnabled) playSound("click");
              }
            }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="text-red-500 dark:text-pink-400 focus:outline-none relative w-8 h-8"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 4 : 0 }}
              className="w-8 h-1 bg-red-500 dark:bg-pink-400 rounded mb-1"
            />
            <motion.div
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="w-8 h-1 bg-red-500 dark:bg-pink-400 rounded mb-1"
            />
            <motion.div
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -4 : 0 }}
              className="w-8 h-1 bg-red-500 dark:bg-pink-400 rounded"
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center font-orbitron">
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => toggleDropdown(index)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <motion.button
                  whileHover={{ scale: 1.1, color: "#ef4444" }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="text-gray-200 dark:text-gray-300 font-medium transition-colors hover-tilt"
                >
                  {item.name}
                </motion.button>
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-0 mt-2 w-48 bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.3)] border border-red-500/30"
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block px-4 py-3 text-gray-200 hover:bg-red-500/20 hover:text-red-400 transition-all duration-200"
                          onClick={() => soundEnabled && playSound("click")}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div key={index} whileHover={{ scale: 1.1 }}>
                <Link
                  to={item.path}
                  className="text-gray-200 dark:text-gray-300 font-medium hover:text-red-500 dark:hover:text-pink-400 transition-colors hover-tilt"
                  onClick={() => soundEnabled && playSound("click")}
                >
                  {item.name}
                </Link>
              </motion.div>
            )
          )}
          <motion.button
            whileHover={{ scale: 1.2, rotate: 180 }}
            onClick={toggleDarkMode}
            className="text-gray-200 dark:text-gray-300 p-2 rounded-full hover:bg-red-500/20 transition-all hover-tilt"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={toggleTheme}
            className="text-gray-200 dark:text-gray-300 p-2 rounded-full hover:bg-red-500/20 transition-all hover-tilt"
            aria-label="Switch theme"
          >
            🎨
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              if (!soundEnabled) playSound("click");
            }}
            className="text-gray-200 dark:text-gray-300 p-2 rounded-full hover:bg-red-500/20 transition-all hover-tilt"
            aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
          >
            {soundEnabled ? "🔊" : "🔇"}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-gray-900/95 dark:bg-gray-800/95 backdrop-blur-md font-orbitron"
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              {menuItems.map((item, index) =>
                item.dropdown ? (
                  <div key={index} className="w-full text-center">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleDropdown(index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full text-gray-200 dark:text-gray-300 px-4 py-3 hover:bg-red-500/20 transition-all hover-tilt"
                    >
                      {item.name}
                    </motion.button>
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="flex flex-col items-center space-y-2 py-2"
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="text-gray-200 dark:text-gray-300 hover:text-red-500 dark:hover:text-pink-400 transition-all hover-tilt"
                              onClick={() => {
                                setIsMenuOpen(false);
                                if (soundEnabled) playSound("click");
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div key={index} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={item.path}
                      className="text-gray-200 dark:text-gray-300 hover:text-red-500 dark:hover:text-pink-400 transition-all hover-tilt"
                      onClick={() => {
                        setIsMenuOpen(false);
                        if (soundEnabled) playSound("click");
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="text-gray-200 dark:text-gray-300 p-2 rounded-full hover:bg-red-500/20 transition-all hover-tilt"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="text-gray-200 dark:text-gray-300 p-2 rounded-full hover:bg-red-500/20 transition-all hover-tilt"
                aria-label="Switch theme"
              >
                🎨
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setSoundEnabled(!soundEnabled);
                  if (!soundEnabled) playSound("click");
                }}
                className="text-gray-200 dark:text-gray-300 p-2 rounded-full hover:bg-red-500/20 transition-all hover-tilt"
                aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
              >
                {soundEnabled ? "🔊" : "🔇"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;