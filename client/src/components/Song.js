import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const Song = ({ id, title, duration }) => (
  <div>
    <Card>
      <Card.Content>
        {title}, {duration}
      </Card.Content>
    </Card>
  </div>
)

export default Song;
