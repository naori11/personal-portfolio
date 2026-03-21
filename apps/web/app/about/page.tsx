"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, springs, easings } from "../../lib/motion";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero / Narrative Bio Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easings.easeOutExpo }}
        >
          <motion.div
            className="font-[family-name:var(--font-jetbrains-mono)] text-[#6bd8cb] text-sm tracking-widest mb-4 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            System.Architect // Biography
          </motion.div>
          <motion.h1
            className="font-[family-name:var(--font-space-grotesk)] text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easings.easeOutExpo }}
          >
            CRAFTING THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cfbdff] to-[#6200ee]">INVISIBLE ENGINE.</span>
          </motion.h1>
          <motion.div
            className="space-y-6 text-[#b9c7df] text-lg leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easings.easeOutExpo }}
          >
            <p>
              I am a Senior Infrastructure Engineer specializing in the intersection of high-availability systems and developer experience. My philosophy is simple: <span className="text-[#dae2fd] font-semibold">infrastructure should be as expressive as code.</span>
            </p>
            <p>
              With a decade spent navigating the complexities of distributed systems, I focus on building resilient, self-healing platforms that allow teams to move fast without breaking things. I believe in declarative configurations, immutable deployments, and the radical transparency of observability.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-4 hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easings.easeOutExpo }}
        >
          <div className="bg-[#131b2e] p-1 rounded-lg">
            <div className="aspect-square bg-[#171f33] rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#cfbdff]/10 to-transparent"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR2ml7SZJD_n_CfJn6JraLfsjA6t_cKaJhFZCOXaVBA7572waHekX7XCP48xyw29fgUu8I7MotPAIXgjbPSlKieS2JN_4ghD3PKsmy4Ns3OThx2esS-1g0xwQH8svtpfht4Mc1uj-lOiFsHAYXxsUY6bmOHxmr_oNYSkDqq5Do10b4iAftGPioev0E9j3xmiIuzxNAViLicc8SOlFFKBJWHZJWo7EOKOHmFu1GgnUSZg4p26nf8IPLmCwNHajzGPTcISt0TvhB0SU"
                alt="Technical schematic overlay on abstract server hardware"
                fill
                className="object-cover mix-blend-overlay opacity-50"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#494456]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#494456]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#494456]/30"></div>
                </div>
                <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#6bd8cb]/80 leading-tight">
                  STATUS: DEPLOYED<br/>
                  REGION: GLOBAL_EDGE<br/>
                  UPTIME: 99.999%
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Section: Skills & Experience */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Experience Timeline (Large Bento) */}
        <motion.section
          className="md:col-span-8 bg-[#131b2e] rounded-lg p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easings.easeOutExpo }}
        >
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight">EXPERIENCE_LOG</h2>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#494456]">RUNNING_THREADS: 04</span>
          </div>

          <div className="space-y-12 relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#494456]/20"></div>

            {/* Entry 1 */}
            <motion.div
              className="relative pl-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.div
                className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#cfbdff] border-4 border-[#0b1326]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold text-[#dae2fd]">Lead DevOps Architect</h3>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#6bd8cb] text-sm">2021 — PRESENT</span>
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df]/60 mb-4 tracking-wider">STRATOS SYSTEMS INC.</div>
              <p className="text-[#b9c7df] text-sm leading-relaxed max-w-xl">
                Architecting a multi-cloud Kubernetes environment serving 5M+ active users. Implementing GitOps workflows with ArgoCD and reducing deployment lead time by 65%.
              </p>
            </motion.div>

            {/* Entry 2 */}
            <motion.div
              className="relative pl-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#2d3449] border-4 border-[#0b1326]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              />
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold text-[#dae2fd]">Cloud Infrastructure Engineer</h3>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#6bd8cb] text-sm">2018 — 2021</span>
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df]/60 mb-4 tracking-wider">NEXUS DATA LABS</div>
              <p className="text-[#b9c7df] text-sm leading-relaxed max-w-xl">
                Led the migration from monolithic on-prem servers to AWS. Established Infrastructure as Code (Terraform) as the standard for all core services.
              </p>
            </motion.div>

            {/* Entry 3 */}
            <motion.div
              className="relative pl-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#2d3449] border-4 border-[#0b1326]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              />
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold text-[#dae2fd]">Junior Site Reliability Intern</h3>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#6bd8cb] text-sm">2017 — 2018</span>
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df]/60 mb-4 tracking-wider">KERNEL CORE TECHNOLOGIES</div>
              <p className="text-[#b9c7df] text-sm leading-relaxed max-w-xl">
                Supported monitoring stack (Prometheus/Grafana) and automated routine maintenance tasks using Python and Bash scripts.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Technical Skills Cloud */}
        <motion.section
          className="md:col-span-4 space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easings.easeOutExpo }}
        >
          <div className="bg-[#171f33] p-6 rounded-lg">
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#948da2] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#6bd8cb] rounded-full"></span>
              CORE_COMPETENCIES
            </div>
            <div className="space-y-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#b9c7df]/50 mb-4">Languages</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2d3449] text-[#cfbdff] text-xs font-[family-name:var(--font-jetbrains-mono)] rounded-sm">Python</span>
                  <span className="px-3 py-1 bg-[#2d3449] text-[#cfbdff] text-xs font-[family-name:var(--font-jetbrains-mono)] rounded-sm">Go</span>
                  <span className="px-3 py-1 bg-[#2d3449] text-[#cfbdff] text-xs font-[family-name:var(--font-jetbrains-mono)] rounded-sm">Rust</span>
                  <span className="px-3 py-1 bg-[#2d3449] text-[#cfbdff] text-xs font-[family-name:var(--font-jetbrains-mono)] rounded-sm">Bash</span>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#b9c7df]/50 mb-4">Infrastructure</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2d3449] text-[#6bd8cb] text-xs font-[family-name:var(--font-jetbrains-mono)] rounded-sm">Kubernetes</span>
                  <span className="px-3 py-1 bg-[#2d3449] text-[#6bd8cb] text-xs font-[family-name:var(--font-jetbrains-mono)] rounded-sm">Terraform</span>
                  <span className="px-3 py-1 bg-[#2d3449] text-[#6bd8cb] text-xs font-[family-name:var(--font-jetbrains-mono)] rounded-sm">Docker</span>
                  <span className="px-3 py-1 bg-[#2d3449] text-[#6bd8cb] text-xs font-[family-name:var(--font-jetbrains-mono)] rounded-sm">Ansible</span>
                  <span className="px-3 py-1 bg-[#2d3449] text-[#6bd8cb] text-xs font-[family-name:var(--font-jetbrains-mono)] rounded-sm">AWS</span>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#b9c7df]/50 mb-4">Observability</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2d3449] text-[#cbc3d9] text-xs font-[family-name:var(--font-jetbrains-mono)] rounded-sm">Prometheus</span>
                  <span className="px-3 py-1 bg-[#2d3449] text-[#cbc3d9] text-xs font-[family-name:var(--font-jetbrains-mono)] rounded-sm">Grafana</span>
                  <span className="px-3 py-1 bg-[#2d3449] text-[#cbc3d9] text-xs font-[family-name:var(--font-jetbrains-mono)] rounded-sm">ELK Stack</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-[#222a3d] p-6 rounded-lg border border-[#494456]/10">
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold mb-6">CERTIFICATIONS_AUTH</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#2d3449] rounded-sm flex items-center justify-center text-[#cfbdff] transition-colors group-hover:bg-[#cfbdff] group-hover:text-[#3a0093]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">AWS Certified Solutions Architect</div>
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#6bd8cb]">PRO_LEVEL</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#2d3449] rounded-sm flex items-center justify-center text-[#cfbdff] transition-colors group-hover:bg-[#cfbdff] group-hover:text-[#3a0093]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">CKA: Certified Kubernetes Administrator</div>
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#6bd8cb]">LINUX_FOUNDATION</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#2d3449] rounded-sm flex items-center justify-center text-[#cfbdff] transition-colors group-hover:bg-[#cfbdff] group-hover:text-[#3a0093]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">HashiCorp Certified: Terraform Associate</div>
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#6bd8cb]">IAC_SPECIALIST</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Education & Extras */}
      <motion.section
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easings.easeOutExpo }}
      >
        <div className="bg-[#060e20] p-8 rounded-lg flex flex-col md:flex-row gap-8 items-start">
          <div className="text-[#d0beff]">
            <span className="material-symbols-outlined text-4xl">school</span>
          </div>
          <div>
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#494456] mb-2">ACADEMIC_HISTORY</div>
            <h3 className="text-xl font-bold mb-1">B.S. in Computer Science</h3>
            <p className="text-[#b9c7df] text-sm mb-4">University of Technology, Distributed Systems Focus</p>
            <div className="flex gap-4">
              <div className="text-[10px] font-[family-name:var(--font-jetbrains-mono)] bg-[#171f33] px-2 py-1">GPA: 3.9/4.0</div>
              <div className="text-[10px] font-[family-name:var(--font-jetbrains-mono)] bg-[#171f33] px-2 py-1">DEAN_LIST</div>
            </div>
          </div>
        </div>

        <div className="bg-[#060e20] p-8 rounded-lg border-l-4 border-[#6bd8cb]">
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#6bd8cb] mb-2">SYSTEM_PHILOSOPHY</div>
          <p className="italic text-[#b9c7df] text-sm leading-relaxed">
            "The most reliable system is the one that has the fewest moving parts, yet is expressive enough to describe any complexity. Elegance in infrastructure is found in the subtraction of noise."
          </p>
        </div>
      </motion.section>
    </main>
  );
}
