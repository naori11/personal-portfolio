"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import { easings } from "../../lib/motion";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  fileUrl: string;
}

export default function PDFViewer({ fileUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div
      className="flex flex-col items-center py-4 gap-4 w-full"
      ref={(el) => {
        if (el) {
          setContainerWidth(el.offsetWidth);
        }
      }}
    >
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex items-center justify-center py-12">
            <div className="flex flex-col items-center gap-4">
              <motion.div
                className="w-12 h-12 border-4 border-[#cfbdff] border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#b9c7df]">Loading resume...</p>
            </div>
          </div>
        }
        error={
          <div className="flex items-center justify-center py-12">
            <div className="bg-[#171f33] border border-[#494456]/20 rounded-lg p-8 text-center max-w-md">
              <span className="material-symbols-outlined text-5xl text-[#cfbdff]/30 mb-4">error</span>
              <p className="text-[#b9c7df] mb-4">
                Failed to load PDF. Please use the download button above.
              </p>
            </div>
          </div>
        }
      >
        {numPages && Array.from(new Array(numPages), (_, index) => (
          <motion.div
            key={`page_${index + 1}`}
            className="shadow-lg w-full max-w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Page
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="max-w-full"
              width={containerWidth > 0 ? Math.min(containerWidth - 32, 800) : undefined}
            />
          </motion.div>
        ))}
      </Document>
    </div>
  );
}
