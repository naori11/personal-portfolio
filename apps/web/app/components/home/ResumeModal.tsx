"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import {
  type KeyboardEvent,
  type MouseEvent,
  type RefObject,
  useEffect,
  useRef,
} from "react";
import { easings } from "../../../lib/motion";

const PDFViewer = dynamic(() => import("../PDFViewer"), { ssr: false });

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLElement | null>;
}

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function ResumeModal({
  open,
  onClose,
  returnFocusRef,
}: ResumeModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const targetNode = returnFocusRef.current;

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      targetNode?.focus();
    };
  }, [open, returnFocusRef]);

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusableElements = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!firstElement || !lastElement) return;

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-testid="resume-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1326]/95 p-4 backdrop-blur-sm sm:p-6 lg:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-dialog-title"
            onKeyDown={handleDialogKeyDown}
            className="flex h-[90vh] w-full max-w-5xl flex-col"
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.35, ease: easings.easeOutExpo }}
          >
            <header className="mb-4 flex items-center justify-between gap-4 sm:mb-6">
              <div>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-[#6bd8cb]">
                  Resume / PDF
                </p>
                <h2
                  id="resume-dialog-title"
                  className="mt-1 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[#dae2fd] sm:text-2xl"
                >
                  View resume
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/assets/resume.pdf"
                  download="Juvan_Paulo_Resume.pdf"
                  className="inline-flex min-h-11 items-center rounded-lg bg-[#cfbdff] px-4 font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold uppercase tracking-[0.1em] text-[#3a0093] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb]"
                >
                  Download resume
                </a>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#494456]/40 bg-[#171f33] text-[#dae2fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb]"
                >
                  <span aria-hidden="true" className="material-symbols-outlined">
                    close
                  </span>
                </button>
              </div>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden rounded-lg border border-[#494456]/25 bg-[#131b2e]">
              <PDFViewer fileUrl="/assets/resume.pdf" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
