"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/60 backdrop-blur-xl shadow-2xl shadow-purple-900/20">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Branding - Left */}
        <Link href="/" className="text-xl font-black tracking-tighter text-[#cfbdff] uppercase font-[family-name:var(--font-space-grotesk)]">
          INFRA_DEV
        </Link>

        {/* Navigation Links - Center */}
        <div className="hidden md:flex items-center gap-8 font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight">
          <Link
            href="/"
            className={isActive("/") ? "text-[#cfbdff] border-b-2 border-[#cfbdff] pb-1" : "text-[#b9c7df] hover:text-[#cfbdff] transition-colors"}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={isActive("/projects") ? "text-[#cfbdff] border-b-2 border-[#cfbdff] pb-1" : "text-[#b9c7df] hover:text-[#cfbdff] transition-colors"}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={isActive("/about") ? "text-[#cfbdff] border-b-2 border-[#cfbdff] pb-1" : "text-[#b9c7df] hover:text-[#cfbdff] transition-colors"}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={isActive("/contact") ? "text-[#cfbdff] border-b-2 border-[#cfbdff] pb-1" : "text-[#b9c7df] hover:text-[#cfbdff] transition-colors"}
          >
            Contact
          </Link>
        </div>

        {/* Terminal Icon + Profile - Right */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#2d3449]/50 transition-all duration-300 active:scale-95 text-[#cfbdff]">
            <span className="material-symbols-outlined">terminal</span>
          </button>
          <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-[#cfbdff]/20">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWK9jfv0932B0x_fXiIw4S-GQKFGRv1I4fINGZUnzpCptsrsKvR6lPKdap3CsrFqUohWMdjP_T_nbMyL1h1S_pP-S38TfpLNKQqQ3Ds9IQa_FVedUFTFuRi6P-j_74Nd8mav3LIdGOXP1oqtXV80Y393jd2DZZJ_9-1itmpkpbaDcCrPDJl6tsF9mxKERsqZWDEBqB77kvWcVwInOAvottqjM33k0mHE5CqqoIRPwj93P6KLnv07d3opO89PLm1rAjkFZ_9r0_1qc"
              alt="Professional portrait of DevOps Engineer"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
