"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import {
  type KeyboardEvent,
  type MouseEvent,
  type RefObject,
  useEffect,
  useRef,
  useSyncExternalStore,
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

const desktopPreviewQuery = "(min-width: 768px)";

function subscribeToDesktopPreview(callback: () => void) {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return () => {};
  }
  const mediaQuery = window.matchMedia(desktopPreviewQuery);
  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
}

function getDesktopPreviewSnapshot() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia(desktopPreviewQuery).matches;
}

function getServerDesktopPreviewSnapshot() {
  return false;
}

export function ResumeModal({
  open,
  onClose,
  returnFocusRef,
}: ResumeModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isDesktopPreview = useSyncExternalStore(
    subscribeToDesktopPreview,
    getDesktopPreviewSnapshot,
    getServerDesktopPreviewSnapshot,
  );

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
            className="flex max-h-[calc(100dvh-2rem)] w-full max-w-5xl flex-col md:h-[90vh]"
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.35, ease: easings.easeOutExpo }}
          >
            <header className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-3 sm:mb-6 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center sm:gap-x-2">
              <div className="min-w-0 sm:mr-4">
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

              <div className="col-span-2 row-start-2 grid grid-cols-2 gap-2 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:flex">
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#494456]/50 bg-[#171f33] px-3 font-[family-name:var(--font-jetbrains-mono)] text-[11px] font-bold uppercase tracking-[0.08em] text-[#dae2fd] transition-colors hover:border-[#cfbdff] hover:text-[#cfbdff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb]"
                >
                  Open PDF
                </a>
                <a
                  href="/assets/resume.pdf"
                  download="Juvan_Paulo_Resume.pdf"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#cfbdff] px-3 font-[family-name:var(--font-jetbrains-mono)] text-[11px] font-bold uppercase tracking-[0.08em] text-[#3a0093] transition-colors hover:bg-[#e8ddff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb]"
                >
                  Download PDF
                </a>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close resume"
                className="col-start-2 row-start-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#494456]/40 bg-[#171f33] text-[#dae2fd] transition-colors hover:border-[#6bd8cb] hover:text-[#6bd8cb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb] sm:col-start-3"
              >
                <span aria-hidden="true" className="material-symbols-outlined">
                  close
                </span>
              </button>
            </header>

            {isDesktopPreview ? (
              <div
                role="region"
                aria-label="Resume preview"
                tabIndex={0}
                className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden rounded-lg border border-[#494456]/25 bg-[#131b2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb]"
              >
                <PDFViewer fileUrl="/assets/resume.pdf" />
              </div>
            ) : (
              <div className="rounded-lg border border-[#494456]/25 bg-[#131b2e] p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined mt-0.5 text-2xl text-[#6bd8cb]"
                  >
                    picture_as_pdf
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-[#dae2fd]">
                      Read the full-size resume
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#b9c7df]">
                      Open the PDF for readable text, zoom, search, and working links.
                    </p>
                    <p className="mt-3 font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.12em] text-[#b9c7df]/65">
                      Use Open PDF above to view it in your browser.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
