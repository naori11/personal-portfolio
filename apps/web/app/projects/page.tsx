"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, springs, easings } from "../../lib/motion";

const projects = [
  {
    title: "Auto-scaling K8s Cluster",
    description: "A highly available EKS infrastructure with Karpenter for intelligent node auto-scaling based on real-time resource demands. Optimized for cost and performance.",
    tech: ["TERRAFORM", "AWS", "DOCKER"],
    links: [
      { label: "GITHUB", icon: "code", href: "#", type: "tertiary" },
      { label: "LIVE DEMO", icon: "launch", href: "#", type: "primary" },
    ],
  },
  {
    title: "ELK Observability Stack",
    description: "Custom Go-based log scrapers feeding into an ELK cluster. Features advanced alerting thresholds and curated Kibana dashboards for microservices.",
    tech: ["ELASTIC", "GO", "GCP"],
    links: [
      { label: "CASE STUDY", icon: "menu_book", href: "#", type: "tertiary" },
      { label: "GITHUB", icon: "code", href: "#", type: "tertiary" },
    ],
    offset: "lg:mt-12",
  },
  {
    title: "GitOps Pipeline Engine",
    description: "Automated deployment workflow using Argo CD for GitOps. Includes blue/green deployment strategies and automated rollback on health check failures.",
    tech: ["ARGO CD", "HELM", "K8S"],
    links: [
      { label: "GITHUB", icon: "code", href: "#", type: "tertiary" },
      { label: "LIVE DEMO", icon: "launch", href: "#", type: "primary" },
    ],
  },
  {
    title: "Serverless Auth Backend",
    description: "Event-driven authentication architecture using AWS Lambda and Cognito. Designed to handle 10k+ concurrent requests with zero provisioned capacity.",
    tech: ["LAMBDA", "NODE.JS", "DYNAMODB"],
    links: [
      { label: "GITHUB", icon: "code", href: "#", type: "tertiary" },
    ],
  },
  {
    title: "Multi-Cloud IaC Modules",
    description: "Standardized Infrastructure-as-Code modules for internal teams. Enables rapid spinning up of secure, compliant dev/staging environments.",
    tech: ["PULUMI", "PYTHON", "AZURE"],
    links: [
      { label: "CASE STUDY", icon: "menu_book", href: "#", type: "tertiary" },
    ],
    offset: "lg:-mt-12",
  },
  {
    title: "Prometheus Exporter",
    description: "High-performance custom exporter written in Rust for monitoring specialized Redis workloads. Focuses on low overhead and high precision.",
    tech: ["PROMETHEUS", "RUST", "REDIS"],
    links: [
      { label: "GITHUB", icon: "code", href: "#", type: "tertiary" },
      { label: "LIVE DEMO", icon: "launch", href: "#", type: "primary" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.header
        className="mb-20 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easings.easeOutExpo }}
      >
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span
            className="w-3 h-3 bg-[#6bd8cb] rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#6bd8cb] text-xs uppercase tracking-[0.2em]">Deployment Archive</span>
        </motion.div>
        <motion.h1
          className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl font-bold text-[#dae2fd] tracking-tighter mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easings.easeOutExpo }}
        >
          Engineered <span className="text-[#cfbdff] italic">Systems.</span>
        </motion.h1>
        <motion.p
          className="text-lg text-[#b9c7df] leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: easings.easeOutExpo }}
        >
          A showcase of architecting resilient cloud infrastructure, automated CI/CD pipelines, and high-performance backend systems. Focus on scalability, security, and observability.
        </motion.p>
      </motion.header>

      {/* Project Grid */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`group relative bg-[#131b2e] p-1 rounded-lg ${project.offset || ""}`}
            variants={fadeInUp}
            whileHover={{ y: -8, boxShadow: "0 0 30px rgba(207,189,255,0.15)" }}
            transition={{ duration: 0.3, ease: easings.easeOutExpo }}
          >
            <div className="bg-[#171f33] rounded-sm overflow-hidden flex flex-col h-full border border-[#494456]/15 group-hover:border-[#cfbdff]/40 transition-colors">
              <div className="p-6">
                {/* Terminal Header Decoration */}
                <div className="flex gap-1.5 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#494456]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#494456]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#494456]/30"></div>
                </div>

                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[#dae2fd] mb-3 group-hover:text-[#cfbdff] transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#3c4a5e] text-[#abb9d1] rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-[#b9c7df] text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto p-6 bg-[#222a3d]/30 border-t border-[#494456]/10 flex flex-wrap gap-4 items-center">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    className={`font-[family-name:var(--font-jetbrains-mono)] text-[11px] ${
                      link.type === "primary" ? "text-[#cfbdff]" : "text-[#6bd8cb]"
                    } hover:underline flex items-center gap-1`}
                    href={link.href}
                  >
                    <span className="material-symbols-outlined text-sm">{link.icon}</span> {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="mt-32 p-12 bg-[#131b2e] border border-[#494456]/15 rounded-sm relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easings.easeOutExpo }}
      >
        <div className="absolute -right-16 -bottom-16 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
        </div>
        <div className="relative z-10 max-w-xl">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-[#dae2fd] mb-4 tracking-tight">System Inquiry?</h2>
          <p className="text-[#b9c7df] mb-8">Looking for an engineer to architect your next deployment framework or backend system? Let's connect and build something robust.</p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", ...springs.snappy }}>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-[#cfbdff] to-[#6200ee] text-[#3a0093] px-8 py-3 font-[family-name:var(--font-jetbrains-mono)] font-bold text-sm tracking-widest uppercase rounded-lg hover:shadow-[0_0_20px_rgba(207,189,255,0.3)] transition-all">
              ESTABLISH CONTACT
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
