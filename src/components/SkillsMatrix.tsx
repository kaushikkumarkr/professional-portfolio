"use client";
import { motion } from "framer-motion";
import { Brain, Database, LayoutTemplate, Server } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="text-primary" size={24} />,
    skills: ["LLM Orchestration", "LangChain & LangGraph", "RAG Systems", "Optuna", "SHAP", "Model Fine-Tuning"]
  },
  {
    title: "Backend & Systems",
    icon: <Server className="text-accent" size={24} />,
    skills: ["Python", "FastAPI", "Multi-Agent Systems", "MCP Protocols", "PostgreSQL", "System Architecture"]
  },
  {
    title: "Frontend Development",
    icon: <LayoutTemplate className="text-blue-400" size={24} />,
    skills: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Framer Motion", "Streamlit"]
  },
  {
    title: "Data & Cloud Infrastructure",
    icon: <Database className="text-green-400" size={24} />,
    skills: ["Data Pipelines", "Recommendation Systems", "Docker", "Git/CI-CD", "AWS", "Analytics"]
  }
];

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Arsenal</h2>
        <p className="text-muted max-w-2xl mb-12">
          A blend of deep backend engineering, advanced machine learning, and intuitive frontend experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl border border-card-border bg-card/40 hover:bg-card/60 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-background border border-card-border shadow-sm group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 text-sm rounded-full bg-background/50 border border-card-border text-foreground/80"
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
