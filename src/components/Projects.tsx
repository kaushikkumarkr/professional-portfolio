"use client";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const projectCategories = [
  {
    id: "genai",
    label: "GenAI & Agents",
    projects: [
      {
        name: "google_workspace_mcp",
        desc: "A highly complex Model Context Protocol (MCP) server for Google Workspace. Demonstrates elite system architecture and API integration.",
        tags: ["Python", "MCP", "Google APIs"],
        link: "https://github.com/kaushikkumarkr/google_workspace_mcp"
      },
      {
        name: "deepagents",
        desc: "An agent harness built on LangChain and LangGraph for complex agentic tasks.",
        tags: ["Python", "LangGraph", "AI Agents"],
        link: "https://github.com/kaushikkumarkr/deepagents"
      },
      {
        name: "RAG",
        desc: "Advanced Retrieval-Augmented Generation implementation for precise AI query answering.",
        tags: ["Python", "GenAI", "Embeddings"],
        link: "https://github.com/kaushikkumarkr/RAG"
      }
    ]
  },
  {
    id: "data",
    label: "Data Science & ML",
    projects: [
      {
        name: "Finance-Loan-Approval",
        desc: "End-to-end ML pipeline with explainability (SHAP), fairness analysis, and a production Streamlit app.",
        tags: ["Machine Learning", "Optuna", "SHAP"],
        link: "https://github.com/kaushikkumarkr/Finance-Loan-Approval"
      },
      {
        name: "Data-Analysis-MAS",
        desc: "A Multi-Agent System dedicated to complex data analysis operations.",
        tags: ["Python", "Data Science", "Agents"],
        link: "https://github.com/kaushikkumarkr/Data-Analysis-MAS"
      }
    ]
  },
  {
    id: "backend",
    label: "Backend & Quant",
    projects: [
      {
        name: "Antigravit",
        desc: "An incredibly deep and complex Python project showcasing ability to build heavy, production-grade applications autonomously.",
        tags: ["Python", "System Architecture"],
        link: "https://github.com/kaushikkumarkr/Antigravit"
      },
      {
        name: "AlphaEdge",
        desc: "A massive architecture highlighting advanced backend and AI engineering skills.",
        tags: ["Python", "AI/Backend"],
        link: "https://github.com/kaushikkumarkr/AlphaEdge"
      },
      {
        name: "LedgerLens",
        desc: "A strongly documented, robust Python project for data and backend processing.",
        tags: ["Python", "Infrastructure"],
        link: "https://github.com/kaushikkumarkr/LedgerLens"
      }
    ]
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("genai");

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-12 border-b border-card-border pb-4">
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === cat.id 
                ? "bg-primary text-white" 
                : "text-muted hover:bg-card hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectCategories.find(c => c.id === activeTab)?.projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="flex flex-col h-full p-6 rounded-2xl border border-card-border bg-card/30 hover:bg-card/50 transition-all hover:-translate-y-1 group"
          >
            <div className="flex justify-between items-start mb-6">
              <Folder size={32} className="text-primary" />
              <div className="flex gap-3 text-muted">
                <Link href={project.link} target="_blank" className="hover:text-primary transition-colors">
                  <FaGithub size={20} />
                </Link>
                <Link href={project.link} target="_blank" className="hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </Link>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-muted text-sm flex-grow mb-6 leading-relaxed">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-muted-foreground">
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
