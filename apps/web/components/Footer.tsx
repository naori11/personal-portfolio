import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0b1326] w-full py-12 border-t border-[#494456]/15 pt-16">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 max-w-7xl mx-auto gap-6">
        {/* Left: Branding */}
        <div className="text-xs sm:text-sm font-bold text-[#cfbdff] font-[family-name:var(--font-space-grotesk)] text-center md:text-left">
          JUVAN.TECH <span className="text-[#6bd8cb] font-normal">//</span> DevOps & Cloud Engineer
        </div>

        {/* Center-Right: Social Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest">
          <Link href="https://github.com/naori11" className="text-[#b9c7df] hover:text-[#6bd8cb] transition-colors opacity-80 hover:opacity-100">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/juvan-emanuel-paulo/" className="text-[#b9c7df] hover:text-[#6bd8cb] transition-colors opacity-80 hover:opacity-100">
            LinkedIn
          </Link>
          <Link href="#" className="text-[#b9c7df] hover:text-[#6bd8cb] transition-colors opacity-80 hover:opacity-100">
            Documentation
          </Link>
          <Link href="#" className="text-[#b9c7df] hover:text-[#6bd8cb] transition-colors opacity-80 hover:opacity-100">
            Status
          </Link>
        </div>

        {/* Right: Copyright */}
        <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest text-[#6bd8cb] text-center md:text-right">
          © 2026 Juvan Paulo
        </div>
      </div>
    </footer>
  );
}
