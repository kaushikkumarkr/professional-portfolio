"use client";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const featuredProjects = [
  {
    name: "google_workspace_mcp",
    problem: "Fragmented Workspace data caused immense cross-functional friction.",
    leap: "Engineered a unified Model Context Protocol (MCP) server architecture.",
    outcome: "Enabled a 3x speedup in information retrieval for operational teams.",
    tags: ["Python", "MCP", "Data Unification"],
    link: "https://github.com/kaushikkumarkr/google_workspace_mcp",
    image: "/images/mcp_project.png",
    color: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    name: "Antigravit",
    problem: "Unreliable, hallucinating analytics agents eroding executive trust.",
    leap: "Built a 6-node deterministic LangGraph architecture with self-correcting SQL generation.",
    outcome: "Achieved 100% routing accuracy and zero-data-exfiltration security.",
    tags: ["LangGraph", "Deterministic AI", "Security"],
    link: "https://github.com/kaushikkumarkr/Antigravit",
    image: "/images/deepagents_project.png",
    color: "bg-teal-50 text-teal-700 border-teal-200"
  },
  {
    name: "RAG Foundry",
    problem: "Enterprise context-collapse across disconnected knowledge bases.",
    leap: "Integrated Hybrid Retrieval, Cross-Encoder reranking, and 6 custom guardrails.",
    outcome: "Delivered 0.98 Relevancy on Ragas eval and mitigated hallucination risk entirely.",
    tags: ["Python", "RAGAS", "AI Guardrails"],
    link: "https://github.com/kaushikkumarkr/RAG",
    image: "/images/rag_project.png",
    color: "bg-purple-50 text-purple-700 border-purple-200"
  }
];

const projectCategories = [
  {
    id: "genai",
    label: "GenAI & Agents",
    projects: [
      { name: "NExT-GPT", desc: "Code and models for NExT-GPT: Any-to-Any Multimodal Large Language Model.", tags: ["Python", "Multimodal", "LLMs"], link: "https://github.com/kaushikkumarkr/NExT-GPT" },
      { name: "langchain-postgres", desc: "LangChain abstractions backed by Postgres Backend.", tags: ["Python", "LangChain", "Postgres"], link: "https://github.com/kaushikkumarkr/langchain-postgres" },
      { name: "AgenticRAG_-RAGAS", desc: "Advanced RAG implementation with automated evaluation via RAGAS.", tags: ["Python", "RAGAS", "Agents"], link: "https://github.com/kaushikkumarkr/AgenticRAG_-RAGAS" },
      { name: "AI_BI_Copilot", desc: "An AI Copilot for Business Intelligence and data query generation.", tags: ["Python", "Copilot", "Analytics"], link: "https://github.com/kaushikkumarkr/AI_BI_Copilot" }
    ]
  },
  {
    id: "data",
    label: "Data Science & ML",
    projects: [
      { name: "Finance-Loan-Approval", desc: "End-to-end ML pipeline with explainability (SHAP) and Streamlit.", tags: ["Machine Learning", "Optuna", "SHAP"], link: "https://github.com/kaushikkumarkr/Finance-Loan-Approval" },
      { name: "Data-Analysis-MAS", desc: "A Multi-Agent System dedicated to complex data analysis operations.", tags: ["Python", "Data Science", "Agents"], link: "https://github.com/kaushikkumarkr/Data-Analysis-MAS" },
      { name: "RecSys", desc: "Recommendation Systems architecture and models.", tags: ["Python", "Recommendation", "ML"], link: "https://github.com/kaushikkumarkr/RecSys" },
      { name: "NYC-Taxi-Analytics", desc: "Large-scale data analytics pipeline for NYC Taxi datasets.", tags: ["Python", "Analytics", "Data Pipeline"], link: "https://github.com/kaushikkumarkr/NYC-Taxi-Analytics" },
      { name: "experimentation-platform", desc: "A robust A/B testing and experimentation platform.", tags: ["Python", "A/B Testing", "Stats"], link: "https://github.com/kaushikkumarkr/experimentation-platform" }
    ]
  },
  {
    id: "backend",
    label: "Backend & Architecture",
    projects: [
      { name: "LedgerLens", desc: "Strongly documented, robust Python project for data and backend processing.", tags: ["Python", "Infrastructure"], link: "https://github.com/kaushikkumarkr/LedgerLens" },
      { name: "Ecom", desc: "Backend infrastructure for E-commerce applications.", tags: ["Python", "E-commerce"], link: "https://github.com/kaushikkumarkr/Ecom" },
      { name: "Quant-Deepagent", desc: "Quantitative finance research agent.", tags: ["Python", "Quant", "Agents"], link: "https://github.com/kaushikkumarkr/Quant-Deepagent" }
    ]
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("genai");

  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6 border-t border-gray-200">
      
      {/* Featured Section */}
      <div className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-black flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Featured Architecture
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col border border-gray-200 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative w-full h-48 border-b border-gray-100 overflow-hidden bg-gray-50">
                <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-black">{project.name}</h3>
                  <Link href={project.link} target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <ExternalLink size={18} />
                  </Link>
                </div>
                <div className="flex-grow mb-6 space-y-2">
                  <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-black">The Problem:</strong> {project.problem}</p>
                  <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-black">Technical Leap:</strong> {project.leap}</p>
                  <p className="text-green-700 font-medium text-sm leading-relaxed"><strong className="text-black">Outcome:</strong> {project.outcome}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-xs font-medium px-2 py-1 rounded-md border ${project.color}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Categorized Archive */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-black">Project Archive</h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                activeTab === cat.id 
                  ? "bg-black text-white" 
                  : "text-gray-500 hover:bg-gray-100 hover:text-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectCategories.find(c => c.id === activeTab)?.projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              className="flex flex-col p-5 border border-gray-200 bg-white hover:border-gray-300 transition-colors rounded-lg"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-md font-bold text-black flex items-center gap-2">
                  <Folder size={16} className="text-gray-400" />
                  {project.name}
                </h3>
                <div className="flex gap-2 text-gray-400">
                  <Link href={project.link} target="_blank" className="hover:text-black transition-colors">
                    <FaGithub size={16} />
                  </Link>
                  <Link href={project.link} target="_blank" className="hover:text-black transition-colors">
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-gray-500">
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
