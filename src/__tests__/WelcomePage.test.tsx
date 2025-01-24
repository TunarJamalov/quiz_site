
import WelcomePage from "../components/WelcomePage";
import { cleanup, render } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";
import { afterEach, describe, it } from "vitest";
import React from "react";
afterEach(cleanup);

describe("Welcome Page", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <WelcomePage />
      </Router>
    );
  });
});
