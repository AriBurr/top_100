import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import axios from 'axios';

class App extends React.Component {
  state = { songs: []  }

  componentDidMount(){
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

  updateSong = (id) => {
    axios.put(`/api/songs/${id}`)
      .then( res => {
        let songs = this.state.songs.map ( song => {
          if (song.id === id) return res.data;
          return song;
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
                  updateSong={this.updateSong}
                  destroySong={this.destroySong}
        />
      </div>
    );
  }
}

export default App;
