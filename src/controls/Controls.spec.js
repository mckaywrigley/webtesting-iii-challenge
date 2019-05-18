import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Controls from "./Controls";

describe("<Controls />", () => {
  it("displays component", () => {
    render(<Controls />);
  });

  it("renders closed and locked toggle buttons", () => {
    const { getByText } = render(<Controls />);

    getByText(/close gate/i);
    getByText(/lock gate/i);
  });

  it("toggles closed and locked status when clicked", () => {
    const toggleClosed = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleClosed} />);

    const button = getByText(/close gate/i);
    fireEvent.click(button);

    expect(toggleClosed).toBeCalledTimes(1);
  });

  it("disables open/closed button if locked", () => {
    const { getByText } = render(<Controls locked={true} />);

    const button = getByText(/close gate/i);

    expect(button).toBeDisabled();
  });

  it("disables lock/unlock button if open", () => {
    const { getByText } = render(<Controls closed={false} />);

    const button = getByText(/lock gate/i);

    expect(button).toBeDisabled();
  });
});
