"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeInUp, staggerContainer, springs, easings } from "../../lib/motion";
import { getTechBadgeStyle } from "../../lib/tech-badges";
import { useTheme } from "../../components/ThemeProvider";

interface ScreenshotObject {
  src: string;
  description?: string;
}

type Screenshot = string | ScreenshotObject;

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string | null;
  screenshots: Screenshot[];
  offset?: string;
  inProgress?: boolean;
  statusBadge?: {
    text: string;
    color: "emerald" | "amber" | "cyan";
  };
}

function getScreenshotSrc(item: Screenshot | undefined): string {
  if (!item) return "";
  return typeof item === "string" ? item : item.src;
}

function getScreenshotDescription(
  item: Screenshot | undefined,
): string | undefined {
  if (!item) return undefined;
  return typeof item === "string" ? undefined : item.description;
}

const projects: Project[] = [
  {
    title: "JUVAN.TECH",
    statusBadge: {
      text: "LIVE // ACTIVE DEV",
      color: "emerald",
    },
    description:
      "A Next.js monorepo featuring automated CI/CD. This project serves as a live demo of Infrastructure as Code using Azure Bicep and GitHub Actions.",
    tech: [
      "NEXT.JS",
      "TURBOREPO",
      "AZURE",
      "GITHUB ACTIONS",
      "TAILWIND CSS",
    ],
    github: "https://github.com/naori11/personal-portfolio",
    demo: "https://www.juvan.tech",
    screenshots: [
      {
        src: "/assets/projects/juvan.tech/homepage.png",
        description: "Homepage - Terminal-inspired UI",
      },
      {
        src: "/assets/projects/juvan.tech/projects.png",
        description: "Projects Page - Portfolio Overview",
      },
      {
        src: "/assets/projects/juvan.tech/about.png",
        description: "About Section - Professional Experience & Skills",
      },
      {
        src: "/assets/projects/juvan.tech/contact.png",
        description: "Contact Form - Interactive Inquiry System",
      },
    ],
  },
  {
    title: "MaaS (Math-as-a-Service)",
    statusBadge: {
      text: "PERSONAL SANDBOX",
      color: "cyan",
    },
    description:
      "A microservices-based platform built primarily as a sandbox for self-studying DevOps tools and practices. While not intended for commercial deployment, it will be hosted on a dedicated server to demonstrate cloud infrastructure and CI/CD workflows.",
    tech: [
      "NEXT.JS",
      "TAILWIND CSS",
      "FASTAPI",
      "POSTGRESQL",
      "DOCKER",
      "TERRAFORM",
      "AZURE",
      "KUBERNETES",
      "PROMETHEUS",
      "GRAFANA",
    ],
    github: "#",
    demo: null,
    screenshots: [
      {
        src: "/assets/projects/maas/login.png",
        description: "Initiate Session - Enterprise Authentication",
      },
      {
        src: "/assets/projects/maas/signup.png",
        description: "Provision Account - User Registration",
      },
      {
        src: "/assets/projects/maas/calculator.png",
        description: "Calculator View - High-Precision Arithmetic",
      },
      {
        src: "/assets/projects/maas/history.png",
        description: "Calculation History - Enterprise Logs",
      },
      {
        src: "/assets/projects/maas/billing.png",
        description: "Subscription Management - Tiered Billing",
      },
    ],
  },
  {
    title: "KidSync: Smart RFID Security",
    description:
      "A hardware-software hybrid for secure student verification. Uses ESP32 microcontrollers and RC522 scanners synced with a Flutter/Supabase backend.",
    tech: ["FLUTTER", "SUPABASE", "PYTHON", "ESP32"],
    github: "https://github.com/naori11/KidSync",
    demo: "https://ksync.netlify.app/",
    screenshots: [
      {
        src: "/assets/projects/kidsync/admin-overview.png",
        description: "Admin Dashboard - System Overview",
      },
      {
        src: "/assets/projects/kidsync/admin-parents-list.png",
        description: "Admin Dashboard - Parents & Guardians Management",
      },
      {
        src: "/assets/projects/kidsync/guard-verification.png",
        description: "Guard Dashboard - Manual Override & Verification",
      },
      {
        src: "/assets/projects/kidsync/guard-recent-activity.png",
        description: "Guard Dashboard - Recent Activity Logs",
      },
      {
        src: "/assets/projects/kidsync/parent-schedule.png",
        description: "Parent App - Pick-up & Drop-off Schedule",
      },
      {
        src: "/assets/projects/kidsync/parent-home.png",
        description: "Parent App - Real-time Status",
      },
      {
        src: "/assets/projects/kidsync/driver-students.png",
        description: "Driver App - Assigned Students List",
      },
      {
        src: "/assets/projects/kidsync/driver-schedule.png",
        description: "Driver App - Daily Route Schedule",
      },
      {
        src: "/assets/projects/kidsync/teacher-attendance.png",
        description: "Teacher Dashboard - Class Attendance",
      },
      {
        src: "/assets/projects/kidsync/teacher-schedule.png",
        description: "Teacher Dashboard - Class Schedule",
      },
    ],
    offset: "lg:mt-12",
  },
  {
    title: "Coffeetory POS",
    description:
      "An inventory management system built with PHP and MySQL. Streamlines product tracking and sales operations for small-scale retail.",
    tech: ["PHP", "MYSQL", "JAVASCRIPT"],
    github: "https://github.com/naori11/Coffeetory",
    demo: null,
    screenshots: [
      {
        src: "/assets/projects/coffeetory/login.png",
        description: "Authentication - Role-Based Portal Access",
      },
      {
        src: "/assets/projects/coffeetory/cashier-pos-menu.png",
        description: "Cashier POS - Real-Time Ordering & Menu Management",
      },
      {
        src: "/assets/projects/coffeetory/cashier-online-payment-modal.png",
        description: "Cashier POS - E-Wallet & Digital Payment Gateway (GCash / Maya)",
      },
      {
        src: "/assets/projects/coffeetory/cashier-discount-modal.png",
        description: "Cashier POS - Senior, PWD & Custom Discount Calculator",
      },
      {
        src: "/assets/projects/coffeetory/cashier-receipt-preview.png",
        description: "Cashier POS - Transaction Summary & Instant Receipt Modal",
      },
      {
        src: "/assets/projects/coffeetory/cashier-printable-receipt.png",
        description: "Cashier POS - Auto-Generated Printable Thermal Receipt (PDF)",
      },
      {
        src: "/assets/projects/coffeetory/inventory-stock-levels.png",
        description: "Inventory Clerk - Real-Time Stock Levels & Reorder Thresholds",
      },
      {
        src: "/assets/projects/coffeetory/inventory-movements-tracking.png",
        description: "Inventory Clerk - Automated Stock Deduction & Movement History",
      },
      {
        src: "/assets/projects/coffeetory/inventory-expiration-tracking.png",
        description: "Inventory Clerk - Batch Expiration Alert & Monitoring Matrix",
      },
      {
        src: "/assets/projects/coffeetory/inventory-supplier-management.png",
        description: "Inventory Clerk - Supplier Directory & Contact Records",
      },
      {
        src: "/assets/projects/coffeetory/admin-dashboard-overview.png",
        description: "Admin Panel - Executive Sales, Alerts & Best Sellers Dashboard",
      },
      {
        src: "/assets/projects/coffeetory/admin-user-accounts.png",
        description: "Admin Panel - Role & Account Access Control Management",
      },
      {
        src: "/assets/projects/coffeetory/admin-product-management.png",
        description: "Admin Panel - Product Catalog & COGS Pricing Control",
      },
      {
        src: "/assets/projects/coffeetory/admin-transaction-history.png",
        description: "Admin Panel - Multi-Period Sales & Transaction Analytics",
      },
      {
        src: "/assets/projects/coffeetory/admin-system-audit-logs.png",
        description: "Admin Panel - User Action Security Audit & System Logs",
      },
    ],
  },
  {
    inProgress: true,
    title: "AI Code Reviewer",
    description:
      "CLI - based assistant utilizing Google Gemini API and FastAPI to provide real-time pull request feedback. Features Dockerized deployment and GitHub Webhook integration.",
    tech: ["FASTAPI", "GEMINI API", "PYTHON", "GITHUB API", "DOCKER"],
    github: "https://github.com/naori11/code-reviewer",
    demo: null,
    screenshots: [
      "https://via.placeholder.com/1200x800/131b2e/cfbdff?text=AI+Reviewer+Screenshot+1",
      "https://via.placeholder.com/1200x800/131b2e/6bd8cb?text=AI+Reviewer+Screenshot+2",
    ],
  },
];

export default function ProjectsPage() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const selectedProjectData =
    selectedProject !== null ? projects[selectedProject] : null;

  const openGallery = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setSelectedImage(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setSelectedImage(0);
  };

  const nextImage = () => {
    if (selectedProjectData?.screenshots) {
      setSelectedImage(
        (prev) => (prev + 1) % selectedProjectData.screenshots.length,
      );
    }
  };

  const prevImage = () => {
    if (selectedProjectData?.screenshots) {
      setSelectedImage(
        (prev) =>
          (prev - 1 + selectedProjectData.screenshots.length) %
          selectedProjectData.screenshots.length,
      );
    }
  };

  return (
    <main className="pt-24 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-8 max-w-7xl mx-auto">
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
            className="w-3 h-3 bg-[var(--tertiary)] rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[var(--tertiary)] text-xs uppercase tracking-[0.2em]">
            Project Portfolio
          </span>
        </motion.div>
        <motion.h1
          className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-5xl md:text-7xl font-bold text-[var(--foreground)] tracking-tighter mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easings.easeOutExpo }}
        >
          Things I&apos;ve{" "}
          <span className="text-[var(--primary)] italic">Built.</span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: easings.easeOutExpo }}
        >
          From hardware-integrated IoT systems to automated deployment
          pipelines. Real projects solving real problems.
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
            className={`group relative bg-[var(--surface-container-low)] p-1 rounded-lg ${project.offset || ""}`}
            variants={fadeInUp}
            whileHover={{ y: -8, boxShadow: "0 0 30px var(--primary-shadow)" }}
            transition={{ duration: 0.3, ease: easings.easeOutExpo }}
          >
            <div className="bg-[var(--surface-container)] rounded-sm overflow-hidden flex flex-col h-full border border-[var(--outline-variant)]/15 group-hover:border-[var(--primary)]/40 transition-colors">
              <div className="p-6">
                {/* Terminal Header Decoration */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[var(--outline-variant)]/30"></div>
                    <div className="w-2 h-2 rounded-full bg-[var(--outline-variant)]/30"></div>
                    <div className="w-2 h-2 rounded-full bg-[var(--outline-variant)]/30"></div>
                  </div>
                  {project.statusBadge ? (
                    <span
                      className={`flex items-center font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider ${
                        project.statusBadge.color === "emerald"
                          ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/25"
                          : project.statusBadge.color === "cyan"
                            ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/25"
                            : "text-[#ffad33] bg-[#ffad33]/10 border border-[#ffad33]/20"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse ${
                          project.statusBadge.color === "emerald"
                            ? "bg-emerald-400"
                            : project.statusBadge.color === "cyan"
                              ? "bg-cyan-400"
                              : "bg-[#ffad33]"
                        }`}
                      ></span>
                      {project.statusBadge.text}
                    </span>
                  ) : project.inProgress ? (
                    <span className="flex items-center font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#ffad33] bg-[#ffad33]/10 border border-[#ffad33]/20 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffad33] mr-1.5 animate-pulse"></span>
                      In Progress
                    </span>
                  ) : null}
                </div>

                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => {
                    const style = getTechBadgeStyle(tech.toUpperCase(), theme);
                    return (
                      <span
                        key={tech}
                        className={`inline-flex items-center gap-1.5 font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 rounded-sm border ${style.bg} ${style.text} ${style.border}`}
                      >
                        {style.slug && (
                          <span
                            className="w-3 h-3 flex-shrink-0"
                            style={{
                              backgroundColor: "currentColor",
                              WebkitMaskImage: `url(${style.slug.startsWith("http") ? style.slug : `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${style.slug}.svg`})`,
                              maskImage: `url(${style.slug.startsWith("http") ? style.slug : `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${style.slug}.svg`})`,
                              WebkitMaskRepeat: "no-repeat",
                              maskRepeat: "no-repeat",
                              WebkitMaskPosition: "center",
                              maskPosition: "center",
                              WebkitMaskSize: "contain",
                              maskSize: "contain",
                            }}
                          />
                        )}
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <p className="text-[var(--secondary)] text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto p-6 bg-[var(--surface-container-high)]/30 border-t border-[var(--outline-variant)]/10 flex flex-wrap gap-3 items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[var(--tertiary)] hover:underline flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">
                    code
                  </span>{" "}
                  GITHUB
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[var(--primary)] hover:underline flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>{" "}
                    LIVE DEMO
                  </a>
                )}
                {project.screenshots && project.screenshots.length > 0 && (
                  <button
                    onClick={() => openGallery(index)}
                    className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[var(--secondary)] hover:text-[var(--primary)] hover:underline flex items-center gap-1 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">
                      photo_library
                    </span>{" "}
                    SCREENSHOTS
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="mt-16 sm:mt-32 p-6 sm:p-12 bg-[var(--surface-container-low)] border border-[var(--outline-variant)]/15 rounded-sm relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easings.easeOutExpo }}
      >
        <div className="absolute -right-16 -bottom-16 opacity-5 pointer-events-none">
          <span
            className="material-symbols-outlined text-[300px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            terminal
          </span>
        </div>
        <div className="relative z-10 max-w-xl">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-4xl font-bold text-[var(--foreground)] mb-4 tracking-tight">
            Want to work together?
          </h2>
          <p className="text-[var(--secondary)] mb-8">
            I&apos;m always interested in projects involving cloud
            infrastructure, backend development, or IoT systems. Let&apos;s
            talk.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", ...springs.snappy }}
          >
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--primary-container)] text-[var(--on-primary)] px-6 sm:px-8 py-2.5 sm:py-3 font-[family-name:var(--font-jetbrains-mono)] font-bold text-xs sm:text-sm tracking-widest uppercase rounded-lg hover:shadow-[0_0_20px_var(--primary-shadow-strong)] transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Screenshot Gallery Modal */}
      <AnimatePresence>
        {selectedProjectData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 lg:p-16 bg-[var(--background)]/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeGallery}
          >
            <motion.div
              className="relative w-full max-w-5xl"
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
                    <div className="w-3 h-3 rounded-full bg-[var(--outline-variant)]/40"></div>
                    <div className="w-3 h-3 rounded-full bg-[var(--outline-variant)]/40"></div>
                    <div className="w-3 h-3 rounded-full bg-[var(--outline-variant)]/40"></div>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl md:text-2xl font-bold text-[var(--foreground)]">
                      {selectedProjectData.title}
                    </h3>
                    <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs text-[var(--tertiary)] uppercase tracking-wider">
                      Screenshots
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={closeGallery}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--surface-container-highest)] hover:bg-[var(--surface-hover)] border border-[var(--outline-variant)]/20 rounded-lg text-[var(--secondary)] hover:text-[var(--primary)] transition-all group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="hidden sm:inline font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-wider">
                    ESC
                  </span>
                  <span className="material-symbols-outlined text-xl">
                    close
                  </span>
                </motion.button>
              </div>

              {/* Main Image Container */}
              <div className="relative bg-[var(--surface-container-low)] rounded-lg border border-[var(--outline-variant)]/20 overflow-hidden mb-4 sm:mb-6">
                <div className="relative aspect-video bg-[var(--surface-container)]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImage}
                      className="relative w-full h-full"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3, ease: easings.easeOutExpo }}
                    >
                      <Image
                        src={getScreenshotSrc(
                          selectedProjectData.screenshots[selectedImage],
                        )}
                        alt={`${selectedProjectData.title} screenshot ${selectedImage + 1}`}
                        fill
                        className="object-contain p-4 sm:p-6 md:p-12 pb-16 sm:pb-20"
                      />
                      {getScreenshotDescription(
                        selectedProjectData.screenshots[selectedImage],
                      ) && (
                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-10 max-w-[calc(100%-4rem)] sm:max-w-md">
                          <span className="inline-block bg-[var(--surface-container-low)]/95 backdrop-blur-md border border-[var(--outline-variant)]/50 text-[var(--foreground)] text-xs sm:text-sm px-4 py-2 rounded-lg font-[family-name:var(--font-jetbrains-mono)] shadow-lg">
                            {getScreenshotDescription(
                              selectedProjectData.screenshots[selectedImage],
                            )}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {selectedProjectData.screenshots.length > 1 && (
                    <>
                      <motion.button
                        onClick={prevImage}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[var(--surface-container-highest)]/90 hover:bg-[var(--primary)] border border-[var(--outline-variant)]/30 hover:border-[var(--primary)] text-[var(--primary)] hover:text-[var(--on-primary)] p-2 sm:p-3 rounded-lg transition-all backdrop-blur-sm"
                        whileHover={{ scale: 1.1, x: -4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="material-symbols-outlined text-xl sm:text-2xl">
                          chevron_left
                        </span>
                      </motion.button>
                      <motion.button
                        onClick={nextImage}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[var(--surface-container-highest)]/90 hover:bg-[var(--primary)] border border-[var(--outline-variant)]/30 hover:border-[var(--primary)] text-[var(--primary)] hover:text-[var(--on-primary)] p-2 sm:p-3 rounded-lg transition-all backdrop-blur-sm"
                        whileHover={{ scale: 1.1, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="material-symbols-outlined text-xl sm:text-2xl">
                          chevron_right
                        </span>
                      </motion.button>
                    </>
                  )}

                  {/* Image Counter Badge */}
                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-[var(--surface-container-low)]/90 backdrop-blur-sm border border-[var(--outline-variant)]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[var(--tertiary)] text-sm sm:text-base">
                        image
                      </span>
                      <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs sm:text-sm text-[var(--primary)] font-bold">
                        {selectedImage + 1}
                      </span>
                      <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs sm:text-sm text-[var(--outline-variant)]">
                        /
                      </span>
                      <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs sm:text-sm text-[var(--secondary)]">
                        {selectedProjectData.screenshots.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="relative bg-[var(--surface-container-low)] rounded-lg border border-[var(--outline-variant)]/20 p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[var(--tertiary)] text-sm">
                    photo_library
                  </span>
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] sm:text-xs text-[var(--secondary)] uppercase tracking-wider">
                    All Screenshots
                  </span>
                </div>
                <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[var(--outline-variant)] scrollbar-track-[var(--surface-container)] scroll-smooth">
                  {selectedProjectData.screenshots.map((screenshot, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === selectedImage
                          ? "border-[var(--primary)] shadow-[0_0_20px_var(--primary-shadow-strong)]"
                          : "border-[var(--outline-variant)]/30 hover:border-[var(--tertiary)]/50"
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Image
                        src={getScreenshotSrc(screenshot)}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                      {idx === selectedImage && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      <div className="absolute bottom-1 right-1 bg-[var(--surface-container-low)]/80 backdrop-blur-sm px-1.5 py-0.5 rounded">
                        <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] sm:text-[10px] text-[var(--tertiary)]">
                          {idx + 1}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
