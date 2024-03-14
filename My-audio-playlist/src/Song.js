import React from 'react';

const Song = ({ title, artist, year }) => {
  return (
    <div className="song">
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Song;