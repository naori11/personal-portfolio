import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/dynamic", () => ({
  default: () =>
    function MockPdfViewer() {
      return <div>PDF viewer</div>;
    },
}));

vi.mock("framer-motion", async () => {
  const actual =
    await vi.importActual<typeof import("framer-motion")>("framer-motion");

  return {
    ...actual,
    useInView: () => true,
    useReducedMotion: () => true,
  };
});

import HomePage from "./page";

describe("HomePage", () => {
  it("renders the editorial information hierarchy", () => {
    render(<HomePage />);

    const headings = screen
      .getAllByRole("heading")
      .map((heading) => heading.textContent);

    expect(headings).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/Cloud-native backend/),
        "Systems shown through the work.",
        "Cloud Portfolio IaC",
        "What I build and how it connects.",
        "Need a DevOps, cloud, or automation engineer?",
      ]),
    );
    expect(screen.queryByText(/Cloud Sentinel/i)).not.toBeInTheDocument();
    expect(screen.queryByText("Available for Work")).not.toBeInTheDocument();
    expect(screen.queryByText("juvanpaulo1@gmail.com")).not.toBeInTheDocument();
  });

  it("opens the resume dialog from the hero", () => {
    render(<HomePage />);

    const [viewResumeButton] = screen.getAllByRole("button", {
      name: "View resume",
    });
    expect(viewResumeButton).toBeDefined();
    fireEvent.click(viewResumeButton!);

    expect(
      screen.getByRole("dialog", { name: "View resume" }),
    ).toBeInTheDocument();
  });
});
