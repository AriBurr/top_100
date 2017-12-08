import React from 'react';
import Song from './Song';

const SongList = ({ songs }) => (
  <div>
    { songs.map( song =>
      <Song key={song.id} {...song} />
    )}
  </div>
)

export default SongList;
