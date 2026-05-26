"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI Engineer",
    company: "FIELDWORKER.AI",
    duration: "Feb 2026 - May 2026",
    description: "Reduced manual data entry time from 2 hours to under 3 minutes per document. Architected an end-to-end agentic SDR parsing system using a self-hosted LLM with strict check-then-update logic, driving an estimated 95% reduction in processing costs and accelerating client onboarding.",
    tags: ["Agentic AI", "Cost Reduction", "HITL Validations", "PostgreSQL"]
  },
  {
    role: "Software Engineer Intern",
    company: "CISCO SYSTEMS, INC.",
    duration: "Feb 2024 - Jun 2024",
    description: "Streamlined operational processes across 500+ enterprise accounts, resulting in a 20% increase in operational efficiency. Designed scalable Spring Boot microservices with optimized caching that reduced database load by 45% and improved response times by 30% during peak traffic.",
    tags: ["Spring Boot", "Microservices", "Efficiency Scaling", "Mockito"]
  },
  {
    role: "ML Engineer",
    company: "VERZEO EDUTECH PVT. LTD.",
    duration: "Feb 2023 - Mar 2023",
    description: "Reduced model latency by 25% and scaled resource capacity by 50% for peak workloads. Translated core business requirements into real-time CNN/RNN pipelines on GCP, presenting actionable model insights directly to non-technical stakeholders.",
    tags: ["GCP", "Latency Optimization", "Machine Learning", "Docker"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-12 text-black">Experience</h2>
        </motion.div>

        <div className="relative border-l border-gray-200 ml-2">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 pl-8 relative"
            >
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[6.5px] top-1.5 border-2 border-white"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-lg font-bold text-black">{exp.role} <span className="text-gray-500 font-normal">@ {exp.company}</span></h3>
                <span className="text-sm text-gray-500 font-mono">{exp.duration}</span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
