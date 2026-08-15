import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { ThemeProvider } from "./ThemeProvider";

vi.mock("next/navigation", () => ({
  usePathname: () => "/projects",
}));

describe("Navbar", () => {
  it("renders navigation brand and main desktop routes", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>,
    );

    expect(screen.getByText("JUVAN.TECH")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("toggles mobile menu when clicking menu button", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>,
    );

    const mobileMenuButton = screen.getByLabelText(/toggle navigation menu/i);
    expect(mobileMenuButton).toBeInTheDocument();

    expect(screen.getByText("menu")).toBeInTheDocument();

    fireEvent.click(mobileMenuButton);

    expect(screen.getByText("close")).toBeInTheDocument();
  });

  it("toggles light and dark theme mode icon", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>,
    );

    const themeButton = screen.getByLabelText(/toggle theme/i);
    expect(themeButton).toBeInTheDocument();

    // Defaults to dark theme -> icon says light_mode
    expect(screen.getByText("light_mode")).toBeInTheDocument();

    fireEvent.click(themeButton);

    // Switched to light theme -> icon says dark_mode
    expect(screen.getByText("dark_mode")).toBeInTheDocument();
  });
});
