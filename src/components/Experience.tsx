"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI Engineer",
    company: "FIELDWORKER.AI",
    duration: "Feb 2026 - May 2026",
    bullets: [
      { label: "The Challenge", text: "Automating complex SDR document extraction securely while eliminating the risk of unverified LLM actions." },
      { label: "The Architecture", text: "Built an end-to-end agentic parsing system via a self-hosted LLM with check-then-update wrapper endpoints and a Human-in-the-Loop (HITL) validation UI." },
      { label: "The Business Impact", text: "Slashed manual data entry time from hours to under 3 minutes per document, completely eliminated unauthorized API access risks, and enabled concurrent SDR workloads at scale." }
    ],
    tags: ["Agentic AI", "HITL", "Node.js", "PostgreSQL"]
  },
  {
    role: "Software Engineer Intern",
    company: "CISCO SYSTEMS, INC.",
    duration: "Feb 2024 - Jun 2024",
    bullets: [
      { label: "The Challenge", text: "The CCW Renewals team faced bottlenecked financial operations and slow response times under peak traffic loads." },
      { label: "The Architecture", text: "Designed scalable Spring Boot microservices incorporating optimized caching mechanisms and asynchronous processing logic." },
      { label: "The Business Impact", text: "Increased operational efficiency by 20% across 500+ enterprise accounts, reduced database load by 45%, and cut production errors by 40% via strict TDD coverage." }
    ],
    tags: ["Spring Boot", "Microservices", "System Scaling", "Mockito"]
  },
  {
    role: "ML Engineer",
    company: "VERZEO EDUTECH PVT. LTD.",
    duration: "Feb 2023 - Mar 2023",
    bullets: [
      { label: "The Challenge", text: "Existing predictive models were slow and resource-intensive during real-time image and time-series inferences." },
      { label: "The Architecture", text: "Engineered and tuned real-time CNN/RNN models deployed as containerized microservices on GCP with batch inference caching." },
      { label: "The Business Impact", text: "Improved prediction accuracy by 15%, reduced latency by 25%, and scaled resources to support a 50% higher workload capacity during peak usage." }
    ],
    tags: ["GCP", "Latency Optimization", "CNN/RNN", "Docker"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-12 text-black flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-gray-100 ml-2">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 pl-8 relative"
            >
              <div className="absolute w-4 h-4 bg-white rounded-full -left-[9px] top-1.5 border-[3px] border-black"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold text-black">{exp.role} <span className="text-gray-400 font-normal">@ {exp.company}</span></h3>
                <span className="text-sm font-bold text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-200">{exp.duration}</span>
              </div>
              
              <div className="space-y-3 mb-6 bg-gray-50/50 rounded-xl p-5 border border-gray-100">
                {exp.bullets.map((bullet, i) => (
                  <p key={i} className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-black font-semibold">{bullet.label}:</strong> {bullet.text}
                  </p>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold px-2 py-1 bg-white border border-gray-200 text-gray-600 rounded">
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
