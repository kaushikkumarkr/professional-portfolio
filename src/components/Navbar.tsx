"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight text-black">
          Kaushik Kumar
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
          <Link href="#skills" className="hover:text-black transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-black transition-colors">Projects</Link>
          <Link href="#experience" className="hover:text-black transition-colors">Experience</Link>
        </div>

        <div className="flex items-center gap-4 text-gray-500">
          <a href="/KaushikKumar_KR_Resume.pdf" download className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 hover:text-black transition-colors text-gray-600 hidden sm:block">
            Resume
          </a>
          <Link href="https://github.com/kaushikkumarkr" target="_blank" className="hover:text-black transition-colors">
            <FaGithub size={18} />
          </Link>
          <Link href="https://www.linkedin.com/in/k-r-kaushik-kumar-967ba9215/" target="_blank" className="hover:text-black transition-colors">
            <FaLinkedin size={18} />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
