import React from 'react';
import { render, screen } from '@testing-library/react';
import Podcast from '../Podcast';

test('renders Podcast component without Season attribute', () => {
  const testData = {
    podcast: 'Test Podcast',
    episodeTitle: 'Test Episode',
    episode: '1', 
  };

  render(
    <Podcast
      podcast={testData.podcast}
      episodeTitle={testData.episodeTitle}
      episode={testData.episode}
    />
  );


  expect(screen.queryByText(`${testData.podcast}: ${testData.episodeTitle}`)).toBeTruthy();
  expect(screen.queryByText(`Episode ${testData.episode}`)).toBeTruthy();
});


test('renders Podcast component with missing data', () => {
  render(<Podcast episodeTitle="Unknown Podcast" />);
  
 
  const podcastComponent = screen.getByRole('heading', { name: 'Unknown Podcast' });
  expect(podcastComponent).toBeTruthy();
});

test('renders Podcast component with false data attributes', () => {
  render(<Podcast podcast="falsePodcast" episodeTitle="Unknown Podcast" season="falseSeason" episode="falseEpisode" />);

  
  const isPodcastTitleVisible = () => screen.getByRole('heading', { name: /Unknown Podcast/ });
  const isEpisodeDetailsVisible = () => screen.getByText(/Season falseSeason Episode falseEpisode/);

 
  expect(isPodcastTitleVisible()).toBeTruthy();
  expect(isEpisodeDetailsVisible()).toBeTruthy();
});
