"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { springs, easings } from "../../lib/motion";

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <motion.button
      type="submit"
      disabled={pending}
      className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#cfbdff] to-[#6200ee] text-[#3a0093] font-[family-name:var(--font-space-grotesk)] font-bold rounded-lg hover:opacity-90 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", ...springs.snappy }}
    >
      {pending && "TRANSMITTING..."}
      {!pending && (
        <>
          INITIALIZE TRANSMISSION
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
        </>
      )}
    </motion.button>
  );
}

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setSubmitState("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        setSubmitState("error");
        setErrorMessage(result.error || "Failed to send message");
      } else {
        setSubmitState("success");
        setTimeout(() => {
          setSubmitState("idle");
          e.currentTarget.reset();
        }, 3000);
      }
    } catch (error) {
      setSubmitState("error");
      setErrorMessage("Network error. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <main className="pt-24 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.header
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easings.easeOutExpo }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d3449] text-[#6bd8cb] mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-[10px] font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest">System::Status: Ready</span>
        </motion.div>
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-[family-name:var(--font-space-grotesk)] font-bold tracking-tighter text-[#dae2fd] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easings.easeOutExpo }}
        >
          Get in <span className="text-[#cfbdff]">Touch</span>
        </motion.h1>
        <motion.p
          className="text-[#b9c7df] max-w-2xl text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: easings.easeOutExpo }}
        >
          Want to discuss a project, ask about my work, or just talk tech? Send me a message.
        </motion.p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12">
        {/* Contact Form Section */}
        <motion.section
          className="bg-[#131b2e] rounded-lg p-4 sm:p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easings.easeOutExpo }}
        >
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
                  name="name"
                  className="w-full bg-transparent border-b border-[#494456]/30 focus:border-[#cfbdff] focus:ring-0 transition-all py-3 px-0 text-[#dae2fd] placeholder:text-[#494456]/50"
                  placeholder="John Doe"
                  type="text"
                  required
                  disabled={submitState !== "idle"}
                />
              </div>

              <div className="space-y-2">
                <label className="block font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df] uppercase tracking-widest">
                  _contact.email
                </label>
                <input
                  name="email"
                  className="w-full bg-transparent border-b border-[#494456]/30 focus:border-[#cfbdff] focus:ring-0 transition-all py-3 px-0 text-[#dae2fd] placeholder:text-[#494456]/50"
                  placeholder="john@domain.com"
                  type="email"
                  required
                  disabled={submitState !== "idle"}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df] uppercase tracking-widest">
                _subject.header
              </label>
              <input
                name="subject"
                className="w-full bg-transparent border-b border-[#494456]/30 focus:border-[#cfbdff] focus:ring-0 transition-all py-3 px-0 text-[#dae2fd] placeholder:text-[#494456]/50"
                placeholder="Infrastructure Inquiry"
                type="text"
                required
                disabled={submitState !== "idle"}
              />
            </div>

            <div className="space-y-2">
              <label className="block font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#b9c7df] uppercase tracking-widest">
                _message.payload
              </label>
              <textarea
                name="message"
                className="w-full bg-transparent border-b border-[#494456]/30 focus:border-[#cfbdff] focus:ring-0 transition-all py-3 px-0 text-[#dae2fd] placeholder:text-[#494456]/50 resize-none"
                placeholder="Briefly describe the objective..."
                rows={4}
                required
                disabled={submitState !== "idle"}
              ></textarea>
            </div>

            <SubmitButton pending={pending} />

            {submitState === "success" && (
              <motion.p
                className="text-sm text-[#6bd8cb] font-[family-name:var(--font-jetbrains-mono)] text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                ✓ Message transmitted successfully.
              </motion.p>
            )}

            {submitState === "error" && (
              <motion.p
                className="text-sm text-[#ff6b6b] font-[family-name:var(--font-jetbrains-mono)] text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                ✗ {errorMessage}
              </motion.p>
            )}
          </form>
        </motion.section>

        {/* Contact Details & Visuals */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: easings.easeOutExpo }}
        >
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
                  <p className="font-[family-name:var(--font-space-grotesk)] font-medium text-[#dae2fd]">juvanpaulo1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-[#222a3d] text-[#cfbdff]">
                  <span className="material-symbols-outlined">share_location</span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#b9c7df] uppercase mb-1">Location</p>
                  <p className="font-[family-name:var(--font-space-grotesk)] font-medium text-[#dae2fd]">Caloocan City, PH // Remote</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#494456]/15 flex flex-col gap-4">
              <a className="flex items-center justify-between group" href="https://github.com/naori11">
                <span className="font-[family-name:var(--font-space-grotesk)] text-[#b9c7df] group-hover:text-[#cfbdff] transition-colors">GitHub</span>
                <span className="material-symbols-outlined text-[#494456] group-hover:text-[#cfbdff] transition-colors">open_in_new</span>
              </a>
              <a className="flex items-center justify-between group" href="https://www.linkedin.com/in/juvan-emanuel-paulo/">
                <span className="font-[family-name:var(--font-space-grotesk)] text-[#b9c7df] group-hover:text-[#cfbdff] transition-colors">LinkedIn</span>
                <span className="material-symbols-outlined text-[#494456] group-hover:text-[#cfbdff] transition-colors">open_in_new</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
