import React from 'react';
import { Form, Card, Icon, Button } from 'semantic-ui-react';

class Song extends React.Component {
  state = { edit: false }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, title, duration } = this.state;
    const song = { id: id, title, duration };
    this.props.updateSong(id);
  }

  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({ edit: !edit })
  }

  editSong = () => {
    const { id, title, duration } = this.props

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input defaultValue={ title } />
          <Form.Input defaultValue={ duration } />
        </Form.Group>
        <Button className='ui red button' type="button" onClick={this.toggleEdit}>Cancel</Button>
        <Button className='ui teal button' type='submit'>Save</Button>
      </Form>
    )
  }

  showSong = () => {
    const { id, title, duration } = this.props

    return (
      <div>
        <Card color='yellow'>
          <Card.Content>
            <h3>{ title }</h3>
            <hr />
            <div>
              <Icon name='clock' />
              { duration }
            </div>
          </Card.Content>
        </Card>
        <Button className='ui red button' onClick={() => this.props.destroySong(id)}>Delete</Button>
        <Button className='ui blue button' onClick={this.toggleEdit}>Update</Button>
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.state.edit ? this.editSong() : this.showSong() }
      </div>
    )
  }
}

export default Song;
