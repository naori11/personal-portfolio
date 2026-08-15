import { describe, it, expect } from "vitest";
import { getTechBadgeStyle } from "./tech-badges";

describe("getTechBadgeStyle", () => {
  it("returns dark mode styles for a recognized technology", () => {
    const style = getTechBadgeStyle("DOCKER", "dark");
    expect(style.slug).toBe("docker");
    expect(style.bg).toContain("bg-[#2496ed]");
  });

  it("returns light mode styles for a recognized technology", () => {
    const style = getTechBadgeStyle("DOCKER", "light");
    expect(style.slug).toBe("docker");
    expect(style.text).toContain("text-[#115e9b]");
  });

  it("returns default dark style when given an unknown technology", () => {
    const style = getTechBadgeStyle("UNKNOWN_TECH", "dark");
    expect(style.slug).toBe("");
    expect(style.bg).toContain("var(--secondary-container)");
  });

  it("returns default light style when given an unknown technology", () => {
    const style = getTechBadgeStyle("UNKNOWN_TECH", "light");
    expect(style.slug).toBe("");
    expect(style.bg).toContain("var(--surface-container-low)");
  });
});
