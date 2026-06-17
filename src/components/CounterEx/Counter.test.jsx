import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("renders increment button", () => {
  render(<Counter />);

  expect(
    screen.getByText("Increment")
  ).toBeInTheDocument();
});