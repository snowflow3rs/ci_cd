/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Page from './page'; // Adjust the path according to your file structure


it("App Router: Works with dynamic route segments", () => {


  render(<Page params={{ slug: "Test" }} />);

  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});
it("App Router: did it have test", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByText(/fack/i)).toBeInTheDocument();
});