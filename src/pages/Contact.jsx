import React, { useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const ContactPage = ({ soundEnabled, playSound }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Particle initialization
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (soundEnabled) playSound("click");

    // Placeholder EmailJS integration (replace with your credentials)
    emailjs
      .send(
        "your_service_id", // Replace with EmailJS service ID
        "your_template_id", // Replace with EmailJS template ID
        formData,
        "your_user_id" // Replace with EmailJS user ID
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 font-orbitron">
      {/* Particle Background */}
      <Particles
        id="contact-particles"
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

      {/* Contact Section */}
      <section className="py-20 px-4 relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition-all duration-300 glitch">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-300 max-w-3xl mx-auto">
            Let’s collaborate on cybersecurity projects, CTF challenges, or AI-driven solutions.
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Reach out via the form below or connect with me on social platforms.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8 mb-12">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:yogeshwaran.r2022lcse@sece.ac.in"
              className="text-red-500 hover:text-pink-500 transition-colors hover-tilt"
              aria-label="Email Yogeshwaran"
              onClick={() => soundEnabled && playSound("click")}
            >
              <FiMail size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/yogeshwaranEvil"
              className="text-red-500 hover:text-pink-500 transition-colors hover-tilt"
              aria-label="Visit Yogeshwaran's GitHub"
              onClick={() => soundEnabled && playSound("click")}
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com/in/yogeshwaran"
              className="text-red-500 hover:text-pink-500 transition-colors hover-tilt"
              aria-label="Visit Yogeshwaran's LinkedIn"
              onClick={() => soundEnabled && playSound("click")}
            >
              <FiLinkedin size={24} />
            </motion.a>
          </div>

          {/* Contact Form */}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-pink-500/90 backdrop-blur-md text-gray-200 rounded-lg hover:bg-red-500/90 transition-all duration-300 hover-tilt"
              aria-label="Send message"
              disabled={isSubmitting}
              onClick={() => soundEnabled && playSound("click")}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;