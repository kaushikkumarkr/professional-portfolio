"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 glass"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Code size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight">Kaushik Kumar</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Featured Projects</Link>
          <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://github.com/kaushikkumarkr" target="_blank" className="p-2 rounded-full hover:bg-card-border transition-colors text-muted hover:text-white">
            <FaGithub size={20} />
          </Link>
          <Link href="https://linkedin.com/in/kaushikkumarkr" target="_blank" className="p-2 rounded-full hover:bg-card-border transition-colors text-muted hover:text-white">
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
