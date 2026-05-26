"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "Why Enterprise AI Projects Fail at the Deployment Phase",
    snippet: "The gap between a Jupyter Notebook prototype and a production-ready agentic system is where 80% of corporate AI budgets go to die. Here is how focusing on deterministic guardrails and TCO changes the game.",
    date: "May 2026",
    readTime: "5 min read",
    link: "#"
  },
  {
    title: "The Broken Middle-Tier: Moving Beyond Basic RAG",
    snippet: "Vector databases alone aren't enough. By implementing hybrid retrieval, cross-encoder reranking, and self-correcting agentic orchestration, we can solve the context-collapse problem in massive enterprise datasets.",
    date: "April 2026",
    readTime: "4 min read",
    link: "#"
  }
];

export default function Perspectives() {
  return (
    <section id="perspectives" className="py-24 border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-2xl font-bold text-black flex items-center gap-2 mb-2">
              <BookOpen size={24} className="text-purple-600" />
              Strategic Perspectives
            </h2>
            <p className="text-gray-500 text-sm">Thoughts on architecture, AI safety, and product strategy.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-gray-400">{article.date} • {article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {article.snippet}
              </p>
              <div className="flex items-center text-sm font-medium text-black group-hover:text-blue-600 transition-colors">
                Read Article <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
