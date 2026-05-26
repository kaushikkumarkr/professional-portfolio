import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-card-border bg-card/30 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="font-bold text-lg tracking-tight">Kaushik Kumar</h2>
          <p className="text-sm text-muted">Senior AI Engineer & Multi-Agent Architect</p>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="https://github.com/kaushikkumarkr" target="_blank" className="text-muted hover:text-primary transition-colors">
            <FaGithub size={24} />
          </Link>
          <Link href="https://linkedin.com/in/kaushikkumarkr" target="_blank" className="text-muted hover:text-primary transition-colors">
            <FaLinkedin size={24} />
          </Link>
          <a href="mailto:kaushikkumar@example.com" className="text-muted hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="w-full text-center py-6 border-t border-card-border/50 text-xs text-muted">
        &copy; {new Date().getFullYear()} Kaushik Kumar. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
