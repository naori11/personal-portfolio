import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createRef } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/dynamic", () => ({
  default: () => function MockPdfViewer() {
    return <div data-testid="pdf-viewer">PDF viewer</div>;
  },
}));

import { ResumeModal } from "./ResumeModal";

function setDesktopViewport(matches: boolean) {
  const listeners = new Set<() => void>();

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: (_event: string, listener: () => void) => {
        listeners.add(listener);
      },
      removeEventListener: (_event: string, listener: () => void) => {
        listeners.delete(listener);
      },
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

describe("ResumeModal", () => {
  beforeEach(() => {
    setDesktopViewport(true);
  });

  it("exposes accessible dialog semantics and direct PDF links", async () => {
    const returnFocusRef = createRef<HTMLElement>();
    render(
      <ResumeModal
        open
        onClose={vi.fn()}
        returnFocusRef={returnFocusRef}
      />,
    );

    expect(screen.getByRole("dialog", { name: "View resume" })).toHaveAttribute(
      "aria-modal",
      "true",
    );

    const openPdf = screen.getByRole("link", { name: "Open PDF" });
    expect(openPdf).toHaveAttribute("href", "/assets/resume.pdf");
    expect(openPdf).toHaveAttribute("target", "_blank");
    expect(openPdf).toHaveAttribute("rel", "noopener noreferrer");

    const downloadPdf = screen.getByRole("link", { name: "Download PDF" });
    expect(downloadPdf).toHaveAttribute("href", "/assets/resume.pdf");
    expect(downloadPdf).toHaveAttribute("download", "Juvan_Paulo_Resume.pdf");

    expect(screen.getByTestId("pdf-viewer")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Close resume" })).toHaveFocus();
    });
  });

  it("uses native PDF guidance instead of the canvas on mobile", () => {
    setDesktopViewport(false);
    const returnFocusRef = createRef<HTMLElement>();

    render(
      <ResumeModal
        open
        onClose={vi.fn()}
        returnFocusRef={returnFocusRef}
      />,
    );

    expect(screen.queryByTestId("pdf-viewer")).not.toBeInTheDocument();
    expect(
      screen.getByText(
        "Open the PDF for readable text, zoom, search, and working links.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Open PDF" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Download PDF" })).toBeInTheDocument();
  });

  it("keeps the embedded PDF preview on desktop and tablet widths", () => {
    setDesktopViewport(true);
    const returnFocusRef = createRef<HTMLElement>();

    render(
      <ResumeModal
        open
        onClose={vi.fn()}
        returnFocusRef={returnFocusRef}
      />,
    );

    expect(screen.getByTestId("pdf-viewer")).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Open the PDF for readable text, zoom, search, and working links.",
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: "Resume preview" }),
    ).toBeInTheDocument();
  });

  it("closes on Escape and backdrop interaction", () => {
    const onClose = vi.fn();
    const returnFocusRef = createRef<HTMLElement>();
    render(
      <ResumeModal
        open
        onClose={onClose}
        returnFocusRef={returnFocusRef}
      />,
    );

    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByTestId("resume-backdrop"));
    expect(onClose).toHaveBeenCalledTimes(2);
  });

  it("locks body scrolling and restores focus after close", async () => {
    const trigger = document.createElement("button");
    document.body.appendChild(trigger);
    trigger.focus();

    const returnFocusRef = { current: trigger };
    const { rerender } = render(
      <ResumeModal
        open
        onClose={vi.fn()}
        returnFocusRef={returnFocusRef}
      />,
    );

    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <ResumeModal
        open={false}
        onClose={vi.fn()}
        returnFocusRef={returnFocusRef}
      />,
    );

    await waitFor(() => {
      expect(document.body.style.overflow).toBe("");
      expect(trigger).toHaveFocus();
    });

    trigger.remove();
  });

  it("wraps focus from the final control to the first control", async () => {
    const returnFocusRef = createRef<HTMLElement>();
    render(
      <ResumeModal
        open
        onClose={vi.fn()}
        returnFocusRef={returnFocusRef}
      />,
    );

    const openPdf = screen.getByRole("link", { name: "Open PDF" });
    const preview = screen.getByRole("region", { name: "Resume preview" });

    preview.focus();
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Tab" });
    expect(openPdf).toHaveFocus();

    openPdf.focus();
    fireEvent.keyDown(screen.getByRole("dialog"), {
      key: "Tab",
      shiftKey: true,
    });
    expect(preview).toHaveFocus();
  });
});
