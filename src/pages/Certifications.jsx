import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FiExternalLink } from "react-icons/fi";

const CertificationsPage = ({ soundEnabled, playSound }) => {
  const [selectedCert, setSelectedCert] = useState(null);

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

  // Certification data from resume
  const certifications = [
    {
      id: "dsa-c-cpp",
      title: "Mastering Data Structures and Algorithms Using C and C++",
      issuer: "Udemy",
      date: "June 2023",
      desc: "Completed an in-depth course on data structures and algorithms, enhancing problem-solving skills for cybersecurity and software development. Mastered linked lists, trees, graphs, and sorting algorithms, applying them to optimize code efficiency.",
      skills: ["Data Structures", "Algorithms", "C", "C++", "Problem-Solving", "Code Optimization"],
      credential: "https://www.udemy.com/certificate/dsa-c-cpp-placeholder",
    },
    {
      id: "ccna-networking",
      title: "CCNA Networking Essentials: A Comprehensive Cisco Course",
      issuer: "Cisco Networking Academy",
      date: "December 2023",
      desc: "Gained expertise in networking fundamentals, including IP addressing, routing protocols, and network security. Strengthened my cybersecurity foundation by understanding network infrastructure and threat mitigation strategies.",
      skills: ["Networking", "IP Addressing", "Routing Protocols", "Network Security", "Cisco CLI"],
      credential: "https://www.cisco.com/certificate/ccna-placeholder",
    },
    {
      id: "cybersecurity-essentials",
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      date: "March 2024",
      desc: "Mastered core cybersecurity principles, including threat detection, vulnerability assessment, and secure system design. Applied knowledge to practical scenarios, such as penetration testing and incident response, aligning with my CTF interests.",
      skills: ["Threat Detection", "Vulnerability Assessment", "Penetration Testing", "Incident Response"],
      credential: "https://www.cisco.com/certificate/cybersecurity-placeholder",
    },
  ];

  // Open/close modal
  const openModal = (cert) => {
    setSelectedCert(cert);
    if (soundEnabled) playSound("click");
  };

  const closeModal = () => {
    setSelectedCert(null);
    if (soundEnabled) playSound("click");
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 font-orbitron">
      {/* Particle Background */}
      <Particles
        id="certifications-particles"
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
            My Certifications
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-300 max-w-3xl mx-auto">
            A Showcase of My Commitment to Continuous Learning
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            These certifications reflect my dedication to mastering cybersecurity, networking, and algorithmic skills, fueling my passion for securing systems and solving complex challenges.
          </p>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-gray-900/90 backdrop-blur-md">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-pink-500 text-center mb-10">Professional Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800/90 backdrop-blur-md rounded-lg p-6 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 hover-tilt"
              >
                <h3 className="text-xl font-semibold text-gray-200 glitch">{cert.title}</h3>
                <p className="text-gray-400 mt-2">{cert.issuer}</p>
                <p className="text-gray-400 mt-1">{cert.date}</p>
                <p className="text-gray-400 mt-3">{cert.desc}</p>
                <div className="flex space-x-4 mt-4">
                  {cert.credential && (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={cert.credential}
                      className="text-red-500 hover:text-pink-500 transition-colors"
                      aria-label={`Verify ${cert.title} credential`}
                      onClick={() => soundEnabled && playSound("click")}
                    >
                      <FiExternalLink size={24} />
                    </motion.a>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-4 text-pink-400 hover:text-red-400 transition-colors"
                  onClick={() => openModal(cert)}
                  aria-label={`View details for ${cert.title}`}
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
          <h2 className="text-4xl font-bold text-red-500 mb-6">Let’s Connect!</h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
            Interested in discussing my skills or collaborating on cybersecurity projects? Check out my LinkedIn or reach out directly!
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/yogeshwaran"
              className="inline-block px-6 py-3 bg-pink-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-red-500/90 transition-all duration-300 hover-tilt"
              aria-label="Visit Yogeshwaran's LinkedIn"
              onClick={() => soundEnabled && playSound("click")}
            >
              View LinkedIn
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

      {/* Modal for Certification Details */}
      {selectedCert && (
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
            <h2 className="text-3xl font-bold text-gray-200 glitch">{selectedCert.title}</h2>
            <p className="text-gray-400 mt-2">{selectedCert.issuer} | {selectedCert.date}</p>
            <p className="text-gray-300 mt-4">{selectedCert.desc}</p>
            <h3 className="text-xl font-semibold text-gray-200 mt-6">Skills Gained</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedCert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-red-500/20 text-red-400 text-sm rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
            {selectedCert.credential && (
              <div className="mt-6">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={selectedCert.credential}
                  className="text-pink-400 hover:text-red-400 transition-colors"
                  aria-label={`Verify ${selectedCert.title} credential`}
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
              aria-label="Close certification details"
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CertificationsPage;