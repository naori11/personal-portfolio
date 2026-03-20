"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState("idle");
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d3449] text-[#6bd8cb] mb-6">
          <span className="text-[10px] font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest">System::Status: Ready</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-space-grotesk)] font-bold tracking-tighter text-[#dae2fd] mb-4">
          Establish <span className="text-[#cfbdff]">Connectivity</span>
        </h1>
        <p className="text-[#b9c7df] max-w-2xl text-lg">
          Whether it's discussing cloud architecture, automation pipelines, or just a technical deep-dive, my terminal is always open.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12">
        {/* Contact Form Section */}
        <section className="bg-[#131b2e] rounded-lg p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-9xl">leak_add</span>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df] uppercase tracking-widest">
                  _identity.name
                </label>
                <input
                  className="w-full bg-transparent border-b border-[#494456]/30 focus:border-[#cfbdff] focus:ring-0 transition-all py-3 px-0 text-[#dae2fd] placeholder:text-[#494456]/50"
                  placeholder="John Doe"
                  type="text"
                  required
                  disabled={formState === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <label className="block font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df] uppercase tracking-widest">
                  _contact.email
                </label>
                <input
                  className="w-full bg-transparent border-b border-[#494456]/30 focus:border-[#cfbdff] focus:ring-0 transition-all py-3 px-0 text-[#dae2fd] placeholder:text-[#494456]/50"
                  placeholder="john@domain.com"
                  type="email"
                  required
                  disabled={formState === "submitting"}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df] uppercase tracking-widest">
                _subject.header
              </label>
              <input
                className="w-full bg-transparent border-b border-[#494456]/30 focus:border-[#cfbdff] focus:ring-0 transition-all py-3 px-0 text-[#dae2fd] placeholder:text-[#494456]/50"
                placeholder="Infrastructure Inquiry"
                type="text"
                required
                disabled={formState === "submitting"}
              />
            </div>

            <div className="space-y-2">
              <label className="block font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df] uppercase tracking-widest">
                _message.payload
              </label>
              <textarea
                className="w-full bg-transparent border-b border-[#494456]/30 focus:border-[#cfbdff] focus:ring-0 transition-all py-3 px-0 text-[#dae2fd] placeholder:text-[#494456]/50 resize-none"
                placeholder="Briefly describe the objective..."
                rows={4}
                required
                disabled={formState === "submitting"}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formState === "submitting" || formState === "success"}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#cfbdff] to-[#6200ee] text-[#3a0093] font-[family-name:var(--font-space-grotesk)] font-bold rounded-lg hover:opacity-90 transition-all active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === "submitting" && "TRANSMITTING..."}
              {formState === "success" && "TRANSMISSION COMPLETE"}
              {formState === "idle" && (
                <>
                  INITIALIZE TRANSMISSION
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                </>
              )}
            </button>

            {formState === "success" && (
              <p className="text-sm text-[#6bd8cb] font-[family-name:var(--font-jetbrains-mono)] text-center">
                ✓ Message received. Response incoming.
              </p>
            )}
          </form>
        </section>

        {/* Contact Details & Visuals */}
        <div className="space-y-8">
          {/* Communication Graphic (Glass Panel) */}
          <div
            className="rounded-lg p-8 border border-[#494456]/15 flex flex-col items-center justify-center text-center space-y-6 aspect-square md:aspect-auto md:h-64"
            style={{ background: "rgba(45, 52, 73, 0.6)", backdropFilter: "blur(20px)" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#cfbdff]/20 blur-3xl rounded-full"></div>
              <span className="material-symbols-outlined text-6xl text-[#cfbdff] relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>
                hub
              </span>
            </div>
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#6bd8cb] tracking-[0.2em] uppercase">
              Global Networking Active
            </p>
          </div>

          {/* Info Cards */}
          <div className="bg-[#131b2e] rounded-lg p-8 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-[#222a3d] text-[#cfbdff]">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#b9c7df] uppercase mb-1">E-mail</p>
                  <p className="font-[family-name:var(--font-space-grotesk)] font-medium text-[#dae2fd]">ops@infra-editorial.dev</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-[#222a3d] text-[#cfbdff]">
                  <span className="material-symbols-outlined">share_location</span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#b9c7df] uppercase mb-1">Location</p>
                  <p className="font-[family-name:var(--font-space-grotesk)] font-medium text-[#dae2fd]">Berlin, DE // Remote</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#494456]/15 flex flex-col gap-4">
              <a className="flex items-center justify-between group" href="https://github.com">
                <span className="font-[family-name:var(--font-space-grotesk)] text-[#b9c7df] group-hover:text-[#cfbdff] transition-colors">GitHub</span>
                <span className="material-symbols-outlined text-[#494456] group-hover:text-[#cfbdff] transition-colors">open_in_new</span>
              </a>
              <a className="flex items-center justify-between group" href="https://linkedin.com">
                <span className="font-[family-name:var(--font-space-grotesk)] text-[#b9c7df] group-hover:text-[#cfbdff] transition-colors">LinkedIn</span>
                <span className="material-symbols-outlined text-[#494456] group-hover:text-[#cfbdff] transition-colors">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
