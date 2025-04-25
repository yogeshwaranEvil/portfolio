import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectsPage = ({ soundEnabled, playSound }) => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  // Project data from resume
  const projects = [
    {
      id: "encryption-tamil-rsa",
      title: "Encryption and Decryption using Tamil and RSA",
      year: "2022",
      desc: "Developed a Tkinter-based GUI application integrating Tamil Unicode character mapping and RSA encryption for secure text and file protection. Features include custom character mapping, asymmetric encryption, and a file byte lock mechanism.",
      tech: ["Python", "Tkinter", "RSA Encryption"],
      features: [
        "Secure text encryption with Tamil Unicode characters.",
        "Robust RSA algorithm for asymmetric encryption.",
        "File byte lock for enhanced security.",
        "User-friendly GUI for seamless interaction.",
      ],
      github: "https://github.com/yogeshwaran/encryption-tamil-rsa",
      demo: null,
    },
    {
      id: "penetration-testing-suite",
      title: "Automated Penetration Testing Suite",
      year: "2024",
      desc: "Built a Metasploit exploitation script integrated with Nmap scan results to automate vulnerability detection and payload testing. Optimized workflows for CTF challenges and real-world pentesting, enhancing efficiency through session management.",
      tech: ["Python", "Metasploit", "Nmap", "libnmap", "Rich", "Matplotlib", "Vulners"],
      features: [
        "Automated Nmap scanning for vulnerability detection.",
        "Metasploit payload testing and session handling.",
        "Rich console output for user-friendly reports.",
        "Integration with Vulners for exploit insights.",
      ],
      github: "https://github.com/yogeshwaran/penetration-testing-suite",
      demo: null,
    },
    {
      id: "windows-vulnerability-scanner",
      title: "Agentless Windows Vulnerability Scanner",
      year: "2024",
      desc: "Created an AI-powered scanner for the Smart India Hackathon 2024, using PowerShell remoting and PostgreSQL for secure data collection. Leveraged Autoencoders for anomaly detection, integrated with NVD and Exploit-DB for threat intelligence.",
      tech: ["Python", "PowerShell", "WMI", "PostgreSQL", "Autoencoders", "NVD API", "Exploit-DB"],
      features: [
        "Agentless scanning with PowerShell and JEA.",
        "AI-driven anomaly detection using Autoencoders.",
        "Structured storage in PostgreSQL with JSONB.",
        "Automated report generation for security insights.",
      ],
      github: "https://github.com/yogeshwaran/windows-vulnerability-scanner",
      demo: null,
    },
  ];

  // Open/close modal
  const openModal = (project) => {
    setSelectedProject(project);
    if (soundEnabled) playSound("click");
  };

  const closeModal = () => {
    setSelectedProject(null);
    if (soundEnabled) playSound("click");
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 font-orbitron">
      {/* Particle Background */}
      <Particles
        id="projects-particles"
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
            My Projects
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of innovative cybersecurity and machine learning projects, from AI-powered vulnerability scanners to automated pentesting tools.
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Each project reflects my passion for solving complex challenges, leveraging cutting-edge technologies, and securing the digital world.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-900/90 backdrop-blur-md">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-pink-500 text-center mb-10">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800/90 backdrop-blur-md rounded-lg p-6 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 hover-tilt"
              >
                <h3 className="text-xl font-semibold text-gray-200 glitch">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.year}</p>
                <p className="text-gray-400 mt-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-pink-500/20 text-pink-400 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-4">
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={project.github}
                      className="text-red-500 hover:text-pink-500 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                      onClick={() => soundEnabled && playSound("click")}
                    >
                      <FiGithub size={24} />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={project.demo}
                      className="text-red-500 hover:text-pink-500 transition-colors"
                      aria-label={`View ${project.title} demo`}
                      onClick={() => soundEnabled && playSound("click")}
                    >
                      <FiExternalLink size={24} />
                    </motion.a>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-4 text-pink-400 hover:text-red-400 transition-colors"
                  onClick={() => openModal(project)}
                  aria-label={`View details for ${project.title}`}
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
          <h2 className="text-4xl font-bold text-red-500 mb-6">Want to Collaborate?</h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
            Interested in my projects or want to work together on cybersecurity or AI-driven solutions? Check out my GitHub or get in touch!
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
            <Link
              whileHover={{ scale: 1.1 }}
              to="/contact"
              className="inline-block px-6 py-3 bg-red-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-pink-500/90 transition-all duration-300 hover-tilt"
              aria-label="Contact Yogeshwaran"
              onClick={() => soundEnabled && playSound("click")}
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
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
            <h2 className="text-3xl font-bold text-gray-200 glitch">{selectedProject.title}</h2>
            <p className="text-gray-400 mt-2">{selectedProject.year}</p>
            <p className="text-gray-300 mt-4">{selectedProject.desc}</p>
            <h3 className="text-xl font-semibold text-gray-200 mt-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-red-500/20 text-red-400 text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mt-6">Key Features</h3>
            <ul className="text-gray-400 mt-2 list-disc list-inside">
              {selectedProject.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-6">
              {selectedProject.github && (
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={selectedProject.github}
                  className="text-pink-400 hover:text-red-400 transition-colors"
                  aria-label={`View ${selectedProject.title} on GitHub`}
                  onClick={() => soundEnabled && playSound("click")}
                >
                  <FiGithub size={24} />
                </motion.a>
              )}
              {selectedProject.demo && (
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={selectedProject.demo}
                  className="text-pink-400 hover:text-red-400 transition-colors"
                  aria-label={`View ${selectedProject.title} demo`}
                  onClick={() => soundEnabled && playSound("click")}
                >
                  <FiExternalLink size={24} />
                </motion.a>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-pink-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-red-500/90 transition-all duration-300 hover-tilt"
              onClick={closeModal}
              aria-label="Close project details"
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsPage;