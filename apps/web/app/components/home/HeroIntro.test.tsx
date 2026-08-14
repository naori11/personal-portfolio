import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("./TerminalPreview", () => ({
  TerminalPreview: () => <div>Terminal preview</div>,
}));

import { HeroIntro } from "./HeroIntro";

describe("HeroIntro", () => {
  it("communicates backend and delivery positioning", () => {
    render(<HeroIntro onOpenResume={vi.fn()} />);

    expect(
      screen.getByText("Backend engineer / DevOps builder"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /backend systems\. reliable delivery\./i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(
      screen.getByAltText("Portrait of Juvan Emanuel Paulo"),
    ).toHaveAttribute("src", expect.stringContaining("image.jpg"));
    expect(screen.queryByText("Available for Work")).not.toBeInTheDocument();
  });

  it("passes the resume trigger element to the page", () => {
    const onOpenResume = vi.fn();
    render(<HeroIntro onOpenResume={onOpenResume} />);

    fireEvent.click(screen.getByRole("button", { name: "View resume" }));

    expect(onOpenResume).toHaveBeenCalledOnce();
    expect(onOpenResume.mock.calls[0]?.[0]).toBeInstanceOf(HTMLButtonElement);
  });
});
