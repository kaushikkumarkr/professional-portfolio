"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Cisco",
    duration: "Present",
    description: "Developing scalable backend architectures and AI-driven networking solutions. Focusing on system reliability and robust multi-agent orchestration.",
    tags: ["Python", "GenAI", "System Architecture", "Cloud Infrastructure"]
  },
  {
    role: "Senior AI Engineer / Multi-Agent Architect",
    company: "Independent Projects",
    duration: "2024 - Present",
    description: "Architected multiple open-source AI tools including a Google Workspace MCP server and complex agentic frameworks like 'deepagents' and 'Data-Analysis-MAS'.",
    tags: ["LangChain", "LangGraph", "LLMs", "Machine Learning"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
      </motion.div>

      <div className="relative border-l border-card-border ml-3 md:ml-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mb-12 pl-8 relative"
          >
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[8.5px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
              <h3 className="text-xl font-bold">{exp.role} <span className="text-primary">@ {exp.company}</span></h3>
              <span className="text-sm text-muted font-mono bg-card px-3 py-1 rounded-full border border-card-border w-fit">{exp.duration}</span>
            </div>
            
            <p className="text-muted leading-relaxed mb-4">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {exp.tags.map(tag => (
                <span key={tag} className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
