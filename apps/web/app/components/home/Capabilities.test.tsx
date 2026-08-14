import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Capabilities } from "./Capabilities";

describe("Capabilities", () => {
  it("renders three capabilities with project evidence", () => {
    render(<Capabilities />);

    expect(
      screen.getByRole("heading", { name: "Infrastructure & delivery" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Cloud-native backend" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Connected systems & telemetry" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Coffeetory connects inventory/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/GitHub Actions, Azure Bicep/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/KidSync combines ESP32/i)).toBeInTheDocument();
  });
});
