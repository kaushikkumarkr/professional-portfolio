"use client";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    name: "google_workspace_mcp",
    desc: "A highly complex Model Context Protocol (MCP) server for Google Workspace. Demonstrates elite system architecture and API integration.",
    tags: ["Python", "MCP", "Google APIs"],
    link: "https://github.com/kaushikkumarkr/google_workspace_mcp"
  },
  {
    name: "Antigravit",
    desc: "An incredibly deep and complex Python project showcasing ability to build heavy, production-grade applications autonomously.",
    tags: ["Python", "System Architecture"],
    link: "https://github.com/kaushikkumarkr/Antigravit"
  },
  {
    name: "RAG Foundry",
    desc: "A 7-stage Agentic RAG pipeline integrating Hybrid Retrieval, Cross-Encoder reranking, and MCP connectors for autonomous retrieval.",
    tags: ["Python", "GenAI", "Embeddings"],
    link: "https://github.com/kaushikkumarkr/RAG"
  },
  {
    name: "Finance-Loan-Approval",
    desc: "End-to-end ML pipeline with explainability (SHAP), fairness analysis, and a production Streamlit app.",
    tags: ["Machine Learning", "Optuna", "SHAP"],
    link: "https://github.com/kaushikkumarkr/Finance-Loan-Approval"
  },
  {
    name: "deepagents",
    desc: "An agent harness built on LangChain and LangGraph for complex agentic tasks.",
    tags: ["Python", "LangGraph", "AI Agents"],
    link: "https://github.com/kaushikkumarkr/deepagents"
  },
  {
    name: "AlphaEdge",
    desc: "A massive architecture highlighting advanced backend and AI engineering skills.",
    tags: ["Python", "AI/Backend"],
    link: "https://github.com/kaushikkumarkr/AlphaEdge"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-4xl mx-auto px-6 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-black">Selected Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="flex flex-col h-full p-6 border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <Folder size={24} className="text-gray-400" />
              <div className="flex gap-3 text-gray-500">
                <Link href={project.link} target="_blank" className="hover:text-black transition-colors">
                  <FaGithub size={18} />
                </Link>
                <Link href={project.link} target="_blank" className="hover:text-black transition-colors">
                  <ExternalLink size={18} />
                </Link>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-2 text-black">
              {project.name}
            </h3>
            <p className="text-gray-600 text-sm flex-grow mb-6 leading-relaxed">
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
    </section>
  );
}
