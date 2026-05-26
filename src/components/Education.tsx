"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "New Jersey Institute of Technology (NJIT)",
    duration: "Sep 2024 - May 2026",
    details: "Focusing on Advanced Machine Learning, AI Systems, and Scalable Architectures."
  },
  {
    degree: "Bachelor of Engineering in Information Science and Engineering",
    institution: "BMS College of Engineering",
    duration: "Sep 2020 - Jun 2024",
    details: "Core focus on Algorithms, Data Structures, and Software Engineering."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-12 text-black flex items-center gap-2">
            <GraduationCap size={24} className="text-blue-600" />
            Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col p-6 border border-gray-200 bg-white rounded-xl shadow-sm hover:border-gray-300 transition-colors"
            >
              <h3 className="text-lg font-bold text-black mb-1 leading-tight">{edu.degree}</h3>
              <p className="text-gray-600 font-medium text-sm mb-3">{edu.institution}</p>
              <span className="text-xs font-mono text-gray-500 mb-4 bg-gray-50 px-2 py-1 rounded w-fit border border-gray-100">{edu.duration}</span>
              <p className="text-gray-500 text-sm leading-relaxed mt-auto">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
