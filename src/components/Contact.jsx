import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0b0b1f] to-[#070714] text-white px-6 py-20">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="px-4 py-1 bg-[#1c1c3a] text-sm rounded-full text-purple-400">
          Contact
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Get In <span className="text-purple-500">Touch</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Have a project in mind? Let's work together!
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
          <p className="text-gray-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or 
            opportunities to be part of your vision. Feel free to reach out!
          </p>

          {/* Contact Cards */}
          <div className="space-y-6">
            
            <div className="bg-[#151530] p-5 rounded-xl flex items-center gap-4 hover:scale-105 transition">
              <div className="bg-purple-600 p-3 rounded-lg">
                <FiMail />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p>ajayaswin521@gmail.com</p>
              </div>
            </div>

            <div className="bg-[#151530] p-5 rounded-xl flex items-center gap-4 hover:scale-105 transition">
              <div className="bg-blue-600 p-3 rounded-lg">
                <FiGithub />
              </div>
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <p>github.com/aswin-stark</p>
              </div>
            </div>

            <div className="bg-[#151530] p-5 rounded-xl flex items-center gap-4 hover:scale-105 transition">
              <div className="bg-blue-500 p-3 rounded-lg">
                <FiLinkedin />
              </div>
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <p>linkedin.com/in/aswin-stark</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#151530] p-8 rounded-2xl shadow-lg"
        >
          <form className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="bg-[#1f1f3f] p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-[#1f1f3f] p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <input
              type="text"
              placeholder="Project inquiry..."
              className="w-full bg-[#1f1f3f] p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
            />

            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full bg-[#1f1f3f] p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-xl font-semibold flex justify-center items-center gap-2"
            >
              <FiSend /> Send Message
            </motion.button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;