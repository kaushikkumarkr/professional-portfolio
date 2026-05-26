"use client";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-start pt-20 max-w-6xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
      >
        <Terminal size={14} />
        <span>System Architect & AI Engineer</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
      >
        Building Production <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">GenAI Systems.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed"
      >
        I&apos;m Kaushik Kumar, a Software Engineer @ Cisco and a Multi-Agent Architect. 
        I specialize in scaling intelligent agents, LLM applications, and complex data pipelines.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link 
          href="#projects" 
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          View Featured Work <ArrowRight size={18} />
        </Link>
        <Link 
          href="https://github.com/kaushikkumarkr" 
          target="_blank"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-card-border bg-card/50 hover:bg-card transition-colors font-medium"
        >
          Explore GitHub
        </Link>
      </motion.div>
    </section>
  );
}
