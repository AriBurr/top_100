import React from 'react';
import { Input, Card, Form, Icon, Button } from 'semantic-ui-react';

class Song extends React.Component {
  state = { edit: false, title: this.props.title, duration: this.props.duration, id: this.props.id }

  toggleEdit = (cancel = false) => {
    const { edit, title, duration } = this.state;
    if (cancel) this.setState({ title: title, duration: duration })
    this.setState({ edit: !edit })
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, duration, id } = this.state
    const song = { title, duration, id };
    this.props.updateSong(song);
    this.toggleEdit();
  }

  editSong = () => {
    const { id, title, duration } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Input name='title' defaultValue={ title } onChange={this.handleChange} />
          <Input name='duration' defaultValue={ duration } onChange={this.handleChange} />
        </Form.Group>
        <Button className='ui red button' type="button" onClick={() => this.toggleEdit(true)}>Cancel</Button>
        <Button className='ui teal button' type="submit">Save</Button>
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
