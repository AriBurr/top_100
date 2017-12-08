import React from 'react';
import Song from './Song';

const SongList = ({ songs, updateSong, destroySong }) => (
  <div>
    { songs.map( song =>
      <Song
        key={song.id}
        {...song}
        updateSong={updateSong}
        destroySong={destroySong}
      />
    )}
  </div>
)

export default SongList;
