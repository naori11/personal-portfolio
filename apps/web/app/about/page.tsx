"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, springs, easings } from "../../lib/motion";

const techStyles: Record<string, { bg: string; text: string; border: string; slug: string }> = {
  "FLUTTER": { bg: "bg-[#02569B]/10", text: "text-[#4fc3f7]", border: "border-[#02569B]/20", slug: "flutter" },
  "SUPABASE": { bg: "bg-[#3ecf8e]/10", text: "text-[#3ecf8e]", border: "border-[#3ecf8e]/20", slug: "supabase" },
  "ESP32": { bg: "bg-[#e7352c]/10", text: "text-[#ff6b6b]", border: "border-[#e7352c]/20", slug: "espressif" },
  "ARDUINO": { bg: "bg-[#00979C]/10", text: "text-[#00979C]", border: "border-[#00979C]/20", slug: "arduino" },
  "FASTAPI": { bg: "bg-[#009485]/10", text: "text-[#00f2fe]", border: "border-[#009485]/20", slug: "fastapi" },
  "GEMINI API": { bg: "bg-[#4285f4]/10", text: "text-[#8ab4f8]", border: "border-[#4285f4]/20", slug: "googlegemini" },
  "DOCKER": { bg: "bg-[#2496ed]/10", text: "text-[#70b5ff]", border: "border-[#2496ed]/20", slug: "docker" },
  "AZURE": { bg: "bg-[#0078d4]/10", text: "text-[#79c0ff]", border: "border-[#0078d4]/20", slug: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft-azure.svg" },
  "GOOGLE CLOUD": { bg: "bg-[#4285F4]/10", text: "text-[#4285F4]", border: "border-[#4285F4]/20", slug: "googlecloud" },
  "TERRAFORM": { bg: "bg-[#844FBA]/10", text: "text-[#aa80e0]", border: "border-[#844FBA]/20", slug: "terraform" },
  "LINUX": { bg: "bg-[#FCC624]/10", text: "text-[#FCC624]", border: "border-[#FCC624]/20", slug: "linux" },
  "NETWORKING": { bg: "bg-[#005F73]/10", text: "text-[#0a9396]", border: "border-[#005F73]/20", slug: "" },
  "POSTGRESQL": { bg: "bg-[#336791]/10", text: "text-[#336791]", border: "border-[#336791]/20", slug: "postgresql" },
  "NEXT.JS": { bg: "bg-white/5", text: "text-white", border: "border-white/10", slug: "nextdotjs" },
  "TURBOREPO": { bg: "bg-[#ea580c]/10", text: "text-[#ff9248]", border: "border-[#ea580c]/20", slug: "turborepo" },
  "PHP": { bg: "bg-[#777bb4]/10", text: "text-[#b0b3ff]", border: "border-[#777bb4]/20", slug: "php" },
  "MYSQL": { bg: "bg-[#00758f]/10", text: "text-[#ffad33]", border: "border-[#00758f]/20", slug: "mysql" },
  "JAVASCRIPT": { bg: "bg-[#f7df1e]/10", text: "text-[#f7df1e]", border: "border-[#f7df1e]/20", slug: "javascript" },
  "PYTHON": { bg: "bg-[#3776ab]/10", text: "text-[#ffd43b]", border: "border-[#3776ab]/20", slug: "python" },
  "GITHUB ACTIONS": { bg: "bg-[#2088ff]/10", text: "text-[#58a6ff]", border: "border-[#2088ff]/20", slug: "githubactions" },
  "TAILWIND CSS": { bg: "bg-[#38bdf8]/10", text: "text-[#38bdf8]", border: "border-[#38bdf8]/20", slug: "tailwindcss" },
  "GITHUB API": { bg: "bg-[#24292e]/30", text: "text-[#e6edf3]", border: "border-[#30363d]", slug: "github" },
};

const defaultTechStyle = { bg: "bg-[#3c4a5e]/20", text: "text-[#abb9d1]", border: "border-[#3c4a5e]/30", slug: "" };

const techCategories = [
  {
    title: "Cloud & DevOps",
    techs: ["DOCKER", "TERRAFORM", "LINUX", "NETWORKING", "AZURE", "GITHUB ACTIONS", "GOOGLE CLOUD"],
  },
  {
    title: "Languages",
    techs: ["PYTHON", "JAVASCRIPT", "PHP"],
  },
  {
    title: "Frameworks & Library",
    techs: ["NEXT.JS", "FLUTTER", "FASTAPI", "TAILWIND CSS", "TURBOREPO"],
  },
  {
    title: "Backend & Databases",
    techs: ["SUPABASE", "MYSQL", "POSTGRESQL", "GEMINI API", "GITHUB API"],
  },
  {
    title: "Hardware & IoT",
    techs: ["ESP32", "ARDUINO"],
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-x-hidden">
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
            About Me // Biography
          </motion.div>
          <motion.h1
            className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easings.easeOutExpo }}
          >
            BUILDING INFRASTRUCTURE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cfbdff] to-[#6200ee]">THAT WORKS.</span>
          </motion.h1>
          <motion.div
            className="space-y-6 text-[#b9c7df] text-base sm:text-lg leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easings.easeOutExpo }}
          >
            <p>
              I recently graduated Magna Cum Laude from National University – Fairview with a degree in BSIT-MI, based in Caloocan City, Philippines. As a kid, I had a habit of taking apart some of our household electronics to see how they work, though I didn't exactly repaired any of it. Luckily, taking apart software and cloud infrastructure is way easier to repair, which led me to pursue backend development and DevOps.
            </p>
            <p>
              My main focus is building systems that are fast, reliable, and secure. Right now, I’m looking for entry-level opportunities in DevOps, Cloud Engineering, or Backend Development. If your team is building scalable infrastructure, or just needs someone who loves figuring out how complex systems fit together, I’d love to connect!            </p>
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
                src="/assets/image.jpg"
                alt="Portrait of Juvan Emanuel Paulo"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326]/90 via-[#0b1326]/20 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#6bd8cb]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#6bd8cb]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#6bd8cb]/30"></div>
                </div>
                <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#6bd8cb] leading-tight font-bold">
                  Status: Active<br/>
                  Location: Remote<br/>
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
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight">WORK & PROJECTS</h2>
          </div>

          <div className="space-y-12 relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#494456]/20"></div>

            {/* Entry 1: Backend Developer (Apprenticeship) */}
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
                <h3 className="text-xl font-bold text-[#dae2fd]">Backend Developer (Apprenticeship)</h3>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#6bd8cb] text-sm">JUNE 2026 — PRESENT</span>
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df]/60 mb-4 tracking-wider">GENWATT ENERGY SOLUTIONS</div>
              <p className="text-[#b9c7df] text-sm leading-relaxed max-w-xl">
                Migrating OCPP API services and compute instances from Azure to GCP. Hardening GCP Compute instances with strict firewall rules and reverse proxies, while automating staging and production deployments via GitHub Actions CI/CD pipelines.
              </p>
            </motion.div>

            {/* Entry 2: Backend Developer Intern */}
            <motion.div
              className="relative pl-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <motion.div
                className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#2d3449] border-4 border-[#0b1326]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.25 }}
              />
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold text-[#dae2fd]">Backend Developer Intern</h3>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#6bd8cb] text-sm">JAN 2026 — MAY 2026</span>
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df]/60 mb-4 tracking-wider">GENWATT ENERGY SOLUTIONS</div>
              <p className="text-[#b9c7df] text-sm leading-relaxed max-w-xl">
                Developed backend architecture for the EV charger booking application. Integrated PayMongo payment gateway APIs for secure transaction processing and configured physical chargers using SteVe OCPP server endpoints.
              </p>
            </motion.div>

            {/* Entry 3 */}
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
                <h3 className="text-xl font-bold text-[#dae2fd]">Lead Developer - Project-Based Learning (PBL2)</h3>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#6bd8cb] text-sm">2024 — 2025</span>
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df]/60 mb-4 tracking-wider">KIDSYNC / NU-FAIRVIEW</div>
              <p className="text-[#b9c7df] text-sm leading-relaxed max-w-xl">
                Engineered an RFID-based verification system using ESP32 and Flutter. Designed the database schema in Supabase and implemented real-time SMS notifications via REST APIs.
              </p>
            </motion.div>

            {/* Entry 4 */}
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
                <h3 className="text-xl font-bold text-[#dae2fd]">Web Developer - Project-Based Learning (PBL1)</h3>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#6bd8cb] text-sm">2023 — 2024</span>
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df]/60 mb-4 tracking-wider">COFFEETORY / NU-FAIRVIEW</div>
              <p className="text-[#b9c7df] text-sm leading-relaxed max-w-xl">
                Developed a full-stack inventory and POS system using PHP/MariaDB. Focused on optimizing product tracking and sales reporting logic for local server environments.
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
              Technical Skills
            </div>
            <div className="space-y-8">
              {techCategories.map((category) => (
                <div key={category.title}>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#b9c7df]/50 mb-4">
                    {category.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech) => {
                      const style = techStyles[tech] || defaultTechStyle;
                      return (
                        <span
                          key={tech}
                          className={`inline-flex items-center gap-1.5 font-[family-name:var(--font-jetbrains-mono)] text-[10px] px-2 py-1 rounded-sm border ${style.bg} ${style.text} ${style.border}`}
                        >
                          {style.slug && (
                            <span
                              className="w-3 h-3 flex-shrink-0"
                              style={{
                                backgroundColor: 'currentColor',
                                WebkitMaskImage: `url(${style.slug.startsWith('http') ? style.slug : `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${style.slug}.svg`})`,
                                maskImage: `url(${style.slug.startsWith('http') ? style.slug : `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${style.slug}.svg`})`,
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                maskPosition: 'center',
                                WebkitMaskSize: 'contain',
                                maskSize: 'contain'
                              }}
                            />
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-[#222a3d] p-6 rounded-lg border border-[#494456]/10">
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold mb-6">Certifications</h4>
            <div className="space-y-4">
              <a
                href="https://learn.microsoft.com/en-us/users/juvanpaulo-8654/credentials/a501b56f522784f7?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-[#2d3449] rounded-sm flex items-center justify-center text-[#cfbdff] transition-colors group-hover:bg-[#cfbdff] group-hover:text-[#3a0093]">
                  <span
                    className="w-5 h-5 flex-shrink-0"
                    style={{
                      backgroundColor: 'currentColor',
                      WebkitMaskImage: `url(https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft-azure.svg)`,
                      maskImage: `url(https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft-azure.svg)`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain'
                    }}
                  />
                </div>
                <div className="flex-grow">
                  <div className="text-sm font-semibold group-hover:text-[#cfbdff] transition-colors">Microsoft Certified: Azure Fundamentals (AZ-900)</div>
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#6bd8cb]">Microsoft Azure</div>
                </div>
                <span className="material-symbols-outlined text-[16px] text-[#b9c7df]/40 group-hover:text-[#cfbdff] transition-colors mt-1">north_east</span>
              </a>

              <a
                href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=4EC61C0CD479544341A52D2EAFEA145AB0BC97260EBF72AA88AFA338B9B6A049"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-[#2d3449] rounded-sm flex items-center justify-center text-[#cfbdff] transition-colors group-hover:bg-[#cfbdff] group-hover:text-[#3a0093]">
                  <span
                    className="w-5 h-5 flex-shrink-0"
                    style={{
                      backgroundColor: 'currentColor',
                      WebkitMaskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/oracle.svg)`,
                      maskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/oracle.svg)`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain'
                    }}
                  />
                </div>
                <div className="flex-grow">
                  <div className="text-sm font-semibold group-hover:text-[#cfbdff] transition-colors">Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</div>
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#6bd8cb]">Oracle</div>
                </div>
                <span className="material-symbols-outlined text-[16px] text-[#b9c7df]/40 group-hover:text-[#cfbdff] transition-colors mt-1">north_east</span>
              </a>

              <a
                href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=5CF17CD1239DE27ED3CBAB5F9ADF69EAFB4E9882570647A746A9CBFECA5A05AC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-[#2d3449] rounded-sm flex items-center justify-center text-[#cfbdff] transition-colors group-hover:bg-[#cfbdff] group-hover:text-[#3a0093]">
                  <span
                    className="w-5 h-5 flex-shrink-0"
                    style={{
                      backgroundColor: 'currentColor',
                      WebkitMaskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/oracle.svg)`,
                      maskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/oracle.svg)`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain'
                    }}
                  />
                </div>
                <div className="flex-grow">
                  <div className="text-sm font-semibold group-hover:text-[#cfbdff] transition-colors">Oracle Cloud Infrastructure 2025 Certified Foundations Associate</div>
                  <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#6bd8cb]">Oracle</div>
                </div>
                <span className="material-symbols-outlined text-[16px] text-[#b9c7df]/40 group-hover:text-[#cfbdff] transition-colors mt-1">north_east</span>
              </a>
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
        <div className="bg-[#060e20] p-6 sm:p-8 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Degree & University */}
          <div className="md:col-span-7 flex gap-4 sm:gap-6 items-start">
            <div className="text-[#d0beff] mt-1">
              <span className="material-symbols-outlined text-4xl">school</span>
            </div>
            <div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#494456] mb-2">Education</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#dae2fd] leading-tight">
                B.S. in Information Technology
              </h3>
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#6bd8cb] mb-1">
                MOBILE & INTERNET TECHNOLOGIES
              </p>
              <p className="text-[#b9c7df] text-sm">National University - Fairview</p>
              <p className="text-[#b9c7df]/40 text-xs mt-1 font-[family-name:var(--font-jetbrains-mono)]">GRADUATED: AUG 2026</p>
            </div>
          </div>

          {/* Right Column: Achievements & Scholarships */}
          <div className="md:col-span-5 space-y-4 md:border-l md:border-[#494456]/20 md:pl-8 w-full flex flex-col justify-center">
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#494456] tracking-wider uppercase mb-1">Honors & Scholar</div>

            <div className="flex items-center gap-3 group/accolade">
              <span className="material-symbols-outlined text-[20px] text-[#e5c158]" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
              <div>
                <div className="text-sm font-semibold text-[#dae2fd]">Magna Cum Laude</div>
                <div className="text-[10px] font-[family-name:var(--font-jetbrains-mono)] text-[#b9c7df]/50 uppercase tracking-wider">Academic Distinction</div>
              </div>
            </div>

            <div className="flex items-center gap-3 group/accolade">
              <span className="material-symbols-outlined text-[20px] text-[#cfbdff]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              <div>
                <div className="text-sm font-semibold text-[#dae2fd]">SM Foundation Scholar</div>
                <div className="text-[10px] font-[family-name:var(--font-jetbrains-mono)] text-[#b9c7df]/50 uppercase tracking-wider">Full Academic Scholarship</div>
              </div>
            </div>

            <div className="flex items-center gap-3 group/accolade">
              <span className="material-symbols-outlined text-[20px] text-[#6bd8cb]" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
              <div>
                <div className="text-sm font-semibold text-[#dae2fd]">Consistent Dean&apos;s Lister</div>
                <div className="text-[10px] font-[family-name:var(--font-jetbrains-mono)] text-[#b9c7df]/50 uppercase tracking-wider">2022 — 2026 Honor Roll</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#060e20] p-6 sm:p-8 rounded-lg border border-[#494456]/10 relative overflow-hidden flex flex-col justify-center min-h-[160px]">
          {/* Faint Background Quote Decoration */}
          <div className="absolute right-4 -bottom-6 opacity-[0.03] pointer-events-none select-none">
            <span className="material-symbols-outlined text-[150px]" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          </div>

          <div className="relative z-10">
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#6bd8cb] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#6bd8cb] rounded-full"></span>
              Philosophy
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-black italic text-[#cfbdff] mb-2 tracking-tight">
              "Que sera, sera."
            </h3>
            <p className="text-[#b9c7df] text-xs sm:text-sm leading-relaxed max-w-md">
              Whatever will be, will be. Embrace adaptability, focus on what you can control, and leave the rest to unfold.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
