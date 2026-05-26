"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, LineChart } from "lucide-react";

export default function ProductionPhilosophy() {
  return (
    <section id="philosophy" className="py-24 border-t border-gray-200 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-4 text-black">The Production Reality</h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Building a slick LangChain prototype takes a weekend. Deploying an autonomous multi-agent system that executives actually trust requires a totally different paradigm. My focus is entirely on the broken middle-tier: reliability, safety, and Total Cost of Ownership (TCO).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="w-10 h-10 rounded bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
              <ShieldCheck className="text-blue-600" size={20} />
            </div>
            <h3 className="text-md font-bold text-black mb-2">Deterministic Safety Rails</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              LLMs are probabilistic; enterprises need deterministic outcomes. I architect strict schema validation boundaries, PII filtering, and multi-layered jailbreak prevention to ensure agents never hallucinate catastrophic actions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="w-10 h-10 rounded bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
              <Activity className="text-teal-600" size={20} />
            </div>
            <h3 className="text-md font-bold text-black mb-2">Deep Observability</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you can&apos;t trace it, you can&apos;t trust it. I build telemetry-first systems utilizing Arize Phoenix and Langfuse to monitor token usage, latency, and agent reasoning traces down to the individual span level.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col"
          >
            <div className="w-10 h-10 rounded bg-purple-50 border border-purple-100 flex items-center justify-center mb-4">
              <LineChart className="text-purple-600" size={20} />
            </div>
            <h3 className="text-md font-bold text-black mb-2">Business ROI & TCO</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              I optimize models and vector queries not just for accuracy, but for cost. Transitioning from generic heavy APIs to specialized, self-hosted LLMs and intelligent routing drastically reduces inference costs while scaling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
