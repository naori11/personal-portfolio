import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactPage from "./page";

describe("ContactPage", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders all required form inputs and submit button", () => {
    render(<ContactPage />);

    expect(screen.getByPlaceholderText("John Doe")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("john@domain.com")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Infrastructure Inquiry"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Briefly describe the objective..."),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message/i }),
    ).toBeInTheDocument();
  });

  it("handles successful form submission", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<ContactPage />);

    fireEvent.change(screen.getByPlaceholderText("John Doe"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("john@domain.com"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Infrastructure Inquiry"), {
      target: { value: "DevOps Contract" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Briefly describe the objective..."),
      {
        target: { value: "Let's build scalable infrastructure together." },
      },
    );

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Message transmitted successfully/i),
      ).toBeInTheDocument();
    });
  });

  it("handles API error response gracefully", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Email service temporarily unavailable" }),
    });

    render(<ContactPage />);

    fireEvent.change(screen.getByPlaceholderText("John Doe"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("john@domain.com"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Infrastructure Inquiry"), {
      target: { value: "Test" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Briefly describe the objective..."),
      {
        target: { value: "Hello" },
      },
    );

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Email service temporarily unavailable/i),
      ).toBeInTheDocument();
    });
  });

  it("handles network failure error", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network Error"));

    render(<ContactPage />);

    fireEvent.change(screen.getByPlaceholderText("John Doe"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("john@domain.com"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Infrastructure Inquiry"), {
      target: { value: "Test" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Briefly describe the objective..."),
      {
        target: { value: "Hello" },
      },
    );

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Network error. Please try again./i),
      ).toBeInTheDocument();
    });
  });
});
