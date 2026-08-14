import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--background)] w-full py-12 border-t border-[var(--outline-variant)]/15 pt-16">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 max-w-7xl mx-auto gap-6">
        {/* Left: Branding */}
        <div className="text-xs sm:text-sm font-bold text-[var(--primary)] font-[family-name:var(--font-space-grotesk)] text-center md:text-left">
          JUVAN.TECH <span className="text-[var(--tertiary)] font-normal">//</span> DevOps & Cloud Engineer
        </div>

        {/* Center-Right: Social Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest">
          <Link href="https://github.com/naori11" className="text-[var(--secondary)] hover:text-[var(--tertiary)] transition-colors opacity-80 hover:opacity-100">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/juvan-emanuel-paulo/" className="text-[var(--secondary)] hover:text-[var(--tertiary)] transition-colors opacity-80 hover:opacity-100">
            LinkedIn
          </Link>
          <Link href="#" className="text-[var(--secondary)] hover:text-[var(--tertiary)] transition-colors opacity-80 hover:opacity-100">
            Documentation
          </Link>
          <Link href="#" className="text-[var(--secondary)] hover:text-[var(--tertiary)] transition-colors opacity-80 hover:opacity-100">
            Status
          </Link>
        </div>

        {/* Right: Copyright */}
        <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest text-[var(--tertiary)] text-center md:text-right">
          © 2026 Juvan Paulo
        </div>
      </div>
    </footer>
  );
}
