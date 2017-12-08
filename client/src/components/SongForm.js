import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class SongForm extends React.Component {
  state = { id: 1, title: '', duration: 0 }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, title, duration } = this.state;
    const song = { id: id, title, duration };
    this.setState({ id: id + 1, title: '', duration: 0.0 })
    this.props.createSong(song);
  }

  render () {
    const { title, duration } = this.state;

    return (
      <div>
        <h1> Top 100 </h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input label='Title' name='title' value={ title } onChange={this.handleChange} placeholder='Title' />
            <Form.Input label='Duration' name='duration' value={ duration } onChange={this.handleChange} placeholder='Duration 0.0s' />
          </Form.Group>
            <Button className='ui teal button' type='submit'>Submit</Button>
        </Form>
        <hr />
      </div>
    )
  }
}

export default SongForm;
