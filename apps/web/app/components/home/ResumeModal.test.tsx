import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/dynamic", () => ({
  default: () => function MockPdfViewer() {
    return <div data-testid="pdf-viewer">PDF viewer</div>;
  },
}));

import { ResumeModal } from "./ResumeModal";

describe("ResumeModal", () => {
  it("exposes accessible dialog semantics and a direct download", async () => {
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
    expect(screen.getByRole("link", { name: "Download resume" })).toHaveAttribute(
      "href",
      "/assets/resume.pdf",
    );
    expect(screen.getByTestId("pdf-viewer")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Close resume" })).toHaveFocus();
    });
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

    const download = screen.getByRole("link", { name: "Download resume" });
    const close = screen.getByRole("button", { name: "Close resume" });

    close.focus();
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Tab" });
    expect(download).toHaveFocus();

    download.focus();
    fireEvent.keyDown(screen.getByRole("dialog"), {
      key: "Tab",
      shiftKey: true,
    });
    expect(close).toHaveFocus();
  });
});
