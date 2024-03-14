import React from 'react';
import { render } from '@testing-library/react';
import Status from '../Status';

test('renders Status component with valid text', () => {
  const testStatusText = 'Test Status';
  const { getByTestId } = render(<Status statusText={testStatusText} />);
  const statusElement = getByTestId('status-element');

  // Check if the rendered component contains the expected text
  expect(statusElement.textContent).toContain(testStatusText);
});