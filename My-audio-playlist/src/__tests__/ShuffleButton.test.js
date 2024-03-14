import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShuffleButton from '../ShuffleButton';

test('calls onClick when ShuffleButton is clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<ShuffleButton onClick={onClickMock} />);
  
  // Simulate a click on the "Shuffle" button
  fireEvent.click(getByText('Shuffle'));
  
  // Check if onClickMock is called
  expect(onClickMock).toHaveBeenCalled();
});

test('displays "Shuffle" text on the button', () => {
  // Render ShuffleButton
  const { getByText } = render(<ShuffleButton onClick={() => {}} />);
  
  // Check if the button displays "Shuffle" text
  expect(getByText('Shuffle')).toBeTruthy();
});


test('calls onClick when ShuffleButton is clicked multiple times', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<ShuffleButton onClick={onClickMock} />);
  
  // Simulate multiple clicks on the "Shuffle" button
  fireEvent.click(getByText('Shuffle'));
  fireEvent.click(getByText('Shuffle'));
  fireEvent.click(getByText('Shuffle'));
  
  // Check if onClickMock is called the correct number of times
  expect(onClickMock).toHaveBeenCalledTimes(3);
});