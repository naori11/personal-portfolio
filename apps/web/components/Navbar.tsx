"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navContainer, navItem, springs } from "../lib/motion";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-[#0b1326]/60 backdrop-blur-xl shadow-2xl shadow-purple-900/20"
      initial="hidden"
      animate="visible"
      variants={navContainer}
    >
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto">
        {/* Branding - Left */}
        <motion.div variants={navItem}>
          <Link href="/" className="text-lg sm:text-xl font-black tracking-tighter text-[#cfbdff] uppercase font-[family-name:var(--font-space-grotesk)]">
            JUVAN.TECH
          </Link>
        </motion.div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8 font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight">
          <motion.div variants={navItem} className="relative">
            <Link
              href="/"
              className={isActive("/") ? "text-[#cfbdff] pb-1" : "text-[#b9c7df] hover:text-[#cfbdff] transition-colors pb-1"}
            >
              Home
            </Link>
            {isActive("/") && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#cfbdff]"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.div>
          <motion.div variants={navItem} className="relative">
            <Link
              href="/projects"
              className={isActive("/projects") ? "text-[#cfbdff] pb-1" : "text-[#b9c7df] hover:text-[#cfbdff] transition-colors pb-1"}
            >
              Projects
            </Link>
            {isActive("/projects") && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#cfbdff]"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.div>
          <motion.div variants={navItem} className="relative">
            <Link
              href="/about"
              className={isActive("/about") ? "text-[#cfbdff] pb-1" : "text-[#b9c7df] hover:text-[#cfbdff] transition-colors pb-1"}
            >
              About
            </Link>
            {isActive("/about") && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#cfbdff]"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.div>
          <motion.div variants={navItem} className="relative">
            <Link
              href="/contact"
              className={isActive("/contact") ? "text-[#cfbdff] pb-1" : "text-[#b9c7df] hover:text-[#cfbdff] transition-colors pb-1"}
            >
              Contact
            </Link>
            {isActive("/contact") && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#cfbdff]"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.div>
        </div>

        {/* Right Side - Terminal, Profile, Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <motion.button
            variants={navItem}
            className="p-2 hover:bg-[#2d3449]/50 transition-all duration-300 text-[#cfbdff] hidden sm:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", ...springs.snappy }}
          >
            <span className="material-symbols-outlined">terminal</span>
          </motion.button>
          <motion.div
            variants={navItem}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden border-2 border-[#cfbdff]/20"
            whileHover={{ scale: 1.05, borderColor: "rgba(207, 189, 255, 0.4)" }}
            transition={{ type: "spring", ...springs.snappy }}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWK9jfv0932B0x_fXiIw4S-GQKFGRv1I4fINGZUnzpCptsrsKvR6lPKdap3CsrFqUohWMdjP_T_nbMyL1h1S_pP-S38TfpLNKQqQ3Ds9IQa_FVedUFTFuRi6P-j_74Nd8mav3LIdGOXP1oqtXV80Y393jd2DZZJ_9-1itmpkpbaDcCrPDJl6tsF9mxKERsqZWDEBqB77kvWcVwInOAvottqjM33k0mHE5CqqoIRPwj93P6KLnv07d3opO89PLm1rAjkFZ_9r0_1qc"
              alt="Professional portrait of DevOps Engineer"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={navItem}
            className="md:hidden p-2 hover:bg-[#2d3449]/50 transition-all duration-300 text-[#cfbdff]"
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
            className="md:hidden bg-[#0b1326]/95 backdrop-blur-xl border-t border-[#494456]/15"
          >
            <div className="flex flex-col px-4 py-4 gap-4 font-[family-name:var(--font-space-grotesk)] font-bold">
              <Link
                href="/"
                className={`py-2 px-4 rounded transition-colors ${isActive("/") ? "text-[#cfbdff] bg-[#2d3449]/50" : "text-[#b9c7df] hover:text-[#cfbdff] hover:bg-[#2d3449]/30"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={`py-2 px-4 rounded transition-colors ${isActive("/projects") ? "text-[#cfbdff] bg-[#2d3449]/50" : "text-[#b9c7df] hover:text-[#cfbdff] hover:bg-[#2d3449]/30"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className={`py-2 px-4 rounded transition-colors ${isActive("/about") ? "text-[#cfbdff] bg-[#2d3449]/50" : "text-[#b9c7df] hover:text-[#cfbdff] hover:bg-[#2d3449]/30"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`py-2 px-4 rounded transition-colors ${isActive("/contact") ? "text-[#cfbdff] bg-[#2d3449]/50" : "text-[#b9c7df] hover:text-[#cfbdff] hover:bg-[#2d3449]/30"}`}
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
