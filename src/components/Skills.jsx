import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Database, Terminal, Globe, Shield } from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      title: "Languages",
      icon: <Code2 size={22} />,
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
    },
    {
      title: "Frameworks",
      icon: <Layers size={22} />,
      skills: ["Django", "Flask", "FastAPI", "React", "Node.js"],
    },
    {
      title: "Databases",
      icon: <Database size={22} />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"],
    },
    {
      title: "Tools & DevOps",
      icon: <Terminal size={22} />,
      skills: ["Git", "Docker", "Linux", "REST APIs", "Postman"],
    },
    {
      title: "Web Technologies",
      icon: <Globe size={22} />,
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"],
    },
    {
      title: "Concepts",
      icon: <Shield size={22} />,
      skills: ["OOP", "Data Structures", "Algorithms", "MVC", "Agile"],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#140a34] to-[#090e2a] text-white px-6 py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -left-40 top-1/2 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute -right-40 bottom-0 w-[400px] h-[400px] bg-pink-600 opacity-20 blur-[120px] rounded-full"></div>

      {/* Section Header */}
      <div className="text-center mb-20">
        <span className="px-4 py-1 text-sm bg-white/10 border border-white/10 rounded-full">
          Technical Skills
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>

        <p className="text-gray-400 mt-4">
          Technologies and tools I work with
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}