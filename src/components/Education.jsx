import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      title: "Master of Computer Applications (MCA)",
      duration: "2022 – 2024",
      university: "University",
      description:
        "Specialized in software engineering, database management, and advanced programming concepts. Focused on building scalable web applications and backend systems.",
      icon: <GraduationCap size={28} />,
      gradient: "from-purple-600/20 to-indigo-600/20",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      duration: "2019 – 2022",
      university: "University",
      description:
        "Foundation in computer science, programming fundamentals, data structures, algorithms, and web development technologies.",
      icon: <BookOpen size={28} />,
      gradient: "from-blue-600/20 to-cyan-600/20",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#140a34] to-[#090e2a] text-white px-6 py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -left-40 top-1/3 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute -right-40 bottom-0 w-[400px] h-[400px] bg-blue-600 opacity-20 blur-[120px] rounded-full"></div>

      {/* Section Header */}
      <div className="text-center mb-20">
        <span className="px-4 py-1 text-sm bg-white/10 border border-white/10 rounded-full">
          Education
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold">
          Academic{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Background
          </span>
        </h2>

        <p className="text-gray-400 mt-4">
          My educational journey and qualifications
        </p>
      </div>

      {/* Education Cards */}
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className={`relative bg-gradient-to-r ${edu.gradient} border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl`}
          >
            <div className="flex items-start gap-6">

              {/* Icon */}
              <div className="p-4 bg-white/10 rounded-xl text-purple-400">
                {edu.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <h3 className="text-xl font-semibold">{edu.title}</h3>

                  <span className="px-4 py-1 text-sm bg-white/10 border border-white/10 rounded-full">
                    {edu.duration}
                  </span>
                </div>

                <p className="text-purple-300 mt-2 font-medium">
                  {edu.university}
                </p>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}