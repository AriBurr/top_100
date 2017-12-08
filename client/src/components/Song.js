import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const Song = ({ id, title, duration, updateSong, destroySong }) => (
  <div>
    <Card>
      <Card.Content>
        {title}, {duration}
      </Card.Content>
    </Card>
    <Button className='ui red button' onClick={() => destroySong(id)}>Delete</Button>
    <Button className='ui blue button' onClick={() => updateSong(id)}>Update</Button>
  </div>
)

export default Song;
