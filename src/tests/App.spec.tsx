import { render, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

test("Navbar visibility", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  await waitFor(
    () => {
      const title = screen.getByRole("heading", { name: "Mr. Johnny" });
      expect(title).toBeInTheDocument();
    },
    { timeout: 3000 }
  );
});

test("navigates to correct page when click the link in navbar", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  act(() => {
    const tshirtsLink = screen.getByText("T-shirts");
    tshirtsLink.click();
  });

  expect(screen.getByText("Tshirts")).toBeInTheDocument();

  act(() => {
    const pantsLink = screen.getByText("Pants");
    pantsLink.click();
  });

  expect(screen.getByText("Pants")).toBeInTheDocument();

  act(() => {
    const sneakersLink = screen.getByText("Accessories");
    sneakersLink.click();
  });

  expect(screen.getByText("Accessories")).toBeInTheDocument();
});
