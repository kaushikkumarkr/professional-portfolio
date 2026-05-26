import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white mt-12">
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-200">
        <div className="flex flex-col items-center md:items-start gap-1">
          <h2 className="font-bold text-md tracking-tight text-black">Kaushik Kumar</h2>
          <p className="text-sm text-gray-500">AI Engineer & Product Strategist</p>
        </div>
        
        <div className="flex items-center gap-6 text-gray-400">
          <Link href="https://github.com/kaushikkumarkr" target="_blank" className="hover:text-black transition-colors">
            <FaGithub size={20} />
          </Link>
          <Link href="https://linkedin.com/in/kaushikkumarkr" target="_blank" className="hover:text-black transition-colors">
            <FaLinkedin size={20} />
          </Link>
          <a href="mailto:krkaushikkumar@gmail.com" className="hover:text-black transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
