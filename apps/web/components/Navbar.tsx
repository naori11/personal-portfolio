"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navContainer, navItem } from "../lib/motion";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-[var(--background)]/60 backdrop-blur-xl shadow-2xl shadow-[var(--primary)]/20"
      initial="hidden"
      animate="visible"
      variants={navContainer}
    >
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto">
        {/* Branding - Left */}
        <motion.div variants={navItem}>
          <Link
            href="/"
            className="text-lg sm:text-xl font-black tracking-tighter text-[var(--primary)] uppercase font-[family-name:var(--font-space-grotesk)]"
          >
            JUVAN.TECH
          </Link>
        </motion.div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8 font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight">
          <motion.div variants={navItem} className="relative">
            <Link
              href="/"
              className={
                isActive("/")
                  ? "text-[var(--primary)] pb-1"
                  : "text-[var(--secondary)] hover:text-[var(--primary)] transition-colors pb-1"
              }
            >
              Home
            </Link>
            {isActive("/") && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.div>
          <motion.div variants={navItem} className="relative">
            <Link
              href="/projects"
              className={
                isActive("/projects")
                  ? "text-[var(--primary)] pb-1"
                  : "text-[var(--secondary)] hover:text-[var(--primary)] transition-colors pb-1"
              }
            >
              Projects
            </Link>
            {isActive("/projects") && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.div>
          <motion.div variants={navItem} className="relative">
            <Link
              href="/about"
              className={
                isActive("/about")
                  ? "text-[var(--primary)] pb-1"
                  : "text-[var(--secondary)] hover:text-[var(--primary)] transition-colors pb-1"
              }
            >
              About
            </Link>
            {isActive("/about") && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.div>
          <motion.div variants={navItem} className="relative">
            <Link
              href="/contact"
              className={
                isActive("/contact")
                  ? "text-[var(--primary)] pb-1"
                  : "text-[var(--secondary)] hover:text-[var(--primary)] transition-colors pb-1"
              }
            >
              Contact
            </Link>
            {isActive("/contact") && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.div>
        </div>

        {/* Right Side - Terminal, Profile, Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--primary)] hover:bg-[var(--surface-variant)]/50 transition-all rounded mr-2"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <a
            href="https://github.com/naori11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[var(--primary)] hover:bg-[var(--surface-variant)]/50 transition-all rounded"
          >
            <span className="material-symbols-outlined">code</span>
          </a>
          <a
            href="https://www.linkedin.com/in/juvan-emanuel-paulo/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[var(--primary)] hover:bg-[var(--surface-variant)]/50 transition-all rounded"
          >
            <span className="material-symbols-outlined">open_in_new</span>
          </a>

          {/* Mobile Menu Button */}
          <motion.button
            variants={navItem}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 hover:bg-[var(--surface-variant)]/50 transition-all duration-300 text-[var(--primary)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--background)]/95 backdrop-blur-xl border-t border-[var(--outline-variant)]/15"
          >
            <div className="flex flex-col px-4 py-4 gap-4 font-[family-name:var(--font-space-grotesk)] font-bold">
              <Link
                href="/"
                className={`py-2 px-4 rounded transition-colors ${isActive("/") ? "text-[var(--primary)] bg-[var(--surface-variant)]/50" : "text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-[var(--surface-variant)]/30"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={`py-2 px-4 rounded transition-colors ${isActive("/projects") ? "text-[var(--primary)] bg-[var(--surface-variant)]/50" : "text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-[var(--surface-variant)]/30"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className={`py-2 px-4 rounded transition-colors ${isActive("/about") ? "text-[var(--primary)] bg-[var(--surface-variant)]/50" : "text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-[var(--surface-variant)]/30"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`py-2 px-4 rounded transition-colors ${isActive("/contact") ? "text-[var(--primary)] bg-[var(--surface-variant)]/50" : "text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-[var(--surface-variant)]/30"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
