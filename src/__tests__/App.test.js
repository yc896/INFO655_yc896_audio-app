import React from 'react';
import {  fireEvent, queryAllByTestId, render, waitFor } from '@testing-library/react';
import App from '../App';

test('renders app header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Drexel Music/i);
  expect(headerElement).toBeTruthy();
});

test('renders shuffle button', () => {
  const { getByText } = render(<App />);
  const shuffleButton = getByText(/Shuffle/i);
  expect(shuffleButton).toBeTruthy();
});

test('renders prev button', () => {
  const { getByText } = render(<App />);
  const prevButton = getByText(/Prev/i);
  expect(prevButton).toBeTruthy();
});

test('renders play/pause button', () => {
    const { getAllByText } = render(<App />);
    const playPauseButtons = getAllByText(/Play/i);
    expect(playPauseButtons.length).toBeGreaterThan(0);
  });

test('renders next button', () => {
  const { getByText } = render(<App />);
  const nextButton = getByText(/Next/i);
  expect(nextButton).toBeTruthy();
});

test('clicking on shuffle button shuffles playlist', () => {
    const { getByText, queryAllByTestId } = render(<App />);
    const shuffleButton = getByText(/Shuffle/i);
    fireEvent.click(shuffleButton);
  
    const trackElements = queryAllByTestId('track');
    const initialTracks = trackElements.map(track => track.textContent);
    const shuffledTracks = trackElements.map(track => track.textContent);
    // your assertions
  });