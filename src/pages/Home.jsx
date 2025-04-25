import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FiMail, FiLock } from "react-icons/fi";

const HomePage = ({ soundEnabled, playSound }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (soundEnabled) playSound("click");
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent! (This is a placeholder)");
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 font-orbitron">
      {/* Particle Background */}
      <Particles
        id="home-particles"
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition-all duration-300">
            Yogeshwaran R
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-gray-300">
            Cybersecurity Enthusiast | Machine Learning Innovator | CTF Competitor
          </p>
          <p className="text-base md:text-lg mt-2 text-gray-400 max-w-xl mx-auto">
            Building secure systems with AI-driven solutions and mastering vulnerabilities through CTF challenges.
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mt-8"
          >
            <Link
              to="/projects"
              className="inline-block px-8 py-4 bg-red-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-pink-500/90 transition-all duration-300 hover-tilt"
              aria-label="Explore Yogeshwaran's projects"
              onClick={() => soundEnabled && playSound("click")}
            >
              Explore My Work
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-red-500 mb-8">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm Yogeshwaran R, a third-year BE CSE student at Sri Eshwar College of Engineering (CGPA 7.4) with a Diploma from Government Polytechnic College (88.6%). My passion lies at the intersection of cybersecurity and machine learning, where I develop AI-driven security solutions like Intrusion Detection Systems. I thrive in CTF competitions, tackling web exploitation and reverse engineering challenges. My internships at V3 Analytics and THIS UX honed my skills in ML (TensorFlow, PyTorch) and MERN stack development, respectively. I’m dedicated to securing the digital world and sharing knowledge through innovative projects and community contributions.
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mt-6"
          >
            <Link
              to="/about"
              className="text-pink-400 hover:text-red-400 transition-colors"
              aria-label="Learn more about Yogeshwaran"
              onClick={() => soundEnabled && playSound("click")}
            >
              Read More
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-900/90 backdrop-blur-md">
        <motion.div
          variants={sectionVariants}
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-pink-500 text-center mb-10">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Cybersecurity",
                desc: "Proficient in penetration testing with Metasploit, Nmap, and vulnerability scanning. Experienced in securing APIs and applications.",
              },
              {
                name: "Machine Learning",
                desc: "Skilled in building CNNs and LSTMs using TensorFlow, PyTorch, and scikit-learn for AI-driven security solutions like IDS/IPS.",
              },
              {
                name: "Web Development",
                desc: "Expert in MERN stack (React, Node.js, MongoDB) and TypeScript, with experience in building secure, scalable web applications.",
              },
              {
                name: "Programming",
                desc: "Versatile in Python, C/C++, Java, JavaScript, and TypeScript, with strong OOP and data structures knowledge.",
              },
              {
                name: "Databases",
                desc: "Experienced with MongoDB, MySQL, PostgreSQL, and cloud databases like Cloudflare and BunnyDB for secure data management.",
              },
              {
                name: "Tools & Frameworks",
                desc: "Proficient in Git, VS Code, Eclipse, Google Colab, Astro, JavaFX, and MITRE Cyber Framework for development and security.",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800/90 backdrop-blur-md rounded-lg p-6 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 hover-tilt"
              >
                <h3 className="text-xl font-semibold text-gray-200">{skill.name}</h3>
                <p className="text-gray-400 mt-3">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-red-500 text-center mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Encryption and Decryption using Tamil and RSA",
                desc: "Built a Tkinter GUI app integrating Tamil Unicode character mapping and RSA encryption for secure text and file protection.",
                link: "/projects/encryption-tamil-rsa",
              },
              {
                title: "Automated Penetration Testing Suite",
                desc: "Developed a Metasploit script with Nmap integration for automated vulnerability detection and exploitation, optimized for efficiency.",
                link: "/projects/penetration-testing-suite",
              },
              {
                title: "Agentless Windows Vulnerability Scanner",
                desc: "Created an AI-powered scanner using PowerShell, PostgreSQL, and Autoencoders for anomaly detection, featured in Smart India Hackathon 2024.",
                link: "/projects/windows-vulnerability-scanner",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-900/90 backdrop-blur-md rounded-lg p-6 border border-pink-500/30 hover:bg-pink-500/20 transition-all duration-300 hover-tilt"
              >
                <h3 className="text-xl font-semibold text-gray-200">{project.title}</h3>
                <p className="text-gray-400 mt-3">{project.desc}</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mt-4"
                >
                  <Link
                    to={project.link}
                    className="text-pink-400 hover:text-red-400 transition-colors"
                    aria-label={`View details for ${project.title}`}
                    onClick={() => soundEnabled && playSound("click")}
                  >
                    View Details
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mt-10 text-center"
          >
            <Link
              to="/projects"
              className="inline-block px-6 py-3 bg-pink-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-red-500/90 transition-all duration-300 hover-tilt"
              aria-label="View all projects"
              onClick={() => soundEnabled && playSound("click")}
            >
              See All Projects
            </Link>
          </motion.div>
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
          <h2 className="text-4xl font-bold text-pink-500 text-center mb-10">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mastering Data Structures and Algorithms Using C and C++",
                desc: "Demonstrated proficiency in advanced data structures and algorithms, enhancing problem-solving skills.",
              },
              {
                title: "CCNA Networking Essentials: A Comprehensive Cisco Course",
                desc: "Gained expertise in networking fundamentals, including protocols, routing, and network security.",
              },
              {
                title: "Cybersecurity Essentials",
                desc: "Acquired foundational knowledge in cybersecurity principles, threat detection, and mitigation strategies.",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800/90 backdrop-blur-md rounded-lg p-6 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 hover-tilt"
              >
                <h3 className="text-xl font-semibold text-gray-200">{cert.title}</h3>
                <p className="text-gray-400 mt-3">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Blog Teaser Section */}
      <section className="py-20 px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-red-500 text-center mb-10">Recent Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Building an AI-Powered Intrusion Detection System",
                desc: "A guide to using TensorFlow and Autoencoders for real-time threat detection in cybersecurity.",
                link: "/blog/ai-intrusion-detection",
              },
              {
                title: "Automating Penetration Testing with Python",
                desc: "Learn how to streamline vulnerability scanning and exploitation using Metasploit and Nmap.",
                link: "/blog/automated-pentesting",
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800/90 backdrop-blur-md rounded-lg p-6 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 hover-tilt"
              >
                <h3 className="text-xl font-semibold text-gray-200">{post.title}</h3>
                <p className="text-gray-400 mt-3">{post.desc}</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mt-4"
                >
                  <Link
                    to={post.link}
                    className="text-pink-400 hover:text-red-400 transition-colors"
                    aria-label={`Read blog post: ${post.title}`}
                    onClick={() => soundEnabled && playSound("click")}
                  >
                    Read More
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mt-10 text-center"
          >
            <Link
              to="/blog"
              className="inline-block px-6 py-3 bg-red-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-pink-500/90 transition-all duration-300 hover-tilt"
              aria-label="View all blog posts"
              onClick={() => soundEnabled && playSound("click")}
            >
              Explore Blog
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900/90 backdrop-blur-md">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-pink-500 mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10">
            Interested in collaborating on cybersecurity projects, CTF challenges, or AI-driven security solutions? Reach out!
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:yogeshwaran.r2022lese@sece.ac.in"
              className="text-red-500 hover:text-pink-500 transition-colors hover-tilt"
              aria-label="Email Yogeshwaran"
              onClick={() => soundEnabled && playSound("click")}
            >
              <FiMail size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com/in/yogeshwaran"
              className="text-red-500 hover:text-pink-500 transition-colors hover-tilt"
              aria-label="Visit Yogeshwaran's LinkedIn"
              onClick={() => soundEnabled && playSound("click")}
            >
              💼 LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/yogeshwaran"
              className="text-red-500 hover:text-pink-500 transition-colors hover-tilt"
              aria-label="Visit Yogeshwaran's GitHub"
              onClick={() => soundEnabled && playSound("click")}
            >
              🖥️ GitHub
            </motion.a>
          </div>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-gray-900/90 backdrop-blur-md p-8 rounded-lg border border-pink-500/30"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800/50 border border-red-500/30 rounded-lg text-gray-200 focus:outline-none focus:border-pink-500 transition-all"
                required
                aria-label="Your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800/50 border border-red-500/30 rounded-lg text-gray-200 focus:outline-none focus:border-pink-500 transition-all"
                required
                aria-label="Your email address"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800/50 border border-red-500/30 rounded-lg text-gray-200 focus:outline-none focus:border-pink-500 transition-all"
                rows="4"
                required
                aria-label="Your message"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-pink-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-red-500/90 transition-all duration-300 hover-tilt"
              aria-label="Send message"
              onClick={() => soundEnabled && playSound("click")}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;