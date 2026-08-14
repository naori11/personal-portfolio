"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  fileUrl: string;
}

export default function PDFViewer({ fileUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateWidth = (width: number) => {
      setContainerWidth(width);
    };

    updateWidth(container.getBoundingClientRect().width);

    const observer = new ResizeObserver(([entry]) => {
      if (entry) updateWidth(entry.contentRect.width);
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div
      className="flex flex-col items-center py-4 gap-4 w-full"
      ref={containerRef}
    >
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex items-center justify-center py-12">
            <div className="flex flex-col items-center gap-4">
              <motion.div
                className="w-12 h-12 border-4 border-[var(--primary)] border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[var(--secondary)]">
                Loading resume...
              </p>
            </div>
          </div>
        }
        error={
          <div className="flex items-center justify-center py-12">
            <div className="bg-[var(--surface-container)] border border-[var(--outline-variant)]/20 rounded-lg p-8 text-center max-w-md">
              <span className="material-symbols-outlined text-[var(--primary)]/30 text-5xl mb-4">
                error
              </span>
              <p className="text-[var(--secondary)] mb-4">
                Failed to load PDF. Please use the download button above.
              </p>
            </div>
          </div>
        }
      >
        {numPages &&
          Array.from(new Array(numPages), (_, index) => (
            <motion.div
              key={`page_${index + 1}`}
              className="shadow-lg w-full max-w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Page
                pageNumber={index + 1}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="max-w-full"
                width={
                  containerWidth > 0
                    ? Math.min(containerWidth - 32, 800)
                    : undefined
                }
              />
            </motion.div>
          ))}
      </Document>
    </div>
  );
}
