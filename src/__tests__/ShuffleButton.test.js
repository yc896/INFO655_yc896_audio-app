import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShuffleButton from '../ShuffleButton';

test('calls onClick when ShuffleButton is clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<ShuffleButton onClick={onClickMock} />);
  

  fireEvent.click(getByText('Shuffle'));

  expect(onClickMock).toHaveBeenCalled();
});

test('displays "Shuffle" text on the button', () => {

  const { getByText } = render(<ShuffleButton onClick={() => {}} />);
  

  expect(getByText('Shuffle')).toBeTruthy();
});


test('calls onClick when ShuffleButton is clicked multiple times', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<ShuffleButton onClick={onClickMock} />);
  

  fireEvent.click(getByText('Shuffle'));
  fireEvent.click(getByText('Shuffle'));
  fireEvent.click(getByText('Shuffle'));
  
 
  expect(onClickMock).toHaveBeenCalledTimes(3);
});