import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PrevButton from '../PrevButton';

test('renders PrevButton component', () => {
  const { getByRole } = render(<PrevButton onClick={() => {}} />);
  const prevButton = getByRole('button', { name: 'Prev' });
  expect(prevButton).toBeTruthy();
});

test('PrevButton has correct text', () => {
  const { getByRole } = render(<PrevButton onClick={() => {}} />);
  const prevButton = getByRole('button', { name: /Prev/i });
  expect(prevButton).toBeTruthy();
});

test('calls onClick when PrevButton is clicked', () => {
  const onClickMock = jest.fn();
  const { getByRole } = render(<PrevButton onClick={onClickMock} />);
  const prevButton = getByRole('button', { name: 'Prev' });
  fireEvent.click(prevButton);
  expect(onClickMock).toHaveBeenCalled();
});