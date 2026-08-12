import { describe, expect, it } from "vitest";
import {
  capabilities,
  featuredProject,
  heroStack,
  supportingProjects,
} from "./home-content";

describe("homepage content", () => {
  it("uses the real portfolio project as the flagship", () => {
    expect(featuredProject.title).toBe("Cloud Portfolio IaC");
    expect(featuredProject.technologies).toEqual([
      "Next.js",
      "Turborepo",
      "GitHub Actions",
      "Azure Bicep",
      "Azure Static Web Apps",
    ]);
    expect(featuredProject.pipeline.map((step) => step.label)).toEqual([
      "Push to main",
      "Build static export",
      "Deploy artifact",
    ]);
  });

  it("promotes KidSync and Coffeetory as supporting work", () => {
    expect(supportingProjects.map((project) => project.title)).toEqual([
      "KidSync: Smart RFID Security",
      "Coffeetory POS",
    ]);
  });

  it("does not reintroduce fictional or unsupported content", () => {
    const content = JSON.stringify({
      featuredProject,
      supportingProjects,
      capabilities,
    });

    expect(content).not.toContain("Cloud Sentinel");
    expect(content).not.toContain("Firebase");
  });

  it("keeps the hero stack concise", () => {
    expect(heroStack).toEqual([
      "TypeScript",
      "Node.js",
      "Docker",
      "Azure",
      "Terraform",
    ]);
  });
});
