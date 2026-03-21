"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, springs, easings } from "../lib/motion";

// Dynamically import PDF viewer to avoid SSR issues
const PDFViewer = dynamic(() => import("./components/PDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#cfbdff] border-t-transparent rounded-full animate-spin" />
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#b9c7df]">Loading PDF viewer...</p>
      </div>
    </div>
  ),
});

export default function HomePage() {
  const [terminalStep, setTerminalStep] = useState(0);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, terminalStep === 0 ? 1500 : terminalStep === 1 ? 1200 : terminalStep === 2 ? 800 : terminalStep === 3 ? 1000 : 8000);

    return () => clearTimeout(timer);
  }, [terminalStep]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isResumeModalOpen) {
        setIsResumeModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isResumeModalOpen]);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[870px] flex items-center px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #494456 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 space-y-8">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#2d3449] border border-[#494456]/20 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: easings.easeOutExpo }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-[#6bd8cb]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest text-[#6bd8cb]">SYSTEM STATUS: OPERATIONAL</span>
            </motion.div>

            <motion.h1
              className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-[#dae2fd]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easings.easeOutExpo }}
            >
              Building <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#cfbdff] to-[#6200ee]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                Cloud Infrastructure
              </motion.span> <br/>& Backend Systems
            </motion.h1>

            <motion.p
              className="max-w-xl text-base sm:text-lg text-[#b9c7df] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: easings.easeOutExpo }}
            >
              I build cloud infrastructure, automate deployments, and develop backend systems. Currently doing backend development at GenWATT Energy Solutions while building DevOps skills through CI/CD pipelines and infrastructure automation.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: easings.easeOutExpo }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", ...springs.snappy }}>
                <Link href="/projects" className="block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#cfbdff] to-[#6200ee] text-[#3a0093] font-bold rounded-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                  Explore Operations
                </Link>
              </motion.div>
              <motion.button
                onClick={() => setIsResumeModalOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-[#2d3449] text-[#cfbdff] font-bold rounded-lg border border-[#494456]/10 hover:bg-[#3a4259] transition-all"
                whileHover={{ scale: 1.02, backgroundColor: "#3a4259" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", ...springs.snappy }}
              >
                System Manifesto
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="md:col-span-4 hidden md:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easings.easeOutExpo }}
          >
            <div className="bg-[#131b2e] rounded-xl border border-[#494456]/15 p-1">
              <div className="bg-[#222a3d] rounded-lg p-4 font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#b9c7df] space-y-2">
                <div className="flex gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-[#494456]/30"></span>
                  <span className="w-3 h-3 rounded-full bg-[#494456]/30"></span>
                  <span className="w-3 h-3 rounded-full bg-[#494456]/30"></span>
                </div>
                <div className="text-[#6bd8cb]">λ main: ~/projects/portfolio</div>
                <div className="text-[#dae2fd]">
                  $ terraform plan
                  {terminalStep === 0 && (
                    <motion.span
                      className="inline-block w-2 h-4 bg-[#6bd8cb] ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </div>
                {terminalStep >= 2 && (
                  <motion.div
                    className="opacity-50"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 0.5, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    # Refreshing state...
                  </motion.div>
                )}
                {terminalStep >= 3 && (
                  <motion.div
                    className="text-[#d0beff]"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Plan: 12 to add, 0 to change, 0 to destroy.
                  </motion.div>
                )}
                {terminalStep >= 4 && (
                  <motion.div
                    className="pt-4 flex items-center gap-2"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="material-symbols-outlined text-[#6bd8cb] text-lg">check_circle</span>
                    <span className="text-xs">Infrastructure synced successfully.</span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Focus / Skills */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 bg-[#131b2e]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold mb-4">Core Competencies</h2>
            <motion.div
              className="w-24 h-1 bg-[#cfbdff]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Skill 1 */}
            <motion.div
              className="p-8 bg-[#171f33] rounded-lg border-b-2 border-transparent group"
              variants={fadeInUp}
              whileHover={{ y: -4, borderBottomColor: "#6bd8cb", boxShadow: "0 8px 24px rgba(107, 216, 203, 0.15)" }}
              transition={{ duration: 0.3, ease: easings.easeOutExpo }}
            >
              <motion.div
                className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-[#6bd8cb]/10 text-[#6bd8cb] rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.4 }}
              >
                <span className="material-symbols-outlined">settings_input_component</span>
              </motion.div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold mb-4 text-[#dae2fd]">Cloud & DevOps</h3>
              <p className="text-[#b9c7df] leading-relaxed mb-6">Provisioning scalable environments using Azure Bicep and automating delivery with GitHub Actions.</p>
              <div className="flex flex-wrap gap-2">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#2d3449] rounded text-[#6bd8cb] uppercase">Azure</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#2d3449] rounded text-[#6bd8cb] uppercase">CI/CD</span>
              </div>
            </motion.div>

            {/* Skill 2 */}
            <motion.div
              className="p-8 bg-[#171f33] rounded-lg border-b-2 border-transparent group"
              variants={fadeInUp}
              whileHover={{ y: -4, borderBottomColor: "#cfbdff", boxShadow: "0 8px 24px rgba(207, 189, 255, 0.15)" }}
              transition={{ duration: 0.3, ease: easings.easeOutExpo }}
            >
              <motion.div
                className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-[#cfbdff]/10 text-[#cfbdff] rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.4 }}
              >
                <span className="material-symbols-outlined">account_tree</span>
              </motion.div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold mb-4 text-[#dae2fd]">Backend Systems</h3>
              <p className="text-[#b9c7df] leading-relaxed mb-6">Developing high-performance APIs and real-time telemetry services using Node.js, Python, and FastAPI.</p>
              <div className="flex flex-wrap gap-2">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#2d3449] rounded text-[#cfbdff] uppercase">FastAPI</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#2d3449] rounded text-[#cfbdff] uppercase">Firebase</span>
              </div>
            </motion.div>

            {/* Skill 3 */}
            <motion.div
              className="p-8 bg-[#171f33] rounded-lg border-b-2 border-transparent group"
              variants={fadeInUp}
              whileHover={{ y: -4, borderBottomColor: "#b9c7df", boxShadow: "0 8px 24px rgba(185, 199, 223, 0.15)" }}
              transition={{ duration: 0.3, ease: easings.easeOutExpo }}
            >
              <motion.div
                className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-[#b9c7df]/10 text-[#b9c7df] rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.4 }}
              >
                <span className="material-symbols-outlined">api</span>
              </motion.div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold mb-4 text-[#dae2fd]">Cyber-Physical Systems</h3>
              <p className="text-[#b9c7df] leading-relaxed mb-6">Integrating hardware controllers like ESP32 with cloud backends for real-time monitoring and automation.</p>
              <div className="flex flex-wrap gap-2">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#2d3449] rounded text-[#b9c7df] uppercase">ESP32</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#2d3449] rounded text-[#b9c7df] uppercase">IoT</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects (Asymmetric Layout) */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <motion.div
          className="flex justify-between items-end mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-4xl font-black mb-2 tracking-tight">Featured Operations</h2>
            <p className="text-[#b9c7df] font-[family-name:var(--font-jetbrains-mono)] text-sm uppercase tracking-widest">Selected Works & Case Studies</p>
          </div>
          <Link href="/projects" className="hidden md:block font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#6bd8cb] hover:underline">
            View All Projects -&gt;
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Project 1 (Large) */}
          <motion.div
            className="md:col-span-7 group"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative aspect-video bg-[#171f33] overflow-hidden rounded-xl border border-[#494456]/10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0dGKOCGWzRuX1zPu6q5yu7meOhNnh-hh8aQXoF3YMdTsjywSZ9EKGqu8b3XWefVEJkdXvj0XSiUi09vb_AkJyKeXymrwgSBeTyrUc3U9iWd9NzQbGa-cqbAL9lAZZMcE0_yMpzk29D55DG5YLJ_NwqYGBlBEJefXs_4-Whwi_JoPut1icG_g1rWnKzMYduaqw-GSkNsoIvZ6RzxDGUZjGNkmxTfC0L1vAAB3CXqVk3z_Mpz3C5JPF01S_kwX-kLAHHQtdyk8qpN8"
                alt="Dark server room with glowing blue and purple lights"
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] to-transparent opacity-80"></div>
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-[#dae2fd] mb-2">Cloud Sentinel</h3>
                <p className="text-[#b9c7df] mb-4">Multi-region observability platform for real-time monitoring.</p>
                <span className="px-4 py-1.5 bg-[#cfbdff]/20 text-[#cfbdff] rounded-full text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase">AWS • Terraform • Grafana</span>
              </div>
            </div>
          </motion.div>

          {/* Project 2 (Narrow) */}
          <motion.div
            className="md:col-span-5 flex flex-col justify-center gap-10"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="group">
              <div className="relative aspect-square bg-[#222a3d] rounded-xl border border-[#494456]/10 overflow-hidden mb-6">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALQELTLj6BzZEeFxG9nEAAPtnGMyD1suFVumFd1UuzZqCdjWV-LoLzQD5IZYikZv9zj7aErEQOsXiurqBvBIj8VwGxpmJkQlX61YaMLcCVf9DUGhlayG-2ICRZdRYxxSSvI4WVc-YIvthh4MYYkBCQrK70v60vtgXMaaT6Cr5-I4eKRMo7PCYTN9rnwJFb2onKvg_ASn9hvMiRgDrRvX5cl_fGZrDyy_eZM5SDYVAYGMuZdbSKKT7P_iDuv_qrtHP0tqzInY5xhfA"
                  alt="Close up of code on a high resolution screen"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold mb-2">Nexus Engine</h3>
              <p className="text-[#b9c7df] text-sm">Automated microservices provisioning system.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial/Callout */}
      <section className="py-12 sm:py-24 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            className="material-symbols-outlined text-6xl text-[#cfbdff]/30 mb-8"
            style={{ fontVariationSettings: "'FILL' 1" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            format_quote
          </motion.span>
          <motion.h2
            className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl md:text-4xl italic font-light leading-relaxed text-[#dae2fd] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            "His architectural decisions during our migration saved us nearly 40% in monthly compute costs while simultaneously increasing our uptime to four nines."
          </motion.h2>
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-left">
              <div className="font-bold text-[#dae2fd]">Alex Rivera</div>
              <div className="text-sm font-[family-name:var(--font-jetbrains-mono)] text-[#6bd8cb] uppercase tracking-widest">CTO @ TechFlow Systems</div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#cfbdff]/5 blur-[120px] rounded-full"></div>
      </section>

      {/* Contact/Final CTA */}
      <section className="py-16 sm:py-32 px-4 sm:px-8 bg-[#131b2e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: easings.easeOutExpo }}
          >
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-5xl font-black mb-6 tracking-tighter">Let's build something.</h2>
            <p className="text-lg sm:text-xl text-[#b9c7df] mb-8">Open to internships, freelance projects, and full-time opportunities.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#b9c7df]">
                <span className="material-symbols-outlined text-[#cfbdff]">mail</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)]">juvanpaulo1.com</span>
              </div>
              <div className="flex items-center gap-4 text-[#b9c7df]">
                <span className="material-symbols-outlined text-[#cfbdff]">location_on</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)]">Caloocan City, PH // Remote</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#171f33] p-4 sm:p-8 rounded-xl border border-[#494456]/15"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easings.easeOutExpo }}
          >
            <form className="space-y-6">
              <div>
                <label className="block font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest text-[#b9c7df] mb-2">Identification</label>
                <input className="w-full bg-transparent border-0 border-b border-[#494456] focus:border-[#cfbdff] focus:ring-0 text-[#dae2fd] placeholder:text-[#948da2] py-3 transition-all" placeholder="Your Name" type="text"/>
              </div>
              <div>
                <label className="block font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest text-[#b9c7df] mb-2">Source Address</label>
                <input className="w-full bg-transparent border-0 border-b border-[#494456] focus:border-[#cfbdff] focus:ring-0 text-[#dae2fd] placeholder:text-[#948da2] py-3 transition-all" placeholder="Email Address" type="email"/>
              </div>
              <div>
                <label className="block font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest text-[#b9c7df] mb-2">Request Payload</label>
                <textarea className="w-full bg-transparent border-0 border-b border-[#494456] focus:border-[#cfbdff] focus:ring-0 text-[#dae2fd] placeholder:text-[#948da2] py-3 transition-all resize-none" placeholder="Tell me about your infrastructure goals..." rows={4}></textarea>
              </div>
              <motion.button
                className="w-full py-4 bg-[#cfbdff] text-[#3a0093] font-bold rounded-lg hover:brightness-110 transition-all"
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", ...springs.snappy }}
              >
                Dispatch Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Resume PDF Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 lg:p-16 bg-[#0b1326]/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsResumeModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl h-[90vh] flex flex-col"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: easings.easeOutExpo }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-3">
                  {/* Terminal Dots */}
                  <div className="hidden sm:flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#494456]/40"></div>
                    <div className="w-3 h-3 rounded-full bg-[#494456]/40"></div>
                    <div className="w-3 h-3 rounded-full bg-[#494456]/40"></div>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl md:text-2xl font-bold text-[#dae2fd]">
                      System Manifesto
                    </h3>
                    <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs text-[#6bd8cb] uppercase tracking-wider">
                      RESUME_VIEWER
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Download Button */}
                  <motion.a
                    href="/assets/resume.pdf"
                    download="Juvan_Paulo_Resume.pdf"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#cfbdff] hover:bg-[#d0beff] text-[#3a0093] rounded-lg font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-wider font-bold transition-all group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="material-symbols-outlined text-lg">download</span>
                    <span className="hidden sm:inline">Download</span>
                  </motion.a>

                  {/* Close Button */}
                  <motion.button
                    onClick={() => setIsResumeModalOpen(false)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#2d3449] hover:bg-[#3a4259] border border-[#494456]/20 rounded-lg text-[#b9c7df] hover:text-[#cfbdff] transition-all group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="hidden sm:inline font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-wider">ESC</span>
                    <span className="material-symbols-outlined text-xl">close</span>
                  </motion.button>
                </div>
              </div>

              {/* PDF Viewer Container */}
              <div className="relative flex-1 bg-[#131b2e] rounded-lg border border-[#494456]/20 overflow-y-auto overflow-x-hidden">
                <PDFViewer fileUrl="/assets/resume.pdf" />
              </div>

              {/* Keyboard Hint */}
              <div className="hidden md:flex absolute bottom-4 left-4 gap-2">
                <div className="bg-[#131b2e]/80 backdrop-blur-sm border border-[#494456]/30 px-2 py-1 rounded">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#6bd8cb] uppercase">ESC</span>
                </div>
                <div className="bg-[#131b2e]/80 backdrop-blur-sm border border-[#494456]/30 px-2 py-1 rounded">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#b9c7df]">Close</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
