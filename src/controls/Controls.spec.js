import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";

import Controls from "./Controls";

describe("<Controls />", () => {
  it("displays component", () => {
    render(<Controls />);
  });

  it("renders closed and locked toggle buttons", () => {});

  it("toggles closed and locked status when clicked", () => {});

  it("disables closed button if closed", () => {});

  it("disables locked button if open", () => {});
});
