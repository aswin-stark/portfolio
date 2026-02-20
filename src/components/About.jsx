import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#140a34] to-[#090e2a] text-white px-6 py-24 relative overflow-hidden">

      {/* Section Title */}
      <div className="text-center mb-16">
        <span className="px-4 py-1 text-sm bg-white/10 rounded-full border border-white/10">
          About Me
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold">
          Who I{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Am
          </span>
        </h2>

        <p className="text-gray-400 mt-4">Get to know me better</p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-12 w-[280px] h-[320px] flex items-center justify-center shadow-2xl">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-purple-600 opacity-20 blur-2xl"></div>

            {/* Emoji */}
            <div className="text-7xl z-10">👨‍💻</div>

            {/* Top Tag */}
            <div className="absolute -top-4 right-6 bg-[#1f1b3a] border border-white/10 px-4 py-1 text-sm rounded-full">
              🐍 Python Dev
            </div>

            {/* Bottom Tag */}
            <div className="absolute -bottom-4 left-6 bg-[#1f1b3a] border border-white/10 px-4 py-1 text-sm rounded-full">
              🎓 MCA Graduate
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6">
            Passionate Python Developer
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            I'm Aswin Stark, a dedicated Python Developer with a Master of
            Computer Applications (MCA) degree. I specialize in building
            efficient, scalable, and user-focused software solutions that solve
            real-world problems.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            With a strong foundation in programming principles, data
            structures, and database management, I develop web applications,
            automation scripts, and backend systems using Python and related
            technologies.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            I'm highly motivated to continuously learn emerging technologies
            and apply best practices in software development. I'm actively
            seeking opportunities to contribute my technical expertise and
            collaborate with dynamic teams.
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Problem Solver", "Team Player", "Fast Learner", "Detail-Oriented"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm bg-white/10 border border-white/10 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
            >
              <Github size={20} />
            </a>

            <a
              href="#"
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="#"
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}