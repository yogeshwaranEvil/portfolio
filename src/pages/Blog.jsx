import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BlogPage = ({ soundEnabled, playSound }) => {
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

  // Hypothetical blog posts based on resume and interests
  const posts = [
    {
      id: "ai-intrusion-detection",
      title: "Building an AI-Powered Intrusion Detection System",
      excerpt: "Learn how to leverage TensorFlow and Autoencoders to detect network threats in real-time, inspired by my V3 Analytics internship.",
      date: "April 10, 2025",
    },
    {
      id: "automated-pentesting",
      title: "Automating Penetration Testing with Python",
      excerpt: "A guide to streamlining CTF challenges and pentesting workflows using Metasploit and Nmap, based on my 2024 project.",
      date: "March 15, 2025",
    },
    {
      id: "ctf-web-exploitation",
      title: "Mastering Web Exploitation in CTF",
      excerpt: "Tips and tricks for solving web-based CTF challenges, including SQL injection and SSRF, drawn from my cybersecurity passion.",
      date: "February 20, 2025",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 font-orbitron">
      {/* Particle Background */}
      <Particles
        id="blog-particles"
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
            My Blog
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-300 max-w-3xl mx-auto">
            Sharing insights on cybersecurity, machine learning, and CTF strategies to inspire and educate the tech community.
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Dive into my thoughts on securing systems, automating pentesting, and leveraging AI for threat detection.
          </p>
        </motion.div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 px-4 bg-gray-900/90 backdrop-blur-md">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl font-bold text-pink-500 text-center mb-10">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800/90 backdrop-blur-md rounded-lg p-6 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 hover-tilt"
              >
                <h3 className="text-xl font-semibold text-gray-200 glitch">{post.title}</h3>
                <p className="text-gray-400 mt-2">{post.date}</p>
                <p className="text-gray-400 mt-3">{post.excerpt}</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mt-4"
                >
                  <Link
                    to={`/blog/${post.id}`}
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
          <h2 className="text-4xl font-bold text-red-500 mb-6">Have a Topic Idea?</h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
            Want to suggest a blog topic or collaborate on a post about cybersecurity or AI? Reach out!
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mt-6"
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-pink-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-red-500/90 transition-all duration-300 hover-tilt"
              aria-label="Contact Yogeshwaran"
              onClick={() => soundEnabled && playSound("click")}
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPage;