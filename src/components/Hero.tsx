"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-start pt-20 relative max-w-4xl mx-auto px-6">
      <div className="relative z-10 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground"
        >
          Kaushik Kumar. <br />
          <span className="text-muted">Building Production Compound AI Systems.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed font-medium"
        >
          I am an MS in Computer Science student at NJIT and an AI Engineer. 
          I specialize in Agentic AI, scalable MLOps, and deterministic multi-agent workflows that bridge the gap between advanced research and business outcomes.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link 
            href="#projects" 
            className="flex items-center justify-center gap-2 px-6 py-3 rounded bg-black text-white font-medium hover:bg-gray-800 transition-colors text-sm"
          >
            View Work <ArrowRight size={16} />
          </Link>
          <Link 
            href="https://github.com/kaushikkumarkr" 
            target="_blank"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded border border-gray-300 bg-white hover:bg-gray-50 transition-colors font-medium text-sm text-black"
          >
            GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
