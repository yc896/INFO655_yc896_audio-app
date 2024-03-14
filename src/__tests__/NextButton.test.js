import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NextButton from '../NextButton';

test('renders NextButton component', () => {
  const { getByText } = render(<NextButton onClick={() => {}} />);
  const nextButton = getByText('Next');
  expect(nextButton).toBeTruthy();
});

test('calls onClick when NextButton is clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<NextButton onClick={onClickMock} />);
  
  fireEvent.click(getByText('Next'));
  
  expect(onClickMock).toHaveBeenCalled();
});

test('NextButton has correct text', () => {
  const { getByRole } = render(<NextButton onClick={() => {}} />);

  const nextButton = getByRole('button', { name: 'Next' });

  expect(nextButton).toBeTruthy();
});