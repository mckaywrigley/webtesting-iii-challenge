import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";

import Display from "./Display";

describe("<Display />", () => {
  it("displays component", () => {
    render(<Display />);
  });

  it("displays locked if locked, else unlocked", () => {});

  it("displays closed if closed, else open", () => {});

  it("uses red-led class when locked or closed", () => {});

  it("uses green-led class when unlocked or open", () => {});
});
