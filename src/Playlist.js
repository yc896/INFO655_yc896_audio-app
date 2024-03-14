import React from 'react';
import Song from './Song';
import Podcast from './Podcast';
import './style.css';

const Playlist = ({ playlistData, onAudioDoubleClick }) => {
  return (
    <div className="playlist">
      <h2>Audio Playlist</h2>
      {playlistData.map((item, index) => (
        <div key={index} onDoubleClick={() => onAudioDoubleClick(item)} data-testid="track">
          {item.year !== undefined ? (
            <Song title={item.title} artist={item.artist} year={item.year} />
          ) : item.episodeTitle !== undefined ? (
            <Podcast
              season={item.season}
              episode={item.episode}
              episodeTitle={item.episodeTitle}  
            />
          ) : (
            <div>Unknown Audio Type</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Playlist;