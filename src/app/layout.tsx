import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaushik Kumar | Senior AI Engineer & Architect",
  description: "Portfolio of Kaushik Kumar, SWE @ Cisco, AI Engineer, and Multi-Agent Architect. Showcasing world-class production GenAI systems and Data Science pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground relative selection:bg-accent/30 selection:text-white">
        {/* Glow effect background */}
        <div className="fixed inset-0 z-[-1] flex justify-center w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
