import React from 'react';
import {
  Card, Button
} from 'react-bootstrap';

const News = (props) => {
  //const { title, description } = props.data;

  return (
    <div>
      <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
          {/* <Card.Title>{title}</Card.Title> */}
          <Card.Title>duifhsuifhujfh
          </Card.Title>
        {/* <Card.Text>
          {description}
        </Card.Text> */}
          <Card.Text>
          rfgwefgedfcdasjfhcdasfchdsahdashfdskdjsjckxzljvckldsjikdidsj
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default News;