import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "INFRA_DEV | Home - Portfolio",
  description: "Engineering Reliable Infrastructure - DevOps Portfolio",
};

export default function HomePage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #494456 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2d3449] border border-[#494456]/20 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-[#6bd8cb]"></span>
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest text-[#6bd8cb]">System Status: Operational</span>
            </div>

            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-[#dae2fd]">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cfbdff] to-[#6200ee]">Reliable</span> <br/>Infrastructure
            </h1>

            <p className="max-w-xl text-lg text-[#b9c7df] leading-relaxed">
              I architect and automate high-availability cloud systems. Specializing in DevOps, Backend Engineering, and the pursuit of zero-downtime deployments.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/projects" className="px-8 py-4 bg-gradient-to-r from-[#cfbdff] to-[#6200ee] text-[#3a0093] font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20">
                See My Work
              </Link>
              <button className="px-8 py-4 bg-[#2d3449] text-[#cfbdff] font-bold rounded-lg border border-[#494456]/10 hover:bg-[#2d3449] transition-all active:scale-95">
                Read Manifesto
              </button>
            </div>
          </div>

          <div className="md:col-span-4 hidden md:block">
            <div className="bg-[#131b2e] rounded-xl border border-[#494456]/15 p-1">
              <div className="bg-[#222a3d] rounded-lg p-4 font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#b9c7df] space-y-2">
                <div className="flex gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-[#494456]/30"></span>
                  <span className="w-3 h-3 rounded-full bg-[#494456]/30"></span>
                  <span className="w-3 h-3 rounded-full bg-[#494456]/30"></span>
                </div>
                <div className="text-[#6bd8cb]">λ main: ~/projects/infra</div>
                <div className="text-[#dae2fd]">$ terraform plan</div>
                <div className="opacity-50"># Refreshing state...</div>
                <div className="text-[#d0beff]">Plan: 12 to add, 0 to change, 0 to destroy.</div>
                <div className="pt-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#6bd8cb] text-lg">check_circle</span>
                  <span className="text-xs">Infrastructure synced successfully.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus / Skills */}
      <section className="py-24 px-8 bg-[#131b2e]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold mb-4">Core Competencies</h2>
            <div className="w-24 h-1 bg-[#cfbdff]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill 1 */}
            <div className="p-8 bg-[#171f33] rounded-lg border-b-2 border-transparent hover:border-[#6bd8cb] transition-all group">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-[#6bd8cb]/10 text-[#6bd8cb] rounded-lg">
                <span className="material-symbols-outlined">settings_input_component</span>
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold mb-4 text-[#dae2fd]">Kubernetes & Docker</h3>
              <p className="text-[#b9c7df] leading-relaxed mb-6">Orchestrating containerized environments at scale, ensuring seamless scalability and resource efficiency.</p>
              <div className="flex flex-wrap gap-2">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#2d3449] rounded text-[#6bd8cb] uppercase">Helm</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#2d3449] rounded text-[#6bd8cb] uppercase">Istio</span>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="p-8 bg-[#171f33] rounded-lg border-b-2 border-transparent hover:border-[#cfbdff] transition-all group">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-[#cfbdff]/10 text-[#cfbdff] rounded-lg">
                <span className="material-symbols-outlined">account_tree</span>
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold mb-4 text-[#dae2fd]">CI/CD Pipelines</h3>
              <p className="text-[#b9c7df] leading-relaxed mb-6">Automating the lifecycle of code from commit to production with robust, repeatable delivery pipelines.</p>
              <div className="flex flex-wrap gap-2">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#2d3449] rounded text-[#cfbdff] uppercase">GitHub Actions</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#2d3449] rounded text-[#cfbdff] uppercase">ArgoCD</span>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="p-8 bg-[#171f33] rounded-lg border-b-2 border-transparent hover:border-[#b9c7df] transition-all group">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-[#b9c7df]/10 text-[#b9c7df] rounded-lg">
                <span className="material-symbols-outlined">api</span>
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold mb-4 text-[#dae2fd]">Scalable APIs</h3>
              <p className="text-[#b9c7df] leading-relaxed mb-6">Building high-performance backend systems designed for massive concurrency and low-latency response.</p>
              <div className="flex flex-wrap gap-2">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#2d3449] rounded text-[#b9c7df] uppercase">Go</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 bg-[#2d3449] rounded text-[#b9c7df] uppercase">gRPC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects (Asymmetric Layout) */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-black mb-2 tracking-tight">Featured Operations</h2>
            <p className="text-[#b9c7df] font-[family-name:var(--font-jetbrains-mono)] text-sm uppercase tracking-widest">Selected Works & Case Studies</p>
          </div>
          <Link href="/projects" className="hidden md:block font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#6bd8cb] hover:underline">
            View All Projects -&gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Project 1 (Large) */}
          <div className="md:col-span-7 group">
            <div className="relative aspect-video bg-[#171f33] overflow-hidden rounded-xl border border-[#494456]/10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0dGKOCGWzRuX1zPu6q5yu7meOhNnh-hh8aQXoF3YMdTsjywSZ9EKGqu8b3XWefVEJkdXvj0XSiUi09vb_AkJyKeXymrwgSBeTyrUc3U9iWd9NzQbGa-cqbAL9lAZZMcE0_yMpzk29D55DG5YLJ_NwqYGBlBEJefXs_4-Whwi_JoPut1icG_g1rWnKzMYduaqw-GSkNsoIvZ6RzxDGUZjGNkmxTfC0L1vAAB3CXqVk3z_Mpz3C5JPF01S_kwX-kLAHHQtdyk8qpN8"
                alt="Dark server room with glowing blue and purple lights"
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[#dae2fd] mb-2">Cloud Sentinel</h3>
                <p className="text-[#b9c7df] mb-4">Multi-region observability platform for real-time monitoring.</p>
                <span className="px-4 py-1.5 bg-[#cfbdff]/20 text-[#cfbdff] rounded-full text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase">AWS • Terraform • Grafana</span>
              </div>
            </div>
          </div>

          {/* Project 2 (Narrow) */}
          <div className="md:col-span-5 flex flex-col justify-center gap-10">
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
          </div>
        </div>
      </section>

      {/* Testimonial/Callout */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="material-symbols-outlined text-6xl text-[#cfbdff]/30 mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-4xl italic font-light leading-relaxed text-[#dae2fd] mb-12">
            "His architectural decisions during our migration saved us nearly 40% in monthly compute costs while simultaneously increasing our uptime to four nines."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="text-left">
              <div className="font-bold text-[#dae2fd]">Alex Rivera</div>
              <div className="text-sm font-[family-name:var(--font-jetbrains-mono)] text-[#6bd8cb] uppercase tracking-widest">CTO @ TechFlow Systems</div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#cfbdff]/5 blur-[120px] rounded-full"></div>
      </section>

      {/* Contact/Final CTA */}
      <section className="py-32 px-8 bg-[#131b2e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-5xl font-black mb-6 tracking-tighter">Ready to scale?</h2>
            <p className="text-xl text-[#b9c7df] mb-8">Available for freelance consulting and high-impact full-time roles.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#b9c7df]">
                <span className="material-symbols-outlined text-[#cfbdff]">mail</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)]">protocol@infra-dev.io</span>
              </div>
              <div className="flex items-center gap-4 text-[#b9c7df]">
                <span className="material-symbols-outlined text-[#cfbdff]">location_on</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)]">Berlin / Remote</span>
              </div>
            </div>
          </div>

          <div className="bg-[#171f33] p-8 rounded-xl border border-[#494456]/15">
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
              <button className="w-full py-4 bg-[#cfbdff] text-[#3a0093] font-bold rounded-lg hover:brightness-110 transition-all" type="submit">
                Dispatch Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
