import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FiExternalLink } from "react-icons/fi";

const ToolsPage = ({ soundEnabled, playSound }) => {
  const [selectedTool, setSelectedTool] = useState(null);

  // Particle initialization
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  // Tools data from resume and inferred from projects/internships
  const tools = [
    {
      id: "metasploit",
      name: "Metasploit",
      category: "Cybersecurity",
      desc: "A penetration testing framework for developing and executing exploit code against target systems.",
      useCase: "Used in Automated Penetration Testing Suite to automate vulnerability exploitation and session management for CTF challenges.",
      proficiency: "Proficient",
      link: "https://www.metasploit.com",
    },
    {
      id: "nmap",
      name: "Nmap",
      category: "Cybersecurity",
      desc: "A network scanning tool for discovering hosts, services, and vulnerabilities on computer networks.",
      useCase: "Integrated with Metasploit in pentesting suite for automated vulnerability scanning and network reconnaissance.",
      proficiency: "Proficient",
      link: "https://nmap.org",
    },
    {
      id: "burp-suite",
      name: "Burp Suite",
      category: "Cybersecurity",
      desc: "A platform for web application security testing, including intercepting proxies and vulnerability scanners.",
      useCase: "Applied in CTF challenges for web exploitation, such as SQL injection and SSRF attacks.",
      proficiency: "Intermediate",
      link: "https://portswigger.net/burp",
    },
    {
      id: "wireshark",
      name: "Wireshark",
      category: "Cybersecurity",
      desc: "A network protocol analyzer for capturing and inspecting network traffic in real-time.",
      useCase: "Utilized for analyzing network packets during cybersecurity exercises and threat detection scenarios.",
      proficiency: "Intermediate",
      link: "https://www.wireshark.org",
    },
    {
      id: "tensorflow",
      name: "TensorFlow",
      category: "Machine Learning",
      desc: "An open-source framework for building and training machine learning models, including neural networks.",
      useCase: "Used during V3 Analytics internship to develop CNNs and LSTMs for AI-powered Intrusion Detection Systems.",
      proficiency: "Proficient",
      link: "https://www.tensorflow.org",
    },
    {
      id: "pytorch",
      name: "PyTorch",
      category: "Machine Learning",
      desc: "A machine learning framework for dynamic neural network computation and deep learning research.",
      useCase: "Employed in ML internship for prototyping AI models, including Autoencoders for anomaly detection in vulnerability scanner.",
      proficiency: "Intermediate",
      link: "https://pytorch.org",
    },
    {
      id: "scikit-learn",
      name: "scikit-learn",
      category: "Machine Learning",
      desc: "A Python library for machine learning, providing tools for data analysis and model building.",
      useCase: "Used for data preprocessing and model evaluation in ML projects, supporting IDS development.",
      proficiency: "Proficient",
      link: "https://scikit-learn.org",
    },
    {
      id: "react",
      name: "React",
      category: "Web Development",
      desc: "A JavaScript library for building user interfaces, particularly single-page applications.",
      useCase: "Built Netflix clone UI during THIS UX internship, ensuring responsive and secure front-end development.",
      proficiency: "Proficient",
      link: "https://reactjs.org",
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "Web Development",
      desc: "A JavaScript runtime for building scalable server-side applications.",
      useCase: "Developed backend APIs for Netflix clone, integrating with MongoDB and Appwrite for authentication.",
      proficiency: "Intermediate",
      link: "https://nodejs.org",
    },
    {
      id: "tailwindcss",
      name: "Tailwind CSS",
      category: "Web Development",
      desc: "A utility-first CSS framework for rapid UI development.",
      useCase: "Styled Netflix clone UI for responsive and modern design, enhancing user experience.",
      proficiency: "Intermediate",
      link: "https://tailwindcss.com",
    },
    {
      id: "python",
      name: "Python",
      category: "Programming",
      desc: "A versatile programming language for scripting, automation, and application development.",
      useCase: "Core language for pentesting suite, vulnerability scanner, and ML projects, including Tkinter GUI for encryption app.",
      proficiency: "Proficient",
      link: "https://www.python.org",
    },
    {
      id: "cpp",
      name: "C/C++",
      category: "Programming",
      desc: "High-performance languages for system programming and algorithm implementation.",
      useCase: "Applied in DSA certification to optimize algorithms and data structures for cybersecurity applications.",
      proficiency: "Intermediate",
      link: "https://isocpp.org",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "Databases",
      desc: "A NoSQL database for storing and managing unstructured data.",
      useCase: "Used in Netflix clone for scalable data storage and in pentesting suite for storing scan results.",
      proficiency: "Proficient",
      link: "https://www.mongodb.com",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "Databases",
      desc: "A relational database for structured data storage and complex queries.",
      useCase: "Implemented in vulnerability scanner for secure storage of scan data with JSONB support.",
      proficiency: "Intermediate",
      link: "https://www.postgresql.org",
    },
    {
      id: "git",
      name: "Git",
      category: "Development Tools",
      desc: "A version control system for tracking code changes and collaboration.",
      useCase: "Managed project repositories for encryption app, pentesting suite, and Netflix clone, ensuring version control.",
      proficiency: "Proficient",
      link: "https://git-scm.com",
    },
    {
      id: "vscode",
      name: "VS Code",
      category: "Development Tools",
      desc: "A source-code editor with support for debugging and extensions.",
      useCase: "Primary IDE for coding Python, JavaScript, and TypeScript across all projects and internships.",
      proficiency: "Proficient",
      link: "https://code.visualstudio.com",
    },
  ];

  // Open/close modal
  const openModal = (tool) => {
    setSelectedTool(tool);
    if (soundEnabled) playSound("click");
  };

  const closeModal = () => {
    setSelectedTool(null);
    if (soundEnabled) playSound("click");
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 font-orbitron">
      {/* Particle Background */}
      <Particles
        id="tools-particles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: ["#ef4444", "#ec4899"] },
            shape: { type: "circle" },
            opacity: { value: 0.4, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 0.6, direction: "none", random: true },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Introduction Section */}
      <section className="py-20 px-4 relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition-all duration-300 glitch">
            My Technical Toolkit
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-300 max-w-3xl mx-auto">
            Powering Cybersecurity, Machine Learning, and Web Development
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            This collection of tools and technologies drives my projects, from automating penetration tests to building AI-driven security solutions and scalable web applications.
          </p>
        </motion.div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 bg-gray-900/90 backdrop-blur-md">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-pink-500 text-center mb-10">Tools & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800/90 backdrop-blur-md rounded-lg p-6 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 hover-tilt"
              >
                <h3 className="text-xl font-semibold text-gray-200 glitch">{tool.name}</h3>
                <p className="text-gray-400 mt-2">{tool.category}</p>
                <p className="text-gray-400 mt-1">Proficiency: {tool.proficiency}</p>
                <p className="text-gray-400 mt-3">{tool.desc}</p>
                <div className="flex space-x-4 mt-4">
                  {tool.link && (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={tool.link}
                      className="text-red-500 hover:text-pink-500 transition-colors"
                      aria-label={`Learn more about ${tool.name}`}
                      onClick={() => soundEnabled && playSound("click")}
                    >
                      <FiExternalLink size={24} />
                    </motion.a>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-4 text-pink-400 hover:text-red-400 transition-colors"
                  onClick={() => openModal(tool)}
                  aria-label={`View details for ${tool.name}`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-red-500 mb-6">Explore My Work</h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
            Want to see these tools in action or collaborate on a project? Check out my GitHub or get in touch!
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/yogeshwaran"
              className="inline-block px-6 py-3 bg-pink-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-red-500/90 transition-all duration-300 hover-tilt"
              aria-label="Visit Yogeshwaran's GitHub"
              onClick={() => soundEnabled && playSound("click")}
            >
              View GitHub
            </motion.a>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-red-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-pink-500/90 transition-all duration-300 hover-tilt"
                aria-label="Contact Yogeshwaran"
                onClick={() => soundEnabled && playSound("click")}
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Modal for Tool Details */}
      {selectedTool && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800/90 backdrop-blur-md rounded-lg p-8 max-w-2xl w-full mx-4 border border-pink-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-gray-200 glitch">{selectedTool.name}</h2>
            <p className="text-gray-400 mt-2">{selectedTool.category} | Proficiency: {selectedTool.proficiency}</p>
            <p className="text-gray-300 mt-4">{selectedTool.desc}</p>
            <h3 className="text-xl font-semibold text-gray-200 mt-6">Use Case</h3>
            <p className="text-gray-400 mt-2">{selectedTool.useCase}</p>
            {selectedTool.link && (
              <div className="mt-6">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={selectedTool.link}
                  className="text-pink-400 hover:text-red-400 transition-colors"
                  aria-label={`Learn more about ${selectedTool.name}`}
                  onClick={() => soundEnabled && playSound("click")}
                >
                  <FiExternalLink size={24} />
                </motion.a>
              </div>
            )}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-pink-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-red-500/90 transition-all duration-300 hover-tilt"
              onClick={closeModal}
              aria-label="Close tool details"
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ToolsPage;