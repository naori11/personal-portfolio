import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual<typeof import("framer-motion")>(
    "framer-motion",
  );

  return {
    ...actual,
    useInView: () => true,
    useReducedMotion: () => true,
  };
});

import {
  advanceTerminalStep,
  getTerminalDelay,
  TerminalPreview,
} from "./TerminalPreview";

describe("TerminalPreview", () => {
  it("defines the complete sequence timing", () => {
    expect([0, 1, 2, 3, 4].map(getTerminalDelay)).toEqual([
      1500,
      1200,
      800,
      1000,
      10000,
    ]);
  });

  it("advances to success and then restarts", () => {
    expect(advanceTerminalStep(0)).toBe(1);
    expect(advanceTerminalStep(3)).toBe(4);
    expect(advanceTerminalStep(4)).toBe(0);
  });

  it("renders the final state when reduced motion is requested", () => {
    render(<TerminalPreview />);

    expect(
      screen.getByLabelText("Deployment pipeline terminal"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Plan: 12 to add, 0 to change, 0 to destroy."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Infrastructure synced successfully."),
    ).toBeInTheDocument();
  });
});
