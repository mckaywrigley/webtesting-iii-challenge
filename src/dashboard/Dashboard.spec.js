import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("displays component", () => {
    render(<Dashboard />);
  });

  it("shows controls and display", () => {});
});
