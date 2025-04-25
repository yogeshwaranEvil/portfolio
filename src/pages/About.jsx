import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FiMail, FiLock } from "react-icons/fi";

const AboutPage = ({ soundEnabled, playSound }) => {
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

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 font-orbitron">
      {/* Particle Background */}
      <Particles
        id="about-particles"
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition-all duration-300">
            About Yogeshwaran R
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-300 max-w-3xl mx-auto">
            Cybersecurity Enthusiast | Machine Learning Innovator | Aspiring CTF Champion
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            I’m a third-year BE CSE student passionate about securing the digital world through AI-driven solutions and mastering vulnerabilities in CTF challenges. My journey blends cybersecurity, machine learning, and web development, driven by innovation and continuous learning.
          </p>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gray-900/90 backdrop-blur-md">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-pink-500 text-center mb-10">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                institution: "Sri Eshwar College of Engineering",
                degree: "BE Computer Science and Engineering",
                details: "CGPA: 7.4 (up to 4th Semester), 2023–2026",
                desc: "Pursuing a rigorous program with a focus on cybersecurity, machine learning, and software development.",
              },
              {
                institution: "Government Polytechnic College",
                degree: "Diploma in Computer Engineering",
                details: "88.6%, 2020–2023",
                desc: "Developed a strong foundation in programming, networking, and system design.",
              },
              {
                institution: "RKV Senior Secondary School",
                degree: "CBSE 10th Standard",
                details: "61.5%, 2019–2020",
                desc: "Built early skills in mathematics and computer science, sparking an interest in technology.",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800/90 backdrop-blur-md rounded-lg p-6 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 hover-tilt"
              >
                <h3 className="text-xl font-semibold text-gray-200">{edu.institution}</h3>
                <p className="text-gray-300 mt-2">{edu.degree}</p>
                <p className="text-gray-400 mt-1">{edu.details}</p>
                <p className="text-gray-400 mt-3">{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-red-500 text-center mb-10">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                role: "Machine Learning Intern",
                company: "V3 Analytics",
                period: "2023",
                desc: "Developed CNNs and LSTMs using TensorFlow and PyTorch to build AI-driven solutions. Focused on creating an AI-powered Intrusion Detection System (IDS) to enhance cybersecurity, leveraging Python, scikit-learn, Pandas, and Matplotlib.",
              },
              {
                role: "MERN Stack Intern",
                company: "THIS UX",
                period: "2023",
                desc: "Engineered a Netflix clone using React, TypeScript, and Tailwind CSS, with secure APIs and Appwrite for authentication. Enhanced application performance and scalability, gaining expertise in modern web development.",
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-900/90 backdrop-blur-md rounded-lg p-6 border border-pink-500/30 hover:bg-pink-500/20 transition-all duration-300 hover-tilt"
              >
                <h3 className="text-xl font-semibold text-gray-200">{exp.role}</h3>
                <p className="text-gray-300 mt-2">{exp.company}</p>
                <p className="text-gray-400 mt-1">{exp.period}</p>
                <p className="text-gray-400 mt-3">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
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
                desc: "Skilled in penetration testing with Metasploit, Nmap, and vulnerability scanning. Experienced in securing APIs and tackling CTF challenges.",
              },
              {
                name: "Machine Learning",
                desc: "Proficient in building CNNs and LSTMs with TensorFlow, PyTorch, and scikit-learn for AI-driven security solutions like IDS/IPS.",
              },
              {
                name: "Web Development",
                desc: "Expert in MERN stack (React, Node.js, MongoDB), TypeScript, and frameworks like Astro for secure, scalable applications.",
              },
              {
                name: "Programming",
                desc: "Versatile in Python, C/C++, Java, JavaScript, TypeScript, with strong OOP and data structures knowledge.",
              },
              {
                name: "Databases",
                desc: "Experienced with MongoDB, MySQL, PostgreSQL, and cloud databases like Cloudflare and BunnyDB.",
              },
              {
                name: "Tools & Frameworks",
                desc: "Proficient in Git, VS Code, Eclipse, Google Colab, JavaFX, and MITRE Cyber Framework for development and security.",
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
          <h2 className="text-4xl font-bold text-red-500 text-center mb-10">Key Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Encryption and Decryption using Tamil and RSA",
                desc: "Developed a Tkinter GUI app integrating Tamil Unicode character mapping and RSA encryption for secure text and file protection, showcasing cryptographic expertise.",
                link: "/projects/encryption-tamil-rsa",
              },
              {
                title: "Automated Penetration Testing Suite",
                desc: "Built a Metasploit script with Nmap integration to automate vulnerability detection and exploitation, optimizing cybersecurity workflows.",
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
              Explore All Projects
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
                desc: "Enhanced problem-solving skills through advanced data structures and algorithms, applicable to cybersecurity and software development.",
              },
              {
                title: "CCNA Networking Essentials: A Comprehensive Cisco Course",
                desc: "Gained expertise in networking protocols, routing, and security, strengthening my cybersecurity foundation.",
              },
              {
                title: "Cybersecurity Essentials",
                desc: "Mastered foundational cybersecurity principles, including threat detection and mitigation strategies.",
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

      {/* Values & Goals Section */}
      <section className="py-20 px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-red-500 mb-8">My Values & Goals</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I’m driven by a passion for innovation, leveraging AI and machine learning to build smarter cybersecurity solutions, like Intrusion Detection Systems. My problem-solving mindset thrives in CTF competitions, where I tackle complex vulnerabilities with tools like Metasploit and Nmap. Continuous learning fuels my growth—I pursue certifications, internships, and hands-on projects to stay ahead in the ever-evolving tech landscape. My goal is to secure the digital world while contributing to the community through open-source projects and knowledge-sharing, inspiring the next generation of cybersecurity professionals.
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-pink-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-red-500/90 transition-all duration-300 hover-tilt"
              aria-label="Connect with Yogeshwaran"
              onClick={() => soundEnabled && playSound("click")}
            >
              Connect With Me
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;