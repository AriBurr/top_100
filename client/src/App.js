import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import axios from 'axios';

class App extends React.Component {
  state = { songs: []  }

  componentDidMount(){
    this.fetchSongs()
  }

  fetchSongs = () => {
    axios.get('/api/songs')
      .then( res => this.setState({ songs: res.data }))
  }

  createSong = (song) => {
    axios.post('/api/songs', { song })
      .then( res => {
        const { songs } = this.state
        this.setState({ songs: [...songs, res.data]})
      })
  }

  updateSong = (song) => {
    axios.put(`/api/songs/${song.id}`, song )
      .then( res => {
        let songs = this.state.songs.map ( s => {
          if (s.id === song.id)
            return res.data;
          return s;
        });
        this.setState({ songs })
      })
  }

  destroySong = (id) => {
    axios.delete(`/api/songs/${id}`)
      .then( res => {
        const { songs } = this.state;
        this.setState({ songs: songs.filter( song => song.id !== id) })
      })
  }

  render() {
    return (
      <div className='ui container'>
        <SongForm createSong={this.createSong} />
        <SongList songs={this.state.songs}
                  destroySong={this.destroySong}
                  updateSong={this.updateSong}
        />
      </div>
    );
  }
}

export default App;
