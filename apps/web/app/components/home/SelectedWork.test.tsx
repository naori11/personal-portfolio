import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SelectedWork } from "./SelectedWork";

describe("SelectedWork", () => {
  it("presents Cloud Portfolio IaC as the flagship", () => {
    render(<SelectedWork />);

    expect(
      screen.getByRole("heading", { name: "Cloud Portfolio IaC" }),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Cloud Portfolio deployment flow"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "View repository" }),
    ).toHaveAttribute("href", "https://github.com/naori11/personal-portfolio");
  });

  it("renders the two supporting projects as compact articles", () => {
    render(<SelectedWork />);

    const supportingWork = screen.getByLabelText("Supporting projects");
    expect(
      within(supportingWork).getByRole("heading", {
        name: "KidSync: Smart RFID Security",
      }),
    ).toBeInTheDocument();
    expect(
      within(supportingWork).getByRole("heading", { name: "Coffeetory POS" }),
    ).toBeInTheDocument();
    expect(within(supportingWork).getAllByRole("link")).toHaveLength(2);
  });

  it("does not render the fictional Cloud Sentinel project", () => {
    render(<SelectedWork />);
    expect(screen.queryByText(/Cloud Sentinel/i)).not.toBeInTheDocument();
  });
});
