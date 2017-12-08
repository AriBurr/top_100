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

  render() {
    return (
      <div className='ui container'>
        <SongForm createSong={this.createSong} />
        <SongList songs={this.state.songs} />
      </div>
    );
  }
}

export default App;
