import React from 'react';
import { Row, Col } from 'reactstrap';

const Display = (props) => {
  return (
    <div>
      <Row className="my-4">
        <h1>This is my test for Textio!</h1>
      </Row>
      <Row>
        <Col>
          <h3>Display</h3>
          <p id="display">{props.text}</p>
        </Col>
      </Row>
    </div>
  );
}

export default Display;
