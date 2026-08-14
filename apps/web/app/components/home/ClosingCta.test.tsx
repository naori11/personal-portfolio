import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ClosingCta } from "./ClosingCta";

describe("ClosingCta", () => {
  it("routes to contact and opens the resume", () => {
    const onOpenResume = vi.fn();
    render(<ClosingCta onOpenResume={onOpenResume} />);

    expect(
      screen.getByRole("link", { name: "Start a conversation" }),
    ).toHaveAttribute("href", "/contact");

    fireEvent.click(screen.getByRole("button", { name: "View resume" }));
    expect(onOpenResume).toHaveBeenCalledOnce();
    expect(onOpenResume.mock.calls[0]?.[0]).toBeInstanceOf(HTMLButtonElement);
  });
});
