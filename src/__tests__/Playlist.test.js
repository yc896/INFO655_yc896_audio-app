import React from 'react';
import { render, act, fireEvent, screen } from '@testing-library/react';
import Playlist from '../Playlist';

describe('Playlist Component', () => {
  test('renders Playlist with non-integer year in a Song', () => {
    const playlistData = [
      {
        title: 'Test Song',
        artist: 'Test Artist',
        year: 'InvalidYear', 
      },
    ];

    act(() => {
      render(<Playlist playlistData={playlistData} />);
    });

  });

  test('renders Playlist with a valid Song', () => {
    const playlistData = [
      {
        title: 'Valid Song',
        artist: 'Valid Artist',
        year: 2002, 
      },
    ];

    act(() => {
      render(<Playlist playlistData={playlistData} />);
    });


  });

  test('renders Playlist without Season attribute in a Podcast', () => {
    const playlistData = [
      {
        episode: 1,
        episodeTitle: 'Test Episode',
      },
    ];

    act(() => {
      render(<Playlist playlistData={playlistData} />);
    });

  });
  test('calls onAudioDoubleClick when an item is double-clicked', () => {
    const mockData = [
      {
        title: 'Test Song',
        artist: 'Test Artist',
        year: 2022,
      },
      {
        episode: 1,
        episodeTitle: 'Test Episode',
      },
    ];

    const mockDoubleClickHandler = jest.fn();

    act(() => {
      render(<Playlist playlistData={mockData} onAudioDoubleClick={mockDoubleClickHandler} />);
    });

    const firstItem = screen.getByText('Test Song');
    const secondItem = screen.getByText('Test Episode');

    
    fireEvent.doubleClick(firstItem);

    
    expect(mockDoubleClickHandler).toHaveBeenCalledWith(mockData[0]);

    fireEvent.doubleClick(secondItem);

    expect(mockDoubleClickHandler).toHaveBeenCalledWith(mockData[1]);
  });

  test('renders Playlist without Season attribute in a Podcast', () => {
    // Mock data for a podcast without the season attribute
    const playlistData = [
      {
        episode: 1,
        episodeTitle: 'Test Episode',
      },
    ];

    act(() => {
      render(<Playlist playlistData={playlistData} />);
    });

    expect(screen.getByText('Test Episode')).toBeTruthy();

   
  });

  test('renders Playlist with a valid Song', () => {
    // Mock data for a valid song
    const playlistData = [
      {
        title: 'Valid Song',
        artist: 'Valid Artist',
        year: 2002,
      },
    ];

    act(() => {
      render(<Playlist playlistData={playlistData} />);
    });

  
    expect(screen.getByText('Valid Song')).toBeTruthy();


  });

});
