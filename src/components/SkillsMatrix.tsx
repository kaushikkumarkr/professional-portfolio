"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Agentic AI & Prompting",
    skills: ["LangChain & LangGraph", "Deepagents", "Model Context Protocol (MCP)", "CrewAI", "ReAct & Reflection", "A2A Orchestration"]
  },
  {
    title: "Machine Learning & RAG",
    skills: ["PyTorch & Transformers", "Hybrid Retrieval", "Cross-Encoder Reranking", "XGBoost", "Optuna & SHAP", "CNNs & LSTMs"]
  },
  {
    title: "DevOps, Cloud & DBs",
    skills: ["Microsoft Azure", "Google Cloud Platform (GCP)", "Qdrant & ChromaDB", "pgvector", "Docker & Kubernetes", "FastAPI & PostgreSQL", "CI/CD"]
  },
  {
    title: "AI Safety & Observability",
    skills: ["Arize Phoenix", "Langfuse", "LLM-as-a-Judge", "Hallucination Detection", "Guardrails", "PII Filtering"]
  }
];

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 max-w-4xl mx-auto px-6 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-black">Skills & Arsenal</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 text-sm bg-gray-50 border border-gray-200 text-gray-700 rounded-sm"
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
