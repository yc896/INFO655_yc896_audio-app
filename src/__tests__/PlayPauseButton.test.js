import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayPauseButton from '../PlayPauseButton';

test('calls onClick when PlayPauseButton is clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<PlayPauseButton isPlaying={false} onClick={onClickMock} />);
  
  
  fireEvent.click(getByText('Play')); // Simulating on the "Play" button
  
  expect(onClickMock).toHaveBeenCalled();
});

test('displays "Play" text when isPlaying is false', () => {

  const { getByText } = render(<PlayPauseButton isPlaying={false} onClick={() => {}} />);
  
  
  expect(getByText('Play')).toBeTruthy(); // Checking if the button display "Play" text
});

test('displays "Pause" text when isPlaying is true', () => {
  const { getByText } = render(<PlayPauseButton isPlaying={true} onClick={() => {}} />);
  
  
  expect(getByText('Pause')).toBeTruthy(); // Checking if the button displayS "Pause" text
});

test('calls onClick when PlayPauseButton is clicked while playing', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<PlayPauseButton isPlaying={true} onClick={onClickMock} />);
  
  fireEvent.click(getByText('Pause'));
  

  expect(onClickMock).toHaveBeenCalled();
});

test('calls onClick when PlayPauseButton is clicked while paused', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<PlayPauseButton isPlaying={false} onClick={onClickMock} />);
  

  fireEvent.click(getByText('Play'));
  

  expect(onClickMock).toHaveBeenCalled();
});