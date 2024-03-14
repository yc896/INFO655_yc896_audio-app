import React from 'react';
import { render, screen } from '@testing-library/react';
import Song from '../Song';

test('renders Song component with string year as "Unknown"', () => {
  const testData = {
    title: 'Test Song',
    artist: 'Test Artist',
    year: 'InvalidYear',
  };

  render(<Song title={testData.title} artist={testData.artist} year={testData.year} />);

  expect(screen.getByText(testData.title)).toBeTruthy();
  expect(screen.getByText(`Artist: ${testData.artist}`)).toBeTruthy();

  expect(screen.queryByText('Year:')).toBeNull();
});
test('renders Song component with provided title, artist, and year', () => {
    const testData = {
      title: 'Back In Black',
      artist: 'acdc',
      year: 'Yash',
    };
  
    render(<Song title={testData.title} artist={testData.artist} year={testData.year} />);
  
   
    expect(screen.getByText(testData.title)).toBeTruthy();
    expect(screen.getByText(`Artist: ${testData.artist}`)).toBeTruthy();
    expect(screen.getByText(`Year: ${testData.year}`)).toBeTruthy();
  });

  test('renders Song component with provided title, artist, and year', () => {
    const testData = {
      title: 2002,
      artist: 'acdc',
      year: 'Yash',
    };
  
    render(<Song title={testData.title} artist={testData.artist} year={testData.year} />);
  
    
    expect(screen.getByText(testData.title)).toBeTruthy();
    expect(screen.getByText(`Artist: ${testData.artist}`)).toBeTruthy();
    expect(screen.getByText(`Year: ${testData.year}`)).toBeTruthy();
  });